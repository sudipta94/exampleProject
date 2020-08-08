import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { IntermideateData, userSignUp } from 'src/app/models/registrationModels';
import { SubSink } from 'subsink';
import { LanguageService } from 'src/app/language/language.service';
@Component({
  selector: 'app-registration-second',
  templateUrl: './registration-second.component.html',
  styleUrls: ['./registration-second.component.scss']
})
export class RegistrationSecondComponent implements OnInit {
  presentAddress: FormGroup;
  permanentAddrtess: FormGroup;
  @Output() BackEvent= new EventEmitter();
  @Input() intermData$: Observable<IntermideateData>;
  @Output() UserSubmitData = new EventEmitter<userSignUp>()
  private subs = new SubSink();
  intermideateData: IntermideateData;
  constructor(public fb: FormBuilder, public languageService: LanguageService) { }

  ngOnInit() {
    this.subs.add(this.intermData$.subscribe(
      (data)=>{
        this.intermideateData= data
      }
    ))
    this.presentAddress = this.fb.group({
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      pin: ['', [Validators.required]],
    })
    this.permanentAddrtess = this.fb.group({
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      pin: ['', [Validators.required]],
    })
  }
  Back(){
    this.BackEvent.emit();
  }
  Submit(){
    var data: userSignUp ={
      parmanent_address: this.permanentAddrtess.controls['address'].value,
      email: this.intermideateData.email,
      first_name: this.intermideateData.first_name,
      last_name: this.intermideateData.last_name,
      password: this.intermideateData.password,
      parmanent_city: this.permanentAddrtess.controls['city'].value,
      parmanent_country: this.permanentAddrtess.controls['country'].value,
      parmanent_pin:  this.permanentAddrtess.controls['pin'].value,
      present_address: this.presentAddress.controls['address'].value,
      present_city: this.presentAddress.controls['city'].value,
      present_country: this.presentAddress.controls['country'].value,
      present_pin: this.presentAddress.controls['pin'].value,
    }
    console.log(data);
    this.UserSubmitData.emit(data)
  }
  ShowUsedUnusedCoupon(data: boolean){
    if(data){
      this.permanentAddrtess.patchValue({
        address: this.presentAddress.controls['address'].value,
        city: this.presentAddress.controls['city'].value,
        country: this.presentAddress.controls['country'].value,
        pin: this.presentAddress.controls['pin'].value,
      })
      this.permanentAddrtess.disable()
    }else{
      this.permanentAddrtess.enable();
      this.permanentAddrtess.reset()
    }
    
  }

}

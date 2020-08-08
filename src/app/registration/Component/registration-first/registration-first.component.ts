import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IntermideateData } from 'src/app/models/registrationModels';
import { LanguageService } from 'src/app/language/language.service';

@Component({
  selector: 'app-registration-first',
  templateUrl: './registration-first.component.html',
  styleUrls: ['./registration-first.component.scss']
})
export class RegistrationFirstComponent implements OnInit {
  signupform: FormGroup;
  @Output() nextEvent = new EventEmitter<IntermideateData>();
  @Output() backEvent= new EventEmitter();
  constructor(public fb: FormBuilder,  public languageService: LanguageService) { }

  ngOnInit() {
    this.signupform = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.email]],
      password: ['', [Validators.required]],
    })
  }
  next(){
    var data: IntermideateData={
      email: this.signupform.controls['email'].value,
      first_name: this.signupform.controls['first_name'].value,
      last_name: this.signupform.controls['last_name'].value,
      password: this.signupform.controls['password'].value,
    }
    this.nextEvent.emit(data);
  }
  back(){
    this.backEvent.emit();
  }
}

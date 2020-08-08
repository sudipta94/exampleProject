import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/models/loginModels';
import { LanguageService } from 'src/app/language/language.service';


@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.scss']
})
export class LoginMainComponent implements OnInit {
  LoginForm: FormGroup;
  @Output() SubmitData= new EventEmitter<UserLogin>();
  constructor(private fb: FormBuilder, private router: Router, public languageService: LanguageService) { }

  ngOnInit() {
    this.LoginForm = this.fb.group({
      user_name: ['',Validators.email],
      password: ['',Validators.required]
    });
  }
  onSubmit(){
    var data: UserLogin ={
      email: this.LoginForm.controls['user_name'].value,
      password: this.LoginForm.controls['password'].value
    }
    this.SubmitData.emit(data);
  }

}

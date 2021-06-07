import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  login:string;
  wrongPassword:boolean=false;

  constructor(private fb: FormBuilder, private router: Router,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.exists().subscribe(x => {
      if (x){
        this.login=x.login;
      }
      else {
        this.router.navigate(['/register']);
      }
    });

    this.form = this.fb.group({
      password: ''
    });
  }

  onSubmit(value){
    if (value.password !==''){
      this.loginService.login(value).subscribe(x=>{
        if(x){
          this.wrongPassword=false;
          this.router.navigate(['/']);
        }
        else{
          this.wrongPassword=true;
        }
      });
    }
    console.log('Podaj hasło');
  }

}

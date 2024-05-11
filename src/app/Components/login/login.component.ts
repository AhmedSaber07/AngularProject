import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
email:string;
password:string;
  constructor(private _userService:UserService,private router:Router)
{
this.email="";
this.password="";
}
Login()
{
    console.log(this.email,this.password);
this._userService.login(this.email,this.password);
this.router.navigate(['/Home']);
  }
}

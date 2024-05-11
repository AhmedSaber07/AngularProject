import { CommonModule } from '@angular/common';
import { UserService } from './../../../Services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule,RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{
  constructor(public _userService:UserService,private router:Router)
  {

  }
  Logout()
  {
    this._userService.logout();
this.router.navigate(['/Home']);
  }
}

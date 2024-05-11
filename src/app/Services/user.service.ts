import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isUserLoggedSubject : BehaviorSubject<boolean> ;
  constructor() { 
    this.isUserLoggedSubject = new BehaviorSubject<boolean>(this.isAuthenticated);
  }
get isAuthenticated():boolean
{
  return localStorage.getItem("token")?true:false;
}
get getToken(){
  return localStorage.getItem("token");
}
  login(email:string,password:string)
  {
    if(email.length>0&&password.length>0)
    {
      localStorage.setItem("token","sadwqiasd12e54ws");
      this.isUserLoggedSubject.next(true);
    }
  }
  logout()
  {
    localStorage.removeItem("token");
    this.isUserLoggedSubject.next(false);
  }
}

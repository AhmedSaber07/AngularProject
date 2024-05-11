import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  formGroup:FormGroup;
  passwordPattern:string='[A-Za-z0-9]{8,}$';
  namePattern:string='[A-Za-z]{3,}$';
  constructor(private formBuilder:FormBuilder){
    // this.formGroup = new FormGroup({
    //   firstName:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern(this.namePattern)]),
    //   lastName:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern(this.namePattern)]),
    //   email:new FormControl('',[Validators.required,Validators.email]),
    //   password:new FormControl('',[Validators.required,Validators.pattern(this.passwordPattern),Validators.minLength(8)]),
    // })
    this.formGroup = this.formBuilder.group({
      firstName:['',[Validators.required,Validators.minLength(3),Validators.pattern(this.namePattern)]],
      lastName:['',[Validators.required,Validators.minLength(3),Validators.pattern(this.namePattern)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern(this.passwordPattern),Validators.minLength(8)]],
      address:this.formBuilder.array([])
    })
  }

get firstName(){return this.formGroup.get('firstName');}
get lastName(){return this.formGroup.get('lastName');}
get email(){return this.formGroup.get('email');}
get password(){return this.formGroup.get('password');}
get address(){return this.formGroup.get('address') as FormArray}

newAddress()
{
  return this.formBuilder.group({
    city:['',[Validators.required,Validators.minLength(3)]],
    street:['',[Validators.required,Validators.minLength(5)]]
  })
}
AddAddress()
{
  this.address.push(this.newAddress())
}
RemoveAddress(index:number)
{
  this.address.removeAt(index);
}
}

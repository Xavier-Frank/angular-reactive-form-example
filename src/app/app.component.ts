import { Component } from '@angular/core';
// import {FormControl, FormGroup} from "@angular/forms";
import {FormBuilder, Validators} from "@angular/forms";
import {PasswordValidator} from "./validators/password.validator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //get form controls
  get userName(){
    return this.registrationForm.get('userName');
  }
  get password(){
    return this.registrationForm.get('password');
  }

  constructor(private formBuilder: FormBuilder) {
  }
  registrationForm = this.formBuilder.group({
    userName : ['', [Validators.required, Validators.minLength(3)]],
    password : ['',[Validators.required, Validators.minLength(3)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(3)]],
    address: this.formBuilder.group({
      address: [''],
      city: [''],
      postalCode: ['']
    })
  }, {validator: PasswordValidator});

  // registrationForm = new FormGroup(
  //   {
  //     userName: new FormControl(''),
  //     password: new FormControl(''),
  //     confirmPassword: new FormControl(''),
  //     address: new FormGroup({
  //       city : new FormControl(''),
  //       county : new FormControl(''),
  //       postalCode : new FormControl('')
  //     })
  //   }
  // );
  title = 'reactive-forms';
  //
  loadData() {
  //   //.with .setValue maintain the structure of the registration form model
  //   // this.registrationForm.setValue({
  //   //   userName: 'Charles',
  //   //   password: 'stringify',
  //   //   confirmPassword: 'stringify',
  //   //   address: {
  //   //     city: 'City',
  //   //     county: 'Nairobi',
  //   //     postalCode: '007'
  //   //   }
  //   //   });
  //
  //   //with .patch value only update sections of the code
    this.registrationForm.patchValue({
      userName: 'Charles',
      password: 'stringify',
      confirmPassword: 'stringify',
      // address: {
      //   city: 'City',
      //   county: 'Nairobi',
      //   postalCode: '007'
      // }
      });
  }
}

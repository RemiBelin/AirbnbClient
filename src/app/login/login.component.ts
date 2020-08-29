import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private listing:ListingService) { }
 
  loginForm = new FormGroup({
       username: new FormControl('user'),
       password: new FormControl('password')
  });
 
  ngOnInit(): void {
  }

  onSubmitLogin()
  {
    console.log("Starting onSubmitLogin MODIF LOCAL");

    this.listing.login(this.loginForm.value).subscribe(result => console.log("result=" + result));
 
  }

}

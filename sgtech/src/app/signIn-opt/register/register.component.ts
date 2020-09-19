import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import{ LoginComponent } from './../../signIn-opt/login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<RegisterComponent>,private router: Router,public Dialog:MatDialog){}


  ngOnInit(): void {
  }

  openLoginForm()
  {
    this.dialogRef.close();
    this.Dialog.open(LoginComponent, {width: '650px', height: '490px', });
  }

  Register(formDetail:NgForm)
  {
    console.log(formDetail.value)
  }
}

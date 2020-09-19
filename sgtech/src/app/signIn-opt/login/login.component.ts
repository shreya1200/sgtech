import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import{ RegisterComponent } from './../../signIn-opt/register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(public dialogRef:MatDialogRef<LoginComponent>,private router: Router,public Dialog:MatDialog){}

  ngOnInit(): void {
  }

  openRegister()
  {
    this.dialogRef.close();
    this.Dialog.open(RegisterComponent, {width: '650px', height: '490px', });
  }
 
}


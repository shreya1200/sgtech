import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import{ LoginComponent } from './../../signIn-opt/login/login.component';
import{ RegisterComponent } from './../../signIn-opt/register/register.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  Form:boolean=false;
  constructor(public dialog: MatDialog) { }

  openLoginForm() {
      this.dialog.closeAll();
    this.dialog.open(LoginComponent, {width: '650px', height: '490px', });
    //this.Form = true;
  }

  openRegisterForm() {
    {
      this.dialog.closeAll();
    }
    this.dialog.open(RegisterComponent, {width: '650px', height: '550px', });
  }

  ngOnInit() {
  }

}

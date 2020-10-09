import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'
// import * as mail from 'src/email.js';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
  
})


export class ContactComponent implements OnInit {
  FormData: FormGroup;
  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Phone: new FormControl('', [Validators.required]),
      Comment: new FormControl('', [Validators.required])
    });
  }
  onSubmit(FormData) {
    console.log(FormData);
    // mail.send_email(FormData.Email,FormData.Comment,FormData.Fullname,FormData.Phone);
  }

}

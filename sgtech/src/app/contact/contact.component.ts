import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'
import { Subscription } from 'rxjs';
import { MailService } from '../services/mail.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
  
})


export class ContactComponent implements OnInit {

  FormData: FormGroup;
  public subscription: Subscription;
  
  constructor(private sendmailservice: MailService, private builder: FormBuilder, ) { }

  ngOnInit(): void {
    //scroll to top
    $(document).ready(function(){
      $(document).scrollTop(0);
    })

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
    this.subscription = this.sendmailservice.sendEmail(this.FormData.value).

    subscribe(data => {
      //let msg = data['message']
      //alert(msg);
      console.log(data, "success");
    }, error => {
      //console.error(error, "error");
    } );

    this.FormData.reset();
  }

}

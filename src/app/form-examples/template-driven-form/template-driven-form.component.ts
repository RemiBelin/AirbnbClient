import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  constructor() {  }

  ngOnInit(): void {
  }

  model: any = {};
  email:any = {};

  onSubmit() {
   
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));

  }

  checkForm(form)
  {
    console.log("email=" + this.email);
    //console.log("f=" + this.f);
    console.log("form=" + form);
    
  }
}

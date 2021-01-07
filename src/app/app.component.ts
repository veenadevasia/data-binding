import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message : string;
  title = 'Data binding using string interpolation';
  imagetitle = 'Data binding using property binding';
  imageUrl = "assets/property.jpg";

  studentDetails = [
    {id:"1",name:"Praveen",email:"praveen@gmail.com",gender:"male"},
    {id:"2",name:"Sona",email:"sona@gmail.com",gender:"female"},
    {id:"3",name:"Abin",email:"abin@gmail.com",gender:"male"},
    {id:"4",name:"Andrea",email:"andrea@gmail.com",gender:"female"},
    {id:"5",name:"Albert",email:"albert@gmail.com",gender:"male"},
    {id:"6",name:"Ravi",email:"ravi@gmail.com",gender:"male"},
    {id:"7",name:"Sruthi",email:"sruthi@gmail.com",gender:"female"},
    {id:"8",name:"Roshni",email:"roshni@gmail.com",gender:"male"},
    {id:"9",name:"Amir",email:"amir@gmail.com",gender:"male"},
    {id:"10",name:"Sheethal",email:"sheethal@gmail.com",gender:"female"}
  ]

onClick(){
this.message = "Data binding using event binding";
alert('Button Clicked!');
}

}

import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import {Router} from '@angular/router'

@Component({
  selector: 'app-updatedetails',
  templateUrl: './updatedetails.component.html',
  styleUrls: ['./updatedetails.component.css']
})
export class UpdatedetailsComponent implements OnInit {
  employeeDetails: FormGroup;
  id:number;
  datas:any=[];
  products=[];
  productObj:object={};
  empName:string;
  empCode:string;
  empEmail:string;
  
  constructor(private route:ActivatedRoute,private http:HttpClient,private router:Router) { }

  ngOnInit() {

 this.route.params.subscribe(par=>{
     this.id=+par['id'];
 })



 this.http.get("http://localhost:1234/details").subscribe(data=>{
  this.products=data as [];
  for(var i=0;i<this.products.length;i++)
  {
    if(parseInt(this.products[i].id) === this.id)
    {
      this.datas=this.products[i];
       this.empName=this.datas.Name;
       this.empCode=this.datas.Code;
       this.empEmail=this.datas.Email;      
      break;
    }
  }
  }     
,
(err: HttpErrorResponse) => {
  console.log (err.message);
});


 //console.log(this.id);


    this.employeeDetails = new FormGroup({
      // ID: new FormControl('', Validators.required),
      empName: new FormControl('', Validators.required),
      empEmail: new FormControl('', Validators.required),
      empCode: new FormControl('', Validators.required),
        
      
      // email: new FormControl('', [Validators.required, Validators.pattern(this.EMAIL_REGEX)])         
    });
   // this.employeeDetails.get(this.empName).setValue(this.empName);
  }

  onUpdate(formvalue)
  {
    this.productObj={
      "Name":this.employeeDetails.value.empName ,
      "Email":this.employeeDetails.value.empEmail,
      "Code":this.employeeDetails.value.empCode
    };
    this.http.put("http://localhost:1234/details/"+this.id,this.productObj).subscribe();
    this.router.navigate(['/RegisteredEmployee']);
  }
  

}

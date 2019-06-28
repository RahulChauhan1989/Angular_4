import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import {GithubUser} from './Github';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {
  title = 'ParentChildProject';
  childdata='';
  avatar_url: string;
  bio: string;
  id: number;
  name: string;
  myarray : any[];
  employeeDetails: FormGroup;
  details:string[];
  detailsObj:object=[];
  EMAIL_REGEX = "[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*"; 
  Success:boolean=false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // const url = 'https://api.github.com/users/tj';
    // // Make the GET HTTP request:
    // this.http.get(url)
    //   .subscribe((data: GithubUser) => {      
    //      this.name=data.name,
    //       this.id=data.id,
    //       this.bio=data.bio,
    //      this.avatar_url=data.avatar_url         
    //   });
      this.employeeDetails = new FormGroup({
        // ID: new FormControl('', Validators.required),
        empName: new FormControl('', Validators.required),
        empEmail: new FormControl('', Validators.required),
        empCode: new FormControl('', Validators.required)       
        
        // email: new FormControl('', [Validators.required, Validators.pattern(this.EMAIL_REGEX)])         
      });
  
    //   this.http.get("http://localhost:1234/details").subscribe(data=>{
    //     this.details=data as string[];        
    //   },
    //   (err: HttpErrorResponse) => {
    //     console.log (err.message);
    //   });

    }
    
//   OnClicked(value:string)
//   {
//     this.childdata = value;
//   } 
//   txtValue:string;
//   setvalue(myvalue)
//   {
//    this.txtValue=myvalue;
//   } 
//  public Filterempdata:any[]=[];

//   departments:Department[]=[
//    {id:1,name:'IT'},{id:2,name:'Finance'},{id:3,name:'Accounts'},{id:4,name:'Admin'}
//   ];
//   employees:Employee[]=[
//  {eid:1,empname:"Rahul1",did:1},
//  {eid:2,empname:"Rahul2",did:2},
//  {eid:3,empname:"Rahul3",did:1},
//   ];
//   changedata($event)
//   {
//     this.Filterempdata.splice(0);
//     this.Filterempdata=this.employees.filter(x=>x.did==$event.target.value);
//   }
//   registerUser(form34:any)
//  {
//   console.log(form34);
  
  
//  }
onSubmit(formvalue)
  {
    // event.preventDefault();
    console.log(formvalue);
    console.log(this.employeeDetails.value.ID); 
    this.detailsObj={
      // "ID":this.registrationForm.value.ID,
      "Name":this.employeeDetails.value.empName ,
      "Email":this.employeeDetails.value.empEmail,
      "Code":this.employeeDetails.value.empCode
    }
    
   // const body = JSON.stringify(user);
    // const header = new HttpHeaders();
    // header.append("Content-Type","application/json;charset=UTF-8");
    this.http.post("http://localhost:1234/details",this.detailsObj).subscribe(data=>
    {
      this.Success=true;
      this.employeeDetails.reset();
      
    });
    // this.http.post('./assets/details.json', {
    //   ID: this.registrationForm.value.ID,
    //   Name:this.registrationForm.value.Name,
    //   Department: this.registrationForm.value.Department,
    //   HODName:this.registrationForm.value.HOD,
    // })this.myForm.resetForm();
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //     },
    //     err => {
    //       console.log("Error occured");
    //     }
    //   );

}


    
  }
 


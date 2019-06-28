import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registered-employee',
  templateUrl: './registered-employee.component.html',
  styleUrls: ['./registered-employee.component.css']
})
export class RegisteredEmployeeComponent implements OnInit {
  details:string[];
  constructor(private http:HttpClient) { }

  ngOnInit(){

    this.getRecord();
  

  }
getRecord()
{
  this.http.get("http://localhost:1234/details").subscribe(data=>{
    this.details=data as string[];        
  },
  (err: HttpErrorResponse) => {
    console.log (err.message);
  });
}


  deleteRecord(id:number)
{
  console.log(id);
  if(confirm("Are you sure to delete the record ??"))
  {
  this.http.delete("http://localhost:1234/details"+"/"+ id).subscribe();
  this.getRecord();
  }
}

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { childcomponentComponent } from './childcomponent.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RegisteredEmployeeComponent } from './registered-employee.component';
import {RouterModule,Routes} from '@angular/router';
import { RegisterEmployeeComponent } from './register-employee.component';
import { UpdatedetailsComponent } from './updatedetails.component';




const routes:Routes=[
  {path:'RegisteredEmployee',component:RegisteredEmployeeComponent},
  {path:'RegisterEmployee',component:RegisterEmployeeComponent},
  {path:'Update/:id',component:UpdatedetailsComponent},
  {path:'',redirectTo:'RegisterEmployee',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    childcomponentComponent,
    RegisteredEmployeeComponent,
    RegisterEmployeeComponent,
    UpdatedetailsComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule ,
    ReactiveFormsModule ,
    RouterModule.forRoot(routes),
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

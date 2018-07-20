import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { JsondataComponent } from './jsondata/jsondata.component';
import { UserService } from './user.service';
import { stylePipe } from './stylepipe.pipe';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path: 'employees/:id', component: EmployeeComponent},
  {path: 'jsondata', component: JsondataComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule, 
                  HttpClientModule,
                  RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, EmployeeListComponent, EmployeeComponent, JsondataComponent, stylePipe, HomeComponent, PageNotFoundComponent ],
  providers: [ EmployeeService, UserService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

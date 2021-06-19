import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ListEmployeesComponent } from './employee/list-employees/list-employees.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';






@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    ListEmployeesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


    AngularFireModule.initializeApp({


          apiKey: "AIzaSyA-AAZ04dNHWMbzMhgfOKPIcPvrK9LCG4A",
              authDomain: "webapp-458b6.firebaseapp.com",
              databaseURL: "https://webapp-458b6-default-rtdb.firebaseio.com",
              projectId: "webapp-458b6",
              storageBucket: "webapp-458b6.appspot.com",
              messagingSenderId: "81668729508",
              appId: "1:81668729508:web:b9488e27e9fc6d26b41431",
              measurementId: "G-2X5L0LFVH5"









      })


  ],
  providers: [FirebaseService],

  bootstrap: [AppComponent]
})
export class AppModule { }

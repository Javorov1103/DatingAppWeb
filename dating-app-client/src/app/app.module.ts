import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { FirstDummyComponent } from './dummy/first-dummy/first-dummy.component';
import { SecondDummyComponent } from './dummy/second-dummy/second-dummy.component';
import { ThirdDummyComponent } from './dummy/third-dummy/third-dummy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserProfileComponent,
    FirstDummyComponent,
    SecondDummyComponent,
    ThirdDummyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
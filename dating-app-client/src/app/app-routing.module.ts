import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: "",
    component: UsersListComponent
  },
  {
    path: "users/:id",
    component: UserProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}

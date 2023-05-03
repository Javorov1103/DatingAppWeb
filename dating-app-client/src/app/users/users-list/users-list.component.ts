import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  public users: any[] = []

  displayedColumns: string[] = [ 'username','city', 'gender', 'password'];

  public dummyIsVisible:boolean = false;
  
  constructor(private router: Router, private usersService: UsersService) {
   }

  ngOnInit(): void {
    this.usersService.getAll().subscribe((data) => {
      this.users = data
    });
  }

  public onGotoProfileClicked(id: number) {
    this.router.navigate(["users", id])
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  private userId: number
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId= parseInt(this.route.snapshot.params['id'], 10);
  }

  public onGotoUserslistBtnClicked() {
    this.router.navigate([""])
  }
}

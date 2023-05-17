import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { LikesService } from 'src/app/services/likes.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public user: User;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService,
    private likesSerivce: LikesService) {

  }

  ngOnInit(): void {
    let userId = parseInt(this.route.snapshot.params['id'], 10);

    this.loadUser(userId)
  }

  private loadUser(userId) {
    this.usersService.getUserById(userId).subscribe((user) => {
      this.user = user
    })
  }
  public onGotoUserslistBtnClicked() {
    this.router.navigate([""])
  }

  public get userProfilePhotoUrl() {
    let photo = this.user.photos.find(p => p.isMain == true)

    return photo.url
  }

  public likeUser() {
    this.likesSerivce.likeUser(4,this.user.id).subscribe(() => {
      this.loadUser(this.user.id)
    })
  }

  public unlikeUser() {
    this.likesSerivce.deleteLike(4,this.user.id).subscribe(() => {
      this.loadUser(this.user.id)
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service'; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userObj: any;
  //constructor() { }

  ngOnInit() {
  }

  constructor(public githubService: GithubService) {
   
    this.githubService.getUser().subscribe(user => {
      this.userObj = user;
          console.log(user);
      });
  }

}

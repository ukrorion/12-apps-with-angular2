import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html'
})

export class ProfileComponent {
  user:any[];
  repos:any[];

  constructor(private githubService: GithubService){
    this.githubService.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });

    this.githubService.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })
  }
}

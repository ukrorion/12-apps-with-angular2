import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()

export class GithubService{
  private username:string;
  private client_id = '92d2d242254f69e28d07';
  private client_secret = '48c5ccbce50be7625aa8b09dfb4419544523ed3a';

  constructor(private http: Http){
    console.log('Github Service Ready...');
    this.username = 'ukrorion';
  }

  getUser(){
    let link_to_user = 'http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret;
    return this.http.get(link_to_user).map(res => res.json());
  }

  getRepos(){
    let link_to_repos = 'http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret;
    return this.http.get(link_to_repos).map(res => res.json());
  }

  updateUser(username: string){
    if(username.length > 0)
      this.username = username;
  }
}

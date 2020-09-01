import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid= 'Iv1.df339b390a450eab';
  private clientsecret= 'a49ebc27cd859389e58d4fc7c09c10360b3ae87e';

  constructor(private http:HttpClient) { 
      this.username = "Ronny-Lincoln";
    }
    getProfileInfo(){
      return this.http.get("https://api.github.com/users/" + this.username + "?client_id="+ this.clientid + "&client_secret=" + this.clientsecret)
    }
  
    getProfileRepos(){
      return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id="+ this.clientid + "&client_secret=" + this.clientsecret)
    }
    updateProfile(username:string){
      this.username = username;
    }
  }
  
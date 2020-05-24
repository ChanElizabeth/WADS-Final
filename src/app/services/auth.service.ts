import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  loggedInStatus = false;
  Url: string

  constructor() { }

  setLoggedIn(value: boolean){
    this.loggedInStatus = value
  }

  get isLoggedIn(){
    return this.loggedInStatus;
  }

  setUrl(redirectUrl: string){
    this.Url = redirectUrl
  }

  get isRedirectUrl(){
    return this.Url;
  }
}

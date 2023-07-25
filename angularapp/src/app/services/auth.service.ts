import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggin = false;
  constructor() { }

  setIsLoggin(loggin: boolean){
    this.isLoggin = loggin;
  }
  getIsLoggin(): boolean {
    return this.isLoggin;
  }
}

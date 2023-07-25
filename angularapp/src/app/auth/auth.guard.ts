import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(){
    const authService = inject(AuthService);
    const router = inject(Router);

      if(authService.getIsLoggin()){
        return true;
      }else{
        router.navigate(["login"]);
      }
      return false; 
  }
}

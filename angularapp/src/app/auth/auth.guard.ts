import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
<<<<<<< HEAD
  canActivate(){
    const authService = inject(AuthService);
    const router = inject(Router);

      if(authService.getIsLoggin()){
        return true;
      }else{
        router.navigate(["login"]);
      }
      return false; 
=======
  constructor(private router: Router, private authService: AuthService) { }

  canActivate(): boolean {
    if (this.authService.getIsLoggin()) {
      return true;
    } else {
      this.router.navigate(["login"]);
      return false;
    }
>>>>>>> b23a2efd038dcd365805cc7227f3c2d60229cd13
  }
}

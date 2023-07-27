import {
    AbstractControl,
    ValidationErrors,
    ValidatorFn,
  } from '@angular/forms';
  
  export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    let password=control.get('Password');
    let confirmpassword=control.get('Confirmpassword');
    if(password?.value != confirmpassword?.value)
        return{
            PasswordNoMatch: true 
        }  
    return null;
  };
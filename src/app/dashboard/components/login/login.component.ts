import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { passwordPattern, comparePassword, checkPasswordStrength } from '../../../utils/validators';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public userRegisterForm!: FormGroup;
  public nameFormControl!: FormControl;
  public passwordFormControl!: FormControl;
  public passwordRepeatFormControl!: FormControl;

  public isSubmitted: boolean = false;

	constructor(private formBuilder: FormBuilder, private router: Router) {}

	ngOnInit() {
    localStorage.setItem('loggedUser', JSON.stringify(this.isSubmitted));
    this.initForm();
  }

  private initForm(): void {
    this.userRegisterForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.pattern(passwordPattern)]],
      passwordRepeat: ['', [Validators.required, ]],
    },
    {
      validator: comparePassword('password', 'passwordRepeat')
    });

    this.nameFormControl = this.userRegisterForm.get('name') as FormControl;
    this.passwordFormControl = this.userRegisterForm.get('password') as FormControl;
    this.passwordRepeatFormControl = this.userRegisterForm.get('passwordRepeat') as FormControl;

  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.userRegisterForm.valid) {
      
      const user = {
        name: this.nameFormControl.value,
        password: this.passwordFormControl.value,
        passwordRepeat: this.passwordRepeatFormControl.value,
      }

      localStorage.setItem('loggedUser', JSON.stringify(this.isSubmitted));
      localStorage.setItem('name', user.name);
      this.router.navigate(['/']);
    }
  }
}

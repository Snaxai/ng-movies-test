import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css'],
})
export class RegisterPage implements OnInit {
  constructor(private registerService: RegisterService) {}

  ngOnInit(): void {}

  onRegisterSubmit(form: NgForm): void {
    const { username, password } = form.value;
    this.registerService.register(username, password).subscribe({
      next: (response: boolean) => {
        // Assume it was successful
        console.log('REGISTER: ', response);
      },
      error: (error) => {
        alert("Whoops!" + error)
      }
    });
  }
}

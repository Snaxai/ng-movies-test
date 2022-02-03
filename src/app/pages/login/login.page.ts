import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  onLoginSubmit(form: NgForm) {
    const { username } = form.value;
    this.userService.username = username
    // Check the user
    // Save the user locally

    // Redirect
    this.router.navigateByUrl("/movies")
  }
}

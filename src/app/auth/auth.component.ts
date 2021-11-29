import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  user: any
  loginDiv: boolean = true
  registerDiv: boolean = false

  constructor(public auth: AngularFireAuth) { }

  ngOnInit() {
  }

  loadLogin() {
    this.loginDiv = true
    this.registerDiv = false
  }

  loadRegister() {
    this.loginDiv = false
    this.registerDiv = true
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
  }
}

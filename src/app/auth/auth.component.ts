import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
// import firebase from 'firebase/compat/app';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginDiv: boolean = true
  registerDiv: boolean = false
  userLog:any = {
    pass: '',
    user: ''
  }
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

  async createAccount(email: string, password: string) {
    try {
      const result = await this.auth.createUserWithEmailAndPassword(email, password);
      return !!result;
    } catch (e) {
      return false;
    }
  }

  async login(email: string, password: string) {
    try {
      const result = await this.auth.signInWithEmailAndPassword(email, password);
      return !!result;
    } catch (e) {
      return false;
    }
  }
  
  logout() {
    this.auth.signOut();
  }
  // login() {
  //   this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  // }
  test(){
    console.log(this.userLog.pass,'Pass')
    console.log(this.userLog.user,'user')
  }
 
}

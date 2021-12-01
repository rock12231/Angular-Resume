import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginDiv: boolean = true
  registerDiv: boolean = false
  profileDiv:boolean = false
  activeUser: any = localStorage.getItem('activeUser')
  // userLog:any = {
  //   pass: '',
  //   user: ''
  // }
  constructor(public auth: AngularFireAuth) { }

  ngOnInit() {
    if (this.activeUser) {
      this.loginDiv = false
      this.registerDiv = false
      this.profileDiv = true
    }
  }

  loadLogin() {
    this.loginDiv = true
    this.registerDiv = false
  }

  loadRegister() {
    this.loginDiv = false
    this.registerDiv = true
  }

  async createAccount(firstnme: string, lastname: string, email: string, password: string) {
    try {
      const result = await this.auth.createUserWithEmailAndPassword(email, password);
      this.loginDiv = true
      this.registerDiv = false
      this.profileDiv = false
      return !!result;
    } catch (e) {
      console.log(e)
      return false
    }
  }

  async login(email: string, password: string) {
    try {
      const result = await this.auth.signInWithEmailAndPassword(email, password);
      localStorage.setItem('activeUser',email);
      this.loginDiv = false
      this.registerDiv = false
      this.profileDiv = true
      return !!result;
    } catch (e) {
      console.log(e)
      return false
    }
  }
  
  logout() {
    localStorage.clear();
    this.auth.signOut();
    this.loginDiv = true
    this.registerDiv = false
    this.profileDiv = false
  }
  // login() {
  //   this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  // }
  // test(){
  //   console.log(this.userLog.pass,'Pass')
  //   console.log(this.userLog.user,'user')
  // }
 
}

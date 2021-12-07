import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-avinash',
  templateUrl: './avinash.component.html',
  styleUrls: ['./avinash.component.css']
})
export class AvinashComponent implements OnInit {
  title = 'Resume'
  item!: Observable<any>
  loginDiv: boolean = true
  logoutDiv: boolean = false
  activeUser: any = localStorage.getItem('activeUser')

  constructor(db: AngularFireDatabase, public auth: AngularFireAuth) {
    this.item = db.object('students').valueChanges();
    console.log(this.item, "newwwwwwwwww data")
  }

  ngOnInit() {
    console.log(JSON.parse(this.activeUser), "User Data")
    console.log(this.activeUser, "with out parse User Data")
    if (JSON.parse(this.activeUser)) {
      this.loginDiv = false
      this.logoutDiv = true
    }
    // console.log(this.activeUser.displayName, "name")
    // console.log(this.activeUser, "sefs")
    // console.log(this.activeUser.Firebase.Auth.user.UserProfile, "profile")
  }

  login() {
    this.activeUser = this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())

    // if (isUserLoggedIn) {
    //   setUserDetails({});
    //   setUserAuthStatus(false);
    // } else {
    //   auth
    //     .signInWithPopup(provider)
    //     .then(res => {
    //       const { displayName, email, photoURL } = res.user;
    //       const userInfo = {
    //         photoURL,
    //         email,
    //         name: displayName
    //       };
    //       setUserDetails(userInfo);
    //       setUserAuthStatus(true);

    //       return res;
    //     })
    //     .catch(err => err);
    // }
  // }

    localStorage.setItem('activeUser', JSON.stringify(this.activeUser))
  }

  logout() {
    this.auth.signOut()
    localStorage.clear()
    this.loginDiv = true
    this.logoutDiv = false
  }


  checkUser() { }

}

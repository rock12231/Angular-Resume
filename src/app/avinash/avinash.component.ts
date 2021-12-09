import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
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
  skills!: Observable<any>
  itemRef: AngularFireObject<any>
  loginDiv: boolean = true
  logoutDiv: boolean = false
  activeUser: any = localStorage.getItem('activeUser')

  constructor(db: AngularFireDatabase, public auth: AngularFireAuth) {
    this.itemRef = db.object('data/skills');
    this.itemRef.snapshotChanges().subscribe(action => {
      // console.log("types",action.type)
      // console.log("keys",action.key)
      this.skills = action.payload.val()
      console.log("val",action.payload.val())
    })
   }
    // this.item = db.object('data/skills').valueChanges();
    // console.log(this.item, "newwwwwwwwww data")

  ngOnInit() {
    if (JSON.parse(this.activeUser)) {
      this.loginDiv = false
      this.logoutDiv = true
    }
    // this.getData()


  
  }

  
  // async getData() {
  //   try {
  //     const result = await this.db.object('data').valueChanges();
  //     console.log(this.item, "newwwwwwwwww data")
  //     return !!result;
  //   } catch (e) {
  //     console.log(e)
  //     return false
  //   }
  // }
  

  login() {
    this.activeUser = this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    console.log(this.auth.user,"User data")
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

import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-avinash',
  templateUrl: './avinash.component.html',
  styleUrls: ['./avinash.component.css']
})
export class AvinashComponent implements OnInit {
  title = 'Resume';
  item!: Observable<any>;

  constructor(db: AngularFireDatabase) {
    this.item = db.object('students').valueChanges();
    console.log(this.item,"newwwwwwwwww data")
   }

  ngOnInit() { }

}

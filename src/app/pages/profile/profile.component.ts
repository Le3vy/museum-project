import { Component, OnInit } from '@angular/core';
import { User, users } from '../../shared/models/User';
import { Purchase, purchases } from '../../shared/models/Purchase';
import { DateFormatterPipe } from '../../shared/pipes/date.pipe';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [DateFormatterPipe],
  standalone: true
})
export class ProfileComponent implements OnInit {
  user: User;
  purchases: Purchase[];

  constructor() {
    this.user = users[0];
    this.purchases = purchases.filter(purchase => purchase.user.email === this.user.email);
  }

  ngOnInit(): void {}
}

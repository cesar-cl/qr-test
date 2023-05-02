import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-qr-generate',
  templateUrl: './qr-generate.component.html',
  styleUrls: ['./qr-generate.component.css'],
})
export class QrGenerateComponent {
  public users: User[] = [];

  ngOnInit(): void {
    this.users.push(
      {
        id: 1,
        name: 'aaa',
        dni: 123456789,
      },
      {
        id: 2,
        name: 'bbb',
        dni: 789456123,
      }
    );
  }
}

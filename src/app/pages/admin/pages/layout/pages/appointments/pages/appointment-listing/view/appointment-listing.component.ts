import { Component, OnInit } from '@angular/core';
import { AppointmentSource } from '../models';


@Component({
  selector: 'app-appointment-listing',
  templateUrl: './appointment-listing.component.html',
  styleUrls: ['./appointment-listing.component.scss']
})
export class AppointmentListingComponent implements OnInit {
  tableSource: AppointmentSource = new AppointmentSource();
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.tableSource = new AppointmentSource({
        pageIndex: 0,
        pageSize: 10,
        length: 1,
        rows: [
          {
            name: 'Chetan Mandava',
            email: 'Chetan@gmail.com',
            phone: '+91 75800 23234',
            createdAt: new Date(Date.now() - 60 * 60 * 1000),
          },
          {
            name: 'Ajay Kumar',
            email: 'Ajay@gmail.com',
            phone: '+91 96860 11231',
            createdAt: new Date(Date.now() - 60 * 60 * 1000),
          },
          {
            name: 'Ashish Gurjar',
            email: 'Ashish@gmail.com',
            phone: '+91 75800 09876',
            createdAt: new Date(Date.now() - 60 * 60 * 1000),
          }
        ],
      });
    }, 1000);
  }

}

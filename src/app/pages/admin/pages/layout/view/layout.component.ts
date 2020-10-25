import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../services/profile';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private $profile: ProfileService) { }

  ngOnInit(): void {
    this.$profile.changes.subscribe((data) => {
      console.log(data);
    });
  }
  onLogoutHandler() {
    this.$profile.logout();
  }
}

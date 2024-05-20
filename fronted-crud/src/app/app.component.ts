import { Component, OnInit } from '@angular/core';
import { RedirectService } from './service/redirect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fronted-crud';

  constructor(private redirectService: RedirectService) {}

  ngOnInit() {
    this.redirectService.redirectToSplash();
  }
}

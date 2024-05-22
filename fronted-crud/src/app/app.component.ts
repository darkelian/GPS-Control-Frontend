import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RedirectService } from './service/redirect.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'fronted-crud';
  showSplash = true;

  constructor(private redirectService: RedirectService,private router: Router) {}

  ngOnInit() {
    this.redirectService.redirectToSplash();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.showSplash = false;
      this.router.navigate(['/']); // Asegúrate de que la ruta sea correcta
    }, 2000); // Tiempo que se muestra el splash antes de desaparecer
  }
}

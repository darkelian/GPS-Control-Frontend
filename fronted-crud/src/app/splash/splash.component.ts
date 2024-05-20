import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit, OnDestroy {
  isVisible = true;
  timeoutId: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.timeoutId = setTimeout(() => {
      this.hideSplash();
    }, 3000); // Tiempo que se muestra la animación antes de desaparecer
  }

  hideSplash(): void {
    const splashContainer = document.querySelector('.splash-container');
    if (splashContainer) {
      splashContainer.classList.add('fade-out');
      setTimeout(() => {
        this.isVisible = false;
        this.router.navigate(['/home']); // Redirige a la ruta principal después de la transición
      }, 1500); // Tiempo de la transición en milisegundos
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeoutId);
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectService {

  constructor(private router: Router) { }

  redirectToSplash() {
    // Verificar si la página se recargó
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
      this.router.navigate(['']);
    }
  }
}

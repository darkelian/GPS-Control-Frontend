import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  isExpanded = false;
  footerVisible = false;

  toggleExpand() {
    if (this.isExpanded) {
      this.footerVisible = false; // Ocultar botones antes de contraer la tarjeta
      setTimeout(() => {
        this.isExpanded = false; // Contraer la tarjeta después de un breve retraso
      }, 500); // Duración de la animación para ocultar los botones
    } else {
      this.isExpanded = true; // Expandir la tarjeta
      setTimeout(() => {
        this.footerVisible = true; // Mostrar los botones después de un breve retraso
      }, 500); // Retraso para mostrar los botones después de expandir la tarjeta
    }
  }
}

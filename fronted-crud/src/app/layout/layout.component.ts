import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  private currentSection = 1;
  isVisible = false;
  scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  @HostListener('window:wheel', ['$event'])
  onScroll(event: WheelEvent): void {
    if (event.deltaY > 0) {
      this.scrollDown();
    } else {
      this.scrollUp();
    }
  }

  scrollDown(): void {
    if (this.currentSection < 3) {
      this.currentSection++;
      this.scrollToSection(`section${this.currentSection}`);
    }
  }

  scrollUp(): void {
    if (this.currentSection > 1) {
      this.currentSection--;
      this.scrollToSection(`section${this.currentSection}`);
    }
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.isVisible = true;
    }, 100); // Pequeño retraso para asegurar que la transición se aplique
  }
}

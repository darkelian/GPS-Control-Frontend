import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  private currentSection = 1;
  isVisible = false;
  constructor(private renderer: Renderer2) { }
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
    if (this.currentSection < 2) {
      this.currentSection++;
      this.scrollToSection(`section${this.currentSection}`);
      this.changeOpacity('.logo-button-up', 1);
      this.changeOpacity('.logo-button-down', 0);
    }
  }

  scrollUp(): void {
    if (this.currentSection > 1) {
      this.currentSection--;
      this.scrollToSection(`section${this.currentSection}`);
      this.changeOpacity('.logo-button-up', 0);
      this.changeOpacity('.logo-button-down', 1);

    }
  }

  changeOpacity(selector: string, opacity: number): void {
    const element = document.querySelector(selector);
    if (element) {
      this.renderer.setStyle(element, 'opacity', opacity.toString());
      this.renderer.setStyle(element, 'transition', 'opacity 0.5s ease-in-out');
    }
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isVisible = true;
    }, 100); // Pequeño retraso para asegurar que la transición se aplique
  }
}

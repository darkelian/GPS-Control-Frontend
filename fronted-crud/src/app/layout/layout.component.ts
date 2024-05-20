import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  private currentSection = 1;

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
}

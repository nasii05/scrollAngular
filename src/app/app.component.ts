import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portrait-gradient';

  @ViewChild('target', {static: true}) targetElement!: ElementRef;

  scrollToTarget(){
    const targetElement = this.targetElement.nativeElement;
    targetElement.scrollIntoView({ behavior: 'smooth'});
  }
}

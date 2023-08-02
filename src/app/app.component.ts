import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cheerful-client';

  onActivate(event: Event) {
    window.scrollTo(0, 0);
  }
}

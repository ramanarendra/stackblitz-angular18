import { Component, signal } from '@angular/core';
import { ChildComponent } from './components/child-component';

@Component({
  standalone: true,
  selector: 'App',
  template: `
    <div>
      <p> {{ text() }} </p>
      <child [(text)]="text"></child>
    </div>
    `,
  imports: [ChildComponent],
})
export class AppComponent {
  text = signal('hola mundo');
}

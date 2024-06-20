import { Component, model } from '@angular/core';

@Component({
  standalone: true,
  selector: 'child',
  template: `
    <div>
      <input type="text" [value]="text()" (input)="change($event)"/>
    </div>
    `,
})
export class ChildComponent {
  text = model('');

  change(event: Event) {
    this.text.set((event.target as HTMLInputElement).value);
  }
}

import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/button-helm';
@Component({
  standalone: true,
  imports: [HlmButtonDirective],
  selector: 'app-root',
  template: `<button hlmBtn variant="outline">Hello from {{ title }}</button>`,
})
export class AppComponent {
  title = 'testNx';
}

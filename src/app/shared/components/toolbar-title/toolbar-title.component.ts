import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-title',
  templateUrl: './toolbar-title.component.html',
  styleUrl: './toolbar-title.component.css'
})
export class ToolbarTitleComponent {
  @Input() title: string = 'Default Title';
  @Input() icon: string = 'star';

}

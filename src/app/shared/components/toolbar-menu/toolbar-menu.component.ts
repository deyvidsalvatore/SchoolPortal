import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrl: './toolbar-menu.component.css'
})
export class ToolbarMenuComponent {
  @Input() menuTitle: string = '';
  @Input() shadow = false;
  @Input() popText = false;
}

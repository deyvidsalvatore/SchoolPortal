import { Component, Input } from '@angular/core';
import { MenuItem } from '@app/shared/models/menu-item.interface';

@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrl: './toolbar-menu.component.css'
})
export class ToolbarMenuComponent {
  @Input() menuTitle: string = '';
  @Input() shadow = false;
  @Input() popText = false;
  @Input() items_menu: MenuItem[] = [];
}

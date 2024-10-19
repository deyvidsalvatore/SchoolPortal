import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-title',
  templateUrl: './toolbar-title.component.html',
  styleUrl: './toolbar-title.component.css'
})
export class ToolbarTitleComponent {
  @Input() title: string = "";
  iconFa = '';
  iconMat = '';

  @Input()
  set icon(value: string) {
    value.includes('fa-') ?
      this.iconFa = `fa-solid icon-space-mat ${value}` :
      this.iconMat = value;
  }
}

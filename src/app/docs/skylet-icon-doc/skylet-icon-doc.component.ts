import { Component, Input } from '@angular/core';

@Component({
  selector: 'skylet-icon-doc',
  templateUrl: './skylet-icon-doc.component.html',
  styleUrls: ['./skylet-icon-doc.component.scss'],
})
export class SkyletIconDocComponent {
  @Input() name = '';
}

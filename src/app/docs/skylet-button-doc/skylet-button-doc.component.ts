import { Component, Input } from '@angular/core';

@Component({
  selector: 'skylet-button-doc',
  templateUrl: './skylet-button-doc.component.html',
  styleUrls: ['./skylet-button-doc.component.scss'],
})
export class SkyletButtonDocComponent {
  @Input() size = 'sm';
  @Input() icon = '';
}

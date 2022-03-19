import { Component, Input } from '@angular/core';

@Component({
  selector: 'skylet-button',
  templateUrl: './skylet-button.component.html',
  styleUrls: ['./skylet-button.component.scss'],
})
export class SkyletButtonComponent {
  @Input() id = '';
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'skylet-icon',
  templateUrl: './skylet-icon.component.html',
  styleUrls: ['./skylet-icon.component.scss'],
})
export class SkyletIconComponent {
  @Input() id = '';
  @Input() name = '';
  @Input() size: 'sm' | 'md' | 'lg' | 'xlg' | 'xxlg' = 'md';
  @Input() isFilled = false;
}

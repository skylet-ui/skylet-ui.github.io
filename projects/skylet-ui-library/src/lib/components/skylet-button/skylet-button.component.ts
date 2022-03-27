import { Component, Input, Output, EventEmitter } from '@angular/core';

import { SkyletButtonType } from './interfaces/skylet-button.interfaces';

@Component({
  selector: 'skylet-button',
  templateUrl: './skylet-button.component.html',
  styleUrls: ['./skylet-button.component.scss'],
})
export class SkyletButtonComponent {
  @Input() id = '';
  @Input() dataQa = '';
  @Input() type: SkyletButtonType = 'primary';
  @Input() content = '';
  @Input() padding = 'md';
  @Input() textAlign: 'left' | 'center' | 'right' = 'left';

  @Output() onClick = new EventEmitter();

  handleClick(): void {
    this.onClick.emit();
  }
}

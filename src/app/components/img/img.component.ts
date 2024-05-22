import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img.component.html',
  styleUrl: './img.component.scss',
})
export class ImgComponent  {
  // Forma de recibir parámetros y ejecutar una función al tiempo;
  @Input() src?: string = '';
  @Output() loaded = new EventEmitter<string>();
  imgDefault: string = '../../../assets/images/default.png';

  constructor() {
  }

  imgError() {
    this.src = this.imgDefault;
  }
}

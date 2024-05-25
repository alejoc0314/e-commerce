import { CommonModule } from '@angular/common';
import {
  Component,
  WritableSignal,
  signal,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent implements OnInit, OnDestroy {
  // Variables para las frases de bienvenida

  public cards: Card[] = [
    {
      title: 'Bienvenido a Green Mint',
      description:
        'Estamos encantados de tenerte aquí. Explora nuestros productos y encuentra lo que necesitas.',
    },
    {
      title: 'Ofertas Especiales',
      description:
        'Aprovecha un 10% de descuento en tu primera compra usando el código BIENVENIDO10!',
    },
    {
      title: 'Cómo Navegar',
      description:
        'Usa nuestro menú de categorías para encontrar fácilmente los productos que estás buscando.',
    },
    {
      title: 'Beneficios de Registrarse',
      description:
        'Crea una cuenta para disfrutar de un proceso de compra más rápido, seguimiento de pedidos y listas de deseos..',
    },
    {
      title: 'Productos Destacados',
      description:
        'Descubre nuestros productos más populares y las categorías más buscadas.',
    },
  ];
  public currentPhrase: WritableSignal<string> = signal(
    'Bienvenido a Green Mint'
  );

  // Variables para el carrusel

  public images: string[] = [
    '../../../assets/images/carousel-first.jpg',
    '../../../assets/images/carousel-second.jpg',
    '../../../assets/images/carousel-third.jpg',
  ];
  public currentImage: WritableSignal<string> = signal(this.images[0]);
  public imageCounter: number = 0;
  private intervalId!: number;

  nextImage() {
    this.imageCounter = (this.imageCounter + 1) % this.images.length;
    this.currentImage.set(this.images[this.imageCounter]);
    console.log(this.imageCounter);
  }

  prevImage() {
    this.imageCounter =
      (this.imageCounter - 1 + this.images.length) % this.images.length;
    this.currentImage.set(this.images[this.imageCounter]);
    console.log(this.imageCounter);
  }

  ngOnInit() {
    this.intervalId = window.setInterval(() => {
      this.nextImage();
    }, 5000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
    }
  }
}

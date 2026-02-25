import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

interface CarouselSlide {
  image: string;
  title?: string;
  alt?: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @Input() slides: CarouselSlide[] = [];
  @Input() autoSlide: boolean = true;
  @Input() slideInterval: number = 2500;
  @Input() showIndicators: boolean = true;
  @Input() showControls: boolean = true;
  @Input() numVisible: number = 1;
  @Input() numScroll: number = 1;
  @Input() circular: boolean = true;
  @Input() responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];
}

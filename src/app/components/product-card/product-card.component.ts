import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DescriptionPipe } from "../../pipes/description.pipe";

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, TranslateModule, DescriptionPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
   @Input() product!: any;
   @Output() cardClick = new EventEmitter<any>();

   readonly whatsappNumber = '201012606477'; // WhatsApp number with country code

   onCardClick() {
     this.cardClick.emit(this.product);
   }

   buyOnWhatsApp(event: Event) {
     event.stopPropagation();
     const message = `Hello! I'm interested in buying:\n\n*${this.product.name}*\nPrice: $${this.product.price}${this.product.discount ? ` (Was: $${this.product.discount})` : ''}\n\n${this.product.description}`;
     const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
     window.open(whatsappUrl, '_blank');
   }

   getDiscountPercentage(): number {
     if (!this.product.discount) return 0;
     const discount = ((this.product.discount - this.product.price) / this.product.discount) * 100;
     return Math.round(discount);
   }
}

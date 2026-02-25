import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  activate = inject(ActivatedRoute);
  router = inject(Router);
  productsService = inject(ProductService);
  
  productId = signal<string | null>(null);
  productDetails = signal<any>(null);
  isLoading = signal<boolean>(true);
  notFound = signal<boolean>(false);

  readonly whatsappNumber = '201012606477'; // WhatsApp number with country code

  ngOnInit() {
    const id = this.activate.snapshot.paramMap.get('id');
    this.productId.set(id);

    if (!id) {
      this.isLoading.set(false);
      this.notFound.set(true);
      return;
    }

    // Optimized: use service method for faster lookup
    const productIdNum = parseInt(id, 10);
    const product = this.productsService.getProductById(productIdNum);

    if (product) {
      this.productDetails.set(product);
      this.isLoading.set(false);
    } else {
      this.isLoading.set(false);
      this.notFound.set(true);
    }
  }

  buyOnWhatsApp() {
    const product = this.productDetails();
    if (!product) return;
    
    const message = `Hello! I'm interested in buying:\n\n*${product.name}*\nPrice: $${product.price}${product.discount ? ` (Was: $${product.discount})` : ''}\n\n${product.description}`;
    const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
}

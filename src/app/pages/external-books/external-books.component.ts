import { Component } from '@angular/core';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { TranslateModule } from '@ngx-translate/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-external-books',
  imports: [ProductCardComponent, TranslateModule, CommonModule],
  templateUrl: './external-books.component.html',
  styleUrl: './external-books.component.scss'
})
export class ExternalBooksComponent {
  products: any[] = [];

  constructor(private productService: ProductService, private router: Router) {
  }
  
  ngOnInit(){
    this.products = this.productService.getProductsByCategory('external-books');
  }

  productDetails(product: any){
    this.router.navigate([`product-details`, product.id]) 
  }
}

import { Component } from '@angular/core';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { TranslateModule } from '@ngx-translate/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-intelligence-games',
  imports: [ProductCardComponent, TranslateModule, CommonModule],
  templateUrl: './intelligence-games.component.html',
  styleUrl: './intelligence-games.component.scss'
})
export class IntelligenceGamesComponent {
  products: any[] = [];

  constructor(private productService: ProductService, private router: Router) {
  }
  
  ngOnInit(){
    this.products = this.productService.getProductsByCategory('intelligence-games');
  }

  productDetails(product: any){
    this.router.navigate([`product-details`, product.id]) 
  }
}

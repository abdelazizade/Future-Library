import { Component } from '@angular/core';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { TranslateModule } from '@ngx-translate/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  imports: [ProductCardComponent, TranslateModule, CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  products: any[] = [];

  constructor(private productService: ProductService, private router: Router) {
  }
  
  ngOnInit(){
    this.products = this.productService.getProductsByCategory('calculator');
  }

  productDetails(product: any){
    this.router.navigate([`product-details`, product.id]) 
  }
}

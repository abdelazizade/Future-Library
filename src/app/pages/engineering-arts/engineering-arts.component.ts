import { Component } from '@angular/core';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { TranslateModule } from '@ngx-translate/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-engineering-arts',
  imports: [ProductCardComponent, TranslateModule, CommonModule],
  templateUrl: './engineering-arts.component.html',
  styleUrl: './engineering-arts.component.scss'
})
export class EngineeringArtsComponent {
  products: any[] = [];

  constructor(private productService: ProductService, private router: Router) {
  }
  
  ngOnInit(){
    this.products = this.productService.getProductsByCategory('engineering-arts');
  }

  productDetails(product: any){
    this.router.navigate([`product-details`, product.id]) 
  }
}

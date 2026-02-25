import { Component } from '@angular/core';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { TranslateModule } from '@ngx-translate/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-school-supplies',
  imports: [ProductCardComponent, TranslateModule, CommonModule],
  templateUrl: './school-supplies.component.html',
  styleUrl: './school-supplies.component.scss'
})
export class SchoolSuppliesComponent {
  featuredProducts: any[] = [];

  constructor(private productService: ProductService, private _route : Router) {
  }
  
  
  ngOnInit(){
    this.featuredProducts = this.productService.getFeaturedProducts();
  }

  productDetails(product: any){
    this._route.navigate([`product-details`, product.id]) 
  }
}

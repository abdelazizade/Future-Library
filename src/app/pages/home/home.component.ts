import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductService } from '../../services/product.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ProductCardComponent, TranslateModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
featuredProducts: any[] = [];
// featuredProducts: Product[] = [];
  categories = [
    { name: 'School Supplies', link: '/school-supplies' },
    { name: 'Calculators', link: '/calculator' },
    { name: 'External Books', link: '/external-books' },
    { name: 'Office Supplies', link: '/office-supplies' },
    { name: 'Engineering & Arts', link: '/engineering-arts' },
    { name: 'Intelligence Games', link: '/intelligence-games' }
  ];

  constructor(private productService: ProductService) {
    this.featuredProducts = this.productService.getFeaturedProducts();
  }
}

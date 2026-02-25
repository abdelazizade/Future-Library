import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductService } from '../../services/product.service';
import { Router, RouterModule } from '@angular/router';
import { CarouselComponent } from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, TranslateModule, RouterModule, FormsModule, CarouselComponent, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  productService = inject(ProductService);
  router = inject(Router);
  
  categories = [
    { name: 'School Supplies', link: '/school-supplies', icon: '📚' },
    { name: 'Calculator', link: '/calculator', icon: '🔢' },
    { name: 'External Books', link: '/external-books', icon: '📖' },
    { name: 'Office Supplies', link: '/office-supplies', icon: '📁' },
    { name: 'Engineering & Arts', link: '/engineering-arts', icon: '✏️' },
    { name: 'Intelligence Games', link: '/intelligence-games', icon: '🎮' },
  ];

  newsletterEmail: string = '';

  testimonials = [
    {
      name: 'Ahmed Mohamed',
      role: 'Student',
      text: 'Great quality products and fast delivery! The school supplies I ordered were exactly as described. Highly recommended!'
    },
    {
      name: 'Sara Ali',
      role: 'Teacher',
      text: 'Excellent service and competitive prices. I\'ve been buying from Library Store for over a year now. Always satisfied!'
    },
    {
      name: 'Mohamed Hassan',
      role: 'Office Manager',
      text: 'Best place to buy office supplies. Great variety, good prices, and the WhatsApp ordering is so convenient!'
    }
  ];

  featuredProducts: any[] = [];
  specialOffers: any[] = [];

  carouselSlides = [
    {
      image: 'https://samir-and-aly-stationaries.fra1.cdn.digitaloceanspaces.com/media/wysiwyg/slider/prkr_prss_m_imgpsh-ar.png',
      title: 'Welcome to Library Store',
      alt: 'Welcome to Library Store'
    },
    {
      image: 'https://samir-and-aly-stationaries.fra1.cdn.digitaloceanspaces.com/media/wysiwyg/slider/25-discoun-ar.png',
      title: 'Special Offers',
      alt: 'Special Offers'
    },
    {
      image: 'https://samir-and-aly-stationaries.fra1.cdn.digitaloceanspaces.com/media/wysiwyg/slider/prkr_prss_m_imgpsh-Recovered-Recovered-AR.png',
      title: 'Quality Products',
      alt: 'Quality Products'
    }
  ];

  ngOnInit() {
    const allProducts = this.productService.getFeaturedProducts();
    this.featuredProducts = allProducts.slice(0, 6);
    this.specialOffers = allProducts.filter(p => p.discount).slice(0, 4);
  }

  productDetails(product: any) {
    this.router.navigate([`product-details`, product.id]);
  }

  subscribeNewsletter() {
    // Newsletter subscription logic
  }
}

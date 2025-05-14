import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    private products: any[] = [
    {
      id: 1,
      name: 'Scientific Calculator',
      description: 'Advanced scientific calculator with 240 functions',
      price: 29.99,
      discount: 34.99,
      image: '/assets/images/calculator.jpg',
      category: 'calculator'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: '/assets/images/notebooks.jpg',
      category: 'school-supplies'
    },
    // Add more products...
  ];

  getFeaturedProducts(): any[] {
    return this.products.slice(0, 6);
  }

  getProductsByCategory(category: string): any[] {
    return this.products.filter(product => product.category === category);
  }
}

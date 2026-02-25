import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    private products: any[] = [
    {
      id: 1,
      name: 'Scientific Calculator',
      description: 'Advanced scientific calculator with 240 functions Advanced scientific calculator with 240 functions Advanced scientific calculator with 240 functions Advanced scientific calculator with 240 functions Advanced scientific calculator with 240 functions Advanced scientific calculator with 240 functions',
      price: 29.99,
      discount: 34.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'calculator'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'school-supplies'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'school-supplies'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'school-supplies'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'school-supplies'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'school-supplies'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'school-supplies'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'school-supplies'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'school-supplies'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'school-supplies'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'school-supplies'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'school-supplies'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'school-supplies'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'school-supplies'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'school-supplies'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'school-supplies'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'school-supplies'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'school-supplies'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'school-supplies'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'school-supplies'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'school-supplies'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'school-supplies'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'school-supplies'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'school-supplies'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'school-supplies'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'school-supplies'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'school-supplies'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'school-supplies'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'school-supplies'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'school-supplies'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'school-supplies'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'school-supplies'
    },
    {
      id: 2,
      name: 'Notebook Set',
      description: 'Set of 5 high-quality notebooks with 120 pages each',
      price: 12.99,
      image: 'assets/توريدات-ادوات-مكتبية-بسعر-الجملة-مع-فاتورة-ضريبية.webp',
      category: 'school-supplies'
    },
    // Add more products...
  ];

  getFeaturedProducts(): any[] {
    return this.products;
  }

  getProductsByCategory(category: string): any[] {
    return this.products.filter(product => product.category === category);
  }

  getProductById(id: number): any | undefined {
    // Find product by ID
    return this.products.find(product => product.id === id);
  }

  searchProducts(query: string): any[] {
    if (!query || query.trim() === '') {
      return [];
    }
    const lowerQuery = query.toLowerCase();
    return this.products.filter(product => 
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery)
    );
  }
}


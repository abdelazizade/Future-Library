import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { LanguageSwitcherComponent } from "../language-switcher/language-switcher.component";
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { TranslateModule } from '@ngx-translate/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, LanguageSwitcherComponent, SearchBarComponent, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  languageService = inject(LanguageService);
  router = inject(Router);
  productService = inject(ProductService);

  onSearch(query: string) {
    // Handle search - can navigate to search results page
    const results = this.productService.searchProducts(query);
    // Store results in service or navigate to search page
    this.router.navigate(['/home'], { queryParams: { search: query } });
  }
}
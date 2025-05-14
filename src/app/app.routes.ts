import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SchoolSuppliesComponent } from './pages/school-supplies/school-supplies.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { ExternalBooksComponent } from './pages/external-books/external-books.component';
import { OfficeSuppliesComponent } from './pages/office-supplies/office-supplies.component';
import { EngineeringArtsComponent } from './pages/engineering-arts/engineering-arts.component';
import { IntelligenceGamesComponent } from './pages/intelligence-games/intelligence-games.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'school-supplies', component: SchoolSuppliesComponent, title: 'School Supplies' },
  { path: 'calculator', component: CalculatorComponent, title: 'Calculator' },
  { path: 'external-books', component: ExternalBooksComponent, title: 'External Books' },
  { path: 'office-supplies', component: OfficeSuppliesComponent, title: 'Office Supplies' },
  { path: 'engineering-arts', component: EngineeringArtsComponent, title: 'Engineering & Arts' },
  { path: 'intelligence-games', component: IntelligenceGamesComponent, title: 'Intelligence Games' },
  { path: '**', redirectTo: '' }
];
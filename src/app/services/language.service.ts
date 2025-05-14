import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translate: TranslateService) {
    // this.translate.setDefaultLang('en');
    // this.translate.use('en');
  }

  changeLanguage(lang: string) {
    // this.translate.use(lang);
    // document.documentElement.lang = lang;
    // document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }
}

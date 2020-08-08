import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  selectedLanguage: string;  

  constructor() {
    this.selectedLanguage='en'
  }

  getText(name: string) {
    switch(this.selectedLanguage) {
      case 'en':
        return environment.englishText[name];
    }
  }
}

import {Component} from '@angular/core';
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedValue: string;

  foods = [
    {value: 'french', viewValue: 'French', image: './assets/flag_fr.png'},
    {value: 'english', viewValue: 'English', image: './assets/flag_gb.png'},
    {value: 'sweden', viewValue: 'Sweden', image: './assets/flag_se.png'}
  ];

  constructor(private translate: TranslateService) {
    let userLang = navigator.language.split('-')[0];
    userLang = /(fr|en|se)/gi.test(userLang) ? userLang : 'en';
    translate.setDefaultLang('en');
    translate.use(userLang);

    if (userLang === 'fr') {
      this.selectedValue = 'french';
    } else if (userLang === 'se') {
      this.selectedValue = 'sweden';
    } else {
      this.selectedValue = 'english';
    }
  }

  flagSelected() {
    if (this.selectedValue === 'french') {
      this.translate.use('fr');
    } else if (this.selectedValue === 'sweden') {
      this.translate.use('se');
    } else {
      this.translate.use('en');
    }
  }
}

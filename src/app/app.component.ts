import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'Adz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AdzBook';
  constructor(private translate: TranslateService) {
    let browserLang = this.translate.getBrowserLang();
    console.log(browserLang)
    translate.setDefaultLang(browserLang);
  }
}

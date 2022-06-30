import { Component } from '@angular/core';
import { SeoService } from '../../../services/seo/seo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private seoService: SeoService) {
    
    const content = 'Login content with meta';
    this.seoService.setMetaDescription(content);
    
  }

}

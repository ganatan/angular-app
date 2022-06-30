import { Component } from '@angular/core';
import { SeoService } from '../../../services/seo/seo.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private seoService: SeoService) {
    
    const content = 'Signup content with meta';
    this.seoService.setMetaDescription(content);
    
  }

}

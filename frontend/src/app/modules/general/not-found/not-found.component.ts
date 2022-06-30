import { Component } from '@angular/core';
import { SeoService } from '../../../services/seo/seo.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {

  constructor(private seoService: SeoService) {
    
    const content = 'NotFound content with meta';
    this.seoService.setMetaDescription(content);
    
  }

}

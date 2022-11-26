import { Component } from '@angular/core';
import { SeoService } from '../../../services/seo/seo.service';

@Component({
  selector: 'app-example-bootstrap',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent {

  constructor(private seoService: SeoService) {
    
    const content = 'Example Bootstrap content with meta';
    this.seoService.setMetaDescription(content);

    this.seoService.setMetaTitle('Angular-seo Title : example-bootstrap Page');
    
  }

}

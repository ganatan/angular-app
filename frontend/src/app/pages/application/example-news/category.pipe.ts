import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'category' })
export class CategoryPipe implements PipeTransform {
  transform(category: string): string {
    let result;
    switch (category) {
      case 'movie': { result = 'fas fa-film'; break; }
      case 'show': { result = 'fas fa-desktop'; break; }
      case 'clip': { result = 'fas fa-volume-up'; break; }
      case 'game': { result = 'fab fa-playstation'; break; }
      case 'documentary': { result = 'fas fa-photo-video'; break; }
      default: { result = 'fas fa-desktop'; break; }
    }
    
    return result;
  }
}
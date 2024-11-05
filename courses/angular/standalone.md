
# Angular Standalone

## Installation 

```bash
# Generate the image component
ng generate component image
```

---

## Image Component Source Code

```html
<!-- image.component.html -->
<p>image works!</p>
```

```typescript
// image.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {

}
```

## App Component Source Code

```html
<!-- app.component.html -->
<app-image></app-image>
```

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageComponent } from './image/image.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-starter';
}
```

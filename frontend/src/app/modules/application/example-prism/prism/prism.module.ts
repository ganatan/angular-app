import { NgModule } from '@angular/core';

import 'prismjs/prism';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-git';
import 'prismjs/components/prism-bash';

import { PrismComponent } from './prism.component';

@NgModule({
  imports: [
  ],
  exports: [
    PrismComponent
  ],
  declarations: [
    PrismComponent
  ],
  providers: [
  ],
})
export class PrismModule { }

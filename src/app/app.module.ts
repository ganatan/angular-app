import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { HomeComponent } from './modules/general/home/home.component';
import { HeaderModule } from './components/header/header.module';
import { FeaturesModule } from './components/features/features.module';
import { MoviesImagesListModule } from './modules/application//movies-images-list/movies-images-list.module';
import { ConfigService } from './services/config/config.service';
import { PageListComponent } from './components/page-list/page-list.component';
import { PageFormComponent } from './components/page-form/page-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    PageListComponent,
    PageFormComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    FeaturesModule,
    MoviesImagesListModule,
  ],
  providers: [
    ConfigService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

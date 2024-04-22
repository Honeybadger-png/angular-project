import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { SliderComponent } from './slider/slider.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { CategoriesComponent } from './categories/categories.component';
import { SearchComponent } from './header/search/search.component';
import { BasicHighlightDirective } from './news/basic-highlight/basic-highlight.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { FilterComponent } from './categories/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    NewsListComponent,
    NewsDetailComponent,
    SliderComponent,
    NavbarComponent,
    CategoriesComponent,
    SearchComponent,
    BasicHighlightDirective,
    DropdownDirective,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

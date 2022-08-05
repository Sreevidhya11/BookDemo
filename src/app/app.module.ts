import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { HeaderComponent } from './header/header.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthorPipe } from './author.pipe';
import { PricePipe } from './price.pipe';
import { TitlePipe } from './title.pipe';
import { YearPipe } from './year.pipe';
import { LoginComponent } from './login/login.component';
import { MyordersComponent } from './myorders/myorders.component';


import { BookSidebarComponent } from './book-sidebar/book-sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    EditBookComponent,
    ListBookComponent,
    HeaderComponent,
    ListOrdersComponent,
    ViewBookComponent,
    AuthorPipe,
    PricePipe,
    TitlePipe,
    YearPipe,
    LoginComponent,
    MyordersComponent,
 
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

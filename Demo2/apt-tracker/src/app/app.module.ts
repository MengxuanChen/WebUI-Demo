import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatrixComponent } from './matrix/matrix.component';
import { SearchComponent } from './search/search.component';
import { AddAptComponent } from './add-apt/add-apt.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavComponent } from './nav/nav.component';
import {TableModule} from 'primeng/table';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {InputTextModule} from 'primeng/inputtext';
import {SidebarModule} from 'primeng/sidebar';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import {InputMaskModule} from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MatrixComponent,
    SearchComponent,
    AddAptComponent,
    PageNotFoundComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    InputTextModule,
    ScrollingModule,
    CardModule,
    SidebarModule,
    DialogModule,
    ScrollPanelModule,
    TableModule,
    AppRoutingModule,
    InputMaskModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './layout/content/content.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonAddComponent } from './person/person-add/person-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatCheckboxModule, MatSortModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table'
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgxInputTagModule } from 'ngx-input-tag';
import { PersonEditComponent } from './person/person-edit/person-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContentComponent,
    PersonListComponent,
    PersonAddComponent,
    LoginComponent,
    PersonEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatIconModule,
    ToastrModule.forRoot(), // ToastrModule added
    ToastContainerModule,
    HttpClientModule,
    NgxInputTagModule.forRoot()
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }

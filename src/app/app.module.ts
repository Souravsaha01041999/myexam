import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserListComponentComponent } from './user-list-component/user-list-component.component';
import { IndexComponent } from './index/index.component';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

const allRouts: Routes = [
  { path: '', component: IndexComponent },
  { path: 'userlist', component: UserListComponentComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    UserListComponentComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    PanelModule,
    ButtonModule,
    InputTextModule,
    ProgressSpinnerModule,
    ToastModule,
    CardModule,
    HttpClientModule,
    RouterModule.forRoot(allRouts)
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

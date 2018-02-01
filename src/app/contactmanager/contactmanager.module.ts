import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../shared/material.module';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { UserService } from './services/user.service';

const routes: Routes = [
  { path: '', component: ContactmanagerAppComponent,
      children: [
        { path: '', component: MainContentComponent }
      ] },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    UserService
  ],
  declarations: [ContactmanagerAppComponent, ToolbarComponent, MainContentComponent, SidenavComponent]
})
export class ContactmanagerModule { }

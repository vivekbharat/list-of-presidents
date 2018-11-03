import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresidentsComponent } from './presidents/presidents.component';
import { AscComponent } from './asc/asc.component';
import { DescComponent } from './desc/desc.component';

const routes: Routes = [
  {
    path: '',
    component: PresidentsComponent
  },
  {
    path: 'asc',
    component: AscComponent
  },
  {
    path: 'desc',
    component: DescComponent
  }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

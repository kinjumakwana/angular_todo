import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './Mycomponent/todolist/todolist.component';
import { AboutComponent } from './Mycomponent/about/about.component';

const routes: Routes = [
  { path: '', component: TodolistComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitleComponent } from './title/title.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: TitleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

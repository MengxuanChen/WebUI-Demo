import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrainComponent } from './train/train.component';
import { StandardsComponent } from './standards/standards.component';

const routes: Routes = [
  { path: 'home', 
    component: HomeComponent},
  {
    path: 'train',
    component: TrainComponent
  },
  {
    path: 'standards',
    component: StandardsComponent
  },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

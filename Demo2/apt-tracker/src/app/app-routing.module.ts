import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatrixComponent } from './matrix/matrix.component';
import { SearchComponent } from './search/search.component';
import { AddAptComponent } from './add-apt/add-apt.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '',   redirectTo: '/matrix', pathMatch: 'full' },
  { path: 'matrix', component: MatrixComponent, },
  { path: 'search',      component: SearchComponent },
  {
    path: 'create-apt',
    component: AddAptComponent,
  },
  { path: 'notfound', component: PageNotFoundComponent },

  { path: '**', redirectTo: '/notfound', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

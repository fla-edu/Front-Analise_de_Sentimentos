import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'search',
    loadChildren: () => import('./search/search.module').then(m => m.SearchModule),
  },
  {
    path:'product',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
  },
  {
    path:'',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo: 'search',
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout/layout.component';
import { HomeModule } from './pages/home/home.module';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((m)=> m.HomeModule),
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
 
 
 { path: 'tabs',
 component: TabsComponent,
 children: [
  {
  path: 'home',
  loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
},

{
  path: 'component',
  loadChildren: () => import('./component/component.module').then( m => m.ComponentPageModule)
},
{
  path: 'setting',
  loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
},
{
  path: 'calculator',
  loadChildren: () => import('./calculator/calculator.module').then( m => m.CalculatorPageModule)
},
 ]
 },
 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './modules/users/list/list.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:ListComponent},
  { path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

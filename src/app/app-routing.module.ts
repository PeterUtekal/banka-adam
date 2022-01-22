import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProfilComponentComponent } from './profil-component/profil-component.component';
import { ProfilEditComponent } from './profil-edit/profil-edit.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }
		  /*,
		  {
					 path:'profil/:id', component: ProfilComponentComponent
		  },
		  {
					 path:'profil/edit/:id', component: ProfilEditComponent
		  }*/

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

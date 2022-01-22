import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { ProfilComponentComponent } from '../profil-component/profil-component.component';
import { ProfilEditComponent } from '../profil-edit/profil-edit.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },

	{
					 path:'profil/:id', component: ProfilComponentComponent
	 },
	  {
				 path:'profil/edit/:id', component: ProfilEditComponent
	  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}

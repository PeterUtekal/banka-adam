import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import { TransakciaComponent } from '../transakcia/transakcia.component';
import { PlatobnaBranaComponent } from '../platobna-brana/platobna-brana.component';
import { ReportyComponent } from '../reporty/reporty.component';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },

  {
	 path:'transakcia/:id', component: TransakciaComponent 
  },

  {
	 path:'platba', component: PlatobnaBranaComponent 
  },
  {
	 path:'reporty', component: ReportyComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}

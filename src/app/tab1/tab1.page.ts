import { Component, OnInit } from '@angular/core';
import { Klient } from '../klient';
import { KlientService } from '../klient.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit{
		  klienti$!: Observable <Klient[]>

  constructor(
	private service: KlientService, 
	private router: Router		 
  ) {}

  async ngOnInit(){
			 this.klienti$ = this.service.vratKlientov();
  }

   openProfil(klient: any){
			  this.router.navigate(['/tabs/tab1/profil', klient.id]);
	}
}

import { Component, OnInit } from '@angular/core';
import { Klient } from '../klient';
import { Observable } from 'rxjs';
import { KlientService } from '../klient.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-profil-edit',
  templateUrl: './profil-edit.component.html',
  styleUrls: ['./profil-edit.component.scss'],
})
export class ProfilEditComponent implements OnInit {
  klient$!: Observable<Klient | undefined>;
  vybranyKlientId! : number;		  

  constructor(
	private service: KlientService,
	private route: ActivatedRoute,
	private router: Router		 
  ) { }


  ngOnInit() {
	this.klient$ = this.route.paramMap.pipe(
		switchMap((params: ParamMap) => 
			this.service.vratKlienta(params.get('id'))
		)
	);
  }

  goBack(klient){
			 this.router.navigate(['tabs/tab1/profil', klient.id]);
  }

}

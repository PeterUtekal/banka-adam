import { Component, OnInit } from '@angular/core';
import { Klient } from '../klient';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { KlientService } from '../klient.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-profil-component',
  templateUrl: './profil-component.component.html',
  styleUrls: ['./profil-component.component.scss'],
})

export class ProfilComponentComponent implements OnInit {

  klient$!: Observable<Klient | undefined>;

  constructor(
			 private route: ActivatedRoute,
			 private router: Router,
			 private service: KlientService
  ) { }

 	async ngOnInit() {
			  this.klient$ = this.route.paramMap.pipe(
				  switchMap((params: ParamMap) => 
					  this.service.vratKlienta(params.get('id'))
				  		)
				  );
  }
		 
  goBack(){
			 this.router.navigate(['/']);
  }
  upravitKlienta(klient: any){
			  this.router.navigate(['tabs/tab1/profil/edit', klient.id]);
  }


}

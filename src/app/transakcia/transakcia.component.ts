import { Component, OnInit } from '@angular/core';
import { Transakcia } from '../transakcia';
import { UcetService } from '../ucet.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Ucet } from '../ucet';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transakcia',
  templateUrl: './transakcia.component.html',
  styleUrls: ['./transakcia.component.scss'],
})

export class TransakciaComponent implements OnInit {

  transakcia$!: Observable<Transakcia | undefined>;
  vybranaTransakciaId!: number;
  transakcie$!: Observable<Transakcia[]>;
  vybranyUcetId!: number;

  constructor(
    private ucetService: UcetService,
    private route: ActivatedRoute,
    private location: Location) { }

  async ngOnInit() {
    this.vratTransakciu();
  }

  private vratTransakciu() {
    this.transakcia$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.ucetService.vratTransakciu(params.get('id'))
      )
    );
  }

  goBack() {
    this.location.back();
  }

  // private vratTransakcie() {
  //   this.transakcie$ = this.route.paramMap.pipe(switchMap(params => {
  //     // (+) before `params.get()` turns the string into a number
  //     this.vybranyUcetId = +params.get('id');
  //     return this.ucetService.vratTransakcie(this.vybranyUcetId);
  //   }));}

 

}

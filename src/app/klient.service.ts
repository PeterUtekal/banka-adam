import { Injectable } from '@angular/core';
import { Klient } from './klient';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KlientService {

  klienti: Klient[] = [
    {
      id: 1,
      titulPred: 'Bc.',
      meno: 'Fero',
      priezvisko: 'Klinovský',
      titulZa: 'PhD.',
      trvalyPobyt: 'Nižná, Orličie 741',
      korespondencnaAdresa: 'Bratislava',
      fotka: "FOTKA"
    },
    {
      id: 2,
      titulPred: 'Ing.',
      meno: 'Jozef',
      priezvisko: 'Klinovský',
      titulZa: '',
      trvalyPobyt: 'Nižná, Orličie 741',
      korespondencnaAdresa: 'Rabčice',
      fotka: 'FOTKA'
    }
  ];

constructor() { }

vratKlientov(): Observable<Klient[]> {
  return of(this.klienti);
}

vratKlienta(id: string | null): Observable<Klient | undefined >{
  let convertedId: number;
  if (typeof id == "string") {
    convertedId = +id;
  }
  console.log('vratKlienta service call - ' + id + convertedId! )
  const klienti = this.vratKlientov();
  const vybranyKlient = klienti.pipe(map((klienti: Klient[]) => klienti.find(klient => klient.id === convertedId)));

  return vybranyKlient;
}


}

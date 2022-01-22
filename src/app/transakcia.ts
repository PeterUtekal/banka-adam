import { ETypTransakcie } from './e-typ-transakcie.enum';

export class Transakcia{
		  id: number;
		  vlastnikId: number;
		  typ: ETypTransakcie;
		  suma: number;
		  jeToPrijem: boolean;

		  constructor(
				id: number,
				vlastnikId: number,
				typ: ETypTransakcie,
				suma: number,
				jeToPrijem: boolean	 
		  ){
					 this.id = id;
					 this.vlastnikId = vlastnikId;
					 this.suma = suma;
					 this.typ = typ
					 this.jeToPrijem = jeToPrijem;
		  }
}

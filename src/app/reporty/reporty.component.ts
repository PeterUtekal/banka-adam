import { Component, OnInit, NgZone, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { UcetService } from '../ucet.service';
import { Ucet } from '../ucet';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { Transakcia } from '../transakcia';
import { ETypTransakcie } from '../e-typ-transakcie.enum';
import {Location} from '@angular/common';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-reporty',
  templateUrl: './reporty.component.html',
  styleUrls: ['./reporty.component.scss']
})
export class ReportyComponent implements OnInit, AfterViewInit, OnDestroy {

	@ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;

  ucet$!: Observable<Ucet | undefined>;
  transakcie!: Transakcia[];
  vybranyUcetId!: number;
  vysledky: number[] = [0, 0, 0, 0, 0, 0];

  private chart!: am4charts.XYChart;

  constructor(
    private route: ActivatedRoute,
    private ucetService: UcetService,
    private zone: NgZone,
    private location: Location
    ) { }

  ngOnInit() {
    this.vratKlienta();
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      // Create chart instance
    const chart = am4core.create(this.doughnutCanvas.nativeElement, am4charts.PieChart);

// Add and configure Series
    const pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'suma';
    pieSeries.dataFields.category = 'typTransakcie';

// Let's cut a hole in our Pie chart the size of 30% the radius
    chart.innerRadius = am4core.percent(30);

// Put a thick white border around each Slice
    pieSeries.slices.template.stroke = am4core.color('#fff');
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template
  // change the cursor on hover to make it apparent the object can be interacted with
  .cursorOverStyle = [
    {
      property: 'cursor',
      value: 'pointer'
    }
  ];

    pieSeries.alignLabels = false;
    pieSeries.labels.template.bent = true;
    pieSeries.labels.template.radius = 3;
    pieSeries.labels.template.padding(0, 0, 0, 0);
    pieSeries.labels.template.fill = am4core.color("white");
;

    pieSeries.ticks.template.disabled = true;

// Create a base filter effect (as if it's not there) for the hover to return to
    const shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
    shadow.opacity = 0;

// Create hover state
    const hoverState = pieSeries.slices.template.states.getKey('hover'); // normally we have to create the hover state, in this case it already exists

// Slightly shift the shadow and make it more prominent on hover
    let hoverShadow = new am4core.DropShadowFilter(); 
    if (hoverState) {
      hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
    }

    hoverShadow.opacity = 0.7;
    hoverShadow.blur = 5;

// Add a legend
    chart.legend = new am4charts.Legend();
				chart.legend.labels.template.fill = am4core.color("white");

    this.ucet$.subscribe(data => {
      if (data) {
        this.transakcie = data.transakcie;
        console.log('data from dataList! ', data);
      }

  });
				/*
    this.transakcie.forEach(element => {
      if (!element.jeToPrijem) {

        switch (element.typ) {
          case ETypTransakcie.Potraviny:
            this.vysledky[0] = this.vysledky[0] + element.suma;
            break;
          case ETypTransakcie.Oble??enie:
            this.vysledky[1] = this.vysledky[1] + element.suma;
            break;
          case ETypTransakcie.Elektronika:
            this.vysledky[2] = this.vysledky[2] + element.suma;
            break;
          case ETypTransakcie.Pohostinstvo:
            this.vysledky[3] = this.vysledky[3] + element.suma;
            break;
          case ETypTransakcie.Vzdel??vanie:
            this.vysledky[4] = this.vysledky[4] + element.suma;
            break;
          case ETypTransakcie.Nehnutelnosti:
            this.vysledky[5] = this.vysledky[5] + element.suma;
            break;

          default:
            break;
        }

      }



    });

*/

    chart.data = [
      {typTransakcie: 'Potraviny', suma: 0},
      {typTransakcie: 'Oble??enie', suma: 0},
      {typTransakcie: 'Elektronika', suma: 150},
      {typTransakcie: 'Pohostinstvo', suma: 50},
      {typTransakcie: 'Vzdel??vanie', suma: 0},
      {typTransakcie: 'Nehnutelnosti', suma: 300}
    ];


    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

  private vratKlienta() {
    this.ucet$ = this.route.paramMap.pipe(switchMap(params => {
      // (+) before `params.get()` turns the string into a number
      const id = params.get('id');
      if (id) this.vybranyUcetId = +id; 
      return this.ucetService.vratUcet(this.vybranyUcetId);
    }));
  }

  goBack() {
    this.location.back();
  }

}


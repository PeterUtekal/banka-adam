// chart.module.ts
import { NgModule } from "@angular/core";
// Import angular-fusioncharts
import { FusionChartsModule } from "angular-fusioncharts";
// Import FusionCharts library
import * as FusionCharts from "fusioncharts";

// Load FusionCharts Individual Charts
import * as Charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { ReportyComponent } from "./reporty.component";

FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

@NgModule({
  declarations: [ReportyComponent],
  imports: [
    FusionChartsModule // Include in imports
  ],
  exports: [ReportyComponent]
})
export class ReportyModule {}

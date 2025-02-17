import { Component } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [CommonModule,
    CanvasJSAngularChartsModule
  ],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})
export class ChartsComponent {
  chartOptions = {
    animationEnabled: true,
    title: {
        text: "اسعار الذهب"
    },
    axisY: {
        valueFormatString: "#0",
        suffix: " ر,س "
    },
    data: [{
        type: "splineArea",
        color: "rgba(85, 201, 96, 0.18)",
        xValueFormatString: "MMMM",
        dataPoints: [
            { x: new Date(2014, 1), y: 1000 },
            { x: new Date(2018, 5), y: 2000 },
            { x: new Date(2020, 0), y: 2500 },
            { x: new Date(2022, 0), y: 2700 },
            { x: new Date(2023, 0), y: 3000 },
            { x: new Date(2024, 0), y: 3500 }
        ]
    }]
}
}

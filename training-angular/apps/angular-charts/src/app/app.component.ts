import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { Inject, PLATFORM_ID } from '@angular/core';

import { DOCUMENT, isPlatformBrowser } from '@angular/common';

import { Chart, ChartItem, registerables } from 'chart.js';
Chart.register(...registerables);


@Component({
  standalone: true,
  imports: [
    RouterModule
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  chart: Chart | undefined;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
    this.getCharts(null);
  }

  getCharts(items: any) {
    if (isPlatformBrowser(this.platformId)) {
      const ctx = this.document.getElementById('myChart') as HTMLCanvasElement;
      // const ctx = this.myChartRef.nativeElement.getContext('2d');
      const labels = ['2018', '2019', '2020', '2021', '2022', '2023', '2024'];
      const data = {
        labels: labels,
        datasets: [
          {
            label: 'Film',
            data: [10, 40, 30, 20, 10, 40, 70],
            backgroundColor: ['#0d6efd'],
            borderColor: ['#0d6efd'],
            borderWidth: 1,
            pointStyle: 'circle',
            pointRadius: 5,
            pointHoverRadius: 10
          },

          {
            label: 'Série',
            data: [null, null, null, 110, 140, 130, 120],
            backgroundColor: ['#0dcaf0'],
            borderColor: ['#0dcaf0'],
            borderWidth: 1,
            pointStyle: 'circle',
            pointRadius: 5,
            pointHoverRadius: 10
          },
        ]
      };
      const config: any = {
        type: 'line',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'left',
            },
            title: {
              display: true,
              text: 'Films et Séries par année'
            },
          },
          scales: {
            x: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Année',
              },
            },
          },
        }
      };
      this.chart = new Chart(ctx, config);
    }
  }
}


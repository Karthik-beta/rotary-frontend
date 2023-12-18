import { Component } from '@angular/core';

@Component({
  selector: 'app-prod-info',
  templateUrl: './prod-info.component.html',
  styleUrls: ['./prod-info.component.scss']
})
export class ProdInfoComponent {


    rows: number = 10;
    currentPage: number = 1;
    totalRecords: number = 0;
    text: string = '';
    results: any[] = [];
    rowsPerPageOptions: number[] = [10, 20, 30];
    loading: boolean = false;

    chartOEEData: any;

    chartOEEOptions: any;

    stateOptions: any[] = [
        { label: 'Show', value: 'true' },
        { label: 'Hide', value: 'false' }
    ];

    showElements: string = 'true';

    ngOnInit(): void {
        this.initChart();
    }

    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.chartOEEData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'],
            datasets: [
                {
                    label: 'Plant 1',
                    data: [65, 69, 80, 81, 82, 85, 87, 89, 91, 92, 95],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--green-700'),
                    borderColor: documentStyle.getPropertyValue('--green-700'),
                    tension: .4
                }
            ]
        };

        this.chartOEEOptions = {
            maintainAspectRatio: false,
            aspectRatio: 2,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }
}

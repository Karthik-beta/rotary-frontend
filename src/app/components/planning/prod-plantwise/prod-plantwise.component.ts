import { Component } from '@angular/core';

@Component({
  selector: 'app-prod-plantwise',
  templateUrl: './prod-plantwise.component.html',
  styleUrls: ['./prod-plantwise.component.scss']
})
export class ProdPlantwiseComponent {


    rows: number = 10;
    currentPage: number = 1;
    totalRecords: number = 0;
    text: string = '';
    results: any[] = [];
    rowsPerPageOptions: number[] = [10, 20, 30];
    loading: boolean = false;



    barChart: any;

    barOptions: any;

    stateOptions: any[] = [
        { label: 'Show', value: 'true' },
        { label: 'Hide', value: 'false' }
    ];

    showElements: string = 'true';

    ngOnInit(): void {
        this.initCharts();
    }


    initCharts() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.barChart = {
            labels: [''],
            datasets: [
                {
                    label: 'Running',
                    backgroundColor: documentStyle.getPropertyValue('--green-500'),
                    borderColor: documentStyle.getPropertyValue('--green-500'),
                    data: [65]
                },
                {
                    label: 'Breakdown',
                    backgroundColor: documentStyle.getPropertyValue('--red-400'),
                    borderColor: documentStyle.getPropertyValue('--red-400'),
                    data: [35]
                }
            ]
        };

        this.barOptions = {
            indexAxis: 'y',
            maintainAspectRatio: false,
            aspectRatio: 3.5,
            plugins: {
                legend: {
                    // display: false,
                    labels: {
                        color: textColor
                    },
                datalabels: {
                    display: true,
                    color: textColor
                }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    stacked: true,
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

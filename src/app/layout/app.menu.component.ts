import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home' }
                ]
            },

            //planning
            {
                label: 'Planning',
                items: [
                    { label: 'Production planning', icon: 'fa-solid fa-calendar' },
                    { label: 'Line/Machine Configuration', icon: 'fa-solid fa-cog' },
                ]
            },

            //production
            {
                label: 'Resource Management',
                items: [
                    {
                        label: 'Resource Management', icon: 'fa-solid fa-user',
                        items: [
                            {
                                label: 'Dashboard', icon: 'fa-solid fa-tachometer',
                                items: [
                                    { label: 'Shift Strength V/S Skill Matrix', icon: 'fa-solid fa-scale-balanced' },
                                    { label: 'Shift Strength', icon: 'fa-solid fa-users' },
                                    { label: 'Evacuation', icon: 'fa-solid fa-right-from-bracket' },
                                ]
                            },
                            { label: 'Onboarding', icon: 'fa-solid fa-user-plus' },
                            {
                                label: 'Resource Allocation', icon: 'fa-solid fa-sliders',
                                items: [
                                    { label: 'Shift management', icon: 'fa-solid fa-list-check' },
                                    { label: 'Reserve Skill Matrix Employee', icon: 'fa-solid fa-people-roof' },
                                ]
                            },
                            {
                                label: 'Attendance Regularization', icon: 'fa-solid fa-people-roof',
                                items: [
                                    { label: 'Manual Attendance Management', icon: 'fa-solid fa-fingerprint' },
                                    { label: 'Leave Management', icon: 'fa-solid fa-calendar-days' },
                                    { label: 'Compensatory Off Management', icon: 'fa-solid fa-calendar-plus' },
                                    { label: 'On Duty Management', icon: 'fa-solid fa-calendar-minus' },
                                    { label: 'Gate Pass Management', icon: 'fa-solid fa-address-card' },
                                    { label: 'Holiday Management', icon: 'fa-solid fa-calendar-check' },
                                ]
                            },
                            { label: 'Daily Attendance Info', icon: 'fa-solid fa-calendar-days' },
                            {
                                label: 'Monthly Info', icon: 'fa-solid fa-calendar',
                                items: [
                                    { label: 'Monthly In - Out', icon: 'fa-solid fa-clock' },
                                    { label: 'Monthly In – Out Register', icon: 'fa-solid fa-calendar-days' },
                                    { label: 'Monthly Muster Roll Register', icon: 'fa-solid fa-calendar-plus' },
                                    { label: 'Payroll Output Register', icon: 'fa-solid fa-calendar-plus' },
                                ]
                            }
                        ]
                    },
                ]
            },

            {
                label: 'UTILIZATION MANAGEMENT',
                items: [
                    {
                        label: 'Utilization Management', icon: 'fa-solid fa-cogs',
                        items: [
                            {
                                label: 'Dashboard', icon: 'fa-solid fa-tachometer',
                                items: [
                                    { label: 'Cafeteria', icon: 'fa-solid fa-utensils' },
                                    { label: 'Tuck Shop', icon: 'fa-solid fa-shop' },
                                    { label: 'Stationary', icon: 'fa-solid fa-book' },
                                    { label: 'Medical Store', icon: 'fa-solid fa-house-medical' },
                                    { label: 'Clothing', icon: 'fa-solid fa-shirt' },
                                ]
                            },
                        ]
                    }
                ]
            },

            {
                label: 'Production Andon',
                items: [
                        {
                            label: 'Production Andon', icon: 'fa-solid fa-cogs',
                            items: [
                                { label: 'Plant-wise', icon: 'fa-solid fa-industry' },
                                { label: 'Shopfloor-wise', icon: 'fa-solid fa-building' },
                                { label: 'Assemblyline-wise', icon: 'fa-solid fa-cogs' },
                                { label: 'Machine-wise', icon: 'fa-solid fa-cog' },
                                { label: 'Production Info', icon: 'fa-solid fa-table' }
                            ]
                        },
                ],
            },


            //Breakdown
            {
                label: 'Breakdown Andon',
                items: [
                    {
                        label: 'Andon Breakdown', icon: 'fa-solid fa-tools',
                        items: [
                            {
                                label: 'Dashboard', icon: 'fa-solid fa-tachometer',
                                items: [
                                    { label: 'Plant Breakdown', icon: 'fa-solid fa-industry' },
                                    { label: 'Shopfloor Breakdown', icon: 'fa-solid fa-wrench' },
                                    { label: 'Category Breakdown', icon: 'fa-solid fa-list-alt' },
                                    { label: 'Alerts', icon: 'fa-solid fa-exclamation-circle' },
                                ]
                            },
                            { label: 'Andon Call Help', icon: 'fa-solid fa-phone' },
                            { label: 'Alerts Info', icon: 'fa-solid fa-exclamation-circle' },
                            {
                                label: 'Andon Breakdown Analysis', icon: 'fa-solid fa-chart-bar',
                                items: [
                                    { label: 'Assemblyline Analysis', icon: 'fa-solid fa-chart-bar' },
                                    { label: 'Machinewise Analysis', icon: 'fa-solid fa-chart-bar' },
                                ]
                            },
                        ]
                    },
                ]
            },

            //Quality
            {
                label: 'Quality Management',
                items: [
                    { label: 'Quality Management', icon: 'fa-solid fa-check-to-slot' },
                ]
            },

            //OEE
            {
                items: [
                    { label: 'OEE', icon: 'fa-solid fa-chart-line' }
                ]
            },

            //ToDo
            {
                items: [
                    { label: 'TO-DO', icon:'fa-solid fa-list-check' }
                ]
            },

            //Reports
            {
                label: 'Reports',
                items: [
                    {
                        label: 'Reports', icon: 'fa-solid fa-file',
                        items: [
                            {
                                label: 'Production info', icon: 'fa-solid fa-chart-bar',
                                items: [
                                    { label: 'Production Planning', icon: 'fa-solid fa-chart-bar' },
                                    { label: 'Production Line Config', icon: 'fa-solid fa-chart-bar' },
                                    { label: 'Production Andon', icon: 'fa-solid fa-chart-bar' },
                                ]
                            },
                            {
                                label: 'Breakdown info', icon: 'fa-solid fa-chart-bar',
                                items: [
                                    { label: 'Alerts info', icon: 'fa-solid fa-bell' },
                                    { label: 'Alerts Machinewise', icon: 'fa-solid fa-exclamation-circle' },
                                ]
                            },
                            {
                                label: 'Resource Management', icon: 'fa-solid fa-chart-bar',
                                items: [
                                    { label: 'Daily Info', icon: 'fa-solid fa-bell' },
                                    { label: 'Monthly Info', icon: 'fa-solid fa-exclamation-circle' },
                                ]
                            },
                            {
                                label: 'Quality info', icon: 'fa-solid fa-chart-bar',
                                items: [
                                    { label: 'Quality Management', icon: 'fa-solid fa-bell' },
                                    // { label: 'Quality Andon', icon: 'fa-solid fa-exclamation-circle' },
                                ]
                            },
                            {
                                label: 'OEE Anlaysis', icon: 'fa-solid fa-chart-bar'
                            }
                        ]
                    },
                ]
            },


            //WIP
            {
                label: 'Performance Management',
                items: [
                    { label: 'Material Transactions', icon: 'fa-solid fa-arrow-right-arrow-left', routerLink: ['/material'] },
                    {
                        label: 'Production', icon: 'fa-solid fa-industry',
                        items: [
                            { label: 'Production Performance', icon: 'fa-solid fa-gauge-high', routerLink: ['/production_performance'] },
                            { label: 'Production Performance-SA', icon: 'fa-solid fa-chart-simple', routerLink: ['/production_performance_SA'] },
                        ]
                    },
                    {
                        label: 'Quality Performance', icon: 'fa-solid fa-check-to-slot',
                        items: [
                            { label: 'Inward or Final Quality', icon: 'fa-solid fa-square-check', routerLink: ['/inward'] },
                            { label: 'Inprocesses or Line Quality', icon: 'fa-solid fa-list-check', routerLink: ['/inprocess'] },
                        ]
                    },
                    {
                        label: 'Overall MIS', icon: 'fa-solid fa-server', routerLink: ['/inward_2']

                    },
                    {
                        label: 'Trends', icon: 'fa-solid fa-check-to-slot',
                        items: [
                            { label: 'Order Trends', icon: 'fa-solid fa-square-check', routerLink: ['/trends'] },
                            { label: 'Order Distribution/Delivery Efficiency', icon: 'fa-solid fa-list-check', routerLink: ['/order_disturb'] },
                            { label: 'Rejection', icon: 'fa-solid fa-x', routerLink: ['/inprocess_reject'] },
                            { label: 'ECP/NDP', icon: 'fa-solid fa-list-check', routerLink: ['/ecr'] },

                        ]
                    },

                    // { separator: true },

                    // { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                    // { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
                    // { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate'] },
                    // { label: 'Button', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
                    // { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
                    // { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
                    // { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
                    // { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
                    // { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
                    // { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
                    // { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'], routerLinkActiveOptions: { paths: 'subset', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' } },
                    // { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
                    // { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
                    // { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
                    // { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
                ]
            },

            // { separator: true },


            // Settings
            {
                label: 'Settings',
                items: [
                    {
                        label: 'Settings', icon: 'fa-solid fa-gear',
                        items: [
                            { label: 'Configuration', icon: 'fa-solid fa-cogs', routerLink: ['/config'] },
                        ]
                    }
                ]
            }


            // {
            //     label: 'Prime Blocks',
            //     items: [
            //         { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW' },
            //         { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank' },
            //     ]
            // },
            // {
            //     label: 'Utilities',
            //     items: [
            //         { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['/utilities/icons'] },
            //         { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
            //     ]
            // },
        //     {
        //         label: 'Pages',
        //         icon: 'pi pi-fw pi-briefcase',
        //         items: [
        //             {
        //                 label: 'Landing',
        //                 icon: 'pi pi-fw pi-globe',
        //                 routerLink: ['/landing']
        //             },
        //             {
        //                 label: 'Auth',
        //                 icon: 'pi pi-fw pi-user',
        //                 items: [
        //                     {
        //                         label: 'Login',
        //                         icon: 'pi pi-fw pi-sign-in',
        //                         routerLink: ['/auth/login']
        //                     },
        //                     {
        //                         label: 'Error',
        //                         icon: 'pi pi-fw pi-times-circle',
        //                         routerLink: ['/auth/error']
        //                     },
        //                     {
        //                         label: 'Access Denied',
        //                         icon: 'pi pi-fw pi-lock',
        //                         routerLink: ['/auth/access']
        //                     }
        //                 ]
        //             },
        //             {
        //                 label: 'Crud',
        //                 icon: 'pi pi-fw pi-pencil',
        //                 routerLink: ['/pages/crud']
        //             },
        //             {
        //                 label: 'Timeline',
        //                 icon: 'pi pi-fw pi-calendar',
        //                 routerLink: ['/pages/timeline']
        //             },
        //             {
        //                 label: 'Not Found',
        //                 icon: 'pi pi-fw pi-exclamation-circle',
        //                 routerLink: ['/notfound']
        //             },
        //             {
        //                 label: 'Empty',
        //                 icon: 'pi pi-fw pi-circle-off',
        //                 routerLink: ['/pages/empty']
        //             },
        //         ]
        //     },
        //     {
        //         label: 'Hierarchy',
        //         items: [
        //             {
        //                 label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
        //                 items: [
        //                     {
        //                         label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
        //                         items: [
        //                             { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
        //                             { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
        //                             { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
        //                         ]
        //                     },
        //                     {
        //                         label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
        //                         items: [
        //                             { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
        //                         ]
        //                     },
        //                 ]
        //             },
        //             {
        //                 label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
        //                 items: [
        //                     {
        //                         label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
        //                         items: [
        //                             { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
        //                             { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
        //                         ]
        //                     },
        //                     {
        //                         label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
        //                         items: [
        //                             { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
        //                         ]
        //                     },
        //                 ]
        //             }
        //         ]
        //     },
        //     {
        //         label: 'Get Started',
        //         items: [
        //             {
        //                 label: 'Documentation', icon: 'pi pi-fw pi-question', routerLink: ['/documentation']
        //             },
        //             {
        //                 label: 'View Source', icon: 'pi pi-fw pi-search', url: ['https://github.com/primefaces/sakai-ng'], target: '_blank'
        //             }
        //         ]
        //     }
        ];
    }
}

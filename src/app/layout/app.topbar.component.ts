import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared.service';
import { MenuModule } from 'primeng/menu';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit {

    // items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    @ViewChild('settingsMenu') settingsMenu: any;

    settings_items: MenuItem[] | undefined;

    constructor(public layoutService: LayoutService, private service: SharedService) { }


    databaseStatus: string = '';
    databaseSubscription: Subscription | undefined;


    model: any[] = [];

    ngOnInit(): void {
        this.checkDatabaseConnection();

        this.model = [
            {
                label: 'Options',
                items: [
                    { label: 'Config', icon: 'pi pi-fw pi-home', routerLink: ['/Config'] }
                ]
            }
        ];

        this.settings_items = [
            {
                label: 'Options',
                items: [
                    {
                        label: 'Update',
                        icon: 'pi pi-refresh',
                        routerLink: ['/config']

                    }
                ]
            }
        ];
    }

    checkDatabaseConnection() {
        this.databaseSubscription = this.service.getDatabaseStatus().subscribe({
          next: (response: any) => {
            // Set the database status message based on the response
            this.databaseStatus = response.message;
          },
          error: (error: any) => {
            // Set an error message if the database connection check fails
            this.databaseStatus = 'Database connection error: ' + error.error.message;
          }
        });
      }
}

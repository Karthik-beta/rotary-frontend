import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LmcRoutingModule } from './lmc-routing.module';

import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { InputTextModule } from "primeng/inputtext";
import { SplitButtonModule } from 'primeng/splitbutton';
import { DetailsLmcComponent } from './details-lmc/details-lmc.component';
import { TableModule } from 'primeng/table';





@NgModule({
    imports: [
        CommonModule,
        LmcRoutingModule,

        InputMaskModule,
        InputNumberModule,
        InputTextModule,
        SplitButtonModule,
        TableModule,

    ],
    declarations: [
    //   DetailsLmcComponent
    ]
})
export class LmcModule { }

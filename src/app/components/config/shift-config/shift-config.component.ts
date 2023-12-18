import { Component } from '@angular/core';

@Component({
  selector: 'app-shift-config',
  templateUrl: './shift-config.component.html',
  styleUrls: ['./shift-config.component.scss']
})
export class ShiftConfigComponent {

    shiftList = [
        {
            shift_name: "FS",
            shift_start: "08:00:00",
            shift_end: "20:00:00",
            lunch_start: null,
            lunch_end: null,
            lunch_time: "00:30:00",
            tea_1: "00:15:00",
            tea_2: "00:15:00",
            total_hours: "11:00:00"
        },
        {
            shift_name: "SS",
            shift_start: "20:00:00",
            shift_end: "08:00:00",
            lunch_start: null,
            lunch_end: null,
            lunch_time: "00:30:00",
            tea_1: "00:15:00",
            tea_2: "00:15:00",
            total_hours: "11:00:00"
        }
    ]

}

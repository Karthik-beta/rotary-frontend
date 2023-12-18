import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SharedService } from 'src/app/shared.service';
import { DatePipe } from '@angular/common';


import { timer } from 'rxjs';
import { switchMap, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-add-edit-lmc',
  templateUrl: './add-edit-lmc.component.html',
  styleUrls: ['./add-edit-lmc.component.scss'],
  providers: [DatePipe],
})

export class AddEditLmcComponent implements OnInit {


    items: MenuItem[] = [];
    companies: any=[];
    plant: any=[];
    shopfloor: any=[];
    assembly_line: any=[];
    machine_id: any;
    shifts: any;

        //PrimeNg Table
        andonList: any[] = [];
        rows: number = 10;
        currentPage: number = 1;
        totalRecords: number = 1;
        text: string = '';
        results: any[] = [];
        rowsPerPageOptions: number[] = [10, 20, 30];
        loading: boolean = false;

        planned: number;

        processing: number;

        completed: number;

        transaction_today: number;



        @Input() lmcPlan: any;



    constructor(private service: SharedService, private datePipe: DatePipe) {
      // this.startDate = '2023-10-19';
      // this.selectedTime = '06:00';
      this.companies = [
        { name: 'HAMILTON' },
      ],
      this.plant = [
        { name: 'CHENNAI' },
      ],
      this.shopfloor = [
        { name: 'SHOPFLOOR-1' },
      ],
      this.assembly_line = [
        { name: 'ASSEMBLYLINE-1' },
      ],
      this.machine_id = [
        { name: 'SG05-250T'},
      ],
      this.shifts = [
        { name: 'Shift FS'},
        { name: 'Shift SS'},
      ]
    }



    productionPlanList:any=[];
    ModalTitle:string="";
    ActivateAddEditProdPlanComp:boolean=false;
    prodplan:any;
    searchText:string="";
    ProductionPlanListWithoutFilter:any=[];



      // Open JobWorks
      openJobList: any[] = [];

      slotList: any[] = [];


      // Slot Configuration
      start_date: any;
      quantity: number = 0;
      selectedProduct: any;
      selected_company: any;
      selected_plant: any;
      selected_shopfloor: any;
      selected_assemblyline: any;
      selected_machineid: any;
      selected_shift: any;


    //   onDateSelect(event: any) {
    //     // Assuming that the event value is a Date object
    //     if (event.value) {
    //       // Format the date to "yy-mm-dd"
    //       const year = event.value.getFullYear();
    //       const month = (event.value.getMonth() + 1).toString().padStart(2, '0');
    //       const day = event.value.getDate().toString().padStart(2, '0');

    //       // Assign the formatted date to the start_date property
    //       this.startDate = `${year}-${month}-${day}`;
    //     }
    //   }

    //   onDateSelect(selectedDate: Date) {
    //     // Format the selected date as 'yy-mm-dd'
    //     this.startDate = this.formatDate(selectedDate);
    //   }

    //   private formatDate(date: Date): string {
    //     const year = date.getFullYear().toString();
    //     const month = (date.getMonth() + 1).toString().padStart(2, '0');
    //     const day = date.getDate().toString().padStart(2, '0');

    //     return `${year}-${month}-${day}`;
    //   }

    onDateSelect(event) {
        this.startDate = this.datePipe.transform(event, 'yyyy-MM-dd');
      }


      addLineMachineConfigSlot() {
        // if (this.selectedJobWork && this.selectedJobWork.job_id && this.productionPlanList && this.productionPlanList.product_id) {
          // Construct the data object to send
          const slot = {
            product_id: this.productionPlanList[0].product_id, // Replace with the actual property name
            job_id: this.productionPlanList[0].job_id,
            quantity: this.productionPlanList[0].quantity, // Replace with the actual property name
            start_date: this.startDate,
            company: this.selected_company.name,
            plant: this.selected_plant.name,
            shopfloor: this.selected_shopfloor.name,
            assembly_line: this.selected_assemblyline.name,
            machine_id: this.selected_machineid.name,
            // start_shift: this.selected_shift,
            // start_time: this.selectedTime,
          };

          console.log('Data to send:', slot);

          // Call the service method to send the data
          this.service.addLineMachineConfigSlot(slot).subscribe({
            next: (response) => {
              // Handle the response, e.g., show a success message
              console.log('Response from the server:', response);

              // After successfully posting data, query for data with the same job_id
              this.getLineMachineConfigData({ job_id: slot.job_id });
            },
            error: (error) => {
              // Handle any errors, e.g., show an error message
              console.error('Error sending data:', error);
            }
          });
        }




    // Function to query data with the same job_id
    getLineMachineConfigData(params: any) {
      this.service.getLineMachineConfigSlot(params).subscribe({
        next: (data) => {
          this.slotList = data; // Update slotList with the retrieved data
          console.log('Data from slot with the same job_id:', data);
        },
        error: (error) => {
          console.error('Error fetching data:', error);
        }
      });
    }


    // Declare these variables in your component
  startDate: string="";
  selectedShift: string="";
  selectedTime: string="";

  // Function to convert time to 24-hour format
  convertTo24HourFormat() {
    // Split the time into hours and minutes
    const timeParts = this.selectedTime.split(":");
    if (timeParts.length === 2) {
      const originalHours = parseInt(timeParts[0], 10);
      const minutes = parseInt(timeParts[1], 10);

      // Extract AM or PM
      const ampm = this.selectedTime.slice(-2);

      // Create a new variable for converted hours
      let hours = originalHours;

      // Convert to 24-hour format
      if (ampm === "PM" && hours < 12) {
        hours += 12;
      } else if (ampm === "AM" && hours === 12) {
        hours = 0;
      }

      // Format the time in 24-hour format
      this.selectedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
      console.log('Time in 24-hour format:', this.selectedTime);
    }
  }



  selectedJobWork: any; // This will store the selected job work


  // onJobSelected(event: any) {
  //   const selectedJobId = event.target.value;
  //   console.log('Selected job ID:', selectedJobId);

  //   // Call the service method to get production plan by ID
  //   this.service.getProdPlanById(selectedJobId).subscribe({
  //     next: (data) => {
  //       this.productionPlanList = data; // Update the production plan list
  //       console.log('Production plan data:', data);
  //     },
  //     error: (error) => {
  //       console.error('Error fetching production plan data:', error);
  //     },
  //   });
  // }

  selectedJob: string | undefined;

  onJobSelected(event: any) {
    // const selectedJobId = event.target.value;
    const selectedJobId = this.selectedJobWork.job_id;
    // console.log('Selected job ID:', selectedJobId);

    // Call the service method to get production plan by ID
    this.service.getProdPlanById({ job_id: selectedJobId }).subscribe({
      next: (data) => {
        // console.log('Production plan data:', data);

        // Check the structure of the response and identify the correct property for "id"
        // For example, if "id" is nested, access it accordingly
        // const correspondingId = data.map(item => item.id); // Update this line based on the actual structure
        const correspondingId = data.id;

        // console.log('Corresponding ID:', correspondingId);

        // If you want to update the production plan list with the selected ID
        this.productionPlanList = data; // Update with the actual data structure
        // console.log('Production plan data:', data);
      },
      error: (error) => {
        console.error('Error fetching production plan data:', error);
      },
    });
  }


















  refreshProdPlanList() {
    // this.loading = true;

    // const params = {
    //   page: this.currentPage.toString(),
    //   page_size: this.rows.toString()
    // };

    // this.service.getProductionPlan(params).subscribe((data: any) => {
    //   this.productionPlanList = data.results; // Assuming your API response has a 'results' property
    //   this.totalRecords = data.count;   // Assuming your API response has a 'count' property
    //   this.loading = false;
    // });
  }

  // onJobSelected(event: Event) {
  //   const jobId = (event.target as HTMLSelectElement)?.value;
  //   if (jobId) {
  //       this.selectedJobId = jobId;
  //       this.refreshProdPlanListForSelectedJob();
  //   }
  // }



    ngOnInit(): void {
      this.refreshProdPlanList();
      this.loadOpenjobList();
      this.statsview();


      this.items = [
        { label: 'Import', icon: 'fas fa-file-import' },
        { label: 'Export', icon: 'fas fa-download' },
        // { separator: true },
    ];




    }

    addClick(){
      this.prodplan={
        ProductionPlanId:0,
        ProductionPlanName:""
      }
      this.ModalTitle="Add Production Plan";
      this.ActivateAddEditProdPlanComp=true;
    }

    editClick(item: any){
      this.prodplan=item;
      this.ModalTitle="Edit Production Plan";
      this.ActivateAddEditProdPlanComp=true;
    }

    deleteClick(item: any){
    //   if(confirm('Are you sure??')){
    //     this.service.deleteProductionPlanning(item.ProductionPlanId).subscribe(data=>{
    //       alert(data.toString());
    //       this.refreshProdPlanList();
    //     })
    //   }
    }

    closeClick(){
      this.ActivateAddEditProdPlanComp=false;
      this.refreshProdPlanList();
    }


    loadOpenjobList() {
      this.service.getAllOpenJobWork().subscribe((data: any) => {
        // this.openJobList = data.map(item => ({name: item.job_id, code: item.id}));;
        this.openJobList = data;
        // console.log('Open Job List:', this.openJobList);
      });
    }




    filterData(){
      var searchText = this.searchText.toLowerCase();

      this.productionPlanList = this.ProductionPlanListWithoutFilter.filter(function (el: any) {
        return el.EmployeeId.toString().toLowerCase().includes(searchText) ||
               el.productId.toString().toLowerCase().includes(searchText) ||
               el.drawingNo.toString().toLowerCase().includes(searchText) ||
              el.entrycustomer.toString().toLowerCase().includes(searchText) ||
              el.entrypono.toString().toLowerCase().includes(searchText) ||
              el.entrybatchno.toString().toLowerCase().includes(searchText) ||
              el.plandate.toString().toLowerCase().includes(searchText) ||
              el.expecteddate.toString().toLowerCase().includes(searchText);
      });
    }

    statsview() {
        timer(0, 10000)  // Emit an initial value immediately and then every 10 seconds
            .pipe(
                switchMap(() => this.service.getProductionStats()),  // Switch to the new observable every 10 seconds
                distinctUntilChanged()  // Only emit when the data changes
            )
            .subscribe((data: any) => {
                this.planned = data.planned;
                this.processing = data.order_in_process;
                this.completed = data.completed;
                this.transaction_today = data.transactions_today;
            });
    }

  }

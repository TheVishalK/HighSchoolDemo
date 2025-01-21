import { Component } from '@angular/core';
import { SchoolService } from '../school.service';
import { Router } from '@angular/router';
import { SchoolDetailComponent } from '../school-detail/school-detail.component';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-school-list',
  standalone: true,
  templateUrl: './school-list.component.html',
  styleUrl: './school-list.component.scss',
  imports: [SchoolDetailComponent],
  providers: []
})
export class SchoolListComponent {
  dataList : any;
  selectedSchool:any;

  constructor(private schoolService: SchoolService, private router: Router){
      this.schoolService.fetchSchools().subscribe((data)=>{
        this.dataList = data;
        console.log(this.dataList);
      });
  }

  showSchoolDetail(dbn:any){
    console.log("showSchoolDetail", dbn);
    const schools  = Array.from(this.dataList);
    // schools.filter((item) => item.dbn === dbn);
    // this.dataList = this.dataList.filt

    // //Route to dumb component with school data
    //this.router.navigate(['/detail', dbn]);
    console.log("CheckType", typeof this.dataList);
    
    this.selectedSchool = this.dataList.filter((item:any) =>item.dbn === dbn);
  }
}

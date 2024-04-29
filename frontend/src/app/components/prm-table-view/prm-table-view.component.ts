import { Component } from '@angular/core';
import { StudyDetails} from '../../modal/StudyDetails';
import { PrmService } from '../../services/prm.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-prm-table-view',
  templateUrl: './prm-table-view.component.html',
  styleUrl: './prm-table-view.component.css'
})
export class PrmTableViewComponent implements OnInit {


  

  

  studyFormTable: StudyDetails[] =[];

  displayedColumns: string[] = ['studyId','platform', 'riskStatus', 'sponsor', 'protocol', 'projectCode', 'studyStatus'];

 

  constructor(private prmService: PrmService){

  }
  ngOnInit(): void {
    this.prmService.getStudyDetails().subscribe((data) => {
      this.studyFormTable = data;
    });
  }


}

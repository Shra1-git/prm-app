import { Component } from '@angular/core';
import { StudyDetails } from '../../modal/StudyDetails';
import { PrmService } from '../../services/prm.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-prm-form',
  templateUrl: './prm-form.component.html',
  styleUrl: './prm-form.component.css'
})
export class PrmFormComponent {




  platformOptions: string[] =['Rave Build', 'Rave Maintenance', 'Viedoc Build', 'Viedoc Maintenance', 'Inform', 'Inform Maintenance'];
  ragOptions: string[] =['Red', 'Orange', 'Green'];
  studyOptions: string[] =['Started','Ongoing','Completed'];

  
  formData: StudyDetails = {
    studyDetailsId: 0,
platform: '',
ragStatus: '',
studyStatus: '',
projectCode: '',
sponsorName: '',
protocolNumber: '',
leadProgrammer: '',
clinicalResearchLead: '',
technicalDesigner: '',
validationLead: '',
dataTeamLead: '',
plannedMigrationDate: new Date(),
actualMigrationDate: new Date(),
prcfNumber: '',
lmActionItems: ''
  } ;
  prmForm !: FormGroup;

  constructor(private prmService: PrmService, private route: ActivatedRoute,
    private fb: FormBuilder, private router: Router){}

    id: number = 0;
  
  
  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.id = params['studyId'];
    });
    this.prmService.getStudy(this.id).subscribe((data) => {
      this.formData = data;
      this.prmForm.patchValue(data);
    });

    this.prmForm = this.fb.group({
      studyDetailsId: 0,
platform: [''],
ragStatus: [''],
studyStatus: [''],
projectCode: [''],
sponsorName: [''],
protocolNumber: [''],
leadProgrammer: [''],
clinicalResearchLead: [''],
technicalDesigner: [''],
validationLead: [''],
dataTeamLead: [''],
plannedMigrationDate: [new Date()],
actualMigrationDate: [new Date()],
prcfNumber: [''],
lmActionItems: ['']
  });

  

}

saveStudy() {
  this.prmService.editStudy(this.prmForm.value).subscribe((data)=>
    {
    this.router.navigate(['prmTableView']);
    alert("Form saved successfully");
    console.log("data submitted" + data);
  }
  )
  }


  deleteStudent() {
    let studyIdToDelete = this.prmForm.value['studyDetailsId']; 
    this.prmService.deleteStudy(studyIdToDelete).subscribe((data)=>
    {
      alert("Form deleted successfully");
    console.log("data deleted" + data);
    this.router.navigate(['prmTableView']);
  }
  )
  }
}

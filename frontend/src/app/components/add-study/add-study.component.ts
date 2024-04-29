import { Component } from '@angular/core';
import { PrmService } from '../../services/prm.service';
import { FormBuilder } from '@angular/forms';
import { StudyDetails } from '../../modal/StudyDetails';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-study',
  templateUrl: './add-study.component.html',
  styleUrl: './add-study.component.css'
})
export class AddStudyComponent {
  formData: StudyDetails[] = [];
  prmForm !: FormGroup;

  platformOptions: string[] =['Rave Build', 'Rave Maintenance', 'Viedoc Build', 'Viedoc Maintenance', 'Inform', 'Inform Maintenance'];
  ragOptions: string[] =['Red', 'Orange', 'Green'];
  studyOptions: string[] =['Started','Ongoing','Completed'];

  constructor(private prmService: PrmService, 
    private fb: FormBuilder, private router:Router){}

  
  
  ngOnInit(): void {
    this.prmService.getStudyDetails().subscribe((data) => {
      this.formData = data;
    });

    this.prmForm = this.fb.group({
      
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
  this.prmService.addStudy(this.prmForm.value).subscribe((data)=>
    {
    this.router.navigate(['prmTableView']);
    alert("Form saved successfully");
    console.log("data submitted" + data);
  }
  )
  }

}

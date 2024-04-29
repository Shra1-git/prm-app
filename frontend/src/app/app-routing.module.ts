import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrmTableViewComponent } from './components/prm-table-view/prm-table-view.component';
import { PrmFormComponent } from './components/prm-form/prm-form.component';
import { AddStudyComponent } from './components/add-study/add-study.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {path: 'prmTableView', 'component': PrmTableViewComponent},
  // {path: 'prmForm', 'component': PrmFormComponent},
  {path: 'prmForm/:studyId', 'component': PrmFormComponent},
  {path: 'addStudy', 'component': AddStudyComponent},
  {path: '', 'component': PrmTableViewComponent},
  {path:'**', 'component': NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

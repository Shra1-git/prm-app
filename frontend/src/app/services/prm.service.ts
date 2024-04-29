import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudyDetails } from '../modal/StudyDetails';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PrmService {

  private baseUrl = environment.apiEndpoint + '/prm/studydetails';



  

  constructor(private http:HttpClient) { }

  getStudyDetails(){
    return this.http.get<StudyDetails[]>(this.baseUrl);
  }

  getStudy(id: number) {
    return this.http.get<StudyDetails>(`${this.baseUrl}/${id}`);
  }

    addStudy(study: StudyDetails) {
      return this.http.post<StudyDetails>(this.baseUrl, study);

    }

    editStudy(study: StudyDetails) {
      return this.http.put<StudyDetails>(`${this.baseUrl}`, study);
    }

    deleteStudy(id: number) {
      return this.http.delete(`${this.baseUrl}/${id}`);
    }





}

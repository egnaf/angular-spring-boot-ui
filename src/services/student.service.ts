import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import '../utils/configs';
import {Observable} from 'rxjs';
import Student from '../objects/student';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StudentService {
  private gateway = `http://localhost:8081`;

  constructor(private http: HttpClient) {
  }

  getStudents(): Observable<Student> {
    return this.http.get<Student>(this.gateway + `/students`);
  }

  getStudent(id: string) {
    return this.http.get(this.gateway + `/students/` + id);
  }

  createStudent(student) {
    const body = JSON.stringify(student);
    return this.http.post(this.gateway + `/students`, body, httpOptions);
  }

  updateStudent(student) {
    const body = JSON.stringify(student);
    return this.http.post(this.gateway + `/students`, body, httpOptions);
  }

  deleteStudent(student) {
    return this.http.delete(this.gateway + `/students` + student.id);
  }
}

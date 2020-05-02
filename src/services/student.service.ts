import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import '../utils/configs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StudentService {
  private gateway = `http://localhost:8080`;

  constructor(private http: HttpClient) {
  }

  getStudents() {
    return this.http.get(this.gateway + `/students`);
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

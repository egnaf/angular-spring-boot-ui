import { Component, OnInit } from '@angular/core';
import Student from '../../objects/student';
import { FormControl } from '@angular/forms';
import {StudentService} from '../../services/student.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public students: Student[] = [];
  public student = new Student();

  ngOnInit(): void {
    this.getStudents();
  }

  constructor(private studentService: StudentService) {
  }

  getStudents() {
    this.studentService.getStudents().subscribe(
      // the first argument is a function which runs on success
      data => { this.students = data as any; },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading students')
    );
  }

  createStudent(student) {
    this.studentService.createStudent(student).subscribe(
      data => {
        this.getStudents();
        return true;
      },
      error => {
        console.log('Error saving student');
      }
    );
  }
}

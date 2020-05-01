import { Component, OnInit } from '@angular/core';
import Student from '../../objects/student';
import { FormControl } from '@angular/forms';
import {StudentService} from '../../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  a = 'Text777';
  students: Student[] = [
    {
      id: '1',
      firstName: 'Pavel',
      lastName: 'Durov',
      major: 'Poliglot',
      birthDay: 23244
    },
    {
      id: '2',
      firstName: 'Artemiy',
      lastName: 'Lebedev',
      major: 'Designer',
      birthDay: 348921
    }
  ];

  firstName = new FormControl();
  lastName = new FormControl();
  major = new FormControl();
  birthDay = new FormControl();

  public studentsFromServer;

  ngOnInit(): void {
    this.getStudents();
  }

  constructor(private studentService: StudentService) {
  }

  getStudents() {
    this.studentService.getStudents().subscribe(
      // the first argument is a function which runs on success
      data => { this.studentsFromServer = data; },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading foods')
    );
  }

  createStudent() {
    const student = new Student();
    student.firstName = this.firstName.value;
    student.lastName = this.lastName.value;
    student.major = this.major.value;
    student.birthDay = this.birthDay.value;

    // console.log(student);
    this.students.push(student);
  }
}

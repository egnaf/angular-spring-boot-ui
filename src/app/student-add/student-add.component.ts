import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../services/student.service';
import Student from '../../objects/student';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  public student: Student = new Student();

  constructor(private studentService: StudentService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  createStudent(student) {
    this.studentService.createStudent(student).subscribe(
      () => {
        console.log('Student has been added');
        this.router.navigate(['/students']).then(() => {});
      },
      () => {
        console.log('Student has not been added');
      }
    );
  }

  cancel() {
    this.router.navigate(['/students']).then(() => {});
  }

}

import { Component, OnInit } from '@angular/core';
import Student from '../../objects/student';
import {StudentService} from '../../services/student.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  private routeSub: Subscription;
  public student: Student = new Student();
  public birthday: Date;

  constructor(private studentService: StudentService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.studentService.getStudent(params.id).subscribe(
        data => {
          this.student = data as Student;
          this.birthday = new Date(this.student.birthday);
        },
        err => console.error(err),
        () => console.log('done loading student details')
      );
    });
  }

  updateStudent(student) {
    this.studentService.updateStudent(student).subscribe(
      () => {
        this.router.navigate(['/students/' + this.student.id]).then(() => {});
        return true;
      },
      () => {
        console.log('Error updating student');
      }
    );
  }

}

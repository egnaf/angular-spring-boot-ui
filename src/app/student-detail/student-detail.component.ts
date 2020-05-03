import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../services/student.service';
import { ActivatedRoute } from '@angular/router';
import Student from '../../objects/student';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  private routeSub: Subscription;
  public student: Student = new Student();
  public birthday: Date;

  constructor(private studentService: StudentService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.studentService.getStudent(params.id).subscribe(
        data => {
          this.student = data as Student;
          this.birthday = new Date(this.student.birthday);
        },
        err => console.error(err),
        () => console.log('done loading students')
      );
    });
  }
}

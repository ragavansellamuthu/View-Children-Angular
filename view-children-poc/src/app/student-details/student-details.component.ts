import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent  {

  @Input()
  student !: Student ;

  constructor(private studentService : StudentService) {}

  deleteStudent() {
    this.studentService.deleteStudent(this.student.id);
  }
  
}

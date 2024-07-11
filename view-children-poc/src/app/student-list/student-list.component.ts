import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { StudentDetailsComponent } from '../student-details/student-details.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

  students !: Student[] ;

  @ViewChildren(StudentDetailsComponent)
  studentDetailsComponents !: QueryList<StudentDetailsComponent>

  constructor(private studentService : StudentService) {
    this.getStudentList();
  }

  getStudentList(){
    this.studentService.getStudentList().subscribe(students => {
      this.students = students; 
    });
  }

  selectAll() {
    this.studentDetailsComponents.forEach(
      studentDetailsComponent => {
        studentDetailsComponent.student.selected=true;
      }
    );
  }

  deselectAll() {
    this.studentDetailsComponents.forEach(
      studentDetailsComponent => {
        studentDetailsComponent.student.selected=false;
      }
    );
  }

  deleteStudents() {
    let ids : number[] = [];
    this.studentDetailsComponents.forEach(
      studentDetailsComponent => {
        if(studentDetailsComponent.student.selected){
          ids.push(studentDetailsComponent.student.id);
        }
      }
    );
    if (ids.length > 0) {
      this.studentService.deleteStudents(ids);
      this.getStudentList();    
    }
  }

}

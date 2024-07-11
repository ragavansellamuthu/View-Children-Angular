import { Injectable } from '@angular/core';
import { Student } from './student';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students !: Student[] ;
  constructor() {
    this.students = [{
      id: 1,
      name: 'Ragavan',
      email: 'ragavan@gmail.com',
      contact: 8778088268,
      selected:false
    },{
      id: 2,
      name: 'Sanjay',
      email: 'sanjay@gmail.com',
      contact: 9900990099,
      selected:false
    },{
      id: 3,
      name: 'Srinivas',
      email: 'srinivas@gmail.com',
      contact: 8877887788,
      selected:false
    },{
      id: 4,
      name: 'Vicky',
      email: 'vicky@gmail.com',
      contact: 8889998889,
      selected:false
    }] ;
   }

  getStudentList() : Observable<Student[]>{
    return of(this.students);
  }

  deleteStudent(id:number){
    const index = this.students.findIndex(student => student.id === id);
    if (index !== -1) {
      this.students.splice(index, 1); // Remove 1 element from index
    }
  }

  deleteStudents(ids:number[]){
    this.students = this.students.filter(student => !ids.includes(student.id));
  }
}

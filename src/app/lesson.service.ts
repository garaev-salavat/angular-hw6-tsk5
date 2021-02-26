import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Lesson } from './lesson';
import { LESSONS } from './mock-lessons';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  lessons: Lesson[] = LESSONS;
  selectedLesson?: Lesson;

  private lessonsUrl = 'api/lessons'; 

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor() { }

  getLessons(): Lesson[] {
    return this.lessons;
  }

  getSelectedLesson(){
    return this.selectedLesson;
  }
}

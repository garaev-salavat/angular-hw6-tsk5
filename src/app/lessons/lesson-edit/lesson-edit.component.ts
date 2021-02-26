import { Component, OnInit } from '@angular/core';
import { Lesson } from 'src/app/lesson';
import { LessonService } from 'src/app/lesson.service';

@Component({
  selector: 'app-lesson-edit',
  templateUrl: './lesson-edit.component.html',
  styleUrls: ['./lesson-edit.component.css']
})
export class LessonEditComponent implements OnInit {

  lessonNumber: number;
  lessonDate: Date;
  lessonTheme: string;
  lessonHomework: string;
  lessonNote: string;

  constructor(private lessonService: LessonService) { }

  ngOnInit(): void {
      this.getLesson;
      console.log('получили урок в едит', this.lessonTheme)
  }

  getLesson() {
    this.lessonNumber = this.lessonService.getSelectedLesson().lessonNumber;
    this.lessonDate = this.lessonService.getSelectedLesson().lessonDate;
    this.lessonTheme = this.lessonService.getSelectedLesson().lessonTheme;
    this.lessonHomework = this.lessonService.getSelectedLesson().lessonHomework;
    this.lessonNote = this.lessonService.getSelectedLesson().lessonNote;
  }

}

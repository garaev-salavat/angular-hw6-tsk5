import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Lesson } from 'src/app/lesson';
import { LessonService } from 'src/app/lesson.service';
import { LESSONS } from 'src/app/mock-lessons';
import { LessonAddComponent } from '../lesson-add/lesson-add.component';
import { LessonEditComponent } from '../lesson-edit/lesson-edit.component';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css'],
})
export class LessonsComponent implements OnInit {
  lessons: Lesson[];

  constructor(public dialog: MatDialog, private lessonService: LessonService) {}

  ngOnInit(): void {
    this.getLessons();
  }

  getLessons(): void {
    this.lessons = this.lessonService.getLessons();
  }

  openAddDialog() {
    this.dialog.open(LessonAddComponent);
  }

  openEditDialog(lesson: Lesson) {
    console.log('Едит диалог ', lesson);
    this.lessonService.selectedLesson = lesson;
    this.dialog.open(LessonEditComponent);
  }
}

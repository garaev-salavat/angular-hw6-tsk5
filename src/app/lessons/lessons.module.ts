import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonAddComponent } from './lesson-add/lesson-add.component';
import { LessonEditComponent } from './lesson-edit/lesson-edit.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LessonsComponent, LessonAddComponent, LessonEditComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [LessonsComponent, LessonAddComponent, LessonEditComponent]
})
export class LessonsModule { }

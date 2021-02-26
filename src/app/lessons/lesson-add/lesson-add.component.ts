import { Component, Input, OnInit } from '@angular/core';
import { Lesson } from 'src/app/lesson';

@Component({
  selector: 'app-lesson-add',
  templateUrl: './lesson-add.component.html',
  styleUrls: ['./lesson-add.component.css']
})
export class LessonAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() lesson: Lesson;

}

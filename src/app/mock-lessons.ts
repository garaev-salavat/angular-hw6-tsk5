import { Lesson } from "./lesson";

export const LESSONS: Lesson[] = [
    {
        lessonNumber: 1,
        lessonDate: new Date(2021, 1, 16 ),
        lessonTheme: 'Привязка данных',
        lessonHomework: 'Домашнее задание на тему привязки данных',
        lessonNote: 'Примечания к уроку по привязке данных',
    },
    {
        lessonNumber: 2,
        lessonDate: new Date(2021, 1, 23 ),
        lessonTheme: 'Компоненты',
        lessonHomework: 'Домашнее задание на тему Компоненты',
        lessonNote: 'Примечания к уроку по Компоненты',
    },
    {
        lessonNumber: 3,
        lessonDate: new Date(2021, 1, 30 ),
        lessonTheme: 'Директивы',
        lessonHomework: 'Домашнее задание на тему Директивы',
        lessonNote: 'Примечания к уроку по Директивы',
    },
    {
        lessonNumber: 4,
        lessonDate: new Date(2021, 2, 6 ),
        lessonTheme: 'Жизненный цикл',
        lessonHomework: 'Домашнее задание на тему Жизненный цикл',
        lessonNote: 'Примечания к уроку по Жизненный цикл',
    },
    {
        lessonNumber: 5,
        lessonDate: new Date(2021, 2, 13 ),
        lessonTheme: 'Формы',
        lessonHomework: 'Домашнее задание на тему Формы',
        lessonNote: 'Примечания к уроку по Формы',
    },

]
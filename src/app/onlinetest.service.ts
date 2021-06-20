import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class OnlinetestService {

  quizzes: Quiz[] = [
    {
      question: 'To be a full stack web developer requires determination and self descipline?',
      answer: [
        {option: 'False', correct: false},
        {option: 'True', correct: true},
        {option: 'Neither true of false', correct: false},
        
      ]
    },
    {
      question: 'Full stack web development is in demand globally?',
      answer: [
        {option: 'True', correct: true},
        {option: 'False', correct: false},
        {option: 'Neither twue or false', correct: false},
        {option: 'Partially true and partially false', correct: false}
      ]
    },
    {
      question: 'Full stack web development is not part of ICT job?',
      answer: [
        {option: 'True', correct: false},
        {option: 'False', correct: true},
        {option: 'Neither twue or false', correct: false},
        {option: 'Partially true', correct: false}
      ]
    },
    {
      question: 'Mobile applications are not part of full stack web development?',
      answer: [
        {option: 'True', correct: false},
        {option: 'Neither true or false', correct: false},
        {option: 'false', correct: true},
        {option: 'Partially true', correct: false}
      ]
    },
    {
      question: 'What does XML stand for?',
      answer: [
        {option: 'eXtensible Multiple Langauge', correct: false},
        {option: 'eXtensible Markup langauge', correct: true},
        {option: 'eXtra Multiple Langauge', correct: false},
        {option: 'eXtra Multi-program Language', correct: false}
      ]
    },
    {
      question: 'Which of the following is not part of the front-end languages?',
      answer: [
        {option: 'css', correct: false},
        {option: 'Java', correct: false},
        {option: 'HTML', correct: true},
        {option: 'JavaScript', correct: false}
      ]
    },
    {
      question: 'What is the main primary role of Data Base',
      answer: [
        {option: 'To organize data in the background.', correct: false},
        {option: 'To store data in the background', correct: true},
        {option: 'Temporary store information', correct: false},
        {option: 'To manage all the applications on the net/site.', correct: false}
      ]
    },
    {
      question: "Full stack web development doesn't have to know the hardware of the computer?",
      answer: [
        {option: 'true', correct: false},
        {option: 'False', correct: true},
        {option: 'Optional', correct: false},
        {option: 'Mendotory', correct: false}
      ]
    },
    {
      question: 'A full stack developer is also known as an amalgation of langauges?', 
      answer: [
        {option: 'True', correct: true},
        {option: 'False', correct: false}
      ]
    },
    {
      question: 'Life without Technology is not a boring life?', 
      answer: [
        {option: 'True', correct: false},
        {option: 'False', correct: true}
      ]
    }
  ]

  constructor() { }

  getQuizzes(){
    return this.quizzes;
  }
}

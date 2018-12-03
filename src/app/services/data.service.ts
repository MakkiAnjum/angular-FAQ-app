import { Question } from './../models/Question';
import { Injectable } from "@angular/core";

@Injectable()
export class DataService {
    questions: Question[];

    constructor() {
        // this.questions = [
        //     {
        //       text: 'What is your name?',
        //       answer: 'My name is Makki.',
        //       hide: true
        //     },
        //     {
        //       text: 'What is your Favourite color?',
        //       answer: 'My favourite color is White.',
        //       hide: true
        //     },
        //     {
        //       text: 'What is your favorite language?',
        //       answer: 'My favorite language is Angular.',
        //       hide: true
        //     }
        //   ];
         
    }
    getQuestions() {
      if(localStorage.getItem('questions') === null){
        this.questions = [];
      } else {
        this.questions = JSON.parse(localStorage.getItem('questions'));
      }

        return this.questions;
    }

    addQuestions(question: Question) {
      this.questions.unshift(question);

      let questions;

      if(localStorage.getItem('questions') === null){
        questions = [];

        questions.unshift(question);
        localStorage.setItem('questions', JSON.stringify(questions));

      } else {
        questions = JSON.parse(localStorage.getItem('questions'));

        questions.unshift(question);
        localStorage.setItem('questions', JSON.stringify(questions));
      }

    }
    
    removeQuestion(question: Question) {
      for(let i = 0; i < this.questions.length; i++) {
        if(question === this.questions[i]){
          this.questions.splice(i, 1);
          localStorage.setItem('questions', JSON.stringify(this.questions));
        }
      }
  }
}
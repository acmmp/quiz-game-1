import { Injectable } from '@angular/core';
import { Question } from './quiz/question.model';
import { QUESTIONS } from './questions';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private questions = QUESTIONS;
  private currentQuestionIndex = 0;
  private score = 0;

  getQuestions() {
    return this.questions;
  }

  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }
  checkAnswer(answer: string) {
    const correctAnswer = this.questions[this.currentQuestionIndex].correctAnswer;
    if (answer === correctAnswer) {
      this.score++;
    }
    this.currentQuestionIndex++;
  }

  getScore() {
    return this.score;
  }

  resetQuiz() {
    this.currentQuestionIndex = 0;
    this.score = 0;
  }

  isQuizOver() {
    return this.currentQuestionIndex >= this.questions.length;
  }

  private allQuestions: string[] = [
    // ... Agrega aquí todas tus preguntas ...
  ];

  getRandomQuestions(): Question[] {
    // Implementa la lógica para obtener preguntas aleatorias
    // Asegúrate de que cada elemento sea un objeto Question
    return [
      {
        text: '¿Pregunta de ejemplo?',
        options: ['Opción 1', 'Opción 2', 'Opción 3'],
        correctAnswer: 'Opción 1'
      },
      // ... más preguntas
    ];
  }
}

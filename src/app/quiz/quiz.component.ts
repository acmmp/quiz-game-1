import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from '../quiz.service';
import { QuestionComponent } from '../question/question.component';
import { ResultComponent } from '../result/result.component';
import { Question } from './question.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  standalone: true,
  imports: [CommonModule, QuestionComponent, ResultComponent]
})
export class QuizComponent implements OnInit {
  questions: any[] = [
    // ... tus preguntas aquí ...
  ];

  currentQuestions: any[] = [];

  constructor(public quizService: QuizService) {}

  ngOnInit() {
    this.shuffleQuestions();
  }

  shuffleQuestions() {
    this.currentQuestions = [...this.questions]
      .sort(() => Math.random() - 0.5);
  }

  startNewRound() {
    this.questions = this.quizService.getRandomQuestions();
    this.quizService.resetQuiz();
  }

  onAnswerSelected(answer: string) {
    this.quizService.checkAnswer(answer);
  }

  onRestart() {
    this.quizService.resetQuiz();
  }
}

import { Component } from '@angular/core';
import { QuizService } from './quiz.service';
import { QuizComponent } from './quiz/quiz.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [QuizComponent]
})
export class AppComponent {
  title = 'Quiz Game Preguntas';
  description = 'Este proyecto ha sido realizado por Adrian Campayo con Angular 18';

  constructor(public quizService: QuizService) {}

  onRestart() {
    this.quizService.resetQuiz();
  }
}



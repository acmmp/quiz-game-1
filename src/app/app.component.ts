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
  totalFallos: number = 0; // Contador de fallos

  constructor(public quizService: QuizService) {}

  onRestart() {
    this.quizService.resetQuiz(); // Desordenar preguntas al reiniciar el juego
    this.totalFallos = 0; // Reiniciar contador al reiniciar el juego
  }

  // Método que se llama al final de la ronda
  onEndOfRound() {
    this.quizService.resetQuiz(); // Desordenar preguntas al final de la ronda
    // Aquí puedes manejar otras acciones al final de la ronda
  }

  onAnswerSelected(isCorrect: boolean) {
    if (!isCorrect) {
      this.totalFallos++; // Incrementar contador de fallos
    }
  }
}



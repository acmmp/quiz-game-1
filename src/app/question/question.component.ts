 import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class QuestionComponent {
  @Input() question: any;
  @Output() answerSelected = new EventEmitter<string>();
  incorrectAnswer: boolean = false;
  correctAnswer: boolean = false; // Agregar estado para respuesta correcta

  onSelect(option: string) {
    // Reiniciar estados antes de la verificación
    this.incorrectAnswer = false;
    this.correctAnswer = false;

    // Verificar si la opción seleccionada es la correcta
    if (option === this.question.correctAnswer) {
      this.correctAnswer = true; // Respuesta correcta
      this.answerSelected.emit(option); // Emitir respuesta correcta si es necesario
      // Aquí puedes avanzar a la siguiente pregunta si es necesario
    } else {
      this.incorrectAnswer = true; // Respuesta incorrecta
      // Restablecer el estado después de 1 segundo
      setTimeout(() => {
        this.incorrectAnswer = false;
        // Aquí puedes avanzar a la siguiente pregunta si es necesario
      }, 1000);
    }
  }
}

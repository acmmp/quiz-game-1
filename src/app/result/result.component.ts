import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ResultComponent {
  @Input() score!: number;
  @Output() restart = new EventEmitter<void>();

  onRestart() {
    this.restart.emit();
  }

  shareScore() {
    if (navigator.share) {
      navigator.share({
        title: 'Mi puntuación en el Quiz',
        text: `¡Obtuve ${this.score} puntos en el quiz! ¿Puedes superarme?`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      alert('La funcionalidad de compartir no es compatible con tu navegador.');
    }
  }
}


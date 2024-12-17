import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PickReviewerComponent } from './pick-reviewer/pick-reviewer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PickReviewerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kata-pickReviewer';
}

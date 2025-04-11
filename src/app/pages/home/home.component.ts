import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { exhibitions, Exhibition } from '../../shared/models/Exhibition';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  exhibitions: Exhibition[] = exhibitions;
}
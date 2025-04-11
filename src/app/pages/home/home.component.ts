import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  exhibitions = [
    { name: 'Ancient Egypt', image: 'images/aegypt.png' }, 
    { name: 'Medieval Europe', image: 'images/meurope.png' },
    { name: 'Industrial Revolution', image: 'images/irevolution.png' },
    { name: 'World War History', image: 'images/ww2.png' }
  ];
}
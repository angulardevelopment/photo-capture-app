import { Component } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [PhotoComponent]
})
export class AppComponent {
  title = 'photo-capture';
}

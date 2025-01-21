import { KeyValuePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-school-detail',
  standalone: true,
  imports: [KeyValuePipe],
  templateUrl: './school-detail.component.html',
  styleUrl: './school-detail.component.scss'
})
export class SchoolDetailComponent {
  @Input() school:any;
}

import { Component, inject, signal } from '@angular/core';
import { ListService } from './list.service';
import { MatCard, MatCardModule } from "@angular/material/card";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  private listService = inject(ListService);
  listData = signal<any>(null);

  constructor() {
    this.listService.getList().subscribe(data => {
      this.listData.set(data);
      console.log(this.listData());
      
    });
  }
}

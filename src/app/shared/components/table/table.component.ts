import { DatePipe, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    TableModule,
    MultiSelectModule,
    DropdownModule,
    TagModule,
    SliderModule,
    ProgressBarModule,
    ButtonModule,
    InputIconModule,
    IconFieldModule,
    InputTextModule,
    DatePipe,
    CurrencyPipe,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() users: any[]=[];
  selectedCustomers: { userName: string }[] = [];
  representatives: { userName: string }[] = [];
  statuses: { userName: string }[] = [];
  activityValues: { userName: string }[] = [];
  loading$: Observable<boolean> | undefined;
}

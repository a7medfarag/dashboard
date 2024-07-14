import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
import { TableComponent } from '../../shared/components/table/table.component';

interface IUser {
  id: string;
  nationality: string;
  referenceId: string
  date: string;
  sdkVersion: string;
  deviceModel: string;
  faceScan: string;
  docFront: string;
  docFullName: string;
  expirationdate: string;
  age: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    TableComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {

  users: IUser[] = [];
  selectedCustomers: {userName:string}[] = [];
  representatives: {userName:string}[] = [];
  statuses: {userName:string}[] = [];
  activityValues: {userName:string}[] = [];
  loading$: Observable<boolean> | undefined;
  getSeverity(data: string): "success" | "secondary" | "info" | "warning" | "danger" | "contrast" | undefined {
    return undefined
  }
  clear(value: any){
    value = null
  }

  ngOnInit(): void {
      this.users = [
        {
          age: 32,
          date: '2022-01-01',
          deviceModel: 'iPhone 13',
          docFullName: 'John Doe',
          docFront: 'front.jpg',
          expirationdate: '2023-12-31',
          faceScan: 'face.jpg',
          id: '12345',
          nationality: 'American',
          referenceId: 'ABC123',
          sdkVersion: '3.0.0',
        },
        {
          age: 32,
          date: '2022-01-01',
          deviceModel: 'iPhone 13',
          docFullName: 'John Doe',
          docFront: 'front.jpg',
          expirationdate: '2023-12-31',
          faceScan: 'face.jpg',
          id: '12345',
          nationality: 'American',
          referenceId: 'ABC123',
          sdkVersion: '3.0.0',
        },
        {
          age: 32,
          date: '2022-01-01',
          deviceModel: 'iPhone 13',
          docFullName: 'John Doe',
          docFront: 'front.jpg',
          expirationdate: '2023-12-31',
          faceScan: 'face.jpg',
          id: '12345',
          nationality: 'American',
          referenceId: 'ABC123',
          sdkVersion: '3.0.0',
        },
        {
          age: 32,
          date: '2022-01-01',
          deviceModel: 'iPhone 13',
          docFullName: 'John Doe',
          docFront: 'front.jpg',
          expirationdate: '2023-12-31',
          faceScan: 'face.jpg',
          id: '12345',
          nationality: 'American',
          referenceId: 'ABC123',
          sdkVersion: '3.0.0',
        },
        {
          age: 32,
          date: '2022-01-01',
          deviceModel: 'iPhone 13',
          docFullName: 'John Doe',
          docFront: 'front.jpg',
          expirationdate: '2023-12-31',
          faceScan: 'face.jpg',
          id: '12345',
          nationality: 'American',
          referenceId: 'ABC123',
          sdkVersion: '3.0.0',
        },
      ]
  }
}

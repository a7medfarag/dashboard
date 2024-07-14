import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
    TableComponent,
    AsyncPipe
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

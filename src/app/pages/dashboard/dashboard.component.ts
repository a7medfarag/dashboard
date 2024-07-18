import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TableComponent } from '../../shared/components/table/table.component';

interface IUser {
  id: string;
  nationality: string;
  referenceId: string;
  date: string;
  sdkVersion: string;
  deviceModel: string;
  faceScan: string;
  docFront: string;
  docFullName: string;
  expirationdate: string;
  age: number;
  docType: string;
  nFCData: string;
  addressPhotoID: string;
  compatibilityRateDoc: string;
  exceptedMediaCheck: boolean;
  tamperingCheck: boolean;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TableComponent, AsyncPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  users: IUser[] = [];
  selectedCustomers: { userName: string }[] = [];
  representatives: { userName: string }[] = [];
  statuses: { userName: string }[] = [];
  activityValues: { userName: string }[] = [];
  loading$: Observable<boolean> | undefined;
  getSeverity(
    data: string
  ):
    | 'success'
    | 'secondary'
    | 'info'
    | 'warning'
    | 'danger'
    | 'contrast'
    | undefined {
    return undefined;
  }
  clear(value: any) {
    value = null;
  }

  ngOnInit(): void {
    this.users = [
      {
        age: 32,
        date: '2022-01-01',
        deviceModel: 'assets/images/model.png',
        docFullName: 'John Doe',
        docFront: 'assets/images/id.png',
        expirationdate: '2023-12-31',
        faceScan: 'assets/images/user.png',
        id: '12345',
        nationality: 'American',
        referenceId: 'ABC123',
        sdkVersion: '3.0.0',
        docType: 'National ID',
        nFCData: '9/2/2024',
        addressPhotoID: 'assets/images/photo-id.png',
        compatibilityRateDoc: 'Match level 7',
        exceptedMediaCheck: true,
        tamperingCheck: true,
      },
      {
        age: 32,
        date: '2022-01-01',
        deviceModel: 'assets/images/model.png',
        docFullName: 'John Doe',
        docFront: 'assets/images/id.png',
        expirationdate: '2023-12-31',
        faceScan: 'assets/images/user.png',
        id: '12345',
        nationality: 'American',
        referenceId: 'ABC123',
        sdkVersion: '3.0.0',
        docType: 'National ID',
        nFCData: '9/2/2024',
        addressPhotoID: 'assets/images/photo-id.png',
        compatibilityRateDoc: 'Match level 7',
        exceptedMediaCheck: true,
        tamperingCheck: true,
      },
      {
        age: 32,
        date: '2022-01-01',
        deviceModel: 'assets/images/model.png',
        docFullName: 'John Doe',
        docFront: 'assets/images/id.png',
        expirationdate: '2023-12-31',
        faceScan: 'assets/images/user.png',
        id: '12345',
        nationality: 'American',
        referenceId: 'ABC123',
        sdkVersion: '3.0.0',
        docType: 'National ID',
        nFCData: '9/2/2024',
        addressPhotoID: 'assets/images/photo-id.png',
        compatibilityRateDoc: 'Match level 7',
        exceptedMediaCheck: true,
        tamperingCheck: true,
      },
      {
        age: 32,
        date: '2022-01-01',
        deviceModel: 'assets/images/model.png',
        docFullName: 'John Doe',
        docFront: 'assets/images/id.png',
        expirationdate: '2023-12-31',
        faceScan: 'assets/images/user.png',
        id: '12345',
        nationality: 'American',
        referenceId: 'ABC123',
        sdkVersion: '3.0.0',
        docType: 'National ID',
        nFCData: '9/2/2024',
        addressPhotoID: 'assets/images/photo-id.png',
        compatibilityRateDoc: 'Match level 7',
        exceptedMediaCheck: true,
        tamperingCheck: true,
      },
      {
        age: 32,
        date: '2022-01-01',
        deviceModel: 'assets/images/model.png',
        docFullName: 'John Doe',
        docFront: 'assets/images/id.png',
        expirationdate: '2023-12-31',
        faceScan: 'assets/images/user.png',
        id: '12345',
        nationality: 'American',
        referenceId: 'ABC123',
        sdkVersion: '3.0.0',
        docType: 'National ID',
        nFCData: '9/2/2024',
        addressPhotoID: 'assets/images/photo-id.png',
        compatibilityRateDoc: 'Match level 7',
        exceptedMediaCheck: true,
        tamperingCheck: true,
      },
    ];
  }
}

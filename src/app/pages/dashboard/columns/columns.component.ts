import { Component, OnInit } from '@angular/core';
import { PopupModalComponent } from '../../../shared/components/popup-modal/popup-modal.component';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.scss'],
  standalone: true,
  imports: [
    PopupModalComponent,
    IconFieldModule,
    InputIconModule,
    InputSwitchModule,
    ButtonModule,
  ],
})
export class ColumnsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  getValue(event: any) {}
}

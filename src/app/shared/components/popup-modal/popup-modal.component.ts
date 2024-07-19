import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-popup-modal',
  templateUrl: './popup-modal.component.html',
  styleUrls: ['./popup-modal.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class PopupModalComponent implements OnInit {
  @Input() popupContent!: TemplateRef<any>;
  @Input() popupHeader!: TemplateRef<any>;
  @Input() popupFooter!: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }

}

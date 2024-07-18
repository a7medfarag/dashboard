import { NgClass, NgIf } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  standalone: true,
  imports: [NgClass, NgIf],
})
export class TimerComponent implements OnInit {
  @Input() timerMinutes: string = ''; // Timer should be in minutes
  @Input() hasActionBtn: boolean = false; // Show Action Button
  @Input() actionBtnLabel: string = ''; // Action Button label

  @Output() actionBtnClicked: EventEmitter<boolean> = new EventEmitter(false);
  @Output() remainingTime: EventEmitter<string> = new EventEmitter();
  @Output() isTimerFinish: EventEmitter<any> = new EventEmitter();

  displayNumber: any; // UI Live Counter Number
  timerEnded = false;
  interval: ReturnType<typeof setInterval> | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['timerMinutes']?.firstChange) {
      this.timer(this.timerMinutes);
    }
  }

  timer(time: string) {
    if ((time + '')?.includes(':') === false) {
      if (time?.length === 1) {
        time = `0${time}:00`;
      } else {
        time = `${time}:00`;
      }
    }

    const [minutesStr, secondsStr] = time.split(':');
    const minutes = parseInt(minutesStr, 10);
    const seconds = parseInt(secondsStr, 10);

    let totalSeconds = minutes * 60 + seconds;

    const updateDisplay = () => {
      const displayMinutes = Math.floor(totalSeconds / 60);
      const displaySeconds = totalSeconds % 60;
      const formattedMinutes =
        displayMinutes < 10 ? `0${displayMinutes}` : `${displayMinutes}`;
      const formattedSeconds =
        displaySeconds < 10 ? `0${displaySeconds}` : `${displaySeconds}`;
      this.displayNumber = `${formattedMinutes}:${formattedSeconds}`;
      this.isTimerFinish.emit(this.displayNumber);
      this.cdr.markForCheck();
    };
    // initial update timer
    updateDisplay();

    this.interval = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        updateDisplay();
      } else {
        this.timerEnded = true;
        this.cdr.markForCheck();
        clearInterval(this.interval as ReturnType<typeof setInterval>);
      }
    }, 1000);
  }

  onActionBtnClicked() {
    if (this.timerEnded) {
      this.actionBtnClicked.emit(true);
      this.timerEnded = false;
      this.cdr.markForCheck();
      clearInterval(this.interval as ReturnType<typeof setInterval>);
      this.timer(this.timerMinutes);
    } else {
      this.timerEnded = false;
      this.actionBtnClicked.emit(false);
    }
  }

  ngOnDestroy() {
    this.remainingTime.emit(this.displayNumber);
    clearInterval(this.interval as ReturnType<typeof setInterval>);
  }
}

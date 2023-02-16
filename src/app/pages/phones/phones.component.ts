import { Component, OnInit, ViewChild } from '@angular/core';
import { NbStepperComponent, NbToastrService } from '@nebular/theme';
import { BehaviorSubject, combineLatest, concat, interval, map, of, switchMap, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'ngx-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss']
})
export class PhonesComponent implements OnInit {

  private found$ = new BehaviorSubject(null);

  private animLogic$ = of(null).pipe(
    map(_ => new Date()),
    switchMap(started => concat(
      interval(100).pipe(
        map(duration => new Date().getTime() - started.getTime()),
        takeWhile(difference => difference <= 60 * 1000),
      ),
      of(60 * 1000))));

  public phoneNo = '';
  public anim$ = combineLatest([
    this.animLogic$,
    this.found$,
  ]).pipe(
    map(([anim, found]) => ({
      anim,
      found,
      timer: this.format(anim),
      animationDuration: (- 0.025 * (anim / 1000) + 2) * 1000,
      finish: anim >= 60 * 1000,
    })),
  );

  @ViewChild("stepper") stepper: NbStepperComponent;
  public pending: boolean;
  readonly position = { lat: 49.775929, lng: 19.603139 };

  constructor(private toastrService: NbToastrService) { }

  ngOnInit(): void {
  }

  public find(): void {
    if (this.phoneNo == null || this.phoneNo === '') {
      this.toastrService.warning('Podaj numer telefonu', 'Nie można namierzyć', { duration: 3000 });
      return;
    }

    if (!(this.phoneNo.includes('539') && this.phoneNo.includes('922') && this.phoneNo.includes('404'))) {
      this.toastrService.warning('Nie można namierzyć tego numeru telefonu', 'Nie można namierzyć', { duration: 3000 });
      return;
    }

    this.stepper.next();
  }

  public connected(): void {
    this.found$.next(true);
  }

  public disconnected(): void {
    this.found$.next(false);
  }

  public format(difference: number): string {
    let result = '';
    let hours = Math.floor(difference / (60 * 60 * 1000));
    difference -= hours * 60 * 60 * 1000;
    result += hours < 10 ? `0${hours}` : hours.toString();
    result += ':';
    let minutes =  Math.floor(difference / (60 * 1000));
    difference -= minutes * 60 * 1000;
    result += minutes < 10 ? `0${minutes}` : minutes.toString();
    result += ':';
    let seconds =  Math.floor(difference / 1000);
    difference -= seconds * 1000;
    result += seconds < 10 ? `0${seconds}` : seconds.toString();
    result += '.';
    result += difference < 10 ? `00${difference}` : (difference < 100 ? `0${difference}` : difference.toString());
    return result;
  }

  public retry(): void {
    this.found$.next(null);
    this.stepper.previous();
  }

  public stepChanged(step: any): void {
    this.pending = step.index === 3;
  }
}

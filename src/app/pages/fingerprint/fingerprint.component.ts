import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, combineLatest, concat, distinctUntilChanged, filter, finalize, interval, map, of, startWith, Subject, switchMap, take, tap, withLatestFrom } from 'rxjs';

@Component({
  selector: 'ngx-fingerprint',
  templateUrl: './fingerprint.component.html',
  styleUrls: ['./fingerprint.component.scss']
})
export class FingerprintComponent implements OnInit {

  private selectedPrint$ = new BehaviorSubject(1);
  private scan$ = new Subject<void>();

  private printAnimation$ = new BehaviorSubject(false);
  private printAnimationCurrentPrint$ = this.printAnimation$.pipe(
    distinctUntilChanged(),
    filter(p => p),
    withLatestFrom(this.selectedPrint$),
    switchMap(([_, selectedPrint]) => concat(
      interval(50).pipe(
        take(60),
        map(current => current % 25 + 1),
        map(current => current !== selectedPrint ? current : 26),
      ),
      of(selectedPrint),
    )),
    startWith(null),
  );

  public vm$ = combineLatest([
    this.selectedPrint$,
    this.scan$.pipe(
      tap(_ => this.printAnimation$.next(false)),
      switchMap(() => interval(10).pipe(
        take(301),
        finalize(() => {
          this.printAnimation$.next(true);
        }),
      )),
      startWith(0),
    ),
    this.printAnimation$,
    this.printAnimationCurrentPrint$,
  ]).pipe(
    map(([selectedPrint, scanHeight, printAnimation, printAnimationCurrentPrint]) => ({
      selectedPrint,
      printId: [null,8,9,10,12,40][selectedPrint],
      scanHeight,
      printAnimation,
      printAnimationCurrentPrint,
      found: selectedPrint === printAnimationCurrentPrint,
    })),
  )

  public value = 1;
  public images = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public scan(): void {
    this.selectedPrint$.next(this.value);
    this.scan$.next();
  }

  public show(selectedPrint: number): void {
    const personId = [null, 1135, 930, 1185, 1300, 415][selectedPrint];
    this.router.navigate([`pages/layout/accordion/${personId}`])
  }

}

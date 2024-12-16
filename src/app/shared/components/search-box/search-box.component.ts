import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy{


  private deboucer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription

  @Input()
  public placeholder: string = ''

  @Output()
  public onValue = new EventEmitter<string>()

  @Output()
  public ondebonce = new EventEmitter<string>()

  ngOnInit(): void {
    this.debouncerSuscription = this.deboucer
    .pipe(
      debounceTime(800)
    )
    .subscribe( value => {
      this.ondebonce.emit(value)
    })
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  emiterCapital(value: string):void{
    this.onValue.emit(value)
  }

  onKeyPress( searchTerm: string) {
    this.deboucer.next(searchTerm)
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private selectDataSubject = new BehaviorSubject<string>('')
  selectData$: Observable<{}> = this.selectDataSubject.asObservable();

  updateSelectData(newValue: string){
    this.selectDataSubject.next(newValue);
  }
}

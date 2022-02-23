import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {GoodModel} from '../models/good.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private adUrl = `${environment.apiUrl}/Order`;
  public orders$ = new BehaviorSubject<GoodModel[]>([]);

  constructor(private http: HttpClient) {
    this.updateAds();
  }

  public updateAds(): void {
    const url = `${this.adUrl}/GetAll`;
    this.http.get<any>(url).subscribe((res) => {
      this.orders$.next([...this.orders$.getValue(), ...res]); });
  }

  public createOrder(order: FormGroup): Observable<string> {
    return this.http.post<string>(`${this.adUrl}/Create`, order);
  }
}

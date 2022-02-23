import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {GoodModel} from '../models/good.model';
import {HttpClient} from '@angular/common/http';
import {PagedModel} from '../models/paged.model';
import {FormGroup} from '@angular/forms';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  private adUrl = `${environment.apiUrl}/Advertisement`;
  public goods$ = new BehaviorSubject<GoodModel[]>([]);

  constructor(private http: HttpClient) {
    setTimeout(() =>
      this.updateAds());
  }

  public getPagedFiltered(
    offset: number,
    count: number
  ): Observable<any> {
    let url = `${this.adUrl}/GetPaged?`;
    url += `offset=${offset}&count=${count}`;
    return this.http.get<any>(url);
  }

  public updateAds(): void {
    this.getPagedFiltered(
      this.goods$.value.length,
      12
    ).subscribe((res) => {
      this.goods$.next([...this.goods$.getValue(), ...res]);
    });
  }

  public createAd(ad: FormGroup): Observable<string> {
    return this.http.post<string>(`${this.adUrl}/Create`, ad);
  }

  public GetById(id: number): Observable<any> {
    return this.http.get<any>(`${this.adUrl}/GetById?id=${id}`);
  }

  /*public deleteAd(id: string): void {
    this.http.delete<string>(`${this.adUrl}/delete?Id=${id}`).subscribe();
    this.updateAds(true);
  }
  public updateAd(ad: FormGroup): Observable<string> {
    return this.http.put<string>(`${this.adUrl}/update`, ad);
  }*/
}


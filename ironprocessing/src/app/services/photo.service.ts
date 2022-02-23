import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private photoUrl = `${environment.apiUrl}/Photo`;

  constructor(private http: HttpClient) {}

  public savePhoto(file: File): Observable<string> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<string>(`${this.photoUrl}/Create`, formData);
  }
  public deletePhoto(id: string): Observable<void> {
    return this.http.delete<void>(`${this.photoUrl}/Delete?Id=${id}`);
  }
}

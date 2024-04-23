import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {
  baseApiUrl: string = environment.baseApiUrl;
  private itemSource = new BehaviorSubject<any>(null);
  currentItem = this.itemSource.asObservable();
  constructor(private http : HttpClient) { }

  getAllCanvas():Observable<any>{
    return this.http.get(this.baseApiUrl + 'api/Canvas');
  }

  getCanvasbyId(id:string):Observable<any>{
    return this.http.get(`https://localhost:7111/api/Canvas/${id}`)
  }

  updateCanvas(id: string, data: any): Observable<any> {
    return this.http.put(`https://localhost:7111/api/Canvas/${id}`, data);
  }

  addCanvas(data :  any): Observable <any> {
    
    return this.http.post <any> ('https://localhost:7111/api/Canvas', data )
  }

  deleteCRM(id : string) : Observable<any>{
    return this.http.delete(`https://localhost:7111/api/Canvas/${id}`)
  }

  saveItem(item:any){
    this.itemSource.next(item);
  }
}
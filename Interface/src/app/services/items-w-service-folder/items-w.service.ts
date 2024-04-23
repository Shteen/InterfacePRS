import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsWService {
  private itemSource = new BehaviorSubject<any>(null);
  baseApiUrl: string = environment.baseApiUrl;
  currentItem = this.itemSource.asObservable();
  constructor(private http : HttpClient) { }

  getAllItemsW(page: number, pageSize: number):Observable<any>{
    return this.http.get(`${this.baseApiUrl}api/ItemsW/page?page=${page}&pageSize=${pageSize}`);
  }

  getItemsWbyId(id:string):Observable<any>{
    return this.http.get(`https://localhost:7111/api/ItemsW/${id}`)
  }

  updateItemsW(id: string, data: any): Observable<any> {
    return this.http.put(`https://localhost:7111/api/ItemsW/${id}`, data);
  }

  addItemsW(data :  any): Observable <any> {
    
    return this.http.post <any> (this.baseApiUrl + 'api/ItemsW', data )
  }

  deleteItemsW(id : string) : Observable<any>{
    return this.http.delete(`https://localhost:7111/api/ItemsW/${id}`)
  }

  saveItem(item:any){
    this.itemSource.next(item);
  }
  
  
  getBySearch(IteName:string, page: number, pageSize: number ):Observable<any>{
    return this.http.get(`${this.baseApiUrl}api/ItemsW/search?search=${IteName}&page=${page}&pageSize=${pageSize}`);
    
  }
}

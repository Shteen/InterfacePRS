import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupplierServiceService {
  baseApiUrl: string = environment.baseApiUrl;
  private itemSource = new BehaviorSubject<any>(null);
  currentItem = this.itemSource.asObservable();
 
  constructor(private http : HttpClient) { }
 
  getAll(page: number, pageSize: number): Observable<any> {
    return this.http.get(`${this.baseApiUrl}api/Supplier/page?page=${page}&pageSize=${pageSize}`);
  }
  

  getBySearch(supname:string):Observable<any>{
    return this.http.get(`${this.baseApiUrl}api/Supplier/search?search=${supname}`);
  }

  updateSupplier(id: string, data: any): Observable<any> {
    return this.http.put(`https://localhost:7111/api/Supplier/${id}`, data);
  }

  saveItem(item:any){
    this.itemSource.next(item);
  }
 
}
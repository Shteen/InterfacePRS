import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private itemSource = new BehaviorSubject<any>(null);
  currentItem = this.itemSource.asObservable();
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http : HttpClient) { }

  getAllBrand():Observable<any>{
    return this.http.get(this.baseApiUrl + 'api/Brand');
  }

  getBrandbyId(id:string):Observable<any>{
    return this.http.get(`https://localhost:7111/api/Brand/${id}`)
  }

  updateBrand(id: string, data: any): Observable<any> {
    return this.http.put(`https://localhost:7111/api/Brand/${id}`, data);
  }

  addBrand(data :  any): Observable <any> {
    
    return this.http.post <any> ('https://localhost:7111/api/Brand/', data )
  }

  deleteBrand(id : string) : Observable<any>{
    return this.http.delete(`https://localhost:7111/api/Brand/${id}`)
  }

  getBySearch(IteName:string, page: number, pageSize: number ):Observable<any>{
    return this.http.get(`${this.baseApiUrl}api/Brand/search?search=${IteName}&page=${page}&pageSize=${pageSize}`);
    
  }

  saveItem(item:any){
    this.itemSource.next(item);
  }
}
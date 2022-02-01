import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './conf';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http:HttpClient) { }

  public catgories()
  {
    return this._http.get(`${baseUrl}/category/`)
  }

  public addCategories(category:any){
    return this._http.post(`${baseUrl}/category/`,category)
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyWorker } from '../models/worker.model';

@Injectable({
  providedIn: 'root'
})
export class HttpWorkerService {
  routeApi='http://localhost:3000/workers';
  constructor(private http: HttpClient) { }

  getWorker():Promise<any>{
    return this.http.get(this.routeApi).toPromise();
  }

  postWorker(data:MyWorker){
    return this.http.post(this.routeApi, data).toPromise();
  }

  deleteWorker(id:number){
    return this.http.delete(this.routeApi+"/"+id).toPromise();
  }

  editWorker(data:MyWorker){
    return this.http.put(this.routeApi+"/"+data.id, data).toPromise();
  }
}

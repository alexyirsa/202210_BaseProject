import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Cafe } from './cafe';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  private apiUrl: string = environment.baseUrl + 'e9d24db370ce95b75555f7d1f8691805/raw/8a26ac2bca4183dc88545e14c45851d698911358/202212_MISW4104_Grupo3.json';

constructor(private http: HttpClient) { }

getCafes(): Observable<Cafe[]>{
  return this.http.get<Cafe[]>(this.apiUrl);
}

}

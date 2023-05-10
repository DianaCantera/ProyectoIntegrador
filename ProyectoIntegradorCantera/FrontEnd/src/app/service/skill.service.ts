import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  expoURL = 'http://localhost:8080/skill/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.expoURL +'lista' );
  }

  public detail(id:number): Observable<Skill>{
    return this.httpClient.get<Skill>(this.expoURL + `detail/${id}`);
  }

  public save(skill: Skill):Observable<any>{
    return this.httpClient.post<any>(this.expoURL + 'create', skill);
  }

  public update(id:number, skill: Skill):Observable<any>{
    return this.httpClient.put<any>(this.expoURL + `update/${id}`,skill);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.expoURL + `delete/${id}`);

  }

}

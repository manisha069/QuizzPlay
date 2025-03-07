import { HttpClient, HttpHeaders, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { categoryData } from '../models/categoryData.model';
import { environment } from '../environment';
import { triviaByCategory } from '../models/triviaByCategory.model';

@Injectable({
  providedIn: 'root'
})
export class QuizzerService {

  constructor(private http : HttpClient) {}
  category :any;
  categoryCode :any;

  getCategories() : Observable<categoryData>{

    return this.http.get<categoryData>(environment.categoryUrl,  {
     
      headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*') //to prevent CORS error
      .set('responseType', 'text')

      .set(environment.categoryXRapidAPIHostLabel, environment.categoryXRapidAPIHostValue)
      .set(environment.categoryXRapidAPIKeyLabel, environment.categoryXRapidAPIKeyValue),
    })

  }

  getTriviaByCategory() : Observable<triviaByCategory>{
    console.log("in service ", this.categoryCode)
    let cc = "17";
    return this.http.get<triviaByCategory>(environment.quizUrl,  {
    
      // params: new HttpParams().set('category', this.categoryCode)
      params: new HttpParams().set('category', this.categoryCode)

    })

  }
}

import { Injectable } from '@angular/core';
import { QuizzerService } from './quizzer.service';



@Injectable({
  providedIn: 'root'
})

export class CategoryCodeService {

  constructor(private quizService : QuizzerService) {
    
   }

   

   categoryCodeArray = [
    
    ["geography" , "22"],
    ["literature" , "10"],
    ["science" ,"17"],
    ["history" , "23"],
    ["art" , "25"],
    ["music" , "12"],
    ["technology" , "30"],
    ["sports" , "21"],
    ["entertainment" , "25"],
    ["biology" , "17"],
    ["mathematics" , "19"],
    ["food" , "17"],
    ["mythology" , "20"],
    ["astronomy" , "17"],
    ["youtubers/streamers" , "26"],
    ["language" , "11"],
    ["animals" , "17"],
    ["culture" , "13"],
    ["landmarks" , "22"],
    ["economics" , "24"],
    ["linguistics" , "23"],
    ["chemistry" , "17"],
    ["physics" , "17"],
    ["philosophy" , "24"],
    ["geology" , "17"],
    ["medicine" , "17"]
  ]

  getCategoryCode(cat:string){

    
    cat = cat.toLowerCase();
    for(let i=0;i<this.categoryCodeArray.length;i++){
      if(this.categoryCodeArray[i][0]== cat){
        // console.log("gggg", this.categoryCodeArray[i][1])
        this.quizService.categoryCode = this.categoryCodeArray[i][1];
        break
      }
    }


  }

}

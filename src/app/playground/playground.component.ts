import { Component } from '@angular/core';
import { QuizzerService } from '../services/quizzer.service';
import { CategoryCodeService } from '../services/category-code.service';
import {Router} from "@angular/router"


@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.css'
})
export class PlaygroundComponent {

  constructor( private quizService : QuizzerService, private categoryCode : CategoryCodeService, private router: Router){}

  scoreValue: number = 0;
  answerInput:any;
  triviaData :any =[];
  scoreCounter :any;
  answerValid :boolean = true;
  currQueIndex :number =0; 
  Question : string ="";
  endQuizz: boolean = false
  tempAnsVar : string = "";

ngOnInit(){
  this.categoryCode.getCategoryCode(this.quizService.category);

  this.quizService.getTriviaByCategory().subscribe(response =>{
    console.log("trivia data", response.results);
  this.triviaData= response.results;

  // making the first question by default, 
  this.Question = this.triviaData[0].question;
    console.log(this.Question)
  })

  if(this.currQueIndex==9){
    this.endQuiz();
  }
}


  submitAnswer(){
    console.log(this.answerInput);

    if(this.answerInput == "" || this.answerInput == null ||  this.answerInput == undefined){
    
      this.answerValid = false;     
    }
    else{

      // putting redundant code here
      this.answerValid = true;
      this.tempAnsVar = this.answerInput;
      this.answerInput="";
      

      //displaying next question before the code to update the score, as it is time taking.
      

      
      if(this.tempAnsVar.toLowerCase() === this.triviaData[this.currQueIndex].correct_answer.toLowerCase()){
        this.currQueIndex += 1;
        this.scoreValue += 1;
        this.displayNextQ();
      }
      else{
        //adding this here because without this it was not increasing next que if wrong ans.
        this.currQueIndex += 1;
        this.displayNextQ();
      }
      // this.answerInput="";
    }
     
   
  }

  displayNextQ(){
    if (this.currQueIndex <= 9){
      this.Question = this.triviaData[this.currQueIndex].question;
    }
    else{
      this.endQuiz();
    }
  }

  endQuiz(){
    this.endQuizz = true;
    //✅TODO: you have reached the end of this quiz, your score is 
    //✅display final score
    // TODO: go back to categories page
    // this.router.navigate(['/home'])

  }

  // inputOnClick(){
  //   this.answerValid = true;
  // }

  exitGame(){
  this.scoreValue= 0;
  this.answerInput = "";
  this.triviaData = [];
  this.scoreCounter = 0;
  this.answerValid = true;
  this.currQueIndex = 0; 
  this.Question = "";
  this.endQuizz = false
  this.tempAnsVar = "";
  }

  
}

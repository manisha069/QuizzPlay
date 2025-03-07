import { Component } from '@angular/core';
import { QuizzerService } from '../services/quizzer.service';
import { CategoryCodeService } from '../services/category-code.service';


@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.css'
})
export class PlaygroundComponent {

  constructor( private quizService : QuizzerService, private categoryCode : CategoryCodeService){}

  scoreValue: number = 0;
  answerInput:any;
  triviaData :any =[];
  questionsArray :any=[];
  scoreCounter :any;
  answerValid :boolean = true;
  currQueIndex :number =0; 
  Question : string ="";

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


  //TODO: not taking any variable as paramenter as directly ngModel updates the variable
  //TODO: need to make sure to redo input field and answer variable at every question increment.
  submitAnswer(){
    if(this.answerInput != "" && this.answerInput != null){
      console.log(this.answerInput);
      this.answerValid = true;

      if(this.answerInput.lower == this.triviaData[this.currQueIndex].correct_answer.lower){
        // TODO: display correct answer message
        this.answerInput="";
        this.scoreValue += 1;
        this.currQueIndex += 1;
        this.displayNextQ();
      }
      else{
        // TODO: display incorrect answer message
        this.answerInput="";
        this.currQueIndex += 1;
        this.displayNextQ();
      }
    }
    else{
      this.answerInput="";
      //TODO: show error message of empty field
    }
     
   
  }

  displayNextQ(){

  }

  endQuiz(){
    //TODO: you have reached the end of this quiz, your score is 
    //display final score
    // TODO: go back to categories page
  }

  
}

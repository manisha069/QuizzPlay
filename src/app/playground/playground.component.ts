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
  questionsArray :any=[];
  scoreCounter :any;
  answerValid :boolean = true;
  currQueIndex :number =0; 
  Question : string ="";
  endQuizz: boolean = false

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


  //✅TODO: not taking any variable as paramenter as directly ngModel updates the variable
  //✅TODO: need to make sure to redo input field and answer variable at every question increment.
  submitAnswer(){
    console.log(this.answerInput);

    if(this.answerInput == "" || this.answerInput == null ||  this.answerInput == undefined){
      //TODO: show error message of empty field
      this.answerValid = false;
      // console.log("invlid anshwer", this.answerValid)      
    }
    else{
      this.answerValid = true;
      console.log("valid answer", this.answerValid, this.answerInput)

      console.log("1",this.answerInput.toLowerCase())
      console.log("2", this.triviaData[this.currQueIndex].correct_answer.toLowerCase())
      if(this.answerInput.toLowerCase() === this.triviaData[this.currQueIndex].correct_answer.toLowerCase()){
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
      this.answerInput="";
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
    this.router.navigate(['/home'])

  }

  inputOnClick(){
    this.answerValid = true;
  }

  
}

import { Component } from '@angular/core';
import { QuizzerService } from '../services/quizzer.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private quizService : QuizzerService){}
  categoryData : any =[];
  selectedCategory :any ;


ngOnInit(){
  this.quizService.getCategories().subscribe(response =>{
    this.categoryData = response.categories;
    console.log("city data array", this.categoryData);

    
  })
}

gotoPlay(category : any){

this.selectedCategory = category;
this.quizService.category = this.selectedCategory;

}


}

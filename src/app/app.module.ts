import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlaygroundComponent } from './playground/playground.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { QuizzerService } from './services/quizzer.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaygroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // provideHttpClient,
  ],
  providers: [
    provideClientHydration(), QuizzerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

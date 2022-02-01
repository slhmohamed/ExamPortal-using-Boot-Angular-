import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './conf';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient) { }

  public  getQuizzes()
  {
    return this._http.get(`${baseUrl}/quiz/`)
  }

  public addQuiz(quizData:any)
  {
    return this._http.post(`${baseUrl}/quiz/`,quizData)

  }

  public deleteQuiz(qid:any){
    return this._http.delete(`${baseUrl}/quiz/${qid}`)
  }

  public getSingleQuiz(qid:number){
    return this._http.get(`${baseUrl}/quiz/${qid}`)
  }

  
  public update (quiz:any){
    return this._http.put(`${baseUrl}/quiz/`,quiz)
  }

  //get quizzes of category
  public getQuizzesOfCategory(cid)
  {
    return this._http.get(`${baseUrl}/quiz/category/${cid}`)

  }

  //get active quiz
  public getQuizActive()
  {
    return this._http.get(`${baseUrl}/quiz/active`)
  }

  //get active quizzes of category

  public getActiveQuizzesOfCatgory(cid)
  {

    return this._http.get(`${baseUrl}/quiz/category/active/${cid}`)

  }
}

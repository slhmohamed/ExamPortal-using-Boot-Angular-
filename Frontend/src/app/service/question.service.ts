import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './conf';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _http:HttpClient) { }

public getQuestionOfQuiz(qid:any){
  return this._http.get(`${baseUrl}/question/quiz/all/${qid}`)

}


public getQuestionOfQuizForTest(qid:any){
  return this._http.get(`${baseUrl}/question/quiz/${qid}`)

}

public addQuestion(question){
  return this._http.post(`${baseUrl}/question/`,question)
}

public deleteQuestion(quesId){
  return this._http.delete(`${baseUrl}/question/${quesId}`)

}

}


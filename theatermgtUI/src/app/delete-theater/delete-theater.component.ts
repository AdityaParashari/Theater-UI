import { Component, OnInit } from '@angular/core';
import { TheaterServiceService } from '../services/theater-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-delete-theater',
  templateUrl: './delete-theater.component.html',
  styleUrls: ['./delete-theater.component.css']
})
export class DeleteTheaterComponent implements OnInit {

  service:TheaterServiceService;
  response:string;

  constructor(service:TheaterServiceService) {
    this.service=service;
   }

  ngOnInit(): void {
  }

  deleteTheater(deleteForm:any){
    let theaterId = deleteForm.value;
    console.log(theaterId);
    let result : Observable<string> = this.service.deleteTheater(theaterId);
    result.subscribe((ans:string)=>{
    this.response=ans;
    console.log(this.response);
  },
    err =>{
    console.log("Error"+err);
    });

}
}
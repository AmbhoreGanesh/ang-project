import { Component } from '@angular/core';
import {RestoService} from '../resto.service'

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent {
 
  constructor(private resto:RestoService){}
  
  collection:any;
  ngOnInit():void{

     this.resto.getList().subscribe((result)=>{
       console.log(result);
      this.collection=result;
     })
   
  }
  deleteResto(item:any){
this.resto.deleteResto(item).subscribe((result)=>{
console.log(result);
this.collection.splice(item-1, 1) //1 is used to delete
}
)
  }
}

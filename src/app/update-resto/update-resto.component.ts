import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent {
alert:boolean=false
  editResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')

})
constructor(private router:ActivatedRoute, private resto:RestoService){}

ngOnInit():void {

  console.log(this.router.snapshot.paramMap.get('id'))
  this.resto.getCurrentResto(this.router.snapshot.paramMap.get('id')).subscribe((result:any)=>{
    // console.log(result)
    this.editResto = new FormGroup({
      name: new FormControl(result.name),
      email: new FormControl(result.email),
      address: new FormControl(result.address)
  })
  })
}

collection(){
  console.log("item",this.editResto.value);
  this.resto.updateResto(this.router.snapshot.paramMap.get('id'),this.editResto.value).subscribe((result)=>{
    console.log("result",result)
    this.alert=true
  })

}
 closeAlert(){
  this.alert=false
 }
}
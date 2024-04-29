import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  category : {id:number, name:string};
  paramsSubscription : Subscription;

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(): void{
    // this.category = {
    //   id:this.route.snapshot.params['id'],
    //   name: this.route.snapshot.params['name']
    // }
    this.paramsSubscription = this.route.params.subscribe((params:Params)=> {
      this.category = {
        id:params['id'],
        name:params['name']
      }
    })
  }
  // if you use your own observable you need to unsubscribe it when destroyed
  ngOnDestroy(): void{
    this.paramsSubscription.unsubscribe();
  }

}

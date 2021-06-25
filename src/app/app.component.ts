import { Component } from '@angular/core';
import {Todo}from './todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
    
      
    }
    
    todos=[];//this is empty array
    
  name='';
   editable= false
    addButton="ADD"

   editableIndex = 0

  Add(){
    if(this.editable === true)
    {
      const Todoslist:Todo={
        name:this.name,
        editable:this.editable
      }
      this.todos.splice(this.editableIndex,1,Todoslist) 
      this.addButton="ADD"
      this.editable= false
    }
    else{
      const Todoslist:Todo={
        name:this.name,
        editable:this.editable
      }
      this.todos.splice(0,0,Todoslist)
      this.name=''
    }
    
  }

Delete(index){
this.todos.splice(index,1)
}
Edit(item,index){
  this.editable= true
this.addButton="UPDATE"
this.name=item;
this.editableIndex=index
}
}
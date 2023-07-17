import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent {

  @Output() public itemListEmitter = new EventEmitter();

  public addItemTaskList: string = "";

  public submitItemTaskList(){
    // remove espaços do inicio e final do texto
    this.addItemTaskList = this.addItemTaskList.trim();

    if(this.addItemTaskList) {
      this.itemListEmitter.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }
  }

}

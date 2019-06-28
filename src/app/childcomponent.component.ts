import {Component,Output,EventEmitter,Input} from '@angular/core';
@Component({
  selector:'childselector',
  templateUrl:'./childcomponent.component.html'
  })
  export class childcomponentComponent
  {
    @Output()
    clicked=new EventEmitter<string>();
    @Input('ParentValue') value;
    value1:string;
    
    ngOnChanges() {
      this.value1 = this.value;  
        }

    myclick()
    {
      this.clicked.emit("Value passing from child to parent");
    }

  }

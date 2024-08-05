import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type newTaskData } from './new-task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<newTaskData>();
  enteredTitle = " ";
  enteredSummery =" ";
  enteredDueDate =" ";
  onCancel() {
    this.cancel.emit();
  }
  onSubmit(){
    this.add.emit({
      title : this.enteredTitle,
      summery: this.enteredSummery,
      date: this. enteredDueDate
    });

  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyWorker, MyWorkerType } from 'src/app/shared/models/worker.model';
import { HttpWorkerService } from 'src/app/shared/services/http-worker.service';

@Component({
  selector: 'app-edit-worker',
  templateUrl: './edit-worker.component.html',
  styleUrls: ['./edit-worker.component.css']
})
export class EditWorkerComponent implements OnInit {
  workers: MyWorker[];
  myWorkerType = MyWorkerType;

  @Input() workerForEdit:MyWorker;
  @Output() edittedWorker=
  new EventEmitter<MyWorker>();

  mask = ['+', 7, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  workerEditForm:FormGroup;
  
  constructor(private httpWorkerService:HttpWorkerService) {  
    
  }

  ngOnInit(): void {
    this.workerEditForm = new FormGroup({
      editName: new FormControl(this.workerForEdit.name, Validators.required),
      editSurname: new FormControl(this.workerForEdit.surname, Validators.required),
      editPhone: new FormControl(this.workerForEdit.phone, Validators.required),
      editType: new FormControl(this.workerForEdit.type, Validators.required)
      
    });
}


onEditWorker(){
  this.edittedWorker.emit({
    id:this.workerForEdit.id,
    name:this.workerEditForm.get('editName').value,
    surname:this.workerEditForm.get('editSurname').value,
    phone:this.workerEditForm.get('editPhone').value,
    type:this.workerEditForm.get('editType').value
  });
}

}

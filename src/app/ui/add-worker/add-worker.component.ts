import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyWorker, MyWorkerType } from 'src/app/shared/models/worker.model';
import { HttpWorkerService } from 'src/app/shared/services/http-worker.service';

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.css']
})
export class AddWorkerComponent implements OnInit {
  mask = ['+', 7, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  workerForm:FormGroup;
  disabledForms = false;
  myWorkerType= MyWorkerType;

  @Output() addWorker=
  new EventEmitter<MyWorker>();

  constructor(private httpWorkerService:HttpWorkerService) { 
    
  }

  ngOnInit():void  {
    this.workerForm = new FormGroup({
      name: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.required,
      ]),
      surname: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.required,
      ]),
      phone: new FormControl({value: '', disabled: this.disabledForms}, [
        Validators.required,
      ]),
      type: new FormControl(
        { value: MyWorkerType.programmer, disabled: this.disabledForms }
      )
      
    });
  }


  submit(){
    this.addWorker.emit(this.workerForm.value);
}

}

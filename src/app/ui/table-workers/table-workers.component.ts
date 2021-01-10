import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyWorker } from 'src/app/shared/models/worker.model';

@Component({
  selector: 'app-table-workers',
  templateUrl: './table-workers.component.html',
  styleUrls: ['./table-workers.component.css']
})
export class TableWorkersComponent implements OnInit {
  @Input() title:string;
  @Input() workers: MyWorker[]=[];

  @Output() deleteWorker = 
  new EventEmitter<number>();

  @Output() editWorker = 
  new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteWorker(id:number){
    this.deleteWorker.emit(id);
  }

  toEditWorker(id:number){
    this.editWorker.emit(id);
  }

}

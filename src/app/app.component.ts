import { Component } from '@angular/core';
import { MyWorker, MyWorkerType } from './shared/models/worker.model';
import { HttpWorkerService } from './shared/services/http-worker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Список сотрудников';
  workers: MyWorker[];
  myWorkerType = MyWorkerType;

  flag=false;
  workerForEdit:MyWorker;

  constructor(private httpWorkerService:HttpWorkerService) {}

  ngOnInit() {
    this.getData();
  }

  async getData(){
    try{
      this.workers= await this.httpWorkerService.getWorker();
    }
    catch(err){
      console.log(err);
    }
  }

  getByType(type:number){
    return this.workers.filter((worker) => worker.type === type);
  }

  async onDeleteWorker(id:number){
    try{
      await this.httpWorkerService.deleteWorker(id);
    }
    catch(err){
      console.log(err);
    }
    finally{
      this.getData();
    }
  }

  async onAddWorker(event:MyWorker){
    try{
      await this.httpWorkerService.postWorker(event);
    }
    catch(err){
      console.log(err);
    }
    finally{
      this.getData();
    }
  }

  toEditWorker(id:number){
    this.flag=true;
    let index=this.workers.findIndex((worker)=>worker.id === id);
    this.workerForEdit=this.workers[index];  
  }

  async onEditWorker(workerEdit:MyWorker){ 
    try{
      await this.httpWorkerService.editWorker(workerEdit);
    }
    catch(err){
      console.log(err);
    }
    finally{
      this.getData();
      this.flag=false;
    }
  }

  

}

import {Component, OnInit, ViewChild} from '@angular/core';
import {ToolsService} from "../../services/tools.service";
import {IonModal} from "@ionic/angular";

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent  implements OnInit {
  item: any = {}

  constructor(
    public toosl: ToolsService
  ) { }

  @ViewChild(IonModal) modal!: IonModal;


  get data(){
    return this.toosl.data
  }

  ngOnInit() {}

  openModal(item: any) {
    this.item = item;
    this.modal.present()
  }


  cancel() {
    this.modal.dismiss()
  }


  delete() {
    this.toosl.borrar(this.item)
    this.modal.dismiss()
  }
}

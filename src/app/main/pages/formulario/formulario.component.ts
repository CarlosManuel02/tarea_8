import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Camera, CameraResultType, CameraSource} from "@capacitor/camera";
import {DomSanitizer} from "@angular/platform-browser";
import {ToolsService} from "../../services/tools.service";
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent  implements OnInit {
  formulario = this.fb.group({
    fecha: [''],
    titulo: [''],
    descripcion: ['']
  })
  image: any;
  audio: any;

  constructor(
    public fb: FormBuilder,
    public tools: ToolsService,
    public domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {}

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt
    });

    this.image = this.domSanitizer.bypassSecurityTrustResourceUrl(image.dataUrl ? image.dataUrl : '');
  }

  recordAudio = async () => {
    // const audio = await Capacitor.
    // const audioData = await Filesystem.writeFile({})
  }

  guardar() {
    this.tools.saveToDivice(this.formulario.value, this.image);
    this.formulario.reset();
  }
}

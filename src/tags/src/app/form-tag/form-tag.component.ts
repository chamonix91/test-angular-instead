import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import {TagListService} from "../tag-list/service/tag-list.service";

@Component({
  selector: 'app-form-tag',
  templateUrl: './form-tag.component.html',
  styleUrls: ['./form-tag.component.scss']
})
export class FormTagComponent implements OnInit {
  titleTag!: string;
  mainTag!: string;
  simpleTag!: string

  @Output() actionTag = new EventEmitter();
  @Output() changeTileTag = new EventEmitter();
  @Output() changeMainTag = new EventEmitter();
  @Output() removeTagAction = new EventEmitter();
  /****/

  constructor(private tagListService: TagListService) { }

  ngOnInit(): void {
  }

  /**
   * Expose le tag créée dans le formulaire
   */
  addTag(){
    this.actionTag.emit(
      this.simpleTag
    )
  }

  /**
   * Lance l'action de suppression d'un tag
   */
  removeTag(){
    this.removeTagAction.emit('delete')
  }

  /**
   * Lance l'action de modification de titre de tag
   * @param data
   */
  changeTitle(data: any){
    this.changeTileTag.emit(data);
  }

  /**
   * Lance l'action de modification de tag principal
   * @param data
   */
  changeMain(data: any){
    this.changeMainTag.emit(data);
  }

}

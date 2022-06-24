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
  addTag(){
    this.actionTag.emit(
      this.simpleTag
    )
  }
  removeTag(){
    this.removeTagAction.emit('delete')
  }
  changeTitle(data: any){
    this.changeTileTag.emit(data);
  }
  changeMain(data: any){
    this.changeMainTag.emit(data);
  }

}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagListService {


  private tags : any[];
  tagsSubject : Subject<any[]>;

  constructor() {

    // initialisation des tags
    this.tags = [
      {
        id: 0,
        content: 'tag1',
        display: true,
        type: 'title'
      },
      {
        id: 1,
        content: 'tag2',
        display: true,
        type: 'main'
      }
    ];
    this.tagsSubject = new Subject<any[]>();
  }

  /**
   * Push data du tableau de tag vers le subscriber du tag
   */
  addTag(){
    this.tagsSubject.next(this.tags.slice());
  }

  /**
   * Modifier le tag Title
   * @param newValue
   */
  updateTitleTag(newValue : string): void{
    this.tags[0].content = newValue;
    this.addTag();
  }

  /**
   * Modifier le premier Tag
   * @param newValue
   */
  updateMainTag(newValue : string): void{
    this.tags[1].content = newValue;
    this.addTag();
  }

  /**
   * Création d'un nouveau tag
   * @param newTagValue
   * @param display
   */
  newTag(newTagValue : string, display: boolean): void{
    this.tags.push({
      id: this.tags.length,
      content: newTagValue,
      display: display,
      type: 'simple'
    });
    this.addTag();
  }

  /**
   * Faire apparaître le premier tag non affiché
   */
  updateFirstHide(): void{
    const data = this.tags.filter(x => x.display === false)
    if(data.length> 0){
      const index = this.tags.findIndex(x => x.id === data[0].id);
      this.tags[index].display = true;
      this.addTag();
    }

  }

  /**
   * Faire camoufler le dernier Tag
   */
  updateLastShow(): void{
    const data = this.tags.filter(x => x.display === true)
    if(data.length> 0){
      const index = this.tags.findIndex(x => x.id === data[data.length-1].id);
      this.tags[index].display = false;
      this.addTag();
    }

  }

  /**
   * Méthode pour suprimer le dernier tag
   */
  deleteLastTag(): void{
    this.tags.pop();
    this.addTag();
  }



}

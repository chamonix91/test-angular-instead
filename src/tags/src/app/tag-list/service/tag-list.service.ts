import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagListService {


  //Les tags sont des propriété privée au service et toute modification est gérer par la relation Subject/subscription
  private tags : any[];
  tagsSubject : Subject<any[]>;

  constructor() {

    //Les tags ont des id pour prendre en considération la performance lors de l'ajout ou supprission d'un élément à l'aide de trakedby de la directive ngfor
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
  addTag(){
    this.tagsSubject.next(this.tags.slice());
  }
  updateTitleTag(newValue : string): void{
    this.tags[0].content = newValue;
    this.addTag();
  }
  updateMainTag(newValue : string): void{
    this.tags[1].content = newValue;
    this.addTag();
  }
  //methode pour créer une nouvelle tag
  newTag(newTagValue : string, display: boolean): void{
    this.tags.push({
      id: this.tags.length,
      content: newTagValue,
      display: display,
      type: 'simple'
    });
    this.addTag();
  }
  updateFirstHide(): void{
    const data = this.tags.filter(x => x.display === false)
    if(data.length> 0){
      const index = this.tags.findIndex(x => x.id === data[0].id);
      this.tags[index].display = true;
      this.addTag();
    }

  }

  updateLastShow(): void{
    const data = this.tags.filter(x => x.display === true)
    if(data.length> 0){
      const index = this.tags.findIndex(x => x.id === data[data.length-1].id);
      this.tags[index].display = false;
      this.addTag();
    }

  }

  //methode pour supprimer le dernier tag
  deleteLastTag(): void{
    this.tags.pop();
    this.addTag();
  }



}

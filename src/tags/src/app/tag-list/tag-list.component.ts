import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {TagListService} from "./service/tag-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {
  @ViewChild('result') resultHtmlElement:any;
  /***/
  tags : any[];
  tagsSubscription : Subscription;
  nbrRemindElementsToDisplay : number;
  constructor(private tagListService: TagListService) {
    this.tags = [];
    this.tagsSubscription = new Subscription();
    this.nbrRemindElementsToDisplay =0;
  }

  ngOnInit(): void {
    this.tagsSubscription = this.tagListService.tagsSubject.subscribe(data => {
      this.tags = data;
    });
    this.tagListService.addTag();
  }

  /**
   * Méthode qui vérifie si le contenu a déborder l'espace ou pas
   */
  checkNbrRemindElementsTodisplay(): boolean{
    if(this.resultHtmlElement.nativeElement.offsetWidth<this.resultHtmlElement.nativeElement.scrollWidth){
      return true;
    }else{
      return false;
    }
  }

  /**
   * Création du Tag reçu par le formulaire
   * @param action
   */
  getActionForm(action: any) {
    if(this.checkNbrRemindElementsTodisplay()){
      this.tagListService.newTag(action, false)
      this.nbrRemindElementsToDisplay ++;
    }else{
      this.tagListService.newTag(action, true)
    }
  }

  /**
   * Création du Titre reçu par le formulaire
   * @param action
   */
  getChangeTitleForm(action: any){
    this.tagListService.updateTitleTag(action)
    if(!this.checkNbrRemindElementsTodisplay()){
      this.tagListService.updateFirstHide()
      if(this.nbrRemindElementsToDisplay !== 0){
        this.nbrRemindElementsToDisplay --;
      }
    }
    else{
      this.tagListService.updateLastShow();
      this.nbrRemindElementsToDisplay ++;
    }
  }

  /**
   * Création du Tag principal reçu par le formulaire
   * @param action
   */
  getChangeMainForm(action: any){
    this.tagListService.updateMainTag(action)
    if(!this.checkNbrRemindElementsTodisplay()){
      this.tagListService.updateFirstHide()
      if(this.nbrRemindElementsToDisplay !== 0){
        this.nbrRemindElementsToDisplay --;
      }
    }
  }

  /**
   * Supprime le dernier tag
   * @param action
   */
  removeTag(action: any){
    this.tagListService.deleteLastTag();
    if(this.checkNbrRemindElementsTodisplay()){
      if(this.nbrRemindElementsToDisplay !== 0){
        this.nbrRemindElementsToDisplay --;
      }
    }
  }

  /**
   * Création d'un objet contenant le nombre de Tags non affiché
   */
  getElementHide(){
    return {
      id: this.tags.length,
      content: `+${this.nbrRemindElementsToDisplay.toString()}`,
      type: 'simple'
    }
  }

}

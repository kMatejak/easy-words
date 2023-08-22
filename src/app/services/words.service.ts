import { Injectable } from '@angular/core';
import { Type, WordType } from '../data/models';
import { WORDS } from '../data/data-base';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  private words: WordType[] = [];
  private nouns: WordType[] = [];
  private verbs: WordType[] = [];

  constructor() { 
    this.words = WORDS;
  }

  /* getters */
  getWords(): WordType[] {
    return this.words;
  }

  getNouns(): WordType[] {
    return this.nouns;
  }

  getVerbs(): WordType[] {
    return this.verbs;
  }


  /*  add  */
  addNound(value: WordType) {
    this.nouns.push(value);
  }

  addVerb(value: WordType) {
    this.verbs.push(value);
  }


  check() {
    this.nouns.map(word => (word.correct = word.type === Type.NOUN));
    this.verbs.map(word => (word.correct = word.type === Type.VERB));
  }

}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BaseService } from './../base.service';

import { Chat} from './../../models/chat.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class ChatService extends BaseService {
  public chats;

  constructor(
    public http: Http,
    public af: AngularFire
  ) {
    super();
    this.setChats();
  }

  private setChats(): void {
    this.af.auth.subscribe(authState => {
      if (authState) {
        this.chats = this.af.database.list(`/chats/${authState.auth.uid}`, {
          query: {
            orderByChild: 'timestamp'
          }
        }).map(chats => {
          return chats.reverse();
        }).catch(this.handleObservableError);
      }
    });
  }

  create(chat: Chat, userId1: string, userId2: string): firebase.Promise<void> {
    return this.af.database.object(`/chats/${userId1}/${userId2}`)
      .set(chat)
      .catch(this.handlePromiseError);
  }

  getDeepChat(userId1: string, userId2: string): FirebaseObjectObservable<Chat> {
    return <FirebaseObjectObservable<Chat>> this.af.database.object(`/chats/${userId1}/${userId2}`)
      .catch(this.handleObservableError)
  }

}

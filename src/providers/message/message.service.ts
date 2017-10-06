import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFire } from 'angularfire2';
import { BaseService } from '../base.service';

@Injectable()
export class MessageService extends BaseService {

  constructor(
    public http: Http,
    public af: AngularFire
  ) {
    super();
  }

  getMessages(userId1: string, userId2: string) {
    return this.af.database.list(`/messages/${userId1}-${userId2}`, {
      query: {
        orderByChild: 'timestamp'
      }
    }).catch(this.handleObservableError)
  }

  create(message, listMessages) {
    return listMessages.push(message).
      catch(this.handlePromiseError)
  }

}

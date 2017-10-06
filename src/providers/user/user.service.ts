import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFire, FirebaseApp, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { User } from './../../models/user.model';
import { BaseService } from './../base.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService extends BaseService {
	users: FirebaseListObservable<User[]>;
  currentUser: FirebaseObjectObservable<User>;


  constructor(
		public http: Http,
		@Inject(FirebaseApp) public firebaseApp: any,
		public af: AngularFire
	) {
  	super();
    this.listenAuthState();
  }

  private setUsers(uidToExclude: string) {
    this.users = <FirebaseListObservable<User[]>>this.af.database.list(`/users`, {
      query: {
        orderByChild: 'name'
      }
    }).map(users => {
			return users.filter(user => user.$key != uidToExclude);
    });
  }

  private listenAuthState(): void {
    this.af.auth
      .subscribe(authState => {
        if (authState) {
          this.currentUser = this.af.database.object(`/users/${authState.auth.uid}`);
          this.setUsers(authState.auth.uid);
        }
      });
  }

  createUser(user: User, uuid: string): firebase.Promise<void> {
  	return this.af.database.object(`/users/${uuid}`)
      .set(user)
      .catch(this.handlePromiseError)
  }

	edit(user) {
		return this.currentUser
			.update(user)
			.catch(this.handlePromiseError)
	}

  userExists(username: string): Observable<boolean> {
    return this.af.database.list(`/users`, {
      query: {
        orderByChild: 'username',
        equalTo: username
      }
    }).map(users => {
      return users.length > 0;
    }).catch(this.handleObservableError);
  }

	getUserById(userId) {
		return this.af.database.object(`/users/${userId}`)
			.catch(this.handleObservableError);
	}

	uploadPhoto(file, userId) {
		return this.firebaseApp
			.storage()
			.ref()
			.child(`/users/${userId}`)
			.put(file);
	}
}

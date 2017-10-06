webpackJsonp([0],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SigninPage = (function () {
    function SigninPage(alertCtrl, loadingCrtl, auth, navCtrl, navParams, fb) {
        this.alertCtrl = alertCtrl;
        this.loadingCrtl = loadingCrtl;
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.signinForm = this.fb.group({
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)]],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    SigninPage.prototype.onSubmit = function () {
        var _this = this;
        var loading = this.showLoading();
        this.auth.signinWithEmail(this.signinForm.value)
            .then(function (isLogged) {
            if (isLogged) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
                loading.dismiss();
            }
        }).catch(function (err) {
            loading.dismiss();
            _this.showAlert(err);
        });
    };
    SigninPage.prototype.onSignUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage.prototype.showLoading = function () {
        var loading = this.loadingCrtl.create({
            content: 'Please Wait...'
        });
        loading.present();
        return loading;
    };
    SigninPage.prototype.showAlert = function (message) {
        this.alertCtrl.create({
            message: message,
            buttons: ['ok']
        }).present();
    };
    return SigninPage;
}());
SigninPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signin',template:/*ion-inline-start:"/home/matheus/Code/openSource/Ionic2Chat/src/pages/signin/signin.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sign In</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h1 text-center>\n		<ion-icon name="chatboxes" color="primary" class="auth-icon"></ion-icon>\n	</h1>\n	<form (ngSubmit)="onSubmit()" [formGroup]="signinForm">\n		<ion-item>\n			<ion-icon name="mail" item-left color="primary"></ion-icon>\n			<ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<ion-icon name="lock" item-left color="primary"></ion-icon>\n			<ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n		</ion-item>\n		<br>\n		<button ion-button full type="submit" [disabled]="signinForm.invalid">Enter</button>\n	</form>\n\n	<button ion-button full clear text-center (click)="onSignUp()">Sign Up</button>\n</ion-content>\n'/*ion-inline-end:"/home/matheus/Code/openSource/Ionic2Chat/src/pages/signin/signin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], SigninPage);

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage = (function () {
    function SignupPage(alertCtrl, navCtrl, navParams, fb, loadingCrtl, userService, authService) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.loadingCrtl = loadingCrtl;
        this.userService = userService;
        this.authService = authService;
        this.signupForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)]],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
    };
    SignupPage.prototype.onSubmit = function () {
        var _this = this;
        var loading = this.showLoading();
        var formUser = this.signupForm.value;
        var username = formUser.username;
        this.userService.userExists(username)
            .first()
            .subscribe(function (user) {
            if (!user) {
                _this.authService.createAuthUser({
                    email: formUser.email,
                    password: formUser.password
                }).then(function (authState) {
                    delete formUser.password;
                    var uuid = authState.auth.uid;
                    _this.userService.createUser(_this.signupForm.value, uuid)
                        .then(function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                        loading.dismiss();
                    }).catch(function (err) {
                        console.log(err);
                        loading.dismiss();
                        _this.showAlert(err);
                    });
                }).catch(function (err) {
                    console.log(err);
                    loading.dismiss();
                    _this.showAlert(err);
                });
            }
            else {
                _this.showAlert("Username " + username + " already been used");
                loading.dismiss();
            }
        });
    };
    SignupPage.prototype.showLoading = function () {
        var loading = this.loadingCrtl.create({
            content: 'Please Wait...'
        });
        loading.present();
        return loading;
    };
    SignupPage.prototype.showAlert = function (message) {
        this.alertCtrl.create({
            message: message,
            buttons: ['ok']
        }).present();
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/home/matheus/Code/openSource/Ionic2Chat/src/pages/signup/signup.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sign Up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h1 text-center>\n		<ion-icon name="person-add" color="primary" class="auth-icon"></ion-icon>\n	</h1>\n	<form (ngSubmit)="onSubmit()" [formGroup]="signupForm">\n		<ion-item>\n			<ion-icon name="person" item-left color="primary"></ion-icon>\n			<ion-input type="text" placeholder="Name" formControlName="name"></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<ion-icon name="at" item-left color="primary"></ion-icon>\n			<ion-input type="text" placeholder="Username" formControlName="username"></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<ion-icon name="mail" item-left color="primary"></ion-icon>\n			<ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<ion-icon name="lock" item-left color="primary"></ion-icon>\n			<ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n		</ion-item>\n		<br>\n		<button ion-button full type="submit" [disabled]="signupForm.invalid">Create Account</button>\n\n	</form>\n\n</ion-content>\n'/*ion-inline-end:"/home/matheus/Code/openSource/Ionic2Chat/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__["a" /* AuthService */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);


var extractError = function (error) {
    var errMsg;
    if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Response */]) {
        var body = error.json() || '';
        var err = body.error || JSON.stringify(body);
        errMsg = error.status + " - " + (error.statusText || '') + " " + err;
    }
    else {
        errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return errMsg;
};
var BaseService = (function () {
    function BaseService() {
    }
    BaseService.prototype.handlePromiseError = function (error) {
        return Promise.reject(extractError(error));
    };
    BaseService.prototype.handleObservableError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(extractError(error));
    };
    return BaseService;
}());

//# sourceMappingURL=base.service.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_chat_chat__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_chat_chat_service__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_chat_model__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = (function () {
    function HomePage(chatService, navCtrl, menuCtrl, usersService, authService) {
        this.chatService = chatService;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.usersService = usersService;
        this.authService = authService;
        this.view = "chats";
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.chats = this.chatService.chats;
        this.users = this.usersService.users;
        this.menuCtrl.enable(true, 'user-menu');
    };
    HomePage.prototype.filterItems = function (event) {
        var searchTerm = event.target.value;
        this.chats = this.chatService.chats;
        this.users = this.usersService.users;
        if (searchTerm) {
            switch (this.view) {
                case 'chats':
                    this.chats = this.chats.map(function (chats) {
                        return chats.filter(function (chat) {
                            return (chat.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
                        });
                    });
                    break;
                case 'users':
                    this.users = this.users.map(function (users) {
                        return users.filter(function (user) {
                            return (user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
                        });
                    });
                    break;
            }
        }
    };
    HomePage.prototype.ionViewCanEnter = function () {
        return this.authService.authenticated;
    };
    HomePage.prototype.onSignUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    HomePage.prototype.onChatCreate = function (recipientUser) {
        var _this = this;
        this.usersService.currentUser
            .first()
            .subscribe(function (currentUser) {
            _this.chatService.getDeepChat(currentUser.$key, recipientUser.$key)
                .first()
                .subscribe(function (chat) {
                if (chat.hasOwnProperty('$value')) {
                    var timestamp = __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.database.ServerValue.TIMESTAMP;
                    var chat1 = new __WEBPACK_IMPORTED_MODULE_7__models_chat_model__["a" /* Chat */]('', timestamp, recipientUser.name, '');
                    _this.chatService.create(chat1, currentUser.$key, recipientUser.$key);
                    var chat2 = new __WEBPACK_IMPORTED_MODULE_7__models_chat_model__["a" /* Chat */]('', timestamp, currentUser.name, '');
                    _this.chatService.create(chat2, recipientUser.$key, currentUser.$key);
                }
            });
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_chat_chat__["a" /* ChatPage */], {
            recipientUser: recipientUser
        });
    };
    HomePage.prototype.onChatOpen = function (chat) {
        var _this = this;
        var recipientUserId = chat.$key;
        this.usersService.getUserById(recipientUserId)
            .first()
            .subscribe(function (user) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_chat_chat__["a" /* ChatPage */], {
                recipientUser: user
            });
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/matheus/Code/openSource/Ionic2Chat/src/pages/home/home.html"*/'<ion-header>\n  <custom-logged-header [title]="view | capitalize: true"></custom-logged-header>\n\n  <ion-toolbar>\n  	<ion-segment [(ngModel)]="view">\n  		<ion-segment-button value="chats">\n  			Chats\n  		</ion-segment-button>\n  		<ion-segment-button value="users">\n  			Users\n  		</ion-segment-button>\n  	</ion-segment>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar (ionInput)="filterItems($event)"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n	<div [ngSwitch]="view">\n		<ion-list no-lines *ngSwitchCase="\'chats\'">\n			<button ion-item *ngFor="let chat of chats | async" (click)="onChatOpen(chat)">\n        <ion-avatar item-left>\n          <img [src]="chat.photo || \'assets/images/no-photo.jpg\'">\n        </ion-avatar>\n        <h2>{{chat.title}}</h2>\n        <p *ngIf="chat.lastMessage; else customMessage">{{chat.timestamp | date: \'dd/MM/y H:mm\'}} - {{chat.lastMessage}}</p>\n        <ng-template #customMessage>\n          <p>No messages</p>\n        </ng-template>\n      </button>\n		</ion-list>\n		<ion-list no-lines *ngSwitchCase="\'users\'">\n			<ion-item>Users</ion-item>\n      <ion-list no-lines>\n        <button ion-item *ngFor="let user of users | async" (click)="onChatCreate(user)">\n          <ion-avatar item-left>\n            <img [src]="user.photo || \'assets/images/no-photo.jpg\'">\n          </ion-avatar>\n          {{ user.name }}\n        </button>\n      </ion-list>\n		</ion-list>\n	</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/matheus/Code/openSource/Ionic2Chat/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_chat_chat_service__["a" /* ChatService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__["a" /* AuthService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 198;

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_message_message_service__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_chat_chat_service__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_message_model__ = __webpack_require__(600);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ChatPage = (function () {
    function ChatPage(chatService, messageService, navCtrl, navParams, authService, userService) {
        this.chatService = chatService;
        this.messageService = messageService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.userService = userService;
    }
    ChatPage.prototype.ionViewCanEnter = function () {
        return this.authService.authenticated;
    };
    ChatPage.prototype.sendMessage = function (newMessage) {
        var _this = this;
        if (newMessage) {
            var currentTimestamp_1 = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.database.ServerValue.TIMESTAMP;
            this.messageService
                .create(new __WEBPACK_IMPORTED_MODULE_7__models_message_model__["a" /* Message */](this.sender.$key, newMessage, currentTimestamp_1), this.messages)
                .then(function () {
                _this.chat1
                    .update({ lastMessage: newMessage, timestamp: currentTimestamp_1 });
                _this.chat2
                    .update({ lastMessage: newMessage, timestamp: currentTimestamp_1 });
            });
        }
    };
    ChatPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.recipient = this.navParams.get('recipientUser');
        this.pageTitle = this.recipient.name;
        this.userService.currentUser
            .first()
            .subscribe(function (currentUser) {
            _this.sender = currentUser;
            _this.chat1 = _this.chatService.getDeepChat(_this.sender.$key, _this.recipient.$key);
            _this.chat2 = _this.chatService.getDeepChat(_this.recipient.$key, _this.sender.$key);
            if (_this.recipient.photo) {
                _this.chat1
                    .first()
                    .subscribe(function (chat) {
                    _this.chatService.updatePhoto(_this.chat1, chat.photo, _this.recipient.photo);
                });
            }
            var doSubscription = function () {
                _this.messages
                    .subscribe(function (messages) {
                    _this.scrollToBottom();
                });
            };
            _this.messages = _this.messageService
                .getMessages(_this.sender.$key, _this.recipient.$key);
            _this.messages
                .first()
                .subscribe(function (messages) {
                if (messages.length == 0) {
                    _this.messages = _this.messageService
                        .getMessages(_this.recipient.$key, _this.sender.$key);
                    doSubscription();
                }
                else {
                    doSubscription();
                }
            });
        });
    };
    ChatPage.prototype.scrollToBottom = function (duration) {
        var _this = this;
        setTimeout(function () {
            if (_this.content) {
                _this.content.scrollToBottom(duration || 300);
            }
        }, 50);
    };
    return ChatPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], ChatPage.prototype, "content", void 0);
ChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chat',template:/*ion-inline-start:"/home/matheus/Code/openSource/Ionic2Chat/src/pages/chat/chat.html"*/'<ion-header>\n\n  <custom-logged-header [title]="pageTitle" [user]="recipient"></custom-logged-header>\n</ion-header>\n\n\n<ion-content padding>\n		<message-box *ngFor="let m of messages | async" [message]="m" [isFromSender]="(m.userId == sender.$key)">\n		</message-box>\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar>\n		<ion-item no-lines>\n			<ion-input (keyup.enter)="sendMessage(newMessage); newMessage = \'\'" type="text" placeholder="Message..." [(ngModel)]="newMessage"></ion-input>\n			<button ion-button item-right (click)="sendMessage(newMessage); newMessage = \'\'">\n			<ion-icon name="send"></ion-icon>\n			</button>\n		</ion-item>\n	</ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/matheus/Code/openSource/Ionic2Chat/src/pages/chat/chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_chat_chat_service__["a" /* ChatService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_message_message_service__["a" /* MessageService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_user_service__["a" /* UserService */]])
], ChatPage);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_service__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(81);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatService = (function (_super) {
    __extends(ChatService, _super);
    function ChatService(http, af) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.af = af;
        _this.setChats();
        return _this;
    }
    ChatService.prototype.setChats = function () {
        var _this = this;
        this.af.auth.subscribe(function (authState) {
            if (authState) {
                _this.chats = _this.af.database.list("/chats/" + authState.auth.uid, {
                    query: {
                        orderByChild: 'timestamp'
                    }
                }).map(function (chats) {
                    return chats.reverse();
                }).catch(_this.handleObservableError);
            }
        });
    };
    ChatService.prototype.create = function (chat, userId1, userId2) {
        return this.af.database.object("/chats/" + userId1 + "/" + userId2)
            .set(chat)
            .catch(this.handlePromiseError);
    };
    ChatService.prototype.getDeepChat = function (userId1, userId2) {
        return this.af.database.object("/chats/" + userId1 + "/" + userId2)
            .catch(this.handleObservableError);
    };
    ChatService.prototype.updatePhoto = function (chat, chatPhoto, recipientUserPhoto) {
        if (chatPhoto != recipientUserPhoto) {
            return chat.update({ photo: recipientUserPhoto });
        }
        return Promise.resolve();
    };
    return ChatService;
}(__WEBPACK_IMPORTED_MODULE_3__base_service__["a" /* BaseService */]));
ChatService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFire */]])
], ChatService);

//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(275);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signin_signin__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_chat_chat__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_user_profile_user_profile__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_custom_logged_header_custom_logged_header_component__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_message_box_message_box_component__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_user_info_user_info_component__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_user_menu_user_menu_component__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_progress_bar_progress_bar_component__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_user_user_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_auth_auth_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes_capitalize_pipe__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_chat_chat_service__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_message_message_service__ = __webpack_require__(599);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var firebaseAppConfig = {
    apiKey: "AIzaSyCevQL7jN4iJFbl7YL0rhHQkVPy-lQE-o4",
    authDomain: "ionic-chat-544c6.firebaseapp.com",
    databaseURL: "https://ionic-chat-544c6.firebaseio.com",
    storageBucket: "ionic-chat-544c6.appspot.com",
    messagingSenderId: "553694861113"
};
var firebaseAuthConfig = {
    provider: __WEBPACK_IMPORTED_MODULE_17_angularfire2__["e" /* AuthProviders */].Custom,
    method: __WEBPACK_IMPORTED_MODULE_17_angularfire2__["d" /* AuthMethods */].Password
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_20__pipes_capitalize_pipe__["a" /* CapitalizePipe */],
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_12__components_custom_logged_header_custom_logged_header_component__["a" /* CustomLoggedHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_13__components_message_box_message_box_component__["a" /* MessageBoxComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_user_info_user_info_component__["a" /* UserInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_user_menu_user_menu_component__["a" /* UserMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_user_profile_user_profile__["a" /* UserProfilePage */],
            __WEBPACK_IMPORTED_MODULE_16__components_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_17_angularfire2__["c" /* AngularFireModule */].initializeApp(firebaseAppConfig, firebaseAuthConfig)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_user_profile_user_profile__["a" /* UserProfilePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_18__providers_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_19__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_21__providers_chat_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_22__providers_message_message_service__["a" /* MessageService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(authService, userService, platform, statusBar, splashScreen) {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */];
        authService.auth.subscribe(function (authState) {
            if (authState) {
                userService.currentUser
                    .subscribe(function (user) { return _this.currentUser = user; });
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/matheus/Code/openSource/Ionic2Chat/src/app/app.html"*/'<ion-menu [content]="content" enable="false" id="user-menu">\n  <user-menu [user]="currentUser"></user-menu>\n</ion-menu>\n<ion-nav [root]="rootPage" #content></ion-nav>\n'/*ion-inline-end:"/home/matheus/Code/openSource/Ionic2Chat/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__providers_user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_service__ = __webpack_require__(142);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function (_super) {
    __extends(AuthService, _super);
    function AuthService(http, auth) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.auth = auth;
        return _this;
    }
    AuthService.prototype.createAuthUser = function (user) {
        return this.auth.createUser(user)
            .catch(this.handlePromiseError);
    };
    AuthService.prototype.signinWithEmail = function (user) {
        return this.auth.login(user)
            .then(function (authState) {
            return authState != null;
        }).catch(this.handlePromiseError);
    };
    AuthService.prototype.logout = function () {
        return this.auth.logout();
    };
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.auth
                    .first()
                    .subscribe(function (authState) {
                    (authState) ? resolve(true) : reject(false);
                });
            });
        },
        enumerable: true,
        configurable: true
    });
    return AuthService;
}(__WEBPACK_IMPORTED_MODULE_5__base_service__["a" /* BaseService */]));
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4_angularfire2__["b" /* AngularFireAuth */]])
], AuthService);

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chat; });
var Chat = (function () {
    function Chat(lastMessage, timestamp, title, photo) {
        this.lastMessage = lastMessage;
        this.timestamp = timestamp;
        this.title = title;
        this.photo = photo;
    }
    return Chat;
}());

//# sourceMappingURL=chat.model.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomLoggedHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_component__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__ = __webpack_require__(47);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomLoggedHeaderComponent = (function (_super) {
    __extends(CustomLoggedHeaderComponent, _super);
    function CustomLoggedHeaderComponent(alertCtrl, authService, app, menuCtrl) {
        var _this = _super.call(this, alertCtrl, authService, app, menuCtrl) || this;
        _this.alertCtrl = alertCtrl;
        _this.authService = authService;
        _this.app = app;
        _this.menuCtrl = menuCtrl;
        return _this;
    }
    return CustomLoggedHeaderComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_component__["a" /* BaseComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], CustomLoggedHeaderComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], CustomLoggedHeaderComponent.prototype, "user", void 0);
CustomLoggedHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'custom-logged-header',template:/*ion-inline-start:"/home/matheus/Code/openSource/Ionic2Chat/src/components/custom-logged-header/custom-logged-header.component.html"*/'<ion-navbar>\n	<button ion-button menuToggle="user-menu">\n		<ion-icon name="menu"></ion-icon>\n	</button>\n	<ion-title>\n		<ion-item color="transparent" detail-none no-lines *ngIf="user; else titleTemplate">\n			<ion-avatar item-left>\n				<img [src]="user.photo || \'assests/images/no-photo.jpg\'">\n			</ion-avatar>\n			{{ title }}\n		</ion-item>\n\n		<ng-template #titleTemplate>\n			{{ title }}\n		</ng-template>\n	</ion-title>\n	<ion-buttons end>\n		<button ion-button icon-only (click)="onLogout()">\n			<ion-icon name="exit"></ion-icon>\n		</button>\n	</ion-buttons>\n</ion-navbar>\n'/*ion-inline-end:"/home/matheus/Code/openSource/Ionic2Chat/src/components/custom-logged-header/custom-logged-header.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* MenuController */]])
], CustomLoggedHeaderComponent);

//# sourceMappingURL=custom-logged-header.component.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_signin_signin__ = __webpack_require__(137);

var BaseComponent = (function () {
    function BaseComponent(alertCtrl, authService, app, menuCtrl) {
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.app = app;
        this.menuCtrl = menuCtrl;
    }
    BaseComponent.prototype.ngOnInit = function () {
        this.navCtrl = this.app.getActiveNav();
    };
    BaseComponent.prototype.onLogout = function () {
        var _this = this;
        this.alertCtrl.create({
            message: "Do you want to quit?",
            buttons: [
                {
                    text: 'Yes',
                    handler: function () {
                        _this.authService.logout()
                            .then(function () {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__pages_signin_signin__["a" /* SigninPage */]);
                            _this.menuCtrl.enable(false, 'user-menu');
                        });
                    }
                },
                {
                    text: 'No'
                }
            ]
        }).present();
    };
    return BaseComponent;
}());

//# sourceMappingURL=base.component.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value, onlyFirst) {
        if (onlyFirst)
            return value.charAt(0).toUpperCase() + value.substr(1);
        var words = value.split(' ');
        var output = '';
        words.forEach(function (value, index, words) {
            output += value.charAt(0).toUpperCase() + value.substr(1).toLowerCase() + ' ';
        });
        return output;
    };
    return CapitalizePipe;
}());
CapitalizePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'capitalize'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], CapitalizePipe);

//# sourceMappingURL=capitalize.pipe.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_service__ = __webpack_require__(142);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MessageService = (function (_super) {
    __extends(MessageService, _super);
    function MessageService(http, af) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.af = af;
        return _this;
    }
    MessageService.prototype.getMessages = function (userId1, userId2) {
        return this.af.database.list("/messages/" + userId1 + "-" + userId2, {
            query: {
                orderByChild: 'timestamp',
                limitToLast: 30
            }
        }).catch(this.handleObservableError);
    };
    MessageService.prototype.create = function (message, listMessages) {
        return listMessages.push(message).
            catch(this.handlePromiseError);
    };
    return MessageService;
}(__WEBPACK_IMPORTED_MODULE_4__base_service__["a" /* BaseService */]));
MessageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFire */]])
], MessageService);

//# sourceMappingURL=message.service.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = (function () {
    function Message(userId, text, timestamp) {
        this.userId = userId;
        this.text = text;
        this.timestamp = timestamp;
    }
    return Message;
}());

//# sourceMappingURL=message.model.js.map

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageBoxComponent = (function () {
    function MessageBoxComponent() {
    }
    return MessageBoxComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], MessageBoxComponent.prototype, "message", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], MessageBoxComponent.prototype, "isFromSender", void 0);
MessageBoxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'message-box',template:/*ion-inline-start:"/home/matheus/Code/openSource/Ionic2Chat/src/components/message-box/message-box.component.html"*/'<div class="text" [ngClass]="{\'sender-background\': isFromSender}">\n  <p>{{ message.text }}</p>\n  <p class="timestamp">{{ message.timestamp | date: \'dd/MM/y H:mm\'}}</p>\n</div>\n'/*ion-inline-end:"/home/matheus/Code/openSource/Ionic2Chat/src/components/message-box/message-box.component.html"*/,
        host: {
            '[style.justify-content]': '((!isFromSender) ? "flex-start" : "flex-end")',
            '[style.text-align]': '((!isFromSender) ? "left" : "right")'
        }
    }),
    __metadata("design:paramtypes", [])
], MessageBoxComponent);

//# sourceMappingURL=message-box.component.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserInfoComponent = (function () {
    function UserInfoComponent() {
        this.isMenu = false;
    }
    return UserInfoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], UserInfoComponent.prototype, "user", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], UserInfoComponent.prototype, "isMenu", void 0);
UserInfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'user-info',template:/*ion-inline-start:"/home/matheus/Code/openSource/Ionic2Chat/src/components/user-info/user-info.component.html"*/'<div *ngIf="user">\n  <ion-avatar [ngClass]="{\'custom-background\': isMenu}">\n    <img class="round" [src]="user.photo || \'assets/images/no-photo.jpg\'">\n  </ion-avatar>\n  <h2 text-center>{{ user.name }}</h2>\n  <p text-center>@{{ user.username }}</p>\n</div>\n'/*ion-inline-end:"/home/matheus/Code/openSource/Ionic2Chat/src/components/user-info/user-info.component.html"*/
    }),
    __metadata("design:paramtypes", [])
], UserInfoComponent);

//# sourceMappingURL=user-info.component.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_component__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_user_profile_user_profile__ = __webpack_require__(605);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserMenuComponent = (function (_super) {
    __extends(UserMenuComponent, _super);
    function UserMenuComponent(alertCtrl, authService, app, menuCtrl) {
        var _this = _super.call(this, alertCtrl, authService, app, menuCtrl) || this;
        _this.alertCtrl = alertCtrl;
        _this.authService = authService;
        _this.app = app;
        _this.menuCtrl = menuCtrl;
        return _this;
    }
    UserMenuComponent.prototype.onProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_user_profile_user_profile__["a" /* UserProfilePage */]);
    };
    return UserMenuComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_component__["a" /* BaseComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('user'),
    __metadata("design:type", Object)
], UserMenuComponent.prototype, "currentUser", void 0);
UserMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'user-menu',template:/*ion-inline-start:"/home/matheus/Code/openSource/Ionic2Chat/src/components/user-menu/user-menu.component.html"*/'<ion-content>\n  <user-info [user]="currentUser" [isMenu]="true"></user-info>\n\n  <ion-list no-lines>\n    <button ion-item icon-right detail-none menuClose="user-menu" (click)="onProfile()">\n      Profile\n      <ion-icon name="person" item-right></ion-icon>\n    </button>\n    <button ion-item icon-right detail-none menuClose="user-menu" (click)="onLogout()">\n      Logout\n      <ion-icon name="exit" item-right></ion-icon>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/matheus/Code/openSource/Ionic2Chat/src/components/user-menu/user-menu.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* MenuController */]])
], UserMenuComponent);

//# sourceMappingURL=user-menu.component.js.map

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user_service__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserProfilePage = (function () {
    function UserProfilePage(navCtrl, navParams, authService, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.userService = userService;
        this.canEdit = false;
    }
    UserProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userService.currentUser
            .subscribe(function (user) { return _this.currentUser = user; });
    };
    UserProfilePage.prototype.ionViewCanEnter = function () {
        return this.authService.authenticated;
    };
    UserProfilePage.prototype.onSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        if (this.filePhoto) {
            var uploadTask_1 = this.userService.uploadPhoto(this.filePhoto, this.currentUser.$key);
            uploadTask_1.on('state_changed', function (snapshot) {
                _this.uploadProgress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            }, function (error) {
            }, function () {
                _this.editUser(uploadTask_1.snapshot.downloadURL);
            });
        }
        else {
            this.editUser();
        }
    };
    UserProfilePage.prototype.onPhoto = function (event) {
        this.filePhoto = event.target.files[0];
    };
    UserProfilePage.prototype.editUser = function (photoUrl) {
        var _this = this;
        this.userService
            .edit({ name: this.currentUser.name,
            username: this.currentUser.username,
            photo: photoUrl || this.currentUser.photo || '' })
            .then(function () {
            _this.canEdit = false;
            _this.filePhoto = undefined;
            _this.uploadProgress = 0;
        });
    };
    return UserProfilePage;
}());
UserProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-profile',template:/*ion-inline-start:"/home/matheus/Code/openSource/Ionic2Chat/src/pages/user-profile/user-profile.html"*/'<ion-header>\n  <custom-logged-header [title]="\'User Profile\'"></custom-logged-header>\n</ion-header>\n\n\n<ion-content padding>\n  <user-info [user]="currentUser"></user-info>\n  <button ion-button block (click)="canEdit = !canEdit">Edit</button>\n  <form (ngSubmit)="onSubmit($event)" *ngIf="canEdit" #profileForm="ngForm">\n    <ion-item>\n      <ion-icon name="person"></ion-icon>\n      <ion-input type="text"\n                 placeholder="Name"\n                 name="name"\n                 [(ngModel)]="currentUser.name"\n                 required\n                 minlenght="3">\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="at"></ion-icon>\n      <ion-input type="text"\n                 placeholder="Username"\n                 name="username"\n                 [(ngModel)]="currentUser.username"\n                 required\n                 minlenght="3">\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="image"></ion-icon>\n      <input type="file" accept="image/*" (change)="onPhoto($event)">\n    </ion-item>\n\n    <progress-bar *ngIf="uploadProgress" [progress]="uploadProgress"></progress-bar>\n\n    <br>\n    <button ion-button block type="submit" [disabled]="profileForm.form.invalid">Save</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/matheus/Code/openSource/Ionic2Chat/src/pages/user-profile/user-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_user_service__["a" /* UserService */]])
], UserProfilePage);

//# sourceMappingURL=user-profile.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
    }
    return ProgressBarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], ProgressBarComponent.prototype, "progress", void 0);
ProgressBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'progress-bar',template:/*ion-inline-start:"/home/matheus/Code/openSource/Ionic2Chat/src/components/progress-bar/progress-bar.component.html"*/'<div class="progress-outer">\n  <div class="progress-inner" [style.width]="progress + \'%\'">\n    {{ progress }}%\n  </div>\n</div>\n'/*ion-inline-end:"/home/matheus/Code/openSource/Ionic2Chat/src/components/progress-bar/progress-bar.component.html"*/
    }),
    __metadata("design:paramtypes", [])
], ProgressBarComponent);

//# sourceMappingURL=progress-bar.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_service__ = __webpack_require__(142);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var UserService = (function (_super) {
    __extends(UserService, _super);
    function UserService(http, firebaseApp, af) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.firebaseApp = firebaseApp;
        _this.af = af;
        _this.listenAuthState();
        return _this;
    }
    UserService.prototype.setUsers = function (uidToExclude) {
        this.users = this.af.database.list("/users", {
            query: {
                orderByChild: 'name'
            }
        }).map(function (users) {
            return users.filter(function (user) { return user.$key != uidToExclude; });
        });
    };
    UserService.prototype.listenAuthState = function () {
        var _this = this;
        this.af.auth
            .subscribe(function (authState) {
            if (authState) {
                _this.currentUser = _this.af.database.object("/users/" + authState.auth.uid);
                _this.setUsers(authState.auth.uid);
            }
        });
    };
    UserService.prototype.createUser = function (user, uuid) {
        return this.af.database.object("/users/" + uuid)
            .set(user)
            .catch(this.handlePromiseError);
    };
    UserService.prototype.edit = function (user) {
        return this.currentUser
            .update(user)
            .catch(this.handlePromiseError);
    };
    UserService.prototype.userExists = function (username) {
        return this.af.database.list("/users", {
            query: {
                orderByChild: 'username',
                equalTo: username
            }
        }).map(function (users) {
            return users.length > 0;
        }).catch(this.handleObservableError);
    };
    UserService.prototype.getUserById = function (userId) {
        return this.af.database.object("/users/" + userId)
            .catch(this.handleObservableError);
    };
    UserService.prototype.uploadPhoto = function (file, userId) {
        return this.firebaseApp
            .storage()
            .ref()
            .child("/users/" + userId)
            .put(file);
    };
    return UserService;
}(__WEBPACK_IMPORTED_MODULE_4__base_service__["a" /* BaseService */]));
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3_angularfire2__["f" /* FirebaseApp */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], Object, __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFire */]])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ })

},[270]);
//# sourceMappingURL=main.js.map
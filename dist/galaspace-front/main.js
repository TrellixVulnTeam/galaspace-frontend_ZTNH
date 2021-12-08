(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+XmF":
/*!***************************************!*\
  !*** ./src/app/guards/login.guard.ts ***!
  \***************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");



class LoginGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    redirect(flag) {
        if (!flag) {
            this.router.navigate(['/', 'login']);
        }
    }
    canActivate(route, state) {
        let isUserLogged;
        this.authService.isLogged.subscribe((isLogged) => {
            isUserLogged = isLogged;
        });
        this.redirect(isUserLogged);
        console.log("login guard -->", isUserLogged);
        return isUserLogged;
    }
}
LoginGuard.ɵfac = function LoginGuard_Factory(t) { return new (t || LoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
LoginGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginGuard, factory: LoginGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/galagaapps/Documents/UTT/Seguridad Informatica/Originales/galaspace-frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "3tD2":
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/chat.service */ "sjK5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





const _c0 = ["scrollMe"];
const _c1 = function (a0, a1) { return { sent: a0, received: a1 }; };
function ChatComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msj_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, msj_r2.msjId === 1, msj_r2.msjId === 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", msj_r2.newMessage, " ");
} }
const _c2 = function () { return { standalone: true }; };
class ChatComponent {
    constructor(chat, activeRoute) {
        this.chat = chat;
        this.activeRoute = activeRoute;
        this.newMessage = "";
        this.mensajes = [];
        this.messageList = [{
                emisor: 1,
                message: "Hola !"
            }, {
                emisor: "id",
                message: "Hola bro !"
            }, {
                emisor: 1,
                message: "how are you up to?"
            }, {
                emisor: "id",
                message: "living life !"
            },
        ];
    }
    ngOnInit() {
        let iP = this.activeRoute.snapshot.params;
        console.log("parametros", iP['ide']);
    }
    emitSendMessage() {
        let messageInfo = {
            newMessage: this.newMessage,
            msjId: 1
        };
        if (messageInfo.newMessage == "") {
            return;
        }
        this.chat.emitSendMessage(messageInfo);
        this.newMessage = "";
    }
    ngAfterViewChecked() {
        this.scrollBottom();
    }
    ngDoCheck() {
        this.scrollBottom();
        console.log("hola");
    }
    scrollBottom() {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], viewQuery: function ChatComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myScrollContainer = _t.first);
    } }, decls: 16, vars: 5, consts: [[1, "col-12", "d-flex", "p-2", "align-items-center", "justify-content-center", "d-infoUser"], [1, "col-11", "d-flex", "align-items-center", "p-1"], [1, "col-2", "d-contImage"], [1, "d-userImage2"], ["src", "../../../assets/friends/den.jpeg", "alt", "", 1, "img-user"], [1, "name-user", "col-8"], ["id", "general", 1, "chat-container", 3, "scrollTop"], ["scrollMee", ""], ["class", "col-12 d-msj p-3", 4, "ngFor", "ngForOf"], [3, "submit"], [1, "d-flex", "col-10", "d-insertTxt"], ["type", "text", "placeholder", "Escribe...", 1, "col-11", "input", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "button", "id", "button-addon2", 1, "button", "col-1"], [1, "material-icons-round", "p-1", "but", 3, "click"], [1, "col-12", "d-msj", "p-3"], [1, "p-msj", "p-3", 3, "ngClass"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Bibimbade Ocxocopolis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChatComponent_div_9_Template, 3, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ChatComponent_Template_form_submit_10_listener() { return ctx.emitSendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatComponent_Template_input_ngModelChange_12_listener($event) { return ctx.newMessage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_span_click_14_listener() { return ctx.emitSendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollTop", _r0.scrollHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chat.chats);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newMessage)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["#general[_ngcontent-%COMP%]{\n    background-image: url('plantilla3.png');\n    \n}\n.d-insertTxt[_ngcontent-%COMP%]{\n    background-color: #fff;\n    border:1px #5C4E9A solid;\n    border-radius: 50px;\n    padding-left: 2%;\n    bottom: 2%;\n    position: fixed;\n    width: 90%;\n    margin-left: 5%;\n}\n.chat-container[_ngcontent-%COMP%]{\n    background-color: cadetblue;\n    height: 100vh;\n    display: flex;   \n    flex-direction: column;\n    padding-bottom: 8%;\n    overflow-y: scroll;\n    font-family: Arial;\n    padding-top: 95px;\n}\n.input[_ngcontent-%COMP%]{\n    border: none;\n\n}\n.input[_ngcontent-%COMP%]:focus{\noutline: none;\n}\n.button[_ngcontent-%COMP%]{\n    display: block;\n    border: none;\n    border-radius: 100px;\n    width: 3.6%;\n    height: 1.0%;\n    margin-left: 2%;\n    background-color: #fff;\n}\n.but[_ngcontent-%COMP%]{\n    border-radius: 100px;\n    color:#5C4E9A;\n}\n.but[_ngcontent-%COMP%]:active{\n    transform: scale(0.9);\n}\n.received[_ngcontent-%COMP%]{\n    align-self: flex-start;\n    background-color:#5C4E9A;\n    color: #fff;\n    margin: 1%;\n    max-width: -moz-fit-content;\n    max-width: fit-content;\n    border-radius: 30px;\n    width: 50%;\n    word-wrap: break-word;\n}\n.sent[_ngcontent-%COMP%]{\n    align-self: flex-end;\n    background-color: var(--pinkG);\n    color: #fff;\n    margin: 1%;\n    float: right;\n    max-width: -moz-fit-content;\n    max-width: fit-content;\n    border-radius: 30px;\n    width: 50%;\n    word-wrap: break-word;\n    \n}\n.d-userImage2[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n    height: 60px;\n    width: 60px;\n    border-radius: 50%;\n    \n}\n.d-contImage[_ngcontent-%COMP%]{\n    width: 7%;\n}\n.img-user[_ngcontent-%COMP%]{\n    width: 100%;\n    object-fit: cover;\n    border-radius: 100px;\n    background-color: rgba(207, 6, 140, 0.74);\n    transition: .5s;\n    cursor: pointer;\n}\n.d-infoUser[_ngcontent-%COMP%]{\n    background-color: var(--purpleG);\n    color: #fff;\n    font-size: 1.5em;\n    position: fixed;\n}\n.img-user[_ngcontent-%COMP%]:active{\n    transform: scale(.95);\n}\n\n@media (min-width:360px) and (max-width:640px) {\n    .name-user[_ngcontent-%COMP%]{\n       font-size:0.8rem;\n       padding-top: 10px;\n    }\n    .d-userImage2[_ngcontent-%COMP%]{\n        display: flex;\n        justify-content: center;\n        height: 30px;\n        width: 30px;\n        border-radius: 50%;\n        background-color: turquoise;\n    }\n    .d-contImage[_ngcontent-%COMP%]{\n        width: 13%;\n    }\n    .img-user[_ngcontent-%COMP%]{\n        width: 100%;\n        object-fit: cover;\n        border-radius: 100px;\n        background-color: rgba(207, 6, 140, 0.74);\n        transition: .5s;\n        cursor: pointer;\n    }\n    .input[_ngcontent-%COMP%]{\n        margin-top: 1%;\n        width: 80%;\n        margin-left: 3%;\n        height: 30px;\n    }\n    .chat-container[_ngcontent-%COMP%]{\n        padding-top: 65px;\n    }\n\n}\n\n@media (min-width:320px) and (max-width:568px) {\n    .chat-container[_ngcontent-%COMP%]{\n        padding-top: 65px;\n    }\n    .name-user[_ngcontent-%COMP%]{\n        font-size:0.8rem;\n        padding-top: 10px;\n     }\n     .d-userImage2[_ngcontent-%COMP%]{\n         display: flex;\n         justify-content: center;\n         height: 30px;\n         width: 30px;\n         border-radius: 50%;\n         background-color: turquoise;\n     }\n     .d-contImage[_ngcontent-%COMP%]{\n         width: 13%;\n     }\n     .img-user[_ngcontent-%COMP%]{\n         width: 100%;\n         object-fit: cover;\n         border-radius: 100px;\n         background-color: rgba(207, 6, 140, 0.74);\n         transition: .5s;\n         cursor: pointer;\n     }\n     .input[_ngcontent-%COMP%]{\n         margin-top: 1%;\n         width: 80%;\n         margin-left: 3%;\n         height: 30px;\n     }\n}\n\n@media (min-width:768px) and (max-width:1024px) {\n\n    .input[_ngcontent-%COMP%]{\n        margin-top: .5%;\n        width: 88%;\n        margin-left: 1%;\n        height: 30px;\n    }\n    .d-userImage2[_ngcontent-%COMP%]{\n        display: flex;\n        justify-content: center;\n        height: 60px;\n        width: 60px;\n        border-radius: 50%;\n        background-color: turquoise;\n    }\n    .d-contImage[_ngcontent-%COMP%]{\n        width: 10%;\n    }\n    .img-user[_ngcontent-%COMP%]{\n        width: 100%;\n        object-fit: cover;\n        border-radius: 100px;\n        background-color: rgba(207, 6, 140, 0.74);\n        transition: .5s;\n        cursor: pointer;\n    }\n}\n\n@media (min-width:540px) and (max-width:720px) {\n    .d-userImage2[_ngcontent-%COMP%]{\n        display: flex;\n        justify-content: center;\n        height: 40px;\n        width: 40px;\n        border-radius: 50%;\n        background-color: turquoise;\n    }\n    .d-contImage[_ngcontent-%COMP%]{\n        width: 10%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVDQUErRDs7QUFFbkU7QUFDQTtJQUNJLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsZUFBZTtJQUNmLFVBQVU7SUFDVixlQUFlO0FBQ25CO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZOztBQUVoQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFVBQVU7SUFDViwyQkFBc0I7SUFBdEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtJQUNaLDJCQUFzQjtJQUF0QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixxQkFBcUI7O0FBRXpCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQix5Q0FBeUM7SUFDekMsZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUVBLDBCQUEwQjtBQUMxQjtJQUNJO09BQ0csZ0JBQWdCO09BQ2hCLGlCQUFpQjtJQUNwQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixZQUFZO1FBQ1osV0FBVztRQUNYLGtCQUFrQjtRQUNsQiwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksV0FBVztRQUNYLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIseUNBQXlDO1FBQ3pDLGVBQWU7UUFDZixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsVUFBVTtRQUNWLGVBQWU7UUFDZixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7O0FBRUo7QUFDQSw2QkFBNkI7QUFDN0I7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjtLQUNwQjtLQUNBO1NBQ0ksYUFBYTtTQUNiLHVCQUF1QjtTQUN2QixZQUFZO1NBQ1osV0FBVztTQUNYLGtCQUFrQjtTQUNsQiwyQkFBMkI7S0FDL0I7S0FDQTtTQUNJLFVBQVU7S0FDZDtLQUNBO1NBQ0ksV0FBVztTQUNYLGlCQUFpQjtTQUNqQixvQkFBb0I7U0FDcEIseUNBQXlDO1NBQ3pDLGVBQWU7U0FDZixlQUFlO0tBQ25CO0tBQ0E7U0FDSSxjQUFjO1NBQ2QsVUFBVTtTQUNWLGVBQWU7U0FDZixZQUFZO0tBQ2hCO0FBQ0w7QUFDQSx1QkFBdUI7QUFDdkI7O0lBRUk7UUFDSSxlQUFlO1FBQ2YsVUFBVTtRQUNWLGVBQWU7UUFDZixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLFlBQVk7UUFDWixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLG9CQUFvQjtRQUNwQix5Q0FBeUM7UUFDekMsZUFBZTtRQUNmLGVBQWU7SUFDbkI7QUFDSjtBQUNBLDZCQUE2QjtBQUM3QjtJQUNJO1FBQ0ksYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixZQUFZO1FBQ1osV0FBVztRQUNYLGtCQUFrQjtRQUNsQiwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6ImNoYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNnZW5lcmFse1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ZyaWVuZHMvcGxhbnRpbGxhMy5wbmcnKTtcbiAgICBcbn1cbi5kLWluc2VydFR4dHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjoxcHggIzVDNEU5QSBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG4gICAgYm90dG9tOiAyJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG59XG4uY2hhdC1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDsgICBcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmctYm90dG9tOiA4JTtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICAgIHBhZGRpbmctdG9wOiA5NXB4O1xufVxuLmlucHV0e1xuICAgIGJvcmRlcjogbm9uZTtcblxufVxuLmlucHV0OmZvY3Vze1xub3V0bGluZTogbm9uZTtcbn1cbi5idXR0b257XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIHdpZHRoOiAzLjYlO1xuICAgIGhlaWdodDogMS4wJTtcbiAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5idXR7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgY29sb3I6IzVDNEU5QTtcbn1cbi5idXQ6YWN0aXZle1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbn1cbi5yZWNlaXZlZHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IzVDNEU5QTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW46IDElO1xuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICB3aWR0aDogNTAlO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cbi5zZW50e1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmtHKTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW46IDElO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgXG59XG4uZC11c2VySW1hZ2Uye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBcbn1cbi5kLWNvbnRJbWFnZXtcbiAgICB3aWR0aDogNyU7XG59XG4uaW1nLXVzZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDcsIDYsIDE0MCwgMC43NCk7XG4gICAgdHJhbnNpdGlvbjogLjVzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kLWluZm9Vc2Vye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZUcpO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgcG9zaXRpb246IGZpeGVkO1xufVxuLmltZy11c2VyOmFjdGl2ZXtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC45NSk7XG59XG5cbi8qTU9UTyBHNCAgMzYwUFggVE8gNjQwUFgqL1xuQG1lZGlhIChtaW4td2lkdGg6MzYwcHgpIGFuZCAobWF4LXdpZHRoOjY0MHB4KSB7XG4gICAgLm5hbWUtdXNlcntcbiAgICAgICBmb250LXNpemU6MC44cmVtO1xuICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cbiAgICAuZC11c2VySW1hZ2Uye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0dXJxdW9pc2U7XG4gICAgfVxuICAgIC5kLWNvbnRJbWFnZXtcbiAgICAgICAgd2lkdGg6IDEzJTtcbiAgICB9XG4gICAgLmltZy11c2Vye1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNywgNiwgMTQwLCAwLjc0KTtcbiAgICAgICAgdHJhbnNpdGlvbjogLjVzO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5pbnB1dHtcbiAgICAgICAgbWFyZ2luLXRvcDogMSU7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzJTtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICAuY2hhdC1jb250YWluZXJ7XG4gICAgICAgIHBhZGRpbmctdG9wOiA2NXB4O1xuICAgIH1cblxufVxuLypJUEhPTkUgNS9TRSAzMjBQWCBUTyA1NjhQWCovXG5AbWVkaWEgKG1pbi13aWR0aDozMjBweCkgYW5kIChtYXgtd2lkdGg6NTY4cHgpIHtcbiAgICAuY2hhdC1jb250YWluZXJ7XG4gICAgICAgIHBhZGRpbmctdG9wOiA2NXB4O1xuICAgIH1cbiAgICAubmFtZS11c2Vye1xuICAgICAgICBmb250LXNpemU6MC44cmVtO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgfVxuICAgICAuZC11c2VySW1hZ2Uye1xuICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0dXJxdW9pc2U7XG4gICAgIH1cbiAgICAgLmQtY29udEltYWdle1xuICAgICAgICAgd2lkdGg6IDEzJTtcbiAgICAgfVxuICAgICAuaW1nLXVzZXJ7XG4gICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNywgNiwgMTQwLCAwLjc0KTtcbiAgICAgICAgIHRyYW5zaXRpb246IC41cztcbiAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgfVxuICAgICAuaW5wdXR7XG4gICAgICAgICBtYXJnaW4tdG9wOiAxJTtcbiAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICBtYXJnaW4tbGVmdDogMyU7XG4gICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgIH1cbn1cbi8qSVBBRCA3NDhQWCBUTyAxMDI0UFgqL1xuQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpIGFuZCAobWF4LXdpZHRoOjEwMjRweCkge1xuXG4gICAgLmlucHV0e1xuICAgICAgICBtYXJnaW4tdG9wOiAuNSU7XG4gICAgICAgIHdpZHRoOiA4OCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxJTtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICAuZC11c2VySW1hZ2Uye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0dXJxdW9pc2U7XG4gICAgfVxuICAgIC5kLWNvbnRJbWFnZXtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICB9XG4gICAgLmltZy11c2Vye1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNywgNiwgMTQwLCAwLjc0KTtcbiAgICAgICAgdHJhbnNpdGlvbjogLjVzO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuLypTVVJGQUNFIERVTyA1NDBQWCBUTyA3MjBQWCovXG5AbWVkaWEgKG1pbi13aWR0aDo1NDBweCkgYW5kIChtYXgtd2lkdGg6NzIwcHgpIHtcbiAgICAuZC11c2VySW1hZ2Uye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0dXJxdW9pc2U7XG4gICAgfVxuICAgIC5kLWNvbnRJbWFnZXtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "5U9e":
/*!********************************************!*\
  !*** ./src/app/services/socket.service.ts ***!
  \********************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "2qj+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SocketService {
    constructor() {
        this.io = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_0__["io"])("http://localhost:3000/", {
            withCredentials: true,
            autoConnect: true
        });
    }
}
SocketService.ɵfac = function SocketService_Factory(t) { return new (t || SocketService)(); };
SocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SocketService, factory: SocketService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiURL: 'http://127.0.0.1:3333/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/post.service */ "ENZJ");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search/search.component */ "RZmA");
/* harmony import */ var _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../create-post/create-post.component */ "ZcR4");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../post/post.component */ "YzH7");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contacts/contacts.component */ "MXpY");







class HomeComponent {
    constructor(postService) {
        this.postService = postService;
    }
    ngOnInit() { }
    onScrollDown() {
        this.addItems();
    }
    addItems() {
        this.postService.addMorePost();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 15, vars: 0, consts: [["id", "container-home", "infinite-scroll", "", 1, "row", 3, "scrolled"], [1, "col-lg-3", "d-none", "d-lg-block", "fixed"], ["id", "subtitle"], [1, "col-lg-6", "offset-lg-3"], ["id", "title-create-publication"], [1, "col-lg-3", "d-none", "d-lg-block", "fixed", "offset-lg-9"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scrolled", function HomeComponent_Template_div_scrolled_1_listener() { return ctx.onScrollDown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Buscar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Crear publicaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-create-post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Contactos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"], _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_4__["CreatePostComponent"], _post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"], _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_6__["ContactsComponent"]], styles: ["#container-home[_ngcontent-%COMP%]{\r\n    padding: 125px 0px 0px 0px;\r\n    margin: 0px;\r\n}\r\n#title-create-publication[_ngcontent-%COMP%]{\r\n    font-size: 18.5px;\r\n    color: var(--purpleG);\r\n    font-family: 'Arial';\r\n    font-weight: bold;\r\n}\r\n#subtitle[_ngcontent-%COMP%]{\r\n    font-size: 18.5px;\r\n    color: gray;\r\n    font-family: 'Arial';\r\n    font-weight: bold;\r\n}\r\n.fixed[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjtBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXItaG9tZXtcclxuICAgIHBhZGRpbmc6IDEyNXB4IDBweCAwcHggMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuI3RpdGxlLWNyZWF0ZS1wdWJsaWNhdGlvbntcclxuICAgIGZvbnQtc2l6ZTogMTguNXB4O1xyXG4gICAgY29sb3I6IHZhcigtLXB1cnBsZUcpO1xyXG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcbiNzdWJ0aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMTguNXB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZml4ZWR7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "DZ0t":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/post.service */ "ENZJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post/post.component */ "YzH7");




const _c0 = function (a0) { return { "border-bottom": a0 }; };
class ProfileComponent {
    constructor(postService) {
        this.postService = postService;
        this.showFirstTab = true;
        this.showSecondTab = false;
    }
    ngOnInit() {
    }
    onScrollDown() {
        this.addItems();
    }
    addItems() {
        this.postService.addMorePost();
    }
    setTabPosition(index) {
        if (index == 0) {
            this.showSecondTab = false;
            this.showFirstTab = true;
        }
        if (index == 1) {
            this.showFirstTab = false;
            this.showSecondTab = true;
        }
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 26, vars: 6, consts: [["id", "container-profile"], ["id", "container-header-profile", 1, "text-center", "p-4"], ["src", "https://i.pinimg.com/564x/47/89/37/478937760d6ee8218729f32b7255f070.jpg", "alt", "profile-picture", "id", "profile-picture", 1, "rounded-circle"], ["id", "name"], ["id", "container-buttons", 1, "d-flex", "justify-content-center"], ["id", "btn-add", 1, "profile-button", "d-flex", "align-items-center"], [1, "material-icons"], [1, "profile-button", "d-flex", "align-items-center"], ["id", "btn-add", 1, "tab-custom", "d-flex", "align-items-center", 3, "ngStyle", "click"], [1, "tab-custom", "d-flex", "align-items-center", 3, "ngStyle", "click"], ["id", "title"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Agregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Enviar Mensaje\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "question_answer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Editar\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_19_listener() { return ctx.setTabPosition(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Publicaciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_21_listener() { return ctx.setTabPosition(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " List de amigos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Mis publicaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.showFirstTab ? "2px solid #ed1f7f" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.showSecondTab ? "2px solid #ed1f7f" : ""));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _post_post_component__WEBPACK_IMPORTED_MODULE_3__["PostComponent"]], styles: ["#container-header-profile[_ngcontent-%COMP%]{\n    background-color: white;\n    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.125);\n    border-radius: 15px;\n}\n\n#profile-picture[_ngcontent-%COMP%]{\n    width: 200px;\n    height: 200px;\n    margin-bottom: 25px;\n}\n\n#name[_ngcontent-%COMP%]{\n    font-family: 'Arial Rounded MT';\n    font-size: 25px;\n    color: var(--blueG);\n}\n\n#container-buttons[_ngcontent-%COMP%]{\n    margin-top: 30px;\n}\n\n.profile-button[_ngcontent-%COMP%]{\n    background-color: transparent;\n    border: 1px solid var(--pinkG);\n    font-family: 'Arial Rounded MT';\n    border-radius: 100px;\n    color: var(--pinkG);\n    font-size: 15px;\n    padding: 10px;    \n}\n\n.profile-button[_ngcontent-%COMP%]:hover{\n    background-color: var(--pinkG);\n    color: white;\n}\n\n#btn-add[_ngcontent-%COMP%]{\n    margin-right: 10px;\n}\n\n#title[_ngcontent-%COMP%]{\n    margin-top: 30px;\n    margin-left: 5px;\n    font-family: 'Arial';\n    font-weight: bold;\n    color: var(--purpleG);\n    font-size: 20px;\n}\n\n.tab-custom[_ngcontent-%COMP%]{\n    background-color: transparent;\n    border: none;\n    font-family: 'Arial';\n    color: rgb(158, 158, 158);\n    font-size: 15px;\n    padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2Qiw2Q0FBNkM7SUFDN0MsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsYUFBYTtBQUNqQiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyLWhlYWRlci1wcm9maWxle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4jcHJvZmlsZS1waWN0dXJle1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbiNuYW1le1xuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwgUm91bmRlZCBNVCc7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGNvbG9yOiB2YXIoLS1ibHVlRyk7XG59XG5cbiNjb250YWluZXItYnV0dG9uc3tcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ucHJvZmlsZS1idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcGlua0cpO1xuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwgUm91bmRlZCBNVCc7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgY29sb3I6IHZhcigtLXBpbmtHKTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcGFkZGluZzogMTBweDsgICAgXG59XG5cbi5wcm9maWxlLWJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1waW5rRyk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jYnRuLWFkZHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbiN0aXRsZXtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHZhcigtLXB1cnBsZUcpO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnRhYi1jdXN0b217XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuICAgIGNvbG9yOiByZ2IoMTU4LCAxNTgsIDE1OCk7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59Il19 */"] });


/***/ }),

/***/ "E2xP":
/*!***************************************************************!*\
  !*** ./src/app/components/login-form/login-form.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function LoginFormComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " * Correo Invalido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginFormComponent_div_9_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "* La contrase\u00F1a es requerida.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginFormComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LoginFormComponent_div_9_p_1_Template, 2, 0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.f.password.errors.required);
} }
class LoginFormComponent {
    constructor(fb, router, authService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    get f() {
        return this.loginForm.controls;
    }
    setData() {
        this.dataLogin = {
            email: this.loginForm.get('email').value,
            password: this.loginForm.get('password').value
        };
    }
    olvidoContrasena() {
        this.modalCorreo();
    }
    modalCodigo(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { value: codigo } = yield sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Codigo de  Confirmacion',
                text: 'Ingrese el codigo de confirmacion',
                input: 'text',
                inputLabel: 'Codigo',
                inputPlaceholder: 'Codigo',
            });
            if (codigo) {
                this.authService.confirmarCodigo(codigo, email).subscribe(() => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        icon: 'success',
                        title: 'Cuenta verificada',
                        showConfirmButton: false,
                        timer: 1500,
                        didOpen: () => {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.showLoading();
                        },
                    }).then(() => {
                        this.router.navigate(['/forgot-password']);
                    });
                }, (error) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Error al verificar la cuenta',
                    });
                    console.log(error);
                });
            }
        });
    }
    modalCorreo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { value: email } = yield sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Olvidaste tu contraseña?',
                input: 'email',
                inputLabel: 'Ingrese su email',
                inputPlaceholder: 'email'
            });
            if (email) {
                yield this.authService.olvidoContrasena(email).subscribe((data) => {
                    this.modalCodigo(email);
                }, (error) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        title: 'Error',
                        text: 'Error al enviar el correo',
                        icon: 'error'
                    }).then(() => {
                        this.router.navigate(['/login']);
                    });
                });
            }
        });
    }
    reenviarCorreo() {
        /*     this.setData();
            this.authService.reenviarCorreo(this.dataLogin.email).subscribe(
              () => {
                Swal.fire({
                  title: 'Correo enviado',
                  text: 'Revisa tu correo',
                  icon: 'success',
                  confirmButtonText: 'Ok'
                })
              },
              () => {
                Swal.fire({
                  title: 'Error',
                  text: 'No se pudo enviar el correo',
                  icon: 'error',
                  confirmButtonText: 'Ok'
                })
              }
            ) */
        this.setData;
        console.log(this.dataLogin.email);
    }
    onSubmit(form) {
        if (form.invalid) {
            console.log('form is invalid');
            return Object.values(this.loginForm.controls).forEach(control => {
                control.markAsTouched();
            });
        }
        else {
            this.setData();
            this.authService.login(this.dataLogin).subscribe(() => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    icon: 'success',
                    title: 'Login Success',
                    showConfirmButton: false,
                    timer: 1500,
                    didOpen: () => {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.showLoading();
                    },
                }).then(() => {
                    this.router.navigate(['/']);
                });
            }, (error) => {
                if (error['status'] == 403) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        icon: 'error',
                        title: 'Ups!',
                        text: 'Cuenta sin verificar, por favor revise su correo',
                        footer: "<p>¿No ha recibido el correo? <a href='reenviar-email' style='color: #3E2669;font-family: Arial Rounded MT Bold;'>Reenviar</a></p>",
                    });
                }
                if (error['status'] == 400) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        icon: 'error',
                        title: 'Ups!',
                        text: 'Datos incorrectos',
                    });
                }
            });
        }
    }
}
LoginFormComponent.ɵfac = function LoginFormComponent_Factory(t) { return new (t || LoginFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
LoginFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginFormComponent, selectors: [["app-login-form"]], decls: 53, vars: 3, consts: [[1, "formulario"], [1, "titulo"], [3, "formGroup", "ngSubmit"], [1, "mb-4"], ["placeholder", "Email", "type", "email", "id", "email", "required", "", "formControlName", "email"], ["class", "invalid", 4, "ngIf"], ["type", "password", "id", "password", "placeholder", "Contrase\u00F1a", "formControlName", "password", "required", ""], [1, "d-grid", "gap-2"], ["type", "submit", "id", "btn_iniciar"], [1, "mt-3"], ["type", "button", "id", "Ocontra", 3, "click"], [1, "row", "bottom"], [1, "col"], ["id", "NTC"], ["routerLink", "/register", "id", "link-registrar"], [1, "col-2"], ["xmlns", "http://www.w3.org/2000/svg", "width", "174.498", "height", "39.062", "viewBox", "0 0 174.498 39.062", "id", "logo"], ["id", "Capa_2", "data-name", "Capa 2", "transform", "translate(0 0.131)"], ["id", "Capa_1", "data-name", "Capa 1", "transform", "translate(0 -0.131)"], ["id", "Trazado_189", "data-name", "Trazado 189", "d", "M34.528,63.012a.958.958,0,0,1-.556.047h-.047a.9.9,0,0,0,.125-.192,5.2,5.2,0,0,0-.145-4.19c-.7-1.815-1.909-3.087-2.946-3.247a1.213,1.213,0,0,1,.5-.368c1.1-.43,2.692,1.006,3.521,3.2S35.628,62.581,34.528,63.012Z", "transform", "translate(-18.847 -33.421)", "fill", "#3e2669"], ["id", "Trazado_190", "data-name", "Trazado 190", "d", "M52.442,38.29V50.172a9.39,9.39,0,0,1-2.962-5.767A6.317,6.317,0,0,1,52.442,38.29Z", "transform", "translate(-30.101 -23.258)", "fill", "#e71f76"], ["id", "Trazado_191", "data-name", "Trazado 191", "d", "M63.376,34.75V50.165a7.075,7.075,0,0,1-.986-.54V35.083C62.707,34.957,63.043,34.848,63.376,34.75Z", "transform", "translate(-37.98 -21.103)", "fill", "#e71f76"], ["id", "Trazado_192", "data-name", "Trazado 192", "d", "M71.992,49.953,71.8,50a9.238,9.238,0,0,1-5.54-.528V33.67A17.575,17.575,0,0,1,69,33.224a2.191,2.191,0,0,1,.43,0l.446.031h.7a10.654,10.654,0,0,1,4.19,5.415,11.347,11.347,0,0,1,.5,2.07.333.333,0,0,1,.031.16C75.72,44.5,74.731,48.052,71.992,49.953Z", "transform", "translate(-40.336 -20.167)", "fill", "#e71f76"], ["id", "Trazado_193", "data-name", "Trazado 193", "d", "M86.438,5.75A5.168,5.168,0,0,1,81.274.589a.669.669,0,1,0-1.334,0A5.168,5.168,0,0,1,74.779,5.75a.669.669,0,0,0,0,1.338,5.168,5.168,0,0,1,5.157,5.165.669.669,0,0,0,1.334,0,5.168,5.168,0,0,1,5.165-5.165.669.669,0,1,0,0-1.338Zm-2.868.669a6.565,6.565,0,0,0-2.962,2.966,6.573,6.573,0,0,0-2.966-2.966,6.585,6.585,0,0,0,2.966-2.977A6.577,6.577,0,0,0,83.57,6.419Z", "transform", "translate(-45.114 0.131)", "fill", "#3e2669"], ["id", "Elipse_49", "data-name", "Elipse 49", "cx", "2.653", "cy", "2.653", "r", "2.653", "transform", "translate(0 15.2)", "fill", "#3e2669"], ["id", "Trazado_194", "data-name", "Trazado 194", "d", "M38.665,75.13a1.1,1.1,0,0,1-.078.192H38.54A.9.9,0,0,0,38.665,75.13Z", "transform", "translate(-23.461 -45.684)", "fill", "#3e2669"], ["id", "Trazado_195", "data-name", "Trazado 195", "d", "M38.665,75.13a1.1,1.1,0,0,1-.078.192H38.54A.9.9,0,0,0,38.665,75.13Z", "transform", "translate(-23.461 -45.684)", "fill", "#3e2669"], ["id", "Trazado_196", "data-name", "Trazado 196", "d", "M30.6,65.506a.9.9,0,0,1-.462.047c-.732-.094-1.624-1-2.152-2.308a3.81,3.81,0,0,1-.192-3h0a.986.986,0,0,1,.466-.446c.783-.333,1.956.685,2.61,2.261S31.4,65.17,30.6,65.506Z", "transform", "translate(-16.785 -36.315)", "fill", "#e71f76"], ["id", "Trazado_197", "data-name", "Trazado 197", "d", "M90.529,83.79a.857.857,0,1,0-1.2-1.2l-.391.391a3.032,3.032,0,0,0-4.116,4.12l-.391.391a.857.857,0,1,0,1.174,1.2L86,88.3a3.032,3.032,0,0,0,4.151-4.128Zm-4.636.25a2.25,2.25,0,0,1,2.469-.477l-2.946,2.95a2.25,2.25,0,0,1,.477-2.473Zm3.189,3.193a2.261,2.261,0,0,1-2.473.477l2.95-2.95A2.258,2.258,0,0,1,89.081,87.233Z", "transform", "translate(-51.157 -50.013)", "fill", "#3e2669"], ["id", "Trazado_198", "data-name", "Trazado 198", "d", "M81.386,41.014a.332.332,0,0,0-.031-.16,11.347,11.347,0,0,0-.477-2.07,10.654,10.654,0,0,0-4.159-5.352h-.364a10.838,10.838,0,0,1,4.01,5.528,10.4,10.4,0,0,1,.477,2.136.423.423,0,0,1,.051.172,10.81,10.81,0,0,1-1.53,7.074,7.457,7.457,0,0,1-1.452,1.768l.192-.051C80.842,48.166,81.832,44.613,81.386,41.014ZM76.3,33.4Z", "transform", "translate(-46.447 -20.281)", "fill", "#3e2669"], ["id", "Trazado_199", "data-name", "Trazado 199", "d", "M48.677,31.993a15.874,15.874,0,0,0-.352-1.671c-.063-.192-.125-.368-.192-.544a11.542,11.542,0,0,0-1.287-2.8,14.054,14.054,0,0,0-1.275-1.753,8.114,8.114,0,0,0-.622-.653c-.43-2.132-5.8-5.571-6.291-5.571-.254,0-.732.892-1.146,1.737-.391-.063-.814-.129-1.225-.16a13.412,13.412,0,0,0-4.527.43,15.65,15.65,0,0,0-1.765.622c-1.174-.716-2.9-1.639-3.474-1.174-.783.638-2.085,5.032-2.371,6.037a13.166,13.166,0,0,0-1.784,10.9,12.414,12.414,0,0,0,.892,2.261h0a7.688,7.688,0,0,0,.391.7,4.081,4.081,0,0,0,.336.559,12.187,12.187,0,0,0,1.4,1.815,13.494,13.494,0,0,0,13.553,3.913,11.781,11.781,0,0,0,2.348-.876c.176-.078.348-.172.524-.27a10.643,10.643,0,0,0,1.706-1.1,7.711,7.711,0,0,0,.783-.6c.031,0,.047-.051.078-.067.192-.176.391-.364.575-.556a13.815,13.815,0,0,0,1.78-2.258,13.1,13.1,0,0,0,1.945-8.917ZM44.98,41.3l-.192.051c-.078.078-.172.141-.254.223a2.7,2.7,0,0,1-.333.286,9.68,9.68,0,0,1-2.007,1.174,4.582,4.582,0,0,1-1.006.43c-.094.031-.188.078-.3.113-.622.223-1.322.446-1.847.618l-.732.235a1.174,1.174,0,0,0-.274.067,5.524,5.524,0,0,1-.556.125l-.575.1a11.174,11.174,0,0,1-9.077-2.79.6.6,0,0,1-.145.082c-1.174.477-2.864-1.006-3.823-3.3s-.763-4.507.352-5.016a10.646,10.646,0,0,1,.207-1.913A10.087,10.087,0,0,1,25.758,28.3c.493-1.229,1.033-2.551,1.53-3.553a5.5,5.5,0,0,1,1.033-1.69c.25-.16.732-.031,1.244.29a6.96,6.96,0,0,1,.892.618,12.07,12.07,0,0,1,1.925-.716,2.394,2.394,0,0,1,.321-.078,11.135,11.135,0,0,1,2.977-.509h.493c.254,0,.493.031.747.031h.274a13.741,13.741,0,0,1,1.733.254c.031-.047.067-.078.1-.129.286-.493.6-.939.783-.939a8.712,8.712,0,0,1,3.345,2.136,2.015,2.015,0,0,1,.415.618h.047a10.654,10.654,0,0,1,4.139,5.384,11.346,11.346,0,0,1,.5,2.07.333.333,0,0,1,.031.16C48.709,35.847,47.719,39.4,44.98,41.3Z", "transform", "translate(-13.324 -11.515)", "fill", "#3e2669"], ["id", "GALASPACE", "transform", "translate(42.498 29.137)", "fill", "#3e2669", "font-size", "23", "font-family", "ArialRoundedMTBold, Arial Rounded MT Bold", "letter-spacing", "-0.07em"], ["x", "0", "y", "0"], ["y", "0", "letter-spacing", "-0.03em"], ["y", "0", "letter-spacing", "-0.05em"], ["y", "0", "letter-spacing", "-0.12em"], ["y", "0", "letter-spacing", "-0.06em"], ["y", "0", "letter-spacing", "-0.04em"], [1, "invalid"], [4, "ngIf"]], template: function LoginFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Inicie Sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginFormComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(ctx.loginForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, LoginFormComponent_p_6_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, LoginFormComponent_div_9_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Iniciar Sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginFormComponent_Template_a_click_14_listener() { return ctx.olvidoContrasena(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\u00BFOlvidaste tu contrase\u00F1a?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "\u00BFNo tienes una cuenta? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Registrate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "g", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "circle", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "text", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "tspan", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "G");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "tspan", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "tspan", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "tspan", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "AS");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "tspan", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "tspan", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "tspan", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "CE");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginForm.get("email").invalid && (ctx.loginForm.get("email").dirty || ctx.loginForm.get("email").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.password.touched && ctx.f.password.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".titulo[_ngcontent-%COMP%]{\n  font-family: Arial Rounded MT Bold;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 3rem;\n  line-height: 58px;\n  text-align: left;\n  color: #452F75;\n  margin-bottom: 40px;\n}\n\n.formulario[_ngcontent-%COMP%]{\n  text-align: center;\n  width: 500px;\n  height: 300px;\n}\n\n#Ocontra[_ngcontent-%COMP%]{\n  color: #3E2669;\n  font-family: Arial;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 1.1  rem;\n}\n\nmat-form-field[_ngcontent-%COMP%]{\n  width: 100%;\n}\n\n#email[_ngcontent-%COMP%], #password[_ngcontent-%COMP%]{\n  border-style: solid;\n  width: 100%;\n  border-color: #5C4E9A;\n  border-radius: 30px;\n  height: 50px;\n  border-width: 2px;\n  margin-top: 10px;\n  text-indent: 15px;\n}\n\n#email[_ngcontent-%COMP%]:focus, #password[_ngcontent-%COMP%]:focus{\n  outline: none;\n}\n\n#email[_ngcontent-%COMP%]::placeholder, #password[_ngcontent-%COMP%]::placeholder{\n  color: #5C4E9A;\n  opacity: 0.5;\n}\n\n#btn_iniciar[_ngcontent-%COMP%]{\n  border-color: #3E2669;\n  border-width: 2px;\n  background-color: transparent;\n  color: #3E2669;\n  border-radius: 30px;\n  height: 50px;\n  font-family: Arial Rounded MT Bold;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n}\n\n#btn_iniciar[_ngcontent-%COMP%]:focus{\n  outline: none;\n}\n\n#btn_iniciar[_ngcontent-%COMP%]:hover{\n  background-color: #3E2669;\n  color: white;\n}\n\n.bottom[_ngcontent-%COMP%]{\n  position: absolute;\n  bottom: 30px;\n}\n\n#NTC[_ngcontent-%COMP%]{\n  font-size: 15px;\n  font-family: Arial;\n  font-style: normal;\n  font-weight: normal;\n  display: inline-block;\n  margin-right: 5px;\n}\n\n#link-registrar[_ngcontent-%COMP%]{\n  font-size: 15px;\n  font-family: Arial Rounded MT Bold;\n  font-style: normal;\n  font-weight: normal;\n  color: #3E2669;\n}\n\n.invalid[_ngcontent-%COMP%]{\n  text-align: left;\n  font-family: Arial Rounded MT Bold;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 00.9rem;\n  color: darkred;\n}\n\n#logo[_ngcontent-%COMP%]{\n  width: 160px;\n  height: 20px;\n}\n\n@media (max-width: 768px) {\n  .formulario[_ngcontent-%COMP%]{\n    width: 100%;\n  }\n  #logo[_ngcontent-%COMP%]{\n    display: none;\n  }\n  .bottom[_ngcontent-%COMP%]{\n    position: absolute;\n    bottom: 0px;\n    width: 100%;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFHQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUNBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoibG9naW4tZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdHVsb3tcbiAgZm9udC1mYW1pbHk6IEFyaWFsIFJvdW5kZWQgTVQgQm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDNyZW07XG4gIGxpbmUtaGVpZ2h0OiA1OHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzQ1MkY3NTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLmZvcm11bGFyaW97XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuI09jb250cmF7XG4gIGNvbG9yOiAjM0UyNjY5O1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxLjEgIHJlbTtcbn1cbm1hdC1mb3JtLWZpZWxke1xuICB3aWR0aDogMTAwJTtcbn1cblxuI2VtYWlsLCAjcGFzc3dvcmR7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sb3I6ICM1QzRFOUE7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHRleHQtaW5kZW50OiAxNXB4O1xufVxuI2VtYWlsOmZvY3VzLCAjcGFzc3dvcmQ6Zm9jdXN7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4jZW1haWw6OnBsYWNlaG9sZGVyLCNwYXNzd29yZDo6cGxhY2Vob2xkZXJ7XG4gIGNvbG9yOiAjNUM0RTlBO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cblxuI2J0bl9pbmljaWFye1xuICBib3JkZXItY29sb3I6ICMzRTI2Njk7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMzRTI2Njk7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsIFJvdW5kZWQgTVQgQm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4jYnRuX2luaWNpYXI6Zm9jdXN7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4jYnRuX2luaWNpYXI6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRTI2Njk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5ib3R0b217XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAzMHB4O1xufVxuI05UQ3tcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbiNsaW5rLXJlZ2lzdHJhcntcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogQXJpYWwgUm91bmRlZCBNVCBCb2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjM0UyNjY5O1xufVxuLmludmFsaWR7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCBSb3VuZGVkIE1UIEJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAwMC45cmVtO1xuICBjb2xvcjogZGFya3JlZDtcbn1cbiNsb2dve1xuICB3aWR0aDogMTYwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZm9ybXVsYXJpb3tcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAjbG9nb3tcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5ib3R0b217XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG4iXX0= */"] });


/***/ }),

/***/ "ENZJ":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class PostService {
    constructor(http) {
        this.http = http;
        this.apiURL = "https://galaspace-default-rtdb.firebaseio.com";
        this.storageURL = "https://api.cloudinary.com/v1_1/djldaixtk/image/upload?upload_preset=pcuhg6au";
        this.posts = [];
        this.addPosts = [
            {
                picture_profile: "https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg",
                name: "Name of contact",
                comments_quantity: 10,
                content: ``,
                picture_post: "https://cdn2.vogue.es/uploads/images/thumbs/es/vog/2/s/2020/23/billie_eilish_3285_620x.jpg"
            },
            {
                picture_profile: "https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg",
                name: "Name of contact",
                comments_quantity: 10,
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus ex sed libero sodales, ac mattis quam sodales. Ut fringilla mollis risus, vel ultrices libero pulvinar quis. Cras libero tellus, tempor sed laoreet ut, sodales sagittis mi. Suspendisse viverra, mi eu egestas sodales, mauris lectus tempus lacus, id auctor sapien tortor vitae tortor. Nunc vestibulum, lorem ac congue luctus, elit sem malesuada neque, at sodales mi magna quis leo. Nam fringilla eget augue sed venenatis. Aenean maximus feugiat lectus eu pulvinar. Phasellus in semper mi, et volutpat nisi. Quisque at fermentum nisi, congue fringilla magna. Curabitur convallis sapien sit amet mauris ornare eleifend. Cras tristique mollis massa id fringilla. Integer vestibulum a nunc ac egestas. Sed cursus neque metus, vitae interdum libero feugiat vitae. Nullam feugiat id ipsum id sollicitudin.`,
                picture_post: "https://indiehoy.com/wp-content/uploads/2020/09/the-killers.jpg"
            },
            {
                picture_profile: "https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg",
                name: "Name of contact",
                comments_quantity: 10,
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus ex sed libero sodales, ac mattis quam sodales. Ut fringilla mollis risus, vel ultrices libero pulvinar quis. Cras libero tellus, tempor sed laoreet ut, sodales sagittis mi. Suspendisse viverra, mi eu egestas sodales, mauris lectus tempus lacus, id auctor sapien tortor vitae tortor. Nunc vestibulum, lorem ac congue luctus, elit sem malesuada neque, at sodales mi magna quis leo. Nam fringilla eget augue sed venenatis. Aenean maximus feugiat lectus eu pulvinar. Phasellus in semper mi, et volutpat nisi. Quisque at fermentum nisi, congue fringilla magna. Curabitur convallis sapien sit amet mauris ornare eleifend. Cras tristique mollis massa id fringilla. Integer vestibulum a nunc ac egestas. Sed cursus neque metus, vitae interdum libero feugiat vitae. Nullam feugiat id ipsum id sollicitudin.`,
                picture_post: "https://imagenes.expreso.ec/files/image_700_402/uploads/2021/07/15/60f0cd27c5091.png"
            },
            {
                picture_profile: "https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg",
                name: "Name of contact",
                comments_quantity: 10,
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus ex sed libero sodales, ac mattis quam sodales. Ut fringilla mollis risus, vel ultrices libero pulvinar quis. Cras libero tellus, tempor sed laoreet ut, sodales sagittis mi. Suspendisse viverra, mi eu egestas sodales, mauris lectus tempus lacus, id auctor sapien tortor vitae tortor. Nunc vestibulum, lorem ac congue luctus, elit sem malesuada neque, at sodales mi magna quis leo. Nam fringilla eget augue sed venenatis. Aenean maximus feugiat lectus eu pulvinar. Phasellus in semper mi, et volutpat nisi. Quisque at fermentum nisi, congue fringilla magna. Curabitur convallis sapien sit amet mauris ornare eleifend. Cras tristique mollis massa id fringilla. Integer vestibulum a nunc ac egestas. Sed cursus neque metus, vitae interdum libero feugiat vitae. Nullam feugiat id ipsum id sollicitudin.`,
                picture_post: "https://img.discogs.com/2VhESVhgOGm3e6G5YQIeXg6txsw=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-82730-1419714988-9675.jpeg.jpg"
            },
        ];
    }
    createPost(postForm) {
        return this.http.post(`${this.apiURL}/posts.json`, postForm);
    }
    //Aditional Methods
    uploadImage(fileForm) {
        return this.http.post(`${this.storageURL}`, fileForm);
    }
    setPost(post) {
        this.posts.push(post);
    }
    getPosts() {
        this.http.get(`${this.apiURL}/posts.json`).subscribe((res) => {
            let keys = Object.keys(res);
            keys.forEach((_, i) => {
                let postTmp = res[keys[i]];
                this.posts.push(postTmp);
            });
        });
        return this.posts;
    }
    addMorePost() {
        this.addPosts.forEach((value) => {
            this.posts.push(value);
        });
    }
}
PostService.ɵfac = function PostService_Factory(t) { return new (t || PostService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostService, factory: PostService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "MXpY":
/*!***********************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function ContactsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name of contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [0, 1, 2, 3, 5, 6, 7, 8, 9, 10]; };
class ContactsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(); };
ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], decls: 2, vars: 2, consts: [["id", "container-contacts", 1, "p-2"], ["class", "d-flex align-items-center", "id", "item-contact", 4, "ngFor", "ngForOf"], ["id", "item-contact", 1, "d-flex", "align-items-center"], ["src", "https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg", "alt", "profile-picture-contact", "id", "profile-picture-contact"], ["id", "contact-name"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactsComponent_div_1_Template, 4, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["#container-contacts[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    border-radius: 15px;\r\n    height: 70vh;    \r\n    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.125);\r\n    overflow-y: scroll;\r\n}\r\n\r\n#item-contact[_ngcontent-%COMP%]{\r\n    padding: 15px;\r\n}\r\n\r\n#item-contact[_ngcontent-%COMP%]:hover{\r\n    background-color: rgb(235, 235, 235);\r\n    cursor: pointer;\r\n    border-radius: 15px;\r\n    \r\n}\r\n\r\n#profile-picture-contact[_ngcontent-%COMP%]{\r\n    width: 60px;\r\n    height: 60px;\r\n    border-radius: 100%;\r\n    margin-right: 15px;\r\n}\r\n\r\n#contact-name[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n    font-family: 'Arial';\r\n    color: gray;\r\n    font-size: 16.5px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 7.5px;\r\n  }\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    box-shadow: inset 0 0 10px rgb(216, 216, 216);\r\n    border-radius: 50px;\r\n  }\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: #97979777;\r\n    border-radius: 50px;\r\n  }\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: var(--blueG);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiw2Q0FBNkM7SUFDN0Msa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsbUJBQW1COztBQUV2Qjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFHQSxrQkFBa0I7O0FBQ2xCLFVBQVU7O0FBQ1Y7SUFDSSxZQUFZO0VBQ2Q7O0FBRUEsVUFBVTs7QUFDVjtJQUNFLDZDQUE2QztJQUM3QyxtQkFBbUI7RUFDckI7O0FBRUEsV0FBVzs7QUFDWDtJQUNFLHFCQUFxQjtJQUNyQixtQkFBbUI7RUFDckI7O0FBRUEsb0JBQW9COztBQUNwQjtJQUNFLHdCQUF3QjtFQUMxQiIsImZpbGUiOiJjb250YWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lci1jb250YWN0c3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGhlaWdodDogNzB2aDsgICAgXHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbiNpdGVtLWNvbnRhY3R7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4jaXRlbS1jb250YWN0OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIFxyXG59XHJcbiNwcm9maWxlLXBpY3R1cmUtY29udGFjdHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG4jY29udGFjdC1uYW1le1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBmb250LXNpemU6IDE2LjVweDtcclxufVxyXG5cclxuXHJcbi8qIEN1c3RvbSBzY3JvbGwgKi9cclxuLyogd2lkdGggKi9cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNy41cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRyYWNrICovXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCByZ2IoMjE2LCAyMTYsIDIxNik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBIYW5kbGUgKi9cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICM5Nzk3OTc3NztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZUcpO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "RZmA":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function SearchComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_span_6_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.deleteSearchContent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " group_add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Encuentra m\u00E1s personas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name of contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]; };
function SearchComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchComponent_div_8_div_1_Template, 4, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
class SearchComponent {
    constructor(fb) {
        this.fb = fb;
        this.searchForm = this.fb.group({
            searchPerson: [''],
        });
        this.showResults = false;
        this.showDeleteButton = false;
    }
    ngOnInit() { }
    ngDoCheck() {
        if (this.searchForm.get('searchPerson').value.length > 0) {
            this.showResults = true;
            this.showDeleteButton = true;
        }
        if (this.searchForm.get('searchPerson').value.length == 0) {
            this.showResults = false;
            this.showDeleteButton = false;
        }
    }
    deleteSearchContent() {
        this.searchForm.patchValue({
            searchPerson: '',
        });
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 9, vars: 4, consts: [["id", "container-search", 1, "p-4"], [1, "d-flex", 3, "formGroup"], ["id", "container-input-search", 1, "d-flex", "justify-content-center", "align-items-center"], ["id", "icon-search", 1, "material-icons"], ["type", "text", "name", "input-search", "placeholder", "Escribe...", "formControlName", "searchPerson", "id", "input-search"], ["class", "material-icons", "id", "icon-delete", 3, "click", 4, "ngIf"], ["class", "d-flex justify-content-center align-items-center", "id", "container-non-search", 4, "ngIf"], ["id", "container-results", 4, "ngIf"], ["id", "icon-delete", 1, "material-icons", 3, "click"], ["id", "container-non-search", 1, "d-flex", "justify-content-center", "align-items-center"], [1, "text-center"], ["id", "icon-add-group", 1, "material-icons"], ["id", "label"], ["id", "container-results"], ["class", "d-flex align-items-center", "id", "result-item", 4, "ngFor", "ngForOf"], ["id", "result-item", 1, "d-flex", "align-items-center"], ["src", "https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg", "alt", "profile-picture-result", "id", "profile-picture-result"], ["id", "result-name"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SearchComponent_span_6_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SearchComponent_div_7_Template, 6, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SearchComponent_div_8_Template, 2, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDeleteButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showResults);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showResults);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["#container-search[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.125);\r\n    border-radius: 15px;\r\n    height: 70vh;\r\n}\r\n\r\n#container-non-search[_ngcontent-%COMP%]{\r\n    height: 350px;\r\n   \r\n}\r\n\r\n#container-input-search[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    border: none;\r\n    border-radius: 100px;\r\n    background-color: rgb(218, 218, 218);\r\n    color: rgb(59, 59, 59);\r\n    font-family: 'Arial';\r\n    margin-right: 10px;\r\n    padding: 10px;\r\n}\r\n\r\n#input-search[_ngcontent-%COMP%]{\r\n    background-color: transparent;\r\n    border: none;\r\n}\r\n\r\n#input-search[_ngcontent-%COMP%]:focus{\r\n    outline: none;\r\n}\r\n\r\n#icon-search[_ngcontent-%COMP%]{\r\n    background-color: transparent;\r\n    border: none;\r\n    color: rgb(95, 95, 95);\r\n}\r\n\r\n#icon-delete[_ngcontent-%COMP%]{\r\n    background-color: transparent;\r\n    border: none;\r\n    color: rgb(128, 128, 128);\r\n    cursor: pointer;\r\n    font-size: 21.5px;\r\n}\r\n\r\n#cancel-button[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    top: 2.5px;\r\n    background-color: transparent;\r\n    border: none;\r\n}\r\n\r\n#btn-search[_ngcontent-%COMP%]{\r\n    width: 20%;\r\n    border: 1px solid rgb(59, 59, 59);\r\n    background-color: transparent;\r\n    border-radius: 100%;\r\n    width: 50px;\r\n    height: 50px;\r\n    padding-top: 10px;\r\n}\r\n\r\n#btn-search[_ngcontent-%COMP%]:hover{\r\n    background-color: rgb(59, 59, 59);\r\n    color: white;\r\n}\r\n\r\n#container-results[_ngcontent-%COMP%]{\r\n    height: 350px;\r\n}\r\n\r\n#icon-add-group[_ngcontent-%COMP%]{\r\n    font-size: 45px;\r\n    color: rgb(201, 201, 201);\r\n}\r\n\r\n#label[_ngcontent-%COMP%]{\r\n    font-size: 17.5px;\r\n    font-family: 'Arial';\r\n    color: rgb(201, 201, 201);\r\n}\r\n\r\n#container-results[_ngcontent-%COMP%]{\r\n    margin-top: 15px;\r\n    overflow-y: scroll;\r\n    height: 85%;\r\n}\r\n\r\n#result-item[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 50px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    padding-left: 5px;\r\n}\r\n\r\n#result-item[_ngcontent-%COMP%]:hover{\r\n    background-color: rgb(235, 235, 235);\r\n    cursor: pointer;\r\n    border-radius: 15px;\r\n    \r\n}\r\n\r\n#profile-picture-result[_ngcontent-%COMP%]{\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 100%;\r\n    margin-right: 15px;\r\n}\r\n\r\n#result-name[_ngcontent-%COMP%]{\r\n    margin-top: 7.5px;\r\n    font-family: 'Arial';\r\n    color: gray;\r\n    font-size: 16.5px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 7.5px;\r\n  }\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    box-shadow: inset 0 0 10px rgb(216, 216, 216);\r\n    border-radius: 50px;\r\n  }\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: #97979777;\r\n    border-radius: 50px;\r\n  }\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: var(--blueG);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDZDQUE2QztJQUM3QyxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7O0FBRWpCOztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsb0NBQW9DO0lBQ3BDLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlDQUFpQztJQUNqQyw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBSUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUdBO0lBQ0ksb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUdBLGtCQUFrQjs7QUFDbEIsVUFBVTs7QUFDVjtJQUNJLFlBQVk7RUFDZDs7QUFFQSxVQUFVOztBQUNWO0lBQ0UsNkNBQTZDO0lBQzdDLG1CQUFtQjtFQUNyQjs7QUFFQSxXQUFXOztBQUNYO0lBQ0UscUJBQXFCO0lBQ3JCLG1CQUFtQjtFQUNyQjs7QUFFQSxvQkFBb0I7O0FBQ3BCO0lBQ0Usd0JBQXdCO0VBQzFCIiwiZmlsZSI6InNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lci1zZWFyY2h7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbn1cclxuXHJcbiNjb250YWluZXItbm9uLXNlYXJjaHtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgIFxyXG59XHJcbiNjb250YWluZXItaW5wdXQtc2VhcmNoe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDIxOCwgMjE4KTtcclxuICAgIGNvbG9yOiByZ2IoNTksIDU5LCA1OSk7XHJcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJztcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbiNpbnB1dC1zZWFyY2h7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuI2lucHV0LXNlYXJjaDpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbiNpY29uLXNlYXJjaHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHJnYig5NSwgOTUsIDk1KTtcclxufVxyXG5cclxuI2ljb24tZGVsZXRle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogcmdiKDEyOCwgMTI4LCAxMjgpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAyMS41cHg7XHJcbn1cclxuXHJcbiNjYW5jZWwtYnV0dG9ue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAyLjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4jYnRuLXNlYXJjaHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNTksIDU5LCA1OSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbiNidG4tc2VhcmNoOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU5LCA1OSwgNTkpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiNjb250YWluZXItcmVzdWx0c3tcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbn1cclxuI2ljb24tYWRkLWdyb3Vwe1xyXG4gICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgY29sb3I6IHJnYigyMDEsIDIwMSwgMjAxKTtcclxufVxyXG4jbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE3LjVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xyXG4gICAgY29sb3I6IHJnYigyMDEsIDIwMSwgMjAxKTtcclxufVxyXG5cclxuI2NvbnRhaW5lci1yZXN1bHRze1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGhlaWdodDogODUlO1xyXG59XHJcblxyXG5cclxuXHJcbiNyZXN1bHQtaXRlbXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5cclxuXHJcbiNyZXN1bHQtaXRlbTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBcclxufVxyXG5cclxuI3Byb2ZpbGUtcGljdHVyZS1yZXN1bHR7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuI3Jlc3VsdC1uYW1le1xyXG4gICAgbWFyZ2luLXRvcDogNy41cHg7XHJcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJztcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgZm9udC1zaXplOiAxNi41cHg7XHJcbn1cclxuXHJcblxyXG4vKiBDdXN0b20gc2Nyb2xsICovXHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDcuNXB4O1xyXG4gIH1cclxuICBcclxuICAvKiBUcmFjayAqL1xyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggcmdiKDIxNiwgMjE2LCAyMTYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogSGFuZGxlICovXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTc5Nzk3Nzc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsdWVHKTtcclxuICB9Il19 */"] });


/***/ }),

/***/ "S0Dq":
/*!*********************************************************************!*\
  !*** ./src/app/components/register-form/register-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormComponent", function() { return RegisterFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function RegisterFormComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " * Campo requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterFormComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " * Correo Invalido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterFormComponent_div_12_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "* La contrase\u00F1a es requerida.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterFormComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterFormComponent_div_12_p_1_Template, 2, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.f.password.errors.required);
} }
function RegisterFormComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " * Las contrase\u00F1as no coinciden. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class RegisterFormComponent {
    constructor(fb, router, authService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        this.registerForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password_confirmation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        }, { validators: this.checkPasswords });
    }
    get f() {
        return this.registerForm.controls;
    }
    onSubmit(form) {
        if (form.invalid) {
            return Object.values(this.registerForm.controls).forEach(control => {
                control.markAsTouched();
            });
        }
        else {
            this.authService.signUp(this.registerForm.value).subscribe((res) => {
                if (res.status === true) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                        icon: 'success',
                        title: 'Listo!',
                        text: 'Se te ha enviado un correo para confirmar tu cuenta.',
                        footer: '<p>¿No has recibido el correo? <a href="" style="color: #3E2669;font-family: Arial Rounded MT Bold;">Reenviar</a><p>'
                    }).then(() => {
                        this.router.navigate(['/login']);
                    });
                }
            }, (err) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salió mal, intenta de nuevo',
                });
            });
            console.log(this.registerForm.value);
        }
    }
    checkPasswords(group) {
        const pass = group.get('password').value;
        const confirmPass = group.get('password_confirmation').value;
        return pass === confirmPass ? null : { notSame: true };
    }
}
RegisterFormComponent.ɵfac = function RegisterFormComponent_Factory(t) { return new (t || RegisterFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
RegisterFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegisterFormComponent, selectors: [["app-register-form"]], decls: 31, vars: 5, consts: [[1, "formulario"], [1, "titulo"], [3, "formGroup", "ngSubmit"], [1, "mb-4"], ["placeholder", "Nombre", "type", "text", "id", "nombre", "formControlName", "name", "required", ""], ["class", "invalid", 4, "ngIf"], ["placeholder", "Email", "type", "email", "id", "email", "formControlName", "email", "required", ""], ["type", "password", "id", "password", "placeholder", "Contrase\u00F1a", "formControlName", "password", "required", ""], ["type", "password", "id", "password2", "placeholder", "Confirma Contrase\u00F1a", "formControlName", "password_confirmation", "required", ""], ["id", "terminos"], ["href", "", "id", "link-terminos"], [1, "d-grid", "gap-2"], ["type", "submit", "id", "btn_iniciar"], [1, "mt-3"], [1, "link-login"], ["routerLink", "/login", "id", "link-login"], [1, "invalid"], [4, "ngIf"]], template: function RegisterFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Registro");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegisterFormComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(ctx.registerForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, RegisterFormComponent_p_6_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, RegisterFormComponent_p_9_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, RegisterFormComponent_div_12_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, RegisterFormComponent_p_15_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Al registrarte aceptas nuestros ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "t\u00E9rminos y ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " condiciones de privacidad.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Registrarse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " \u00BFYa tienes una cuenta? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Inicia Sesion");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.registerForm.get("name").invalid && (ctx.registerForm.get("name").dirty || ctx.registerForm.get("name").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.registerForm.get("email").invalid && (ctx.registerForm.get("email").dirty || ctx.registerForm.get("email").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.password.touched && ctx.f.password.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.registerForm.hasError("notSame"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".titulo[_ngcontent-%COMP%]{\n  font-family: Arial Rounded MT Bold;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 3rem;\n  line-height: 58px;\n  text-align: left;\n  color: #452F75;\n  margin-bottom: 40px;\n}\n.invalid[_ngcontent-%COMP%]{\n  text-align: left;\n  font-family: Arial Rounded MT Bold;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 00.9rem;\n  color: darkred;\n}\n.formulario[_ngcontent-%COMP%]{\n  text-align: center;\n  width: 500px;\n  height: 300px;\n}\n#terminos[_ngcontent-%COMP%], #link-terminos[_ngcontent-%COMP%]{\n  color: #3E2669;\n  text-align: left;\n  font-family: Arial;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 0.9  rem;\n}\n#link-login[_ngcontent-%COMP%]{\n  font-family: Arial Rounded MT Bold;\n  font-style: normal;\n  font-weight: normal;\n  color: #452F75;\n}\n#terminos[_ngcontent-%COMP%]{\n  margin-left: 7px;\n}\n.link-login[_ngcontent-%COMP%]{\n  color: #3E2669;\n  font-family: Arial;\n  font-weight: normal;\n  font-size: 0.9rem;\n}\n#email[_ngcontent-%COMP%], #password[_ngcontent-%COMP%], #password2[_ngcontent-%COMP%], #nombre[_ngcontent-%COMP%]{\n  width: 100%;\n  border-color: #5C4E9A;\n  border-radius: 30px;\n  height: 50px;\n  border-width: 2px;\n  margin-top: 10px;\n  border-style: solid;\n  text-indent: 15px;\n}\n#email[_ngcontent-%COMP%]:focus, #password[_ngcontent-%COMP%]:focus, #password2[_ngcontent-%COMP%]:focus, #nombre[_ngcontent-%COMP%]:focus{\n  outline: none;\n}\n#email[_ngcontent-%COMP%]::placeholder, #password[_ngcontent-%COMP%]::placeholder, #password2[_ngcontent-%COMP%]::placeholder, #nombre[_ngcontent-%COMP%]::placeholder{\n  color: #5C4E9A;\n  opacity: 0.5;\n\n}\n#btn_iniciar[_ngcontent-%COMP%]{\n  border-color: #3E2669;\n  border-width: 2px;\n  background-color: transparent;\n  color: #3E2669;\n  border-radius: 30px;\n  height: 50px;\n  font-family: Arial Rounded MT Bold;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n}\n#btn_iniciar[_ngcontent-%COMP%]:focus{\n  outline: none !important;\n}\n#btn_iniciar[_ngcontent-%COMP%]:hover{\n  background-color: #3E2669;\n  color: white;\n}\n.bottom[_ngcontent-%COMP%]{\n  position: absolute;\n  bottom: 30px;\n}\n#NTC[_ngcontent-%COMP%]{\n  font-size: 15px;\n  font-family: Arial;\n  font-style: normal;\n  font-weight: normal;\n  display: inline-block;\n  margin-right: 5px;\n}\n#link-registrar[_ngcontent-%COMP%]{\n  font-size: 15px;\n  font-family: Arial Rounded MT Bold;\n  font-style: normal;\n  font-weight: normal;\n  color: #3E2669;\n}\n#logo[_ngcontent-%COMP%]{\n  width: 160px;\n  height: 20px;\n}\n@media (max-width: 768px) {\n  .formulario[_ngcontent-%COMP%]{\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTs7QUFFZDtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoicmVnaXN0ZXItZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdHVsb3tcbiAgZm9udC1mYW1pbHk6IEFyaWFsIFJvdW5kZWQgTVQgQm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDNyZW07XG4gIGxpbmUtaGVpZ2h0OiA1OHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzQ1MkY3NTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5pbnZhbGlke1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogQXJpYWwgUm91bmRlZCBNVCBCb2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMDAuOXJlbTtcbiAgY29sb3I6IGRhcmtyZWQ7XG59XG5cbi5mb3JtdWxhcmlve1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cbiN0ZXJtaW5vcywgI2xpbmstdGVybWlub3N7XG4gIGNvbG9yOiAjM0UyNjY5O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAwLjkgIHJlbTtcbn1cbiNsaW5rLWxvZ2lue1xuICBmb250LWZhbWlseTogQXJpYWwgUm91bmRlZCBNVCBCb2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjNDUyRjc1O1xufVxuI3Rlcm1pbm9ze1xuICBtYXJnaW4tbGVmdDogN3B4O1xufVxuLmxpbmstbG9naW57XG4gIGNvbG9yOiAjM0UyNjY5O1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4jZW1haWwsICNwYXNzd29yZCwgI3Bhc3N3b3JkMiwgI25vbWJyZXtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xvcjogIzVDNEU5QTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgdGV4dC1pbmRlbnQ6IDE1cHg7XG59XG4jZW1haWw6Zm9jdXMsICNwYXNzd29yZDpmb2N1cywgI3Bhc3N3b3JkMjpmb2N1cywgI25vbWJyZTpmb2N1c3tcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuI2VtYWlsOjpwbGFjZWhvbGRlciwjcGFzc3dvcmQ6OnBsYWNlaG9sZGVyLCNwYXNzd29yZDI6OnBsYWNlaG9sZGVyLCNub21icmU6OnBsYWNlaG9sZGVye1xuICBjb2xvcjogIzVDNEU5QTtcbiAgb3BhY2l0eTogMC41O1xuXG59XG4jYnRuX2luaWNpYXJ7XG4gIGJvcmRlci1jb2xvcjogIzNFMjY2OTtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzNFMjY2OTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LWZhbWlseTogQXJpYWwgUm91bmRlZCBNVCBCb2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbiNidG5faW5pY2lhcjpmb2N1c3tcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuI2J0bl9pbmljaWFyOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0UyNjY5O1xuICBjb2xvcjogd2hpdGU7XG59XG4uYm90dG9te1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMzBweDtcbn1cbiNOVEN7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4jbGluay1yZWdpc3RyYXJ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsIFJvdW5kZWQgTVQgQm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzNFMjY2OTtcbn1cbiNsb2dve1xuICB3aWR0aDogMTYwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZm9ybXVsYXJpb3tcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'galaspace-front';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 224, vars: 0, consts: [[1, "wrapper-morado"], ["id", "Capa_2", "data-name", "Capa 2", "xmlns", "http://www.w3.org/2000/svg", "width", "269.555", "height", "79.46", "viewBox", "0 0 269.555 79.46"], ["id", "Capa_1", "data-name", "Capa 1"], ["id", "Trazado_178", "data-name", "Trazado 178", "d", "M38.219,71.313a1.95,1.95,0,0,1-1.13.1h-.1a1.831,1.831,0,0,0,.255-.39c1.066-1.751,1.035-5.054-.294-8.524-1.425-3.693-3.884-6.28-5.993-6.606a2.467,2.467,0,0,1,1.011-.748c2.228-.875,5.476,2.045,7.163,6.51S40.455,70.437,38.219,71.313Z", "transform", "translate(-6.319 -11.119)", "fill", "#fff"], ["id", "Trazado_179", "data-name", "Trazado 179", "d", "M55.538,38.29V62.461A19.1,19.1,0,0,1,49.513,50.73,12.85,12.85,0,0,1,55.538,38.29Z", "transform", "translate(-10.093 -7.711)", "fill", "#fff"], ["id", "Trazado_180", "data-name", "Trazado 180", "d", "M64.4,34.75V66.108a14.39,14.39,0,0,1-2.006-1.1V35.427C63.035,35.172,63.719,34.949,64.4,34.75Z", "transform", "translate(-12.734 -6.989)", "fill", "#fff"], ["id", "Trazado_181", "data-name", "Trazado 181", "d", "M77.92,67.267l-.39.1A18.791,18.791,0,0,1,66.26,66.3V34.142a35.751,35.751,0,0,1,5.571-.907,4.457,4.457,0,0,1,.875,0l.907.064h1.425a21.672,21.672,0,0,1,8.524,11.015,23.081,23.081,0,0,1,1.011,4.21.677.677,0,0,1,.064.326C85.5,56.172,83.491,63.4,77.92,67.267Z", "transform", "translate(-13.524 -6.675)", "fill", "#fff"], ["id", "Trazado_182", "data-name", "Trazado 182", "d", "M99.189,11.832a10.514,10.514,0,0,1-10.506-10.5,1.361,1.361,0,1,0-2.714,0,10.514,10.514,0,0,1-10.5,10.5,1.361,1.361,0,0,0,0,2.722A10.514,10.514,0,0,1,85.961,25.06a1.361,1.361,0,0,0,2.714,0A10.514,10.514,0,0,1,99.181,14.554a1.361,1.361,0,1,0,0-2.722Zm-5.834,1.361a13.355,13.355,0,0,0-6.025,6.033A13.371,13.371,0,0,0,81.3,13.193,13.4,13.4,0,0,0,87.33,7.136a13.379,13.379,0,0,0,6.025,6.057Z", "transform", "translate(-15.126 0.131)", "fill", "#fff"], ["id", "Elipse_48", "data-name", "Elipse 48", "cx", "5.396", "cy", "5.396", "r", "5.396", "transform", "translate(0 30.921)", "fill", "#fff"], ["id", "Trazado_183", "data-name", "Trazado 183", "d", "M38.795,75.13a2.236,2.236,0,0,1-.159.39h-.1A1.83,1.83,0,0,0,38.795,75.13Z", "transform", "translate(-7.866 -15.231)", "fill", "#fff"], ["id", "Trazado_184", "data-name", "Trazado 184", "d", "M38.795,75.13a2.236,2.236,0,0,1-.159.39h-.1A1.83,1.83,0,0,0,38.795,75.13Z", "transform", "translate(-7.866 -15.231)", "fill", "#fff"], ["id", "Trazado_185", "data-name", "Trazado 185", "d", "M33.739,71.471a1.831,1.831,0,0,1-.939.1c-1.488-.191-3.3-2.037-4.377-4.7-1-2.435-1.1-4.775-.39-6.1h0a2.006,2.006,0,0,1,.947-.907c1.592-.677,3.979,1.393,5.309,4.6S35.354,70.787,33.739,71.471Z", "transform", "translate(-5.628 -12.089)", "fill", "#fff"], ["id", "Trazado_186", "data-name", "Trazado 186", "d", "M97.243,85.392a1.743,1.743,0,1,0-2.435-2.435l-.8.8a6.168,6.168,0,0,0-8.373,8.381l-.8.8a1.743,1.743,0,1,0,2.388,2.435l.8-.8a6.168,6.168,0,0,0,8.444-8.4Zm-9.431.509a4.576,4.576,0,0,1,5.022-.971l-5.993,6a4.576,4.576,0,0,1,.971-5.03ZM94.3,92.4a4.6,4.6,0,0,1-5.03.971l6-6A4.592,4.592,0,0,1,94.3,92.4Z", "transform", "translate(-17.152 -16.682)", "fill", "#fff"], ["id", "Trazado_187", "data-name", "Trazado 187", "d", "M86.647,48.888a.676.676,0,0,0-.064-.326,23.081,23.081,0,0,0-.971-4.21,21.672,21.672,0,0,0-8.46-10.888h-.74A22.046,22.046,0,0,1,84.569,44.71a21.155,21.155,0,0,1,.971,4.346.86.86,0,0,1,.1.35A21.991,21.991,0,0,1,82.532,63.8a15.17,15.17,0,0,1-2.953,3.6l.39-.1C85.54,63.437,87.554,56.21,86.647,48.888ZM76.3,33.4Z", "transform", "translate(-15.573 -6.713)", "fill", "#fff"], ["id", "Trazado_188", "data-name", "Trazado 188", "d", "M76.384,45.432a32.287,32.287,0,0,0-.716-3.4c-.127-.39-.255-.748-.39-1.106a23.479,23.479,0,0,0-2.618-5.7,28.589,28.589,0,0,0-2.595-3.566A16.506,16.506,0,0,0,68.8,30.334C67.924,26,57,19,56,19c-.517,0-1.488,1.815-2.332,3.534-.8-.127-1.655-.263-2.491-.326a27.283,27.283,0,0,0-9.208.875,31.835,31.835,0,0,0-3.589,1.265c-2.388-1.456-5.9-3.335-7.068-2.388-1.592,1.3-4.242,10.235-4.823,12.281A26.782,26.782,0,0,0,22.86,56.407a25.254,25.254,0,0,0,1.815,4.6h0a15.639,15.639,0,0,0,.8,1.425,8.3,8.3,0,0,0,.684,1.138A24.792,24.792,0,0,0,29,67.263a27.45,27.45,0,0,0,27.57,7.959,23.966,23.966,0,0,0,4.775-1.783c.358-.159.708-.35,1.066-.549a21.648,21.648,0,0,0,3.47-2.236,15.686,15.686,0,0,0,1.592-1.226c.064,0,.1-.1.159-.135.39-.358.8-.74,1.17-1.13a28.1,28.1,0,0,0,3.621-4.592,26.646,26.646,0,0,0,3.956-18.138ZM68.863,64.366l-.39.1c-.159.159-.35.287-.517.454a5.491,5.491,0,0,1-.677.581A19.691,19.691,0,0,1,63.2,67.892a9.32,9.32,0,0,1-2.045.875c-.191.064-.382.159-.613.231-1.265.454-2.69.907-3.757,1.258l-1.488.478a2.388,2.388,0,0,0-.557.135,11.237,11.237,0,0,1-1.13.255l-1.17.2a22.731,22.731,0,0,1-18.465-5.675,1.218,1.218,0,0,1-.294.167c-2.388.971-5.826-2.045-7.776-6.709s-1.552-9.169.716-10.2a21.656,21.656,0,0,1,.422-3.892,20.518,20.518,0,0,1,2.722-7.091c1-2.5,2.1-5.189,3.112-7.227a11.178,11.178,0,0,1,2.1-3.438c.509-.326,1.488-.064,2.531.589A14.159,14.159,0,0,1,39.319,29.1a24.554,24.554,0,0,1,3.916-1.456,4.87,4.87,0,0,1,.653-.159,22.651,22.651,0,0,1,6.057-1.035h1c.517,0,1,.064,1.52.064h.557a27.952,27.952,0,0,1,3.526.517c.064-.1.135-.159.2-.263.581-1,1.226-1.91,1.592-1.91a17.721,17.721,0,0,1,6.8,4.346,4.1,4.1,0,0,1,.844,1.258h.1a21.672,21.672,0,0,1,8.421,10.951,23.081,23.081,0,0,1,1.011,4.21.676.676,0,0,1,.064.326C76.448,53.271,74.434,60.5,68.863,64.366Z", "transform", "translate(-4.467 -3.774)", "fill", "#fff"], ["id", "GALASPACE", "transform", "translate(81.555 55.896)", "fill", "#fff", "font-size", "33", "font-family", "ArialRoundedMTBold, Arial Rounded MT Bold", "letter-spacing", "-0.07em"], ["x", "0", "y", "0"], ["y", "0", "letter-spacing", "-0.04em"], ["y", "0", "letter-spacing", "-0.05em"], ["y", "0", "letter-spacing", "-0.12em"], ["y", "0", "letter-spacing", "-0.06em"], [1, "frases"], ["id", "frase1"], ["id", "frase2"], [1, "row", "imagenes"], [1, "col"], ["id", "planeta1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "154.112", "height", "94.854", "viewBox", "0 0 154.112 94.854"], ["id", "linear-gradient", "x1", "0.259", "y1", "0.149", "x2", "0.741", "y2", "0.851", "gradientUnits", "objectBoundingBox"], ["offset", "0", "stop-color", "#fff"], ["offset", "1", "stop-color", "#fff", "stop-opacity", "0"], ["id", "Capa_2", "data-name", "Capa 2", "transform", "matrix(0.978, 0.208, -0.208, 0.978, 13.063, -7.228)", "opacity", "0.857"], ["id", "OBJECTS"], ["id", "Trazado_110", "data-name", "Trazado 110", "d", "M72.554,30.567C31.475,35.665-1,48-.007,58.111s35.173,14.165,76.252,9.066,73.561-17.433,72.538-27.56S113.633,25.468,72.554,30.567Zm2.753,33.912c-28.952,3.591-60.265,2.053-61.272-7.944S43.256,37.372,72.216,33.773s60.257-2.03,61.265,7.936S104.26,60.887,75.307,64.479Zm-2.261-29C43,39.21,19.218,48.23,19.987,55.628S45.694,65.986,75.73,62.256s53.829-12.742,53.06-20.14S103.091,31.758,73.047,35.48Zm2.007,24.807c-21.17,2.622-44.07,1.484-44.8-5.8S51.63,40.479,72.8,37.841s44.078-1.484,44.847,5.806S96.239,57.658,75.061,60.288Z", "transform", "translate(0.029 -6.551)", "fill", "#fff4e9"], ["id", "Elipse_33", "data-name", "Elipse 33", "cx", "0.869", "cy", "0.508", "rx", "0.869", "ry", "0.508", "transform", "translate(106.572 52.168)", "fill", "#db8231"], ["id", "Trazado_111", "data-name", "Trazado 111", "d", "M125.154,39.987A39.987,39.987,0,1,1,85.167,0a39.987,39.987,0,0,1,39.987,39.987Z", "transform", "translate(-10.415 0)", "fill", "#fed09e"], ["id", "Trazado_112", "data-name", "Trazado 112", "d", "M82.913,89.841c-4.014-1.007-7.69-.446-11.635.584-2.945.769-6.275-.884-9.458-.469a39.987,39.987,0,0,0,48.231,4.7c-.484-.154-.977-.3-1.484-.438-3.922-1.084-8.351-1.123-12.373-1.761C91.733,91.717,87.289,90.91,82.913,89.841Z", "transform", "translate(-14.259 -20.633)", "fill", "#db8231"], ["id", "Trazado_113", "data-name", "Trazado 113", "d", "M110.24,56.381c-1.9-.654-3.683-1.538-5.621-2.13-2.307-.677-4.929-.5-7.29-.607-5.014-.238-9.451-1.8-14.318-2.676-3.7-.661-7.436.138-11.012,1.077a35.85,35.85,0,0,1-7.144,1.369c-2.461.138-4.806-.169-7.275.261-4.06.707-8.074,1.407-12.15,1.969.123,1.277.315,2.538.554,3.783l1.63-.185c3.968-.446,7.821-1.438,11.773-1.969,4.237-.569,8.144-.085,12.373-1.177,5.121-1.33,9.3-1.884,14.441-.392A53.06,53.06,0,0,0,98.728,57.55a22.993,22.993,0,0,1,7.152,1.169,57.912,57.912,0,0,0,5.629,2.061c3.66.954,7.651-.554,11.135-1.538a18.836,18.836,0,0,1,1.93-.454c.238-1.338.408-2.691.515-4.068C120.067,55.727,115.361,58.149,110.24,56.381Z", "transform", "translate(-10.473 -11.718)", "fill", "#db8231"], ["id", "Trazado_114", "data-name", "Trazado 114", "d", "M113.652,71.629c-4.491-1.084-9.128-.769-13.665-1.884-3.845-.954-8.959-3.222-12.95-2.176a14.872,14.872,0,0,0-3.791,1.7c-1.461.861-4.183-.677-6.044-.223s-3.33,1.307-5.083,1.869-4.668-.907-6.436-1.253c-4.491-.884-9.166.892-13.388,2.238l-2.145.692a39.633,39.633,0,0,0,3.991,6.667c3.468-1.284,7.275-2.622,10.566-1.976,3.714.769,6.706,1.969,10.5.7,2.038-.684,3.076-1.653,5.275-.884,1.83.638,4.252,0,5.906-.823s2.1-1.323,4-.992c2.138.369,4.229.984,6.321,1.538,4.614,1.23,9.082,1.338,13.772,1.992a27.976,27.976,0,0,1,6.829,1.969,40.191,40.191,0,0,0,4.245-6.252A40.6,40.6,0,0,0,113.652,71.629Z", "transform", "translate(-11.563 -15.547)", "fill", "#ffe1c5"], ["id", "Trazado_115", "data-name", "Trazado 115", "d", "M101.313,7.536c3.845-.246,7.728-.884,11.6-1.107A39.949,39.949,0,0,0,71.23,5.337c3.476.531,6.921.769,9.828,1.077C86.271,7.013,94.761,7.959,101.313,7.536Z", "transform", "translate(-16.433 0)", "fill", "#f9b673"], ["id", "Trazado_116", "data-name", "Trazado 116", "d", "M52.42,22.667a73.421,73.421,0,0,1,10.958-1.538c3.576-.3,6.744.292,10.266.769a47.1,47.1,0,0,0,12.219-.131c1.7-.215,3.391-.484,5.083-.769,2.468-.384,3.991.3,6.283,1.123,3.43,1.238,7.259,1.4,10.866,1.476,3.891.077,7.628.631,11.535.969a12.411,12.411,0,0,0,2.676-.085,40.311,40.311,0,0,0-5.344-7.79c-2.938-.285-5.844-.769-8.828-.769a30.821,30.821,0,0,1-11.3-2.13c-3.968-1.538-8.259-.092-12.3.423-7.913,1.007-15.487-1.338-23.408-.592l-1.538.154a40.164,40.164,0,0,0-7.167,8.889Z", "transform", "translate(-12.088 -3.027)", "fill", "#db8231"], ["id", "Trazado_117", "data-name", "Trazado 117", "d", "M105.049,35.337c-4.614-1.223-8.966-2.545-13.842-2.615s-9.881,0-14.734.323a31.86,31.86,0,0,0-6.79,1.423,23.785,23.785,0,0,1-7.69.692,112.8,112.8,0,0,0-14.68.638c-.2.654-.385,1.323-.554,1.992a112.273,112.273,0,0,1,15.234-.707,31.528,31.528,0,0,0,10.766-1.538c4.929-1.446,10.7-.684,15.787-.877,9.135-.338,17.3,3.845,26.384,3.845a94.473,94.473,0,0,1,9.6.238c-.146-.654-.308-1.3-.484-1.946a36.911,36.911,0,0,0-3.691-.254C115.107,36.491,110.193,36.706,105.049,35.337Z", "transform", "translate(-10.78 -7.554)", "fill", "#ffe1c5"], ["id", "Elipse_34", "data-name", "Elipse 34", "cx", "2.307", "cy", "1.361", "rx", "2.307", "ry", "1.361", "transform", "translate(102.443 34.143)", "fill", "#db8231"], ["id", "Elipse_35", "data-name", "Elipse 35", "cx", "2.307", "cy", "1.361", "rx", "2.307", "ry", "1.361", "transform", "translate(45.507 32.474)", "fill", "#db8231"], ["id", "Elipse_36", "data-name", "Elipse 36", "cx", "2.307", "cy", "1.361", "rx", "2.307", "ry", "1.361", "transform", "translate(94.145 51.122)", "fill", "#db8231"], ["id", "Elipse_37", "data-name", "Elipse 37", "cx", "2.307", "cy", "1.361", "rx", "2.307", "ry", "1.361", "transform", "translate(66.654 2.484)", "fill", "#db8231"], ["id", "Elipse_38", "data-name", "Elipse 38", "cx", "1.392", "cy", "0.823", "rx", "1.392", "ry", "0.823", "transform", "translate(77.997 67.524)", "fill", "#db8231"], ["id", "Elipse_39", "data-name", "Elipse 39", "cx", "1.392", "cy", "0.823", "rx", "1.392", "ry", "0.823", "transform", "translate(77.228 30.036)", "fill", "#db8231"], ["id", "Elipse_40", "data-name", "Elipse 40", "cx", "1.392", "cy", "0.823", "rx", "1.392", "ry", "0.823", "transform", "translate(56.273 48.969)", "fill", "#db8231"], ["id", "Elipse_41", "data-name", "Elipse 41", "cx", "0.869", "cy", "0.508", "rx", "0.869", "ry", "0.508", "transform", "translate(93.899 10.166)", "fill", "#db8231"], ["id", "Elipse_42", "data-name", "Elipse 42", "cx", "0.869", "cy", "0.508", "rx", "0.869", "ry", "0.508", "transform", "translate(57.865 7.698)", "fill", "#db8231"], ["id", "Elipse_43", "data-name", "Elipse 43", "cx", "0.869", "cy", "0.508", "rx", "0.869", "ry", "0.508", "transform", "translate(63.509 32.943)", "fill", "#db8231"], ["id", "Trazado_118", "data-name", "Trazado 118", "d", "M117.48,48.678c0,.285-.384.515-.861.515s-.869-.231-.869-.515.384-.508.869-.508S117.48,48.4,117.48,48.678Z", "transform", "translate(-26.718 -11.128)", "fill", "#db8231"], ["id", "Elipse_44", "data-name", "Elipse 44", "cx", "0.869", "cy", "0.508", "rx", "0.869", "ry", "0.508", "transform", "translate(98.367 22.693)", "fill", "#db8231"], ["id", "Trazado_119", "data-name", "Trazado 119", "d", "M98.29,62.515c0,.277-.384.508-.861.508s-.869-.231-.869-.508.392-.515.869-.515S98.29,62.231,98.29,62.515Z", "transform", "translate(-22.285 -14.323)", "fill", "#db8231"], ["id", "Elipse_45", "data-name", "Elipse 45", "cx", "0.869", "cy", "0.508", "rx", "0.869", "ry", "0.508", "transform", "translate(67.608 65.625)", "fill", "#db8231"], ["id", "Trazado_120", "data-name", "Trazado 120", "d", "M119.96,88.178c0,.285-.384.515-.861.515s-.869-.231-.869-.515.384-.508.869-.508S119.96,87.924,119.96,88.178Z", "transform", "translate(-27.291 -20.253)", "fill", "#db8231"], ["id", "Elipse_46", "data-name", "Elipse 46", "cx", "0.869", "cy", "0.508", "rx", "0.869", "ry", "0.508", "transform", "translate(44.792 50.245)", "fill", "#db8231"], ["id", "Trazado_121", "data-name", "Trazado 121", "d", "M62.79,29.178c0,.285-.384.515-.861.515s-.869-.231-.869-.515.392-.508.869-.508S62.79,28.924,62.79,29.178Z", "transform", "translate(-14.084 -6.623)", "fill", "#db8231"], ["id", "Trazado_122", "data-name", "Trazado 122", "d", "M104.63,28.008c0,.285-.392.515-.869.515s-.861-.231-.861-.515.384-.508.861-.508S104.63,27.731,104.63,28.008Z", "transform", "translate(-23.75 -6.353)", "fill", "#db8231"], ["id", "Trazado_123", "data-name", "Trazado 123", "d", "M120.138,20.81c-13,18.279-37.088,47.008-62.088,50.307A39.987,39.987,0,0,0,120.138,20.81Z", "transform", "translate(-13.389 -4.807)", "fill", "#212a3c", "opacity", "0.2"], ["id", "Trazado_124", "data-name", "Trazado 124", "d", "M130.1,50.84C116.908,66.773,94.73,86.421,66.67,84.106a39.987,39.987,0,0,0,63.449-32.374C130.119,51.432,130.1,51.14,130.1,50.84Z", "transform", "translate(-15.38 -11.745)", "fill", "#212a3c", "opacity", "0.2"], ["id", "Trazado_125", "data-name", "Trazado 125", "d", "M148.784,39.653c-.646-6.413-14.611-10.4-35.273-11.143.438,1.461,1.007,2.914,1.461,4.368C125.66,34.162,133,37,133.481,41.744c1.007,10-29.221,19.163-58.173,22.754S15.042,66.567,14.035,56.57c-.5-4.983,6.813-9.774,17.871-13.772a36.809,36.809,0,0,1,.384-4.2C12.3,44.389-.629,51.718-.006,58.147c1.046,10.1,35.173,14.165,76.252,9.066S149.806,49.78,148.784,39.653Z", "transform", "translate(0.029 -6.586)", "fill", "#fff4e9"], ["id", "Trazado_126", "data-name", "Trazado 126", "d", "M121.557,37.19a1.787,1.787,0,0,0,.062.277,19.317,19.317,0,0,1,.192,5.306,4.291,4.291,0,0,1,1.846,2.914c.769,7.282-21.37,14.011-42.548,16.641s-44.07,1.484-44.8-5.8c-.177-1.707.915-3.376,2.938-4.975A18.894,18.894,0,0,1,38.1,47.4C30.248,50.739,25.68,54.361,26,57.668c.769,7.39,25.707,10.358,55.743,6.629s53.829-12.742,53.06-20.14C134.483,40.927,129.531,38.582,121.557,37.19Z", "transform", "translate(-5.98 -8.592)", "fill", "#fff4e9"], ["id", "Trazado_127", "data-name", "Trazado 127", "d", "M99.875,8.966c5.383,9.089-.769,22.585-13.6,30.136s-27.6,6.306-32.943-2.791.769-22.593,13.6-30.144S94.531-.131,99.875,8.966Z", "transform", "translate(-11.851 -0.284)", "opacity", "0.5", "fill", "url(#linear-gradient)"], ["id", "Trazado_128", "data-name", "Trazado 128", "d", "M89.65,8.443c3.191,5.437-1.007,13.842-9.382,18.748S62.52,31.7,59.329,26.261s1.007-13.842,9.382-18.74S86.459,3.014,89.65,8.443Z", "transform", "translate(-13.437 -0.946)", "fill", "#fff", "opacity", "0.4"], ["id", "planeta2", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "149.501", "height", "102.118", "viewBox", "0 0 149.501 102.118"], ["id", "linear-gradient", "x1", "-0.889", "y1", "-0.607", "x2", "-0.559", "y2", "0.103", "gradientUnits", "objectBoundingBox"], ["id", "Capa_2", "data-name", "Capa 2", "transform", "translate(-4.819 23.119) rotate(-11)", "opacity", "0.852"], ["id", "OBJECTS", "transform", "translate(0 0)"], ["id", "Trazado_129", "data-name", "Trazado 129", "d", "M69.991,2.425C30.379,8.039-.935,21.612.021,32.755s33.917,15.6,73.529,9.983,70.926-19.2,69.947-30.33S109.6-3.189,69.991,2.425Zm2.462,35.131C48.19,40.994,21.948,39.5,21.11,29.936S45.58,11.6,69.857,8.158s50.5-1.948,51.343,7.621S96.708,34.119,72.453,37.556Z", "transform", "translate(0 25.254)", "fill", "#ffc585"], ["id", "Trazado_130", "data-name", "Trazado 130", "d", "M99.526,42.342c0,23.385-22.28,42.342-49.763,42.342S0,65.727,0,42.342,22.28,0,49.763,0,99.526,18.957,99.526,42.342Z", "transform", "translate(21.635 0)", "fill", "#f7941e"], ["id", "Trazado_131", "data-name", "Trazado 131", "d", "M37.873,3.366c-2.388-.66-4.86-.914-7.3-1.338C25.079,1.063,19.5-.139,13.885.013,11.209.089-1.763.978.2,6.313.837,8.006,3.36,8.633,4.876,9.2A24.92,24.92,0,0,0,17.1,10.741c2.71-.39,5.275-1.6,8.036-1.693,3.192-.127,6.384-.169,9.585-.2a52.786,52.786,0,0,0,5.428,0c2.075-.169,3.861-.644,3.6-1.88C43.292,4.89,39.567,3.832,37.873,3.366Z", "transform", "translate(54.7 17.006)", "fill", "#fbb040"], ["id", "Trazado_132", "data-name", "Trazado 132", "d", "M76.9,20.7A49.738,49.738,0,0,0,0,15.973c10.94-.406,21.964-.517,32.659-3.006,2.913-.677,5.834-1.575,8.874-1.482,6.926.22,13.243,3.285,19.568,5.7C65.385,18.818,71.626,21.164,76.9,20.7Z", "transform", "translate(34.389 0.005)", "fill", "#e05b41"], ["id", "Trazado_133", "data-name", "Trazado 133", "d", "M8.275.46c-1.863-.195-3.87-.72-5.732-.3C1.256.435-1.183,1.908.672,3.3a8.036,8.036,0,0,0,2.489.567c4.014.779,8.2,1.406,12.261,1.888,1.126.127,2.252.2,3.387.254A50.7,50.7,0,0,0,20.13.308,55.038,55.038,0,0,1,8.275.46Z", "transform", "translate(94.667 48.882)", "fill", "#e05b41"], ["id", "Trazado_134", "data-name", "Trazado 134", "d", "M81.948,1.916C79.966,1.865,60.534-1.564,59.932.875c-.533,2.083-2.151,7-2.684,8.3s-5.385,2.854-5.385,2.854a23.709,23.709,0,0,0-6.452.517C33.1,15.083,21.465-3.545,9.907,4.77,7.756,6.319,2.642,5.8.491,6.582A3.436,3.436,0,0,1,0,6.726,49.755,49.755,0,0,0,45.249,31.147,49.755,49.755,0,0,0,87.943,2.492a42.574,42.574,0,0,0-5.995-.576Z", "transform", "translate(28.25 53.521)", "fill", "#e05b41"], ["id", "Trazado_135", "data-name", "Trazado 135", "d", "M11.612,1.556C8.775,1.5,5.769.709,2.958,1.429c-1.693.4-4.428,1.829-1.99,3.387,1.507.974,3.726.466,5.419.847a29.441,29.441,0,0,1,6.147,2.21c4.318,1.956,8.239,3.7,13.141,2.481,3.251-.847,6.215-1.473,8.34-4.327C35.194,4.443,35.71,1.793,37.4.675,35.083-.671,32.12.328,29.69.828,23.779,2.038,17.6,1.691,11.612,1.556Z", "transform", "translate(49.76 48.91)", "fill", "#fbb040"], ["id", "Trazado_136", "data-name", "Trazado 136", "d", "M10.152,4.241c1.863-.093,3.937.11,5.707-.593C17.1,3.166,19.246,1.337,17.223.262a7.693,7.693,0,0,0-2.54-.169c-3.937-.135-8.019-.11-11.964,0A49.746,49.746,0,0,0,0,5.808,53.454,53.454,0,0,1,10.152,4.241Z", "transform", "translate(30.304 21.448)", "fill", "#f15a29"], ["id", "Trazado_137", "data-name", "Trazado 137", "d", "M2.769,9.314c3.5.779,3.768.262,8.34,1.558s11.567,1.3,12.642,1.558a22.973,22.973,0,0,0,4.03.254H53.607c1.075,0,8.069-.517,10.22-.771s7.528-.525,7.528-.525.542,0,6.19-.779S89.4,8.8,91.8,10.093c1.346.72,4.759,1.041,7.621,1.312a49.111,49.111,0,0,0-.7-8.1L86.148,0,73.514,1.033S66.52,4.657,64.632,5.182s-4.572.254-5.927.254-8.6-.517-8.6-.517a51.118,51.118,0,0,0-10.22-1.3c-4.843,0-15.868-.517-17.485,0a28.5,28.5,0,0,1-6.19.517H.491A48.605,48.605,0,0,0,0,9.009a10.279,10.279,0,0,1,2.769.3Z", "transform", "translate(21.692 31.647)", "fill", "#f15a29"], ["id", "Trazado_138", "data-name", "Trazado 138", "d", "M12.506,2.235c0,1.236-2.794,2.235-6.249,2.235S0,3.472,0,2.235,2.8,0,6.257,0,12.506,1,12.506,2.235Z", "transform", "translate(46.401 27.707)", "fill", "#fbb040"], ["id", "Trazado_139", "data-name", "Trazado 139", "d", "M7.968,1.423c0,.787-1.787,1.431-3.98,1.431S0,2.21,0,1.423,1.787,0,3.988,0,7.968.644,7.968,1.423Z", "transform", "translate(96.61 43.718)", "fill", "#fbb040"], ["id", "Trazado_140", "data-name", "Trazado 140", "d", "M7.968,1.423c0,.787-1.787,1.423-3.988,1.423S0,2.21,0,1.423,1.778,0,3.98,0,7.968.635,7.968,1.423Z", "transform", "translate(34.76 46.36)", "fill", "#fbb040"], ["id", "Trazado_141", "data-name", "Trazado 141", "d", "M6.876,1.228c0,.686-1.541,1.236-3.438,1.236S0,1.914,0,1.228,1.541,0,3.438,0,6.876.55,6.876,1.228Z", "transform", "translate(101.449 26.382)", "fill", "#fbb040"], ["id", "Trazado_142", "data-name", "Trazado 142", "d", "M6.884,1.236c0,.677-1.541,1.228-3.438,1.228S0,1.914,0,1.236,1.541,0,3.446,0,6.884.55,6.884,1.236Z", "transform", "translate(74.942 62.216)", "fill", "#fbb040"], ["id", "Trazado_143", "data-name", "Trazado 143", "d", "M6.884,1.228c0,.677-1.541,1.228-3.446,1.228S0,1.905,0,1.228,1.541,0,3.438,0,6.884.55,6.884,1.228Z", "transform", "translate(40.094 15.723)", "fill", "#fbb040"], ["id", "Trazado_144", "data-name", "Trazado 144", "d", "M0,61.542A49.762,49.762,0,1,0,78.215,0C63.937,21.542,32.286,62.813,0,61.542Z", "transform", "translate(31.249 4.902)", "fill", "#212a3c", "opacity", "0.2"], ["id", "Trazado_145", "data-name", "Trazado 145", "d", "M0,40.932A49.755,49.755,0,0,0,83.921,4.759c0-1.609-.085-3.192-.229-4.759C68.612,20.237,38.959,50.1,0,40.932Z", "transform", "translate(35.22 30.162)", "fill", "#212a3c", "opacity", "0.2"], ["id", "Trazado_146", "data-name", "Trazado 146", "d", "M62.335,9.706c7.079,11.668-.542,29.23-17.02,39.238s-35.58,8.671-42.667-3,.542-29.23,17.02-39.238S55.256-1.954,62.335,9.706Z", "transform", "translate(29.27 2.436)", "opacity", "0.3", "fill", "url(#linear-gradient)"], ["id", "Trazado_147", "data-name", "Trazado 147", "d", "M40.343,5.488c4.234,6.969-1.05,17.9-11.787,24.42s-22.862,6.156-27.1-.847S2.511,11.169,13.247,4.65,36.109-1.481,40.343,5.488Z", "transform", "translate(36.293 5.35)", "fill", "#fff", "opacity", "0.3"], ["id", "Trazado_148", "data-name", "Trazado 148", "d", "M143.5,11.854C142.94,5.572,132.218,1.414,115.867,0a78.639,78.639,0,0,1-.074,9.314c3.211,1.448,5.191,3.387,5.406,5.927.838,9.534-24.47,18.34-48.747,21.778s-50.5,1.948-51.343-7.621c-.2-2.235,1.053-4.428,3.374-6.52a31.285,31.285,0,0,1-1.046-9.441C8.607,19.306-.491,26.114.021,32.2c1.008,11.126,33.917,15.6,73.529,9.983S144.475,22.989,143.5,11.854Z", "transform", "translate(0.001 25.753)", "fill", "#ffc585"], ["id", "sujeto", "xmlns", "http://www.w3.org/2000/svg", "width", "484.887", "height", "406.824", "viewBox", "0 0 484.887 406.824"], ["id", "Capa_2", "data-name", "Capa 2", "transform", "translate(-15.503 -0.001)"], ["id", "Shadow", "transform", "translate(15.503 221.032)"], ["id", "Shadow-2", "data-name", "Shadow", "d", "M371.91,371.453c-16.77-9.682-16.77-25.389,0-35.071s43.961-9.682,60.731,0,16.77,25.389,0,35.071S388.681,381.092,371.91,371.453Z", "transform", "translate(15.205 -192.905)", "fill", "#e0e0e0"], ["id", "Shadow-3", "data-name", "Shadow", "d", "M60.3,383.512,16.147,358.047c-2.486-1.433-2.486-3.767,0-5.2L272.782,204.7a9.975,9.975,0,0,1,9.009,0L325.9,230.169c2.486,1.444,2.486,3.767,0,5.2L69.334,383.512a9.91,9.91,0,0,1-9.031,0Z", "transform", "translate(-14.282 -203.63)", "fill", "#e0e0e0"], ["id", "Device", "transform", "translate(48.314 0.001)"], ["id", "Device-2", "data-name", "Device"], ["id", "Trazado_200", "data-name", "Trazado 200", "d", "M207.921,336.268l37.926-21.937c3.908-2.247,5.861-5.21,5.861-8.163v-5.275L212.36,278.706a8.358,8.358,0,0,1-3.777-6.513V225.41L142.37,263.683v46.751a8.358,8.358,0,0,0,3.777,6.513l33.476,19.289C187.427,340.773,200.106,340.773,207.921,336.268Z", "transform", "translate(-36.147 19.263)", "fill", "#27debf"], ["id", "Trazado_201", "data-name", "Trazado 201", "d", "M207.921,336.268l37.926-21.937c3.908-2.247,5.861-5.21,5.861-8.163v-5.275L212.36,278.706a8.358,8.358,0,0,1-3.777-6.513V225.41L142.37,263.683v46.751a8.358,8.358,0,0,0,3.777,6.513l33.476,19.289C187.427,340.773,200.106,340.773,207.921,336.268Z", "transform", "translate(-36.147 19.263)", "fill", "#b21b63"], ["id", "Trazado_202", "data-name", "Trazado 202", "d", "M158.253,316.273v5.254l-12.146-6.99a8.358,8.358,0,0,1-3.767-6.513V261.24L155,254c.261,3.256.554,6.513.814,9.769l-8.857,5.123v36.526a8.315,8.315,0,0,0,3.777,6.513Z", "transform", "translate(-36.15 21.706)", "fill", "#b21b63", "opacity", "0.4"], ["id", "Trazado_203", "data-name", "Trazado 203", "d", "M146.57,307.21a8.336,8.336,0,0,0,3.777,6.513l28.895,16.651c7.815,4.516,20.493,4.516,28.32,0l37.991-21.926c7.826-4.5,7.826-11.832,0-16.336l-28.906-16.662a8.325,8.325,0,0,1-3.777-6.513V232.4l-66.213,38.273Z", "transform", "translate(-35.788 19.86)", "fill", "#27debf"], ["id", "Trazado_204", "data-name", "Trazado 204", "d", "M146.57,307.21a8.336,8.336,0,0,0,3.777,6.513l28.895,16.651c7.815,4.516,20.493,4.516,28.32,0l37.991-21.926c7.826-4.5,7.826-11.832,0-16.336l-28.906-16.662a8.325,8.325,0,0,1-3.777-6.513V232.4l-66.213,38.273Z", "transform", "translate(-35.788 19.86)", "fill", "#e71f76"], ["id", "Trazado_205", "data-name", "Trazado 205", "d", "M224.275,279.911h0l-7.685-4.44a8.326,8.326,0,0,1-3.777-6.513V232.4L146.6,270.673V307.21a8.336,8.336,0,0,0,3.777,6.513l7.6,4.342Z", "transform", "translate(-35.785 19.86)", "fill", "#b21b63"], ["id", "Trazado_206", "data-name", "Trazado 206", "d", "M247.626,295v5.275c0,2.963-1.965,5.9-5.861,8.173l-37.991,21.915a28.341,28.341,0,0,1-13.514,3.354v-5.254a28.341,28.341,0,0,0,13.514-3.354l37.991-21.937C245.662,300.872,247.626,297.909,247.626,295Z", "transform", "translate(-32.054 25.21)", "fill", "#27debf"], ["id", "Trazado_207", "data-name", "Trazado 207", "d", "M247.626,295v5.275c0,2.963-1.965,5.9-5.861,8.173l-37.991,21.915a28.341,28.341,0,0,1-13.514,3.354v-5.254a28.341,28.341,0,0,0,13.514-3.354l37.991-21.937C245.662,300.872,247.626,297.909,247.626,295Z", "transform", "translate(-32.054 25.21)", "fill", "#b21b63"], ["id", "Trazado_208", "data-name", "Trazado 208", "d", "M48.938,372.475a10.149,10.149,0,0,0,9.129-.163L314.235,224.419a10.442,10.442,0,0,0,4.722-8.173V9.02a10.127,10.127,0,0,0-4.418-8.011,10.1,10.1,0,0,0-9.14.174L49.231,149.077a10.42,10.42,0,0,0-4.711,8.174V364.475a10.116,10.116,0,0,0,4.418,8Z", "transform", "translate(-44.509 -0.001)", "fill", "#27debf"], ["id", "Trazado_209", "data-name", "Trazado 209", "d", "M57.372,371.868l256.168-147.9a10.41,10.41,0,0,0,4.722-8.173V8.565c0-3.007-2.117-4.233-4.722-2.725L57.372,153.691a10.442,10.442,0,0,0-4.722,8.174V369.133C52.672,372.151,54.788,373.366,57.372,371.868Z", "transform", "translate(-43.814 0.443)", "fill", "#27debf"], ["id", "Trazado_210", "data-name", "Trazado 210", "d", "M57.372,371.868l256.168-147.9a10.41,10.41,0,0,0,4.722-8.173V8.565c0-3.007-2.117-4.233-4.722-2.725L57.372,153.691a10.442,10.442,0,0,0-4.722,8.174V369.133C52.672,372.151,54.788,373.366,57.372,371.868Z", "transform", "translate(-43.814 0.443)", "fill", "#5c4e9a"], ["id", "Trazado_211", "data-name", "Trazado 211", "d", "M57.394,350.136a10.225,10.225,0,0,1-8.456-.174,10.149,10.149,0,0,1-4.429-8.022V323l8.846,5.123v18.865C53.356,349.757,55.1,351,57.394,350.136Z", "transform", "translate(-44.51 27.603)", "fill", "#27debf"], ["id", "Trazado_212", "data-name", "Trazado 212", "d", "M57.394,350.136a10.225,10.225,0,0,1-8.456-.174,10.149,10.149,0,0,1-4.429-8.022V323l8.846,5.123v18.865C53.356,349.757,55.1,351,57.394,350.136Z", "transform", "translate(-44.51 27.603)", "fill", "#b21b63"], ["id", "Trazado_213", "data-name", "Trazado 213", "d", "M52.66,339.816v18.865c0,3.007,2.117,4.222,4.722,2.724L313.539,213.512a10.442,10.442,0,0,0,4.722-8.173V186.43Z", "transform", "translate(-43.814 15.932)", "fill", "#27debf"], ["id", "Trazado_214", "data-name", "Trazado 214", "d", "M52.67,339.784v18.9c0,3.007,2.117,4.222,4.722,2.724L313.538,213.512a10.442,10.442,0,0,0,4.722-8.173V186.43Z", "transform", "translate(-43.813 15.932)", "fill", "#e71f76"], ["id", "Trazado_215", "data-name", "Trazado 215", "d", "M60.82,330.488V163.707a6.241,6.241,0,0,1,2.822-4.906L305.884,18.95c1.563-.9,2.833-.174,2.833,1.639V187.37a6.252,6.252,0,0,1-2.833,4.906L63.653,332.127C62.1,333.028,60.82,332.3,60.82,330.488Z", "transform", "translate(-43.116 1.586)", "fill", "#27debf"], ["id", "Trazado_216", "data-name", "Trazado 216", "d", "M60.82,330.488V163.707a6.241,6.241,0,0,1,2.822-4.906L305.884,18.95c1.563-.9,2.833-.174,2.833,1.639V187.37a6.252,6.252,0,0,1-2.833,4.906L63.653,332.127C62.1,333.028,60.82,332.3,60.82,330.488Z", "transform", "translate(-43.116 1.586)", "fill", "#263238"], ["id", "Trazado_217", "data-name", "Trazado 217", "d", "M175.349,262.668a9.769,9.769,0,0,0-4.429,7.663c0,2.822,1.986,3.973,4.429,2.562a9.769,9.769,0,0,0,4.429-7.674C179.788,262.4,177.813,261.257,175.349,262.668Z", "transform", "translate(-33.707 22.395)", "fill", "#27debf"], ["id", "Trazado_218", "data-name", "Trazado 218", "d", "M54.811,145.672a10.073,10.073,0,0,0-1.4,4.667v193.4l-8.9-5.145V145.237A9.693,9.693,0,0,1,45.9,140.57Z", "transform", "translate(-44.51 12.012)", "fill", "#3e2669"], ["id", "Trazado_219", "data-name", "Trazado 219", "d", "M318.811,8.239c-.347-2.431-2.3-3.322-4.689-1.954L57.954,154.135a9.769,9.769,0,0,0-3.256,3.549l-8.857-5.113a9.867,9.867,0,0,1,3.343-3.5L305.352,1.183a10.117,10.117,0,0,1,9.15-.174,10.214,10.214,0,0,1,4.309,7.229Z", "transform", "translate(-44.396 -0.001)", "fill", "#5c4e9a"], ["id", "Window", "transform", "translate(89.11 33.484)"], ["id", "Window-2", "data-name", "Window"], ["id", "Window-3", "data-name", "Window"], ["id", "Window-4", "data-name", "Window"], ["id", "Trazado_220", "data-name", "Trazado 220", "d", "M329.531,31.1a2.323,2.323,0,0,0-2.4.185L85.411,170.863a7.283,7.283,0,0,0-3.311,5.731v165.76a3.256,3.256,0,0,0,1.4,2.876c.532.293,3.376,1.943,4.222,2.4a1.878,1.878,0,0,0,1.91-.109l241.71-139.579a7.283,7.283,0,0,0,3.256-5.72V35.593a2.279,2.279,0,0,0-1.02-2.171C333.037,33.108,330.139,31.469,329.531,31.1Z", "transform", "translate(-82.094 -30.847)", "fill", "#27debf"], ["id", "Trazado_221", "data-name", "Trazado 221", "d", "M88.132,347.064c-.923,0-1.682-1.14-1.682-2.54V178.753a6.849,6.849,0,0,1,3.039-5.254L331.275,33.92a2.583,2.583,0,0,1,1.2-.38c.8,0,1.281.684,1.281,1.824V201.938a6.839,6.839,0,0,1-3.028,5.254L88.99,346.825a1.617,1.617,0,0,1-.858.239Z", "transform", "translate(-81.722 -30.618)", "fill", "#fafafa"], ["id", "Trazado_222", "data-name", "Trazado 222", "d", "M332.5,34.082c.64,0,.738.8.738,1.281V201.981a6.2,6.2,0,0,1-2.768,4.787L88.768,346.39a1.086,1.086,0,0,1-.554.174c-.608,0-1.14-.933-1.14-2V178.8a6.231,6.231,0,0,1,2.768-4.787L331.563,34.44a1.856,1.856,0,0,1,.933-.315m0-1.085a3.039,3.039,0,0,0-1.476.456L89.256,173.075A7.305,7.305,0,0,0,86,178.8V344.523c0,1.672.933,3.083,2.225,3.083a2.171,2.171,0,0,0,1.085-.315l241.7-139.536a7.283,7.283,0,0,0,3.256-5.72V35.406c0-1.5-.738-2.366-1.824-2.366Z", "transform", "translate(-81.761 -30.66)", "fill", "#e0e0e0"], ["id", "Trazado_223", "data-name", "Trazado 223", "d", "M83.49,332.913l4.06,2.3a3.376,3.376,0,0,1-1.216-2.822V177.486L82.1,175V330.047a3.256,3.256,0,0,0,1.389,2.866Z", "transform", "translate(-82.094 -18.529)", "fill", "#f0f0f0"], ["id", "Trazado_224", "data-name", "Trazado 224", "d", "M334.32,35.384c0-2.095-1.487-2.942-3.256-1.889L89.256,173.075A7.305,7.305,0,0,0,86,178.8V189.65L334.32,46.239Z", "transform", "translate(-81.761 -30.66)", "fill", "#e71f76"], ["id", "Trazado_225", "data-name", "Trazado 225", "d", "M331.277,33.683,89.513,173.262a6.752,6.752,0,0,0-2.323,2.453L83,173.284a6.513,6.513,0,0,1,2.3-2.421L327.055,31.284a2.345,2.345,0,0,1,2.4-.2c.6.369,3.332,1.932,4.038,2.3a2.388,2.388,0,0,0-2.214.293Z", "transform", "translate(-82.017 -30.848)", "fill", "#b21b63"], ["id", "Trazado_226", "data-name", "Trazado 226", "d", "M82.1,176.1V165.346a6.741,6.741,0,0,1,1.009-3.256l4.212,2.421a6.632,6.632,0,0,0-.988,3.256v10.855Z", "transform", "translate(-82.094 -19.632)", "fill", "#b21b63"], ["id", "Trazado_227", "data-name", "Trazado 227", "d", "M279.4,150.366l-144.768,83.58a5.33,5.33,0,0,0-2.421,4.179v41.508a5.33,5.33,0,0,0,2.421,4.179l4.222,2.431a5.362,5.362,0,0,0,4.841,0l144.746-83.58a5.351,5.351,0,0,0,2.421-4.19V156.966a5.351,5.351,0,0,0-2.421-4.19l-4.233-2.431a5.33,5.33,0,0,0-4.809.022Z", "transform", "translate(-77.812 -20.684)", "fill", "#27debf"], ["id", "Trazado_228", "data-name", "Trazado 228", "d", "M290.8,156.582c-.163-1.259-1.183-1.715-2.4-1.009l-144.768,83.58a4.83,4.83,0,0,0-1.7,1.813l-9.064-5.2a5.047,5.047,0,0,1,1.693-1.78l144.779-83.58a5.33,5.33,0,0,1,4.83,0l4.233,2.431a5.427,5.427,0,0,1,2.4,3.745Z", "transform", "translate(-77.755 -20.68)", "fill", "#b21b63"], ["id", "Trazado_229", "data-name", "Trazado 229", "d", "M143.282,279.673a5.427,5.427,0,0,1-4.418-.2l-4.233-2.431a5.33,5.33,0,0,1-2.421-4.179V231.359a5.058,5.058,0,0,1,.716-2.4l9.064,5.243a4.863,4.863,0,0,0-.716,2.377v41.508C141.274,279.466,142.142,280.107,143.282,279.673Z", "transform", "translate(-77.812 -13.917)", "fill", "#3e2669"], ["id", "Trazado_230", "data-name", "Trazado 230", "d", "M142.979,238.726l144.768-83.58c1.335-.771,2.421-.141,2.421,1.4v41.508a5.351,5.351,0,0,1-2.421,4.19L143,285.824c-1.335.771-2.421.152-2.421-1.389v-41.5a5.351,5.351,0,0,1,2.4-4.212Z", "transform", "translate(-77.096 -20.253)", "fill", "#e71f76"], ["id", "Trazado_231", "data-name", "Trazado 231", "d", "M240.958,170.73,134.583,232.156a5.047,5.047,0,0,0-1.693,1.78l9.064,5.243a4.83,4.83,0,0,1,1.7-1.813l106.375-61.415Z", "transform", "translate(-77.754 -18.893)", "fill", "#3e2669"], ["id", "Trazado_232", "data-name", "Trazado 232", "d", "M249.356,175.54,142.981,236.955a5.351,5.351,0,0,0-2.421,4.19v41.508c0,1.541,1.085,2.171,2.421,1.389l106.375-61.415Z", "transform", "translate(-77.098 -18.482)", "fill", "#5c4e9a"], ["id", "Trazado_233", "data-name", "Trazado 233", "d", "M165.711,230.012l54.935-31.7c2.269-1.313,4.114-.38,4.114,2.084a8.857,8.857,0,0,1-4.114,6.849l-54.892,31.685c-2.269,1.313-4.114.38-4.125-2.084a8.825,8.825,0,0,1,4.081-6.838Z", "transform", "translate(-75.297 -16.587)", "fill", "#fff"], ["id", "Trazado_234", "data-name", "Trazado 234", "d", "M176.118,237.133a.119.119,0,0,1,.163,0,.369.369,0,0,1,.065.239v6.187a9.261,9.261,0,0,1-.152,1.769,6.892,6.892,0,0,1-.456,1.563,5.547,5.547,0,0,1-.76,1.281,3.82,3.82,0,0,1-1.085.9,1.889,1.889,0,0,1-1.085.326,1.086,1.086,0,0,1-.76-.4,2.334,2.334,0,0,1-.456-1.085,7.6,7.6,0,0,1-.141-1.606v-6.057a.836.836,0,0,1,.065-.326.391.391,0,0,1,.163-.217l.684-.391a.108.108,0,0,1,.163,0,.4.4,0,0,1,.065.25v6.111a4.115,4.115,0,0,0,.1,1,1.086,1.086,0,0,0,.261.564.467.467,0,0,0,.4.174,1.15,1.15,0,0,0,.521-.163,2.172,2.172,0,0,0,.521-.434,2.247,2.247,0,0,0,.412-.64,4.343,4.343,0,0,0,.271-.868,5.873,5.873,0,0,0,.1-1.085v-6.144a.836.836,0,0,1,.065-.326.391.391,0,0,1,.163-.217Z", "transform", "translate(-74.458 -13.221)", "fill", "#fafafa"], ["id", "Trazado_235", "data-name", "Trazado 235", "d", "M179.876,242.959a.434.434,0,0,0,0-.239.239.239,0,0,0-.206-.076,2.174,2.174,0,0,0-.4,0l-.619.119a1.292,1.292,0,0,1-.619,0,.814.814,0,0,1-.4-.3,1.5,1.5,0,0,1-.206-.564,4.527,4.527,0,0,1-.054-.8,3.778,3.778,0,0,1,.119-.955,4.525,4.525,0,0,1,.337-.977,4.222,4.222,0,0,1,.554-.868,2.714,2.714,0,0,1,.727-.64,1.878,1.878,0,0,1,.749-.26.912.912,0,0,1,.554.119.922.922,0,0,1,.358.423,1.628,1.628,0,0,1,.141.63.586.586,0,0,1-.065.326.369.369,0,0,1-.163.206l-.651.38q-.13.076-.2,0l-.141-.109a.358.358,0,0,0-.2-.076.89.89,0,0,0-.391.141,1.671,1.671,0,0,0-.445.391.966.966,0,0,0-.2.6.684.684,0,0,0,0,.25.217.217,0,0,0,.185.109,1.478,1.478,0,0,0,.358,0l.608-.119a1.027,1.027,0,0,1,1.085.282,2.3,2.3,0,0,1,.315,1.335,3.811,3.811,0,0,1-.13.955,4.961,4.961,0,0,1-.369.988,4.342,4.342,0,0,1-.6.879,3.071,3.071,0,0,1-.792.662,1.726,1.726,0,0,1-.792.271.966.966,0,0,1-.575-.152,1.085,1.085,0,0,1-.369-.478,1.585,1.585,0,0,1-.13-.651.586.586,0,0,1,.065-.326.391.391,0,0,1,.163-.217l.651-.38q.13-.065.2,0l.141.152a.391.391,0,0,0,.228.119.727.727,0,0,0,.423-.152,2.775,2.775,0,0,0,.271-.174,1.814,1.814,0,0,0,.25-.25,1.085,1.085,0,0,0,.185-.293.641.641,0,0,0,.043-.271Z", "transform", "translate(-73.962 -13.197)", "fill", "#fafafa"], ["id", "Trazado_236", "data-name", "Trazado 236", "d", "M181.71,240.231a10.75,10.75,0,0,1,.141-1.672,8.218,8.218,0,0,1,.423-1.541,5.884,5.884,0,0,1,.651-1.248,2.789,2.789,0,0,1,.868-.814,1.248,1.248,0,0,1,.857-.185,1.085,1.085,0,0,1,.651.456,2.551,2.551,0,0,1,.423.977,5.883,5.883,0,0,1,.152,1.379v.695a.716.716,0,0,1-.076.326.467.467,0,0,1-.152.206l-2.833,1.639a1.649,1.649,0,0,0,.076.564.706.706,0,0,0,.217.315.413.413,0,0,0,.315.1,1.086,1.086,0,0,0,.369-.119,1.825,1.825,0,0,0,.434-.358,1.736,1.736,0,0,0,.282-.412,2.866,2.866,0,0,1,.152-.25.694.694,0,0,1,.163-.141l.673-.391a.152.152,0,0,1,.174,0,.358.358,0,0,1,0,.261,2.236,2.236,0,0,1-.13.619,4.634,4.634,0,0,1-.369.858,4.982,4.982,0,0,1-.608.89,3.007,3.007,0,0,1-.825.706,1.313,1.313,0,0,1-.868.206.988.988,0,0,1-.651-.456,2.876,2.876,0,0,1-.423-1.085,8.1,8.1,0,0,1-.087-1.52Zm2.084-3.463a1.389,1.389,0,0,0-.423.369,2.313,2.313,0,0,0-.293.5,3.432,3.432,0,0,0-.185.564,3.18,3.18,0,0,0-.076.521l1.91-1.085a3.151,3.151,0,0,0-.065-.445.771.771,0,0,0-.152-.358.412.412,0,0,0-.271-.174.662.662,0,0,0-.445.109Z", "transform", "translate(-73.582 -13.422)", "fill", "#fafafa"], ["id", "Trazado_237", "data-name", "Trazado 237", "d", "M188.852,234a1.726,1.726,0,0,0-.738.814,3.756,3.756,0,0,0-.228,1.444v3.918a.869.869,0,0,1-.065.326.412.412,0,0,1-.163.206l-.64.38a.119.119,0,0,1-.163,0,.4.4,0,0,1-.065-.25v-7.023a.868.868,0,0,1,.065-.326.445.445,0,0,1,.163-.217l.64-.369a.119.119,0,0,1,.163,0,.369.369,0,0,1,.065.239v.347a5.178,5.178,0,0,1,.478-.825,1.975,1.975,0,0,1,.651-.575l.391-.217a.1.1,0,0,1,.152,0,.347.347,0,0,1,.076.25v.977a.717.717,0,0,1-.076.326.467.467,0,0,1-.152.206Z", "transform", "translate(-73.147 -13.671)", "fill", "#fafafa"], ["id", "Trazado_238", "data-name", "Trazado 238", "d", "M196.46,233.886a.119.119,0,0,1,.163,0,.4.4,0,0,1,.065.25v1.085a.869.869,0,0,1-.065.326.413.413,0,0,1-.163.206l-3.712,2.171a.119.119,0,0,1-.163,0,.369.369,0,0,1-.065-.239v-9.769a.781.781,0,0,1,.065-.315.391.391,0,0,1,.163-.217l.684-.4a.119.119,0,0,1,.163,0,.38.38,0,0,1,.065.25v8.26Z", "transform", "translate(-72.658 -14.089)", "fill", "#fafafa"], ["id", "Trazado_239", "data-name", "Trazado 239", "d", "M199.388,225.958a1.455,1.455,0,0,1,.836-.228,1,1,0,0,1,.662.326,2.084,2.084,0,0,1,.434.8,4.646,4.646,0,0,1,.2,1.183c0,.1,0,.206,0,.347v1.237a7.749,7.749,0,0,1-.2,1.411,6.948,6.948,0,0,1-.434,1.292,4.917,4.917,0,0,1-.662,1.085,2.953,2.953,0,0,1-.836.738,1.357,1.357,0,0,1-.847.228.988.988,0,0,1-.651-.326,1.964,1.964,0,0,1-.434-.792,4.56,4.56,0,0,1-.2-1.183,2.855,2.855,0,0,1,0-.326c0-.141,0-.271,0-.413v-.423a3.388,3.388,0,0,1,0-.358,6.892,6.892,0,0,1,.184-1.411,6.805,6.805,0,0,1,.445-1.3,5.048,5.048,0,0,1,.651-1.085,2.888,2.888,0,0,1,.847-.8Zm1.02,2.8a2.247,2.247,0,0,0-.119-.706.727.727,0,0,0-.239-.347.412.412,0,0,0-.315-.065.76.76,0,0,0-.347.13,1.313,1.313,0,0,0-.347.271,1.651,1.651,0,0,0-.315.423,2.378,2.378,0,0,0-.239.63,4.624,4.624,0,0,0-.13.847V231.3a2.475,2.475,0,0,0,.13.706.619.619,0,0,0,.239.347.412.412,0,0,0,.315.076,1.021,1.021,0,0,0,.347-.141,1.814,1.814,0,0,0,.347-.261,2.042,2.042,0,0,0,.315-.434,2.637,2.637,0,0,0,.239-.63,3.691,3.691,0,0,0,.119-.847,2.277,2.277,0,0,0,0-.293v-.771A2.279,2.279,0,0,0,200.408,228.758Z", "transform", "translate(-72.253 -14.193)", "fill", "#fafafa"], ["id", "Trazado_240", "data-name", "Trazado 240", "d", "M204.407,232.616a1.757,1.757,0,0,0,.369-.3,2.768,2.768,0,0,0,.336-.51,3.484,3.484,0,0,0,.25-.673,3.363,3.363,0,0,0,.1-.825v-.554a3.082,3.082,0,0,1-.185.391,2.442,2.442,0,0,1-.261.456,3.408,3.408,0,0,1-.369.434,1.91,1.91,0,0,1-.467.358,1,1,0,0,1-.771.152,1.085,1.085,0,0,1-.586-.445,3.257,3.257,0,0,1-.38-.912,6.121,6.121,0,0,1-.152-1.237c0-.152,0-.326,0-.532v-.532a9.171,9.171,0,0,1,.152-1.422,9.334,9.334,0,0,1,.38-1.346,5.253,5.253,0,0,1,.586-1.085,2.594,2.594,0,0,1,.771-.738,1.248,1.248,0,0,1,.467-.174.825.825,0,0,1,.369,0,.6.6,0,0,1,.261.141,1.019,1.019,0,0,1,.185.2v-.38a.835.835,0,0,1,.065-.326.391.391,0,0,1,.163-.217l.64-.369a.109.109,0,0,1,.163,0,.4.4,0,0,1,.076.25v7.066a7.446,7.446,0,0,1-.575,3.083,3.886,3.886,0,0,1-1.585,1.845,1.824,1.824,0,0,1-.8.261,1.162,1.162,0,0,1-.64-.174,1.379,1.379,0,0,1-.434-.521,2.172,2.172,0,0,1-.174-.781.586.586,0,0,1,.065-.326.445.445,0,0,1,.163-.217l.575-.326h.206a1.086,1.086,0,0,1,.141.185.532.532,0,0,0,.3.25.879.879,0,0,0,.6-.141Zm-1.02-5.264v.847a1.845,1.845,0,0,0,.347,1.216.532.532,0,0,0,.695,0,1.835,1.835,0,0,0,.706-.836,4.038,4.038,0,0,0,.326-1.444v-1.151a1.682,1.682,0,0,0-.326-1.085.543.543,0,0,0-.706-.054,1.856,1.856,0,0,0-.695.847,4.049,4.049,0,0,0-.347,1.661Z", "transform", "translate(-71.823 -14.501)", "fill", "#fafafa"], ["id", "Trazado_241", "data-name", "Trazado 241", "d", "M208.616,218.063a.119.119,0,0,1,.163,0,.369.369,0,0,1,.065.239v1.183a.869.869,0,0,1-.065.326.619.619,0,0,1-.163.217l-.727.412a.109.109,0,0,1-.163,0,.4.4,0,0,1-.076-.25v-1.107a.792.792,0,0,1,.076-.326.391.391,0,0,1,.163-.217Zm.185,10.192a.869.869,0,0,1-.065.326.565.565,0,0,1-.163.206l-.64.38a.119.119,0,0,1-.163,0,.326.326,0,0,1-.076-.25v-7.023a.716.716,0,0,1,.076-.326.369.369,0,0,1,.163-.206l.64-.38a.119.119,0,0,1,.163,0,.38.38,0,0,1,.065.25Z", "transform", "translate(-71.365 -14.851)", "fill", "#fafafa"], ["id", "Trazado_242", "data-name", "Trazado 242", "d", "M214.324,224.933a.869.869,0,0,1-.065.326.445.445,0,0,1-.163.217l-.651.369a.109.109,0,0,1-.152,0,.315.315,0,0,1-.054-.26v-3.832a2.811,2.811,0,0,0-.228-1.313c-.163-.271-.4-.315-.738-.119a1.769,1.769,0,0,0-.706.955,4.471,4.471,0,0,0-.261,1.6v3.8a.792.792,0,0,1-.065.326.391.391,0,0,1-.163.217l-.64.369a.109.109,0,0,1-.163,0,.4.4,0,0,1-.065-.25v-7.023a.868.868,0,0,1,.065-.326.391.391,0,0,1,.163-.217l.64-.369a.119.119,0,0,1,.163,0,.4.4,0,0,1,.065.25v.347a5.591,5.591,0,0,1,.521-.944,2.171,2.171,0,0,1,.706-.662,1.183,1.183,0,0,1,.857-.217.912.912,0,0,1,.564.445,2.822,2.822,0,0,1,.3.955,9.421,9.421,0,0,1,.087,1.292Z", "transform", "translate(-71.146 -14.84)", "fill", "#fafafa"], ["id", "Trazado_243", "data-name", "Trazado 243", "d", "M265.3,197.249l-10.551,6.089,1.639-14.784c-1.259-.673-2.073-2.312-2.073-4.667,0-4.2,2.562-9.074,5.71-10.855s5.7.119,5.7,4.342a14.35,14.35,0,0,1-2.062,7.045Z", "transform", "translate(-67.376 -18.754)", "fill", "#455a64"], ["id", "Trazado_244", "data-name", "Trazado 244", "d", "M265.271,195.711l-9.281-5.351L254.72,201.8Z", "transform", "translate(-67.342 -17.216)", "fill", "#37474f"], ["id", "Trazado_245", "data-name", "Trazado 245", "d", "M259.963,172.994a12.428,12.428,0,0,0-4.863,6.458l8.5,4.906h0a14.35,14.35,0,0,0,2.062-7.045C265.661,173.113,263.111,171.181,259.963,172.994Z", "transform", "translate(-67.31 -18.758)", "fill", "#37474f"], ["id", "Trazado_246", "data-name", "Trazado 246", "d", "M215.04,127.705c-3.615-2.095-8.6-1.791-14.111,1.379-11,6.361-19.929,21.85-19.929,34.518,0,6.383,2.247,10.855,5.872,12.928.944.532,6.068,3.517,7.023,4.07,3.6,2.084,8.586,1.78,14.111-1.389,11.007-6.361,19.929-21.818,19.929-34.518,0-6.35-2.236-10.855-5.84-12.9", "transform", "translate(-73.642 -22.684)", "fill", "#e71f76"], ["id", "Trazado_247", "data-name", "Trazado 247", "d", "M207.449,132.864c-11.007,6.35-19.929,21.807-19.929,34.518s8.922,17.856,19.929,11.506,19.94-21.818,19.929-34.518S218.434,126.5,207.449,132.864Z", "transform", "translate(-73.085 -22.362)", "fill", "#e71f76"], ["id", "Trazado_248", "data-name", "Trazado 248", "d", "M217.732,159.2v1.5a31.966,31.966,0,0,1-11,11.528c-4.288,2.475-8.163,2.735-11.007,1.161v-3.007a19.538,19.538,0,0,1,8.977-15.576l2.9-1.661c2.562-1.487,5.058-1.672,7.012-.543S217.732,156.147,217.732,159.2Z", "transform", "translate(-72.383 -20.505)", "fill", "#e71f76"], ["id", "Trazado_249", "data-name", "Trazado 249", "d", "M214.812,127.7l7.055,4.092c-3.6-2.095-8.586-1.791-14.111,1.389-7.207,4.157-13.525,12.222-17.02,20.863l-7.066-4.092c3.506-8.684,9.769-16.705,17.02-20.873C206.226,125.967,211.165,125.609,214.812,127.7Z", "transform", "translate(-73.414 -22.683)", "fill", "#b21b63", "opacity", "0.4"], ["id", "Trazado_250", "data-name", "Trazado 250", "d", "M193.656,177.505l-6.762-3.919c-3.625-2.062-5.883-6.513-5.883-12.917l7.066,4.1C188.076,170.971,190.2,175.367,193.656,177.505Z", "transform", "translate(-73.641 -19.753)", "fill", "#a51c5e", "opacity", "0.2"], ["id", "Trazado_251", "data-name", "Trazado 251", "d", "M183.92,148.1l7.066,4.092a37.035,37.035,0,0,0-2.909,13.655h0l-7.077-4.1A37.155,37.155,0,0,1,183.92,148.1Z", "transform", "translate(-73.642 -20.827)", "fill", "#e71f76", "opacity", "0.1"], ["id", "Trazado_252", "data-name", "Trazado 252", "d", "M203.886,153.64a3.745,3.745,0,0,1-1.91-.5,4.689,4.689,0,0,1-2.084-4.342,12.418,12.418,0,0,1,5.688-9.856h0a4.266,4.266,0,0,1,6.871,3.962,12.407,12.407,0,0,1-5.7,9.856,5.742,5.742,0,0,1-2.866.879Z", "transform", "translate(-72.029 -21.689)", "fill", "#aa1d61"], ["id", "Trazado_253", "data-name", "Trazado 253", "d", "M214.616,152.6c-1.954-1.085-4.45-.944-7.012.543l-2.9,1.661a19.538,19.538,0,0,0-8.966,15.533v3.007c2.844,1.574,6.719,1.313,11.007-1.161a31.967,31.967,0,0,0,10.985-11.484v-1.454C217.731,156.145,216.646,153.747,214.616,152.6Z", "transform", "translate(-72.382 -20.504)", "fill", "#aa1d61"], ["id", "Plants", "transform", "translate(454.493 314.191)"], ["id", "Plants-2", "data-name", "Plants"], ["id", "Trazado_254", "data-name", "Trazado 254", "d", "M418.71,328.624s1.444-12.678,7.75-22.512,14.969-15.978,23.055-16.618,14.621,6.795,5.97,11.94-24.021,10.312-31.1,29.416Z", "transform", "translate(-418.71 -289.454)", "fill", "#e71f76"], ["id", "Trazado_255", "data-name", "Trazado 255", "d", "M418.71,328.624s1.444-12.678,7.75-22.512,14.969-15.978,23.055-16.618,14.621,6.795,5.97,11.94-24.021,10.312-31.1,29.416Z", "transform", "translate(-418.71 -289.454)", "fill", "#e71f76", "opacity", "0.1"], ["id", "Trazado_256", "data-name", "Trazado 256", "d", "M420.928,325.033h-.087a.423.423,0,0,1-.239-.554c8.532-21.014,24.77-29.785,32.173-31.478a.429.429,0,1,1,.2.836c-7.251,1.672-23.175,10.29-31.565,30.979a.445.445,0,0,1-.478.217Z", "transform", "translate(-418.551 -289.152)", "fill", "#fff"], ["id", "Trazado_257", "data-name", "Trazado 257", "d", "M464.022,323.6c-.727,1.65-2.529,2.507-4.2,3.18s-3.5,1.4-4.407,2.963c-1.824,3.148,1.172,7.6-.782,10.648a5.655,5.655,0,0,1-3.853,2.236,37.174,37.174,0,0,1-3.788.337,13.911,13.911,0,0,1-1.8-.141,8.293,8.293,0,0,0-5.221.554c-2.507,1.411-3.256,4.581-4.8,7.012a11.94,11.94,0,0,1-8.434,5.3c-1.085.152-3.256.347-4.342-.293a.9.9,0,0,1-.239-.152h0c-.152-.185-.358-.412-.445-.532a.472.472,0,0,1,0-.076c-.445-1.628.282-3.332.315-5.026v-.3c-.076-1.965-.13-3.908-.174-5.872-.087-3.6-.13-7.207-.109-10.855,0-2.345-.26-4.906.738-7.11,1.085-2.431,3.821-2.486,4.852-4.863.412-.944.63-1.965,1.031-2.92a8.38,8.38,0,0,1,7.142-4.993c4.765-.239,9.042,3.615,13.8,3.256,1.227-.1,2.431-.478,3.647-.695,3.853-.727,8.315.38,10.486,3.636a4.993,4.993,0,0,1,.586,4.711Z", "transform", "translate(-418.466 -287.469)", "fill", "#e71f76"], ["id", "Trazado_258", "data-name", "Trazado 258", "d", "M421.283,346.638h0a.4.4,0,0,1-.282-.445c6.578-24.694,32.564-28.222,38.675-27.82a.412.412,0,0,1-.054.814c-5.959-.434-31.4,3.061-37.839,27.212a.4.4,0,0,1-.5.239Z", "transform", "translate(-418.515 -286.985)", "fill", "#fff"], ["id", "Trazado_259", "data-name", "Trazado 259", "d", "M449.337,333.379a.478.478,0,0,1-.217-.119,21.633,21.633,0,0,0-17.7-4.982.412.412,0,0,1-.456-.347.4.4,0,0,1,.336-.456,22.458,22.458,0,0,1,18.453,5.21.4.4,0,0,1,0,.575.413.413,0,0,1-.412.119Z", "transform", "translate(-417.663 -286.232)", "fill", "#fff"], ["id", "Clouds", "transform", "translate(390.277 42.989)"], ["id", "Clouds-2", "data-name", "Clouds"], ["id", "Trazado_260", "data-name", "Trazado 260", "d", "M364.033,51.865l3.452,1.324v-7.6c0-6.035,4.809-7.479,10.03-4.461h0c5.232,3.018,9.465,10.355,9.465,16.38V58.6a5.091,5.091,0,0,1,4.342.684h0a15.023,15.023,0,0,1,6.806,11.788v.5l4.819,2.779a9.921,9.921,0,0,1,4.483,7.772c0,2.855-2.008,4.016-4.483,2.583l-38.914-22.48a9.889,9.889,0,0,1-4.483-7.772C359.55,51.594,361.547,50.433,364.033,51.865Z", "transform", "translate(-359.55 -39.604)", "fill", "#e6e6e6"], ["id", "Trazado_261", "data-name", "Trazado 261", "d", "M406.493,45.63l6.22,3.615a7.365,7.365,0,0,1-.054-.836V46.6c0-3.256,2.269-4.537,5.058-2.92a9.91,9.91,0,0,1,3.018,2.9c.456-4.06,3.647-5.568,7.511-3.332a16.738,16.738,0,0,1,7.6,13.112v2.714a7.087,7.087,0,0,1-.64,3.148l5.2,3.007a6.2,6.2,0,0,1,2.811,4.863c0,1.791-1.259,2.518-2.811,1.617L406.471,52.164A6.2,6.2,0,0,1,403.66,47.3C403.682,45.456,404.941,44.729,406.493,45.63Z", "transform", "translate(-355.78 -39.382)", "fill", "#e6e6e6"], ["id", "Character", "transform", "translate(313.491 158.423)"], ["id", "Character-2", "data-name", "Character"], ["id", "Trazado_262", "data-name", "Trazado 262", "d", "M388.494,198.149c-4.559,7.718-8.944,14.4-12.027,17.617-5.851,2.724-19.592,6.9-24.966,7.6a3.962,3.962,0,0,1-2.692-.63c-2.117-1.389-3.756-1.617-5.981-2.388-1.748-.6-2.486-1.433-2.811-1.085a1.986,1.986,0,0,0,.185,2.768,14.674,14.674,0,0,0,2.779,2.041,16.282,16.282,0,0,1-7.273.13c-4.667-1.216-6.838.955-3.723,6.057,1.085,1.813,5.558,4.7,14.556,3.919a77.063,77.063,0,0,0,9.552-1.085c8.619-1.834,18.2-3.625,24.108-5.427a15.3,15.3,0,0,0,5.72-3.962c9.91-11.31,13.2-19.354,17.541-26.681l-.369-11.94C396.059,184.852,392.3,191.7,388.494,198.149Z", "transform", "translate(-285.245 -142.607)", "fill", "#ffa8a7"], ["id", "Trazado_263", "data-name", "Trazado 263", "d", "M400.387,184.879a11.3,11.3,0,0,0-10.746,4.591c-4.819,6.176-13.351,21-13.351,21s2.79,7.435,10.323,8.684l12.157-16.369S404.447,191.533,400.387,184.879Z", "transform", "translate(-281.334 -142.633)", "fill", "#5c4e9a"], ["id", "Rect\u00E1ngulo_14", "data-name", "Rect\u00E1ngulo 14", "width", "7.891", "height", "14.068", "transform", "translate(137.332 208.929)", "fill", "#ffa8a7"], ["id", "Trazado_264", "data-name", "Trazado 264", "d", "M398.052,338.912l-7.88.282-.4-14.892,8.282-.282Z", "transform", "translate(-280.182 -130.732)", "fill", "#ffa8a7"], ["id", "Trazado_265", "data-name", "Trazado 265", "d", "M426.9,226.249c0,7.848-1.151,70.989-1.151,70.989.185,2.258,2.171,6.415,1.769,15.088-.6,11.777-1.389,42.734-1.389,42.734a10.03,10.03,0,0,1-8.781.174s-6.4-43.418-7.815-55.044c-1.227-10.192-4.342-43.983-4.342-43.983l-4.277,39.88a48.561,48.561,0,0,1,.977,13.026c-.369,5.427-2.909,33.519-2.909,33.519a10.4,10.4,0,0,1-9.107.727s-4.494-42.333-4.581-47.3c-.109-5.644,2.627-69.925,2.627-69.925Z", "transform", "translate(-280.565 -139.098)", "fill", "#37474f"], ["id", "Trazado_266", "data-name", "Trazado 266", "d", "M416.312,347.747v-1.172c-.76.336-2.507,7.305-5.634,10.279-2.5,2.366-5.883,5.1-6.752,7.728s4.722,4.255,7.055,3.832c2.7-.5,7.381-2.486,8.553-4.342s1.726-4.548,2.681-5.894,3.159-2.844,3.669-4.407c.293-.847,0-2.725-.445-4.342s-.76-3.05-1.237-2.909v.89a6.068,6.068,0,0,1-3.951,1.389C419.1,348.9,416.3,348.659,416.312,347.747Z", "transform", "translate(-278.98 -128.81)", "fill", "#263238"], ["id", "Trazado_267", "data-name", "Trazado 267", "d", "M391.537,335.7c-.412,0-.749.619-1.65,1.639a17.149,17.149,0,0,1-4.635,3.473c-2.952,1.541-8.684,3.908-11.3,5.134-1.628.76-1.541,2.8.13,3.962s5.731,2.008,10.594.868c2.659-.619,6.1-3.17,8.293-3.028s6.263.109,7.88-1.085.966-3.625.51-5.753c-.5-2.323-1.085-5.937-1.856-5.775v.8c-.944,1.487-5.84,2.106-7.924,1Z", "transform", "translate(-281.634 -129.783)", "fill", "#263238"], ["id", "Trazado_268", "data-name", "Trazado 268", "d", "M404.446,254.353a28.9,28.9,0,0,1-11-6.513s2.171,4.125,8.423,7.978l-1.313,35.614Z", "transform", "translate(-279.868 -137.243)", "fill", "#263238"], ["id", "Trazado_269", "data-name", "Trazado 269", "d", "M422.356,186.092s6.513,1.5,6.046,13.264l-1.357,18.735v28.113c-5.8,6.513-31.478,6.089-40.325-.532,0,0,1-33.269,1.6-46.067.423-9.107,2.518-13.688,11.462-14.686l11,.478Z", "transform", "translate(-280.443 -142.62)", "fill", "#e71f76"], ["id", "Trazado_270", "data-name", "Trazado 270", "d", "M413.809,164.393a12.005,12.005,0,0,1-11.745,12.233c-6.513,0-10.334-5.634-11.745-12.233-2.594-12.081,5.254-12.233,11.745-12.233a11.994,11.994,0,0,1,11.745,12.233Z", "transform", "translate(-280.178 -145.419)", "fill", "#263238"], ["id", "Trazado_271", "data-name", "Trazado 271", "d", "M417.81,168s-1.8,8.814-2.529,10.258a3.832,3.832,0,0,1-2.171,1.856l.13-6.2Z", "transform", "translate(-278.187 -144.066)", "fill", "#263238"], ["id", "Trazado_272", "data-name", "Trazado 272", "d", "M415.439,156.351s1.292-.315,2.67,1.824c1.172,1.834,1.444,5.97-.4,10.855l-3.4.4Z", "transform", "translate(-278.085 -145.063)", "fill", "#263238"], ["id", "Trazado_273", "data-name", "Trazado 273", "d", "M416.5,158.165l4.168.076a1.965,1.965,0,0,0-1.9-2.171A2.312,2.312,0,0,0,416.5,158.165Z", "transform", "translate(-277.898 -145.085)", "fill", "#263238"], ["id", "Trazado_274", "data-name", "Trazado 274", "d", "M417.041,157.379l3.083-2.963a1.986,1.986,0,0,0-2.92-.119A2.279,2.279,0,0,0,417.041,157.379Z", "transform", "translate(-277.896 -145.287)", "fill", "#263238"], ["id", "Trazado_275", "data-name", "Trazado 275", "d", "M415.275,169.814c.684.423,1.65-.934,2.5-1.845s3.473-1.78,4.841,1.216-.966,5.959-2.92,6.936c-3.506,1.737-4.613-.792-4.613-.792l-.282,13.959c-4.939,7.6-16.119,7.359-12.092-.369v-4.244a22.793,22.793,0,0,1-5.015.271c-2.735-.445-4.45-2.692-5.275-5.775-1.335-4.95-1.845-8.944-.716-18.67,1.237-10.67,13.156-10.779,19.538-6.567S415.275,169.814,415.275,169.814Z", "transform", "translate(-280.07 -145.489)", "fill", "#ffa8a7"], ["id", "Trazado_276", "data-name", "Trazado 276", "d", "M400.7,159.29c2.844-.282,5.655-.857,8.51-1.085a5.839,5.839,0,0,1,1.845.087c2.171.6,1.91,3.137,2.258,4.906.6,3.061,1.085,8.239,2.236,8.26.347,0,1.65-2.236,2.5-3.039a4.516,4.516,0,0,0,.76-2.334c.217-1.27.326-2.551.423-3.832.087-1.085.2-2.171.2-3.256a15.328,15.328,0,0,0-.293-3.658,6.394,6.394,0,0,0-1.52-2.735l-.217-.239a14.4,14.4,0,0,0-5.091-3.43,30.74,30.74,0,0,0-8.619-1.867,87.725,87.725,0,0,1-8.781-1.085,1.02,1.02,0,0,0-.51,0,.8.8,0,0,0-.412.651,3.625,3.625,0,0,0,1.465,3.582c-1.965.152-4.222-.868-6.111-1.379a1.238,1.238,0,0,0-.966,0,.955.955,0,0,0-.38.554,3.5,3.5,0,0,0-.054,1.574,8.987,8.987,0,0,0,1.693,4.342,10.713,10.713,0,0,0,5.861,3.842,17.106,17.106,0,0,0,5.21.141Z", "transform", "translate(-280.344 -145.95)", "fill", "#263238"], ["id", "Trazado_277", "data-name", "Trazado 277", "d", "M401.8,182.483s6.1-1.281,8.228-2.464a7.186,7.186,0,0,0,2.952-3.039,10.148,10.148,0,0,1-1.682,3.582c-1.552,2.084-9.5,3.615-9.5,3.615Z", "transform", "translate(-279.154 -143.298)", "fill", "#f28f8f"], ["id", "Trazado_278", "data-name", "Trazado 278", "d", "M403.15,167a1.259,1.259,0,0,0,1.216,1.313A1.324,1.324,0,1,0,403.15,167Z", "transform", "translate(-279.039 -144.265)", "fill", "#263238"], ["id", "Trazado_279", "data-name", "Trazado 279", "d", "M405,162.067l2.605,1.509A1.661,1.661,0,0,0,407,161.4a1.422,1.422,0,0,0-2,.662Z", "transform", "translate(-278.881 -144.645)", "fill", "#263238"], ["id", "Trazado_280", "data-name", "Trazado 280", "d", "M402.52,175l-2.79,1.085a1.455,1.455,0,0,0,1.9.955,1.628,1.628,0,0,0,.89-2.041Z", "transform", "translate(-279.331 -143.468)", "fill", "#f28f8f"], ["id", "Trazado_281", "data-name", "Trazado 281", "d", "M392.833,163.271l2.388-1.91a1.411,1.411,0,0,0-2.073-.326,1.693,1.693,0,0,0-.315,2.236Z", "transform", "translate(-279.945 -144.688)", "fill", "#263238"], ["id", "Trazado_282", "data-name", "Trazado 282", "d", "M393.78,166.664a1.227,1.227,0,1,0,1.227-1.324,1.27,1.27,0,0,0-1.227,1.324Z", "transform", "translate(-279.839 -144.293)", "fill", "#263238"], ["id", "Trazado_283", "data-name", "Trazado 283", "d", "M400.166,165.62l-.141,7.728-4.385-1.009Z", "transform", "translate(-279.68 -144.269)", "fill", "#f28f8f"], ["id", "Trazado_284", "data-name", "Trazado 284", "d", "M303.87,225.737l6.806-3.929,2.692-3.267-6.795,3.929-2.7,3.267", "transform", "translate(-287.523 -139.747)", "fill", "#27debf"], ["id", "Trazado_285", "data-name", "Trazado 285", "d", "M303.87,225.737l6.806-3.929,2.692-3.267-6.795,3.929-2.7,3.267", "transform", "translate(-287.523 -139.747)", "opacity", "0.4"], ["id", "Trazado_286", "data-name", "Trazado 286", "d", "M320.92,235.715l6.806-3.929,5.677-5.026-6.8,3.929-5.688,5.026", "transform", "translate(-286.066 -139.044)", "fill", "#27debf"], ["id", "Trazado_287", "data-name", "Trazado 287", "d", "M320.92,235.715l6.806-3.929,5.677-5.026-6.8,3.929-5.688,5.026", "transform", "translate(-286.066 -139.044)", "opacity", "0.4"], ["id", "Trazado_288", "data-name", "Trazado 288", "d", "M381.474,252.177a14.35,14.35,0,0,1,2.811,7.392,14.545,14.545,0,0,1-2.811-7.392Zm15.815.206C395,236.8,386.63,221.393,376.665,215.63c-4.787-2.768-9.216-2.866-12.765-.792l-6.4,3.7a2.811,2.811,0,0,0-.358.206c-.282.163-.564.336-.825.521a11.113,11.113,0,0,0-1.476,1.216,2,2,0,0,1-.217.206,8.587,8.587,0,0,0-.586.651,10.4,10.4,0,0,0-.684.836A15.406,15.406,0,0,0,352.1,224.1a11.188,11.188,0,0,0-.554,1.085L295.625,192.9l-6.8,3.919v4.342l.575.336.543.3v.923l-1.085.64v2.529l8.217,17.367,8.119,4.7,2.7-3.256,7.164,4.342,4.114,7.045,4.537,2.616,5.677-5.037,6.969,4.038,2.345,9.661,11.69,6.741a63.7,63.7,0,0,0,2.171,7.262c.076.25.174.488.271.76,3.886,10.214,10.062,18.952,17.031,22.979a18.448,18.448,0,0,0,2.616,1.259,14.5,14.5,0,0,0,1.465.488,11.236,11.236,0,0,0,1.3.293,11.561,11.561,0,0,0,4.146,0l.564-.141a5.085,5.085,0,0,0,.792-.228l.608-.239a4.527,4.527,0,0,0,.619-.282l.586-.3.282-.174a.455.455,0,0,0,.141-.076c1.552-.89,5.373-3.1,6.415-3.691,5.167-3,8.51-10.572,8.51-21.286a55.836,55.836,0,0,0-.63-8.347Z", "transform", "translate(-288.808 -141.938)", "fill", "#27debf"], ["id", "Trazado_289", "data-name", "Trazado 289", "d", "M379.488,265c-2.692-1.541-4.863-6.144-4.863-10.279s2.171-6.22,4.863-4.678,4.852,6.155,4.852,10.29S382.169,266.511,379.488,265Zm11.007-9.02c-2.29-15.565-10.659-30.968-20.624-36.732-4.624-2.67-8.9-2.866-12.374-1.02a2.807,2.807,0,0,0-.358.206c-.282.163-.564.336-.825.521a11.112,11.112,0,0,0-1.476,1.216,2,2,0,0,1-.217.206,8.568,8.568,0,0,0-.586.651,10.392,10.392,0,0,0-.684.836,15.4,15.4,0,0,0-1.248,1.921,11.181,11.181,0,0,0-.554,1.085,26.55,26.55,0,0,0-2.171,6.61L288.82,196.51v4.342l.575.337.543.3v.923l-1.085.64v2.529l8.217,17.367,8.119,4.7,2.7-3.256,7.164,4.342,4.114,7.045,4.537,2.616,5.677-5.037,6.969,4.038,2.345,9.661,11.69,6.741a63.706,63.706,0,0,0,2.171,7.262c.076.25.174.488.271.76,3.886,10.214,10.062,18.952,17.031,22.979a18.448,18.448,0,0,0,2.616,1.259,14.5,14.5,0,0,0,1.465.488,11.236,11.236,0,0,0,1.3.293,11.562,11.562,0,0,0,4.146,0l.564-.141a5.084,5.084,0,0,0,.792-.228l.608-.239a4.525,4.525,0,0,0,.619-.282l.586-.3.282-.174a.455.455,0,0,0,.141-.076c4.95-3.126,8.13-10.583,8.13-21.047a57.653,57.653,0,0,0-.619-8.369Z", "transform", "translate(-288.809 -141.629)", "fill", "#e71f76"], ["id", "Trazado_290", "data-name", "Trazado 290", "d", "M377.585,256.149c0,4.136-2.171,6.231-4.852,4.678s-4.863-6.144-4.863-10.279,2.171-6.22,4.863-4.667a6.883,6.883,0,0,1,1.986,1.813,14.523,14.523,0,0,0,2.811,7.4A8.781,8.781,0,0,1,377.585,256.149Z", "transform", "translate(-282.054 -137.454)", "fill", "#3e2669", "opacity", "0.4"], ["id", "Trazado_291", "data-name", "Trazado 291", "d", "M392.5,259.008c0,10.714-3.343,18.29-8.51,21.286-1.085.586-4.863,2.8-6.415,3.691,4.95-3.126,8.13-10.583,8.13-21.047a57.645,57.645,0,0,0-.619-8.26c-2.29-15.565-10.659-30.968-20.624-36.732-4.624-2.67-8.9-2.866-12.374-1.02l6.4-3.7c3.549-2.073,7.978-1.976,12.765.792,9.975,5.764,18.344,21.166,20.624,36.754A55.842,55.842,0,0,1,392.5,259.008Z", "transform", "translate(-283.402 -140.324)", "fill", "#b21b63"], ["id", "Trazado_292", "data-name", "Trazado 292", "d", "M383.7,259.313c0,10.464-3.18,17.921-8.13,21.047,1.552-.89,5.373-3.1,6.415-3.691,5.167-3,8.51-10.572,8.51-21.286V254.2l-6.86,3.919A8.9,8.9,0,0,1,383.7,259.313Z", "transform", "translate(-281.396 -136.699)", "fill", "#e71f76"], ["id", "Trazado_293", "data-name", "Trazado 293", "d", "M383.7,259.313c0,10.464-3.18,17.921-8.13,21.047,1.552-.89,5.373-3.1,6.415-3.691,5.167-3,8.51-10.572,8.51-21.286V254.2l-6.86,3.919A8.9,8.9,0,0,1,383.7,259.313Z", "transform", "translate(-281.396 -136.699)", "fill", "#e71f76", "opacity", "0.1"], ["id", "Trazado_294", "data-name", "Trazado 294", "d", "M349.627,235.523v2.214L288.82,202.623l1.118-.64v-.923Z", "transform", "translate(-288.809 -141.241)", "opacity", "0.15"], ["id", "Trazado_295", "data-name", "Trazado 295", "d", "M349.627,236.363v1.3L288.82,202.551l1.118-.64V201.9Z", "transform", "translate(-288.809 -141.169)", "opacity", "0.15"], ["id", "Elipse_50", "data-name", "Elipse 50", "cx", "16.054", "cy", "30.046", "rx", "16.054", "ry", "30.046", "transform", "translate(56.884 86.357) rotate(-17.06)", "fill", "none", "stroke", "#000", "stroke-miterlimit", "10", "stroke-width", "1", "opacity", "0.15"], ["id", "Trazado_296", "data-name", "Trazado 296", "d", "M351.539,225.152a26.55,26.55,0,0,0-2.171,6.61L288.81,196.788l6.795-3.919Z", "transform", "translate(-288.81 -141.94)", "fill", "#b21b63"], ["id", "Trazado_297", "data-name", "Trazado 297", "d", "M422.925,229.069c3.17-6,6.795-19.538,8.6-26.29,2.562-9.661-1.585-15.739-6.285-15.989-2.952.456-12.646,35.7-12.646,35.7-1.085.857-15.815,8.336-20.548,10.214a3.767,3.767,0,0,1-2.627,0c-2.269-.836-3.821-.673-6.046-.9-1.748-.174-2.627-.792-2.844-.423a1.975,1.975,0,0,0,.847,2.573,14.263,14.263,0,0,0,3.039,1.324,18.355,18.355,0,0,1-5.872.8c-4.559-.109-6.2,1.878-2.659,6.513,2.171,2.887,5.764,3.8,13.785,1.031,2.3-.8,5.427-2.355,8.347-3.408,6.013-2.171,7.6-2.421,12.179-3.984C416.868,233.975,421.513,231.739,422.925,229.069Z", "transform", "translate(-281.533 -142.46)", "fill", "#ffa8a7"], ["id", "Trazado_298", "data-name", "Trazado 298", "d", "M420.323,186c2.768.38,5.427,1.009,7.066,3.256s2.952,5.427,1.346,14.111a134.5,134.5,0,0,1-4.928,17.878s-6.437,2.757-13.3-4.233l4.711-18.214S416.024,186.857,420.323,186Z", "transform", "translate(-278.41 -142.528)", "fill", "#5c4e9a"], ["src", "../../../assets/login/waves.png", "alt", "Primera Ola", "id", "ola1"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "circle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "text", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tspan", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "G");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tspan", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tspan", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tspan", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "AS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tspan", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tspan", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tspan", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "CE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Hay una galaxia de personas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "por conocer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "svg", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "linearGradient", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "stop", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "stop", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "g", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "ellipse", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "ellipse", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "ellipse", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "ellipse", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "ellipse", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "ellipse", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "ellipse", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "ellipse", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "ellipse", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "ellipse", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "ellipse", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "ellipse", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "ellipse", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "ellipse", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "svg", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "linearGradient", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "stop", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "stop", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "g", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "g", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "path", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "path", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "path", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "path", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "path", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "path", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "path", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "path", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "path", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "path", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "svg", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "g", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "g", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "path", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "path", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "g", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "g", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "path", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "path", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "path", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "path", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "path", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "path", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "path", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "path", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "path", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "path", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "path", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "path", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "path", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "path", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "path", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "path", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "path", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "path", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "path", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "path", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "g", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "g", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "g", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "g", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "path", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "path", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "path", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "path", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "path", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "path", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "path", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "path", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "path", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "path", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "path", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "path", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "path", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "path", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "path", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "path", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "path", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "path", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "path", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "path", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "path", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "path", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "path", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "path", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "path", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "path", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "path", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "path", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "path", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "path", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "path", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "path", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "path", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "path", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "g", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "g", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "path", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "path", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "path", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "path", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "path", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "path", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "g", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "g", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "path", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "path", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "g", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "g", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "path", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "path", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "rect", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "path", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "path", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "path", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "path", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "path", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "path", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "path", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "path", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "path", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "path", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "path", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "path", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "path", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "path", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "path", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "path", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "path", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "path", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "path", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "path", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "path", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "path", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "path", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "path", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "path", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "path", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "path", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "path", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "path", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "path", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "path", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "path", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "ellipse", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "path", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "path", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "path", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "img", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".wrapper-morado[_ngcontent-%COMP%]{\n  position: relative;\n  padding: 0;\n  background: radial-gradient(91.75% 91.75% at 90.02% 11.33%, #3E2669 0%, #2A1948 100%);\n  height: 100%;\n}\n.contenedor[_ngcontent-%COMP%]{\n  min-height: 100vh;\n}\n#Capa_2[_ngcontent-%COMP%]{\n  width: 187px;\n  height: 56px;\n  margin-top: 28px;\n  margin-left: 30px;\n\n}\n.container[_ngcontent-%COMP%]{\n  margin: 0;\n}\n.frases[_ngcontent-%COMP%]{\n  margin-top: 50px;\n}\n#frase1[_ngcontent-%COMP%]{\n  font-family: Arial Rounded MT Bold;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 2.5rem;\n  line-height: 58px;\n  text-align: center;\n  color: #FFFFFF;\n\n  opacity: 0.74;\n}\n#frase2[_ngcontent-%COMP%]{\nfont-family: Arial Rounded MT Bold;\nfont-style: normal;\nfont-weight: normal;\nfont-size: 2.5rem;\nline-height: 58px;\ntext-align: center;\ncolor: #FFFFFF;\n}\n#planeta1[_ngcontent-%COMP%]{\n  margin-top: 5px;\n  margin-left: 50px;\n}\n.imagenes[_ngcontent-%COMP%]{\n  margin-top: 50px;\n}\n#planeta2[_ngcontent-%COMP%]{\n  margin-top: 70px;\n  margin-left: 40px;\n\n}\n#sujeto[_ngcontent-%COMP%]{\n\n  width: 323px;\n  height: 271px;\n}\n#ola1[_ngcontent-%COMP%]{\n  position: absolute;\n  width: 100%;\n  bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHFGQUFxRjtFQUNyRixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCOztBQUVuQjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7O0VBRWQsYUFBYTtBQUNmO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQixjQUFjO0FBQ2Q7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjs7QUFFbkI7QUFDQTs7RUFFRSxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7QUFDYiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXItbW9yYWRve1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCg5MS43NSUgOTEuNzUlIGF0IDkwLjAyJSAxMS4zMyUsICMzRTI2NjkgMCUsICMyQTE5NDggMTAwJSk7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jb250ZW5lZG9ye1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cbiNDYXBhXzJ7XG4gIHdpZHRoOiAxODdweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBtYXJnaW4tdG9wOiAyOHB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcblxufVxuLmNvbnRhaW5lcntcbiAgbWFyZ2luOiAwO1xufVxuLmZyYXNlc3tcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbiNmcmFzZTF7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCBSb3VuZGVkIE1UIEJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiA1OHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjRkZGRkZGO1xuXG4gIG9wYWNpdHk6IDAuNzQ7XG59XG4jZnJhc2Uye1xuZm9udC1mYW1pbHk6IEFyaWFsIFJvdW5kZWQgTVQgQm9sZDtcbmZvbnQtc3R5bGU6IG5vcm1hbDtcbmZvbnQtd2VpZ2h0OiBub3JtYWw7XG5mb250LXNpemU6IDIuNXJlbTtcbmxpbmUtaGVpZ2h0OiA1OHB4O1xudGV4dC1hbGlnbjogY2VudGVyO1xuY29sb3I6ICNGRkZGRkY7XG59XG4jcGxhbmV0YTF7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG4uaW1hZ2VuZXN7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4jcGxhbmV0YTJ7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuXG59XG4jc3VqZXRve1xuXG4gIHdpZHRoOiAzMjNweDtcbiAgaGVpZ2h0OiAyNzFweDtcbn1cbiNvbGExe1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "WJg9":
/*!**************************************************!*\
  !*** ./src/app/guards/notaccessonlogin.guard.ts ***!
  \**************************************************/
/*! exports provided: NotAccessOnLoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAccessOnLoginGuard", function() { return NotAccessOnLoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NotAccessOnLoginGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        let isUserLogged;
        this.authService.checkToken();
        this.authService.isLogged.subscribe((isLogged) => {
            isUserLogged = isLogged;
            console.log(isUserLogged);
        });
        this.redirect(isUserLogged);
        console.log("not access login guard -->", isUserLogged);
        return !isUserLogged;
    }
    redirect(flag) {
        if (flag) {
            this.router.navigate(['/', 'home']);
        }
    }
}
NotAccessOnLoginGuard.ɵfac = function NotAccessOnLoginGuard_Factory(t) { return new (t || NotAccessOnLoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NotAccessOnLoginGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotAccessOnLoginGuard, factory: NotAccessOnLoginGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "YzH7":
/*!***************************************************!*\
  !*** ./src/app/components/post/post.component.ts ***!
  \***************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/post.service */ "ENZJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function PostComponent_div_0_img_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 17);
} if (rf & 2) {
    const post_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", post_r1.picture_post, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PostComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " more_vert ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Editar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " delete_forever ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Eliminar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PostComponent_div_0_img_19_Template, 1, 1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Comentar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " favorite_border ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", post_r1.picture_profile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r1.picture_post);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r1.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "Comentarios " + post_r1.comments_quantity, " ");
} }
class PostComponent {
    constructor(postService) {
        this.postService = postService;
        this.posts = [];
    }
    ngOnInit() {
        this.loadPosts();
    }
    loadPosts() {
        this.posts = this.postService.getPosts();
    }
    reloadPost() {
        this.postService.addMorePost();
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"])); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], decls: 1, vars: 1, consts: [["id", "container-post", 4, "ngFor", "ngForOf"], ["id", "container-post"], [1, "p-4", "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex"], ["alt", "profile-picture-friend", "id", "profile-picture-friend", 1, "img-fluid", 3, "src"], ["id", "name"], [1, "dropdown"], ["type", "button", "id", "dropdown-menu", "data-bs-toggle", "dropdown", "aria-expanded", "false"], [1, "material-icons"], ["aria-labelledby", "dropdown-menu", 1, "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-content-center"], [1, "material-icons", "mr-icon"], ["alt", "picture-post", "id", "picture-post", 3, "src", 4, "ngIf"], ["id", "text-post"], ["id", "container-down-butttons", 1, "m-4", "d-flex", "justify-content-between"], [1, "flat-button"], ["id", "favorite-button"], ["alt", "picture-post", "id", "picture-post", 3, "src"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostComponent_div_0_Template, 31, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["#container-post[_ngcontent-%COMP%]{\r\n    margin-top: 50px;\r\n    background-color: white;\r\n    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.125);\r\n    border-radius: 15px;\r\n}\r\n#profile-picture-friend[_ngcontent-%COMP%]{\r\n    width: 55px;\r\n    height: 55px;\r\n    border-radius: 100%;\r\n}\r\n#name[_ngcontent-%COMP%]{\r\n    font-family: 'Arial';\r\n    color: var(--blueG);\r\n    font-weight: bold;\r\n    margin-top: 15px;\r\n    margin-left: 15px;\r\n}\r\n.dropdown[_ngcontent-%COMP%]{\r\n    position: static;\r\n}\r\n#dropdown-menu[_ngcontent-%COMP%]{\r\n    padding-top: 5px;\r\n    background-color: transparent;\r\n    width: 50px;\r\n    height: 50px;\r\n    color: var(--pinkG);\r\n    border-radius: 100%;\r\n    border: none;\r\n}\r\n#dropdown-menu[_ngcontent-%COMP%]:hover{\r\n    background-color: rgba(255, 192, 203, 0.596);\r\n\r\n}\r\n.dropdown-menu[_ngcontent-%COMP%]{\r\n    border-radius: 10px;\r\n    border: none;    \r\n}\r\nli[_ngcontent-%COMP%]{\r\n    color: gray;\r\n    font-family: 'Arial';\r\n    cursor: pointer;\r\n}\r\n#picture-post[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin-bottom: 30px;\r\n}\r\n#text-post[_ngcontent-%COMP%]{\r\n    font-family: 'Arial';\r\n    color: grey;\r\n    margin-left: 30px;\r\n    margin-right: 30px;\r\n}\r\n.flat-button[_ngcontent-%COMP%]{\r\n    color: var(--pinkG);\r\n    font-family: 'Arial Rounded MT';\r\n    border: none;\r\n    background-color: transparent;\r\n    border-radius: 100px;\r\n}\r\n#container-down-butttons[_ngcontent-%COMP%]{\r\n    padding-bottom: 25px;\r\n}\r\n#favorite-button[_ngcontent-%COMP%]{\r\n    border-radius: 100%;\r\n    width: 50px;\r\n    height: 50px;\r\n    padding-top: 10px;\r\n    border: none;\r\n    color: var(--pinkG);\r\n    background-color: transparent;\r\n}\r\n#favorite-button[_ngcontent-%COMP%]:hover{\r\n    background-color: rgba(255, 192, 203, 0.596);\r\n}\r\n.flat-button[_ngcontent-%COMP%]:hover{\r\n    background-color: rgba(255, 192, 203, 0.596);\r\n}\r\n.mr-icon[_ngcontent-%COMP%]{\r\n    margin-right: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsNkNBQTZDO0lBQzdDLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNENBQTRDOztBQUVoRDtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0Isb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksNENBQTRDO0FBQ2hEO0FBQ0E7SUFDSSw0Q0FBNEM7QUFDaEQ7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJwb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyLXBvc3R7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcbiNwcm9maWxlLXBpY3R1cmUtZnJpZW5ke1xyXG4gICAgd2lkdGg6IDU1cHg7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcbiNuYW1le1xyXG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XHJcbiAgICBjb2xvcjogdmFyKC0tYmx1ZUcpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bntcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbn1cclxuXHJcbiNkcm9wZG93bi1tZW51e1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBjb2xvcjogdmFyKC0tcGlua0cpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4jZHJvcGRvd24tbWVudTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxOTIsIDIwMywgMC41OTYpO1xyXG5cclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnV7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lOyAgICBcclxufVxyXG5saXtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI3BpY3R1cmUtcG9zdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4jdGV4dC1wb3N0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcbi5mbGF0LWJ1dHRvbntcclxuICAgIGNvbG9yOiB2YXIoLS1waW5rRyk7XHJcbiAgICBmb250LWZhbWlseTogJ0FyaWFsIFJvdW5kZWQgTVQnO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxufVxyXG4jY29udGFpbmVyLWRvd24tYnV0dHRvbnN7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxufVxyXG4jZmF2b3JpdGUtYnV0dG9ue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogdmFyKC0tcGlua0cpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuI2Zhdm9yaXRlLWJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxOTIsIDIwMywgMC41OTYpO1xyXG59XHJcbi5mbGF0LWJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxOTIsIDIwMywgMC41OTYpO1xyXG59XHJcbi5tci1pY29ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _components_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/profile-page/profile-page.component */ "ujWA");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profile/profile.component */ "DZ0t");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _components_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/create-post/create-post.component */ "ZcR4");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/search/search.component */ "RZmA");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/contacts/contacts.component */ "MXpY");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/chat/chat.component */ "3tD2");
/* harmony import */ var _components_friends_friends_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/friends/friends.component */ "bFJR");
/* harmony import */ var _components_request_request_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/request/request.component */ "theA");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_login_gen_login_gen_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/login-gen/login-gen.component */ "ao/O");
/* harmony import */ var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/login-form/login-form.component */ "E2xP");
/* harmony import */ var _components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/register-form/register-form.component */ "S0Dq");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/post/post.component */ "YzH7");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ "nAxv");
/* harmony import */ var _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./interceptors/token.interceptor */ "hkG8");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ "fXoL");






























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HTTP_INTERCEPTORS"], useClass: _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_27__["TokenInterceptor"], multi: true }
    ], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClientModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_24__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_28__["AppRoutingModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatNativeDateModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_components_post_post_component__WEBPACK_IMPORTED_MODULE_22__["PostComponent"],
        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_15__["ChatComponent"],
        _components_friends_friends_component__WEBPACK_IMPORTED_MODULE_16__["FriendsComponent"],
        _components_request_request_component__WEBPACK_IMPORTED_MODULE_17__["RequestComponent"],
        _components_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_10__["CreatePostComponent"],
        _components_search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"],
        _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_12__["ContactsComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
        _components_login_gen_login_gen_component__WEBPACK_IMPORTED_MODULE_19__["LoginGenComponent"],
        _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_20__["LoginFormComponent"],
        _components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_21__["RegisterFormComponent"],
        _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_26__["ForgotPasswordComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
        _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
        _components_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_0__["ProfilePageComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClientModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_24__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_28__["AppRoutingModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatNativeDateModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"]] }); })();


/***/ }),

/***/ "ZWT1":
/*!*****************************************************!*\
  !*** ./src/app/services/request-friends.service.ts ***!
  \*****************************************************/
/*! exports provided: RequestFriendsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestFriendsService", function() { return RequestFriendsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class RequestFriendsService {
    constructor(http) {
        this.http = http;
        this.URL = 'https://jsonplaceholder.typicode.com/posts';
    }
    getFriendsRequest() {
        return this.http.get(this.URL);
    }
    addFriend(ide) {
        return this.http.post(`${this.URL}`, JSON.stringify(ide));
    }
    deleteFriend(ide) {
        return this.http.delete(`${this.URL}`);
    }
}
RequestFriendsService.ɵfac = function RequestFriendsService_Factory(t) { return new (t || RequestFriendsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RequestFriendsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RequestFriendsService, factory: RequestFriendsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZcR4":
/*!*****************************************************************!*\
  !*** ./src/app/components/create-post/create-post.component.ts ***!
  \*****************************************************************/
/*! exports provided: CreatePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostComponent", function() { return CreatePostComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/post.service */ "ENZJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");







const _c0 = ["inputPost"];
function CreatePostComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.preview, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function CreatePostComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreatePostComponent_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.deletePhoto(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Quitar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreatePostComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreatePostComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Publicar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r3.postForm.valid);
} }
function CreatePostComponent_mat_spinner_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-spinner", 18);
} }
class CreatePostComponent {
    constructor(fb, postService) {
        this.fb = fb;
        this.postService = postService;
        this.imageForm = new FormData();
        this.postForm = this.fb.group({
            content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
        this.post = {
            name: "My name",
            picture_profile: "https://i.pinimg.com/564x/47/89/37/478937760d6ee8218729f32b7255f070.jpg",
            content: "",
            picture_post: "",
            comments_quantity: 0,
        };
        this.showPostButton = true;
        this.newPost = {
            name: "",
            picture_profile: "",
            content: "",
            comments_quantity: 0,
            picture_post: "",
        };
    }
    ngOnInit() { }
    captureFile(event) {
        this.image = event.target.files[0];
        this.getBase64(this.image);
    }
    deletePhoto() {
        this.image = null;
        this.preview = null;
    }
    setValuesPostForm() {
        this.post.content = this.postForm.get('content').value;
        this.post.picture_post = this.image == null ? "" : this.imageURL;
    }
    cleanUI() {
        this.image == null;
        this.postForm.patchValue({ 'content': "" });
        this.inputPost.nativeElement.style.height = '50px';
        this.deletePhoto();
    }
    showAlert() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Publicación hecha!',
            text: 'Sigue navegado...',
            icon: 'success',
            confirmButtonText: 'Acpetar'
        });
    }
    setNewPost() {
        this.newPost = {
            name: "My name",
            picture_profile: "https://i.pinimg.com/564x/47/89/37/478937760d6ee8218729f32b7255f070.jpg",
            comments_quantity: 0,
            content: this.post.content = this.postForm.get('content').value,
            picture_post: this.imageURL,
        };
        this.postService.posts.unshift(this.newPost);
    }
    createPost() {
        this.setValuesPostForm();
        this.postService.createPost(this.post).subscribe(() => {
            this.setNewPost(),
                this.cleanUI();
            this.showAlert();
            this.showPostButton = true;
        }, (error) => {
            console.log(error);
        });
    }
    createPostWithImage() {
        if (this.image != null) {
            this.imageForm.append('file', this.image != null ? this.image : '');
            this.postService
                .uploadImage(this.imageForm)
                .subscribe((response) => {
                this.imageURL = response.secure_url;
                this.createPost();
            });
        }
    }
    onSubmit() {
        this.showPostButton = false;
        if (this.image != null) {
            this.createPostWithImage();
        }
        else {
            this.createPost();
        }
    }
    //Aditional Methods22
    getBase64(file) {
        let context = this;
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            context.preview = reader.result;
        };
    }
    autoGrowTextZone(e) {
        e.target.style.height = '0px';
        e.target.style.height = e.target.scrollHeight + 25 + 'px';
    }
    autoDeleteGrowTextZone(e) {
        if (e.target.value.length == 1) {
            e.target.style.height = '50px';
        }
    }
}
CreatePostComponent.ɵfac = function CreatePostComponent_Factory(t) { return new (t || CreatePostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"])); };
CreatePostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreatePostComponent, selectors: [["app-create-post"]], viewQuery: function CreatePostComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.inputPost = _t.first);
    } }, decls: 15, vars: 5, consts: [["id", "container-create-post", 1, "p-4"], [3, "formGroup"], [1, "d-flex"], ["src", "https://i.pinimg.com/564x/47/89/37/478937760d6ee8218729f32b7255f070.jpg", "alt", "profile-image", "id", "profile-image", 1, "img-fluid"], ["type", "text", "name", "text-post", "id", "text-post", "formControlName", "content", "placeholder", "Expresa tus pensamientos...", 3, "keypress", "keydown"], ["inputPost", ""], ["id", "container-img", 4, "ngIf"], ["class", "d-flex justify-content-end", 4, "ngIf"], [1, "d-flex", "justify-content-end"], ["for", "input-select-image", "id", "btn-select-img", 1, "d-flex", "justify-content-center", "align-items-center"], [1, "material-icons"], ["id", "input-select-image", "type", "file", "accept", "image/png, image/jpeg", 1, "d-none", 3, "change"], ["id", "btn-create-post", 3, "disabled", "click", 4, "ngIf"], ["diameter", "47", 4, "ngIf"], ["id", "container-img"], ["alt", "image-post", "id", "img-post", 3, "src"], [1, "btn-photo", 3, "click"], ["id", "btn-create-post", 3, "disabled", "click"], ["diameter", "47"]], template: function CreatePostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "textarea", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function CreatePostComponent_Template_textarea_keypress_4_listener($event) { return ctx.autoGrowTextZone($event); })("keydown", function CreatePostComponent_Template_textarea_keydown_4_listener($event) { return ctx.autoDeleteGrowTextZone($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CreatePostComponent_div_6_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CreatePostComponent_div_7_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " image ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CreatePostComponent_Template_input_change_12_listener($event) { return ctx.captureFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CreatePostComponent_button_13_Template, 2, 1, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, CreatePostComponent_mat_spinner_14_Template, 1, 0, "mat-spinner", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.postForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.preview);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.preview);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showPostButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.showPostButton);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatSpinner"]], styles: ["#container-create-post[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    background-color: white;\r\n    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.125);\r\n    border-radius: 15px;\r\n}\r\n#profile-image[_ngcontent-%COMP%]{\r\n    border-radius: 100%;\r\n    width: 55px;\r\n    height: 55px;\r\n    margin-right: 10px;\r\n}\r\n#text-post[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    border: 1px solid gray;\r\n    font-family: 'Arial';\r\n    resize: none;\r\n    display: flex;\r\n    padding: 15px;\r\n    overflow-y: hidden;\r\n    height: 50px;\r\n    border-radius: 1.50rem 1.50rem 1.50rem 1.50rem;\r\n}\r\n#text-post[_ngcontent-%COMP%]:focus{\r\n    outline: none;\r\n}\r\n#btn-select-img[_ngcontent-%COMP%]{\r\n    border: 1px solid var(--pinkG);\r\n    background-color: transparent;\r\n    color: var(--pinkG);\r\n    border-radius: 100%;\r\n    width: 50px;\r\n    height: 50px;\r\n    margin-top: 15px;\r\n    cursor: pointer;\r\n}\r\n#btn-select-img[_ngcontent-%COMP%]:hover{\r\n    background-color: var(--pinkG);\r\n    color: white;\r\n}\r\n#btn-create-post[_ngcontent-%COMP%]{\r\n    margin-top: 15px;\r\n    border: 1px solid var(--pinkG);\r\n    color: var(--pinkG);\r\n    background-color: transparent;\r\n    font-family: 'Arial Rounded MT';\r\n    border-radius: 100px;\r\n    width: 150px;\r\n    height: 50px;\r\n    margin-left: 10px;\r\n}\r\n#btn-create-post[_ngcontent-%COMP%]:hover{\r\n    background-color: var(--pinkG);\r\n    color: white;\r\n}\r\n#labe-select-image[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n#container-img[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n    margin-bottom: 10px;\r\n}\r\n#img-post[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    border-radius: 7.5px;\r\n}\r\n.btn-photo[_ngcontent-%COMP%]{\r\n    background: transparent;\r\n    color: var(--pinkG);\r\n    font-family: 'Arial Rounded MT';\r\n    border: none;\r\n}\r\nmat-spinner[_ngcontent-%COMP%]{\r\n    margin-top: 15px;\r\n    margin-left: 10px;\r\n}\r\n  .mat-progress-spinner circle, .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\r\n    stroke: var(--pinkG);\r\n}\r\n  .swal2-icon.swal2-success [class^=swal2-success-line]{\r\n    background-color: var(--pinkG);\r\n}\r\n  .swal2-icon.swal2-error {\r\n    border-color: var(--pinkG) !important;\r\n}\r\n  .swal2-icon.swal2-success .swal2-success-ring{\r\n    border: 0.25rem solid rgba(255, 31, 68, 0.514);\r\n}\r\n  .swal2-styled.swal2-confirm{\r\n    border-radius: 100px;\r\n    background-color: var(--pinkG);\r\n    outline: none;\r\n    border: none;\r\n    font-family: 'Arial Rounded MT';\r\n}\r\n  .swal2-styled.swal2-confirm:focus{\r\n    outline: none;\r\n}\r\n  .swal2-container.swal2-center>.swal2-popup{\r\n    border-radius: 15px;\r\n}\r\n  .mat-h2, .mat-title[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-family: 'Arial Rounded MT' !important;\r\n    margin: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2Qiw2Q0FBNkM7SUFDN0MsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osOENBQThDO0FBQ2xEO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QiwrQkFBK0I7SUFDL0Isb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiwrQkFBK0I7SUFDL0IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLHFDQUFxQztBQUN6QztBQUVBO0lBQ0ksOENBQThDO0FBQ2xEO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixZQUFZO0lBQ1osK0JBQStCO0FBQ25DO0FBR0E7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyxXQUFXO0FBQ2YiLCJmaWxlIjoiY3JlYXRlLXBvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jY29udGFpbmVyLWNyZWF0ZS1wb3N0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuI3Byb2ZpbGUtaW1hZ2V7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgd2lkdGg6IDU1cHg7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuI3RleHQtcG9zdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxLjUwcmVtIDEuNTByZW0gMS41MHJlbSAxLjUwcmVtO1xyXG59XHJcbiN0ZXh0LXBvc3Q6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbiNidG4tc2VsZWN0LWltZ3tcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXBpbmtHKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHZhcigtLXBpbmtHKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI2J0bi1zZWxlY3QtaW1nOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGlua0cpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiNidG4tY3JlYXRlLXBvc3R7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcGlua0cpO1xyXG4gICAgY29sb3I6IHZhcigtLXBpbmtHKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCBSb3VuZGVkIE1UJztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuI2J0bi1jcmVhdGUtcG9zdDpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmtHKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4jbGFiZS1zZWxlY3QtaW1hZ2V7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI2NvbnRhaW5lci1pbWd7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4jaW1nLXBvc3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDcuNXB4O1xyXG59XHJcbi5idG4tcGhvdG97XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiB2YXIoLS1waW5rRyk7XHJcbiAgICBmb250LWZhbWlseTogJ0FyaWFsIFJvdW5kZWQgTVQnO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbm1hdC1zcGlubmVye1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLCAubWF0LXNwaW5uZXIgY2lyY2xlIHtcclxuICAgIHN0cm9rZTogdmFyKC0tcGlua0cpO1xyXG59XHJcbjo6bmctZGVlcCAuc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmtHKTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIHtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcGlua0cpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLXJpbmd7XHJcbiAgICBib3JkZXI6IDAuMjVyZW0gc29saWQgcmdiYSgyNTUsIDMxLCA2OCwgMC41MTQpO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnN3YWwyLXN0eWxlZC5zd2FsMi1jb25maXJte1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1waW5rRyk7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCBSb3VuZGVkIE1UJztcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCAuc3dhbDItc3R5bGVkLnN3YWwyLWNvbmZpcm06Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXI+LnN3YWwyLXBvcHVwe1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtaDIsIC5tYXQtdGl0bGUsIC5tYXQtdHlwb2dyYXBoeSBoMntcclxuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwgUm91bmRlZCBNVCcgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "ao/O":
/*!*************************************************************!*\
  !*** ./src/app/components/login-gen/login-gen.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginGenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGenComponent", function() { return LoginGenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/login.component */ "W3Zi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../register-form/register-form.component */ "S0Dq");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../login-form/login-form.component */ "E2xP");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../forgot-password/forgot-password.component */ "nAxv");










function LoginGenComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-register-form");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginGenComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-login-form");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginGenComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-forgot-password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class LoginGenComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.login = false;
        this.register = false;
        this.password = false;
    }
    ngOnInit() {
        if (this.router.url === '/register') {
            this.register = true;
        }
        else if (this.router.url === '/login') {
            this.login = true;
        }
        else if (this.router.url === '/reenviar-email') {
            this.login = true;
            this.modalCorreo();
        }
        else {
            this.password = true;
        }
    }
    modalCorreo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { value: email } = yield sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                title: 'Reenviar Email',
                input: 'email',
                inputLabel: 'Ingrese su email',
                inputPlaceholder: 'email'
            });
            if (email) {
                yield this.authService.reenviarCorreo(email).subscribe((data) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                        title: 'Email enviado',
                        text: 'Revise su correo',
                        icon: 'success'
                    }).then(() => {
                        this.router.navigate(['/login']);
                    });
                }, (error) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                        title: 'Error',
                        text: 'Error al enviar el correo',
                        icon: 'error'
                    }).then(() => {
                        this.router.navigate(['/login']);
                    });
                });
            }
        });
    }
}
LoginGenComponent.ɵfac = function LoginGenComponent_Factory(t) { return new (t || LoginGenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
LoginGenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginGenComponent, selectors: [["app-login-gen"]], decls: 5, vars: 3, consts: [[1, "row", "col-12", "contenedor"], [1, "col-xl-7", "col-sm-2", "dise\u00F1o"], ["class", "col form-container", 4, "ngIf"], ["class", "col form-container2", 4, "ngIf"], ["class", "col form-container3", 4, "ngIf"], [1, "col", "form-container"], [1, "col", "form-container2"], [1, "col", "form-container3"]], template: function LoginGenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-login", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, LoginGenComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, LoginGenComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, LoginGenComponent_div_4_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.register);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.password);
    } }, directives: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_7__["RegisterFormComponent"], _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_8__["LoginFormComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"]], styles: [".contenedor[_ngcontent-%COMP%]{\n  min-height: 100vh;\n}\n.form-container[_ngcontent-%COMP%]{\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: -180px;\n}\n.form-container2[_ngcontent-%COMP%]{\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: -120px;\n}\n.form-container3[_ngcontent-%COMP%]{\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: -120px;\n}\n@media (max-width: 1249px) {\n  .dise\u00F1o[_ngcontent-%COMP%]{\n    display: none;\n  }\n  .form-container[_ngcontent-%COMP%]{\n    width: 100%;\n  }\n  .form-container2[_ngcontent-%COMP%]{\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWdlbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJsb2dpbi1nZW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW5lZG9ye1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cbi5mb3JtLWNvbnRhaW5lcntcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IC0xODBweDtcbn1cbi5mb3JtLWNvbnRhaW5lcjJ7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAtMTIwcHg7XG59XG4uZm9ybS1jb250YWluZXIze1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogLTEyMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyNDlweCkge1xuICAuZGlzZcOxb3tcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5mb3JtLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuZm9ybS1jb250YWluZXIye1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ "bFJR":
/*!*********************************************************!*\
  !*** ./src/app/components/friends/friends.component.ts ***!
  \*********************************************************/
/*! exports provided: FriendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsComponent", function() { return FriendsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/chat.service */ "sjK5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function FriendsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Usuario Angel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FriendsComponent_div_8_Template__svg_svg_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const indexOfelement_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.goToChat(indexOfelement_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FriendsComponent {
    constructor(chatServ, router) {
        this.chatServ = chatServ;
        this.router = router;
        this.lista = [
            {
                ide: 4
            }, {
                ide: 5
            }
        ];
    }
    ngOnInit() {
        console.log("identificador", this.lista);
    }
    enviar(id) {
        let ide = id;
        this.chatServ.lista.push(ide);
        console.log(this.chatServ.lista);
    }
    goToChat(ident) {
        let iden;
        iden = this.lista[ident];
        this.router.navigate(['chat', iden.ide]);
        console.log(iden.ide);
    }
}
FriendsComponent.ɵfac = function FriendsComponent_Factory(t) { return new (t || FriendsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
FriendsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FriendsComponent, selectors: [["app-friends"]], decls: 9, vars: 1, consts: [["id", "general", 1, "container"], [1, "d-flex", "justify-content-between", "w-100", "col-lg-12", "d-second"], [1, "d-flex", "col-lg-6"], [1, "p-friends"], [1, "d-flex", "col-lg-6", "justify-content-end"], ["type", "submit", "routerLink", "/request", 1, "b-request"], ["class", "d-friendsList d-flex flex-row p-0", 4, "ngFor", "ngForOf"], [1, "d-friendsList", "d-flex", "flex-row", "p-0"], [1, "col-2", "p-lg-0", "d-userImage"], [1, "d-userImage2"], ["src", "../../../assets/friends/11HISOKA.jpg", "alt", "", 1, "img-fluid", "img-user"], [1, "col-6", "d-userName"], [1, "p-userName"], [1, "col-2", "d-flex", "justify-content-center", "d-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "45.855", "height", "40.95", "viewBox", "0 0 37.855 30.95", "id", "icono", 3, "click"], ["id", "ic_textsms_24px", "d", "M36.07,2H5.786C3.7,2,2.019,3.393,2.019,5.095L2,32.95l7.571-6.19h26.5c2.082,0,3.786-1.393,3.786-3.095V5.095C39.855,3.393,38.152,2,36.07,2ZM15.249,15.927H11.464V12.832h3.786Zm7.571,0H19.035V12.832h3.786Zm7.571,0H26.606V12.832h3.786Z", "transform", "translate(-2 -2)", "fill", "#e71f76"], ["xmlns", "http://www.w3.org/2000/svg", "width", "40.317", "height", "45.95", "viewBox", "0 0 24.317 30.95", "id", "icono2"], ["id", "ic_delete_24px", "d", "M6.737,30.511a3.467,3.467,0,0,0,3.474,3.439h13.9a3.467,3.467,0,0,0,3.474-3.439V9.878H6.737ZM29.317,4.719H23.238L21.5,3H12.816L11.079,4.719H5V8.158H29.317Z", "transform", "translate(-5 -3)", "fill", "#e71f76"]], template: function FriendsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "10 amigos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Solicitudes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FriendsComponent_div_8_Template, 13, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lista);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["*[_ngcontent-%COMP%]{\n    font-family: Arial;\n    padding-top: 1%;\n}\n.d-friendsList[_ngcontent-%COMP%] {\n    margin-top: 5%;\n}\n.d-second[_ngcontent-%COMP%]{\n    margin-bottom: 2%;\n}\n.p-friends[_ngcontent-%COMP%]{\n    font-size:1.5rem;\n    color: #3E2669;\n}\n.b-request[_ngcontent-%COMP%]{\n    font-size:1.5rem;\n    color: #E71F76;\n    border-radius: 50px;\n    width: 170px;\n    border: 2px #E71F76 solid;\n    transition: .4s;\n    font-family: 'Arial Rounded MT';\n}\n.b-request[_ngcontent-%COMP%]:hover{\n    color: #fff;\n    background-color: #E71F76;\n    transition: .4s;\n    cursor:pointer;\n}\n.b-request[_ngcontent-%COMP%]:active{\n    transform: translateY(4px);\n}\n.d-userImage2[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n    width: 90px;\n    height: 90px;\n    border-radius: 50%;\n}\n.img-user[_ngcontent-%COMP%]{\n    width: -moz-fit-content;\n    width: fit-content;\n    border-radius: 100px;\n    transition: .5s;\n    object-fit:cover;\n}\n.p-userName[_ngcontent-%COMP%]{\n    color: #3E2669;\n    font-size: 2.0rem;\n    transition: .5s;\n}\n.d-userName[_ngcontent-%COMP%]{\n    padding-top: 3%;\n}\n.d-icon[_ngcontent-%COMP%]{\n    padding-top: 3%;  \n}\n.p-userName[_ngcontent-%COMP%]{\n    width: -moz-fit-content;\n    width: fit-content;\n}\n.p-userName[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    transform:translateY(3px);\n    transition: .5s;\n}\n.p-userName[_ngcontent-%COMP%]:active{\n    transform: translateY(5px);\n}\n.img-user[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    transform:translateY(3px);\n    transition: .5s;\n}\n.img-user[_ngcontent-%COMP%]:active{\n    transform: translateY(5px);\n}\n#icono[_ngcontent-%COMP%], #icono2[_ngcontent-%COMP%]{\n    cursor: pointer;\n    transition: .5s;\n}\n#icono[_ngcontent-%COMP%]:active{\n    transform: translateY(5px);\n}\n#icono[_ngcontent-%COMP%]:focus{\n    outline: none;\n}\n#icono2[_ngcontent-%COMP%]:active{\n    transform: translateY(5px);\n}\n\n@media (min-width:360px) and (max-width:640px) {\n    .p-friends[_ngcontent-%COMP%]{\n        font-size:1rem;\n    }\n    .d-userImage2[_ngcontent-%COMP%]{\n        display: flex;\n        justify-content: center;\n        width: 50px;\n        height: 40px;\n        border-radius: 50%;\n    }\n    .b-request[_ngcontent-%COMP%]{\n        font-size:0.8rem;\n        width: -moz-fit-content;\n        width: fit-content;\n    }\n    .d-friendsList[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n    .d-userName[_ngcontent-%COMP%]{\n       padding-top: 4%;}\n    .p-userName[_ngcontent-%COMP%]{\n        font-size: .9rem;\n    }\n    .img-user[_ngcontent-%COMP%]{\n        width: 80%;\n    }\n    .d-icon[_ngcontent-%COMP%]{\n        padding-top: 2%;\n    }\n    #icono[_ngcontent-%COMP%]{\n        width: 40%;\n    }\n    #icono2[_ngcontent-%COMP%]{\n        width: 30%;\n    }\n    .p-userName[_ngcontent-%COMP%]{\n        width: -moz-fit-content;\n        width: fit-content;\n    }\n    .p-userName[_ngcontent-%COMP%]:hover{\n        cursor: pointer;\n        transform:none;\n        transition: .5s;\n    }\n    .p-userName[_ngcontent-%COMP%]:active{\n        transform: translateY(5px);\n    }\n    .img-user[_ngcontent-%COMP%]:hover{\n        cursor: pointer;\n        transform:none;\n        transition: .5s;\n    }\n    .img-user[_ngcontent-%COMP%]:active{\n        transform: translateY(5px);\n    }\n    .b-request[_ngcontent-%COMP%]{\n        font-size:1.5rem;\n        color: #E71F76;\n        border-radius: 50px;\n        width: 170px;\n        border: 2px #E71F76 solid;\n        transition: .4s;\n        font-family: 'Arial Rounded MT';\n        background-color: #fff;\n    }\n    .b-request[_ngcontent-%COMP%]:hover{\n        color: #E71F76;\n        background-color: #fff;\n        transition: .4s;\n        cursor:pointer;\n    }\n    .b-request[_ngcontent-%COMP%]:active{\n        transform: translateY(4px);\n        background-color: #E71F76;\n        color: #fff;\n    }\n}\n\n@media (min-width:320px) and (max-width:568px) {\n    .d-userImage2[_ngcontent-%COMP%]{\n        display: flex;\n        justify-content: center;\n        width: 50px;\n        height: 40px;\n        border-radius: 50%;\n    }\n   \n    .p-friends[_ngcontent-%COMP%]{\n        font-size:1rem;\n    }\n    .b-request[_ngcontent-%COMP%]{\n        font-size:0.8rem;\n        width: -moz-fit-content;\n        width: fit-content;\n    }\n    .d-friendsList[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n    .d-userName[_ngcontent-%COMP%]{\n       padding-top: 4%;}\n    .p-userName[_ngcontent-%COMP%]{\n        font-size: .9rem;\n    }\n    .img-user[_ngcontent-%COMP%]{\n        width: 80%;\n    }\n    .d-icon[_ngcontent-%COMP%]{\n        padding-top: 2%;\n    }\n    #icono[_ngcontent-%COMP%]{\n        width: 40%;\n    }\n    #icono2[_ngcontent-%COMP%]{\n        width: 30%;\n    }\n    .p-userName[_ngcontent-%COMP%]{\n        width: -moz-fit-content;\n        width: fit-content;\n    }\n    .p-userName[_ngcontent-%COMP%]:hover{\n        cursor: pointer;\n        transform:none;\n        transition: .5s;\n    }\n    .p-userName[_ngcontent-%COMP%]:active{\n        transform: translateY(5px);\n    }\n    .img-user[_ngcontent-%COMP%]:hover{\n        cursor: pointer;\n        transform:none;\n        transition: .5s;\n    }\n    .img-user[_ngcontent-%COMP%]:active{\n        transform: translateY(5px);\n    }\n}\n\n@media (min-width:768px) and (max-width:1024px) {\n    .d-userImage2[_ngcontent-%COMP%]{\n        display: flex;\n        justify-content: center;\n        width: 60px;\n        height: 60px;\n        border-radius: 50%;\n    }\n   \n    .p-userName[_ngcontent-%COMP%]:hover{\n        cursor: pointer;\n        transform:none;\n        transition: .5s;\n    }\n    .p-userName[_ngcontent-%COMP%]:active{\n        transform: translateY(5px);\n    }\n    .img-user[_ngcontent-%COMP%]:hover{\n        cursor: pointer;\n        transform:none;\n        transition: .5s;\n    }\n    .img-user[_ngcontent-%COMP%]:active{\n        transform: translateY(5px);\n    }\n}\n\n@media (min-width:540px) and (max-width:720px) {\n    .p-userName[_ngcontent-%COMP%]{\n        font-size: 1.3rem;\n    }\n    .d-userImage2[_ngcontent-%COMP%]{\n        display: flex;\n        justify-content: center;\n        width: 60px;\n        height: 50px;\n        border-radius: 50%;\n    }\n   \n}\n\n@media (min-width:1024PX) and (max-width:1200px) {\n    .p-userName[_ngcontent-%COMP%]{\n        font-size: 1.3rem;\n    }\n    .d-userImage2[_ngcontent-%COMP%]{\n        display: flex;\n        justify-content: center;\n        width: 80px;\n        height: 80px;\n        border-radius: 50%;\n    }\n   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixZQUFZLENBQUM7MEJBQ1M7SUFDdEIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSx1QkFBa0I7SUFBbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUVBLDBCQUEwQjtBQUMxQjtJQUNJO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLHVCQUFrQjtRQUFsQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO09BQ0csZUFBZSxDQUFDO0lBQ25CO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSx1QkFBa0I7UUFBbEIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsY0FBYztRQUNkLGVBQWU7SUFDbkI7SUFDQTtRQUNJLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGNBQWM7UUFDZCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLFlBQVksQ0FBQzs4QkFDUztRQUN0Qix5QkFBeUI7UUFDekIsZUFBZTtRQUNmLCtCQUErQjtRQUMvQixzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGNBQWM7UUFDZCxzQkFBc0I7UUFDdEIsZUFBZTtRQUNmLGNBQWM7SUFDbEI7SUFDQTtRQUNJLDBCQUEwQjtRQUMxQix5QkFBeUI7UUFDekIsV0FBVztJQUNmO0FBQ0o7QUFDQSw2QkFBNkI7QUFDN0I7SUFDSTtRQUNJLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsdUJBQWtCO1FBQWxCLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7T0FDRyxlQUFlLENBQUM7SUFDbkI7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLHVCQUFrQjtRQUFsQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGVBQWU7UUFDZixjQUFjO1FBQ2QsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsY0FBYztRQUNkLGVBQWU7SUFDbkI7SUFDQTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKO0FBQ0EsdUJBQXVCO0FBQ3ZCO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGNBQWM7UUFDZCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLGVBQWU7UUFDZixjQUFjO1FBQ2QsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksMEJBQTBCO0lBQzlCO0FBQ0o7QUFDQSw2QkFBNkI7QUFDN0I7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtJQUN0Qjs7QUFFSjtBQUNBLHFCQUFxQjtBQUNyQjtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCOztBQUVKIiwiZmlsZSI6ImZyaWVuZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICAgIHBhZGRpbmctdG9wOiAxJTtcbn1cbi5kLWZyaWVuZHNMaXN0IHtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbn1cbi5kLXNlY29uZHtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbn1cbi5wLWZyaWVuZHN7XG4gICAgZm9udC1zaXplOjEuNXJlbTtcbiAgICBjb2xvcjogIzNFMjY2OTtcbn1cbi5iLXJlcXVlc3R7XG4gICAgZm9udC1zaXplOjEuNXJlbTtcbiAgICBjb2xvcjogI0U3MUY3NjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHdpZHRoOiAxNzBweDsvKiBcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50OyAqL1xuICAgIGJvcmRlcjogMnB4ICNFNzFGNzYgc29saWQ7XG4gICAgdHJhbnNpdGlvbjogLjRzO1xuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwgUm91bmRlZCBNVCc7XG59XG4uYi1yZXF1ZXN0OmhvdmVye1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNzFGNzY7XG4gICAgdHJhbnNpdGlvbjogLjRzO1xuICAgIGN1cnNvcjpwb2ludGVyO1xufVxuLmItcmVxdWVzdDphY3RpdmV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG59XG4uZC11c2VySW1hZ2Uye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5pbWctdXNlcntcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgdHJhbnNpdGlvbjogLjVzO1xuICAgIG9iamVjdC1maXQ6Y292ZXI7XG59XG4ucC11c2VyTmFtZXtcbiAgICBjb2xvcjogIzNFMjY2OTtcbiAgICBmb250LXNpemU6IDIuMHJlbTtcbiAgICB0cmFuc2l0aW9uOiAuNXM7XG59XG4uZC11c2VyTmFtZXtcbiAgICBwYWRkaW5nLXRvcDogMyU7XG59XG4uZC1pY29ue1xuICAgIHBhZGRpbmctdG9wOiAzJTsgIFxufVxuLnAtdXNlck5hbWV7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLnAtdXNlck5hbWU6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKDNweCk7XG4gICAgdHJhbnNpdGlvbjogLjVzO1xufVxuLnAtdXNlck5hbWU6YWN0aXZle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xufVxuLmltZy11c2VyOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgzcHgpO1xuICAgIHRyYW5zaXRpb246IC41cztcbn1cbi5pbWctdXNlcjphY3RpdmV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XG59XG4jaWNvbm8sICNpY29ubzJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IC41cztcbn1cbiNpY29ubzphY3RpdmV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XG59XG4jaWNvbm86Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cbiNpY29ubzI6YWN0aXZle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xufVxuXG4vKk1PVE8gRzQgIDM2MFBYIFRPIDY0MFBYKi9cbkBtZWRpYSAobWluLXdpZHRoOjM2MHB4KSBhbmQgKG1heC13aWR0aDo2NDBweCkge1xuICAgIC5wLWZyaWVuZHN7XG4gICAgICAgIGZvbnQtc2l6ZToxcmVtO1xuICAgIH1cbiAgICAuZC11c2VySW1hZ2Uye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbiAgICAuYi1yZXF1ZXN0e1xuICAgICAgICBmb250LXNpemU6MC44cmVtO1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgfVxuICAgIC5kLWZyaWVuZHNMaXN0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5kLXVzZXJOYW1le1xuICAgICAgIHBhZGRpbmctdG9wOiA0JTt9XG4gICAgLnAtdXNlck5hbWV7XG4gICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgfVxuICAgIC5pbWctdXNlcntcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG4gICAgLmQtaWNvbntcbiAgICAgICAgcGFkZGluZy10b3A6IDIlO1xuICAgIH1cbiAgICAjaWNvbm97XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgfVxuICAgICNpY29ubzJ7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgfVxuICAgIC5wLXVzZXJOYW1le1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgfVxuICAgIC5wLXVzZXJOYW1lOmhvdmVye1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zZm9ybTpub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgfVxuICAgIC5wLXVzZXJOYW1lOmFjdGl2ZXtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XG4gICAgfVxuICAgIC5pbWctdXNlcjpob3ZlcntcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2Zvcm06bm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjogLjVzO1xuICAgIH1cbiAgICAuaW1nLXVzZXI6YWN0aXZle1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcbiAgICB9XG4gICAgLmItcmVxdWVzdHtcbiAgICAgICAgZm9udC1zaXplOjEuNXJlbTtcbiAgICAgICAgY29sb3I6ICNFNzFGNzY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIHdpZHRoOiAxNzBweDsvKiBcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDsgKi9cbiAgICAgICAgYm9yZGVyOiAycHggI0U3MUY3NiBzb2xpZDtcbiAgICAgICAgdHJhbnNpdGlvbjogLjRzO1xuICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsIFJvdW5kZWQgTVQnO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICAuYi1yZXF1ZXN0OmhvdmVye1xuICAgICAgICBjb2xvcjogI0U3MUY3NjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgdHJhbnNpdGlvbjogLjRzO1xuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICB9XG4gICAgLmItcmVxdWVzdDphY3RpdmV7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTcxRjc2O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG59XG4vKklQSE9ORSA1L1NFIDMyMFBYIFRPIDU2OFBYKi9cbkBtZWRpYSAobWluLXdpZHRoOjMyMHB4KSBhbmQgKG1heC13aWR0aDo1NjhweCkge1xuICAgIC5kLXVzZXJJbWFnZTJ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICAgXG4gICAgLnAtZnJpZW5kc3tcbiAgICAgICAgZm9udC1zaXplOjFyZW07XG4gICAgfVxuICAgIC5iLXJlcXVlc3R7XG4gICAgICAgIGZvbnQtc2l6ZTowLjhyZW07XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICB9XG4gICAgLmQtZnJpZW5kc0xpc3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLmQtdXNlck5hbWV7XG4gICAgICAgcGFkZGluZy10b3A6IDQlO31cbiAgICAucC11c2VyTmFtZXtcbiAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICB9XG4gICAgLmltZy11c2Vye1xuICAgICAgICB3aWR0aDogODAlO1xuICAgIH1cbiAgICAuZC1pY29ue1xuICAgICAgICBwYWRkaW5nLXRvcDogMiU7XG4gICAgfVxuICAgICNpY29ub3tcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICB9XG4gICAgI2ljb25vMntcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICB9XG4gICAgLnAtdXNlck5hbWV7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICB9XG4gICAgLnAtdXNlck5hbWU6aG92ZXJ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNmb3JtOm5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IC41cztcbiAgICB9XG4gICAgLnAtdXNlck5hbWU6YWN0aXZle1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcbiAgICB9XG4gICAgLmltZy11c2VyOmhvdmVye1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zZm9ybTpub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgfVxuICAgIC5pbWctdXNlcjphY3RpdmV7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xuICAgIH1cbn1cbi8qSVBBRCA3NDhQWCBUTyAxMDI0UFgqL1xuQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpIGFuZCAobWF4LXdpZHRoOjEwMjRweCkge1xuICAgIC5kLXVzZXJJbWFnZTJ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICAgXG4gICAgLnAtdXNlck5hbWU6aG92ZXJ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNmb3JtOm5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IC41cztcbiAgICB9XG4gICAgLnAtdXNlck5hbWU6YWN0aXZle1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcbiAgICB9XG4gICAgLmltZy11c2VyOmhvdmVye1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zZm9ybTpub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgfVxuICAgIC5pbWctdXNlcjphY3RpdmV7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xuICAgIH1cbn1cbi8qU1VSRkFDRSBEVU8gNTQwUFggVE8gNzIwUFgqL1xuQG1lZGlhIChtaW4td2lkdGg6NTQwcHgpIGFuZCAobWF4LXdpZHRoOjcyMHB4KSB7XG4gICAgLnAtdXNlck5hbWV7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIH1cbiAgICAuZC11c2VySW1hZ2Uye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbiAgIFxufVxuLypJUEFEIFBSTyAxMDI0LTEyNjYqL1xuQG1lZGlhIChtaW4td2lkdGg6MTAyNFBYKSBhbmQgKG1heC13aWR0aDoxMjAwcHgpIHtcbiAgICAucC11c2VyTmFtZXtcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgfVxuICAgIC5kLXVzZXJJbWFnZTJ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICAgXG59XG4iXX0= */"] });


/***/ }),

/***/ "hkG8":
/*!***************************************************!*\
  !*** ./src/app/interceptors/token.interceptor.ts ***!
  \***************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class TokenInterceptor {
    constructor(router) {
        this.router = router;
    }
    intercept(request, next) {
        const token = localStorage.getItem('token_login');
        console.log(token);
        let _request = request;
        if (token) {
            _request = request.clone({
                setHeaders: {
                    authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(_request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
            if (err.status === 401) {
                this.router.navigateByUrl('/login');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(err);
        }));
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



class NavbarComponent {
    constructor() {
        this.outlinedOne = false;
        this.outlinedTwo = false;
        this.outlinedThree = false;
        this.outlinedFour = false;
        this.outlined = false;
        this.favorite = "favorite_border";
    }
    ngOnInit() {
    }
    changeFavorite() {
        this.outlined = !this.outlined;
        this.outlined ? this.favorite = "favorite" : this.favorite = "favorite_border";
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 11, vars: 4, consts: [["id", "navbar-container", 1, "d-flex", "justify-content-around", "align-items-center", "p-3"], ["routerLink", "/profile", 3, "ngClass", "mouseenter", "mouseleave"], [3, "ngClass", "mouseenter", "mouseleave"], ["src", "/assets/logo.png", "alt", "logo", "id", "logo", "routerLink", "/home"], [1, "material-icons", 3, "mouseenter", "mouseleave"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function NavbarComponent_Template_span_mouseenter_2_listener() { return ctx.outlinedOne = true; })("mouseleave", function NavbarComponent_Template_span_mouseleave_2_listener() { return ctx.outlinedOne = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " account_circle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function NavbarComponent_Template_span_mouseenter_4_listener() { return ctx.outlinedTwo = true; })("mouseleave", function NavbarComponent_Template_span_mouseleave_4_listener() { return ctx.outlinedTwo = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " people ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function NavbarComponent_Template_span_mouseenter_7_listener() { return ctx.outlinedThree = true; })("mouseleave", function NavbarComponent_Template_span_mouseleave_7_listener() { return ctx.outlinedThree = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " question_answer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function NavbarComponent_Template_span_mouseenter_9_listener() { return ctx.changeFavorite(); })("mouseleave", function NavbarComponent_Template_span_mouseleave_9_listener() { return ctx.changeFavorite(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.outlinedOne ? "material-icons" : "material-icons-outlined");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.outlinedTwo ? "material-icons" : "material-icons-outlined");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.outlinedThree ? "material-icons" : "material-icons-outlined");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.favorite, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["nav[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    padding: 10px 10px 0px 10px;\r\n    position: fixed;    \r\n    background-color: rgb(245, 245, 245);\r\n}\r\n\r\n#navbar-container[_ngcontent-%COMP%]{\r\n    background-color: #FFFFFF;\r\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.10);\r\n    border-radius: 15px;\r\n}\r\n\r\nspan[_ngcontent-%COMP%]{\r\n    color: var(--purpleG);\r\n    font-size: 40px;\r\n    transition: transform .25s\r\n}\r\n\r\nspan[_ngcontent-%COMP%]:hover{\r\n    background-color: rgb(240, 240, 240);\r\n    border-radius: 100%;\r\n    cursor: pointer;\r\n    transform: scale(1.25);\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]{\r\n    width: 70px;\r\n    cursor: pointer;\r\n    transition: 0.25s;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]:hover{\r\n    transform: scale(1.25);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2Ysb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDJDQUEyQztJQUMzQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDBweCAxMHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcclxufVxyXG5cclxuI25hdmJhci1jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbnNwYW57XHJcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlRyk7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjI1c1xyXG59XHJcblxyXG5zcGFuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XHJcbn1cclxuXHJcbiNsb2dve1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcclxufVxyXG4jbG9nbzpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AuthService {
    constructor(http) {
        this.http = http;
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        console.log("Constructor AuthService");
        this.checkToken();
    }
    olvidoContrasena(email) {
        return this.http.post(`${this.apiURL}reset-password/${email}`, null);
    }
    actualizarContrasena(formData) {
        return this.http.post(`${this.apiURL}update-password`, formData);
    }
    confirmarCodigo(codigo, email) {
        return this.http.post(`${this.apiURL}confirm-code`, { email: email, reset_code: codigo }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((_response) => {
            this.saveToken(_response.token.token);
            console.log(_response.token.token);
            this.loggedIn.next(true);
            return _response;
        }));
    }
    signUp(formSignUp) {
        return this.http.post(`${this.apiURL}register`, formSignUp);
    }
    reenviarCorreo(email) {
        return this.http.post(`${this.apiURL}resend-email/${email}`, null);
    }
    login(formLogin) {
        return this.http.post(`${this.apiURL}login`, formLogin).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((_response) => {
            //console.log(_response);
            this.saveToken(_response.token.token);
            this.loggedIn.next(true);
            // this.user = _response.user;
            // this.saveUserData(this.user);
            // this.dataUser.next(this.user);
            return _response;
        }));
    }
    getUserData() {
        return this.http.get(`${this.apiURL}getUserData`);
    }
    updateProfile() {
        return this.http.get(`${this.apiURL}update`);
    }
    logout() {
        localStorage.removeItem('token_login');
        localStorage.removeItem('user');
        this.loggedIn.next(false);
    }
    /*   checkToken(): void {
    
        const existTokenLogin = this.cookieService.check('token_login');
        // existTokenLogin ? this.loggedIn.next(true) : this.logout();
        if(existTokenLogin){
          this.loggedIn.next(true)
          console.log("Si hay token");
          let token = this.cookieService.get('token_login');
          this.validateToken(token.toString()).subscribe( _res => {
            console.log("Si entra al sub");
            if(_res.status == true){
              this.loggedIn.next(_res.status)
              console.log("Si es valido el token");
            }else{
              console.log("No es valido el token");
              this.logout();
            }
          });
        }else{
          console.log("No hay token");
          this.logout();
        }
    
      } */
    validateToken(token) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "authorization": `Bearer ${token}`,
        });
        return this.http.post(`${this.apiURL}checkToken`, null, { headers: headers });
    }
    saveToken(token) {
        localStorage.setItem('token_login', token);
    }
    get isLogged() {
        return this.loggedIn.asObservable();
    }
    checkToken() {
        const Token = localStorage.getItem('token_login');
        const existTokenLogin = Token ? true : false;
        console.log(existTokenLogin);
        // existTokenLogin ? this.loggedIn.next(true) : this.logout();
        if (existTokenLogin) {
            this.loggedIn.next(true);
            console.log("Si hay token");
            let token = localStorage.getItem('token_login');
            this.validateToken(token.toString()).subscribe(_res => {
                console.log("Si entra al sub");
                if (_res.status == true) {
                    this.loggedIn.next(_res.status);
                    console.log("Si es valido el token");
                }
                else {
                    console.log("No es valido el token");
                    this.logout();
                }
            });
        }
        else {
            console.log("No hay token");
            this.logout();
        }
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "nAxv":
/*!*************************************************************************!*\
  !*** ./src/app/components/forgot-password/forgot-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ForgotPasswordComponent_div_6_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "* La contrase\u00F1a es requerida.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ForgotPasswordComponent_div_6_p_1_Template, 2, 0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f.password.errors.required);
} }
function ForgotPasswordComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " * Las contrase\u00F1as no coinciden. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ForgotPasswordComponent {
    constructor(fb, router, authService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        this.passwordForm = this.fb.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password_confirmation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        }, { validators: this.checkPasswords });
    }
    get f() {
        return this.passwordForm.controls;
    }
    onResetPassword() {
        localStorage.removeItem('token_login');
        this.router.navigate(['/login']);
    }
    onSubmit(form) {
        if (form.invalid) {
            return Object.values(this.passwordForm.controls).forEach(control => {
                control.markAsTouched();
            });
        }
        else {
            this.authService.actualizarContrasena(this.passwordForm.value).subscribe((res) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    icon: 'success',
                    title: 'Listo!',
                    text: 'Contraseña actualizada con exito',
                });
                this.onResetPassword();
            }, (err) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salió mal, intenta de nuevo',
                });
            });
            console.log(this.passwordForm.value);
        }
    }
    checkPasswords(group) {
        const pass = group.get('password').value;
        const confirmPass = group.get('password_confirmation').value;
        return pass === confirmPass ? null : { notSame: true };
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 13, vars: 3, consts: [[1, "formulario"], [1, "titulo"], [3, "formGroup", "ngSubmit"], [1, "mb-4"], ["type", "password", "id", "password", "placeholder", "Nueva Contrase\u00F1a", "formControlName", "password", "required", ""], ["class", "invalid", 4, "ngIf"], ["type", "password", "id", "password2", "placeholder", "Confirma Contrase\u00F1a", "formControlName", "password_confirmation", "required", ""], [1, "d-grid", "gap-2"], ["type", "submit", "id", "btn_iniciar"], [1, "invalid"], [4, "ngIf"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Actualizar Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(ctx.passwordForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ForgotPasswordComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ForgotPasswordComponent_p_9_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Actualizar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.passwordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.password.touched && ctx.f.password.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.passwordForm.hasError("notSame"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".titulo[_ngcontent-%COMP%]{\n  font-family: Arial Rounded MT Bold;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 3rem;\n  line-height: 58px;\n  text-align: left;\n  color: #452F75;\n  margin-bottom: 40px;\n}\n.invalid[_ngcontent-%COMP%]{\n  text-align: left;\n  font-family: Arial Rounded MT Bold;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 00.9rem;\n  color: darkred;\n}\n.formulario[_ngcontent-%COMP%]{\n  text-align: center;\n  width: 500px;\n  height: 300px;\n}\n#password[_ngcontent-%COMP%], #password2[_ngcontent-%COMP%]{\n  width: 100%;\n  border-color: #5C4E9A;\n  border-radius: 30px;\n  height: 50px;\n  border-width: 2px;\n  margin-top: 10px;\n  border-style: solid;\n  text-indent: 15px;\n}\n#password[_ngcontent-%COMP%]:focus, #password2[_ngcontent-%COMP%]:focus{\n  outline: none;\n}\n#password[_ngcontent-%COMP%]::placeholder, #password2[_ngcontent-%COMP%]::placeholder{\n  color: #5C4E9A;\n  opacity: 0.5;\n\n}\n#btn_iniciar[_ngcontent-%COMP%]{\n  border-color: #3E2669;\n  border-width: 2px;\n  background-color: transparent;\n  color: #3E2669;\n  border-radius: 30px;\n  height: 50px;\n  font-family: Arial Rounded MT Bold;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n}\n#btn_iniciar[_ngcontent-%COMP%]:focus{\n  outline: none !important;\n}\n#btn_iniciar[_ngcontent-%COMP%]:hover{\n  background-color: #3E2669;\n  color: white;\n}\n@media (max-width: 768px) {\n  .formulario[_ngcontent-%COMP%]{\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUlBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTs7QUFFZDtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6ImZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdHVsb3tcbiAgZm9udC1mYW1pbHk6IEFyaWFsIFJvdW5kZWQgTVQgQm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDNyZW07XG4gIGxpbmUtaGVpZ2h0OiA1OHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzQ1MkY3NTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5pbnZhbGlke1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogQXJpYWwgUm91bmRlZCBNVCBCb2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMDAuOXJlbTtcbiAgY29sb3I6IGRhcmtyZWQ7XG59XG5cbi5mb3JtdWxhcmlve1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cblxuXG5cbiNwYXNzd29yZCwgI3Bhc3N3b3JkMntcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xvcjogIzVDNEU5QTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgdGV4dC1pbmRlbnQ6IDE1cHg7XG59XG4jcGFzc3dvcmQ6Zm9jdXMsICNwYXNzd29yZDI6Zm9jdXN7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbiNwYXNzd29yZDo6cGxhY2Vob2xkZXIsI3Bhc3N3b3JkMjo6cGxhY2Vob2xkZXJ7XG4gIGNvbG9yOiAjNUM0RTlBO1xuICBvcGFjaXR5OiAwLjU7XG5cbn1cbiNidG5faW5pY2lhcntcbiAgYm9yZGVyLWNvbG9yOiAjM0UyNjY5O1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjM0UyNjY5O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCBSb3VuZGVkIE1UIEJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuI2J0bl9pbmljaWFyOmZvY3Vze1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG4jYnRuX2luaWNpYXI6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRTI2Njk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5mb3JtdWxhcmlve1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ "sjK5":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socket.service */ "5U9e");


class ChatService {
    constructor(socket) {
        this.socket = socket;
        this.messageInfo = "";
        this.chats = [];
        this.lista = [];
        this.onReceivedMessage();
    }
    emitSendMessage(messageInfo) {
        this.chats.push(messageInfo);
        this.socket.io.emit("sendMessage", messageInfo);
    }
    onReceivedMessage() {
        this.socket.io.on("receivedMessage", (messageInfo) => {
            messageInfo.msjId = 2;
            this.chats.push(messageInfo);
        });
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"])); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "theA":
/*!*********************************************************!*\
  !*** ./src/app/components/request/request.component.ts ***!
  \*********************************************************/
/*! exports provided: RequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestComponent", function() { return RequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_request_friends_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/request-friends.service */ "ZWT1");


class RequestComponent {
    constructor(requestService) {
        this.requestService = requestService;
        this.request = [];
    }
    ngOnInit() {
        this.getRequest();
    }
    getRequest() {
        this.requestService.getFriendsRequest().subscribe(r => {
            this.request = r;
            console.log(this.request);
        });
    }
    acceptFriend(ide) {
        this.requestService.addFriend(ide);
        //remove of friends list
        console.log(ide);
    }
    declineFriend(ide) {
        const requests = this.getRequest();
        this.requestService.deleteFriend(ide).subscribe();
        console.log(requests);
    }
}
RequestComponent.ɵfac = function RequestComponent_Factory(t) { return new (t || RequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_request_friends_service__WEBPACK_IMPORTED_MODULE_1__["RequestFriendsService"])); };
RequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestComponent, selectors: [["app-request"]], decls: 16, vars: 0, consts: [["id", "general", 1, "container"], [1, "d-flex", "col-lg-6"], [1, "p-request"], [1, "d-block", "d-requesList"], [1, "d-friendsList", "d-flex", "flex-row", "p-0"], [1, "col-2", "p-lg-0", "d-userImage"], ["src", "../../../assets/friends/den1.jpeg", "alt", "", 1, "img-fluid", "img-user"], [1, "col-6", "d-userName", "align-items-center"], [1, "p-userName"], [1, "d-flex", "justify-content-end", "p-0", "d-buttons"], ["id", "btn-accept", "type", "submit", 1, "b-request", "p-0"], ["id", "btn-decline", "type", "submit", 1, "b-request", "p-0"]], template: function RequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Solicitudes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Denisse Medina");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Aceptar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Rechazar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%]{\n    font-family: Arial;\n    padding-top: 1%;\n}\n.d-second[_ngcontent-%COMP%]{\n    margin-bottom: 2%;\n}\n.p-request[_ngcontent-%COMP%]{\n    font-size:1.5rem;\n    color: #3E2669;\n    \n}\n.b-request[_ngcontent-%COMP%]{\n    font-size:1.5rem;\n    color: #E71F76;\n    border-radius: 50px;\n    width: 170px;\n    border: 2px #E71F76 solid;\n    transition: .4s;\n    font-family: 'Arial Rounded MT';\n}\n.b-request[_ngcontent-%COMP%]:hover{\n    color: #fff;\n    background-color: #E71F76;\n    transition: .4s;\n    cursor:pointer;\n}\n.b-request[_ngcontent-%COMP%]:active{\n    transform: translateY(4px);\n}\n.d-userImage[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n    width: 90px;\n    height: 90px;\n    border-radius: 50%;\n}\n.img-user[_ngcontent-%COMP%]{\n    width:-moz-fit-content;\n    width:fit-content;\n    object-fit: cover;\n    border-radius: 100px;\n    transition: .5s;\n}\n.p-userName[_ngcontent-%COMP%]{\n    color: #3E2669;\n    font-size: 2.0rem;\n    transition: .5s;\n    \n    margin-left: 7%;\n}\n.d-userName[_ngcontent-%COMP%]{\n    padding-top: 2%;\n}\n.d-icon[_ngcontent-%COMP%]{\n    padding-top: 3%;\n    \n}\n.p-userName[_ngcontent-%COMP%]{\n    width: -moz-fit-content;\n    width: fit-content;\n}\n.p-userName[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    transform:translateY(3px);\n    transition: .5s;\n}\n.p-userName[_ngcontent-%COMP%]:active{\n    transform: translateY(5px);\n}\n.img-user[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    transform:translateY(3px);\n    transition: .5s;\n}\n.img-user[_ngcontent-%COMP%]:active{\n    transform: translateY(5px);\n}\n.d-requesList[_ngcontent-%COMP%]{\n    margin-top: 6%;\n}\n#btn-accept[_ngcontent-%COMP%]{\n    margin-right: 5%;\n    height: 40px;\n}\n.d-buttons[_ngcontent-%COMP%]{\n    padding-bottom: 2% !important;\n    border-bottom: 2px #5A5858 solid;\n}\n\n@media (min-width:360px) and (max-width:640px) {\n    .p-request[_ngcontent-%COMP%]{\n        font-size:1rem;\n    }\n    .b-request[_ngcontent-%COMP%]{\n        font-size:0.9rem !important;\n        width: 25% !important;\n    }\n    .d-friendsList[_ngcontent-%COMP%] {\n        width: 100%;\n        \n    }\n    .d-userName[_ngcontent-%COMP%]{\n       padding-top: 5% !important;}\n    .p-userName[_ngcontent-%COMP%]{\n        font-size: 1rem;\n    }\n    .d-userImage[_ngcontent-%COMP%]{\n        display: flex;\n        justify-content: center;\n        width: 70px;\n        height: 60px;\n        border-radius: 50%;\n    }\n    .p-userName[_ngcontent-%COMP%]{\n        width: -moz-fit-content;\n        width: fit-content;\n    }\n    .p-userName[_ngcontent-%COMP%]:hover{\n        cursor: pointer;\n        transform:none;\n        transition: .5s;\n    }\n    .p-userName[_ngcontent-%COMP%]:active{\n        transform: translateY(5px);\n    }\n    .img-user[_ngcontent-%COMP%]:hover{\n        cursor: pointer;\n        transform:none;\n        transition: .5s;\n    }\n    .img-user[_ngcontent-%COMP%]:active{\n        transform: translateY(5px);\n    }\n    .b-request[_ngcontent-%COMP%]{\n        font-size:1.5rem;\n        color: #E71F76;\n        border-radius: 50px;\n        width: 170px;\n        border: 2px #E71F76 solid;\n        transition: .4s;\n        font-family: 'Arial Rounded MT';\n        background-color: #fff;\n    }\n    .b-request[_ngcontent-%COMP%]:hover{\n        color: #E71F76;\n        background-color: #fff;\n        transition: .4s;\n        cursor:pointer;\n    }\n    .b-request[_ngcontent-%COMP%]:active{\n        transform: translateY(4px);\n        background-color: #E71F76;\n        color: #fff;\n    }\n}\n\n@media (min-width:768px) and (max-width:1024px) {\n    .p-userName[_ngcontent-%COMP%]{\n        width: -moz-fit-content;\n        width: fit-content;\n    }\n    .p-userName[_ngcontent-%COMP%]:hover{\n        cursor: pointer;\n        transform:none;\n        transition: .5s;\n    }\n    .d-userName[_ngcontent-%COMP%]{\n        padding-top: 4%;\n    }\n    .p-userName[_ngcontent-%COMP%]:active{\n        transform: translateY(5px);\n    }\n    .d-userImage[_ngcontent-%COMP%]{\n        display: flex;\n        justify-content: center;\n        width: 70px;\n        height: 80px;\n        border-radius: 50%;\n    }\n    .img-user[_ngcontent-%COMP%]:hover{\n        cursor: pointer;\n        transform:none;\n        transition: .5s;\n    }\n    .img-user[_ngcontent-%COMP%]:active{\n        transform: translateY(5px);\n    }\n    .b-request[_ngcontent-%COMP%]{\n        font-size:1.5rem;\n        color: #E71F76;\n        border-radius: 50px;\n        width: 170px;\n        border: 2px #E71F76 solid;\n        transition: .4s;\n        font-family: 'Arial Rounded MT';\n        background-color: #fff;\n    }\n    .b-request[_ngcontent-%COMP%]:hover{\n        color: #E71F76;\n        background-color: #fff;\n        transition: .4s;\n        cursor:pointer;\n    }\n    .b-request[_ngcontent-%COMP%]:active{\n        transform: translateY(4px);\n        background-color: #E71F76;\n        color: #fff;\n    }\n}\n\n@media (min-width:320px) and (max-width:568px) {\n    .p-request[_ngcontent-%COMP%]{\n        font-size:1rem;\n    }\n    .b-request[_ngcontent-%COMP%]{\n        font-size:0.7rem !important;\n        width: 25% !important;\n    }\n    .d-friendsList[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n    .d-userImage[_ngcontent-%COMP%]{\n        display: flex;\n        justify-content: center;\n        width: 60px;\n        height: 50px;\n        border-radius: 50%;\n    }\n    .d-userName[_ngcontent-%COMP%]{\n       padding-top: 4%;}\n    .p-userName[_ngcontent-%COMP%]{\n        font-size: 1rem;\n    }\n    .img-user[_ngcontent-%COMP%]{\n        width: 80%;\n    }\n    .p-userName[_ngcontent-%COMP%]{\n        width: -moz-fit-content;\n        width: fit-content;\n    }\n    .p-userName[_ngcontent-%COMP%]:hover{\n        cursor: pointer;\n        transform:none;\n        transition: .5s;\n    }\n    .p-userName[_ngcontent-%COMP%]:active{\n        transform: translateY(5px);\n    }\n    .img-user[_ngcontent-%COMP%]:hover{\n        cursor: pointer;\n        transform:none;\n        transition: .5s;\n    }\n    .img-user[_ngcontent-%COMP%]:active{\n        transform: translateY(5px);\n    }\n    .b-request[_ngcontent-%COMP%]{\n        font-size:1.5rem;\n        color: #E71F76;\n        border-radius: 50px;\n        width: 170px;\n        border: 2px #E71F76 solid;\n        transition: .4s;\n        font-family: 'Arial Rounded MT';\n        background-color: #fff;\n    }\n    .b-request[_ngcontent-%COMP%]:hover{\n        color: #E71F76;\n        background-color: #fff;\n        transition: .4s;\n        cursor:pointer;\n    }\n    .b-request[_ngcontent-%COMP%]:active{\n        transform: translateY(4px);\n        background-color: #E71F76;\n        color: #fff;\n    }\n}\n@media (min-width:414px) and (max-width:736px) {\n    .d-userImage[_ngcontent-%COMP%]{\n        display: flex;\n        justify-content: center;\n        width: 60px;\n        height: 55px;\n        border-radius: 50%;\n    }\n    .d-userName[_ngcontent-%COMP%]{\n        padding-top: 4% !important;}\n}\n\n@media (min-width:540px) and (max-width:720px) {\n    .p-request[_ngcontent-%COMP%]{\n        font-size:1rem;\n    }\n    .b-request[_ngcontent-%COMP%]{\n        font-size:0.7rem !important;\n        width: 20% !important;\n    }\n    .d-userImage[_ngcontent-%COMP%]{\n        display: flex;\n        justify-content: center;\n        width: 80px;\n        height: 60px;\n        border-radius: 50%;\n    }\n    .d-friendsList[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n    .p-userName[_ngcontent-%COMP%]{\n        font-size: 1.2rem;\n    }\n    .img-user[_ngcontent-%COMP%]{\n        width: 70%;\n    }\n    .p-userName[_ngcontent-%COMP%]{\n        width: -moz-fit-content;\n        width: fit-content;\n    }\n    .p-userName[_ngcontent-%COMP%]:hover{\n        cursor: pointer;\n        transform:none;\n        transition: .5s;\n    }\n    .p-userName[_ngcontent-%COMP%]:active{\n        transform: translateY(5px);\n    }\n    .img-user[_ngcontent-%COMP%]:hover{\n        cursor: pointer;\n        transform:none;\n        transition: .5s;\n    }\n    .img-user[_ngcontent-%COMP%]:active{\n        transform: translateY(5px);\n    }\n    .b-request[_ngcontent-%COMP%]{\n        color: #E71F76;\n        border: 2px #E71F76 solid;\n        transition: .4s;\n        font-family: 'Arial Rounded MT';\n        background-color: #fff;\n    }\n    .b-request[_ngcontent-%COMP%]:hover{\n        color: #E71F76;\n        background-color: #fff;\n        transition: .4s;\n        cursor:pointer;\n    }\n    .b-request[_ngcontent-%COMP%]:active{\n        transform: translateY(4px);\n        background-color: #E71F76;\n        color: #fff;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjOztBQUVsQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsWUFBWSxDQUFDOzBCQUNTO0lBQ3RCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNCQUFpQjtJQUFqQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7O0lBRWYsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTs7QUFFbkI7QUFDQTtJQUNJLHVCQUFrQjtJQUFsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixnQ0FBZ0M7QUFDcEM7QUFDQSwwQkFBMEI7QUFDMUI7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLDJCQUEyQjtRQUMzQixxQkFBcUI7SUFDekI7SUFDQTtRQUNJLFdBQVc7O0lBRWY7SUFDQTtPQUNHLDBCQUEwQixDQUFDO0lBQzlCO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksdUJBQWtCO1FBQWxCLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGNBQWM7UUFDZCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLGVBQWU7UUFDZixjQUFjO1FBQ2QsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLG1CQUFtQjtRQUNuQixZQUFZLENBQUM7OEJBQ1M7UUFDdEIseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZiwrQkFBK0I7UUFDL0Isc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxjQUFjO1FBQ2Qsc0JBQXNCO1FBQ3RCLGVBQWU7UUFDZixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSwwQkFBMEI7UUFDMUIseUJBQXlCO1FBQ3pCLFdBQVc7SUFDZjtBQUNKO0FBQ0EsNkJBQTZCO0FBQzdCO0lBQ0k7UUFDSSx1QkFBa0I7UUFBbEIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsY0FBYztRQUNkLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGNBQWM7UUFDZCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLFlBQVksQ0FBQzs4QkFDUztRQUN0Qix5QkFBeUI7UUFDekIsZUFBZTtRQUNmLCtCQUErQjtRQUMvQixzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGNBQWM7UUFDZCxzQkFBc0I7UUFDdEIsZUFBZTtRQUNmLGNBQWM7SUFDbEI7SUFDQTtRQUNJLDBCQUEwQjtRQUMxQix5QkFBeUI7UUFDekIsV0FBVztJQUNmO0FBQ0o7QUFDQSw4QkFBOEI7QUFDOUI7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLDJCQUEyQjtRQUMzQixxQkFBcUI7SUFDekI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtJQUN0QjtJQUNBO09BQ0csZUFBZSxDQUFDO0lBQ25CO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSx1QkFBa0I7UUFBbEIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsY0FBYztRQUNkLGVBQWU7SUFDbkI7SUFDQTtRQUNJLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGNBQWM7UUFDZCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLFlBQVksQ0FBQzs4QkFDUztRQUN0Qix5QkFBeUI7UUFDekIsZUFBZTtRQUNmLCtCQUErQjtRQUMvQixzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGNBQWM7UUFDZCxzQkFBc0I7UUFDdEIsZUFBZTtRQUNmLGNBQWM7SUFDbEI7SUFDQTtRQUNJLDBCQUEwQjtRQUMxQix5QkFBeUI7UUFDekIsV0FBVztJQUNmO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksMEJBQTBCLENBQUM7QUFDbkM7QUFDQSw4QkFBOEI7QUFDOUI7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLDJCQUEyQjtRQUMzQixxQkFBcUI7SUFDekI7SUFDQTtRQUNJLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLHVCQUFrQjtRQUFsQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGVBQWU7UUFDZixjQUFjO1FBQ2QsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsY0FBYztRQUNkLGVBQWU7SUFDbkI7SUFDQTtRQUNJLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksY0FBYztRQUNkLHlCQUF5QjtRQUN6QixlQUFlO1FBQ2YsK0JBQStCO1FBQy9CLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksY0FBYztRQUNkLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2YsY0FBYztJQUNsQjtJQUNBO1FBQ0ksMEJBQTBCO1FBQzFCLHlCQUF5QjtRQUN6QixXQUFXO0lBQ2Y7QUFDSiIsImZpbGUiOiJyZXF1ZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICBwYWRkaW5nLXRvcDogMSU7XG59XG4uZC1zZWNvbmR7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG59XG4ucC1yZXF1ZXN0e1xuICAgIGZvbnQtc2l6ZToxLjVyZW07XG4gICAgY29sb3I6ICMzRTI2Njk7XG4gICAgXG59XG4uYi1yZXF1ZXN0e1xuICAgIGZvbnQtc2l6ZToxLjVyZW07XG4gICAgY29sb3I6ICNFNzFGNzY7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICB3aWR0aDogMTcwcHg7LyogXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDsgKi9cbiAgICBib3JkZXI6IDJweCAjRTcxRjc2IHNvbGlkO1xuICAgIHRyYW5zaXRpb246IC40cztcbiAgICBmb250LWZhbWlseTogJ0FyaWFsIFJvdW5kZWQgTVQnO1xufVxuLmItcmVxdWVzdDpob3ZlcntcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTcxRjc2O1xuICAgIHRyYW5zaXRpb246IC40cztcbiAgICBjdXJzb3I6cG9pbnRlcjtcbn1cbi5iLXJlcXVlc3Q6YWN0aXZle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xufVxuLmQtdXNlckltYWdle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5pbWctdXNlcntcbiAgICB3aWR0aDpmaXQtY29udGVudDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICB0cmFuc2l0aW9uOiAuNXM7XG59XG4ucC11c2VyTmFtZXtcbiAgICBjb2xvcjogIzNFMjY2OTtcbiAgICBmb250LXNpemU6IDIuMHJlbTtcbiAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgXG4gICAgbWFyZ2luLWxlZnQ6IDclO1xufVxuLmQtdXNlck5hbWV7XG4gICAgcGFkZGluZy10b3A6IDIlO1xufVxuLmQtaWNvbntcbiAgICBwYWRkaW5nLXRvcDogMyU7XG4gICAgXG59XG4ucC11c2VyTmFtZXtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG4ucC11c2VyTmFtZTpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoM3B4KTtcbiAgICB0cmFuc2l0aW9uOiAuNXM7XG59XG4ucC11c2VyTmFtZTphY3RpdmV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XG59XG4uaW1nLXVzZXI6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKDNweCk7XG4gICAgdHJhbnNpdGlvbjogLjVzO1xufVxuLmltZy11c2VyOmFjdGl2ZXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcbn1cbi5kLXJlcXVlc0xpc3R7XG4gICAgbWFyZ2luLXRvcDogNiU7XG59XG4jYnRuLWFjY2VwdHtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIGhlaWdodDogNDBweDtcbn1cbi5kLWJ1dHRvbnN7XG4gICAgcGFkZGluZy1ib3R0b206IDIlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4ICM1QTU4NTggc29saWQ7XG59XG4vKk1PVE8gRzQgIDM2MFBYIFRPIDY0MFBYKi9cbkBtZWRpYSAobWluLXdpZHRoOjM2MHB4KSBhbmQgKG1heC13aWR0aDo2NDBweCkge1xuICAgIC5wLXJlcXVlc3R7XG4gICAgICAgIGZvbnQtc2l6ZToxcmVtO1xuICAgIH1cbiAgICAuYi1yZXF1ZXN0e1xuICAgICAgICBmb250LXNpemU6MC45cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiAyNSUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmQtZnJpZW5kc0xpc3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgXG4gICAgfVxuICAgIC5kLXVzZXJOYW1le1xuICAgICAgIHBhZGRpbmctdG9wOiA1JSAhaW1wb3J0YW50O31cbiAgICAucC11c2VyTmFtZXtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgICAuZC11c2VySW1hZ2V7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICAgIC5wLXVzZXJOYW1le1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgfVxuICAgIC5wLXVzZXJOYW1lOmhvdmVye1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zZm9ybTpub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgfVxuICAgIC5wLXVzZXJOYW1lOmFjdGl2ZXtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XG4gICAgfVxuICAgIC5pbWctdXNlcjpob3ZlcntcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2Zvcm06bm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjogLjVzO1xuICAgIH1cbiAgICAuaW1nLXVzZXI6YWN0aXZle1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcbiAgICB9XG4gICAgLmItcmVxdWVzdHtcbiAgICAgICAgZm9udC1zaXplOjEuNXJlbTtcbiAgICAgICAgY29sb3I6ICNFNzFGNzY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIHdpZHRoOiAxNzBweDsvKiBcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDsgKi9cbiAgICAgICAgYm9yZGVyOiAycHggI0U3MUY3NiBzb2xpZDtcbiAgICAgICAgdHJhbnNpdGlvbjogLjRzO1xuICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsIFJvdW5kZWQgTVQnO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICAuYi1yZXF1ZXN0OmhvdmVye1xuICAgICAgICBjb2xvcjogI0U3MUY3NjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgdHJhbnNpdGlvbjogLjRzO1xuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICB9XG4gICAgLmItcmVxdWVzdDphY3RpdmV7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTcxRjc2O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG59XG4vKklQQUQgTUlOSSAgNzY4UFggVE8gMTAyNFBYKi9cbkBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSBhbmQgKG1heC13aWR0aDoxMDI0cHgpIHtcbiAgICAucC11c2VyTmFtZXtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIH1cbiAgICAucC11c2VyTmFtZTpob3ZlcntcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2Zvcm06bm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjogLjVzO1xuICAgIH1cbiAgICAuZC11c2VyTmFtZXtcbiAgICAgICAgcGFkZGluZy10b3A6IDQlO1xuICAgIH1cbiAgICAucC11c2VyTmFtZTphY3RpdmV7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xuICAgIH1cbiAgICAuZC11c2VySW1hZ2V7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICAgIC5pbWctdXNlcjpob3ZlcntcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2Zvcm06bm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjogLjVzO1xuICAgIH1cbiAgICAuaW1nLXVzZXI6YWN0aXZle1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcbiAgICB9XG4gICAgLmItcmVxdWVzdHtcbiAgICAgICAgZm9udC1zaXplOjEuNXJlbTtcbiAgICAgICAgY29sb3I6ICNFNzFGNzY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIHdpZHRoOiAxNzBweDsvKiBcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDsgKi9cbiAgICAgICAgYm9yZGVyOiAycHggI0U3MUY3NiBzb2xpZDtcbiAgICAgICAgdHJhbnNpdGlvbjogLjRzO1xuICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsIFJvdW5kZWQgTVQnO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICAuYi1yZXF1ZXN0OmhvdmVye1xuICAgICAgICBjb2xvcjogI0U3MUY3NjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgdHJhbnNpdGlvbjogLjRzO1xuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICB9XG4gICAgLmItcmVxdWVzdDphY3RpdmV7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTcxRjc2O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG59XG4vKklQSE9ORSA1L1NFICAzMjBQWCBUTyA1NjhQWCovXG5AbWVkaWEgKG1pbi13aWR0aDozMjBweCkgYW5kIChtYXgtd2lkdGg6NTY4cHgpIHtcbiAgICAucC1yZXF1ZXN0e1xuICAgICAgICBmb250LXNpemU6MXJlbTtcbiAgICB9XG4gICAgLmItcmVxdWVzdHtcbiAgICAgICAgZm9udC1zaXplOjAuN3JlbSAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogMjUlICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5kLWZyaWVuZHNMaXN0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5kLXVzZXJJbWFnZXtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gICAgLmQtdXNlck5hbWV7XG4gICAgICAgcGFkZGluZy10b3A6IDQlO31cbiAgICAucC11c2VyTmFtZXtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgICAuaW1nLXVzZXJ7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxuICAgIC5wLXVzZXJOYW1le1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgfVxuICAgIC5wLXVzZXJOYW1lOmhvdmVye1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zZm9ybTpub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgfVxuICAgIC5wLXVzZXJOYW1lOmFjdGl2ZXtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XG4gICAgfVxuICAgIC5pbWctdXNlcjpob3ZlcntcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2Zvcm06bm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjogLjVzO1xuICAgIH1cbiAgICAuaW1nLXVzZXI6YWN0aXZle1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcbiAgICB9XG4gICAgLmItcmVxdWVzdHtcbiAgICAgICAgZm9udC1zaXplOjEuNXJlbTtcbiAgICAgICAgY29sb3I6ICNFNzFGNzY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIHdpZHRoOiAxNzBweDsvKiBcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDsgKi9cbiAgICAgICAgYm9yZGVyOiAycHggI0U3MUY3NiBzb2xpZDtcbiAgICAgICAgdHJhbnNpdGlvbjogLjRzO1xuICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsIFJvdW5kZWQgTVQnO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICAuYi1yZXF1ZXN0OmhvdmVye1xuICAgICAgICBjb2xvcjogI0U3MUY3NjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgdHJhbnNpdGlvbjogLjRzO1xuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICB9XG4gICAgLmItcmVxdWVzdDphY3RpdmV7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTcxRjc2O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDo0MTRweCkgYW5kIChtYXgtd2lkdGg6NzM2cHgpIHtcbiAgICAuZC11c2VySW1hZ2V7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgaGVpZ2h0OiA1NXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICAgIC5kLXVzZXJOYW1le1xuICAgICAgICBwYWRkaW5nLXRvcDogNCUgIWltcG9ydGFudDt9XG59XG4vKlNVUkZBQ0UgRFVPICA1NDBQWCBUTyA3MjBQWCovXG5AbWVkaWEgKG1pbi13aWR0aDo1NDBweCkgYW5kIChtYXgtd2lkdGg6NzIwcHgpIHtcbiAgICAucC1yZXF1ZXN0e1xuICAgICAgICBmb250LXNpemU6MXJlbTtcbiAgICB9XG4gICAgLmItcmVxdWVzdHtcbiAgICAgICAgZm9udC1zaXplOjAuN3JlbSAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogMjAlICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5kLXVzZXJJbWFnZXtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gICAgLmQtZnJpZW5kc0xpc3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLnAtdXNlck5hbWV7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cbiAgICAuaW1nLXVzZXJ7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxuICAgIC5wLXVzZXJOYW1le1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgfVxuICAgIC5wLXVzZXJOYW1lOmhvdmVye1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zZm9ybTpub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgfVxuICAgIC5wLXVzZXJOYW1lOmFjdGl2ZXtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XG4gICAgfVxuICAgIC5pbWctdXNlcjpob3ZlcntcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2Zvcm06bm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjogLjVzO1xuICAgIH1cbiAgICAuaW1nLXVzZXI6YWN0aXZle1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcbiAgICB9XG4gICAgLmItcmVxdWVzdHtcbiAgICAgICAgY29sb3I6ICNFNzFGNzY7XG4gICAgICAgIGJvcmRlcjogMnB4ICNFNzFGNzYgc29saWQ7XG4gICAgICAgIHRyYW5zaXRpb246IC40cztcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCBSb3VuZGVkIE1UJztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgLmItcmVxdWVzdDpob3ZlcntcbiAgICAgICAgY29sb3I6ICNFNzFGNzY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIHRyYW5zaXRpb246IC40cztcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgfVxuICAgIC5iLXJlcXVlc3Q6YWN0aXZle1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U3MUY3NjtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "ujWA":
/*!*******************************************************************!*\
  !*** ./src/app/components/profile-page/profile-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProfilePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageComponent", function() { return ProfilePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/post.service */ "ENZJ");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search/search.component */ "RZmA");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile/profile.component */ "DZ0t");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contacts/contacts.component */ "MXpY");






class ProfilePageComponent {
    constructor(postService) {
        this.postService = postService;
    }
    ngOnInit() {
    }
    onScrollDown() {
        this.addItems();
    }
    addItems() {
        this.postService.addMorePost();
    }
}
ProfilePageComponent.ɵfac = function ProfilePageComponent_Factory(t) { return new (t || ProfilePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"])); };
ProfilePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfilePageComponent, selectors: [["app-profile-page"]], decls: 14, vars: 0, consts: [["id", "container-home", "infinite-scroll", "", 1, "row", 3, "scrolled"], [1, "col-lg-3", "d-none", "d-lg-block", "fixed"], ["id", "subtitle"], [1, "col-lg-6", "offset-lg-3"], ["id", "title-create-publication"], [1, "col-lg-3", "d-none", "d-lg-block", "fixed", "offset-lg-9"]], template: function ProfilePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scrolled", function ProfilePageComponent_Template_div_scrolled_1_listener() { return ctx.onScrollDown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Buscar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Mi Perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Contactos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__["ContactsComponent"]], styles: ["#container-home[_ngcontent-%COMP%]{\n    padding: 125px 0px 0px 0px;\n    margin: 0px;\n}\n#title-create-publication[_ngcontent-%COMP%]{\n    font-size: 18.5px;\n    color: var(--purpleG);\n    font-family: 'Arial';\n    font-weight: bold;\n}\n#subtitle[_ngcontent-%COMP%]{\n    font-size: 18.5px;\n    color: gray;\n    font-family: 'Arial';\n    font-weight: bold;\n}\n.fixed[_ngcontent-%COMP%]{\n    position: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsaUJBQWlCO0FBQ3JCO0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoicHJvZmlsZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyLWhvbWV7XG4gICAgcGFkZGluZzogMTI1cHggMHB4IDBweCAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG59XG4jdGl0bGUtY3JlYXRlLXB1YmxpY2F0aW9ue1xuICAgIGZvbnQtc2l6ZTogMTguNXB4O1xuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGVHKTtcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuXG4jc3VidGl0bGV7XG4gICAgZm9udC1zaXplOiAxOC41cHg7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5maXhlZHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _components_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/profile-page/profile-page.component */ "ujWA");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_login_gen_login_gen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login-gen/login-gen.component */ "ao/O");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/chat/chat.component */ "3tD2");
/* harmony import */ var _components_friends_friends_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/friends/friends.component */ "bFJR");
/* harmony import */ var _components_request_request_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/request/request.component */ "theA");
/* harmony import */ var _guards_login_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/login.guard */ "+XmF");
/* harmony import */ var _guards_notaccessonlogin_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/notaccessonlogin.guard */ "WJg9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











const routes = [
    { path: 'login', component: _components_login_gen_login_gen_component__WEBPACK_IMPORTED_MODULE_3__["LoginGenComponent"], pathMatch: 'full', canActivate: [_guards_notaccessonlogin_guard__WEBPACK_IMPORTED_MODULE_8__["NotAccessOnLoginGuard"]] },
    { path: 'register', component: _components_login_gen_login_gen_component__WEBPACK_IMPORTED_MODULE_3__["LoginGenComponent"], pathMatch: 'full', canActivate: [_guards_notaccessonlogin_guard__WEBPACK_IMPORTED_MODULE_8__["NotAccessOnLoginGuard"]] },
    { path: 'reenviar-email', component: _components_login_gen_login_gen_component__WEBPACK_IMPORTED_MODULE_3__["LoginGenComponent"], pathMatch: 'full', canActivate: [_guards_notaccessonlogin_guard__WEBPACK_IMPORTED_MODULE_8__["NotAccessOnLoginGuard"]] },
    { path: 'forgot-password', component: _components_login_gen_login_gen_component__WEBPACK_IMPORTED_MODULE_3__["LoginGenComponent"], pathMatch: 'full', canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_7__["LoginGuard"]] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'login', component: _components_login_gen_login_gen_component__WEBPACK_IMPORTED_MODULE_3__["LoginGenComponent"], pathMatch: 'full' },
    { path: 'register', component: _components_login_gen_login_gen_component__WEBPACK_IMPORTED_MODULE_3__["LoginGenComponent"], pathMatch: 'full' },
    { path: 'chat/:ide', component: _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"] },
    { path: 'friends', component: _components_friends_friends_component__WEBPACK_IMPORTED_MODULE_5__["FriendsComponent"] },
    { path: 'request', component: _components_request_request_component__WEBPACK_IMPORTED_MODULE_6__["RequestComponent"] },
    { path: 'profile', component: _components_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_0__["ProfilePageComponent"] },
    { path: '**', redirectTo: 'home' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
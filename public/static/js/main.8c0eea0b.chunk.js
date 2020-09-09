(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/logo.e889e45f.svg"},14:function(e,t,a){e.exports=a(21)},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(11),o=a.n(s),i=(a(19),a(13)),c=a(7),l=a(3),u=a(1),d=a(2),p=a(9),m=a(8),h=(a(20),a(12)),_=a.n(h);var f=function(e){return r.a.createElement("header",{className:"header app__section"},r.a.createElement("img",{src:_.a,alt:"\u0421\u043b\u043e\u0432\u043e \u041c\u0435\u0441\u0442\u043e \u043b\u0430\u0442\u0438\u043d\u0438\u0446\u0435\u0439 \u0438 \u0432\u044b\u0448\u0435 \u0441\u043b\u043e\u0432\u043e Russia. \u041b\u043e\u0433\u043e\u0442\u0438\u043f.",className:"header__logo"}))},v=r.a.createContext();var E=function(e){var t=e.card,a=e.onCardClick,n=(e.onDeletePlace,e.onCardLike),s=e.onDeleteCardClick,o=r.a.useContext(v),i=t.owner._id===o.userId,c="places__delete-button ".concat(i?"places__delete-button_active":""),l=t.likes.some((function(e){return e._id===o.userId})),u="places__like ".concat(l?"places__like_active":"");return r.a.createElement("div",{className:"places__card"},r.a.createElement("button",{type:"button",className:c,onClick:function(){s(t._id)}}),r.a.createElement("img",{alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043c\u0435\u0441\u0442\u0430 \u043f\u043e\u0434 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c ".concat(t.name),src:t.link,className:"places__image",onClick:function(){return a(t)}}),r.a.createElement("div",{className:"places__desc"},r.a.createElement("h2",{className:"places__title"},t.name),r.a.createElement("div",{className:"places__like-info"},r.a.createElement("button",{type:"button",className:u,onClick:function(){n(t)}}),r.a.createElement("span",{className:"places__like-amount"},t.likes.length))))},b=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("main",{className:"main app__section"},r.a.createElement("section",{className:"profile"},r.a.createElement("img",{alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",className:"profile__avatar",src:this.context.userAvatar}),r.a.createElement("div",{className:"profile__edit-avatar-button",onClick:this.props.onEditAvatar}),r.a.createElement("div",{className:"profile__title"},r.a.createElement("h1",{className:"profile__name"},this.context.userName),r.a.createElement("button",{type:"button",className:"profile__edit-button",onClick:this.props.onEditProfile})),r.a.createElement("p",{className:"profile__subtitle"},this.context.userDescription),r.a.createElement("button",{type:"button",className:"profile__add-button",onClick:this.props.onAddPlace})),r.a.createElement("section",{className:"places"},this.props.cards.map((function(t,a){return r.a.createElement(E,{onCardLike:e.props.onCardLike,onCardClick:e.props.onCardClick,onDeletePlace:e.props.onDeletePlace,onDeleteCardClick:e.props.onCardDelete,card:t,key:a})}))))}}]),a}(r.a.Component);b.contextType=v;var C=b;var g=function(e){return r.a.createElement("footer",{className:"footer app__section"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))},k={formSelector:".form",inputSelector:".form__item",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_inactive",inputErrorClass:"form__item_type_error",errorClass:"form__item-error_active"},y=function(){function e(t,a){Object(u.a)(this,e),this._options=t,this._formEl=a}return Object(d.a)(e,[{key:"_setEventInputListeners",value:function(){var e=this;this._inputList=this._findInputs(),this._buttonEl=this._findButtons(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t,e._options.errorClass,e._options.inputErrorClass),e._toggleButtonState()}))}))}},{key:"_findInputs",value:function(){return Array.from(this._formEl.querySelectorAll(this._options.inputSelector))}},{key:"_findButtons",value:function(){return this._formEl.querySelector(this._options.submitButtonSelector)}},{key:"_checkInputValidity",value:function(e,t,a){e.validity.valid?this._hideInputErrorMessage(e,t,a):this._showInputErrorMessage(e,e.validationMessage,t,a)}},{key:"_showInputErrorMessage",value:function(e,t,a,n){var r=document.querySelector("#".concat(e.id,"-error"));r.classList.add(a),r.textContent=t,e.classList.add(n)}},{key:"_hideInputErrorMessage",value:function(e,t,a){var n=document.querySelector("#".concat(e.id,"-error"));n.classList.remove(t),n.textContent="",e.classList.remove(a)}},{key:"_toggleButtonState",value:function(){this._formEl.checkValidity()?(this._buttonEl.classList.remove(this._options.inactiveButtonClass),this._buttonEl.disabled=!1):(this._buttonEl.classList.add(this._options.inactiveButtonClass),this._buttonEl.disabled=!0)}},{key:"formInitialCheck",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputErrorMessage(t,e._options.errorClass,e._options.inputErrorClass)}))}},{key:"enableValidation",value:function(){this._formEl.addEventListener("submit",(function(e){return e.preventDefault()})),this._setEventInputListeners()}}]),e}();var P=function(e){return Object(n.useEffect)((function(){var t=document.querySelector(".form_type_".concat(e.name));new y(k,t).enableValidation()})),r.a.createElement("div",{className:"popup popup_type_".concat(e.name," ")+(e.isOpen?"popup_opened":"")},r.a.createElement("div",{className:"popup__container popup__container_visibility_visible"},r.a.createElement("button",{type:"button",className:"popup__close-button",onClick:e.onClose}),r.a.createElement("form",{className:"form form_type_".concat(e.name),name:e.name,noValidate:!0,onSubmit:e.onSubmit},r.a.createElement("h2",{className:"form__heading"},e.title),e.children,r.a.createElement("button",{type:"submit",value:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0443",className:"form__button form__button_type_".concat(e.name)},e.buttonText))))},O=a(4);var N=function(e){var t=e.isOpen,a=e.onClose,s=e.onUpdateUser,o=e.isLoading,i=r.a.useContext(v),c=Object(n.useState)(""),l=Object(O.a)(c,2),u=l[0],d=l[1],p=Object(n.useState)(""),m=Object(O.a)(p,2),h=m[0],_=m[1];return Object(n.useEffect)((function(){d(i.userName),_(i.userDescription)}),[i]),r.a.createElement(P,{onSubmit:function(e){e.preventDefault(),s(u,h),a()},isOpen:t,title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit-profile",onClose:a,buttonText:o?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"form__field"},r.a.createElement("input",{type:"text",name:"name",id:"profile-name",className:"form__item form__item_el_name",placeholder:"\u0418\u043c\u044f \u0438 \u0444\u0430\u043c\u0438\u043b\u0438\u044f",minLength:"2",maxLength:"40",required:!0,value:u,onChange:function(e){d(e.target.value)}}),r.a.createElement("span",{className:"form__item-error",id:"profile-name-error"})),r.a.createElement("label",{className:"form__field"},r.a.createElement("input",{type:"text",name:"job",id:"profile-job",placeholder:"\u0420\u043e\u0434 \u0437\u0430\u043d\u044f\u0442\u0438\u0439",className:"form__item form__item_el_job",minLength:"2",maxLength:"200",required:!0,value:h,onChange:function(e){_(e.target.value)}}),r.a.createElement("span",{className:"form__item-error",id:"profile-job-error"})))})};var S=function(e){var t=e.card,a=e.onClose;return r.a.createElement("div",{className:"popup popup_type_see-image "+(t?"popup_opened":"")},t&&r.a.createElement("figure",{className:"popup__container popup__container_visibility_transparent"},r.a.createElement("button",{type:"button",className:"popup__close-button",onClick:a}),r.a.createElement("img",{alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043c\u0435\u0441\u0442\u0430 \u043f\u043e\u0434 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c ".concat(t.name),className:"popup__image",src:t.link}),r.a.createElement("figcaption",{className:"popup__image-caption"},t.name)))},L=new(function(){function e(t){Object(u.a)(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}return Object(d.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():(console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)),Promise.reject(e.statusText))}},{key:"_handleResponseError",value:function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.message)),Promise.reject(e.message)}},{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then(this._handleResponse).catch(this._handleResponseError)}},{key:"setUserInfo",value:function(e,t){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e,about:t})}).then(this._handleResponse).catch(this._handleResponseError)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})}).then(this._handleResponse).catch(this._handleResponseError)}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then(this._handleResponse).catch(this._handleResponseError)}},{key:"addCard",value:function(e,t){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e,link:t})}).then(this._handleResponse).catch(this._handleResponseError)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then(this._handleResponse).catch(this._handleResponseError)}},{key:"changeLikeCardStatus",value:function(e,t){return t?fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then(this._handleResponse).catch(this._handleResponseError):fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then(this._handleResponse).catch(this._handleResponseError)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-13",headers:{authorization:"ac8eea58-1ab3-4780-8fbf-f684bd9ab1b3","Content-Type":"application/json"}});var A=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,s=e.isLoading,o=r.a.useRef();return r.a.createElement(P,{onSubmit:function(e){e.preventDefault(),n({avatar:o.current.value}),a(),o.current.value=""},isOpen:t,title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"edit-avatar",onClose:a,buttonText:s?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"form__field"},r.a.createElement("input",{type:"url",name:"link",id:"avatar-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",className:"form__item form__item_el_avatar-link",required:!0,value:o.value,ref:o}),r.a.createElement("span",{className:"form__item-error",id:"avatar-link-error"})))})};var j=function(e){var t=e.isOpen,a=e.onClose,s=e.onAddPlace,o=e.isLoading,i=Object(n.useState)(""),c=Object(O.a)(i,2),l=c[0],u=c[1],d=Object(n.useState)(""),p=Object(O.a)(d,2),m=p[0],h=p[1];return r.a.createElement(P,{onSubmit:function(e){e.preventDefault(),s(l,m),a(),u(""),h("")},isOpen:t,title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add-place",onClose:a,buttonText:o?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",children:r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"form__field"},r.a.createElement("input",{type:"text",name:"name",id:"place-name",className:"form__item form__item_el_place-name",minLength:"1",maxLength:"30",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,value:l,onChange:function(e){u(e.target.value)}}),r.a.createElement("span",{className:"form__item-error",id:"place-name-error"})),r.a.createElement("label",{className:"form__field"},r.a.createElement("input",{type:"url",name:"link",id:"place-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"form__item form__item_el_place-link",required:!0,value:m,onChange:function(e){h(e.target.value)}}),r.a.createElement("span",{className:"form__item-error",id:"place-link-error"})))})},U=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleEditAvatarClick=function(){n.setState({isEditAvatarPopupOpen:!0})},n.handleEditProfileClick=function(){n.setState({isEditProfilePopupOpen:!0})},n.handleAddPlaceClick=function(){n.setState({isAddPlacePopupOpen:!0})},n.handleDeletePlaceClick=function(){n.setState({isDeletePlacePopupOpen:!0})},n.handleCardClick=function(e){n.setState({selectedCard:e})},n.closeAllPopups=function(){n.setState({isEditProfilePopupOpen:!1,isAddPlacePopupOpen:!1,isEditAvatarPopupOpen:!1,isDeletePlacePopupOpen:!1,selectedCard:null})},n.setIsLoadingState=function(e){n.setState({isLoading:Object(l.a)(Object(l.a)({},n.state.isLoading),{},Object(c.a)({},e,!n.state.isLoading[e]))})},n.handleUpdateUser=function(e,t){n.setIsLoadingState("editProfileData"),L.setUserInfo(e,t).then((function(e){return n.setState({currentUser:Object(l.a)(Object(l.a)({},n.state.currentUser),{},{userName:e.name,userDescription:e.about})})})).catch((function(e){return console.error(e)})).finally((function(){return n.setIsLoadingState("editProfileData")}))},n.handleUpdateAvatar=function(e){n.setIsLoadingState("editAvatar"),L.setUserAvatar(e).then((function(e){return n.setState({currentUser:Object(l.a)(Object(l.a)({},n.state.currentUser),{},{userAvatar:e.avatar})})})).catch((function(e){return console.error(e)})).finally((function(){n.setIsLoadingState("editAvatar")}))},n.changeCardLike=function(e){var t=e.likes.some((function(e){return e._id===n.state.currentUser.userId}));L.changeLikeCardStatus(e._id,!t).then((function(t){var a=n.state.cards.map((function(a){return a._id===e._id?t:a}));n.setState({cards:a})})).catch((function(e){return console.error(e)}))},n.handleCardDelete=function(e){L.deleteCard(e).then((function(t){var a=n.state.cards.filter((function(t){return t._id!==e}));n.setState({cards:a})})).catch((function(e){return console.error(e)}))},n.handleAddPlaceSubmit=function(e,t){n.setIsLoadingState("addPlace"),L.addCard(e,t).then((function(e){n.setState({cards:[].concat(Object(i.a)(n.state.cards),[e])})})).catch((function(e){return console.error(e)})).finally((function(){n.setIsLoadingState("addPlace")}))},n.state={isEditProfilePopupOpen:!1,isAddPlacePopupOpen:!1,isEditAvatarPopupOpen:!1,isDeletePlacePopupOpen:!1,selectedCard:null,currentUser:{userName:"",userDescription:"",userAvatar:"",userId:""},cards:[],isLoading:{editProfileData:!1,editAvatar:!1,addPlace:!1}},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;L.getUserInfo().then((function(t){return e.setState({currentUser:{userName:t.name,userDescription:t.about,userAvatar:t.avatar,userId:t._id}})})).catch((function(e){return console.error(e)})),L.getInitialCards().then((function(t){return e.setState({cards:t})})).catch((function(e){return console.error(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement(v.Provider,{value:this.state.currentUser},r.a.createElement("div",{className:"app"},r.a.createElement(f,null),r.a.createElement(C,{cards:this.state.cards,onCardLike:this.changeCardLike,onCardDelete:this.handleCardDelete,onEditAvatar:this.handleEditAvatarClick,onEditProfile:this.handleEditProfileClick,onAddPlace:this.handleAddPlaceClick,onCardClick:this.handleCardClick,onDeletePlace:this.handleDeletePlaceClick}),r.a.createElement(g,null),r.a.createElement("section",{className:"popups"},r.a.createElement(N,{isLoading:this.state.isLoading.editProfileData,isOpen:this.state.isEditProfilePopupOpen,onClose:this.closeAllPopups,onUpdateUser:function(t,a){return e.handleUpdateUser(t,a)}}),r.a.createElement(A,{isLoading:this.state.isLoading.editAvatar,isOpen:this.state.isEditAvatarPopupOpen,onClose:this.closeAllPopups,onUpdateAvatar:function(t){var a=t.avatar;return e.handleUpdateAvatar(a)}}),r.a.createElement(j,{isLoading:this.state.isLoading.addPlace,isOpen:this.state.isAddPlacePopupOpen,onClose:this.closeAllPopups,onAddPlace:this.handleAddPlaceSubmit}),r.a.createElement(P,{isOpen:this.state.isDeletePlacePopupOpen,title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"delete-place",onClose:this.closeAllPopups,buttonText:"\u0414\u0430"}),r.a.createElement(S,{card:this.state.selectedCard,onClose:this.closeAllPopups}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.8c0eea0b.chunk.js.map
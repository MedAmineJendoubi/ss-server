"use strict";(self.webpackChunksuper_service=self.webpackChunksuper_service||[]).push([[184],{7184:(q,d,c)=>{c.r(d),c.d(d,{RegistrationModule:()=>E});var s=c(9133),e=c(1514),p=c(4404),u=c(4522),m=c(8260);let g=(()=>{class o{constructor(t){this._http=t,this.uri=m.N.serverUrl}verifyCode(t,r){const n={headers:new u.WM({"Access-Control-Allow-Origin":"*","mon-entete-personnalise":"maValeur"})};return this._http.get(`${this.uri}api/v1/auth/registration/${t}/${r}`,n)}setPassword(t,r){const n={headers:new u.WM({"Access-Control-Allow-Origin":"*","mon-entete-personnalise":"maValeur"})};return this._http.put(`${this.uri}api/v1/auth/set-password/${t}`,{password:r},n)}setRecommender(t,r){const n={headers:new u.WM({"Access-Control-Allow-Origin":"*","mon-entete-personnalise":"maValeur"})};return this._http.post(`${this.uri}api/v1/auth/set-parrainage/${t}`,{telephone:r},n)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(u.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var f=c(7919),h=c(9260),l=c(6019);function x(o,i){if(1&o&&(e.TgZ(0,"div",16),e._uU(1),e.qZA()),2&o){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.errors.phoneCodeError," ")}}function b(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"form",12),e._UZ(1,"input",13),e.TgZ(2,"input",14),e.NdJ("input",function(){return e.CHM(t),e.oxw(2).cout()}),e.qZA(),e.YNc(3,x,2,1,"div",15),e.qZA()}if(2&o){const t=e.oxw(2);e.Q6J("formGroup",t.phoneCodeForm),e.xp6(3),e.Q6J("ngIf",t.errors.phoneCodeError)}}const a=function(o){return{"opacity-50":o}};function _(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"section",8),e.TgZ(1,"header"),e.TgZ(2,"h2",9),e._uU(3,"Entrez votre code"),e.qZA(),e.TgZ(4,"p"),e._uU(5," Obtenez votre code de v\xe9rification aupr\xe8s de votre fournisseur de services. "),e.qZA(),e.qZA(),e.YNc(6,b,4,2,"form",10),e.TgZ(7,"div"),e.TgZ(8,"button",11),e.NdJ("click",function(){return e.CHM(t),e.oxw().confirmCode()}),e._uU(9," VALIDER "),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=e.oxw();e.xp6(6),e.Q6J("ngIf",t.formReady),e.xp6(2),e.Q6J("ngClass",e.VKq(3,a,t.phoneCodeForm.pristine||!t.phoneCodeForm.valid))("disabled",t.phoneCodeForm.pristine||!t.phoneCodeForm.valid)}}function C(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"section",8),e.TgZ(1,"header"),e.TgZ(2,"h2",9),e._uU(3,"Choisissez un mot de passe"),e.qZA(),e.TgZ(4,"p"),e._uU(5," Un mot de passe unique et facile \xe0 m\xe9moriser. "),e.qZA(),e.qZA(),e._UZ(6,"input",17),e.TgZ(7,"div"),e.TgZ(8,"button",18),e.NdJ("click",function(){return e.CHM(t),e.oxw().setPassword()}),e._uU(9," VALIDER "),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=e.oxw();e.xp6(6),e.Q6J("formControl",t.passwordFormControl),e.xp6(2),e.Q6J("disabled",t.passwordFormControl.pristine||!t.passwordFormControl.valid)("ngClass",e.VKq(3,a,t.passwordFormControl.pristine||!t.passwordFormControl.valid))}}function v(o,i){if(1&o&&(e.TgZ(0,"div",16),e._uU(1),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.hij(" ",t.errors.recommendError," ")}}function Z(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"section",8),e.TgZ(1,"header"),e.TgZ(2,"h2",9),e._uU(3,"Qui vous a recommand\xe9 ? "),e.qZA(),e.TgZ(4,"p"),e._uU(5," Si quelqu\u2019un vous a recommand\xe9 notre entreprise, entrez son num\xe9ro. "),e.qZA(),e.qZA(),e._UZ(6,"input",19),e.YNc(7,v,2,1,"div",15),e.TgZ(8,"div",20),e.TgZ(9,"button",21),e.NdJ("click",function(){return e.CHM(t),e.oxw().setRecommender()}),e._uU(10," Oui "),e.qZA(),e.TgZ(11,"button",22),e.NdJ("click",function(){return e.CHM(t),e.oxw().goToStep(4)}),e._uU(12," NON "),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=e.oxw();e.xp6(6),e.Q6J("formControl",t.recommendNumberFormControl),e.xp6(1),e.Q6J("ngIf",t.errors.recommendError),e.xp6(2),e.Q6J("disabled",t.recommendNumberFormControl.pristine||!t.recommendNumberFormControl.valid)("ngClass",e.VKq(4,a,t.recommendNumberFormControl.pristine||!t.recommendNumberFormControl.valid))}}function w(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"section",23),e.TgZ(1,"header"),e.TgZ(2,"h2",9),e._uU(3,"F\xe9licitation !"),e.qZA(),e.TgZ(4,"p"),e._uU(5," Votre compte a \xe9t\xe9 cr\xe9\xe9 avec succ\xe8s ! Il ne vous reste plus qu\u2019\xe0 r\xe9pondre \xe0 notre questionnaire de satisfaction afin de gagner votre bonus ! "),e.qZA(),e.qZA(),e.TgZ(6,"div"),e.TgZ(7,"button",24),e.NdJ("click",function(){return e.CHM(t),e.oxw().goToQuestions()}),e._uU(8," CONTINUER "),e.qZA(),e.qZA(),e.qZA()}}const T=[{path:"",component:(()=>{class o{constructor(t,r,n,A,R){this.router=t,this.fb=r,this._registrationService=n,this._authService=A,this._userService=R,this.step=1,this.passwordFormControl=new s.NI(void 0,[s.kI.required,s.kI.pattern(/^.{4,}$/)]),this.recommendNumberFormControl=new s.NI(void 0,[s.kI.required]),this.formReady=!1,this.token="",this.accessToken="",this.user=null,this.errors={phoneCodeError:!1,passwordError:!1,recommendError:!1}}ngOnInit(){this.initForm()}initForm(){this.phoneCodeForm=this.fb.group({telephone:[void 0,[s.kI.required]],code:[void 0,[s.kI.required,s.kI.pattern(/^[0-9]{4}$/)]]}),this.formReady=!0}cout(){}confirmCode(){this.errors.phoneCodeError=!1;let{telephone:t,code:r}=this.phoneCodeForm.getRawValue();this._registrationService.verifyCode(t,r).subscribe(n=>{n.err?(this.errors.phoneCodeError=n.err,this.phoneCodeForm.markAsPristine()):(this.client=n,this.goToStep(2))})}setPassword(){this.errors.passwordError=!1,this._registrationService.setPassword(this.client.id,this.passwordFormControl.value).subscribe(t=>{t.err?(this.errors.passwordError=t.err,this.phoneCodeForm.markAsPristine()):(this.accessToken=t.token,this.user=t.user,this.goToStep(3))})}setRecommender(){this.errors.recommendError=!1,this._registrationService.setRecommender(this.client.id,this.recommendNumberFormControl.value).subscribe(t=>{t.err?(this.errors.recommendError=t.err,this.phoneCodeForm.markAsPristine()):this.goToStep(4)})}goToStep(t){this.step=t}goToQuestions(){this._authService.accessToken=this.accessToken,this._userService.user=this.user,this.router.navigate(["/home"])}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p.F0),e.Y36(s.qu),e.Y36(g),e.Y36(f.e),e.Y36(h.K))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-registration"]],decls:12,vars:5,consts:[[1,"font-sans","min-h-full","flex","flex-col","items-center","justify-start","py-12","px-4","sm:px-6","lg:px-8"],[1,"flex-none","max-w-md","w-full"],["src","assets/icons/icon-152x152.png","alt","Workflow",1,"mx-auto","h-12","w-auto"],[1,"mt-0","mb-4","text-center"],[1,"mt-6","text-center","text-1xl","font-black","text-blue-800"],[1,"flex-grow","flex","items-center","justify-center","max-w-md","w-full",3,"ngSwitch"],["class","w-full bg-white border-gray-500 border-1 shadow-2xl rounded-lg p-4 space-y-3",4,"ngSwitchCase"],["class","font-sans w-full bg-white border-gray-500 border-1 shadow-2xl rounded-lg p-4 space-y-3",4,"ngSwitchCase"],[1,"w-full","bg-white","border-gray-500","border-1","shadow-2xl","rounded-lg","p-4","space-y-3"],[1,"font-bold"],[3,"formGroup",4,"ngIf"],[1,"group","relative","w-full","flex","justify-center","py-2","px-4","border","border-transparent","text-sm","font-medium","rounded-md","text-white","bg-green-600","hover:bg-green-700","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-green-500",3,"ngClass","disabled","click"],[3,"formGroup"],["formControlName","telephone","type","text","aria-label","T\xe9l\xe9phone","placeholder","T\xe9l\xe9phone",1,"focus:border-light-blue-500","focus:ring-1","focus:ring-light-blue-500","focus:outline-none","w-full","text-sm","text-black","placeholder-gray-500","border","border-gray-200","rounded-md","py-2","pl-10"],["formControlName","code","type","text","aria-label","Code v\xe9rification","placeholder","Code v\xe9rification (4 chiffres)",1,"focus:border-light-blue-500","mt-2","focus:ring-1","focus:ring-light-blue-500","focus:outline-none","w-full","text-sm","text-black","placeholder-gray-500","border","border-gray-200","rounded-md","py-2","pl-10",3,"input"],["class","bg-red-200 relative text-left text-red-500 text-sm mt-2 py-2 px-3 rounded-lg",4,"ngIf"],[1,"bg-red-200","relative","text-left","text-red-500","text-sm","mt-2","py-2","px-3","rounded-lg"],["type","text","aria-label","Mot de passe","placeholder","Mot de passe",1,"focus:border-light-blue-500","focus:ring-1","focus:ring-light-blue-500","focus:outline-none","w-full","text-sm","text-black","placeholder-gray-500","border","border-gray-200","rounded-md","py-2","pl-10",3,"formControl"],[1,"group","relative","w-full","flex","justify-center","py-2","px-4","border","border-transparent","text-sm","font-medium","rounded-md","text-white","bg-green-600","hover:bg-green-700","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-green-500",3,"disabled","ngClass","click"],["type","text","aria-label","T\xe9l\xe9phone","placeholder","T\xe9l\xe9phone",1,"focus:border-light-blue-500","focus:ring-1","focus:ring-light-blue-500","focus:outline-none","w-full","text-sm","text-black","placeholder-gray-500","border","border-gray-200","rounded-md","py-2","pl-10",3,"formControl"],[1,"space-x-2","w-full","relative","flex","justify-center"],[1,"group","flex","flex-grow","justify-center","py-2","px-4","border","border-transparent","text-sm","font-medium","rounded-md","text-white","bg-green-600","hover:bg-green-700","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-green-500",3,"disabled","ngClass","click"],[1,"group","flex","py-2","px-4","border","border-gray-500","text-sm","font-medium","rounded-md","text-black","bg-gray-100","hover:bg-gray-200","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-grey-100",3,"click"],[1,"font-sans","w-full","bg-white","border-gray-500","border-1","shadow-2xl","rounded-lg","p-4","space-y-3"],[1,"group","relative","w-full","flex","justify-center","py-2","px-4","border","border-transperent","text-sm","font-medium","rounded-md","text-white","bg-green-600","hover:bg-green-700","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-green-500",3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div"),e._UZ(3,"img",2),e.TgZ(4,"div",3),e.TgZ(5,"span",4),e._uU(6," Super Services "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"div",5),e.YNc(8,_,10,5,"section",6),e.YNc(9,C,10,5,"section",6),e.YNc(10,Z,13,6,"section",6),e.YNc(11,w,9,0,"section",7),e.qZA(),e.qZA()),2&t&&(e.xp6(7),e.Q6J("ngSwitch",r.step),e.xp6(1),e.Q6J("ngSwitchCase",1),e.xp6(1),e.Q6J("ngSwitchCase",2),e.xp6(1),e.Q6J("ngSwitchCase",3),e.xp6(1),e.Q6J("ngSwitchCase",4))},directives:[l.RF,l.n9,l.O5,l.mk,s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,s.oH],styles:[""]}),o})()}];var y=c(1382);let E=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[p.Bz.forChild(T),y.m]]}),o})()}}]);
"use strict";(self.webpackChunksuper_service=self.webpackChunksuper_service||[]).push([[687],{2687:(C,r,o)=>{o.r(r),o.d(r,{GeneralDetailsModule:()=>D});var e=o(1514),c=o(4522),g=o(8260);let f=(()=>{class n{constructor(t){this._http=t,this.uri=g.N.serverUrl}getMyHistory(){const t={headers:new c.WM({"Access-Control-Allow-Origin":"*","mon-entete-personnalise":"maValeur"})};return this._http.get(`${this.uri}api/v1/client/rq/my-history`,t)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(c.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var u=o(4404),a=o(6019);function d(n,i){1&n&&(e.TgZ(0,"section",2),e.TgZ(1,"span",3),e._uU(2,"Pas d'historique disponible."),e.qZA(),e.qZA())}function m(n,i){1&n&&e._UZ(0,"span",20)}function _(n,i){1&n&&e._UZ(0,"span",21)}function x(n,i){if(1&n&&(e.TgZ(0,"span",22),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.hij(" Devis ",t.ref_devis," ")}}function Z(n,i){if(1&n&&(e.TgZ(0,"span",22),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.AsE(" Client ",t.nom," ",t.prenom," ")}}function h(n,i){if(1&n&&(e.ynx(0),e.TgZ(1,"div",11),e.TgZ(2,"div",12),e.YNc(3,m,1,0,"span",13),e.YNc(4,_,1,0,"span",14),e.TgZ(5,"div",15),e.TgZ(6,"div",16),e.TgZ(7,"span"),e._uU(8),e.qZA(),e.TgZ(9,"span"),e._uU(10),e.qZA(),e.qZA(),e.TgZ(11,"div",17),e.YNc(12,x,2,1,"span",18),e.YNc(13,Z,2,2,"span",18),e.TgZ(14,"span",19),e._uU(15),e.ALo(16,"date"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.BQk()),2&n){const t=i.$implicit;e.xp6(3),e.Q6J("ngIf","Bonus utilis\xe9"==t.type),e.xp6(1),e.Q6J("ngIf","Bonus utilis\xe9"!=t.type),e.xp6(4),e.hij("",t.montant," CHF"),e.xp6(2),e.Oqu(t.type),e.xp6(2),e.Q6J("ngIf",t.ref_devis),e.xp6(1),e.Q6J("ngIf",t.nom),e.xp6(2),e.hij(" ",e.xi3(16,7,t.created_at,"d/M/yyyy")," ")}}function v(n,i){if(1&n&&(e.TgZ(0,"section",2),e.TgZ(1,"header",4),e.TgZ(2,"div",5),e.TgZ(3,"span",6),e._uU(4,"Historique Bonus"),e.qZA(),e.TgZ(5,"span",7),e._uU(6),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"main",8),e.TgZ(8,"div",9),e.YNc(9,h,17,10,"ng-container",10),e.qZA(),e.qZA(),e.qZA()),2&n){const t=e.oxw();e.xp6(6),e.hij("Reste ",t.rest," CHF"),e.xp6(3),e.Q6J("ngForOf",t.bonus_and_spendings)}}const T=function(){return{"opacity-50":!1}};function y(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"button",27),e.NdJ("click",function(){e.CHM(t);const l=e.oxw().$implicit;return e.oxw(2).goToQuizz(l)}),e._uU(2," Recevez un bonus ! "),e.qZA(),e.qZA()}2&n&&(e.xp6(1),e.Q6J("disabled",!1)("ngClass",e.DdM(2,T)))}function A(n,i){if(1&n&&(e.ynx(0),e.TgZ(1,"div",23),e.TgZ(2,"div",24),e.TgZ(3,"div",15),e.TgZ(4,"div",25),e.TgZ(5,"span"),e._uU(6),e.qZA(),e.TgZ(7,"span"),e._uU(8),e.qZA(),e.qZA(),e.TgZ(9,"div",17),e.TgZ(10,"span",22),e._uU(11),e.qZA(),e.TgZ(12,"span",19),e._uU(13),e.ALo(14,"date"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(15,y,3,3,"div",26),e.qZA(),e.BQk()),2&n){const t=i.$implicit;e.xp6(6),e.hij("",t.montant," CHF"),e.xp6(2),e.Oqu(t.type),e.xp6(3),e.hij("Devis ",t.ref_devis,""),e.xp6(2),e.Oqu(e.xi3(14,5,t.date,"d/M/yyyy")),e.xp6(2),e.Q6J("ngIf",0==t.is_activated)}}function q(n,i){if(1&n&&(e.TgZ(0,"section",2),e.TgZ(1,"header",4),e.TgZ(2,"div",5),e.TgZ(3,"span",6),e._uU(4,"Historique Devis"),e.qZA(),e._UZ(5,"span",7),e.qZA(),e.qZA(),e.TgZ(6,"main",8),e.TgZ(7,"div",9),e.YNc(8,A,16,8,"ng-container",10),e.qZA(),e.qZA(),e.qZA()),2&n){const t=e.oxw();e.xp6(8),e.Q6J("ngForOf",t.devis)}}const w=[{path:"",component:(()=>{class n{constructor(t,s){this._generalDetailsService=t,this.router=s,this.bonus_and_spendings=[],this.rest=0,this.items=[],this.devis=[]}ngOnInit(){this._generalDetailsService.getMyHistory().subscribe(t=>{this.devis=t.devis,this.createBonusAndSpendingsArray(t.bonus,t.bonus_spent)})}createBonusAndSpendingsArray(t,s){this.bonus_and_spendings=null==s?void 0:s.concat(t),this.rest=this.bonus_and_spendings.map(l=>"Bonus utilis\xe9"==l.type?-l.montant:l.montant).reduce((l,p)=>l+p,0)}goToQuizz(t){this.router.navigate(["/satisfaction-quizz/"+t.id])}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(f),e.Y36(u.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-general-details"]],decls:4,vars:3,consts:[[1,"overflow-auto","h-full","pb-64","flex","flex-col","items-start","xl:items-center","no-scrollbar"],["class","w-full pt-4 sm:pt-6",4,"ngIf"],[1,"w-full","pt-4","sm:pt-6"],[1,"text-black","font-medium","text-3xl"],[1,"w-full","flex","items-center","justify-center"],[1,"flex","flex-grow","items-center","justify-between","max-w-2xl"],[1,"text-black","font-bold","text-3xl"],[1,"font-bold","text-green-600","text-3xl","text-right"],[1,"w-full"],[1,"flex","flex-col","sm:items-center","justify-items-stretch","items-stretch"],[4,"ngFor","ngForOf"],[1,"max-w-2xl","sm:w-5/6","py-4","px-4","bg-white","shadow-xl","rounded-lg","my-4"],[1,"flex","w-full","items-center","justify-items-stretch"],["class","flex-shrink-0 bg-gray-400 h-5 w-5 m-2 rounded-full",4,"ngIf"],["class","flex-shrink-0 bg-green-400 h-5 w-5 m-2 rounded-full",4,"ngIf"],[1,"flex","flex-grow","items-center","justify-between"],[1,"flex","flex-col","items-start","justify-between","font-medium","px-2"],[1,"flex","flex-col","items-end","justify-between","text-right","text-sm","font-normal","text-gray-500","tracking-wide"],["class","block",4,"ngIf"],[1,"block","text-right"],[1,"flex-shrink-0","bg-gray-400","h-5","w-5","m-2","rounded-full"],[1,"flex-shrink-0","bg-green-400","h-5","w-5","m-2","rounded-full"],[1,"block"],[1,"max-w-2xl","sm:w-5/6","py-4","px-4","bg-white","shadow-xl","rounded-lg","my-4","flex","flex-col","items-center","w-full"],[1,"flex","w-full","items-center","justify-between"],[1,"flex","flex-col","items-start","justify-between"],[4,"ngIf"],[1,"group","relative","w-full","flex","justify-center","py-2","px-4","border","border-transparent","text-sm","font-medium","rounded-md","text-white","bg-green-600","hover:bg-green-700","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-green-500",3,"disabled","ngClass","click"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0),e.YNc(1,d,3,0,"section",1),e.YNc(2,v,10,2,"section",1),e.YNc(3,q,9,1,"section",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",0==s.bonus_and_spendings.length&&0==s.devis.length),e.xp6(1),e.Q6J("ngIf",0!=s.bonus_and_spendings.length),e.xp6(1),e.Q6J("ngIf",0!=s.devis.length))},directives:[a.O5,a.sg,a.mk],pipes:[a.uU],styles:[""]}),n})()}];var b=o(1382);let D=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[u.Bz.forChild(w),b.m]]}),n})()}}]);
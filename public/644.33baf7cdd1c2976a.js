"use strict";(self.webpackChunksuper_service=self.webpackChunksuper_service||[]).push([[644],{5644:(M,d,s)=>{s.r(d),s.d(d,{SatisfactionQuizzModule:()=>w});var e=s(1514),u=s(4404),g=s(4522),f=s(8260);let p=(()=>{class n{constructor(t){this._http=t,this.uri=f.N.serverUrl}setAnswer(t){const o={headers:new g.WM({"Access-Control-Allow-Origin":"*"})};return this._http.post(`${this.uri}api/v1/client/rq/quizz-answer`,t,o)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(g.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var a=s(6019),l=s(9133);const x=function(n,i){return{"text-sm font-medium text-black bg-gray-50 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-grey-100":n,"text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500":i}};function m(n,i){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",16),e.NdJ("click",function(){const c=e.CHM(t).index;return e.oxw(2).onSelect(c+1)}),e._uU(2),e.qZA(),e.BQk()}if(2&n){const t=i.$implicit,o=i.index,r=e.oxw(2);e.xp6(1),e.Q6J("ngClass",e.WLB(2,x,r.selectedAnswer!=o+1,r.selectedAnswer==o+1)),e.xp6(1),e.hij(" ",t.text," ")}}function h(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"label",17),e._uU(2,"Password"),e.qZA(),e.TgZ(3,"textarea",18),e.NdJ("ngModelChange",function(r){return e.CHM(t),e.oxw(2).descriptionQuestion=r}),e._uU(4,"              "),e.qZA(),e.qZA()}if(2&n){const t=e.oxw(2);e.xp6(3),e.Q6J("ngModel",t.descriptionQuestion)}}function _(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",6),e.TgZ(1,"section",7),e.TgZ(2,"header"),e.TgZ(3,"h2",8),e._uU(4),e.qZA(),e.qZA(),e.YNc(5,m,3,5,"ng-container",9),e.YNc(6,h,5,1,"div",10),e.qZA(),e.TgZ(7,"footer",11),e.TgZ(8,"button",12),e.NdJ("click",function(){return e.CHM(t),e.oxw().prev()}),e.O4$(),e.TgZ(9,"svg",13),e._UZ(10,"path",14),e.qZA(),e.qZA(),e.kcU(),e.TgZ(11,"button",15),e.NdJ("click",function(){return e.CHM(t),e.oxw().goToNextQuestion()}),e._uU(12," SUIVANT "),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.xp6(4),e.Oqu(t.question.questionText),e.xp6(1),e.Q6J("ngForOf",null==t.question?null:t.question.options),e.xp6(1),e.Q6J("ngIf",!t.question.options)}}function v(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",6),e.TgZ(1,"section",19),e.TgZ(2,"header"),e.TgZ(3,"h2",8),e._uU(4,"F\xe9licitation !"),e.qZA(),e.TgZ(5,"p"),e._uU(6," Merci d\u2019avoir pris le temps de r\xe9pondre \xe0 nos questions ! "),e.qZA(),e.TgZ(7,"p"),e._uU(8," Afin de vous remercier pour votre engagement, nous vous offrons un bonus ! "),e.qZA(),e.qZA(),e.TgZ(9,"div"),e.TgZ(10,"button",20),e.NdJ("click",function(){return e.CHM(t),e.oxw().goToClientHome()}),e._uU(11," Merci "),e.qZA(),e.qZA(),e.qZA(),e.qZA()}}const b=[{path:":devis-id",component:(()=>{class n{constructor(t,o,r,c){this.cdr=t,this.router=o,this.activatedRoute=r,this._quizzService=c,this.currentQuestionIndex=0,this.selectedAnswer=null,this.descriptionQuestion="",this.quizzFinished=!1,this.answers=[],this.questions=[{id:1,questionText:"\xcates-vous satisfait de notre services ?",options:[{text:"Excellent"},{text:"Bon"},{text:"Moyen"},{text:"Mauvais"}]},{id:2,questionText:"\xcates-vous satisfait de l\u2019amabilit\xe9 de nos \xe9quipes? ",options:[{text:"Excellent"},{text:"Bon"},{text:"Moyen"},{text:"Mauvais"}]},{id:3,questionText:"\xcates-vous satisfait du prix ?",options:[{text:"Excellent"},{text:"Bon"},{text:"Moyen"},{text:"Mauvais"}]},{id:4,questionText:"Avez-vous une requ\xeate, id\xe9e  \xe0 nous soumettre \xe0 fin de nous aider \xe0 am\xe9liorer notre service ?"}],this.question=this.questions[0],this.id=null}ngOnInit(){this.id=this.activatedRoute.snapshot.params["devis-id"],this.increaseProgressValue()}increaseProgressValue(){}goToNextQuestion(){this.currentQuestionIndex==this.questions.length-1&&""!=this.descriptionQuestion&&(this.selectedAnswer=this.descriptionQuestion),this.answers.push(this.selectedAnswer),this.selectedAnswer=null,this.currentQuestionIndex+1===this.questions.length?this.endQuizz():(this.currentQuestionIndex++,this.question=this.questions[this.currentQuestionIndex])}endQuizz(){let t={stringarray:this.answers,devis_id:this.id};this.quizzFinished=!0,this._quizzService.setAnswer(t).subscribe(o=>{})}prev(){this.currentQuestionIndex>0&&(this.answers.pop(),this.selectedAnswer=null,this.currentQuestionIndex--,this.question=this.questions[this.currentQuestionIndex])}onSelect(t){this.selectedAnswer=t}goToClientHome(){this.router.navigate(["/home"])}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO),e.Y36(u.F0),e.Y36(u.gz),e.Y36(p))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-satisfaction-quizz"]],decls:9,vars:2,consts:[[1,"font-sans","min-h-full","flex","flex-col","items-center","justify-start","py-12","px-4","sm:px-6","lg:px-8"],[1,"flex-none","max-w-md","w-full"],["src","assets/icons/icon-152x152.png","alt","Workflow",1,"mx-auto","h-12","w-auto"],[1,"mt-0","mb-4","text-center"],[1,"mt-6","text-center","text-1xl","font-black","text-blue-800"],["class","flex-grow flex flex-col items-center justify-between max-w-md w-full",4,"ngIf"],[1,"flex-grow","flex","flex-col","items-center","justify-between","max-w-md","w-full"],[1,"w-full","bg-white","border-gray-500","border-1","shadow-2xl","rounded-lg","p-4","space-y-3"],[1,"font-bold"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"space-x-2","w-full","flex","justify-center"],[1,"group","flex","flex-shrink-0","justify-center","items-center","py-2","px-4","border","border-gray-500","text-sm","font-medium","rounded-md","text-black","bg-gray-50","hover:bg-gray-200","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-grey-100",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-6","w-6","text-gray-500","group-hover:text-gray-600"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"],[1,"group","flex","justify-center","items-center","flex-grow","py-2","px-4","border","border-transparent","text-sm","font-medium","rounded-md","text-white","bg-indigo-600","hover:bg-indigo-700","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-indigo-500",3,"click"],[1,"group","w-full","flex","justify-start","items-start","py-2","px-4","border","border-gray-500","text-sm","font-medium","rounded-md","text-black","bg-gray-50","hover:bg-gray-200","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-grey-100",3,"ngClass","click"],["for","ramarque",1,"sr-only"],["rows","4","id","remarque","name","remarque","type","text","autocomplete","off","placeholder","Remarque",1,"appearance-none","relative","block","w-full","px-3","py-2","border","border-gray-300","placeholder-gray-500","text-gray-900","rounded-md","focus:outline-none","focus:ring-indigo-500","focus:border-indigo-500","focus:z-10","sm:text-sm",3,"ngModel","ngModelChange"],[1,"font-sans","w-full","bg-white","border-gray-500","border-1","shadow-2xl","rounded-lg","p-4","space-y-3"],[1,"group","relative","w-full","flex","justify-center","py-2","px-4","border","border-transperent","text-sm","font-medium","rounded-md","text-white","bg-green-600","hover:bg-green-700","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-green-500",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div"),e._UZ(3,"img",2),e.TgZ(4,"div",3),e.TgZ(5,"span",4),e._uU(6," Super Services "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(7,_,13,3,"div",5),e.YNc(8,v,12,0,"div",5),e.qZA()),2&t&&(e.xp6(7),e.Q6J("ngIf",!o.quizzFinished),e.xp6(1),e.Q6J("ngIf",o.quizzFinished))},directives:[a.O5,a.sg,a.mk,l.Fj,l.JJ,l.On],styles:["[_ngcontent-%COMP%]:root{--color-light: #f5f5fa;--color-light-1: #e3e3e3;--color-light-2: #f6f6fa;--color-black: #1b1d2a;--color-grey: #e1e1e2;--color-grey-1: #bababa;--color-light-blue: #506ef9;--default-shadow: rgba(138, 138, 138, .1)}.main[_ngcontent-%COMP%]{background:#fff;box-shadow:0 15px 10px var(--default-shadow);height:calc(100vh - 100px);border-radius:30px;display:grid;grid-template-columns:[layout-start] minmax(120px,1fr) [center-start] repeat(12,minmax(min-content,95px)) [center-end] minmax(120px,1fr) [layout-end];grid-template-rows:120px 1fr;grid-row-gap:50px;overflow:hidden;overflow-y:scroll}.header[_ngcontent-%COMP%]{grid-row:1/2;grid-column:center-start/center-end;display:grid;grid-template-columns:150px 1fr 200px;align-items:center}.icon[_ngcontent-%COMP%]{width:20px;height:20px}.questionnaire[_ngcontent-%COMP%]{grid-row:2/-1;grid-column:center-start/center-end;display:flex;flex-direction:column}.questionnaire[_ngcontent-%COMP%]   .question[_ngcontent-%COMP%]{display:grid;grid-template-rows:repeat(3,min-content);grid-row-gap:20px}.questionnaire[_ngcontent-%COMP%]   .question__heading[_ngcontent-%COMP%]{font-size:40px;justify-self:center}.questionnaire[_ngcontent-%COMP%]   .question__q[_ngcontent-%COMP%]{justify-self:center}.questionnaire[_ngcontent-%COMP%]   .question__answers[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr))}.questionnaire[_ngcontent-%COMP%]   .question__answers[_ngcontent-%COMP%]   .answer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin:15px;background-color:#fff;border:2px solid var(--color-light-1);color:var(--color-black);height:250px;cursor:pointer;border-radius:15px;transition:all .3s}.questionnaire[_ngcontent-%COMP%]   .question__answers[_ngcontent-%COMP%]   .answer.selected[_ngcontent-%COMP%]{background-color:var(--color-light-blue);color:#fff}.questionnaire[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{display:flex;justify-content:center;margin:10px 0}.questionnaire[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button.previous[_ngcontent-%COMP%]{background:#fff;padding:5px 8px;outline:none;border-radius:10px;border:1px solid var(--color-light-1);cursor:pointer}.questionnaire[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button.previous[_ngcontent-%COMP%]   .icon-back[_ngcontent-%COMP%]{width:30px;height:30px;fill:var(--color-light-blue)}.questionnaire[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button.next[_ngcontent-%COMP%]{margin-left:15px;background:var(--color-light-blue);color:#fff;padding:5px 90px;outline:none;border-radius:10px;border:0;cursor:pointer}.progress__bar[_ngcontent-%COMP%]{margin:40px 0;height:20px;background:var(--color-light-2);overflow:hidden;border-radius:10px;width:400px;align-self:center}.progress__bar--slider[_ngcontent-%COMP%]{height:inherit;width:0%;background:var(--color-light-blue);border-radius:10px}.progress__actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:400px;align-self:center;color:var(--color-grey-1);font-weight:bold;text-transform:uppercase;font-size:13px}.progress__actions[_ngcontent-%COMP%]   .p-actions-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){margin:0 5px}.logo[_ngcontent-%COMP%]{grid-column:1/2}.logo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-transform:uppercase;font-size:18px}.search[_ngcontent-%COMP%]{grid-column:3/-1;display:flex;justify-content:space-evenly;align-items:center}.search[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%]{background-color:#fff;border:0;outline:0}.search[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{border:2px solid var(--color-grey);border-radius:50%;padding:5px}.search[_ngcontent-%COMP%]   .call[_ngcontent-%COMP%]{background:#fff;outline:0;padding:6px 12px;text-transform:uppercase;font-weight:600;font-size:12px;border:2px solid var(--color-grey);border-radius:20px}.menu[_ngcontent-%COMP%]{grid-column:2/3;list-style:none;display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,min-content));justify-content:center}.menu__link[_ngcontent-%COMP%], .menu__linl[_ngcontent-%COMP%]:link, .menu__link[_ngcontent-%COMP%]:active{text-transform:uppercase;font-size:15px;padding-top:5px}.menu__link.active[_ngcontent-%COMP%]{border-top:2px solid var(--color-light-blue);font-weight:600}"]}),n})()}];var C=s(1382);let w=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[u.Bz.forChild(b),C.m]]}),n})()}}]);
"use strict";(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[290],{5290:(g,l,o)=>{o.r(l),o.d(l,{CartComponent:()=>x});var d=o(6814),m=o(1120),t=o(4769),p=o(6722);function _(n,C){if(1&n){const e=t.EpF();t.TgZ(0,"div",8)(1,"div",9),t._UZ(2,"img",10),t.qZA(),t.TgZ(3,"div",11)(4,"div")(5,"h3",12),t._uU(6),t.qZA(),t.TgZ(7,"p",13),t._uU(8),t.ALo(9,"currency"),t.qZA(),t.TgZ(10,"button",14),t.NdJ("click",function(){const c=t.CHM(e).$implicit,a=t.oxw(2);return t.KtG(a.removeItem(c.product._id))}),t._UZ(11,"i",15),t._uU(12," Remove "),t.qZA()(),t.TgZ(13,"div")(14,"button",16,17),t.NdJ("click",function(){const c=t.CHM(e).$implicit,a=t.MAs(15),h=t.MAs(20),b=t.oxw(2);return t.KtG(b.changeCount(c.count-1,c.product._id,a,h))}),t._uU(16," - "),t.qZA(),t.TgZ(17,"span"),t._uU(18),t.qZA(),t.TgZ(19,"button",18,19),t.NdJ("click",function(){const c=t.CHM(e).$implicit,a=t.MAs(15),h=t.MAs(20),b=t.oxw(2);return t.KtG(b.changeCount(c.count+1,c.product._id,a,h))}),t._uU(21," + "),t.qZA()()(),t._UZ(22,"hr"),t.qZA()}if(2&n){const e=C.$implicit;t.xp6(2),t.Q6J("src",e.product.imageCover,t.LSH)("alt",e.product.title),t.xp6(4),t.Oqu(e.product.category.name),t.xp6(2),t.hij("Price : ",t.xi3(9,5,e.price,"EGP"),""),t.xp6(10),t.Oqu(e.count)}}const v=function(n){return["/payment",n]};function s(n,C){if(1&n){const e=t.EpF();t.TgZ(0,"section",2)(1,"div",3)(2,"h2"),t._uU(3,"Shop Cart"),t.qZA(),t.TgZ(4,"button",4),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.deleteUserCart())}),t._uU(5,"Clear Cart"),t.qZA()(),t.TgZ(6,"p",5),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.YNc(9,_,23,8,"div",6),t.TgZ(10,"button",7),t._uU(11,"Payment"),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(7),t.hij("Total : ",t.xi3(8,3,e.cartData.totalCartPrice,"EGP"),""),t.xp6(2),t.Q6J("ngForOf",e.cartData.products),t.xp6(1),t.Q6J("routerLink",t.VKq(6,v,e.cartData._id))}}function u(n,C){1&n&&(t.TgZ(0,"h2",20),t._uU(1," Your Cart Is Empty.... "),t.qZA())}let x=(()=>{class n{constructor(e,r){this.AddtocartService=e,this._Renderer2=r,this.cartData=null}ngOnInit(){this.AddtocartService.getUserCart().subscribe({next:e=>{this.cartData=e.data}})}removeItem(e){this.AddtocartService.removeCartItem(e).subscribe({next:r=>{this.cartData=r.data,this.AddtocartService.cartNum.next(r.numOfCartItems)}})}changeCount(e,r,i,c){e>=0&&(this._Renderer2.setAttribute(i,"disabled","true"),this._Renderer2.setAttribute(c,"disabled","true"),this.AddtocartService.updateCartCount(r,e).subscribe({next:a=>{this.cartData=a.data,this._Renderer2.removeAttribute(i,"disabled"),this._Renderer2.removeAttribute(c,"disabled")},error:a=>{this._Renderer2.removeAttribute(i,"disabled"),this._Renderer2.removeAttribute(c,"disabled")}}))}deleteUserCart(){this.AddtocartService.clearUserCart().subscribe({next:e=>{"success"===e.message&&(this.cartData=null),this.AddtocartService.cartNum.next(0)}})}static#t=this.\u0275fac=function(r){return new(r||n)(t.Y36(p.n),t.Y36(t.Qsj))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-cart"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[["class","w-75 mx-auto shadow rounded p-3 mb-3",4,"ngIf","ngIfElse"],["msg",""],[1,"w-75","mx-auto","shadow","rounded","p-3","mb-3"],[1,"d-flex","align-items-center","justify-content-between"],[1,"btn","btn-outline-danger",3,"click"],[1,"text-main"],["class","row",4,"ngFor","ngForOf"],[1,"btn","main-btn",3,"routerLink"],[1,"row"],[1,"col-md-1"],[1,"w-100",3,"src","alt"],[1,"col-md-11","d-flex","align-items-center","justify-content-between"],[1,"h6"],[1,"text-main","small","mb-0"],[1,"btn","p-0","m-0","text-main",3,"click"],[1,"fas","fa-trash-alt"],[1,"btn","btn-sm","border-success","me-1",3,"click"],["btn1",""],[1,"btn","btn-sm","border-success","ms-1",3,"click"],["btn2",""],[1,"text-center"]],template:function(r,i){if(1&r&&(t.YNc(0,s,12,8,"section",0),t.YNc(1,u,2,0,"ng-template",null,1,t.W1O)),2&r){const c=t.MAs(2);t.Q6J("ngIf",i.cartData)("ngIfElse",c)}},dependencies:[d.ez,d.sg,d.O5,d.H9,m.rH]})}return n})()},6722:(g,l,o)=>{o.d(l,{n:()=>p});var d=o(5619),m=o(4769),t=o(9862);let p=(()=>{class _{constructor(s){this._HttpClient=s,this.cartNum=new d.X(0),this.basUrl="https://ecommerce.routemisr.com/api/v1/"}addToCart(s){return this._HttpClient.post(this.basUrl+"cart",{productId:s})}getUserCart(){return this._HttpClient.get(this.basUrl+"cart")}removeCartItem(s){return this._HttpClient.delete(this.basUrl+`cart/${s}`)}updateCartCount(s,u){return this._HttpClient.put(this.basUrl+`cart/${s}`,{count:u})}clearUserCart(){return this._HttpClient.delete(this.basUrl+"cart")}checkOut(s,u){return this._HttpClient.post(this.basUrl+`orders/checkout-session/${s}?url=http://localhost:4200`,{shippingAddress:u})}static#t=this.\u0275fac=function(u){return new(u||_)(m.LFG(t.eN))};static#e=this.\u0275prov=m.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})()}}]);
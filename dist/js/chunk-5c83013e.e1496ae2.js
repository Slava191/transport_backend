(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c83013e"],{5635:function(e,t,r){"use strict";r.r(t);var n=r("7a23"),a=Object(n["g"])("h1",null,"Создать пользователя",-1),c={class:"shadow-sm p-5 rounded mt-3 mb-3"},s=Object(n["g"])("h1",null,"Пользователи",-1),o={class:"mt-3 mb-3"};function l(e,t,r,l,u,i){var b=Object(n["y"])("CreateProfile"),d=Object(n["y"])("Users");return Object(n["q"])(),Object(n["d"])("div",null,[a,Object(n["g"])("div",c,[Object(n["g"])(b,{"onProfile-has-been-created":t[1]||(t[1]=function(e){return i.profileHasBeenCreated(e)})})]),s,Object(n["g"])("div",o,[Object(n["g"])(d)])])}var u={class:"list-group"},i={class:"float-left"};function b(e,t,r,a,c,s){return Object(n["q"])(),Object(n["d"])("div",null,[Object(n["g"])("ul",u,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(c.users,(function(e){return Object(n["q"])(),Object(n["d"])("li",{class:"list-group-item clearfix",key:e.id},[Object(n["g"])("span",i,Object(n["B"])(e.login)+" [роль: "+Object(n["B"])(e.role)+", тарифный план: "+Object(n["B"])(e.tariff)+"]",1),Object(n["g"])("button",{type:"button",class:"btn btn-outline-danger float-right",onClick:function(t){return s.deleteUser(e.id)}},"Удалить",8,["onClick"])])})),128))])])}r("4de4"),r("96cf");var d=r("1da1"),f=r("bb36"),j={name:"HelloWorld",props:{msg:String},data:function(){return{users:[]}},methods:{deleteUser:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,f["a"].delete("users/".concat(e));case 2:n=r.sent.data,n&&(t.users=t.users.filter((function(t){return t.id!==e})));case 4:case"end":return r.stop()}}),r)})))()}},created:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f["a"].get("users");case 2:e.users=t.sent.data;case 3:case"end":return t.stop()}}),t)})))()}};j.render=b;var p=j,O=r("e1df"),g={components:{Users:p,CreateProfile:O["a"]},methods:{profileHasBeenCreated:function(){this.$router.go()}}};g.render=l;t["default"]=g},e1df:function(e,t,r){"use strict";var n=r("7a23"),a={class:"mb-3"},c=Object(n["g"])("label",{for:"login",class:"form-label"},"Логин",-1),s={class:"mb-3"},o=Object(n["g"])("label",{for:"password",class:"form-label"},"Пароль",-1),l={class:"mb-3"},u=Object(n["g"])("label",{for:"password-check",class:"form-label"},"Повторите пароль",-1),i={class:"mb-3"},b=Object(n["g"])("label",{for:"tariff",class:"form-label"},"Тарифный план",-1),d=Object(n["g"])("br",null,null,-1),f=Object(n["g"])("option",{value:"1"},"1",-1),j=Object(n["g"])("option",{value:"2"},"2",-1),p={class:"mb-3"},O=Object(n["g"])("label",{for:"role",class:"form-label"},"Роль",-1),g=Object(n["g"])("br",null,null,-1),m=Object(n["g"])("option",{value:"user"},"пользователь",-1),w=Object(n["g"])("option",{value:"admin"},"администратор",-1);function h(e,t,r,h,v,k){return Object(n["q"])(),Object(n["d"])(n["a"],null,[Object(n["g"])("div",a,[c,Object(n["J"])(Object(n["g"])("input",{type:"text",class:"form-control",id:"login","onUpdate:modelValue":t[1]||(t[1]=function(e){return v.login=e})},null,512),[[n["E"],v.login]])]),Object(n["g"])("div",s,[o,Object(n["J"])(Object(n["g"])("input",{type:"password",class:"form-control",id:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return v.password=e})},null,512),[[n["E"],v.password]])]),Object(n["g"])("div",l,[u,Object(n["J"])(Object(n["g"])("input",{type:"password",class:"form-control",id:"password-check","onUpdate:modelValue":t[3]||(t[3]=function(e){return v.passwordCheck=e})},null,512),[[n["E"],v.passwordCheck]])]),e.authUser?(Object(n["q"])(),Object(n["d"])(n["a"],{key:0},[Object(n["g"])("div",i,[b,d,Object(n["J"])(Object(n["g"])("select",{class:"form-select",id:"tariff","onUpdate:modelValue":t[4]||(t[4]=function(e){return v.tariff=e})},[f,j],512),[[n["D"],v.tariff]])]),Object(n["g"])("div",p,[O,g,Object(n["J"])(Object(n["g"])("select",{class:"form-select","onUpdate:modelValue":t[5]||(t[5]=function(e){return v.role=e})},[m,w],512),[[n["D"],v.role]])])],64)):Object(n["e"])("",!0),Object(n["g"])("button",{class:["btn btn-primary",v.passwordCheck!==v.password||""===v.password?"disabled":""],onClick:t[6]||(t[6]=function(e){return k.createProfile()})},"Создать аккаунт",2)],64)}r("96cf");var v=r("1da1"),k=r("5530"),C=r("bb36"),U=r("5502"),y={data:function(){return{login:"",tariff:"1",role:"user",password:"",passwordCheck:""}},computed:Object(k["a"])({},Object(U["b"])(["authUser"])),methods:{createProfile:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r,n,a,c,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.login,n=e.password,a=e.role,c=e.tariff,t.next=3,C["a"].post("users",{login:r,password:n,role:a,tariff:c});case 3:s=t.sent.data,s.error?alert(s.error):e.$emit("profile-has-been-created",s);case 5:case"end":return t.stop()}}),t)})))()}}};y.render=h;t["a"]=y}}]);
//# sourceMappingURL=chunk-5c83013e.e1496ae2.js.map
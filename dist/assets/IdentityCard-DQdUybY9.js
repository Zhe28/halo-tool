import{d as w,v as b,e as C,f as y,g as $,h as x}from"./element-plus-o18x5DlY.js";import{p as V}from"./@element-plus-f_Xer6pm.js";import{a as I}from"./axios-B4uVmeYG.js";import{d as E,r as m,Y as k,c as U,K as t,O as o,o as B,u as R,S as p}from"./@vue-BjrUeJdS.js";import"./lodash-es-CMgfkmJ7.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-Bjrvts8m.js";import"./@ctrl-r5W6hzzQ.js";function T(){let i="";const l=window.location.hostname,a=window.location.protocol;return i&&window.location.protocol==="https:"?i=`${a}//${l}:522/`:i=`${a}//${l}:521/`,I.create({baseURL:i})}const h=T(),F=async()=>(await h.get("/getRandomIdentityCard")).data,M=E({__name:"IdentityCard",setup(i){const l=m(!1),a=m(""),s=m("");function c(n){navigator.clipboard&&n&&(C({type:"success",message:`当前复制的内容是：${n}`,showClose:!0,duration:1e3}),navigator.clipboard.writeText(n))}function _(){l.value=!0,F().then(n=>{a.value=n.name,s.value=n.number,l.value=!1})}return(n,e)=>{const d=y,u=$,f=x,v=w,g=b;return k((B(),U("div",null,[t(v,{"label-position":"right","label-width":"auto"},{default:o(()=>[t(u,null,{default:o(()=>[t(d,{type:"primary",icon:R(V),onClick:e[0]||(e[0]=r=>_())},{default:o(()=>[p("获取随机身份证")]),_:1},8,["icon"])]),_:1}),t(u,{label:"姓名"},{default:o(()=>[t(f,{modelValue:a.value,"onUpdate:modelValue":e[2]||(e[2]=r=>a.value=r),placeholder:"点击获取按钮之后生成"},{append:o(()=>[t(d,{onClick:e[1]||(e[1]=r=>c(a.value))},{default:o(()=>[p("复制")]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(u,{label:"身份证号码"},{default:o(()=>[t(f,{modelValue:s.value,"onUpdate:modelValue":e[4]||(e[4]=r=>s.value=r),placeholder:"点击获取按钮之后生成"},{append:o(()=>[t(d,{onClick:e[3]||(e[3]=r=>c(s.value))},{default:o(()=>[p("复制")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})])),[[g,l.value]])}}});export{M as default};

import{m as r,d as i,u as c}from"./index.f39b3244.js";const a=t=>r(i(t)),f=t=>r(t);function s(t){if(t===window)return{top:0,left:0};const{top:n,left:e}=t.getBoundingClientRect();return{top:n,left:e}}function d(t){return t===window?window.innerHeight:t.getBoundingClientRect().height}function g(t,n){const e=t.style;for(const o in n)e[o]=n[o]}function p(t){if(t==null)return;if(typeof t=="string")try{return document.querySelector(t)||void 0}catch{return}const n=c(t);if(n)return n.$el||n}function h(t,n){return t!==void 0&&t()||n}function m(t,n){return t!==void 0?n.concat(t()):n}export{d as a,m as b,a as c,f as d,g as e,p as g,h,s as o};

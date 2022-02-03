var v=Object.defineProperty;var c=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var p=(e,t,o)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,i=(e,t)=>{for(var o in t||(t={}))g.call(t,o)&&p(e,o,t[o]);if(c)for(var o of c(t))u.call(t,o)&&p(e,o,t[o]);return e};var f=(e,t)=>{var o={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&c)for(var r of c(e))t.indexOf(r)<0&&u.call(e,r)&&(o[r]=e[r]);return o};import{c as l,j as B,a as k,b as m,d as w,e as T,f as S,g as j,l as D,h as E,i as M,k as L,m as O,n as P,o as C,p as A,q as N,r as $,s as q,t as z}from"./vendor.f4de6661.js";const I=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}};I();const R={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};var F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:R});const J=l`
  border: none;
  border-radius: 4px;
  font-weight: 700;
  height: 32px;
  line-height: 16px;
  min-width: 60px;
  padding: 8px 4px;
  position: relative;
  :active {
    top: 1px;
  }
`,K=l`
  background-color: #00c1cf;
  color: white;
  :hover {
    background-color: #5ec9d1;
    color: white;
  }
`,Z=l`
  background-color: #ff002b;
  color: white;
  :hover {
    background-color: #ff3b3b;
    color: white;
  }
`,G=l`
  background-color: #dfdfdf;
  color: #3c3c3c;
  :active {
    top: 0;
  }
`,b=n=>{var s=n,{buttonStyle:e="primary",disabled:t=!1,label:o}=s,r=f(s,["buttonStyle","disabled","label"]);return B("button",{css:[J,t?G:e==="danger"?Z:K],children:o})};var H={parameters:{storySource:{source:`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../src/components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'test',
};

export const Danger = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Danger.args = {
  label: 'test',
  buttonStyle: 'danger',
};

export const Disabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Disabled.args = {
  label: 'test',
  disabled: true,
};
`,locationsMap:{primary:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},danger:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},disabled:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}}}}},title:"components/Button",component:b,argTypes:{backgroundColor:{control:"color"}}};const d=e=>k(b,i({},e)),y=d.bind({});y.args={label:"test"};const h=d.bind({});h.args={label:"test",buttonStyle:"danger"};const _=d.bind({});_.args={label:"test",disabled:!0};const Q=["Primary","Danger","Disabled"];var U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:H,Primary:y,Danger:h,Disabled:_,__namedExportsOrder:Q});const V=[M,L,O,P,C,A,N,$,q,z,F];V.forEach(e=>{Object.keys(e).forEach(t=>{const o=e[t];switch(t){case"args":case"argTypes":return D.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(o));case"decorators":return o.forEach(r=>j(r,!1));case"loaders":return o.forEach(r=>S(r,!1));case"parameters":return m(i({},o),!1);case"argTypesEnhancers":return o.forEach(r=>T(r));case"argsEnhancers":return o.forEach(r=>w(r));case"globals":case"globalTypes":{const r={};return r[t]=o,m(r,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(t+" was not supported :( !")}})});function x(e){return{"/home/runner/work/react-vite-all/react-vite-all/stories/Button.stories.tsx":U}[e]}Object.assign(x,{keys:()=>["/home/runner/work/react-vite-all/react-vite-all/stories/Button.stories.tsx"],resolve:e=>({"/home/runner/work/react-vite-all/react-vite-all/stories/Button.stories.tsx":"./stories/Button.stories.tsx"})[e]});E(x,{hot:!1},!1);
//# sourceMappingURL=iframe.7b895fb4.js.map

var T=Object.defineProperty,S=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var f=(e,o,t)=>o in e?T(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,i=(e,o)=>{for(var t in o||(o={}))u.call(o,t)&&f(e,t,o[t]);if(c)for(var t of c(o))p.call(o,t)&&f(e,t,o[t]);return e},m=(e,o)=>S(e,j(o));var b=(e,o)=>{var t={};for(var r in e)u.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&c)for(var r of c(e))o.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t};import{c as l,j as D,a as E,b as y,d as M,e as L,f as O,g as P,l as C,h as A,i as N,k as $,m as q,n as z,o as I,p as R,q as F,r as J,s as K,t as Z}from"./vendor.f4de6661.js";const G=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}};G();const H={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};var Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:H});const U=l`
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
`,V=l`
  background-color: #00c1cf;
  color: white;
  :hover {
    background-color: #5ec9d1;
    color: white;
  }
`,W=l`
  background-color: #ff002b;
  color: white;
  :hover {
    background-color: #ff3b3b;
    color: white;
  }
`,X=l`
  background-color: #dfdfdf;
  color: #3c3c3c;
  :active {
    top: 0;
  }
`,h=a=>{var g=a,{buttonStyle:e="primary",disabled:o=!1,label:t,testId:r,onClick:n}=g,s=b(g,["buttonStyle","disabled","label","testId","onClick"]);const k=o?X:e==="danger"?W:V;return D("button",m(i({"data-testid":`${r}-button`,css:[U,k],onClick:w=>{!o&&n&&n(w)}},s),{children:t}))};var Y={parameters:{storySource:{source:`import React from 'react';
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
`,locationsMap:{primary:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},danger:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},disabled:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}}}}},title:"components/Button",component:h,argTypes:{backgroundColor:{control:"color"}}};const d=e=>E(h,i({},e)),_=d.bind({});_.args={label:"test"};const x=d.bind({});x.args={label:"test",buttonStyle:"danger"};const v=d.bind({});v.args={label:"test",disabled:!0};const ee=["Primary","Danger","Disabled"];var oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Y,Primary:_,Danger:x,Disabled:v,__namedExportsOrder:ee});const te=[N,$,q,z,I,R,F,J,K,Z,Q];te.forEach(e=>{Object.keys(e).forEach(o=>{const t=e[o];switch(o){case"args":case"argTypes":return C.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(t));case"decorators":return t.forEach(r=>P(r,!1));case"loaders":return t.forEach(r=>O(r,!1));case"parameters":return y(i({},t),!1);case"argTypesEnhancers":return t.forEach(r=>L(r));case"argsEnhancers":return t.forEach(r=>M(r));case"globals":case"globalTypes":{const r={};return r[o]=t,y(r,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(o+" was not supported :( !")}})});function B(e){return{"/home/runner/work/react-vite-all/react-vite-all/stories/Button.stories.tsx":oe}[e]}Object.assign(B,{keys:()=>["/home/runner/work/react-vite-all/react-vite-all/stories/Button.stories.tsx"],resolve:e=>({"/home/runner/work/react-vite-all/react-vite-all/stories/Button.stories.tsx":"./stories/Button.stories.tsx"})[e]});A(B,{hot:!1},!1);
//# sourceMappingURL=iframe.154298ab.js.map

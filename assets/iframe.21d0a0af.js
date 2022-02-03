var m=Object.defineProperty;var i=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var l=(r,e,o)=>e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,c=(r,e)=>{for(var o in e||(e={}))y.call(e,o)&&l(r,o,e[o]);if(i)for(var o of i(e))h.call(e,o)&&l(r,o,e[o]);return r};import{j as u,a as d,b as _,c as b,d as B,e as v,l as T,f as E,g as x,h as O,i as j,k,m as M,n as w,o as S,p as L,q as P,r as C}from"./vendor.76f290e4.js";const A=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}};A();const N={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};var D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:N});const f=()=>u("button",{children:"aaaa"});var q={parameters:{storySource:{source:`import React from 'react';
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
  children: 'Button',
};
`,locationsMap:{primary:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}}}}},title:"components/Button",component:f,argTypes:{backgroundColor:{control:"color"}}};const z=r=>u(f,c({},r)),g=z.bind({});g.args={children:"Button"};const I=["Primary"];var R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:q,Primary:g,__namedExportsOrder:I});const $=[x,O,j,k,M,w,S,L,P,C,D];$.forEach(r=>{Object.keys(r).forEach(e=>{const o=r[e];switch(e){case"args":case"argTypes":return T.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(o));case"decorators":return o.forEach(n=>v(n,!1));case"loaders":return o.forEach(n=>B(n,!1));case"parameters":return d(c({},o),!1);case"argTypesEnhancers":return o.forEach(n=>b(n));case"argsEnhancers":return o.forEach(n=>_(n));case"globals":case"globalTypes":{const n={};return n[e]=o,d(n,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(e+" was not supported :( !")}})});function p(r){return{"/home/runner/work/react-vite-all/react-vite-all/stories/Button.stories.tsx":R}[r]}Object.assign(p,{keys:()=>["/home/runner/work/react-vite-all/react-vite-all/stories/Button.stories.tsx"],resolve:r=>({"/home/runner/work/react-vite-all/react-vite-all/stories/Button.stories.tsx":"./stories/Button.stories.tsx"})[r]});E(p,{hot:!1},!1);
//# sourceMappingURL=iframe.21d0a0af.js.map

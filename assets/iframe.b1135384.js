var K=Object.defineProperty,U=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var L=(o,t,e)=>t in o?K(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,i=(o,t)=>{for(var e in t||(t={}))M.call(t,e)&&L(o,e,t[e]);if(y)for(var e of y(t))C.call(t,e)&&L(o,e,t[e]);return o},f=(o,t)=>U(o,W(t));var T=(o,t)=>{var e={};for(var r in o)M.call(o,r)&&t.indexOf(r)<0&&(e[r]=o[r]);if(o!=null&&y)for(var r of y(o))t.indexOf(r)<0&&C.call(o,r)&&(e[r]=o[r]);return e};import{c as d,j as p,a,r as m,b as j,n as u,d as Z,e as B,f as G,g as H,h as Q,i as V,l as X,k as Y,m as oo,o as to,p as eo,q as ro,s as no,t as so,u as ao,v as io,w as co,x as lo}from"./vendor.7f1d1827.js";const po=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}};po();const mo={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};var uo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:mo});const go=d`
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
`,yo=d`
  background-color: #00c1cf;
  color: white;
  :hover {
    background-color: #5ec9d1;
    color: white;
  }
`,fo=d`
  background-color: #ff002b;
  color: white;
  :hover {
    background-color: #ff3b3b;
    color: white;
  }
`,bo=d`
  background-color: #dfdfdf;
  color: #3c3c3c;
  :active {
    top: 0;
  }
`,b=c=>{var l=c,{buttonStyle:o="primary",disabled:t=!1,label:e,testId:r,onClick:n}=l,s=T(l,["buttonStyle","disabled","label","testId","onClick"]);const g=t?bo:o==="danger"?fo:yo;return p("button",f(i({"data-testid":`${r}-button`,css:[go,g],onClick:h=>{!t&&n&&n(h)}},s),{children:e}))};var xo={parameters:{storySource:{source:`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../src/components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
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
`,locationsMap:{primary:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},danger:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},disabled:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}}}}},title:"components/Button",component:b,argTypes:{backgroundColor:{control:"color"}}};const v=o=>a(b,i({},o)),E=v.bind({});E.args={label:"test"};const O=v.bind({});O.args={label:"test",buttonStyle:"danger"};const D=v.bind({});D.args={label:"test",disabled:!0};const ho=["Primary","Danger","Disabled"];var To=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:xo,Primary:E,Danger:O,Disabled:D,__namedExportsOrder:ho});const vo=d`
  background-color: #eeeeee;
  border-radius: 4px;
  padding: 8px;
`,_=({children:o})=>p("div",{css:vo,children:o});var _o={parameters:{storySource:{source:`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from '../src/components/Card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'testtest',
};
`,locationsMap:{primary:{startLoc:{col:46,line:13},endLoc:{col:74,line:13},startBody:{col:46,line:13},endBody:{col:74,line:13}}}}},title:"components/Card",component:_};const wo=o=>a(_,i({},o)),I=wo.bind({});I.args={children:"testtest"};const ko=["Primary"];var So=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_o,Primary:I,__namedExportsOrder:ko});const Mo=d`
  box-sizing: border-box;
  border: solid 1px #cccccc;
  border-radius: 4px;
  line-height: 16px;
  padding: 8px 4px;
  height: 32px;
`,w=m.exports.forwardRef((r,e)=>{var n=r,{testId:o}=n,t=T(n,["testId"]);return p("input",f(i({},t),{css:Mo,ref:e,"data-testid":`${o}-input`}))});var Co={parameters:{storySource:{source:`import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from '../src/components/Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => {
  const [text, setText] = useState('');
  return (
    <Input
      {...args}
      value={text}
      onChange={(e) => {
        setText(e.target.value);
      }}
    />
  );
};

export const Text = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Text.args = {
  type: 'text',
};

export const Email = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Email.args = {
  type: 'email',
};

export const Number = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Number.args = {
  type: 'number',
};

export const Password = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Password.args = {
  type: 'password',
};
`,locationsMap:{text:{startLoc:{col:47,line:17},endLoc:{col:1,line:28},startBody:{col:47,line:17},endBody:{col:1,line:28}},email:{startLoc:{col:47,line:17},endLoc:{col:1,line:28},startBody:{col:47,line:17},endBody:{col:1,line:28}},number:{startLoc:{col:47,line:17},endLoc:{col:1,line:28},startBody:{col:47,line:17},endBody:{col:1,line:28}},password:{startLoc:{col:47,line:17},endLoc:{col:1,line:28},startBody:{col:47,line:17},endBody:{col:1,line:28}}}}},title:"components/Input",component:w,argTypes:{backgroundColor:{control:"color"}}};const x=o=>{const[t,e]=m.exports.useState("");return a(w,f(i({},o),{value:t,onChange:r=>{e(r.target.value)}}))},$=x.bind({});$.args={type:"text"};const P=x.bind({});P.args={type:"email"};const F=x.bind({});F.args={type:"number"};const R=x.bind({});R.args={type:"password"};const Lo=["Text","Email","Number","Password"];var jo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Co,Text:$,Email:P,Number:F,Password:R,__namedExportsOrder:Lo});const k=({handleSubmit:o})=>{const[t,e]=m.exports.useState(""),r=m.exports.useMemo(()=>t.length===0,[t]);return j("div",{children:[a(w,{type:"text",value:t,onChange:s=>e(s.target.value),testId:"todoForm"}),a(b,{onClick:()=>{t.length>0&&(o(t),e(""))},disabled:r,label:"ADD",testId:"todoForm"})]})},Bo=u.ul`
  list-style: none;
  padding: 0;
`,Eo=u.li`
  margin: 4px 0;
`,Oo=u.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`,Do=u.span`
  color: #3c3c3c;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,S=({todos:o,onRemove:t,testId:e})=>a(Bo,{children:o.map(r=>a(Eo,{children:a(_,{children:j(Oo,{children:[a(Do,{children:r.content}),a(b,{onClick:()=>t(r.id),buttonStyle:"danger",label:"remove",testId:`${e}-remove-${r.id}`})]})})},r.id))}),Io=u.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20%;
`,$o=u.div`
  width: 100%;
`,Po=d`
  color: #3c3c3c;
`,A=()=>{const[o,t]=m.exports.useState([]),[e,r]=m.exports.useState(0),n=()=>{r(l=>l+1)},s=l=>{t(g=>[...g,{id:e,content:l}]),n()},c=l=>{t(g=>g.filter(h=>h.id!==l))};return Z(Io,{children:[p("h2",{css:Po,children:"Todo app"}),p(k,{handleSubmit:s}),p($o,{children:p(S,{todos:o,onRemove:c,testId:"todo"})})]})};var Fo={parameters:{storySource:{source:`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Todo } from '../src/components/Todo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/Todo',
  component: Todo,
} as ComponentMeta<typeof Todo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Todo> = (args) => <Todo {...args} />;

export const App = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
App.args = {};
`,locationsMap:{app:{startLoc:{col:46,line:13},endLoc:{col:74,line:13},startBody:{col:46,line:13},endBody:{col:74,line:13}}}}},title:"components/Todo",component:A};const Ro=o=>a(A,i({},o)),N=Ro.bind({});N.args={};const Ao=["App"];var No=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Fo,App:N,__namedExportsOrder:Ao}),zo={parameters:{storySource:{source:`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TodoForm } from '../src/components/TodoForm';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/TodoForm',
  component: TodoForm,
} as ComponentMeta<typeof TodoForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TodoForm> = (args) => <TodoForm {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
`,locationsMap:{default:{startLoc:{col:50,line:13},endLoc:{col:82,line:13},startBody:{col:50,line:13},endBody:{col:82,line:13}}}}},title:"components/TodoForm",component:k};const qo=o=>a(k,i({},o)),z=qo.bind({});z.args={};const Jo=["Default"];var Ko=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:zo,Default:z,__namedExportsOrder:Jo}),Uo={parameters:{storySource:{source:`import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TodoList } from '../src/components/TodoList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/TodoList',
  component: TodoList,
} as ComponentMeta<typeof TodoList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TodoList> = (args) => {
  const [todos, setTodos] = useState(args.todos);
  const onRemove = (i: number) => {
    setTodos((state) => state.filter((item) => item.id !== i));
  };
  return <TodoList todos={todos} onRemove={onRemove} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  todos: [
    {
      id: 0,
      content: 'aaa',
    },
    {
      id: 1,
      content: 'bbb',
    },
    {
      id: 2,
      content: 'ccc',
    },
  ],
};
`,locationsMap:{default:{startLoc:{col:50,line:13},endLoc:{col:1,line:19},startBody:{col:50,line:13},endBody:{col:1,line:19}}}}},title:"components/TodoList",component:S};const Wo=o=>{const[t,e]=m.exports.useState(o.todos);return a(S,{todos:t,onRemove:n=>{e(s=>s.filter(c=>c.id!==n))}})},q=Wo.bind({});q.args={todos:[{id:0,content:"aaa"},{id:1,content:"bbb"},{id:2,content:"ccc"}]};const Zo=["Default"];var Go=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Uo,Default:q,__namedExportsOrder:Zo});const Ho=[oo,to,eo,ro,no,so,ao,io,co,lo,uo];Ho.forEach(o=>{Object.keys(o).forEach(t=>{const e=o[t];switch(t){case"args":case"argTypes":return X.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(e));case"decorators":return e.forEach(r=>V(r,!1));case"loaders":return e.forEach(r=>Q(r,!1));case"parameters":return B(i({},e),!1);case"argTypesEnhancers":return e.forEach(r=>H(r));case"argsEnhancers":return e.forEach(r=>G(r));case"globals":case"globalTypes":{const r={};return r[t]=e,B(r,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(t+" was not supported :( !")}})});function J(o){return{"/home/runner/work/react-vite-all/react-vite-all/stories/Button.stories.tsx":To,"/home/runner/work/react-vite-all/react-vite-all/stories/Card.stories.tsx":So,"/home/runner/work/react-vite-all/react-vite-all/stories/Input.stories.tsx":jo,"/home/runner/work/react-vite-all/react-vite-all/stories/Todo.stories.tsx":No,"/home/runner/work/react-vite-all/react-vite-all/stories/TodoForm.stories.tsx":Ko,"/home/runner/work/react-vite-all/react-vite-all/stories/TodoList.stories.tsx":Go}[o]}Object.assign(J,{keys:()=>["/home/runner/work/react-vite-all/react-vite-all/stories/Button.stories.tsx","/home/runner/work/react-vite-all/react-vite-all/stories/Card.stories.tsx","/home/runner/work/react-vite-all/react-vite-all/stories/Input.stories.tsx","/home/runner/work/react-vite-all/react-vite-all/stories/Todo.stories.tsx","/home/runner/work/react-vite-all/react-vite-all/stories/TodoForm.stories.tsx","/home/runner/work/react-vite-all/react-vite-all/stories/TodoList.stories.tsx"],resolve:o=>({"/home/runner/work/react-vite-all/react-vite-all/stories/Button.stories.tsx":"./stories/Button.stories.tsx","/home/runner/work/react-vite-all/react-vite-all/stories/Card.stories.tsx":"./stories/Card.stories.tsx","/home/runner/work/react-vite-all/react-vite-all/stories/Input.stories.tsx":"./stories/Input.stories.tsx","/home/runner/work/react-vite-all/react-vite-all/stories/Todo.stories.tsx":"./stories/Todo.stories.tsx","/home/runner/work/react-vite-all/react-vite-all/stories/TodoForm.stories.tsx":"./stories/TodoForm.stories.tsx","/home/runner/work/react-vite-all/react-vite-all/stories/TodoList.stories.tsx":"./stories/TodoList.stories.tsx"})[o]});Y(J,{hot:!1},!1);
//# sourceMappingURL=iframe.b1135384.js.map

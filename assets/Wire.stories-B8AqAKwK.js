import{j as r}from"./jsx-runtime-u17CrQMm.js";import"./iframe-_qyoTMca.js";import{W as s}from"./Wire-CNlaNKCj.js";import"./preload-helper-ClwkVg-s.js";import"./useRender-B5Rc5Af4.js";import"./useRenderElement-DbIlFmMk.js";function i(e){const{start:o={x:32,y:64},end:d={x:288,y:224},curve:n="bezier",styleType:p="solid",keyColor:c="cyan",coordinateSystem:l="world",viewWidth:m=320,viewHeight:y=260,...g}=e;return r.jsx("div",{style:{padding:24,background:"var(--surface)",maxWidth:360},children:r.jsx(s,{...g,start:o,end:d,curve:n,styleType:p,keyColor:c,coordinateSystem:l,viewWidth:m,viewHeight:y})})}i.__docgenInfo={description:"",methods:[],displayName:"Example"};const j={title:"Components/Node Graph/Wire",component:s,args:{start:{x:32,y:64},end:{x:288,y:224},curve:"bezier",styleType:"solid",keyColor:"cyan",coordinateSystem:"world",viewWidth:320,viewHeight:260}},a={render:e=>r.jsx(i,{...e})},t={render:e=>r.jsxs("div",{style:{display:"grid",gap:16,padding:24,background:"var(--surface)",maxWidth:360},children:[r.jsx(s,{...e,styleType:"solid"}),r.jsx(s,{...e,styleType:"dash"}),r.jsx(s,{...e,curve:"straight"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Example {...args} />
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 16,
    padding: 24,
    background: 'var(--surface)',
    maxWidth: 360
  }}>
      <Wire {...args} styleType="solid" />
      <Wire {...args} styleType="dash" />
      <Wire {...args} curve="straight" />
    </div>
}`,...t.parameters?.docs?.source}}};const w=["Default","Variants"];export{a as Default,t as Variants,w as __namedExportsOrder,j as default};

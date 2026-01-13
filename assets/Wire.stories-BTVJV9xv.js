import{j as r}from"./jsx-runtime-u17CrQMm.js";import{W as a}from"./Wire-CsSf4Vjn.js";import"./useRender-gc-Urm6-.js";import"./useRenderElement-BTFgfi7u.js";import"./iframe-DXTOWhks.js";import"./preload-helper-ClwkVg-s.js";const m={title:"Components/Node Graph/Wire",component:a,args:{start:{x:32,y:64},end:{x:288,y:224},curve:"bezier",styleType:"solid",keyColor:"cyan",coordinateSystem:"world",viewWidth:320,viewHeight:260}},s={render:e=>r.jsx("div",{style:{padding:24,background:"var(--surface)",maxWidth:360},children:r.jsx(a,{...e})})},t={render:e=>r.jsxs("div",{style:{display:"grid",gap:16,padding:24,background:"var(--surface)",maxWidth:360},children:[r.jsx(a,{...e,styleType:"solid"}),r.jsx(a,{...e,styleType:"dash"}),r.jsx(a,{...e,curve:"straight"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: 24,
    background: 'var(--surface)',
    maxWidth: 360
  }}>
      <Wire {...args} />
    </div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const l=["Default","Variants"];export{s as Default,t as Variants,l as __namedExportsOrder,m as default};

import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-CCXoyw4a.js";import{P as r}from"./PortAddButton-DNf9jkcH.js";import"./preload-helper-ClwkVg-s.js";import"./createReactComponent-jK5G3a0p.js";import"./useRender-CjIyLm8X.js";import"./useRenderElement-Dib1w6l6.js";import"./IconPlus-B-mlbLKY.js";function a(t){const{label:d="Add Port",pinKeyColor:n="violet",...i}=t;return e.jsx(r,{...i,label:d,pinKeyColor:n})}a.__docgenInfo={description:"",methods:[],displayName:"Example"};const P={title:"Components/Node Graph/Port Add Button",component:r,args:{label:"Add Port",pinKeyColor:"violet"}},s={render:t=>e.jsx(a,{...t})},o={render:t=>e.jsxs("div",{style:{display:"grid",gap:12,maxWidth:280},children:[e.jsx(r,{...t,state:"enabled"}),e.jsx(r,{...t,state:"hovered"}),e.jsx(r,{...t,state:"focused"}),e.jsx(r,{...t,state:"pressed"}),e.jsx(r,{...t,state:"disabled"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Example {...args} />
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 12,
    maxWidth: 280
  }}>
      <PortAddButton {...args} state="enabled" />
      <PortAddButton {...args} state="hovered" />
      <PortAddButton {...args} state="focused" />
      <PortAddButton {...args} state="pressed" />
      <PortAddButton {...args} state="disabled" />
    </div>
}`,...o.parameters?.docs?.source}}};const f=["Default","StaticStates"];export{s as Default,o as StaticStates,f as __namedExportsOrder,P as default};

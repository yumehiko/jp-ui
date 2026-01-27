import{j as s}from"./jsx-runtime-u17CrQMm.js";import"./iframe-BbjfZeeI.js";import{P as t}from"./Pin-BfWPyuo-.js";import"./preload-helper-ClwkVg-s.js";import"./useRenderElement-BVqzaTVZ.js";import"./useRender-Dpge_qI5.js";function o(e){const{keyColor:n="blue",shape:d="circle",state:i="enabled",isConnected:c=!1,...l}=e;return s.jsx(t,{...l,keyColor:n,shape:d,state:i,isConnected:c})}o.__docgenInfo={description:"",methods:[],displayName:"Example"};const j={title:"Components/Node Graph/Pin",component:t,args:{keyColor:"blue",shape:"circle",state:"enabled",isConnected:!1}},a={render:e=>s.jsx(o,{...e})},r={render:e=>s.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[s.jsx(t,{...e,state:"enabled"}),s.jsx(t,{...e,state:"hovered"}),s.jsx(t,{...e,state:"focused"}),s.jsx(t,{...e,state:"dragged"}),s.jsx(t,{...e,state:"enabled",isConnected:!0})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Example {...args} />
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      <Pin {...args} state="enabled" />
      <Pin {...args} state="hovered" />
      <Pin {...args} state="focused" />
      <Pin {...args} state="dragged" />
      <Pin {...args} state="enabled" isConnected />
    </div>
}`,...r.parameters?.docs?.source}}};const b=["Default","States"];export{a as Default,r as States,b as __namedExportsOrder,j as default};

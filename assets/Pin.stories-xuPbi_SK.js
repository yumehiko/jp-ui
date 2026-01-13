import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as t}from"./Pin-CE-4ovuZ.js";import"./iframe-DXTOWhks.js";import"./preload-helper-ClwkVg-s.js";import"./useRenderElement-BTFgfi7u.js";import"./useRender-gc-Urm6-.js";const l={title:"Components/Node Graph/Pin",component:t,args:{keyColor:"blue",shape:"circle",state:"enabled",isConnected:!1}},a={},r={render:s=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(t,{...s,state:"enabled"}),e.jsx(t,{...s,state:"hovered"}),e.jsx(t,{...s,state:"focused"}),e.jsx(t,{...s,state:"dragged"}),e.jsx(t,{...s,state:"enabled",isConnected:!0})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const m=["Default","States"];export{a as Default,r as States,m as __namedExportsOrder,l as default};

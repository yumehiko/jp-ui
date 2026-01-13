import{j as t}from"./jsx-runtime-u17CrQMm.js";import{P as e}from"./PortLabel-BQ39aahN.js";import"./createReactComponent-C_lxYtL5.js";import"./useRender-gc-Urm6-.js";import"./useRenderElement-BTFgfi7u.js";import"./iframe-DXTOWhks.js";import"./preload-helper-ClwkVg-s.js";const m={title:"Components/Node Graph/Port Label",component:e,args:{portName:"Port Name",direction:"output",state:"enabled"}},o={},s={render:r=>t.jsxs("div",{style:{display:"grid",gap:12,maxWidth:280},children:[t.jsx(e,{...r,direction:"input"}),t.jsx(e,{...r,direction:"output"}),t.jsx(e,{...r,direction:"output",state:"hovered"}),t.jsx(e,{...r,direction:"output",state:"focused"}),t.jsx(e,{...r,direction:"output",state:"pressed"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 12,
    maxWidth: 280
  }}>
      <PortLabel {...args} direction="input" />
      <PortLabel {...args} direction="output" />
      <PortLabel {...args} direction="output" state="hovered" />
      <PortLabel {...args} direction="output" state="focused" />
      <PortLabel {...args} direction="output" state="pressed" />
    </div>
}`,...s.parameters?.docs?.source}}};const l=["Default","Directions"];export{o as Default,s as Directions,l as __namedExportsOrder,m as default};

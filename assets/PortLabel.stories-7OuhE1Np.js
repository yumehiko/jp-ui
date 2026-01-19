import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-CfY7OXdM.js";import{P as r}from"./PortLabel-HMTy2dvI.js";import"./preload-helper-ClwkVg-s.js";import"./createReactComponent-otxxmNPT.js";import"./useRender-VSZd6TiO.js";import"./useRenderElement-Bkl9eyxk.js";function a(t){const{portName:i="Port Name",direction:d="output",state:p="enabled",...n}=t;return e.jsx(r,{...n,portName:i,direction:d,state:p})}a.__docgenInfo={description:"",methods:[],displayName:"Example"};const P={title:"Components/Node Graph/Port Label",component:r,args:{portName:"Port Name",direction:"output",state:"enabled"}},o={render:t=>e.jsx(a,{...t})},s={render:t=>e.jsxs("div",{style:{display:"grid",gap:12,maxWidth:280},children:[e.jsx(r,{...t,direction:"input"}),e.jsx(r,{...t,direction:"output"}),e.jsx(r,{...t,direction:"output",state:"hovered"}),e.jsx(r,{...t,direction:"output",state:"focused"}),e.jsx(r,{...t,direction:"output",state:"pressed"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Example {...args} />
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const b=["Default","Directions"];export{o as Default,s as Directions,b as __namedExportsOrder,P as default};

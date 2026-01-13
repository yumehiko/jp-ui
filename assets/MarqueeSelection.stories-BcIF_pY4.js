import{j as r}from"./jsx-runtime-u17CrQMm.js";import{u as l}from"./useRender-5e0tRF_F.js";import{m as p}from"./useRenderElement-CMXJqYpU.js";import"./iframe-CKEcgdJA.js";import"./preload-helper-ClwkVg-s.js";const c="_root_9ev61_1",m={root:c};function i({rect:e,visible:a=!0,render:o,...n}){if(!a)return null;const{style:s}=n,d={left:e.x,top:e.y,width:e.width,height:e.height,...s};return l({defaultTagName:"div",render:o,props:p({className:m.root,style:d},n)})}const y={title:"Components/Node Graph/Marquee Selection",component:i,parameters:{layout:"fullscreen",centeredStage:!1},args:{rect:{x:48,y:56,width:200,height:140},visible:!0}},t={render:e=>r.jsx("div",{style:{padding:"48px 24px",background:"var(--surface)",minHeight:"100vh",display:"flex",justifyContent:"center",width:"100vw",marginLeft:"calc(50% - 50vw)"},children:r.jsx("div",{style:{position:"relative",width:"min(960px, 100%)",height:420,borderRadius:16,border:"1px dashed var(--outline-variant)"},children:r.jsx(i,{...e})})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: '48px 24px',
    background: 'var(--surface)',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    width: '100vw',
    marginLeft: 'calc(50% - 50vw)'
  }}>
      <div style={{
      position: 'relative',
      width: 'min(960px, 100%)',
      height: 420,
      borderRadius: 16,
      border: '1px dashed var(--outline-variant)'
    }}>
        <MarqueeSelection {...args} />
      </div>
    </div>
}`,...t.parameters?.docs?.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,y as default};

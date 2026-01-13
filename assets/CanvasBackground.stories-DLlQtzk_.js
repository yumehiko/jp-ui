import{j as e}from"./jsx-runtime-u17CrQMm.js";import{u as m}from"./useRender-5e0tRF_F.js";import{m as g}from"./useRenderElement-CMXJqYpU.js";import"./iframe-CKEcgdJA.js";import"./preload-helper-ClwkVg-s.js";const x="_root_1ead1_1",h="_content_1ead1_9",i={root:x,content:h},c=64,_=c,f=c/2,C=2,S=1,y=(n,t,o)=>{const d=Math.max(S,C*n),a=f*n,r=_*n;return{backgroundColor:"var(--surface)",backgroundImage:`radial-gradient(circle ${d}px at ${a}px ${a}px, var(--outline-variant) 0, var(--outline-variant) 100%, transparent 100%)`,backgroundRepeat:"repeat",backgroundSize:`${r}px ${r}px`,backgroundPosition:t!==void 0||o!==void 0?`${t??0}px ${o??0}px`:void 0}};function l({render:n,scale:t=1,offsetX:o,offsetY:d,...a}){const{children:r,style:v}=a,p={...y(t,o,d),...v},u=r?e.jsx("div",{className:i.content,children:r}):null;return m({defaultTagName:"div",render:n,props:g({className:i.root,style:p},{...a,children:u})})}const j={title:"Components/Node Graph/Canvas Background",component:l,parameters:{layout:"fullscreen"},args:{scale:1}},s={render:n=>e.jsx("div",{style:{padding:"48px 24px",background:"var(--surface)",minHeight:"100vh",width:"100vw",marginLeft:"calc(50% - 50vw)"},children:e.jsx("div",{style:{width:"100%",maxWidth:1200,height:"min(70vh, 720px)",margin:"0 auto",borderRadius:16,overflow:"hidden",border:"1px solid var(--outline-variant)"},children:e.jsx(l,{...n,children:e.jsx("div",{style:{padding:24,color:"var(--on-surface)"},children:"Canvas content"})})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: '48px 24px',
    background: 'var(--surface)',
    minHeight: '100vh',
    width: '100vw',
    marginLeft: 'calc(50% - 50vw)'
  }}>
      <div style={{
      width: '100%',
      maxWidth: 1200,
      height: 'min(70vh, 720px)',
      margin: '0 auto',
      borderRadius: 16,
      overflow: 'hidden',
      border: '1px solid var(--outline-variant)'
    }}>
        <CanvasBackground {...args}>
          <div style={{
          padding: 24,
          color: 'var(--on-surface)'
        }}>Canvas content</div>
        </CanvasBackground>
      </div>
    </div>
}`,...s.parameters?.docs?.source}}};const I=["Default"];export{s as Default,I as __namedExportsOrder,j as default};

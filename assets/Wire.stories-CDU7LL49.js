import{j as r}from"./jsx-runtime-u17CrQMm.js";import{u as N}from"./useRender-5e0tRF_F.js";import{m as R}from"./useRenderElement-CMXJqYpU.js";import"./iframe-CKEcgdJA.js";import"./preload-helper-ClwkVg-s.js";const A="10 8",B=(e,s,l)=>{const i=s.x-e.x,n=Math.max(24,Math.abs(i)*l),d=Math.sign(i)||1,o={x:e.x+n*d,y:e.y},a={x:s.x-n*d,y:s.y};return`M ${e.x},${e.y} C ${o.x},${o.y} ${a.x},${a.y} ${s.x},${s.y}`};function t({start:e,end:s,curve:l="bezier",styleType:i="solid",state:n="enabled",keyColor:d="red",viewWidth:o,viewHeight:a,coordinateSystem:v,render:j,...f}){const{className:k,style:M}=f,b=n==="focused",T=2,y=`var(--${d}, var(--error))`,V=i==="dash"?A:void 0,c=8,h=Math.min(e.x,s.x)-c,m=Math.min(e.y,s.y)-c,z=Math.max(e.x,s.x)+c,S=Math.max(e.y,s.y)+c,C=z-h,D=S-m,$=v==="world"||v===void 0&&(o!==void 0||a!==void 0),W=o??C,w=a??D,u=$?e:{x:e.x-h,y:e.y-m},g=$?s:{x:s.x-h,y:s.y-m},E=l==="straight"?`M ${u.x},${u.y} L ${g.x},${g.y}`:B(u,g,.5),L=b?`drop-shadow(0 0 1px ${y}) drop-shadow(0 0 4px ${y})`:void 0;return N({defaultTagName:"svg",render:j,props:R({className:k,style:M,width:W,height:w,viewBox:`0 0 ${W} ${w}`,preserveAspectRatio:"none","aria-hidden":!0,children:r.jsx("path",{d:E,fill:"none",stroke:y,strokeWidth:T,strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:V,style:{filter:L}})},f)})}const O={title:"Components/Node Graph/Wire",component:t,args:{start:{x:32,y:64},end:{x:288,y:224},curve:"bezier",styleType:"solid",keyColor:"cyan",coordinateSystem:"world",viewWidth:320,viewHeight:260}},p={render:e=>r.jsx("div",{style:{padding:24,background:"var(--surface)",maxWidth:360},children:r.jsx(t,{...e})})},x={render:e=>r.jsxs("div",{style:{display:"grid",gap:16,padding:24,background:"var(--surface)",maxWidth:360},children:[r.jsx(t,{...e,styleType:"solid"}),r.jsx(t,{...e,styleType:"dash"}),r.jsx(t,{...e,curve:"straight"})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: 24,
    background: 'var(--surface)',
    maxWidth: 360
  }}>
      <Wire {...args} />
    </div>
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const q=["Default","Variants"];export{p as Default,x as Variants,q as __namedExportsOrder,O as default};

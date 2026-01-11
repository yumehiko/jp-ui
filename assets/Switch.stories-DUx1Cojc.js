import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as t}from"./iframe-Cmvfh17G.js";import{I as ie}from"./createReactComponent-5rqvGB8u.js";import{f as de,a as me,b as ue,c as pe,u as $,m as fe}from"./mergeClassName-dOdSFm9_.js";import{I as he}from"./IconCheck-TTpISTXs.js";import{u as ge}from"./useControlled-BBFCwpov.js";import{u as be}from"./useStableCallback-BEAimJHI.js";import{v as xe}from"./visuallyHidden-CbwUG2x5.js";import{u as Ce}from"./useBaseUiId-D7e4Ee19.js";import{f as ke,b as ve,u as W,a as ye,c as Se}from"./LabelableContext-KDiA04jZ.js";import{u as Ne}from"./useLabelableId-CTiB5yr-.js";import{c as je,n as we}from"./createBaseUIEventDetails-Cyfvwxl4.js";import{u as Re}from"./useValueChanged-CgOzuj11.js";import{u as _e}from"./useButton-DwKrixY2.js";import{F as Ie,a as Fe}from"./FieldLabel-DILXpBdF.js";import"./preload-helper-ClwkVg-s.js";import"./useRender-DMRv1Kuw.js";import"./useId-LNKUT0Vr.js";import"./index-B54fwijY.js";import"./index-BEdyinQm.js";import"./floating-ui.utils.dom-CWuwp5es.js";import"./FieldsetRootContext-1WNvWAB5.js";import"./useTimeout-D2Qg8aaH.js";import"./useOnMount-7xXoBRtt.js";import"./element-C8qsRkBu.js";import"./detectBrowser-CYw91I8L.js";import"./constants-CNjsXAL1.js";const H=t.createContext(void 0);function Le(){const e=t.useContext(H);if(e===void 0)throw new Error(de(63));return e}let O=(function(e){return e.checked="data-checked",e.unchecked="data-unchecked",e.disabled="data-disabled",e.readonly="data-readonly",e.required="data-required",e.valid="data-valid",e.invalid="data-invalid",e.touched="data-touched",e.dirty="data-dirty",e.filled="data-filled",e.focused="data-focused",e})({});const U={...ke,checked(e){return e?{[O.checked]:""}:{[O.unchecked]:""}}},Pe=t.forwardRef(function(c,m){const{checked:p,className:S,defaultChecked:N,id:j,inputRef:w,name:R,nativeButton:D=!1,onCheckedChange:G,readOnly:f=!1,required:h=!1,disabled:J=!1,render:ze,uncheckedValue:I,...K}=c,{clearErrors:Q}=ve(),{state:F,setTouched:X,setDirty:Y,validityData:Z,setFilled:_,setFocused:L,shouldValidateOnChange:A,validationMode:ee,disabled:ae,name:se,validation:r}=W(),{labelId:te}=ye(),n=ae||J,i=se??R,P=be(G),d=t.useRef(null),E=me(d,w,r.inputRef),g=t.useRef(null),T=Ce(),V=Ne({id:j,implicit:!1,controlRef:g}),[s,B]=ge({controlled:p,default:!!N,name:"Switch",state:"checked"});Se({id:T,commit:r.commit,value:s,controlRef:g,name:i,getValue:()=>s}),ue(()=>{d.current&&_(d.current.checked)},[d,_]),Re(s,()=>{Q(i),Y(s!==Z.initialValue),_(s),A()?r.commit(s):r.commit(s,!0)});const{getButtonProps:re,buttonRef:ne}=_e({disabled:n,native:D}),oe={id:T,role:"switch","aria-checked":s,"aria-readonly":f||void 0,"aria-labelledby":te,onFocus(){n||L(!0)},onBlur(){const o=d.current;!o||n||(X(!0),L(!1),ee==="onBlur"&&r.commit(o.checked))},onClick(o){f||n||(o.preventDefault(),d?.current?.click())}},le=t.useMemo(()=>pe({checked:s,disabled:n,id:V,name:i,required:h,style:xe,tabIndex:-1,type:"checkbox","aria-hidden":!0,ref:E,onChange(o){if(o.nativeEvent.defaultPrevented)return;const q=o.target.checked,z=je(we,o.nativeEvent);P?.(q,z),!z.isCanceled&&B(q)},onFocus(){g.current?.focus()}},r.getInputValidationProps),[s,n,E,V,i,P,h,B,r]),M=t.useMemo(()=>({...F,checked:s,disabled:n,readOnly:f,required:h}),[F,s,n,f,h]),ce=$("span",c,{state:M,ref:[m,g,ne],props:[oe,r.getValidationProps,K,re],stateAttributesMapping:U});return a.jsxs(H.Provider,{value:M,children:[ce,!s&&i&&I!==void 0&&a.jsx("input",{type:"hidden",name:i,value:I}),a.jsx("input",{...le})]})}),Ee=t.forwardRef(function(c,m){const{render:p,className:S,...N}=c,{state:j}=W(),w=Le(),R={...j,...w};return $("span",c,{state:R,ref:m,stateAttributesMapping:U,props:N})}),Te="_Label_lhftx_1",Ve="_Switch_lhftx_9",Be="_StateLayer_lhftx_59",Me="_Thumb_lhftx_69",qe="_Icon_lhftx_87",u={Label:Te,Switch:Ve,StateLayer:Be,Thumb:Me,Icon:qe},l=t.forwardRef(({className:e,icon:c,size:m="large",...p},S)=>a.jsxs(Pe,{ref:S,className:fe(e,u.Switch),"data-size":m,...p,children:[a.jsx("span",{"aria-hidden":"true",className:u.StateLayer}),a.jsx(Ee,{className:u.Thumb,children:c??a.jsx(ie,{icon:he,size:16,className:u.Icon})})]}));l.displayName="Switch";l.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:"'large' | 'small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'large'",computed:!1}}}};const pa={title:"Components/Switch",component:l,args:{defaultChecked:!1}},y=`typesetting-label typesetting-tsumegumi ${u.Label}`,b={render:e=>a.jsx(l,{...e})},x={args:{defaultChecked:!0},render:e=>a.jsxs("label",{className:y,children:[a.jsx(l,{...e}),"通知を有効にする"]})},C={args:{disabled:!0},render:e=>a.jsxs("label",{className:y,children:[a.jsx(l,{...e}),"通知を有効にする"]})},k={args:{size:"small"},render:e=>a.jsxs("label",{className:y,children:[a.jsx(l,{...e}),"通知を有効にする"]})},v={render:e=>a.jsx(Ie,{name:"notifications",children:a.jsxs(Fe,{className:y,children:[a.jsx(l,{...e}),"通知を有効にする"]})})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <Switch {...args} />
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  },
  render: args => <label className={labelClassName}>
      <Switch {...args} />
      通知を有効にする
    </label>
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <label className={labelClassName}>
      <Switch {...args} />
      通知を有効にする
    </label>
}`,...C.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  },
  render: args => <label className={labelClassName}>
      <Switch {...args} />
      通知を有効にする
    </label>
}`,...k.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <Field.Root name="notifications">
      <Field.Label className={labelClassName}>
        <Switch {...args} />
        通知を有効にする
      </Field.Label>
    </Field.Root>
}`,...v.parameters?.docs?.source}}};const fa=["Default","Checked","Disabled","Small","WithFieldLabel"];export{x as Checked,b as Default,C as Disabled,k as Small,v as WithFieldLabel,fa as __namedExportsOrder,pa as default};

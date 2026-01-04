import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as t}from"./iframe-CbECxjq5.js";import{I as de}from"./Icon-D1kJnNbP.js";import{f as ie,a as me,b as ue,c as pe,u as $,m as fe}from"./mergeClassName-IXwn37SS.js";import{u as he}from"./useControlled-C4PWAOlh.js";import{u as ge}from"./useStableCallback-D6w4asaT.js";import{v as be}from"./visuallyHidden-CbwUG2x5.js";import{u as xe}from"./useBaseUiId-DYV6Jlu1.js";import{f as Ce,b as ke,u as W,a as ve,c as ye}from"./LabelableContext-P5lwU5Pp.js";import{u as Se}from"./useLabelableId-GKuttH5A.js";import{c as Ne,n as je}from"./createBaseUIEventDetails-Ca3whcAT.js";import{u as we}from"./useValueChanged-9XaIK5SP.js";import{u as Re}from"./useButton-CFXQrDeP.js";import{F as _e,a as Fe}from"./FieldLabel-DJC0go9a.js";import"./preload-helper-ClwkVg-s.js";import"./useId-kuykVazU.js";import"./index-D8RucqKe.js";import"./index-D2G6Vmfx.js";import"./floating-ui.utils.dom-CWuwp5es.js";import"./FieldsetRootContext-CtfBA5DW.js";import"./useTimeout-BMAPPt2Y.js";import"./useOnMount-B177qC_F.js";import"./element-C8qsRkBu.js";import"./detectBrowser-CYw91I8L.js";import"./constants-CNjsXAL1.js";const H=t.createContext(void 0);function Ie(){const e=t.useContext(H);if(e===void 0)throw new Error(ie(63));return e}let O=(function(e){return e.checked="data-checked",e.unchecked="data-unchecked",e.disabled="data-disabled",e.readonly="data-readonly",e.required="data-required",e.valid="data-valid",e.invalid="data-invalid",e.touched="data-touched",e.dirty="data-dirty",e.filled="data-filled",e.focused="data-focused",e})({});const U={...Ce,checked(e){return e?{[O.checked]:""}:{[O.unchecked]:""}}},Le=t.forwardRef(function(c,m){const{checked:p,className:S,defaultChecked:N,id:j,inputRef:w,name:R,nativeButton:D=!1,onCheckedChange:G,readOnly:f=!1,required:h=!1,disabled:J=!1,render:qe,uncheckedValue:F,...K}=c,{clearErrors:Q}=ke(),{state:I,setTouched:X,setDirty:Y,validityData:Z,setFilled:_,setFocused:L,shouldValidateOnChange:A,validationMode:ee,disabled:ae,name:se,validation:r}=W(),{labelId:te}=ve(),n=ae||J,d=se??R,P=ge(G),i=t.useRef(null),E=me(i,w,r.inputRef),g=t.useRef(null),T=xe(),V=Se({id:j,implicit:!1,controlRef:g}),[s,B]=he({controlled:p,default:!!N,name:"Switch",state:"checked"});ye({id:T,commit:r.commit,value:s,controlRef:g,name:d,getValue:()=>s}),ue(()=>{i.current&&_(i.current.checked)},[i,_]),we(s,()=>{Q(d),Y(s!==Z.initialValue),_(s),A()?r.commit(s):r.commit(s,!0)});const{getButtonProps:re,buttonRef:ne}=Re({disabled:n,native:D}),oe={id:T,role:"switch","aria-checked":s,"aria-readonly":f||void 0,"aria-labelledby":te,onFocus(){n||L(!0)},onBlur(){const o=i.current;!o||n||(X(!0),L(!1),ee==="onBlur"&&r.commit(o.checked))},onClick(o){f||n||(o.preventDefault(),i?.current?.click())}},le=t.useMemo(()=>pe({checked:s,disabled:n,id:V,name:d,required:h,style:be,tabIndex:-1,type:"checkbox","aria-hidden":!0,ref:E,onChange(o){if(o.nativeEvent.defaultPrevented)return;const q=o.target.checked,z=Ne(je,o.nativeEvent);P?.(q,z),!z.isCanceled&&B(q)},onFocus(){g.current?.focus()}},r.getInputValidationProps),[s,n,E,V,d,P,h,B,r]),M=t.useMemo(()=>({...I,checked:s,disabled:n,readOnly:f,required:h}),[I,s,n,f,h]),ce=$("span",c,{state:M,ref:[m,g,ne],props:[oe,r.getValidationProps,K,re],stateAttributesMapping:U});return a.jsxs(H.Provider,{value:M,children:[ce,!s&&d&&F!==void 0&&a.jsx("input",{type:"hidden",name:d,value:F}),a.jsx("input",{...le})]})}),Pe=t.forwardRef(function(c,m){const{render:p,className:S,...N}=c,{state:j}=W(),w=Ie(),R={...j,...w};return $("span",c,{state:R,ref:m,stateAttributesMapping:U,props:N})}),Ee="_Label_lhftx_1",Te="_Switch_lhftx_9",Ve="_StateLayer_lhftx_59",Be="_Thumb_lhftx_69",Me="_Icon_lhftx_87",u={Label:Ee,Switch:Te,StateLayer:Ve,Thumb:Be,Icon:Me},l=t.forwardRef(({className:e,icon:c,size:m="large",...p},S)=>a.jsxs(Le,{ref:S,className:fe(e,u.Switch),"data-size":m,...p,children:[a.jsx("span",{"aria-hidden":"true",className:u.StateLayer}),a.jsx(Pe,{className:u.Thumb,children:c??a.jsx(de,{name:"check",size:16,className:u.Icon})})]}));l.displayName="Switch";l.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:"'large' | 'small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'large'",computed:!1}}}};const ia={title:"Components/Switch",component:l,args:{defaultChecked:!1}},y=`typesetting-label typesetting-tsumegumi ${u.Label}`,b={render:e=>a.jsx(l,{...e})},x={args:{defaultChecked:!0},render:e=>a.jsxs("label",{className:y,children:[a.jsx(l,{...e}),"通知を有効にする"]})},C={args:{disabled:!0},render:e=>a.jsxs("label",{className:y,children:[a.jsx(l,{...e}),"通知を有効にする"]})},k={args:{size:"small"},render:e=>a.jsxs("label",{className:y,children:[a.jsx(l,{...e}),"通知を有効にする"]})},v={render:e=>a.jsx(_e,{name:"notifications",children:a.jsxs(Fe,{className:y,children:[a.jsx(l,{...e}),"通知を有効にする"]})})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const ma=["Default","Checked","Disabled","Small","WithFieldLabel"];export{x as Checked,b as Default,C as Disabled,k as Small,v as WithFieldLabel,ma as __namedExportsOrder,ia as default};

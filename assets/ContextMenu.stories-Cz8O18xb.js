import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as l,I as u}from"./createReactComponent-C_lxYtL5.js";import{m as t}from"./Menu.module-D1Z7661E.js";import{C as x,a as c,b as s,c as r,d as a,e as m,f as n,g as i,h as C,i as M}from"./ContextMenu-onD6Dh5p.js";import"./useRender-gc-Urm6-.js";import"./useRenderElement-BTFgfi7u.js";import"./iframe-DXTOWhks.js";import"./preload-helper-ClwkVg-s.js";import"./popupStateMapping-Csy42F0a.js";import"./useId-BJ-y_LgZ.js";import"./mergeClassName-B5sciBbI.js";import"./index-BN4-ulEm.js";import"./index-DKbiDhZH.js";import"./floating-ui.utils.dom-BNEJHq5G.js";import"./detectBrowser-CYw91I8L.js";import"./visuallyHidden-CbwUG2x5.js";import"./createBaseUIEventDetails-CmO-hy-h.js";import"./element-DeoA7-AC.js";import"./constants-Ch9WEdMh.js";import"./useStableCallback-BDMERGMM.js";import"./event-C18T9oSl.js";import"./useOpenChangeComplete-D1K7ii_8.js";import"./useValueAsRef-k4PRLY8s.js";import"./useAnimationFrame-BplCHzTd.js";import"./useOnMount-6B5-eC0T.js";import"./useControlled-CK1YI1eF.js";import"./useCompositeListItem-9KgwLeaV.js";import"./useBaseUiId-D2VPSDn3.js";import"./useTransitionStatus-CXSzklcg.js";import"./ToolbarRootContext-BPx-nQo7.js";import"./composite-CYH66KrV.js";import"./getDisabledMountTransitionStyles-0qffSz7h.js";import"./useHoverReferenceInteraction-CsCPRrKh.js";import"./safePolygon-MvKa3UHB.js";import"./useTimeout-dWIC8jeY.js";import"./useInteractions-C8ADo7A6.js";import"./InternalBackdrop-CHkwllYj.js";import"./owner-CvMgaIeV.js";import"./inertValue-DS8zlsqa.js";import"./useAnchorPositioning-DdpFv8rM.js";import"./floating-ui.utils-CtlI5I81.js";import"./DirectionContext-DE2Fvuom.js";import"./useSyncedFloatingRootContext-Vs5IBgVS.js";import"./getEmptyRootContext-CoUiOdUG.js";import"./useRole-l1zBCurp.js";import"./useListNavigation-DH_jpS-y.js";import"./composite-BqvolqMu.js";import"./useTypeahead-B9zj_Ujz.js";import"./useButton-B08MghPh.js";import"./useClick-drQPeWEM.js";import"./Separator-B2Ujx8hJ.js";const d=[["path",{d:"M10 18l6 -6l-6 -6v12",key:"svg-0"}]],h=l("outline","caret-right","CaretRight",d),Me={title:"Components/Context Menu",decorators:[p=>e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(p,{})})]},o={render:()=>e.jsxs(x,{children:[e.jsx(c,{children:"右クリックで開く"}),e.jsx(s,{children:e.jsx(r,{children:e.jsx(a,{children:e.jsxs(m,{children:[e.jsxs(n,{children:[e.jsx("span",{className:t.ItemLabel,children:"複製"}),e.jsx("span",{className:t.ItemRight,children:e.jsx("span",{className:t.ItemShortcut,children:"⌘D"})})]}),e.jsx(n,{children:e.jsx("span",{className:t.ItemLabel,children:"共有"})}),e.jsx(i,{}),e.jsxs(C,{children:[e.jsxs(M,{children:[e.jsx("span",{className:t.ItemLabel,children:"移動"}),e.jsx("span",{className:t.ItemTrailingIcon,children:e.jsx(u,{icon:h,size:16})})]}),e.jsx(s,{children:e.jsx(r,{alignOffset:-4,sideOffset:-4,children:e.jsx(a,{children:e.jsxs(m,{children:[e.jsx(n,{children:e.jsx("span",{className:t.ItemLabel,children:"作業用"})}),e.jsx(n,{children:e.jsx("span",{className:t.ItemLabel,children:"アーカイブ"})})]})})})})]}),e.jsx(i,{}),e.jsx(n,{children:e.jsx("span",{className:t.ItemLabel,children:"削除"})})]})})})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenuRoot>
      <ContextMenuTrigger>右クリックで開く</ContextMenuTrigger>
      <ContextMenuPortal>
        <ContextMenuPositioner>
          <ContextMenuPopup>
            <ContextMenuContent>
              <ContextMenuItem>
                <span className={menuStyles.ItemLabel}>複製</span>
                <span className={menuStyles.ItemRight}>
                  <span className={menuStyles.ItemShortcut}>⌘D</span>
                </span>
              </ContextMenuItem>
              <ContextMenuItem>
                <span className={menuStyles.ItemLabel}>共有</span>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuSubmenuRoot>
                <ContextMenuSubmenuTrigger>
                  <span className={menuStyles.ItemLabel}>移動</span>
                  <span className={menuStyles.ItemTrailingIcon}>
                    <Icon icon={IconCaretRight} size={16} />
                  </span>
                </ContextMenuSubmenuTrigger>
                <ContextMenuPortal>
                  <ContextMenuPositioner alignOffset={-4} sideOffset={-4}>
                    <ContextMenuPopup>
                      <ContextMenuContent>
                        <ContextMenuItem>
                          <span className={menuStyles.ItemLabel}>作業用</span>
                        </ContextMenuItem>
                        <ContextMenuItem>
                          <span className={menuStyles.ItemLabel}>アーカイブ</span>
                        </ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenuPopup>
                  </ContextMenuPositioner>
                </ContextMenuPortal>
              </ContextMenuSubmenuRoot>
              <ContextMenuSeparator />
              <ContextMenuItem>
                <span className={menuStyles.ItemLabel}>削除</span>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenuPopup>
        </ContextMenuPositioner>
      </ContextMenuPortal>
    </ContextMenuRoot>
}`,...o.parameters?.docs?.source}}};const de=["Default"];export{o as Default,de as __namedExportsOrder,Me as default};

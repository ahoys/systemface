import{a as e,n as t}from"./chunk-BneVvdWh.js";import{n}from"./react-dom-BvSj50BA.js";import{i as r,o as i,s as a,t as o,u as s}from"./iframe-CgMbDZL2.js";var c,l,u,d,f,p,m,h,g,_,v,y;t((()=>{o(),c=e(n(),1),l=s(),u=e=>{let t=(0,c.useRef)(null);return(0,l.jsx)(`div`,{ref:t,children:(0,l.jsx)(r,{...e,parentRef:t})})},d={title:`atoms/Menu`,component:u,tags:[`autodocs`],args:{}},f={position:`absolute`,display:`flex`,alignItems:`flex-start`,top:0,right:0,bottom:0,left:0},p=[`Some text`,(0,l.jsx)(a,{onClick:()=>alert(`1`),children:`Click me 1`},0),(0,l.jsx)(a,{onClick:()=>alert(`2`),children:`Click me 2`},1),`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`],m={render:()=>{let e=(0,c.useRef)(null);return(0,l.jsxs)(`div`,{style:{...f,alignItems:`center`,justifyContent:`center`},children:[(0,l.jsx)(i,{ref:e,type:`text`}),(0,l.jsx)(r,{parentRef:e,children:p})]})}},h={render:()=>{let e=(0,c.useRef)(null);return(0,l.jsxs)(`div`,{style:f,children:[(0,l.jsx)(i,{ref:e,type:`text`}),(0,l.jsx)(r,{parentRef:e,children:p})]})}},g={render:()=>{let e=(0,c.useRef)(null);return(0,l.jsxs)(`div`,{style:{...f,justifyContent:`flex-end`},children:[(0,l.jsx)(i,{ref:e,type:`text`}),(0,l.jsx)(r,{parentRef:e,children:p})]})}},_={render:()=>{let e=(0,c.useRef)(null);return(0,l.jsxs)(`div`,{style:{...f,alignItems:`flex-end`},children:[(0,l.jsx)(i,{ref:e,type:`text`}),(0,l.jsx)(r,{parentRef:e,children:p})]})}},v={render:()=>{let e=(0,c.useRef)(null);return(0,l.jsxs)(`div`,{style:{...f,alignItems:`flex-end`,justifyContent:`flex-end`},children:[(0,l.jsx)(i,{ref:e,type:`text`}),(0,l.jsx)(r,{parentRef:e,children:p})]})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const parentRef = useRef<HTMLInputElement>(null);
    return <div style={{
      ...defaultStyle,
      alignItems: "center",
      justifyContent: "center"
    }}>
                <Input ref={parentRef} type="text" />
                <Menu parentRef={parentRef}>{defaultOptions}</Menu>
            </div>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const parentRef = useRef<HTMLInputElement>(null);
    return <div style={defaultStyle}>
                <Input ref={parentRef} type="text" />
                <Menu parentRef={parentRef}>{defaultOptions}</Menu>
            </div>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const parentRef = useRef<HTMLInputElement>(null);
    return <div style={{
      ...defaultStyle,
      justifyContent: "flex-end"
    }}>
                <Input ref={parentRef} type="text" />
                <Menu parentRef={parentRef}>{defaultOptions}</Menu>
            </div>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const parentRef = useRef<HTMLInputElement>(null);
    return <div style={{
      ...defaultStyle,
      alignItems: "flex-end"
    }}>
                <Input ref={parentRef} type="text" />
                <Menu parentRef={parentRef}>{defaultOptions}</Menu>
            </div>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const parentRef = useRef<HTMLInputElement>(null);
    return <div style={{
      ...defaultStyle,
      alignItems: "flex-end",
      justifyContent: "flex-end"
    }}>
                <Input ref={parentRef} type="text" />
                <Menu parentRef={parentRef}>{defaultOptions}</Menu>
            </div>;
  }
}`,...v.parameters?.docs?.source}}},y=[`PartOfCenterInput`,`PartOfTopLeftInput`,`PartOfTopRightInput`,`PartOfBottomLeftInput`,`PartOfBottomRightInput`]}))();export{_ as PartOfBottomLeftInput,v as PartOfBottomRightInput,m as PartOfCenterInput,h as PartOfTopLeftInput,g as PartOfTopRightInput,y as __namedExportsOrder,d as default};
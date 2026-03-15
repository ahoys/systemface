import{a as e,n as t}from"./chunk-BneVvdWh.js";import{n}from"./react-dom-BvSj50BA.js";import{l as r,p as i,s as a,t as o,u as s}from"./iframe-Cg9cV7bP.js";var c,l,u,d,f,p,m,h,g,_,v,y,b;t((()=>{o(),c=e(n(),1),l=i(),u=e=>{let t=(0,c.useRef)(null);return(0,l.jsx)(`div`,{ref:t,children:(0,l.jsx)(a,{...e,parentRef:t})})},d={title:`atoms/Menu`,component:u,tags:[`autodocs`],args:{}},f={position:`absolute`,display:`flex`,alignItems:`flex-start`,top:`1rem`,right:`1rem`,bottom:`1rem`,left:`1rem`},p=[`Some text`,(0,l.jsx)(s,{onClick:()=>alert(`1`),children:`Click me 1`},0),(0,l.jsx)(s,{onClick:()=>alert(`2`),children:`Click me 2`},1),`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`],m={render:()=>{let[e,t]=(0,c.useState)(!1),n=(0,c.useRef)(null);return(0,l.jsxs)(`div`,{style:f,children:[(0,l.jsx)(s,{ref:n,onClick:()=>t(e=>!e),children:`Open Menu`}),e&&(0,l.jsx)(a,{parentRef:n,children:p})]})}},h={render:()=>{let e=(0,c.useRef)(null);return(0,l.jsxs)(`div`,{style:{...f,alignItems:`center`,justifyContent:`center`},children:[(0,l.jsx)(r,{ref:e,type:`text`}),(0,l.jsx)(a,{parentRef:e,children:p})]})}},g={render:()=>{let e=(0,c.useRef)(null);return(0,l.jsxs)(`div`,{style:f,children:[(0,l.jsx)(r,{ref:e,type:`text`}),(0,l.jsx)(a,{parentRef:e,children:p})]})}},_={render:()=>{let e=(0,c.useRef)(null);return(0,l.jsxs)(`div`,{style:{...f,justifyContent:`flex-end`},children:[(0,l.jsx)(r,{ref:e,type:`text`}),(0,l.jsx)(a,{parentRef:e,children:p})]})}},v={render:()=>{let e=(0,c.useRef)(null);return(0,l.jsxs)(`div`,{style:{...f,alignItems:`flex-end`},children:[(0,l.jsx)(r,{ref:e,type:`text`}),(0,l.jsx)(a,{parentRef:e,children:p})]})}},y={render:()=>{let e=(0,c.useRef)(null);return(0,l.jsxs)(`div`,{style:{...f,alignItems:`flex-end`,justifyContent:`flex-end`},children:[(0,l.jsx)(r,{ref:e,type:`text`}),(0,l.jsx)(a,{parentRef:e,children:p})]})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const parentRef = useRef<HTMLButtonElement>(null);
    return <div style={defaultStyle}>
                <Button ref={parentRef} onClick={() => setOpen(prev => !prev)}>
                    Open Menu
                </Button>
                {open && <Menu parentRef={parentRef}>{defaultOptions}</Menu>}
            </div>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const parentRef = useRef<HTMLInputElement>(null);
    return <div style={defaultStyle}>
                <Input ref={parentRef} type="text" />
                <Menu parentRef={parentRef}>{defaultOptions}</Menu>
            </div>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`ButtonToOpenMenu`,`PartOfCenterInput`,`PartOfTopLeftInput`,`PartOfTopRightInput`,`PartOfBottomLeftInput`,`PartOfBottomRightInput`]}))();export{m as ButtonToOpenMenu,v as PartOfBottomLeftInput,y as PartOfBottomRightInput,h as PartOfCenterInput,g as PartOfTopLeftInput,_ as PartOfTopRightInput,b as __namedExportsOrder,d as default};
import{d as e,a,u as t,r as i,j as o,i as r,o as l,c as d}from"../chunks/chunk-3wF-L4UY.js";import{_ as s,S as n,C as p,a as u}from"../chunks/chunk-5Ae__q1k.js";const f=e.div`
    padding: 48px 0px 48px 0px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media ${a.sm} {
        padding: 24px 0px 24px 0px;
    }
`,h=e.div`
    font-size: 32px;
    height: 38px;
    padding: 0px 48px 0px 48px;
    font-weight: 700;
    line-height: 38px;

    @media ${a.sm} {
        padding: 0px 16px 0px 16px;
    }
`,c={onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Loading:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/components/Loading",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:r}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:l}},Layout:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/src/pages/+Layout.tsx",fileExportPathToShowToUser:[]}],valueSerialized:[{type:"plus-file",exportValues:d}]},title:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+config.ts",fileExportPathToShowToUser:["default","title"]},valueSerialized:{type:"js-serialized",value:"Web Challenge Marvel"}},favicon:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+config.ts",fileExportPathToShowToUser:["default","favicon"]},valueSerialized:{type:"js-serialized",value:"/favicon.ico"}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/favorites/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:Object.freeze(Object.defineProperty({__proto__:null,default:function(){const{favorites:e}=t(),[a,r]=i.useState(e),l=a.filter((a=>e.some((e=>e.id===a.id)))),d=s.debounce((a=>{r(""!==a?e.filter((e=>e.name.toLowerCase().includes(a.toLowerCase()))):e)}),300),c=i.useRef(d);return o.jsxs(f,{children:[o.jsx(h,{children:"FAVORITES"}),o.jsx(n,{count:l.length,handleInput:c.current}),o.jsx(p,{children:l.map((e=>o.jsx(u,{character:e},e.id)))})]})}},Symbol.toStringTag,{value:"Module"}))}}};export{c as configValuesSerialized};

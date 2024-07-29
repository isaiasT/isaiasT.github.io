import{d as e,a,r as t,j as i,i as o,o as l,c as r}from"../chunks/chunk-3wF-L4UY.js";import{_ as s,S as d,C as n,a as p}from"../chunks/chunk-5Ae__q1k.js";import{c as u,L as c,a as f}from"../chunks/chunk-D7KH1AfR.js";const h=e.div`
    padding: 48px 0px 48px 0px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media ${a.sm} {
        padding: 24px 0px 24px 0px;
    }
`;e.img`
    padding: 48px 0px 48px 0px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media ${a.sm} {
        padding: 24px 0px 24px 0px;
    }
`;const x=f(u()),y=(e=>async()=>e.getAll())(x),S=(e=>async a=>e.getAllFilteredByName(a))(x),v={onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Loading:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/components/Loading",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:o}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:l}},Layout:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/src/pages/+Layout.tsx",fileExportPathToShowToUser:[]}],valueSerialized:[{type:"plus-file",exportValues:r}]},title:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+config.ts",fileExportPathToShowToUser:["default","title"]},valueSerialized:{type:"js-serialized",value:"Web Challenge Marvel"}},favicon:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+config.ts",fileExportPathToShowToUser:["default","favicon"]},valueSerialized:{type:"js-serialized",value:"/favicon.ico"}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/index/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:Object.freeze(Object.defineProperty({__proto__:null,default:function(){const[e,a]=t.useState([]),[o,l]=t.useState(0),[r,u]=t.useState(null),[f,x]=t.useState(!1),v=async e=>{a([]),l(0),x(!0);try{let t;t=""===e?await y():await S(e),a(t.data.results),l(t.data.count)}catch(t){u("Error getting characters")}finally{x(!1)}};t.useEffect((()=>{v("")}),[]);const T=s.debounce((e=>{v(e)}),300),g=t.useRef(T);return i.jsxs(h,{children:[r&&i.jsx("div",{children:r}),i.jsx(d,{count:o,handleInput:g.current}),i.jsxs(n,{children:[f&&i.jsx(c,{}),e.map((e=>i.jsx(p,{character:e},e.id)))]})]})}},Symbol.toStringTag,{value:"Module"}))}}};export{v as configValuesSerialized};

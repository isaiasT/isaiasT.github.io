import{d as e,a as t,u as i,j as a,r,b as o,i as d,o as s,c as n}from"../chunks/chunk-3wF-L4UY.js";import{c as l,L as c,a as p}from"../chunks/chunk-BHcD0oH2.js";const h=e.div`
    width: 100vw;
    height: 320px;
    background-color: #000000;
    position: relative;
    border-top: 1px #333333 solid;
    display: flex;
    justify-content: center;

    @media ${t.md} {
        height: 278px;
    }

    @media ${t.sm} {
        height: 608px;
        border-top: none;
    }
`,f=e.div`
    position: absolute;
    border-color: transparent #ffffff transparent transparent;
    border-width: 25px 25px 0px 0px;
    bottom: -1px;
    right: -1px;
    z-index: 20;
    border-style: solid;
`,x=e.div`
    width: 100%;
    height: 100%;
    max-width: 960px;
    display: flex;

    @media ${t.sm} {
        flex-direction: column;
    }
`,u=e.div`
    width: 320px;
    min-width: 278px;
    height: 100%;
    position: relative;
    overflow: hidden;

    @media ${t.md} {
        width: 278px;
    }

    @media ${t.sm} {
        width: 100%;
        height: 398px;
    }
`,g=e.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
`,m=e.div`
    height: 100%;
    max-width: 640px;
    display: flex;
    align-items: center;
    padding-left: 48px;
    flex-grow: 1;

    @media ${t.md} {
        padding-right: 48px;
    }

    @media ${t.sm} {
        height: 210px;
    }
`,v=e.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
`,w=e.div`
    width: 100%;
    height: 47px;
    display: flex;
    justify-content: space-between;
`,y=e.div`
    height: 100%;
    text-transform: uppercase;
    color: #ffffff;
    display: flex;
    align-items: center;
    font-size: 40px;
    font-weight: 700;

    @media ${t.md} {
        font-size: 32px;
    }
`,j=e.img`
    width: 24px;
    cursor: pointer;
`,b=e.div`
    color: #ffffff;
    font-size: 16px;
`;function S({character:e}){const{addFavorite:t,removeFavorite:r,favorites:o}=i(),{id:d,name:s,description:n,thumbnail:l}=e,c=o.some((e=>e.id===d));return a.jsxs(h,{children:[a.jsxs(x,{children:[a.jsx(u,{children:a.jsx(g,{src:`${l.path}.${l.extension}`,alt:s})}),a.jsx(m,{children:a.jsxs(v,{children:[a.jsxs(w,{children:[a.jsx(y,{children:s}),a.jsx(j,{src:c?"/heart-filled.svg":"/heart-empty.svg",alt:"Favorite icon",onClick:i=>{i.stopPropagation(),i.preventDefault(),c?r(d):t(e)}})]}),a.jsx(b,{children:n})]})})]}),a.jsx(f,{})]})}const T=e.div`
    width: 179px;
    min-height: 341px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`,z=e.div`
    width: 179px;
    height: 269px;
`,P=e.img`
    width: 100%;
    height: 100%;
    -webkit-user-drag: none;
    user-select: none;
`,$=e.div`
    min-height: 60px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    user-select: none;
`,k=e.div`
    font-size: 16px;
    font-weight: 500;
`,U=e.div`
    font-size: 12px;
`;function A({comic:e}){const{thumbnail:t,title:i,dates:r}=e,o=new Date(r[0].date).getFullYear();return a.jsxs(T,{children:[a.jsx(z,{children:a.jsx(P,{src:`${t.path}.${t.extension}`,alt:i})}),a.jsxs($,{children:[a.jsx(k,{children:i}),a.jsx(U,{children:o})]})]})}const D=e.div`
    width: 100%;
    min-height: 369px;
    overflow-x: auto;
    position: relative;
    cursor: grab;

    &::-webkit-scrollbar {
        height: 4px;

        @media ${t.md} {
            display: none;
        }
    }

    &::-webkit-scrollbar-track {
        background: #d9d9d9;
    }

    &::-webkit-scrollbar-thumb {
        background: #ec1d24;
    }

    &::-webkit-scrollbar-button {
        display: none;
    }

    @media ${t.md} {
        padding-left: 48px;
    }

    @media ${t.sm} {
        padding-left: 16px;
    }
`,E=e.div`
    height: 100%;
    display: flex;
    gap: 16px;
`;function C({children:e}){const t=r.useRef(null),[i,o]=r.useState(!1),[d,s]=r.useState(0),[n,l]=r.useState(0),c=()=>{t.current&&(o(!1),t.current.style.cursor="grab")};return a.jsx(D,{"data-testid":"comic-group-wrapper",ref:t,onMouseDown:e=>{t.current&&(o(!0),s(e.pageX-t.current.offsetLeft),l(t.current.scrollLeft),t.current.style.cursor="grabbing")},onMouseLeave:c,onMouseUp:c,onMouseMove:e=>{if(!i||!t.current)return;const a=e.pageX-t.current.offsetLeft-d;t.current.scrollLeft=n-a},children:a.jsx(E,{children:e})})}const L=e.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 24px;
`,M=e.div`
    width: 100%;
    height: 100%;
    max-width: 960px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 40px 0px 48px 0px;

    @media ${t.md} {
        max-width: 100vw;
    }
`,B=e.div`
    font-size: 32px;
    height: 38px;
    font-weight: 700;
    line-height: 38px;

    @media ${t.md} {
        padding-left: 48px;
    }

    @media ${t.sm} {
        padding-left: 16px;
    }
`,F=l(),R=p(F),I=(e=>({getAllByCharacterId:async t=>e.get(`/characters/${t}/comics`,{limit:20})}))(F),_=(e=>async t=>e.getCharacterById(t))(R),O=(e=>async t=>e.getAllByCharacterId(t))(I),V={onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Loading:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/components/Loading",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:d}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:s}},Layout:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/src/pages/+Layout.tsx",fileExportPathToShowToUser:[]}],valueSerialized:[{type:"plus-file",exportValues:n}]},title:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+config.ts",fileExportPathToShowToUser:["default","title"]},valueSerialized:{type:"js-serialized",value:"Web Challenge Marvel"}},favicon:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/+config.ts",fileExportPathToShowToUser:["default","favicon"]},valueSerialized:{type:"js-serialized",value:"/favicon.ico"}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/src/pages/@id/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:Object.freeze(Object.defineProperty({__proto__:null,default:function(){const e=o(),t=r.useRef(e.routeParams.id),[i,d]=r.useState(),[s,n]=r.useState([]),[l,p]=r.useState(null),[h,f]=r.useState(!1),[x,u]=r.useState(!1);return r.useEffect((()=>{(async()=>{f(!0);try{const e=await _(Number(t.current));d(e.data.results[0]),f(!1)}catch(e){p("Error getting characters")}})(),(async()=>{u(!0);try{const e=await O(Number(t.current));n(e.data.results),u(!1)}catch(e){p("Error getting characters")}})()}),[]),a.jsxs(a.Fragment,{children:[l&&a.jsx("div",{children:l}),h&&a.jsx(c,{}),i&&a.jsx(S,{character:i}),a.jsx(L,{children:a.jsxs(M,{children:[a.jsx(B,{children:"COMICS"}),x&&a.jsx(c,{}),a.jsx(C,{children:s.map((e=>a.jsx(A,{comic:e},e.id)))})]})})]})}},Symbol.toStringTag,{value:"Module"}))}}};export{V as configValuesSerialized};

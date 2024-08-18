"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[406],{1425:(e,s,a)=>{a.d(s,{A:()=>t});const r=a.p+"static/media/error.42292aa12b6bc303ce99.gif";var c=a(579);const t=()=>(0,c.jsx)("img",{src:r,alt:"error",style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"}})},7572:(e,s,a)=>{a.r(s),a.d(s,{default:()=>C});var r=a(5043),c=a(1591),t=a(5394),n=a(8069);const i=a.p+"static/media/mjolnir.61f31e1809f12183a524.png";var o=a(579);const l=e=>{let{data:s}=e;const{name:a,description:r,thumbnail:c,homepage:t,wiki:n}=s;let i=!0;return c&&(i=c.indexOf("image_not_available.jpg")>0),(0,o.jsxs)("div",{className:"randomchar__block",children:[(0,o.jsx)("img",{src:c,alt:"Random character",className:"randomchar__img",style:i?{objectFit:"contain"}:{objectFit:"cover"}}),(0,o.jsxs)("div",{className:"randomchar__info",children:[(0,o.jsx)("p",{className:"randomchar__name",children:a}),(0,o.jsx)("p",{className:"randomchar__descr",children:r}),(0,o.jsxs)("div",{className:"randomchar__btns",children:[(0,o.jsx)("a",{href:t,className:"button button__main",children:(0,o.jsx)("div",{className:"inner",children:"homepage"})}),(0,o.jsx)("a",{href:n,className:"button button__secondary",children:(0,o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},d=()=>{const[e,s]=(0,r.useState)({}),{getCharacter:a,clearError:c,process:d,setProcess:h}=(0,t.A)();(0,r.useEffect)((()=>{u();const e=setInterval(u,6e4);return()=>{clearInterval(e)}}),[]);const m=e=>{s(e)},u=()=>{c();const e=Math.floor(400*Math.random()+1011e3);a(e).then(m).then((()=>h("confirmed")))};return(0,o.jsxs)("div",{className:"randomchar",children:[(0,n.A)(d,l,e),(0,o.jsxs)("div",{className:"randomchar__static",children:[(0,o.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,o.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,o.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,o.jsx)("button",{className:"button button__main",onClick:u,children:(0,o.jsx)("div",{className:"inner",children:"try it"})}),(0,o.jsx)("img",{src:i,alt:"mjolnir",className:"randomchar__decoration"})]})]})};var h=a(9391),m=a(3523),u=a(1425),_=a(9759);const j=e=>{const[s,a]=(0,r.useState)([]),[c,n]=(0,r.useState)(!1),[i,l]=(0,r.useState)(210),[d,j]=(0,r.useState)(!1),{getAllCharacters:x,process:p,setProcess:g}=(0,t.A)();(0,r.useEffect)((()=>{v(i,!0)}),[]);const v=(e,s)=>{n(!s),x(e).then(b).then((()=>g("confirmed")))},b=e=>{let s=!1;e.length<9&&(s=!0),a((s=>[...s,...e])),n(!1),l((e=>e+9)),j(s)},N=(0,r.useRef)([]),f=(s,a)=>{e.onCharSelected(s),N.current.forEach((e=>{e.classList.remove("char__item_selected")})),N.current[a].classList.add("char__item_selected"),N.current[a].focus()},y=(0,r.useMemo)((()=>((e,s,a)=>{switch(e){case"waiting":return(0,o.jsx)(_.A,{});case"loading":return a?(0,o.jsx)(s,{}):(0,o.jsx)(_.A,{});case"confirmed":return(0,o.jsx)(s,{});case"error":return(0,o.jsx)(u.A,{});default:throw new Error("Unexpected process state")}})(p,(()=>(()=>{console.log("render");const e=s.map(((e,s)=>{const{id:a,...r}=e,c=r.thumbnail.indexOf("image_not_available.jpg")>0;return(0,o.jsx)(h.A,{timeout:500,classNames:"char__item",children:(0,o.jsxs)("li",{ref:e=>N.current[s]=e,className:"char__item",tabIndex:10,onClick:()=>f(e.id,s),onKeyDown:a=>{" "!==a.key&&"Enter"!==a.key||(a.preventDefault(),f(e.id,s))},children:[(0,o.jsx)("img",{src:r.thumbnail,alt:r.name,style:c?{objectFit:"unset"}:{objectFit:"cover"}}),(0,o.jsx)("div",{className:"char__name",children:r.name})]},a)},a)}));return(0,o.jsx)("ul",{className:"char__grid",children:(0,o.jsx)(m.A,{component:null,children:e})})})()),c)),[p]);return(0,o.jsxs)("div",{className:"char__list",children:[y,(0,o.jsx)("button",{className:"button button__main button__long",disabled:c,style:{display:d?"none":"block"},onClick:()=>v(i),children:(0,o.jsx)("div",{className:"inner",children:"load more"})})]})};var x=a(5475);const p=e=>{let{data:s}=e;const{name:a,description:r,thumbnail:c,homepage:t,wiki:n,comics:i}=s;let l;l=0===i.length?"No comics yet":i.slice(0,10).map(((e,s)=>{const a="/comics/".concat(e.resourceURI.slice(43));return(0,o.jsx)("li",{className:"char__comics-item",children:(0,o.jsx)(x.N_,{to:a,children:e.name})},a)}));const d=c.indexOf("image_not_available.jpg")>0;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"char__basics",children:[(0,o.jsx)("img",{src:c,alt:a,style:d?{objectFit:"unset"}:{objectFit:"cover"}}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"char__info-name",children:a}),(0,o.jsxs)("div",{className:"char__btns",children:[(0,o.jsx)("a",{href:t,className:"button button__main",children:(0,o.jsx)("div",{className:"inner",children:"homepage"})}),(0,o.jsx)("a",{href:n,className:"button button__secondary",children:(0,o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,o.jsx)("div",{className:"char__descr",children:r}),(0,o.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,o.jsx)("ul",{className:"char__comics-list",children:l})]})},g=e=>{const[s,a]=(0,r.useState)(null),{getCharacter:c,clearError:i,process:l,setProcess:d}=(0,t.A)(),h=e=>{a(e)};return(0,r.useEffect)((()=>{(()=>{const{charId:s}=e;s&&(i(),c(s).then(h).then((()=>d("confirmed"))))})()}),[e.charId]),(0,o.jsx)("div",{className:"char__info",children:(0,n.A)(l,p,s)})};class v extends r.Component{constructor(){super(...arguments),this.state={error:!1}}componentDidCatch(e,s){console.log(e,s),this.setState({error:!0})}render(){return this.state.error?(0,o.jsx)(u.A,{}):this.props.children}}const b=v;var N=a(3892),f=a(899);const y=(e,s)=>{switch(e){case"waiting":case"loading":return null;case"confirmed":return(0,o.jsx)(s,{});case"error":return(0,o.jsx)("div",{className:"char__search-critical-error",children:(0,o.jsx)(u.A,{})});default:throw new Error("Unexpected process state")}},w=()=>{const[e,s]=(0,r.useState)(null),{getCharacterByName:a,clearError:c,process:n,setProcess:i}=(0,t.A)(),l=e=>{s(e)};return(0,o.jsxs)("div",{className:"char__search-form",children:[(0,o.jsx)(N.l1,{initialValues:{charName:""},validationSchema:f.Ik({charName:f.Yj().required("This field is required")}),onSubmit:e=>{let{charName:s}=e;var r;r=s,c(),a(r).then(l).then((()=>i("confirmed")))},children:(0,o.jsxs)(N.lV,{children:[(0,o.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),(0,o.jsxs)("div",{className:"char__search-wrapper",children:[(0,o.jsx)(N.D0,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),(0,o.jsx)("button",{type:"submit",className:"button button__main",disabled:"loading"===n,children:(0,o.jsx)("div",{className:"inner",children:"find"})})]}),(0,o.jsx)(N.Kw,{component:"div",className:"char__search-error",name:"charName"})]})}),y(n,(()=>e?e.length>0?(0,o.jsxs)("div",{className:"char__search-wrapper",children:[(0,o.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",e[0].name," page?"]}),(0,o.jsx)(x.N_,{to:"/characters/".concat(e[0].id),className:"button button__secondary",children:(0,o.jsx)("div",{className:"inner",children:"To page"})})]}):(0,o.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null))]})},k=a.p+"static/media/vision.067d4ae1936d64a577ce.png",C=()=>{const[e,s]=(0,r.useState)(null);return console.log("render MAIN"),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(c.m,{children:[(0,o.jsx)("meta",{name:"description",content:"Marvel information portal"}),(0,o.jsx)("title",{children:"Marvel information portal"})]}),(0,o.jsx)(b,{children:(0,o.jsx)(d,{})}),(0,o.jsxs)("div",{className:"char__content",children:[(0,o.jsx)(b,{children:(0,o.jsx)(j,{onCharSelected:e=>{s(e)}})}),(0,o.jsxs)("div",{children:[(0,o.jsx)(b,{children:(0,o.jsx)(g,{charId:e})}),(0,o.jsx)(b,{children:(0,o.jsx)(w,{})})]})]}),(0,o.jsx)("img",{className:"bg-decoration",src:k,alt:"vision"})]})}},5394:(e,s,a)=>{a.d(s,{A:()=>t});var r=a(5043);const c="apikey=272103bc80d57e1c4159f0364fe95129",t=()=>{const{request:e,clearError:s,process:a,setProcess:t}=(()=>{const[e,s]=(0,r.useState)("waiting");return{request:(0,r.useCallback)((async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};s("loading");try{const s=await fetch(e,{method:a,body:r,headers:c});if(!s.ok)throw new Error("Could not fetch ".concat(e,", status: ").concat(s.status));return await s.json()}catch(t){throw s("error"),t}}),[]),clearError:(0,r.useCallback)((()=>{s("loading")}),[]),process:e,setProcess:s}})(),n="https://gateway.marvel.com:443/v1/public/",i=e=>{let s=0===e.description.length?"Doesn`t have any description yet":e.description;return s.length>210&&(s=s.slice(0,210)+"..."),{id:e.id,name:e.name,description:s,fulldescription:0===e.description.length?"Doesn`t have any description yet":e.description,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.url,wiki:e.urls[1].url,comics:e.comics.items}},o=e=>{var s;return{id:e.id,name:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",language:(null===(s=e.textObjects[0])||void 0===s?void 0:s.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension}};return{process:a,setProcess:t,getAllCharacters:async function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await e("".concat(n,"characters?limit=9&offset=").concat(s,"&").concat(c))).data.results.map(i)},getCharacter:async s=>{const a=await e("".concat(n,"characters/").concat(s,"?").concat(c));return i(a.data.results[0])},clearError:s,getAllComics:async function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(await e("".concat(n,"comics?orderBy=issueNumber&limit=8&offset=").concat(s,"&").concat(c))).data.results.map(o)},getComics:async s=>{const a=await e("".concat(n,"comics/").concat(s,"?").concat(c));return o(a.data.results[0])},getCharacterByName:async s=>(await e("".concat(n,"characters?name=").concat(s,"&").concat(c))).data.results.map(i)}}},8069:(e,s,a)=>{a.d(s,{A:()=>i});var r=a(9759),c=a(1425),t=a(579);const n=()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,t.jsxs)("div",{className:"skeleton",children:[(0,t.jsxs)("div",{className:"pulse skeleton__header",children:[(0,t.jsx)("div",{className:"pulse skeleton__circle"}),(0,t.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,t.jsx)("div",{className:"pulse skeleton__block"}),(0,t.jsx)("div",{className:"pulse skeleton__block"}),(0,t.jsx)("div",{className:"pulse skeleton__block"})]})]}),i=(e,s,a)=>{switch(e){case"waiting":return(0,t.jsx)(n,{});case"loading":return(0,t.jsx)(r.A,{});case"confirmed":return(0,t.jsx)(s,{data:a});case"error":return(0,t.jsx)(c.A,{});default:throw new Error("Unexpected process state")}}}}]);
//# sourceMappingURL=406.3c172c17.chunk.js.map
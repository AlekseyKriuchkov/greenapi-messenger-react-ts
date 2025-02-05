import{R as M,j as Y,l as vr,L as _r}from"./index-r8FR9iAn.js";const br="_wrapper_4zs2r_1",Fr="_form_4zs2r_8",Ar="_button_4zs2r_20",xr="_inputWrapper_4zs2r_30",Vr="_error_4zs2r_36",re={wrapper:br,form:Fr,button:Ar,inputWrapper:xr,error:Vr};var de=e=>e.type==="checkbox",te=e=>e instanceof Date,N=e=>e==null;const rr=e=>typeof e=="object";var m=e=>!N(e)&&!Array.isArray(e)&&rr(e)&&!te(e),mr=e=>m(e)&&e.target?de(e.target)?e.target.checked:e.target.value:e,wr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,pr=(e,s)=>e.has(wr(s)),Dr=e=>{const s=e.constructor&&e.constructor.prototype;return m(s)&&s.hasOwnProperty("isPrototypeOf")},Ne=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function R(e){let s;const t=Array.isArray(e),a=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Ne&&(e instanceof Blob||a))&&(t||m(e)))if(s=t?[]:{},!t&&!Dr(e))s=e;else for(const u in e)e.hasOwnProperty(u)&&(s[u]=R(e[u]));else return e;return s}var Ve=e=>Array.isArray(e)?e.filter(Boolean):[],w=e=>e===void 0,y=(e,s,t)=>{if(!s||!m(e))return t;const a=Ve(s.split(/[,[\].]+?/)).reduce((u,l)=>N(u)?u:u[l],e);return w(a)||a===e?w(e[s])?t:e[s]:a},j=e=>typeof e=="boolean",Le=e=>/^\w*$/.test(e),tr=e=>Ve(e.replace(/["|']|\]/g,"").split(/\.|\[/)),x=(e,s,t)=>{let a=-1;const u=Le(s)?[s]:tr(s),l=u.length,d=l-1;for(;++a<l;){const g=u[a];let L=t;if(a!==d){const q=e[g];L=m(q)||Array.isArray(q)?q:isNaN(+u[a+1])?{}:[]}if(g==="__proto__"||g==="constructor"||g==="prototype")return;e[g]=L,e=e[g]}return e};const ze={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},P={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},G={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};M.createContext(null);var Sr=(e,s,t,a=!0)=>{const u={defaultValues:s._defaultValues};for(const l in e)Object.defineProperty(u,l,{get:()=>{const d=l;return s._proxyFormState[d]!==P.all&&(s._proxyFormState[d]=!a||P.all),e[d]}});return u},O=e=>m(e)&&!Object.keys(e).length,kr=(e,s,t,a)=>{t(e);const{name:u,...l}=e;return O(l)||Object.keys(l).length>=Object.keys(s).length||Object.keys(l).find(d=>s[d]===P.all)},_e=e=>Array.isArray(e)?e:[e];function Er(e){const s=M.useRef(e);s.current=e,M.useEffect(()=>{const t=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}var H=e=>typeof e=="string",Tr=(e,s,t,a,u)=>H(e)?(a&&s.watch.add(e),y(t,e,u)):Array.isArray(e)?e.map(l=>(a&&s.watch.add(l),y(t,l))):(a&&(s.watchAll=!0),t),Nr=(e,s,t,a,u)=>s?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[a]:u||!0}}:{},Ke=e=>({isOnSubmit:!e||e===P.onSubmit,isOnBlur:e===P.onBlur,isOnChange:e===P.onChange,isOnAll:e===P.all,isOnTouch:e===P.onTouched}),$e=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const fe=(e,s,t,a)=>{for(const u of t||Object.keys(e)){const l=y(e,u);if(l){const{_f:d,...g}=l;if(d){if(d.refs&&d.refs[0]&&s(d.refs[0],u)&&!a)return!0;if(d.ref&&s(d.ref,d.name)&&!a)return!0;if(fe(g,s))break}else if(m(g)&&fe(g,s))break}}};var Lr=(e,s,t)=>{const a=_e(y(e,t));return x(a,"root",s[t]),x(e,t,a),e},Oe=e=>e.type==="file",W=e=>typeof e=="function",Fe=e=>{if(!Ne)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},be=e=>H(e),Ce=e=>e.type==="radio",Ae=e=>e instanceof RegExp;const Je={value:!1,isValid:!1},Ye={value:!0,isValid:!0};var sr=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!w(e[0].attributes.value)?w(e[0].value)||e[0].value===""?Ye:{value:e[0].value,isValid:!0}:Ye:Je}return Je};const Ge={isValid:!1,value:null};var ir=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,Ge):Ge;function Qe(e,s,t="validate"){if(be(e)||Array.isArray(e)&&e.every(be)||j(e)&&!e)return{type:t,message:be(e)?e:"",ref:s}}var ae=e=>m(e)&&!Ae(e)?e:{value:e,message:""},Xe=async(e,s,t,a,u,l)=>{const{ref:d,refs:g,required:L,maxLength:q,minLength:V,min:b,max:ye,pattern:ge,validate:z,name:C,valueAsNumber:K,mount:Q}=e._f,F=y(t,C);if(!Q||s.has(C))return{};const $=g?g[0]:d,J=_=>{u&&$.reportValidity&&($.setCustomValidity(j(_)?"":_||""),$.reportValidity())},p={},se=Ce(d),he=de(d),ee=se||he,ie=(K||Oe(d))&&w(d.value)&&w(F)||Fe(d)&&d.value===""||F===""||Array.isArray(F)&&!F.length,I=Nr.bind(null,C,a,p),ve=(_,A,D,T=G.maxLength,B=G.minLength)=>{const U=_?A:D;p[C]={type:_?T:B,message:U,ref:d,...I(_?T:B,U)}};if(l?!Array.isArray(F)||!F.length:L&&(!ee&&(ie||N(F))||j(F)&&!F||he&&!sr(g).isValid||se&&!ir(g).isValid)){const{value:_,message:A}=be(L)?{value:!!L,message:L}:ae(L);if(_&&(p[C]={type:G.required,message:A,ref:$,...I(G.required,A)},!a))return J(A),p}if(!ie&&(!N(b)||!N(ye))){let _,A;const D=ae(ye),T=ae(b);if(!N(F)&&!isNaN(F)){const B=d.valueAsNumber||F&&+F;N(D.value)||(_=B>D.value),N(T.value)||(A=B<T.value)}else{const B=d.valueAsDate||new Date(F),U=ue=>new Date(new Date().toDateString()+" "+ue),ne=d.type=="time",le=d.type=="week";H(D.value)&&F&&(_=ne?U(F)>U(D.value):le?F>D.value:B>new Date(D.value)),H(T.value)&&F&&(A=ne?U(F)<U(T.value):le?F<T.value:B<new Date(T.value))}if((_||A)&&(ve(!!_,D.message,T.message,G.max,G.min),!a))return J(p[C].message),p}if((q||V)&&!ie&&(H(F)||l&&Array.isArray(F))){const _=ae(q),A=ae(V),D=!N(_.value)&&F.length>+_.value,T=!N(A.value)&&F.length<+A.value;if((D||T)&&(ve(D,_.message,A.message),!a))return J(p[C].message),p}if(ge&&!ie&&H(F)){const{value:_,message:A}=ae(ge);if(Ae(_)&&!F.match(_)&&(p[C]={type:G.pattern,message:A,ref:d,...I(G.pattern,A)},!a))return J(A),p}if(z){if(W(z)){const _=await z(F,t),A=Qe(_,$);if(A&&(p[C]={...A,...I(G.validate,A.message)},!a))return J(A.message),p}else if(m(z)){let _={};for(const A in z){if(!O(_)&&!a)break;const D=Qe(await z[A](F,t),$,A);D&&(_={...D,...I(A,D.message)},J(D.message),a&&(p[C]=_))}if(!O(_)&&(p[C]={ref:$,..._},!a))return p}}return J(!0),p};function Or(e,s){const t=s.slice(0,-1).length;let a=0;for(;a<t;)e=w(e)?a++:e[s[a++]];return e}function Cr(e){for(const s in e)if(e.hasOwnProperty(s)&&!w(e[s]))return!1;return!0}function S(e,s){const t=Array.isArray(s)?s:Le(s)?[s]:tr(s),a=t.length===1?e:Or(e,t),u=t.length-1,l=t[u];return a&&delete a[l],u!==0&&(m(a)&&O(a)||Array.isArray(a)&&Cr(a))&&S(e,t.slice(0,-1)),e}var Se=()=>{let e=[];return{get observers(){return e},next:u=>{for(const l of e)l.next&&l.next(u)},subscribe:u=>(e.push(u),{unsubscribe:()=>{e=e.filter(l=>l!==u)}}),unsubscribe:()=>{e=[]}}},Te=e=>N(e)||!rr(e);function Z(e,s){if(Te(e)||Te(s))return e===s;if(te(e)&&te(s))return e.getTime()===s.getTime();const t=Object.keys(e),a=Object.keys(s);if(t.length!==a.length)return!1;for(const u of t){const l=e[u];if(!a.includes(u))return!1;if(u!=="ref"){const d=s[u];if(te(l)&&te(d)||m(l)&&m(d)||Array.isArray(l)&&Array.isArray(d)?!Z(l,d):l!==d)return!1}}return!0}var ar=e=>e.type==="select-multiple",Ir=e=>Ce(e)||de(e),ke=e=>Fe(e)&&e.isConnected,nr=e=>{for(const s in e)if(W(e[s]))return!0;return!1};function xe(e,s={}){const t=Array.isArray(e);if(m(e)||t)for(const a in e)Array.isArray(e[a])||m(e[a])&&!nr(e[a])?(s[a]=Array.isArray(e[a])?[]:{},xe(e[a],s[a])):N(e[a])||(s[a]=!0);return s}function lr(e,s,t){const a=Array.isArray(e);if(m(e)||a)for(const u in e)Array.isArray(e[u])||m(e[u])&&!nr(e[u])?w(s)||Te(t[u])?t[u]=Array.isArray(e[u])?xe(e[u],[]):{...xe(e[u])}:lr(e[u],N(s)?{}:s[u],t[u]):t[u]=!Z(e[u],s[u]);return t}var oe=(e,s)=>lr(e,s,xe(s)),ur=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:a})=>w(e)?e:s?e===""?NaN:e&&+e:t&&H(e)?new Date(e):a?a(e):e;function Ee(e){const s=e.ref;return Oe(s)?s.files:Ce(s)?ir(e.refs).value:ar(s)?[...s.selectedOptions].map(({value:t})=>t):de(s)?sr(e.refs).value:ur(w(s.value)?e.ref.value:s.value,e)}var Ur=(e,s,t,a)=>{const u={};for(const l of e){const d=y(s,l);d&&x(u,l,d._f)}return{criteriaMode:t,names:[...e],fields:u,shouldUseNativeValidation:a}},ce=e=>w(e)?e:Ae(e)?e.source:m(e)?Ae(e.value)?e.value.source:e.value:e;const Ze="AsyncFunction";var Rr=e=>!!e&&!!e.validate&&!!(W(e.validate)&&e.validate.constructor.name===Ze||m(e.validate)&&Object.values(e.validate).find(s=>s.constructor.name===Ze)),Mr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function er(e,s,t){const a=y(e,t);if(a||Le(t))return{error:a,name:t};const u=t.split(".");for(;u.length;){const l=u.join("."),d=y(s,l),g=y(e,l);if(d&&!Array.isArray(d)&&t!==l)return{name:t};if(g&&g.type)return{name:l,error:g};u.pop()}return{name:t}}var Br=(e,s,t,a,u)=>u.isOnAll?!1:!t&&u.isOnTouch?!(s||e):(t?a.isOnBlur:u.isOnBlur)?!e:(t?a.isOnChange:u.isOnChange)?e:!0,Pr=(e,s)=>!Ve(y(e,s)).length&&S(e,s);const qr={mode:P.onSubmit,reValidateMode:P.onChange,shouldFocusError:!0};function jr(e={}){let s={...qr,...e},t={submitCount:0,isDirty:!1,isLoading:W(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},a={},u=m(s.defaultValues)||m(s.values)?R(s.defaultValues||s.values)||{}:{},l=s.shouldUnregister?{}:R(u),d={action:!1,mount:!1,watch:!1},g={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},L,q=0;const V={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},b={values:Se(),array:Se(),state:Se()},ye=Ke(s.mode),ge=Ke(s.reValidateMode),z=s.criteriaMode===P.all,C=r=>i=>{clearTimeout(q),q=setTimeout(r,i)},K=async r=>{if(!s.disabled&&(V.isValid||r)){const i=s.resolver?O((await ee()).errors):await I(a,!0);i!==t.isValid&&b.state.next({isValid:i})}},Q=(r,i)=>{!s.disabled&&(V.isValidating||V.validatingFields)&&((r||Array.from(g.mount)).forEach(n=>{n&&(i?x(t.validatingFields,n,i):S(t.validatingFields,n))}),b.state.next({validatingFields:t.validatingFields,isValidating:!O(t.validatingFields)}))},F=(r,i=[],n,f,c=!0,o=!0)=>{if(f&&n&&!s.disabled){if(d.action=!0,o&&Array.isArray(y(a,r))){const h=n(y(a,r),f.argA,f.argB);c&&x(a,r,h)}if(o&&Array.isArray(y(t.errors,r))){const h=n(y(t.errors,r),f.argA,f.argB);c&&x(t.errors,r,h),Pr(t.errors,r)}if(V.touchedFields&&o&&Array.isArray(y(t.touchedFields,r))){const h=n(y(t.touchedFields,r),f.argA,f.argB);c&&x(t.touchedFields,r,h)}V.dirtyFields&&(t.dirtyFields=oe(u,l)),b.state.next({name:r,isDirty:_(r,i),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else x(l,r,i)},$=(r,i)=>{x(t.errors,r,i),b.state.next({errors:t.errors})},J=r=>{t.errors=r,b.state.next({errors:t.errors,isValid:!1})},p=(r,i,n,f)=>{const c=y(a,r);if(c){const o=y(l,r,w(n)?y(u,r):n);w(o)||f&&f.defaultChecked||i?x(l,r,i?o:Ee(c._f)):T(r,o),d.mount&&K()}},se=(r,i,n,f,c)=>{let o=!1,h=!1;const v={name:r};if(!s.disabled){const k=!!(y(a,r)&&y(a,r)._f&&y(a,r)._f.disabled);if(!n||f){V.isDirty&&(h=t.isDirty,t.isDirty=v.isDirty=_(),o=h!==v.isDirty);const E=k||Z(y(u,r),i);h=!!(!k&&y(t.dirtyFields,r)),E||k?S(t.dirtyFields,r):x(t.dirtyFields,r,!0),v.dirtyFields=t.dirtyFields,o=o||V.dirtyFields&&h!==!E}if(n){const E=y(t.touchedFields,r);E||(x(t.touchedFields,r,n),v.touchedFields=t.touchedFields,o=o||V.touchedFields&&E!==n)}o&&c&&b.state.next(v)}return o?v:{}},he=(r,i,n,f)=>{const c=y(t.errors,r),o=V.isValid&&j(i)&&t.isValid!==i;if(s.delayError&&n?(L=C(()=>$(r,n)),L(s.delayError)):(clearTimeout(q),L=null,n?x(t.errors,r,n):S(t.errors,r)),(n?!Z(c,n):c)||!O(f)||o){const h={...f,...o&&j(i)?{isValid:i}:{},errors:t.errors,name:r};t={...t,...h},b.state.next(h)}},ee=async r=>{Q(r,!0);const i=await s.resolver(l,s.context,Ur(r||g.mount,a,s.criteriaMode,s.shouldUseNativeValidation));return Q(r),i},ie=async r=>{const{errors:i}=await ee(r);if(r)for(const n of r){const f=y(i,n);f?x(t.errors,n,f):S(t.errors,n)}else t.errors=i;return i},I=async(r,i,n={valid:!0})=>{for(const f in r){const c=r[f];if(c){const{_f:o,...h}=c;if(o){const v=g.array.has(o.name),k=c._f&&Rr(c._f);k&&V.validatingFields&&Q([f],!0);const E=await Xe(c,g.disabled,l,z,s.shouldUseNativeValidation&&!i,v);if(k&&V.validatingFields&&Q([f]),E[o.name]&&(n.valid=!1,i))break;!i&&(y(E,o.name)?v?Lr(t.errors,E,o.name):x(t.errors,o.name,E[o.name]):S(t.errors,o.name))}!O(h)&&await I(h,i,n)}}return n.valid},ve=()=>{for(const r of g.unMount){const i=y(a,r);i&&(i._f.refs?i._f.refs.every(n=>!ke(n)):!ke(i._f.ref))&&me(r)}g.unMount=new Set},_=(r,i)=>!s.disabled&&(r&&i&&x(l,r,i),!Z(Ie(),u)),A=(r,i,n)=>Tr(r,g,{...d.mount?l:w(i)?u:H(r)?{[r]:i}:i},n,i),D=r=>Ve(y(d.mount?l:u,r,s.shouldUnregister?y(u,r,[]):[])),T=(r,i,n={})=>{const f=y(a,r);let c=i;if(f){const o=f._f;o&&(!o.disabled&&x(l,r,ur(i,o)),c=Fe(o.ref)&&N(i)?"":i,ar(o.ref)?[...o.ref.options].forEach(h=>h.selected=c.includes(h.value)):o.refs?de(o.ref)?o.refs.length>1?o.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(c)?!!c.find(v=>v===h.value):c===h.value)):o.refs[0]&&(o.refs[0].checked=!!c):o.refs.forEach(h=>h.checked=h.value===c):Oe(o.ref)?o.ref.value="":(o.ref.value=c,o.ref.type||b.values.next({name:r,values:{...l}})))}(n.shouldDirty||n.shouldTouch)&&se(r,c,n.shouldTouch,n.shouldDirty,!0),n.shouldValidate&&ue(r)},B=(r,i,n)=>{for(const f in i){const c=i[f],o=`${r}.${f}`,h=y(a,o);(g.array.has(r)||m(c)||h&&!h._f)&&!te(c)?B(o,c,n):T(o,c,n)}},U=(r,i,n={})=>{const f=y(a,r),c=g.array.has(r),o=R(i);x(l,r,o),c?(b.array.next({name:r,values:{...l}}),(V.isDirty||V.dirtyFields)&&n.shouldDirty&&b.state.next({name:r,dirtyFields:oe(u,l),isDirty:_(r,o)})):f&&!f._f&&!N(o)?B(r,o,n):T(r,o,n),$e(r,g)&&b.state.next({...t}),b.values.next({name:d.mount?r:void 0,values:{...l}})},ne=async r=>{d.mount=!0;const i=r.target;let n=i.name,f=!0;const c=y(a,n),o=()=>i.type?Ee(c._f):mr(r),h=v=>{f=Number.isNaN(v)||te(v)&&isNaN(v.getTime())||Z(v,y(l,n,v))};if(c){let v,k;const E=o(),X=r.type===ze.BLUR||r.type===ze.FOCUS_OUT,yr=!Mr(c._f)&&!s.resolver&&!y(t.errors,n)&&!c._f.deps||Br(X,y(t.touchedFields,n),t.isSubmitted,ge,ye),pe=$e(n,g,X);x(l,n,E),X?(c._f.onBlur&&c._f.onBlur(r),L&&L(0)):c._f.onChange&&c._f.onChange(r);const De=se(n,E,X,!1),gr=!O(De)||pe;if(!X&&b.values.next({name:n,type:r.type,values:{...l}}),yr)return V.isValid&&(s.mode==="onBlur"&&X?K():X||K()),gr&&b.state.next({name:n,...pe?{}:De});if(!X&&pe&&b.state.next({...t}),s.resolver){const{errors:We}=await ee([n]);if(h(E),f){const hr=er(t.errors,a,n),He=er(We,a,hr.name||n);v=He.error,n=He.name,k=O(We)}}else Q([n],!0),v=(await Xe(c,g.disabled,l,z,s.shouldUseNativeValidation))[n],Q([n]),h(E),f&&(v?k=!1:V.isValid&&(k=await I(a,!0)));f&&(c._f.deps&&ue(c._f.deps),he(n,k,v,De))}},le=(r,i)=>{if(y(t.errors,i)&&r.focus)return r.focus(),1},ue=async(r,i={})=>{let n,f;const c=_e(r);if(s.resolver){const o=await ie(w(r)?r:c);n=O(o),f=r?!c.some(h=>y(o,h)):n}else r?(f=(await Promise.all(c.map(async o=>{const h=y(a,o);return await I(h&&h._f?{[o]:h}:h)}))).every(Boolean),!(!f&&!t.isValid)&&K()):f=n=await I(a);return b.state.next({...!H(r)||V.isValid&&n!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:n}:{},errors:t.errors}),i.shouldFocus&&!f&&fe(a,le,r?c:g.mount),f},Ie=r=>{const i={...d.mount?l:u};return w(r)?i:H(r)?y(i,r):r.map(n=>y(i,n))},Ue=(r,i)=>({invalid:!!y((i||t).errors,r),isDirty:!!y((i||t).dirtyFields,r),error:y((i||t).errors,r),isValidating:!!y(t.validatingFields,r),isTouched:!!y((i||t).touchedFields,r)}),or=r=>{r&&_e(r).forEach(i=>S(t.errors,i)),b.state.next({errors:r?t.errors:{}})},Re=(r,i,n)=>{const f=(y(a,r,{_f:{}})._f||{}).ref,c=y(t.errors,r)||{},{ref:o,message:h,type:v,...k}=c;x(t.errors,r,{...k,...i,ref:f}),b.state.next({name:r,errors:t.errors,isValid:!1}),n&&n.shouldFocus&&f&&f.focus&&f.focus()},cr=(r,i)=>W(r)?b.values.subscribe({next:n=>r(A(void 0,i),n)}):A(r,i,!0),me=(r,i={})=>{for(const n of r?_e(r):g.mount)g.mount.delete(n),g.array.delete(n),i.keepValue||(S(a,n),S(l,n)),!i.keepError&&S(t.errors,n),!i.keepDirty&&S(t.dirtyFields,n),!i.keepTouched&&S(t.touchedFields,n),!i.keepIsValidating&&S(t.validatingFields,n),!s.shouldUnregister&&!i.keepDefaultValue&&S(u,n);b.values.next({values:{...l}}),b.state.next({...t,...i.keepDirty?{isDirty:_()}:{}}),!i.keepIsValid&&K()},Me=({disabled:r,name:i,field:n,fields:f})=>{(j(r)&&d.mount||r||g.disabled.has(i))&&(r?g.disabled.add(i):g.disabled.delete(i),se(i,Ee(n?n._f:y(f,i)._f),!1,!1,!0))},we=(r,i={})=>{let n=y(a,r);const f=j(i.disabled)||j(s.disabled);return x(a,r,{...n||{},_f:{...n&&n._f?n._f:{ref:{name:r}},name:r,mount:!0,...i}}),g.mount.add(r),n?Me({field:n,disabled:j(i.disabled)?i.disabled:s.disabled,name:r}):p(r,!0,i.value),{...f?{disabled:i.disabled||s.disabled}:{},...s.progressive?{required:!!i.required,min:ce(i.min),max:ce(i.max),minLength:ce(i.minLength),maxLength:ce(i.maxLength),pattern:ce(i.pattern)}:{},name:r,onChange:ne,onBlur:ne,ref:c=>{if(c){we(r,i),n=y(a,r);const o=w(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,h=Ir(o),v=n._f.refs||[];if(h?v.find(k=>k===o):o===n._f.ref)return;x(a,r,{_f:{...n._f,...h?{refs:[...v.filter(ke),o,...Array.isArray(y(u,r))?[{}]:[]],ref:{type:o.type,name:r}}:{ref:o}}}),p(r,!1,void 0,o)}else n=y(a,r,{}),n._f&&(n._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(pr(g.array,r)&&d.action)&&g.unMount.add(r)}}},Be=()=>s.shouldFocusError&&fe(a,le,g.mount),fr=r=>{j(r)&&(b.state.next({disabled:r}),fe(a,(i,n)=>{const f=y(a,n);f&&(i.disabled=f._f.disabled||r,Array.isArray(f._f.refs)&&f._f.refs.forEach(c=>{c.disabled=f._f.disabled||r}))},0,!1))},Pe=(r,i)=>async n=>{let f;n&&(n.preventDefault&&n.preventDefault(),n.persist&&n.persist());let c=R(l);if(g.disabled.size)for(const o of g.disabled)x(c,o,void 0);if(b.state.next({isSubmitting:!0}),s.resolver){const{errors:o,values:h}=await ee();t.errors=o,c=h}else await I(a);if(S(t.errors,"root"),O(t.errors)){b.state.next({errors:{}});try{await r(c,n)}catch(o){f=o}}else i&&await i({...t.errors},n),Be(),setTimeout(Be);if(b.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:O(t.errors)&&!f,submitCount:t.submitCount+1,errors:t.errors}),f)throw f},dr=(r,i={})=>{y(a,r)&&(w(i.defaultValue)?U(r,R(y(u,r))):(U(r,i.defaultValue),x(u,r,R(i.defaultValue))),i.keepTouched||S(t.touchedFields,r),i.keepDirty||(S(t.dirtyFields,r),t.isDirty=i.defaultValue?_(r,R(y(u,r))):_()),i.keepError||(S(t.errors,r),V.isValid&&K()),b.state.next({...t}))},qe=(r,i={})=>{const n=r?R(r):u,f=R(n),c=O(r),o=c?u:f;if(i.keepDefaultValues||(u=n),!i.keepValues){if(i.keepDirtyValues){const h=new Set([...g.mount,...Object.keys(oe(u,l))]);for(const v of Array.from(h))y(t.dirtyFields,v)?x(o,v,y(l,v)):U(v,y(o,v))}else{if(Ne&&w(r))for(const h of g.mount){const v=y(a,h);if(v&&v._f){const k=Array.isArray(v._f.refs)?v._f.refs[0]:v._f.ref;if(Fe(k)){const E=k.closest("form");if(E){E.reset();break}}}}a={}}l=s.shouldUnregister?i.keepDefaultValues?R(u):{}:R(o),b.array.next({values:{...o}}),b.values.next({values:{...o}})}g={mount:i.keepDirtyValues?g.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},d.mount=!V.isValid||!!i.keepIsValid||!!i.keepDirtyValues,d.watch=!!s.shouldUnregister,b.state.next({submitCount:i.keepSubmitCount?t.submitCount:0,isDirty:c?!1:i.keepDirty?t.isDirty:!!(i.keepDefaultValues&&!Z(r,u)),isSubmitted:i.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:c?{}:i.keepDirtyValues?i.keepDefaultValues&&l?oe(u,l):t.dirtyFields:i.keepDefaultValues&&r?oe(u,r):i.keepDirty?t.dirtyFields:{},touchedFields:i.keepTouched?t.touchedFields:{},errors:i.keepErrors?t.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},je=(r,i)=>qe(W(r)?r(l):r,i);return{control:{register:we,unregister:me,getFieldState:Ue,handleSubmit:Pe,setError:Re,_executeSchema:ee,_getWatch:A,_getDirty:_,_updateValid:K,_removeUnmounted:ve,_updateFieldArray:F,_updateDisabledField:Me,_getFieldArray:D,_reset:qe,_resetDefaultValues:()=>W(s.defaultValues)&&s.defaultValues().then(r=>{je(r,s.resetOptions),b.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_disableForm:fr,_subjects:b,_proxyFormState:V,_setErrors:J,get _fields(){return a},get _formValues(){return l},get _state(){return d},set _state(r){d=r},get _defaultValues(){return u},get _names(){return g},set _names(r){g=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:ue,register:we,handleSubmit:Pe,watch:cr,setValue:U,getValues:Ie,reset:je,resetField:dr,clearErrors:or,unregister:me,setError:Re,setFocus:(r,i={})=>{const n=y(a,r),f=n&&n._f;if(f){const c=f.refs?f.refs[0]:f.ref;c.focus&&(c.focus(),i.shouldSelect&&W(c.select)&&c.select())}},getFieldState:Ue}}function Wr(e={}){const s=M.useRef(void 0),t=M.useRef(void 0),[a,u]=M.useState({isDirty:!1,isValidating:!1,isLoading:W(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:W(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...jr(e),formState:a});const l=s.current.control;return l._options=e,Er({subject:l._subjects.state,next:d=>{kr(d,l._proxyFormState,l._updateFormState)&&u({...l._formState})}}),M.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),M.useEffect(()=>{if(l._proxyFormState.isDirty){const d=l._getDirty();d!==a.isDirty&&l._subjects.state.next({isDirty:d})}},[l,a.isDirty]),M.useEffect(()=>{e.values&&!Z(e.values,t.current)?(l._reset(e.values,l._options.resetOptions),t.current=e.values,u(d=>({...d}))):l._resetDefaultValues()},[e.values,l]),M.useEffect(()=>{e.errors&&l._setErrors(e.errors)},[e.errors,l]),M.useEffect(()=>{l._state.mount||(l._updateValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),M.useEffect(()=>{e.shouldUnregister&&l._subjects.values.next({values:l._getWatch()})},[e.shouldUnregister,l]),s.current.formState=Sr(a,l),s.current}const Jr=({changeAuthData:e})=>{const{register:s,handleSubmit:t,formState:{errors:a},reset:u}=Wr(),l=d=>{vr(_r.CHAT_TOKENS,JSON.stringify(d)),e(d),u()};return Y.jsx("div",{className:re.wrapper,children:Y.jsxs("form",{className:re.form,onSubmit:t(l),children:[Y.jsxs("div",{className:re.inputWrapper,children:[Y.jsx("input",{type:"text",placeholder:"idInstance",...s("idInstance",{required:"Field is required"})}),a.idInstance&&Y.jsx("span",{className:re.error,children:a.idInstance.message})]}),Y.jsxs("div",{className:re.inputWrapper,children:[Y.jsx("input",{type:"text",placeholder:"apiTokenInstance",...s("apiTokenInstance",{required:"Field is required"})}),a.apiTokenInstance&&Y.jsx("span",{className:re.error,children:a.apiTokenInstance.message})]}),Y.jsx("button",{type:"submit",className:re.button,children:"Submit"})]})})};export{Jr as default};

"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[967],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"Customizing Kubernetes Resources"},i="Customizing how Kubernetes Resources are Presented",s={unversionedId:"guide/customising-how-k8s-resources-are-presented",id:"guide/customising-how-k8s-resources-are-presented",title:"Customizing how Kubernetes Resources are Presented",description:"These are where you do most of the daily work of customizing of how a particular k8s resource is presented.",source:"@site/docs/guide/customising-how-k8s-resources-are-presented.md",sourceDirName:"guide",slug:"/guide/customising-how-k8s-resources-are-presented",permalink:"/dashboard/guide/customising-how-k8s-resources-are-presented",draft:!1,tags:[],version:"current",lastUpdatedAt:1661178644,formattedLastUpdatedAt:"Aug 22, 2022",frontMatter:{sidebar_label:"Customizing Kubernetes Resources"},sidebar:"tutorialSidebar",previous:{title:"Building an Image for Container Registries",permalink:"/dashboard/guide/build-for-container-registry"},next:{title:"Forms",permalink:"/dashboard/guide/forms-and-validation"}},l={},p=[],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"customizing-how-kubernetes-resources-are-presented"},"Customizing how Kubernetes Resources are Presented"),(0,r.kt)("p",null,"These are where you do most of the daily work of customizing of how a particular k8s resource is presented."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Path"),(0,r.kt)("th",{parentName:"tr",align:null},"Used for"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config"),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration of how products look and work; constants for labels, types, cookies, query params, etc that are used")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chart"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom components to present when installing a Product chart")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"detail"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom components to show as the detail view for a particular resource instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edit"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom components to show as the edit (or view config) view for a particular resource instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom components to show as the list view for a resource type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"models"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom logic extending the standard resource class for each API type and model returned by the API")))),(0,r.kt)("p",null,"There is one ",(0,r.kt)("inlineCode",{parentName:"p"},"Config"),' entry for each "product", which are the result of installing one of our helm charts to add a feature into Rancher such as Istio, monitoring, logging, CIS scans, etc.  The config defines things like:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The condition for when that product should appear (usually the presence of a type in a certain k8s API group)"),(0,r.kt)("li",{parentName:"ul"},"What types should appear in the left nav, how they're labeled, grouped, ordered"),(0,r.kt)("li",{parentName:"ul"},"Custom table headers for each type")),(0,r.kt)("p",null,"Helm charts have a generic installer control which lets you edit their ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," by default.  To present a custom form for the user to configure a chart (especially the ones for our products), you create a matching ",(0,r.kt)("inlineCode",{parentName:"p"},"chart/<name>.vue")," component, where the name corresponds to the ",(0,r.kt)("inlineCode",{parentName:"p"},"catalog.cattle.io/ui-component")," annotation's value on the chart."),(0,r.kt)("p",null,"Similarly, instead of a generic YAML detail or edit screen, you can provide your own component for any type in ",(0,r.kt)("inlineCode",{parentName:"p"},"detail/<type>.vue")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"edit/<type>.vue"),".  Detail components should generally use the ",(0,r.kt)("inlineCode",{parentName:"p"},"<ResourceTabs>")," component to show the standard detail tabs + any specific ones you want to define.  Edit components similarly generally use ",(0,r.kt)("inlineCode",{parentName:"p"},"<CruResource>"),"."),(0,r.kt)("p",null,"To customize the list view for a type, you can either change the header definitions (in ",(0,r.kt)("inlineCode",{parentName:"p"},"config/"),") or provide a ",(0,r.kt)("inlineCode",{parentName:"p"},"list/<type>.vue")," component to use instead of the standard one."),(0,r.kt)("p",null,"All objects returned from the API have a base-class of Resource, and extend from one of 3 sub-classes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SteveModel: For regular resources accessed through the Steve API (/v1)"),(0,r.kt)("li",{parentName:"ul"},"HybridModel For Rancher-defined resources with non-standard behaviors (e.g. name and description at the top-level) accessed through Steve (/v1).  Primarily ",(0,r.kt)("inlineCode",{parentName:"li"},"management.cattle.io.*"),"."),(0,r.kt)("li",{parentName:"ul"},"NormanModel: For Rancher-defined resources accessed through the older Norman API (/v3)")),(0,r.kt)("p",null,"Additional customization can be done on a per-type basis by defining a ",(0,r.kt)("inlineCode",{parentName:"p"},"models/<type>.js"),"."),(0,r.kt)("p",null,"All ",(0,r.kt)("inlineCode",{parentName:"p"},"<type>"),"s throughout are the ",(0,r.kt)("strong",{parentName:"p"},"lowercased")," version of the k8s API group and kind, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"apps.deployment"),'.  Lowercase won\'t matter in case-insensitive macOS but will break when built in CI or on Linux.  Use the "Jump" menu in the UI to find the type you want and then copy the string out of the URL.'),(0,r.kt)("h1",{id:"customising-default-table-columns"},"Customising Default Table Columns"),(0,r.kt)("p",null,"Customising columns and actions in a table can be done via changing the resources type's configuration. This is found in either the product's configuration or the resource types ",(0,r.kt)("inlineCode",{parentName:"p"},"model"),", read on for more details. At this level the default ",(0,r.kt)("inlineCode",{parentName:"p"},"ResourceList")," component is used and no additional pages have to be defined. T"),(0,r.kt)("p",null,"More complicated customisation can be done via overriding the ResourceList component with a per resource type component defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"/list"),", e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"/list/catalog.cattle.io.app.vue")," is used whenever the user clicks on the side nav for the Apps type. These components replace ",(0,r.kt)("inlineCode",{parentName:"p"},"ResourceList")," but often use the same underlying table component ",(0,r.kt)("inlineCode",{parentName:"p"},"/components/ResourceTable"),"."),(0,r.kt)("p",null,"Table column definitions can be found in ",(0,r.kt)("inlineCode",{parentName:"p"},"/config/table-headers.js"),". Common columns should be added here, list override specific types can be defined in the component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export const SIMPLE_NAME = {\n  name:     'name',\n  labelKey: 'tableHeaders.simpleName',\n  value:    'name',\n  sort:     ['name'],\n  width:    200\n};\n")),(0,r.kt)("p",null,"Column definitions will determine what is shown in it's section of the row. This will either be a property from the row (",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"), a component (",(0,r.kt)("inlineCode",{parentName:"p"},"formatter"),", which links to a component in ",(0,r.kt)("inlineCode",{parentName:"p"},"/components/formatter"),") or an inline formatter (defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ResourceTables")," contents, see example below, requires custom list component). "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ResourceTable ...>\n  <template #cell:workspace="{row}">\n    <span v-if="row.type !== MANAGEMENT_CLUSTER && row.metadata.namespace">{{ row.metadata.namespace }}</span>\n    <span v-else class="text-muted">&mdash;</span>\n  </template>\n</ResourceTable>\n')),(0,r.kt)("p",null,"Column definitions are grouped together and applied per resource type via ",(0,r.kt)("inlineCode",{parentName:"p"},"/store/type-map.js headers"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"headers(CONFIG_MAP, [NAME_COL, NAMESPACE_COL, KEYS, AGE]);\n")),(0,r.kt)("p",null,"When providing a custom list these default headers can be accessed via "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"$store.getters['type-map/headersFor'](<schema>)\n")),(0,r.kt)("p",null,"The actions menu for a table row is constructed from the actions returned via the resource type. Therefore the base list comes from the common ",(0,r.kt)("inlineCode",{parentName:"p"},"resource-instance")," which can be supplemented/overridden by the resource type's ",(0,r.kt)("inlineCode",{parentName:"p"},"model"),". Individual actions can be marked as ",(0,r.kt)("inlineCode",{parentName:"p"},"bulkable"),", which means they are shown as buttons above the list and applied to all selected rows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  action:     'promptRemove',\n  altAction:  'remove',\n  label:      this.t('action.remove'),\n  icon:       'icon icon-trash',\n  bulkable:   true,\n  enabled:    this.canDelete,\n  bulkAction: 'promptRemove',\n}\n")))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[78],{8314:function(e,t,s){var r=s(1811);function a(){}function n(){}n.resetWarningCache=a,e.exports=function(){function e(e,t,s,a,n,i){if(i!==r){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var s={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:a};return s.PropTypes=s,s}},4404:function(e,t,s){e.exports=s(8314)()},1811:function(e){e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},981:function(e,t,s){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s,r=arguments[t];for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},n=function(){function e(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,s,r){return s&&e(t.prototype,s),r&&e(t,r),t}}(),i=c(s(187)),l=s(4090),o=c(l),d=c(s(4404));function c(e){return e&&e.__esModule?e:{default:e}}window.ApexCharts=i.default;var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e);var s=function(e,t){if(e)return t&&("object"==typeof t||"function"==typeof t)?t:e;throw ReferenceError("this hasn't been initialised - super() hasn't been called")}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return o.default.createRef?s.chartRef=o.default.createRef():s.setRef=function(e){return s.chartRef=e},s.chart=null,s}return function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(e,l.Component),n(e,[{key:"render",value:function(){var e=function(e,t){var s,r={};for(s in e)0<=t.indexOf(s)||Object.prototype.hasOwnProperty.call(e,s)&&(r[s]=e[s]);return r}(this.props,[]);return o.default.createElement("div",a({ref:o.default.createRef?this.chartRef:this.setRef},e))}},{key:"componentDidMount",value:function(){var e=o.default.createRef?this.chartRef.current:this.chartRef;this.chart=new i.default(e,this.getConfig()),this.chart.render()}},{key:"getConfig",value:function(){var e=this.props,t=e.type,s=e.height,r=e.width,a=e.series,e=e.options;return this.extend(e,{chart:{type:t,height:s,width:r},series:a})}},{key:"isObject",value:function(e){return e&&"object"===(void 0===e?"undefined":r(e))&&!Array.isArray(e)&&null!=e}},{key:"extend",value:function(e,t){var s=this,r=("function"!=typeof Object.assign&&(Object.assign=function(e){if(null==e)throw TypeError("Cannot convert undefined or null to object");for(var t=Object(e),s=1;s<arguments.length;s++){var r=arguments[s];if(null!=r)for(var a in r)r.hasOwnProperty(a)&&(t[a]=r[a])}return t}),Object.assign({},e));return this.isObject(e)&&this.isObject(t)&&Object.keys(t).forEach(function(a){var n,i;s.isObject(t[a])&&a in e?r[a]=s.extend(e[a],t[a]):Object.assign(r,(n={},i=t[a],a in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i,n))}),r}},{key:"componentDidUpdate",value:function(e){if(!this.chart)return null;var t=this.props,s=t.options,r=t.series,a=t.height,t=t.width,n=JSON.stringify(e.options),i=JSON.stringify(e.series),s=JSON.stringify(s),l=JSON.stringify(r);n===s&&i===l&&a===e.height&&t===e.width||(i!==l&&n===s&&a===e.height&&t===e.width?this.chart.updateSeries(r):this.chart.updateOptions(this.getConfig()))}},{key:"componentWillUnmount",value:function(){this.chart&&"function"==typeof this.chart.destroy&&this.chart.destroy()}}]),e}();(t.Z=h).propTypes={type:d.default.string.isRequired,width:d.default.oneOfType([d.default.string,d.default.number]),height:d.default.oneOfType([d.default.string,d.default.number]),series:d.default.array.isRequired,options:d.default.object.isRequired},h.defaultProps={type:"line",width:"100%",height:"auto"}},6940:function(e,t,s){var r=s(3827),a=s(4090),n=s(981);let i={legend:{show:!1,position:"top",horizontalAlign:"left"},colors:["#3C50E0","#80CAEE"],chart:{fontFamily:"Satoshi, sans-serif",height:335,type:"area",dropShadow:{enabled:!0,color:"#623CEA14",top:10,blur:4,left:0,opacity:.1},toolbar:{show:!1}},responsive:[{breakpoint:1024,options:{chart:{height:300}}},{breakpoint:1366,options:{chart:{height:350}}}],stroke:{width:[2,2],curve:"straight"},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!0}}},dataLabels:{enabled:!1},markers:{size:4,colors:"#fff",strokeColors:["#3056D3","#80CAEE"],strokeWidth:3,strokeOpacity:.9,strokeDashArray:0,fillOpacity:1,discrete:[],hover:{size:void 0,sizeOffset:5}},xaxis:{type:"category",categories:["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{title:{style:{fontSize:"0px"}},min:0,max:100}};t.Z=()=>{let[e,t]=(0,a.useState)({series:[{name:"Product One",data:[23,11,22,27,13,22,37,21,44,22,30,45]},{name:"Product Two",data:[30,25,36,30,45,35,64,52,59,36,39,51]}]});return(0,r.jsxs)("div",{className:"col-span-12 rounded-md border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8",children:[(0,r.jsx)("h4",{className:"mb-6 text-xl font-semibold text-black dark:text-white",children:"Balance Statistics"}),(0,r.jsxs)("div",{className:"flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap",children:[(0,r.jsxs)("div",{className:"flex w-full flex-wrap gap-3 sm:gap-5",children:[(0,r.jsxs)("div",{className:"flex min-w-47.5",children:[(0,r.jsx)("span",{className:"mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary",children:(0,r.jsx)("span",{className:"block h-2.5 w-full max-w-2.5 rounded-full bg-primary"})}),(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)("p",{className:"font-semibold text-primary",children:"Total Expense"}),(0,r.jsx)("p",{className:"text-sm font-medium",children:"22.02.2024 - 23.02.2024"})]})]}),(0,r.jsxs)("div",{className:"flex min-w-47.5",children:[(0,r.jsx)("span",{className:"mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary",children:(0,r.jsx)("span",{className:"block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"})}),(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)("p",{className:"font-semibold text-secondary",children:"Total Income"}),(0,r.jsx)("p",{className:"text-sm font-medium",children:"22.02.2024 - 23.02.2024"})]})]})]}),(0,r.jsx)("div",{className:"flex w-full max-w-45 justify-end",children:(0,r.jsxs)("div",{className:"inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4",children:[(0,r.jsx)("button",{className:"rounded bg-white px-3 py-1 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark",children:"Day"}),(0,r.jsx)("button",{className:"rounded px-3 py-1 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark",children:"Week"}),(0,r.jsx)("button",{className:"rounded px-3 py-1 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark",children:"Month"})]})})]}),(0,r.jsx)("div",{children:(0,r.jsx)("div",{id:"chartOne",className:"-ml-5",children:(0,r.jsx)(n.Z,{options:i,series:e.series,type:"area",height:350,width:"100%"})})})]})}},8644:function(e,t,s){var r=s(3827),a=s(4090),n=s(981);let i={chart:{fontFamily:"Satoshi, sans-serif",type:"donut"},colors:["#3C50E0","#6577F3","#8FD0EF","#0FADCF"],labels:["Desktop","Tablet","Mobile","Other"],legend:{show:!1,position:"bottom"},plotOptions:{pie:{donut:{size:"65%",background:"transparent"}}},dataLabels:{enabled:!1},responsive:[{breakpoint:2600,options:{chart:{width:380}}},{breakpoint:640,options:{chart:{width:200}}}]};t.Z=()=>{let[e,t]=(0,a.useState)({series:[65,34,12,56]});return(0,r.jsxs)("div",{className:"col-span-12 rounded-md border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8",children:[(0,r.jsxs)("div",{className:"mb-3 justify-between gap-4 sm:flex",children:[(0,r.jsx)("div",{children:(0,r.jsx)("h5",{className:"text-xl font-semibold text-black dark:text-white",children:"Visited Analysis"})}),(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"relative z-20 inline-block",children:[(0,r.jsxs)("select",{name:"",id:"",className:"relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none",children:[(0,r.jsx)("option",{value:"",className:"dark:bg-boxdark",children:"Monthly"}),(0,r.jsx)("option",{value:"",className:"dark:bg-boxdark",children:"Yearly"})]}),(0,r.jsx)("span",{className:"absolute right-3 top-1/2 z-10 -translate-y-1/2",children:(0,r.jsxs)("svg",{width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z",fill:"#637381"}),(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z",fill:"#637381"})]})})]})})]}),(0,r.jsx)("div",{className:"mb-2",children:(0,r.jsx)("div",{id:"chartThree",className:"mx-auto flex justify-center",children:(0,r.jsx)(n.Z,{options:i,series:e.series,type:"donut"})})}),(0,r.jsxs)("div",{className:"-mx-8 flex flex-wrap items-center justify-center gap-y-3",children:[(0,r.jsx)("div",{className:"w-full px-8 sm:w-1/2",children:(0,r.jsxs)("div",{className:"flex w-full items-center",children:[(0,r.jsx)("span",{className:"mr-2 block h-3 w-full max-w-3 rounded-full bg-primary"}),(0,r.jsxs)("p",{className:"flex w-full justify-between text-sm font-medium text-black dark:text-white",children:[(0,r.jsx)("span",{children:" Desktop "}),(0,r.jsx)("span",{children:" 65% "})]})]})}),(0,r.jsx)("div",{className:"w-full px-8 sm:w-1/2",children:(0,r.jsxs)("div",{className:"flex w-full items-center",children:[(0,r.jsx)("span",{className:"mr-2 block h-3 w-full max-w-3 rounded-full bg-[#6577F3]"}),(0,r.jsxs)("p",{className:"flex w-full justify-between text-sm font-medium text-black dark:text-white",children:[(0,r.jsx)("span",{children:" Tablet "}),(0,r.jsx)("span",{children:" 34% "})]})]})}),(0,r.jsx)("div",{className:"w-full px-8 sm:w-1/2",children:(0,r.jsxs)("div",{className:"flex w-full items-center",children:[(0,r.jsx)("span",{className:"mr-2 block h-3 w-full max-w-3 rounded-full bg-[#8FD0EF]"}),(0,r.jsxs)("p",{className:"flex w-full justify-between text-sm font-medium text-black dark:text-white",children:[(0,r.jsx)("span",{children:" Mobile "}),(0,r.jsx)("span",{children:" 45% "})]})]})}),(0,r.jsx)("div",{className:"w-full px-8 sm:w-1/2",children:(0,r.jsxs)("div",{className:"flex w-full items-center",children:[(0,r.jsx)("span",{className:"mr-2 block h-3 w-full max-w-3 rounded-full bg-[#0FADCF]"}),(0,r.jsxs)("p",{className:"flex w-full justify-between text-sm font-medium text-black dark:text-white",children:[(0,r.jsx)("span",{children:" Other "}),(0,r.jsx)("span",{children:" 12% "})]})]})})]})]})}},1387:function(e,t,s){var r=s(3827),a=s(4090),n=s(981);let i={colors:["#3C50E0","#80CAEE"],chart:{fontFamily:"Satoshi, sans-serif",type:"bar",height:335,stacked:!0,toolbar:{show:!1},zoom:{enabled:!1}},responsive:[{breakpoint:1536,options:{plotOptions:{bar:{borderRadius:0,columnWidth:"25%"}}}}],plotOptions:{bar:{horizontal:!1,borderRadius:0,columnWidth:"25%",borderRadiusApplication:"end",borderRadiusWhenStacked:"last"}},dataLabels:{enabled:!1},xaxis:{categories:["M","T","W","T","F","S","S"]},legend:{position:"top",horizontalAlign:"left",fontFamily:"Satoshi",fontWeight:500,fontSize:"14px",markers:{radius:99}},fill:{opacity:1}};t.Z=()=>{let[e,t]=(0,a.useState)({series:[{name:"Expense",data:[44,55,41,67,22,43,65]},{name:"Income",data:[13,23,20,8,13,27,15]}]});return(0,r.jsxs)("div",{className:"col-span-12 rounded-md border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4",children:[(0,r.jsxs)("div",{className:"mb-4 justify-between gap-4 sm:flex",children:[(0,r.jsx)("div",{children:(0,r.jsx)("h4",{className:"text-xl font-semibold text-black dark:text-white",children:"Statistics this week"})}),(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"relative z-20 inline-block",children:[(0,r.jsxs)("select",{name:"#",id:"#",className:"relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none",children:[(0,r.jsx)("option",{value:"",className:"dark:bg-boxdark",children:"This Week"}),(0,r.jsx)("option",{value:"",className:"dark:bg-boxdark",children:"Last Week"})]}),(0,r.jsx)("span",{className:"absolute right-3 top-1/2 z-10 -translate-y-1/2",children:(0,r.jsxs)("svg",{width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z",fill:"#637381"}),(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z",fill:"#637381"})]})})]})})]}),(0,r.jsx)("div",{children:(0,r.jsx)("div",{id:"chartTwo",className:"-mb-9 -ml-5",children:(0,r.jsx)(n.Z,{options:i,series:e.series,type:"bar",height:350,width:"100%"})})})]})}}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Transactions"],{"020b":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Block",{staticClass:"card-base block custom-box-shadow"},[t._t("default")],2)},s=[],i=a("0814"),r={name:"CardBase",components:{Block:i["a"]}},l=r,o=a("2877"),c=Object(o["a"])(l,n,s,!1,null,"64f32f13",null);e["a"]=c.exports},"0af5":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("InputBase",{attrs:{title:t.title,required:t.required,info:t.info,error:t.error},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.id,s=e.isInvalid;return[a("select",{ref:"input",staticClass:"form-control",class:{"is-invalid":s},attrs:{id:n,required:t.required,placeholder:t.placeholder,disabled:t.disabled},domProps:{value:t.value},on:{input:t.updateInput}},t._l(t.options,(function(e,n){return a("option",{key:n,attrs:{disabled:e.disabled,hidden:e.hidden},domProps:{selected:e.selected,value:t.getOptionValue(e)}},[t._v(" "+t._s(t.getOptionText(e))+" ")])})),0)]}}])})},s=[],i=a("850b"),r={name:"InputSelect",components:{InputBase:i["a"]},props:{title:{type:String,default:""},options:{type:Array,default:()=>[]},required:{type:Boolean,default:!1},value:{type:[String,Object,Number,Boolean],default:null},optionValue:{type:String,default:""},optionText:{type:String,default:""},error:{type:String,default:""},placeholder:{type:String,default:""},info:{type:String,default:""},disabled:{type:Boolean}},methods:{updateInput(){this.$emit("input",this.$refs.input.value),this.$emit("select",this.$refs.input.value)},getOptionValue(t){return this.optionValue?t[this.optionValue]:t},getOptionText(t){return this.optionText?t[this.optionText]:t}}},l=r,o=a("2877"),c=Object(o["a"])(l,n,s,!1,null,null,null);e["a"]=c.exports},"0f8e":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("FlexBox",{staticClass:"flex-lg-row flex-wrap align-items-lg-center",attrs:{direction:"column-reverse",justify:"between","align-items":"end"}},[a("Block",{staticClass:"p-2"},[t._v(" "+t._s(t.pagination.message)+" ")]),a("FlexBox",{staticClass:"flex-lg-row flex-wrap align-items-lg-center",attrs:{direction:"column",justify:"between","align-items":"end"}},[a("InputSelect",{staticClass:"my-2 my-lg-0",attrs:{options:t.perPages},on:{select:function(e){return t.$emit("change")}},model:{value:t.pagination.perPage,callback:function(e){t.$set(t.pagination,"perPage",e)},expression:"pagination.perPage"}}),a("nav",{staticClass:"ml-3"},[a("ul",{staticClass:"pagination disable-user-select mb-0"},[a("li",{staticClass:"page-item",class:{disabled:!t.isPreviousable},on:{click:function(e){return e.preventDefault(),t.setCurrent(t.current-1)}}},[a("span",{staticClass:"page-link"},[t._v("Previous")])]),t._l(t.pages,(function(e,n){return a("li",{key:n,staticClass:"page-item",class:{active:t.current===e}},[a("a",{staticClass:"page-link btn-primary",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.setCurrent(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:!t.isNextable},on:{click:function(e){return e.preventDefault(),t.setCurrent(t.current+1)}}},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("Next")])])],2)])],1)],1)},s=[],i=a("2ef0"),r=a("9559"),l=a("0814"),o=a("0af5"),c={name:"Pagination",components:{InputSelect:o["a"],Block:l["a"],FlexBox:r["a"]},props:{visibleLength:{type:Number,default:5},pagination:{type:Object,default(){return{}}}},data(){return{offset:0,perPages:[5,15,25,50,100],pages:[]}},computed:{current(){return this.pagination.current||1},length(){return this.pagination.pages||1},isNextable(){return this.length>this.current},isPreviousable(){return this.current>1}},watch:{length:{handler(){this.unWatchCurrentPageValue();const{visibleLength:t}=this,e=Math.ceil(t/2)+(t%2?0:1);this.offset=t-(t-e+1),this.generatePagination(),this.length>this.visibleLength&&(this.unWatchCurrentPageValue=this.$watch("current",this.generatePagination))},immediate:!0}},methods:{unWatchCurrentPageValue(){},generatePagination(){const{current:t,offset:e,length:a,visibleLength:n}=this;let s=t-e;s<1&&(s=1);let r=s+n;r>a&&(r=a+1,s=r-n,s<1&&(s=1)),this.pages=Object(i["range"])(s,r)},setCurrent(t){let e=t;t<=1?e=1:t>=this.length&&(e=this.length),e!==this.current&&this.$emit("change",e)}}},u=c,d=(a("5148"),a("2877")),p=Object(d["a"])(u,n,s,!1,null,"64c09d8e",null);e["a"]=p.exports},5148:function(t,e,a){"use strict";a("b994")},a181:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Block",[a("TransactionsTable",{attrs:{"is-loading":t.isLoading,transactions:t.transactions,"data-filters":t.dataFilters,pagination:t.pagination},on:{reload:t.fetchData}})],1)},s=[],i=a("9819");function r(t){const{cancelPrevious:e=!0}=t;return Object(i["a"])({url:"transactions",method:"get",params:t,cancelPrevious:e})}var l=a("7228"),o=a("0814"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Block",{staticClass:"mb-4"},[a("CardBase",{staticClass:"p-4 mb-3"},[a("Row",[a("Column",{attrs:{md:"3"}},[a("InputSelect",{attrs:{title:"Activity","option-value":"value","option-text":"name",options:t.statuses},on:{select:function(e){return t.$emit("reload")}},model:{value:t.dataFilters.activity,callback:function(e){t.$set(t.dataFilters,"activity",e)},expression:"dataFilters.activity"}})],1),a("Column",{attrs:{md:"3"}},[a("DateRangePicker",{attrs:{title:"Date Range"},on:{change:function(e){return t.$emit("reload")}},model:{value:t.dataFilters.dateRange,callback:function(e){t.$set(t.dataFilters,"dateRange",e)},expression:"dataFilters.dateRange"}})],1),a("Column",{attrs:{md:"6"}},[a("Search",{staticClass:"mt-4 pt-1",attrs:{debounce:500},on:{change:t.onSearch},model:{value:t.dataFilters.keyword,callback:function(e){t.$set(t.dataFilters,"keyword",e)},expression:"dataFilters.keyword"}})],1)],1)],1),a("CardBase",{class:t.isLoading?"":"with-table"},[a("CardLoader",{attrs:{"is-loading":t.isLoading}},[a("Block",{staticClass:"table-responsive collapsible"},[t.transactions.length?a("table",{staticClass:"table m-0"},[a("thead",{staticClass:"bg-gray-lighter"},[a("tr",[a("th",{staticClass:"text-center",staticStyle:{width:"60px"}},[t._v(" # ")]),a("th",{staticClass:"pl-4 ml-4",staticStyle:{width:"20%"}},[t._v(" Activity ")]),a("th",{staticClass:"text-right"},[t._v(" Debit ")]),a("th",{staticClass:"text-right"},[t._v(" Credit ")]),a("th",{staticClass:"text-right"},[t._v(" Balance ")]),a("th",{staticClass:"pl-4",staticStyle:{width:"30%"}},[t._v(" Remark ")]),a("th",{staticClass:"text-right"},[t._v(" Created ")])])]),a("tbody",t._l(t.transactions,(function(e){return a("tr",{key:e.id,attrs:{title:e.remark}},[a("td",{staticClass:"text-center"},[a("span",{staticClass:"hidden-info"},[t._v("#")]),a("span",[t._v(t._s(e.id))])]),a("td",{staticClass:"pl-4 ml-4"},[a("span",{staticClass:"hidden-info"},[t._v("Activity:")]),a("span",[t._v(t._s(e.activity||"N/A"))])]),a("td",{staticClass:"text-right"},[a("span",{staticClass:"hidden-info"},[t._v("Debit:")]),t._v(" "+t._s(e.debit||"N/A")+" ")]),a("td",{staticClass:"text-right"},[a("span",{staticClass:"hidden-info"},[t._v("Credit:")]),t._v(" "+t._s(e.credit||"N/A")+" ")]),a("td",{staticClass:"text-right"},[a("span",{staticClass:"hidden-info"},[t._v("Balance:")]),t._v(" "+t._s(e.balance||"N/A")+" ")]),a("td",{staticClass:"pl-4"},[a("span",{staticClass:"hidden-info"},[t._v("Remark:")]),a("span",{staticClass:"description"},[t._v(" "+t._s(e.remark||"N/A")+" ")])]),a("td",{staticClass:"text-right"},[a("span",{staticClass:"hidden-info"},[t._v("Created:")]),a("span",[t._v(t._s(t.duration(e.created_at)))])])])})),0)]):a("Block",{staticClass:"min-height-300 d-flex flex-row justify-content-center align-items-center"},[a("h4",{staticClass:"text-gray-dark font-w300"},[t._v(" Transactions not Found ")])])],1)],1)],1),a("Pagination",{staticClass:"my-2 my-lg-0",attrs:{pagination:t.pagination},on:{change:t.changePagination}})],1)},u=[],d=a("020b"),p=a("0af5"),h=a("0f8e"),g=a("c2cd"),f=a("dd08"),m=a("27dc"),v=a("1b32"),b=a("d9e1"),C={name:"TransactionsTable",components:{DateRangePicker:b["a"],Block:o["a"],Row:m["a"],Column:v["a"],Search:f["a"],InputSelect:p["a"],CardBase:d["a"],Pagination:h["a"],CardLoader:g["a"]},props:{transactions:{type:Array,default(){return[]}},dataFilters:{type:Object,default(){return{}}},pagination:{type:Object,default(){return{}}},isLoading:{type:Boolean}},data(){return{targetContact:{},isStatusModalShown:!1,statuses:[{name:"All",value:null},{name:"MESSAGE_SENT",value:"MESSAGE_SENT"},{name:"MESSAGE_REFUND",value:"MESSAGE_REFUND"},{name:"DEPOSIT",value:"DEPOSIT"},{name:"DEPOSIT_REFUND",value:"DEPOSIT_REFUND"},{name:"CASHBACK",value:"CASHBACK"}]}},methods:{onSearch(){this.pagination.current=1,this.$emit("reload")},changePagination(t){this.pagination.current=t,this.$emit("reload",t)}}},_=C,y=a("2877"),k=Object(y["a"])(_,c,u,!1,null,"9cfa21ba",null),x=k.exports,S={name:"Transactions",components:{Block:o["a"],TransactionsTable:x},data(){return{isLoading:!1,targetTransaction:{},transactions:[],dataFilters:{status:null,keyword:"",dateRange:{from:"",to:""}},pagination:{pages:1,current:1,perPage:15}}},computed:{filters(){const{dateRange:t,keyword:e,activity:a}=this.dataFilters,{current:n,perPage:s}=this.pagination;let i={page:n,per_page:s,keyword:e||null,activity:a||null};const{from:r,to:l}=t;return(r||l)&&(i={...i,start_date:r||null,end_date:l||null}),i}},created(){this.fetchData()},mounted(){this.$bus.on("router-link-clicked",()=>{this.isLoading||this.fetchData()})},beforeDestroy(){this.$bus.removeAllListeners("router-link-clicked")},methods:{fetchData(t){this.isLoading=!0,r({...this.filters,page:t}).then(({data:t,meta:e})=>{this.transactions=t,this.pagination=Object(l["b"])(e),this.isLoading=!1}).catch(t=>{"request-cancel"!==t&&(this.$toast.error("There was an error while fetching data."),this.isLoading=!1)})}}},P=S,w=Object(y["a"])(P,n,s,!1,null,null,null);e["default"]=w.exports},b994:function(t,e,a){},d9e1:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("InputBase",{attrs:{title:t.title},scopedSlots:t._u([{key:"default",fn:function(e){return[a("RangePicker",{staticClass:"w-100",attrs:{ranges:{Today:[t.moment(),t.moment()],"This Month":[t.moment(),t.moment().endOf("month")]}},on:{change:t.onChange}})]}}])})},s=[],i=(a("9980"),a("0bb7")),r=a("c1df"),l=a.n(r),o=a("2ef0"),c=a("850b"),u={name:"DateRangePicker",components:{InputBase:c["a"],RangePicker:i["a"].RangePicker},props:{title:{type:String,default:""},value:{type:Object,default:()=>({type:"period",from:"",to:""})}},data(){return{from:null,to:null}},watch:{value:{handler({from:t,to:e}){this.from=t?l()(t,"YYYY-MM-DD"):this.from,this.to=t?l()(e,"YYYY-MM-DD"):this.to},immediate:!0,deep:!0}},created(){this.debounce&&(this.onChange=Object(o["debounce"])(this.onChange,this.debounce))},methods:{moment:l.a,onChange(t,e){this.$emit("input",{from:e[0],to:e[1]}),this.$emit("change")}}},d=u,p=a("2877"),h=Object(p["a"])(d,n,s,!1,null,"2d659a7f",null);e["a"]=h.exports},dd08:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group"},[a("input",{ref:"searchInp",staticClass:"form-control",attrs:{type:"search",placeholder:t.placeholder},domProps:{value:t.value},on:{input:t.setValue}}),t._m(0)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"fa fa-search"})])])}],i=a("2ef0"),r={name:"Search",props:{placeholder:{type:String,default:"Search"},value:{type:String,default:""},debounce:{type:Number,default:0}},created(){this.debounce&&(this.onChange=Object(i["debounce"])(this.onChange,this.debounce))},methods:{setValue(){const{value:t}=this.$refs.searchInp;this.$emit("input",t),this.onChange(t)},onChange(t){this.$emit("change",t)}}},l=r,o=a("2877"),c=Object(o["a"])(l,n,s,!1,null,"6ec74c60",null);e["a"]=c.exports}}]);
import{u as a}from"./useHtml-DbT6Jxjo.js";import{_ as o,l,E as c,o as i,c as r}from"./app-D8oHFRX9.js";import"./axios-DfiyEelG.js";const u={__name:"Screenshot",setup(f){const e=l();return c(async()=>{const{html:s,css:t,js:n}=await a("/demo/CanvasBasic/Screenshot.html");new MiniSandbox({el:e.value,files:{"index.html":{defaultValue:s,cssLibs:["index.css"],jsLibs:["index.js"]},"index.css":{defaultValue:t},"index.js":{defaultValue:n}},defaultConfig:{height:"500px"}})}),(s,t)=>(i(),r("div",{ref_key:"el",ref:e},null,512))}},h=o(u,[["__file","Screenshot.vue"]]);export{h as default};

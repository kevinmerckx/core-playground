import{r as e,h as t,g as s}from"./p-b0866405.js";class n{constructor(t){e(this,t),this.sections=[],this.selectedSection=localStorage.getItem("core-playground:selectedSection")||""}async addSection(e){this.sections=[...this.sections,{name:e}],this.sections.sort((e,t)=>e.name.localeCompare(t.name)),this.selectedSection||this.select(e)}select(e){this.selectedSection=e,localStorage.setItem("core-playground:selectedSection",this.selectedSection)}render(){return[t("aside",null,t("ul",null,this.sections.map(e=>t("li",{onClick:()=>this.select(e.name),class:this.selectedSection===e.name?"active":""},e.name)))),t("main",null,t("slot",{name:this.selectedSection}))]}static get style(){return":host{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;overflow:hidden;width:var(--my-playground-width);height:var(--my-playground-height);font-size:var(--my-playground-font-size)}aside{-ms-flex:0 0 auto;flex:0 0 auto;width:var(--my-playground-menu-width);background:var(--my-playground-menu-bg-color);color:var(--my-playground-menu-color);-webkit-box-shadow:2px 0 2px 0 rgba(0,0,0,.5);box-shadow:2px 0 2px 0 rgba(0,0,0,.5)}aside,main{height:100%;overflow:auto}main{-ms-flex:1 1;flex:1 1;padding:10px}ul{list-style:none;margin:0;padding:0}li{height:40px;line-height:40px;padding:0 10px;cursor:pointer;-webkit-transition:color .5s,background .5s;transition:color .5s,background .5s}li.active,li:focus,li:hover{color:var(--my-playground-menu-color-active);background:var(--my-playground-menu-bg-color-active)}"}}class l{constructor(t){e(this,t),this.slot=""}componentDidLoad(){this.element.parentElement.addSection(this.slot)}render(){return[t("h1",null,this.slot),t("slot",null)]}get element(){return s(this)}static get style(){return"h1{margin-top:0;color:var(--my-playground-section-title-color)}"}}export{n as my_playground,l as playground_section};
Vue.component('uim-badge',{computed:{classes:function(){return [
		this.color !== "none" ? 'badge-'+this.color : '',
		this.pill ? 'badge-pill' : ''
		]},styles:function(){return [];}};,props:{pill:{{type:Boolean,default:false}},color:{{ type: String,default:"none", validator: value => ["none","primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].indexOf(value) >= 0}}},template:`<span class="badge" :class="this.classes" :style="this.styles"><slot /></span>`});
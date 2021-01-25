Vue.component('uim-list-button',{computed:{classes:function(){return[active ? 'active':'',color !== 'None'? 'btn-'+this.color:'',disabled ? 'disabled':''];},styles:function(){return [];}};,props:{active:{{type:Boolean,default:false}},color:{{type:String,default:'None'}},disabled:{{type:Boolean,default:false}}},template:`<button class="list-group-item list-group-item-action" :class="this.classes" :style="this.styles"><slot /></button>`});
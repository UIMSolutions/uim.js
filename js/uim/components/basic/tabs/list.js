Vue.component('uim-tab-list',{computed:{classes:function(){return [];},styles:function(){return [];}};,props:{fill:{{type:Boolean,default:false}},pills:{{type:Boolean,default:false}},tabs:{{type:Boolean,default:false}},vertical:{{type:Boolean,default:false}},justified:{{type:Boolean,default:false}}},template:`<li class="nav-item" :class="this.classes" :style="this.styles"><slot /></li>`});
Vue.component('uim-chat-messages',{computed:{classes:function(){return [];},styles:function(){return [];}};,props:{messages:{{type:Array,default:function(){return[];}}}},template:`<div class="uim-chat-messages" :class="this.classes" :style="this.styles"><uim-chat-message :key="message.id" :message="message" v-for="message in this.messages"></uim-chat-message><slot></slot></div>`});
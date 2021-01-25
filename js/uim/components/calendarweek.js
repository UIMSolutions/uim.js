Vue.component('uim-calendar-week',{computed:{classes:function(){return [];},styles:function(){return [];}};,methods:{dayString(day){return ''+day.getDate()+'. '+day.getMonth()+'.'+' '+day.getFullYear();},eventsOfWeek(day){if (this.dayString(day) in this.events) return this.events[this.dayString(day)]; return [];},weekName(day){switch(day.getDay()) {
case 0: return 'So';
case 1: return 'Mo';
case 2: return 'Di';
case 3: return 'Mi';
case 4: return 'Do';
case 5: return 'Fr';
case 6: return 'Sa';
default: return 'XX';
		}}},props:{weekdays:{{type:Array, default(){ return ['mo', 'di', 'mi', 'do', 'fr', 'sa', 'so']}}},events:{{type:Object, default(){ return {} }}},rootPath:{{type:String, default: '/'}},start:{{type:Date, default(){ return new Date();}}}},template:`<div class="card-columns uim-calendar-week" :class="this.classes" :style="this.styles"><div class="border card" v-for="weekday, index in this.weekdays"><div class="card-header"><h2>{{weekName(start.addDays(index))}}<small class="ml-1">{{dayString(start.addDays(index))}}</small></h2></div><div class="list-group list-group-flush"><a class="list-group-item list-group-item-action" :href="this.rootPath+'/event/'+event.id" :key="event.id" v-for="event in eventsOfWeek(start.addDays(index))"><span class="ml-1">{{event.title}}</span></a></div><div class="card-footer"><div class="btn-group btn-group-sm w-100" role="group"><a class="btn" :href="'/events'" type="button"><i class="fas fa-plus-circle"></i> Neuer Eintrag</a></div></div></div></div>`});
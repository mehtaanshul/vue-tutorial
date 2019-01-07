<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-highlight:background.delayed="'red'">Color this!</p>
                <p v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500 }">Color this too!</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    	directives: {
    		'local-highlight': {
    			bind(el,binding,vnode){
    				//el.style.backgroundColor = 'green';
    				//el.style.backgroundColor = binding.value;
    				var delay = 0;
    				if(binding.modifiers['delayed']){
    					delay = 3000;
    				}
    				if(binding.modifiers['blink']){
    					let main = binding.value.mainColor;
    					let sec = binding.value.secondColor;
    					let curr = main;
    					setTimeout(() => {
    						setInterval(() => {
    						curr = curr == sec ? main : sec;
    						if(binding.arg == 'background'){
    							el.style.backgroundColor = curr;
    						}
    						else {
    							el.style.color = binding.curr;
    						}
    					},binding.value.delay);
    					},delay);
    				}
    				else {
    					setTimeout(() => {
    						if(binding.arg == 'background'){
    							el.style.backgroundColor = binding.value.mainColor;
    						}
    						else {
    							el.style.color = binding.value.mainColor;
    						}
    					},delay);
    				}
    			}
    		}
    	}
    }
</script>

<style>

</style>

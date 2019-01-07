<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
				<!-- <appQuote quote="A Wonderful Quote!"></appQuote> -->
                <!-- <appQuote>
                    <h2 slot="title">The Quote</h2>
                    <p slot="content">A Wonderful Quote!</p>
                </appQuote> -->
                <button @click="SelectedComponent = 'appQuote'">Quote</button>                   
                <button @click="SelectedComponent = 'appAuthor'">Author</button>                   
                <button @click="SelectedComponent = 'appNew'">New</button>
                <!-- <component :is="SelectedComponent"></component> -->                   
                <keep-alive><component :is="SelectedComponent"></component></keep-alive>                   
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quotes.vue'
    import New from './components/New.vue'
	import Author from './components/Author.vue'

    export default {
    data: function() {
        return {
            SelectedComponent : 'appQuote'
        }
    },
     components:{
     	appQuote: Quote,
        appAuthor: Author,
        appNew: New
     }   
    }
</script>

<style>
</style>

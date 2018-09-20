<template>
    <div>
        <span class="count" v-text="count"></span>
        <button @click="count++" class="increment">increment</button>
        <button @click="count > 0 && count--" class="decrement" v-show='count > 0'>decrement</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                count: 0
            } 
        }
    }
</script>
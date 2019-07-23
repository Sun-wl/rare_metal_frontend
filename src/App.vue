<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style scoped>
    #app {
        color: #444;
        height: 100%;
        display: flex;
    }
</style>

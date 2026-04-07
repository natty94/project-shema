<script setup>
import headers from './components/headers.vue';
import Footers from './components/Footers.vue';
</script>
<template>
    <div class="div">
    <headers/>
    <Footers/>
    </div>

</template> 
<style class="scoped">
.div{
    max-width:1100px;
}
headers{
    width: 300px;
}

</style>
<template>
    <p>{{ situation.boy.name }}</p>
</template>

<script lang="ts">

import Vue from 'vue';
import { Situation } from '@/game/situation/Situation';

export default Vue.extend({
    props: {
        situation: {
            required: true,
            type: Object as () => Situation
        }
    }
})
</script>

<style>

</style>
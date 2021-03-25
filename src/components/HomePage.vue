<template>
    <div class="home-page">
        <div class="center">
            <div class="card card0 border-0 text-end">
                <span @click="logout" class="text-format">Kijelentkezés</span>
                <BoySelector v-on:select-situation="selectSituation" v-if="!situation"></BoySelector>
                <Situation v-else :situation="situation"></Situation>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
// null if there is no current situation, at that time, we need to select a boy
import { Situation } from '@/game/situation/Situation';
import { Authentication } from '@/services/Authentication';
import Vue from 'vue';
import BoySelector from './BoySelector.vue';
import SituationView from './Situation.vue';

export default Vue.extend({
    name: 'HomePage',
  props: ['authentication', 'redirectToLogin'],
    data() {
        return {
            situation: null as Situation
        }
    },
    components: {
        BoySelector,
        Situation: SituationView
    },
    methods: {
        logout: function () {
            const typedAuthentication: Authentication = this.authentication;
            typedAuthentication.logout();
            this.redirectToLogin();
      },
      selectSituation(situation: Situation) {
          this.situation = situation;
      }
    }
})
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.text-format {
    margin: 2px 8px;
    cursor: pointer;
    color: #ce56ce;
    font: x-large 'Gabriola';
    width: 100px;
}

.text-end {
    text-align: right;
}
.center {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
}
.card0 {
    box-shadow: 0px 4px 8px 0px #757575;
    border-radius: 0px;
    height: 80vh;
    width: 70vw;
    margin: 10vh;
    position: relative;
    background-color: white;
}

@media only screen and (max-width: 990px) {
   .card0 {
        height: 100%;
    }
}

</style>

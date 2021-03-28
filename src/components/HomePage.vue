<template>
    <div class="home-page">
        <div class="center">
            <div class="card card0 text-end">
                <span @click="logout" class="text-format">Kijelentkezés</span>
                <BoySelector v-on:select-boy="selectBoy" v-if="!situation" />
                <Situation v-else v-on:select-next-situation="setSituation" :situation="situation" :textFormatter="textFormatter" />
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
import { TextFormatter } from '../game/formatter/TextFormatter';
import { ApplicationStateHolder } from '@/state/ApplicationStateHolder';
import { ApplicationState } from '@/state/ApplicationState';
import { SituationTreeFactory } from '@/game/situation/trees/SituationTreeFactory';
import { TREES } from '@/game/situation/trees/Trees';

export default Vue.extend({
    name: 'HomePage',
    props: ['authentication', 'redirectToLogin', 'applicationStateHolder'],
    beforeMount() {
        this.situation = this.applicationStateHolder.get().game.currentSituation
        this.textFormatter = new TextFormatter({ username: this.applicationStateHolder.get().userData.username }, console);
    },
    data() {
        return {
            situation: null as Situation,
            TextFormatter: null as TextFormatter
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
      selectBoy(boyName: string) {
          debugger;
          const rootNode = new SituationTreeFactory().createSituationTree(boyName, TREES[boyName]);
          const stateHolder: ApplicationStateHolder = this.applicationStateHolder;
          const oldState: ApplicationState = stateHolder.get();
          stateHolder.set({
              ...oldState,
              game: {
                  ...oldState.game,
                  selectedBoyName: boyName,
                  rootSituation: rootNode,
                  currentSituation: rootNode
              }
          })
          this.situation = rootNode;
      },
      setSituation(situation: Situation) {
          // TODO: extract this
          const stateHolder: ApplicationStateHolder = this.applicationStateHolder;
          const oldState: ApplicationState = stateHolder.get();
          stateHolder.set({
              ...oldState,
              game: {
                  ...oldState.game,
                  currentSituation: situation
              }
          })
          this.situation = situation;
      }
    }
})
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.text-format {
    cursor: pointer;
    color: #ce56ce;
    font: x-large 'Gabriola';
    width: 100px;
    position: absolute;
    top: 2px;
    right: 8px;
    z-index: 1;
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

@media only screen and (max-width: 991.9px) {
   .card0 {
        height: 100%;
    }
}

</style>

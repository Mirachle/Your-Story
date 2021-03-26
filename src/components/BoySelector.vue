<template>
    <div>
        <h1>Válaszd ki melyik fiúval szeretnél elmenni randevúra.</h1>
        <div class="bottom">
            <div class="col-md-4 center box" @click="selectBoy('bela')">
                <img class="img-responsive" src="@/assets/bela/bela_normal.png" />
            </div>
            <div class="col-md-4 center box" @click="selectBoy('athem')">
                <img class="img-responsive" src="@/assets/athem/athem_normal.png" />
            </div>
            <div class="col-md-4 center box" @click="selectBoy('agoston')">
                <img class="img-responsive" src="@/assets/agoston/agoston_normal.png" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { SituationTreeFactory } from '@/game/situation/trees/SituationTreeFactory';
import { athemTree } from '@/game/situation/trees/Athem';
import { RawSituation } from '@/game/situation/trees/RawSituation';
import { belaTree } from '../game/situation/trees/Bela';
import { agostonTree } from '../game/situation/trees/Agoston';

export default Vue.extend({
    name: 'BoySelector',
    methods: {
        selectBoy(boyName: 'bela' | 'athem' | 'agoston') {
            let rawSituations: Array<RawSituation>;
            switch(boyName) {
                case 'athem':
                    rawSituations = athemTree;
                    break;
                case 'bela':
                    rawSituations = belaTree;
                    break;
                case 'agoston':
                    rawSituations = agostonTree;
                    break;
            }
            const processedTree = new SituationTreeFactory().createSituationTree(boyName, rawSituations);
            this.$emit('select-situation', processedTree);
        }
    }
})
</script>

<style>
h1{
    text-align: center;
    margin-top: 5vh;
    font: bold xxx-large 'Gabriola';
}

.center {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
    
}
.box:hover {
  box-shadow: 0 6px 35px 0 rgba(121, 4, 86, 0.247);
  cursor: pointer;
}

.bottom {
    bottom: 0;
    position: absolute;
}


@media only screen and (max-width: 990px) {
    .bottom {
        bottom: auto;
        position: relative;
    }
}
</style>
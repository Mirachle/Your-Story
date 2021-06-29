<template>
    <div>
        <h1>Válaszd ki melyik fiúval szeretnél elmenni randevúra.</h1>
        <div class="bottom">
            <div class="col-md-4 center box" @click="selectBoy('aegon')">
                <img class="img-responsive" src="@/assets/aegon/aegon_normal.png" />
            </div>
            <div class="col-md-4 center box" @click="selectBoy('athem')">
                <img class="img-responsive" src="@/assets/athem/athem_normal.png" />
            </div>
            <div class="col-md-4 center box" @click="selectBoy('aiden')">
                <img class="img-responsive" src="@/assets/aiden/aiden_normal.png" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'BoySelector',
    methods: {
        selectBoy(boyName: 'aegon' | 'athem' | 'aiden') {
            this.$emit('select-boy', boyName);
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
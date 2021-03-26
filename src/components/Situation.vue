<template>
    <div :style="{ backgroundImage: sceneBackgroundImage }" class="bg-image">
        <div class="speech">{{ situation.dialogue.name }}: {{ situation.dialogue.text }}</div>
        <img v-if="situation.boy" id="boy-image" :src="boyImage">
        <div class="rows-container">
            <div @click="choseAnswer(answer)" class="answer-row" v-for="(answer, index) in situation.dialogue.answers" :key="index">{{ answer.text }}</div>
        </div>
    </div>
</template>

<script lang="ts">
// TODO: create Game class, so its state can be saved (Memento pattern), and it can collect all points
import Vue from 'vue';
import { Situation } from '@/game/situation/Situation';
import { Answer } from '@/game/situation/Answer';

export default Vue.extend({
    props: {
        situation: {
            required: true,
            type: Object as () => Situation
        }
    },
    computed: {
        sceneBackgroundImage() {
            return `url(${require('@/assets/' + this.situation.scene.image)})`;
        },
        boyImage() {
            return require(`@/assets/${this.situation.boy.image}`);
        }
    },
    methods: {
        choseAnswer(answer: Answer) {
            this.$emit('select-next-situation', answer.followingSituation);
        }
    }
})
</script>

<style>
#boy-image {
    width: auto;
    max-height: 100%;
    position: absolute;
    bottom: 35px;
    max-width: 50vw;
}

.rows-container {
    position: absolute;
    font-size: large;
    bottom: 0px;
    width: 100%;
}

.answer-row {
    background-color: white;
    width: 100%;
    color: black;
    padding: 5px;
    border: 1px solid #ff8ddc;
}

.answer-row:hover {
    background-color: #ffddf2;;
}


.speech {
    font-size: x-large;
    color: black;
    position: absolute;
    background: white;
    padding: 10px;
    border: 2px solid black;
    border-radius: 10px;
    max-width: 320px;
    top: 20%;
    right: 10%;
}

.bg-image {
    width: auto;
    height: 100%;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    text-align: left;
}


@media only screen and (max-width: 991.9px) {
   .bg-image {
        width: auto;
        height: 70vh;
    }
    .speech {
        top: 33%;
        right: 12%;
        font-size: small;
    }
    #boy-image {
        max-height: 70%;
    }
}

@media only screen and (max-width: 600px) {
   .bg-image {
        width: auto;
        height: 50vh;
    }
    .speech {
        top: 33%;
        right: 1%;
        font-size: xx-small;

    }
}
</style>
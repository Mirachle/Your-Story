<template>
    <div class="login-page">
        <div class="card card0 border-0">
            <div class="row" style="height: 100%">

                <div class="col-md-6 center">
                    <div class="row center">
                        <img src="@/assets/allinone_original.png" class="image">
                    </div>
                </div>

                <div class="col-md-6 center">
                    <div class="card2 card border-0 fuchsia">
                        <h1>Bejelentkezés</h1>
                        <form @submit.prevent="login">
                            <div class="row px-3">
                                <label>
                                    <h2>Felhasználónév</h2>
                                </label>
                                <input v-on:keyup="clearCustomValidityFor" v-model="username" type="text" name="username" placeholder="Felhasználónév">
                            </div>

                            <div class="row px-3">
                                <label>
                                    <h2>Jelszó</h2>
                                </label>
                                <input v-model="password" type="password" name="password" placeholder="Jelszó">
                            </div>
<!--
                            <div class="row text-end" >
                                <a href="#">Elfelejtetted a jelszavad?</a>
                            </div>
-->
                            <div class="row">
                                <button type="submit" class="btn btn-pink text-center">Bejelentkezés</button>
                            </div>

                            <div class="row font-weight-bold text-end">
                                <div class="black">Még nem regisztráltál?
                                    <router-link to="/registration" class="fuchsia">Regisztáció</router-link>
                                    <router-view/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Authentication } from '@/services/Authentication';
import { AuthenticationError } from '../services/Authentication/AuthenticationError';

export default Vue.extend({
  name: 'LoginPage',
  props: ['authentication', 'redirectToHome'],
  data(){
      return {
        username : '',
        password : '',
      }
    },
  methods: {
      clearCustomValidityFor(keyEvent: Event) {
        const inputElement = keyEvent.target as HTMLInputElement;
        inputElement.setCustomValidity('');
    },
      handleLoginError(form: HTMLFormElement, authError: AuthenticationError) {
        const usernameInput = form.elements.namedItem('username') as HTMLInputElement;
        usernameInput.setCustomValidity(authError.message);
      },
      login: async function (submitEvent: Event) {
          const form = submitEvent.target as HTMLFormElement;
          try {
              const typedAuthentication: Authentication = this.authentication;
              await typedAuthentication.login(this.username, this.password);
              this.redirectToHome();
          } catch(e) {
              if(!AuthenticationError.isAuthenticationError(e))
                throw e;
              this.handleLoginError(form, e);
          }
      }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.fuchsia{
    color:#ce56ce;
}

.black{
    color:black;
    font-size: large;
}

.text-end{
    text-align: end;
}

.center{
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
}

body {
    color: #000;
    overflow-x: hidden;
    height: 100%;
    background-color: #B0BEC5;
    background-repeat: no-repeat
}

.card0 {
    box-shadow: 0px 4px 8px 0px #757575;
    border-radius: 0px;
    height: 80vh;
    margin: 10vh;
    background-color: white;
}

.card2 {
    margin: 0px 40px
}

.image {
    width: 95%;
}

::placeholder {
    color: #BDBDBD;
    opacity: 1;
    font-weight: 300;
    font-size: large;
}

:-ms-input-placeholder {
    color: #BDBDBD;
    font-weight: 300
}

::-ms-input-placeholder {
    color: #BDBDBD;
    font-weight: 300
}

input,
textarea {
    padding: 10px 12px 10px 12px;
    border: 1px solid pink;
    border-radius: 3px;
    margin-bottom: 5px;
    margin-top: 2px;
    width: 100%;
    box-sizing: border-box;
    color: #2C3E50;
    font-size: 14px;
    letter-spacing: 1px;
    font-size: large;
}

input:focus,
textarea:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid fuchsia;
    outline-width: 0
}

button:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline-width: 0
}

.btn-pink {
    background-color: #f165df;
    width: 150px;
    color: #fff;
    border-radius: 3px;
    margin: 20px 0 20px;
    font-size: x-large;
}

.btn-pink:hover {
    background-color: fuchsia;
    cursor: pointer
}

@media screen and (max-width: 994px) {
    .card2 {
        border-top: 1px solid #EEEEEE !important;
        margin: 0px 15px
    }
    .card0 {
        height: 100%;
    }
}
</style>

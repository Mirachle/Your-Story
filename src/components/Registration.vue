<template>
    <div class="reigstration">
        <div class="card card0 border-0">
            <div class="row" style="height: 100%">

                <div class="col-lg-6 center">
                    <div class="card2 card border-0 fuchsia">
                        <h1>Regisztárció</h1>

                        <div class="row px-3">
                            <label>
                                <h4>Email</h4>
                            </label>
                            <input type="text" name="email" placeholder="Email">
                        </div>

                        <div class="row px-3">
                            <label>
                                <h4>Felhasználónév</h4>
                            </label>
                            <input type="text" name="username" placeholder="Felhasználónév">
                        </div>

                        <div class="row px-3">
                            <label>
                                <h4>Jelszó</h4>
                            </label>
                            <input type="password" name="password" placeholder="Jelszó">
                        </div>

                        <div class="row px-3">
                            <label>
                                <h4>Jelszó ismét</h4>
                            </label>
                            <input type="password" name="password" placeholder="Jelszó">
                        </div>

                        <div class="row">
                            <button type="submit" class="btn btn-pink text-center">Regisztráció</button>
                        </div>

                    </div>
                </div>

                <div class="col-lg-6 center">
                    <div class="card1">
                        <div class="row">
                            <img src="https://i.imgur.com/uNGdWHi.png" class="image">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Registration',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.fuchsia{
    color:#ce56ce;
}

.black{
    color:black;
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
}

.card2 {
    margin: 0px 40px
}

.image {
    width: 360px;
    height: 280px
}

.border-line {
    border-right: 1px solid #EEEEEE
}

.text-sm {
    font-size: 14px !important
}

::placeholder {
    color: #BDBDBD;
    opacity: 1;
    font-weight: 300
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

a {
    color: inherit;
    cursor: pointer
}

.btn-pink {
    background-color: #f165df;
    width: 150px;
    color: #fff;
    border-radius: 3px;
    margin: 20px 0 20px;
}

.btn-pink:hover {
    background-color: fuchsia;
    cursor: pointer
}

@media screen and (max-width: 991px) {
    .logo {
        margin-left: 0px
    }

    .image {
        width: 300px;
        height: 220px
    }

    .border-line {
        border-right: none
    }

    .card2 {
        border-top: 1px solid #EEEEEE !important;
        margin: 0px 15px
    }
}
</style>

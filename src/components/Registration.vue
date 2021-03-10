<template>
    <div class="registration">
        <div class="card card0 border-0">
            <div class="row" style="height: 100%">
                <h1>HELLOOOOOO</h1>
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

.border-line {
    border-right: 1px solid #EEEEEE
}


@media screen and (max-width: 991px) {
    .border-line {
        border-right: none
    }

    .card2 {
        border-top: 1px solid #EEEEEE !important;
        margin: 0px 15px
    }
}
</style>

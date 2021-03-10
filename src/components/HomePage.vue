<template>
    <div class="home-page">
        <div class="center">
            <div class="card card0 border-0">Itt lesz maga a játék.</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomePage',
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

.card0 {
    box-shadow: 0px 4px 8px 0px #757575;
    border-radius: 0px;
    height: 80vh;
    width: 70vw;
    margin: 10vh;
}

</style>

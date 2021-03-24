<template>
    <div class="home-page">
        <div class="center">
            <div class="card card0 border-0">
                <p class="text-end">Kijelentkezés</p>

                <h1>Válaszd ki melyik fiúval szeretnél elmenni randevúra.</h1>

                <div class="bottom">
                    <div class="col-md-4 center">
                        <img class="img-responsive" src="@/assets/b1/b1_normal.png" />
                    </div>
                    <div class="col-md-4 center">
                        <img class="img-responsive" src="@/assets/b2/b2_normal.png" />
                    </div>
                    <div class="col-md-4 center">
                        <img class="img-responsive" src="@/assets/b3/b3_normal.png" />
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
  name: 'HomePage',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.text-end{
    text-align: end;
    margin: 2px 8px;
    cursor: pointer;
    color: #ce56ce;
    font: x-large 'Gabriola';
}

h1{
    color: #f165df;
    text-align: center;
    margin-top: 15vh;
    font: bold xxx-large 'Gabriola';
}

.center {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
}

.bottom {
    bottom: 0;
    position: absolute;
}

.card0 {
    box-shadow: 0px 4px 8px 0px #757575;
    border-radius: 0px;
    height: 80vh;
    width: 70vw;
    margin: 10vh;
    position: relative;
}

@media only screen and (max-width: 990px) {
   .card0 {
        height: 100%;
    }
    
    .bottom {
        bottom: auto;
        position: relative;
    }
}

</style>

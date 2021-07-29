<template>
    <img v-bind:src="image" v-on:click="roll()"/>
</template>

<script>
    export default {
        data() {
            return {
                image: ''
            }
        },
        created() {
            this.random();
        },
        methods: {
            random() {
                this.image = [
                    "/images/dice/d1.svg",
                    "/images/dice/d2.svg",
                    "/images/dice/d3.svg",
                    "/images/dice/d4.svg",
                    "/images/dice/d5.svg",
                    "/images/dice/d6.svg"
                ][Math.floor(Math.random() * 6)];
            },
            roll() {
                this.image = "/images/dice/dice.svg";
                setTimeout(() => {
                    this.random();
                }, 1200);
            }
        }
    }
</script>

<style scoped>
    img {
        filter: invert(50%) sepia(100%) saturate(300%) hue-rotate(0deg) brightness(130%) contrast(90%) !important;
        width: 150px;
        height: 150px;
        cursor: pointer;
        margin: 0px;
    }
    @media only screen and (max-device-width:1000px)  { 
        img {
            width: 100px;
            height: 100px;        }
    }
</style>
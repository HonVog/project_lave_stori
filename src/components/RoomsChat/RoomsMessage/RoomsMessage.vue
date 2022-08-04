<template src="./template.html"/>

<script>

    export default {
        name:"RoomsMessage",
        components:{},
        props: ['messag','messagBot'],
        data(){
           return{
           }
        },
        computed:{
            getMessagUser(){
                return this.messag;
            },
            // получает сообщение от бота
            getMessageBot(){
                return  this.messagBot; 
            },
        },
        methods:{
            scrollToElement() {
                const el = this.$refs.scrollToMe;

                if (el) {
                // Use el.scrollIntoView() to instantly scroll to the element
                el.scrollIntoView({behavior: 'smooth'});
                }
            }
        },
        mounted() {
            this.scrollToElement();
        }
    }
</script>

<style scoped lang="scss" src="./style.scss"/>


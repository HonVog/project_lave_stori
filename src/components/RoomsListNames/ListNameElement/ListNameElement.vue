<template src="./template.html"/>

<script>
    export default {
        name:"ListNameElement",
        components:{      
        },
        props: ['data', 'id'],
        data(){
                return{
                }
        },
        computed:{
            fullData(){
                return 'Название окна диалога : ' + 
                        this.data.name +
                        ' | Тема обсуждения : ' +
                        this.data.topic +
                        ' | Дата создания темы : ' +
                        this.data.date;
            }
        },
        methods:{
        },
    }
</script>

<style scoped lang="scss" src="./style.scss"/>



<template src="./template.html"/>

<script>
export default {
    name:"RoomsCard",
    props: [],
    data() {
        return {
            userInput:{ 
                name: '', // название окна чата 
                color:'', // цвет чата
                topic: '', // тема для общения
                date:'' // дата в формате строки
            },

            // массив тем для общения
            topicArr:[
                "Общение", "Знакомство", "Создание семьи", "Другое" 
            ],

            // массив для выбора цветов  
            colorArr:[
                '#43fa00', '#ff2600', '#f40bb6', '#1808fd', '#f28507', '#e4f500'
            ]
        }
    },

    methods:{
        /**
         * отправляет событие добавления новоно окна чата в БД
         * @param { 
         * object
            __.name: название окна чата 
            __.color: цвет чата
            __.topic: тема для общения
            __.date: дата в формате строки
         } event 
         */
        pushListBord( event ){
            let thisDate = new Date();
            event.date = `${thisDate.getDate()}-${(thisDate.getMonth()+1)<10 ?'0'+(thisDate.getMonth()+1):(thisDate.getMonth()+1)}-${thisDate.getFullYear()}`
            this.$emit( 'pushListBord', event);
        },

    }
}
</script>

<style scoped lang="scss" src="./style.scss"/>



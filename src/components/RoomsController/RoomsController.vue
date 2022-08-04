<template src="./template.html"/>

<script>
    import RoomsBord from "@/components/RoomsBord/RoomsBord";

    export default {
        name:"RoomsController",
        components:{
            RoomsBord
        },
        props: [ ],
        data(){
           return{ 
                boards:[],
           }
        },
        methods:{
            /** 
             * сохраняет объект с данными введеными в RoomsCard 
             * в массив boards 
             * @param { 
             * object
                __.name: название окна чата; 
                __.color: цвет чата;
                __.topic: тема для общения;
                __.date: дата в формате строки } event 
            */
            pushListBord( event ){
                this.boards.push( event );
            },

            /**
             * удаляет из массива данные по id 
             * @param {*namber} id номер компанента который нужно удалить
            */
            deleteElemetn( id ){
                this.boards.splice( id, 1);
            },

            /**
             * сохраняет в массив boards.messags сообщение от пользоватея
             * @param {* object
             * __.name: строка название окна чата
             * __.messag: строка сообщение пользователя 
             * } room 
            */
            newMessag( room ){
                for(let i=0; i < this.boards.length; ++i ){
                    if( this.boards[i].name === room.name ){
                        if( this.boards[i].messags ){
                            this.boards[i].messags.push( room.messag );
                            room.messag='';
                            break;
                        }
                        else{
                            this.boards[i].messags = [];
                            this.boards[i].messags.push( room.messag );
                            room.messag='';
                            break;
                        }
                    }
                }
            },

            /**
             * сохраняет данные о боте которого выбрал пользователь
             * @param {* object
             * __.nameBot: строка имя бота
             * __.imgBot: строка путь до картинки привязаной к боту
             * } bot 
            */
            choisBot( bot, id ){
                this.boards[id].nameBot = bot.nameBot;
                this.boards[id].imgBot = bot.imgBot;
            },
        },
        
    }
</script>

<style scoped lang="scss" src="./style.scss"/>

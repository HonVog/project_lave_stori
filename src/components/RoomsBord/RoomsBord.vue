<template src="./template.html"/>


<script>
import RoomsCard from "@/components/RoomsCard/RoomsCard";
import RoomsChat from "@/components/RoomsChat/RoomsChat";
import RoomsListNames from "@/components/RoomsListNames/RoomsListNames";
import RoomsBots from "@/components/RoomsBots/RoomsBots";
import RoomRolledUp from "@/components/RoomRolledUp/RoomRolledUp"

export default {
    name:"RoomsBord",
    components:{
        RoomsCard, // компанент отвечает за всплывающее окно регистрации
        RoomsChat, // компанет отвечает за всплывающее окно чата содержит компанет внутри
        RoomsListNames, // компанет отвечает за список окон чата
        RoomsBots, // компанет отвечает за всплывающий списов Ботов для общения
        RoomRolledUp, // компанет отвечает за список свернутых окон
    },
    props: [ 'boards'],
    data(){
        return{
            // флаг видимости RoomsCard
            visibleRoomsCard: false, 
            // флаг видимости спана рядом RoomsCard
            visibleRoomsCardSpan: false, 
            // флаг видимости RoomsChat
            visibleRoomsChat: false,
            // сохраняем id из  массива boards 
            idActivRoom: '',
            // сохраняет id из массива arrActivRoom
            idArrActivRoom: '',
            // массив хранит id числа массива board 
            arrActivRoom:[],
        }
    },
    methods:{
        /**
         * Отправляет в родительский компанент 
         * объект с данными введеными в RoomsCard
         * @param { 
         * object
            __.name: название окна чата; 
            __.color: цвет чата;
            __.topic: тема для общения;
            __.date: дата в формате строки } event 
         */
        pushListBord( event ){
            this.$emit('pushListBord', event);
            this.visibleRoomsCard = false;
        },

        /**
         * отправляет родителю событие на удаление элемента в массиве
         * @param {*} id номер компанента который нужно удалить
         */
        deleteElemetn( id ){
            this.$emit('deleteElemetn', id);
        },

        /**
         * проверяет отрисовку RoomListName
         */
        isVisibleListNames(){
            return (this.boards.length != 0) && this.boards[0].name;
        },
        
        /**
         * активирует компанент RoomsChat и меняет значение idActivRoom  
         * @param { * namber } id - число которое надо присвоить idActivRoom 
         */
        clickNameElement( id ){
            this.visibleRoomsChat = true;
            this.idActivRoom = id;
        },

        /**
         * отправляет в родительский компанент объект комната
         * @param {* object
         * __.name: строка название окна чата
         * __.messag: строка сообщение пользователя 
         * 
         * } room 
         */
        newMessag( room ){
            this.$emit('newMessag', room );
        },

        /**
         * закрывает окно компанента RoomsChat. 
         * Добавляет в массив arrActivRoom index в конец,
         *  если index есть в масиве пропускает опирацию
         * @param {* namber} index 
         */
        rollUp( index ){
            let flag = false;
            // массив пуст?
            if( !this.arrActivRoom[0] && 
                 this.arrActivRoom.length == 0)
            {
                 this.arrActivRoom.push( index );
                 this.visibleRoomsChat = false;
                 return;
            }

            for( let i = 0; i < this.arrActivRoom.length; i++){
                if ( this.arrActivRoom[i] === index ){
                    flag = !flag;
                }              
            }

            if( !flag ) { 
                this.arrActivRoom.push( index );
            }

            this.visibleRoomsChat = false;
        },

        /**
         * закрывает компанент RoomsChat 
         * удаляет из массива arrActivRoom элемент соотвествующий index 
         * @param {* namber} index 
         */
        scipUp( index ){
            for( let i = 0; i < this.arrActivRoom.length; ++i){
                if ( this.arrActivRoom[ i ] === index )
                   this.arrActivRoom.splice( i, 1); 
            }
            this.visibleRoomsChat = false;
        },

        /**
         * отправляет родительскому компаненту свойства объекта bot
         * @param {* object
         * __.nameBot: строка имя бота
         * __.imgBot: строка путь до картинки привязаной к боту
         * } bot 
         */
        choisBot( bot ){
             this.$emit('choisBot', bot, this.idActivRoom);
        }
    }

}
</script>

<style scoped lang="scss" src="./style.scss"/>



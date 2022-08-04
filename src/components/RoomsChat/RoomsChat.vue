<template src="./template.html"/>

<script>

import RoomsMessage from '@/components/RoomsChat/RoomsMessage/RoomsMessage'
import ChatBot from '@/script/chatBot'

    export default {
        name:"RoomsChat",
        components:{
            RoomsMessage
        },
        props: ['boardItem'],
        data(){
                return{
                    // создаем объект для прокидывания данных наверх
                    room:{
                        // имя по которому пройдет поиск и сравнение
                        name: this.boardItem.name, 
                        // сообщение написаное пользователем
                        messag:'', 
                        // время в которое написано сообщение 
                        time:'',
                    },

                    interval: '',
                    // метод getChatBotReply( messang, index) вернет строку ответа от бота
                    chatBot: new ChatBot( this.boardItem.nameBot ),
                }
        },
        computed:{
            // получаем имя чата
            nameChat(){
                return this.boardItem.name;
            },           

        },
        methods:{
            
            startSetTimeout(){ 
                clearTimeout( this.interval );
                let index = this.boardItem.messags.length;
                let item = this.boardItem.messags[ this.boardItem.messags.length ];
                this.interval = setTimeout( this.getMessagBot, 15000, [index, item]);
                console.log ( this.interval ); 
            },

            getMessagBot( item, index ){ 
                return this.chatBot.getChatBotReply( item, index );
            },

            scrollToElement() {
                const el = this.$refs.scrollToMe;

                if (el) {
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



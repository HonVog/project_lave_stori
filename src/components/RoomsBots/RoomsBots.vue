<template src="./template.html"/>

<script>
    export default {
        name:"RoomsBots",
        components:{
        },
        props: [],
        data(){
                return{
                    // массив содержит имя бота и адрес картинки
                    bots:[
                        { 
                            nameBot: 'Кира',
                            imgBot: 'https://kartinkin.net/uploads/posts/2022-02/1645799905_18-kartinkin-net-p-krasivie-kartinki-multyashnie-18.jpg' 
                        },
                        {
                            nameBot: 'Роза',
                            imgBot: 'https://krot.info/uploads/posts/2021-03/1614633921_30-p-krasivie-devushki-iz-multfilmov-art-kartin-36.jpg'
                        },
                        {
                            nameBot: 'Степа',
                            imgBot: 'https://i.pinimg.com/originals/5b/4a/6f/5b4a6f8247fed2ac6bb832065cb8e6ef.png'
                        },
                        {
                            nameBot: 'Миша',
                            imgBot: 'https://fikiwiki.com/uploads/posts/2022-02/1644923397_42-fikiwiki-com-p-prikolnie-kartinki-pro-kachkov-45.jpg'
                        },
                    ]
                }
        },
        methods:{
            /**
             * Возвращает выбраного бота
             * @param { сщжержит;
             * __.nameBot: строка имя бота
             * __.imgBot: строка адрес картинки
             * } bot 
             */
            choisBot( bot ){
               this.$emit('choisBot', bot)
            }
        },
    }
</script>

<style scoped lang="scss" src="./style.scss"/>



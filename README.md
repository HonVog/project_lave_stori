# База чтоб не косячить
![id](https://images.universe.com/3ec98038-5c4f-4c14-9f38-3975ea9027af/-/progressive/yes/-/inline/yes/)
* Пометки работа - ошибки

## Все работает читых ошибок нет.

### TODO компанет RoomsChat
1. Замедлить чат-бота для симуляции ответа, или хоть какую-то симуляцию имитировать
2. Добавить скрол в конец чата
> Попытки кода так как не работает как хочеться коментируем

``` js
        methods:{
            //надо правильно использовать додумать как
            startSetTimeout(){ 
                clearTimeout( this.interval );
                let index = this.boardItem.messags.length;
                let item = this.boardItem.messags[ this.boardItem.messags.length ];
                this.interval = setTimeout( this.getMessagBot, 15000, [index, item]); 
            },

            //получаем ответ от бота
            getMessagBot( item, index ){ 
                return this.chatBot.getChatBotReply( item, index );
            },

            /* теоритически должно прокручивать скрол в конец
            // подумать возможно добавить псевдо блок 
            <div ref='scrollToMe'> в  <div class="RoomsChat__room-messages>
            */
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
```



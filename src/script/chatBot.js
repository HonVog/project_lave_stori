export default class ChatBot {
    botName = '';
    userName ='';
    maxSize = 4;

    botReply = [
        { 
            text: "Привет я "
        },
        {
            text: "Как к тебе обращаться?"
        },
        {
            text: "Приятно познакомиться "
        },
        {
            text: "Раскажи о себе "
        },
        {
            text: "С тобой так интересно "
        }
    ];

    constructor( botName = 'Кися' ){
        this.botName = botName;
    }

    setNameUser( userName = 'Вася'){
        this.userName = userName;
    }

    getChatBotReply( messang = 'Привет мир', index = 0 ){
        switch( index ) {
            case 0:
                return `${ this.botReply[ index ].text } ${ this.botName }.`;
            case 1:     
                return `${ this.botReply[ index ].text }`;            
            case 2:
                this.setNameUser( messang );
                return `${ this.botReply[ index ].text } ${ this.userName }`;            
            case 3:
                return `${ this.botReply[ index ].text } ${ this.userName }`;            
            default:
                return `${ messang }. ${ this.botReply[ this.maxSize ].text } ${ this.userName }. Может еще что-то раскажешь?`
        }
    }

}


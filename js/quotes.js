const quotes = [
    {   
        quotes: "Life is a journey.",
        author: "Ralph Waldo Emerson",
    },
    {   
        quotes: "No pain, No gain.",
        author: "Benjamin Franklin",
    },
    {   
        quotes: "The die is cast.",
        author: "Julius Caesar",
    },
    {   
        quotes: "When thay go low, we go high.",
        author: "Michelle Obama",
    },
    {   
        quotes: "I was never less alone than when by myself.",
        author: "Edward Gibbon",
    },
    {   
        quotes: "Where there is a will there is a way.",
        author: "Angela Merkel",
    },
    {   
        quotes: "Seeing is believing.",
        author: "Thomas Fuller",
    },
    {   
        quotes: "The will of man is his happiness.",
        author: "Friedrich von schiller",
    },
    {   
        quotes: "Only I can change my life, no one can do it for me.",
        author: "Carol Burnett",
    },
    {   
        quotes: "When in doubt, choose change.",
        author: "Lily Leung",
    },   
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; // random()은 0~1 사이의 숫자를 만드니까  1~10으로 할거면 *10해야함. 그리고 기본 수는 float 형태임 
//float의 꼬리를 없애기 위한 방법. 1) Math.round(num): 반올림, Math. 2) Math.ceil(num): 무조건 올림, 3) Math.floor(num) 무조건 내림 
//floor로 하야하는 이유는 인덱스가 6까지 있는데 만약에 렌덤수가 6.6이 나와서 올림해버리면 없는 인덱스인 7로 접근하기 때문에 무조건 내림을 해주는거임. 

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;

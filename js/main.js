var quote = [
    {
        quoteText: "Be yourself everyone else is already taken.",
        quoteName: "― Oscar Wilde",
    }
    ,
    {
        quoteText: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        quoteName: "― Marilyn Monroe",
    }
    ,
    {
        quoteText: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        quoteName: "― Albert Einstein",
    }
]

function pressTOChange (){
    var clickQuote =Number.parseInt(Math.random()*quote.length);
    console.log(clickQuote);
    var text = document.getElementById("text").innerHTML= quote[clickQuote].quoteText;
    var name = document.getElementById("name").innerHTML= quote[clickQuote].quoteName;
}
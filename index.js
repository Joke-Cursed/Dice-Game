// const data= Math.ceil(Math.random()* 6);
// const Player1dice =` IMAGES/dice-${data}.png`;
// console.log(Player1dice);
// const Player2dice =` IMAGES/dice-${data}.png`;

// document.getElementById("button").addEventListener('click', function() {
//     document.getElementById("dice1").setAttribute('src',Player1dice )
// });

generateNumber=()=>
{
    const data1= Math.ceil(Math.random()* 6);
    const Player1dice =` IMAGES/dice-${data1}.png`;
   
    document.getElementById("dice1").setAttribute('src',Player1dice );

    const data2= Math.ceil(Math.random()* 6);
    const Player2dice =` IMAGES/dice-${data2}.png`;
   
    document.getElementById("dice2").setAttribute('src',Player2dice );
    if(data1<data2)
    {
        document.querySelector('h1').innerText="Player2 Won :D";
    }
    else if(data1>data2)
    {
        document.querySelector('h1').innerText="Player1 Won :D"
    }
    else
    {
        document.querySelector('h1').innerText="It's a Draw :|"
    }
}

# Övning: Poängräknare

Vi besöker en gammal övning (se resultatlistan från js grund) och utvecklar om denna med React.
Du skall ta fram ett verktyg där det går att samla poäng för spelare till ett spel. 
Verktyget skall hantera fler spelare, och varje spelare skall ha möjlighet att lägga till och ta bort poäng.

Du skall göra detta “the React way” och all state skall hanteras i app.js, medans varje spelare skall hanteras genom en gemensam komponent. Dvs samma komponent, men renderar per spelare.

Spelarna kan vara hårdkodade via app.js.

Bonus:

Kan du rendera om ordningen på spelare när någon spelare får mer poäng än någon annan. Så att alltid den spelare med mest poäng hamnar överst.

Kan du skapa ett formulär via vilket du kan lägga till nya spelare.

===

# Kom ihåg

- lägga till nya spelare (har fångat inputfältet i statet för PlayerInfo -> newPlayer. Vill att newPlayer ska hamna inne i players-arrayen)
1) Sätter nytt state: 
        const newState = {...this.state.players}
2) Dynamiskt skapa löpnummer från siffran 4 och uppåt:
    let pKey = Object.keys(this.state.players).length+1
3) Lägga till ny spelare med dynamiskt löpnummer till players-arrayen:
    newState[pKey] = {pName: myName, score: parseInt(myScore)} 

4) Sätta nytt state för players (så att varje ny spelare printas ut, och inte skriver över varandra):
    this.setState ({
                players: newState
            })

- fånga klick + och - -> ändra score
svar: onClick + addScore() removeScore()

- inte skriva över ny användare
svar: multidimensionell array

- felmeddelande: A component is changing an uncontrolled input to be controlled...
svar: fylla i "" till state = { }

- https://github.com/loveefraimsson/poangraknare
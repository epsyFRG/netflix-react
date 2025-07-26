<p align="center">
  <img src="https://camo.githubusercontent.com/bc746f7e4446ae41f173933d4f43c02f8febab7cdffc05a64d2aae37c63061d5/68747470733a2f2f666f6e74732e677374617469632e636f6d2f732f652f6e6f746f656d6f6a692f6c61746573742f31663661382f3531322e676966" width="100px" />
</p>

---

## ⚠️ Disclaimer

**THIS PAGE WAS MADE AS A PERSONAL EDUCATIONAL PROJECT.**  
This is **NOT** the official site of the company or brand identified on the page.  
The creator of this page is **NOT affiliated** with the company or brand in any way.  
This page is a personal project made in connection with an educational exercise.

---

## 📦 Consegna


Netflix in React
Oggi la tua sfida riguarderà il refactoring della homepage del tuo progetto Netflix in JavaScript (U2-W2-D5). Dovrà diventare un'applicazione React con fetch dei dati da "The Open Movie Database".
Passaggi suggeriti:
Crea una nuova react-app con Vite, e a partire dal progetto Netflix fornito comincia a trasportare l'interfaccia della home page tramite componenti React (navbar, footer, etc.)
Crea, usando componenti, diverse "gallerie" per i film (almeno 3 gallerie con 3 film saga che ti piacciono, esempio: Harry Potter, Lord of the Rings ecc.)
Queste gallerie dovranno fare il fetch dei dati da Omdb APIs al caricamento del componente
[EXTRA] Aggiungi dei loader e gestione errori nella pagina principale
[EXTRA] una volta finito il resto, fai il refactor anche delle altre pagine: account, settings.
📄 API Docs:
Registrati su http://www.omdbapi.com/
Una volta registrato, riceverai un'email con la API Key.
L'endpoint su cui effettuare la ricerca dovrebbe somigliare a questo:
http://www.omdbapi.com/?apikey=metti-qui-la-api-key&s=Star Wars
Ogni ricerca ritornerà un'oggetto simile a questo:
{
  "Search": [
    {
      "Title": "Harry Potter and the Deathly Hallows: Part 2",
      "Year": "2011",
      "imdbID": "tt1201607",
      "Type": "movie",
      "Poster": "https://bit.ly/3sufYok"
    },
    {
      "Title": "Harry Potter and the Sorcerer's Stone",
      "Year": "2001",
      "imdbID": "tt0241527",
      "Type": "movie",
      "Poster": "https://bit.ly/3tTtx0H"
    },
    {
      "Title": "Harry Potter and the Chamber of Secrets",
      "Year": "2002",
      "imdbID": "tt0295297",
      "Type": "movie",
      "Poster": "https://bit.ly/31gVxzb"
    },
    {
      "Title": "Harry Potter and the Prisoner of Azkaban",
      "Year": "2004",
      "imdbID": "tt0304141",
      "Type": "movie",
      "Poster": "https://bit.ly/2QzHt1n"
    },
  ],
  "totalResults": "80",
  "Response": "True"
}

---

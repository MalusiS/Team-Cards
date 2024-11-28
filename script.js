const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
const myFavoriteFootballTeam = {
  team: "Bafana Bafana",
  sport: "Football",
  year: 1996,
  isWorldCupWinner: false,
  headCoach: {
    coachName: "Clive Barker",
    matches: 43,
  },
  players: [
    {
      name: "André Arendse",
      position: "goalkeeper",
      number: 1,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Sizwe Motaung",
      position: "defender",
      number: 2,
      isCaptain: false,
      nickname: "SOS",
    },
     {
      name: "David Nyathi",
      position: "defender",
      number: 3,
      isCaptain: false,
      nickname: "Going Up",
    },
    {
      name: "Lucas Radebe",
      position: "defender",
      number: 4,
      isCaptain: false,
      nickname: "Rhoo",
    },
    {
      name: "Mark Fish",
      position: "defender",
      number: 5,
      isCaptain: false,
      nickname: "Feesh",
    },
    {
      name: "Philemon Masinga",
      position: "forward",
      number: 6,
      isCaptain: false,
      nickname: "Chippa",
    },
    {
      name: "Daniel Mudau",
      position: "forward",
      number: 7,
      isCaptain: false,
      nickname: "Mambush",
    },
    {
      name: "Linda Buthelezi",
      position: "midfielder",
      number: 8,
      isCaptain: false,
      nickname: "Mercedes Benz",
    },
    {
      name: "Neil Tovey",
      position: "defender",
      number: 9,
      isCaptain: true,
      nickname: "Mokoko",
    },
    {
      name: "John Moshoeu",
      position: "midfielder",
      number: 10,
      isCaptain: false,
      nickname: "Shoes",
    },
    {
      name: "Mark Williams",
      position: "forward",
      number: 11,
      isCaptain: false,
      nickname: "Nation Builder",
    },
    {
      name: "Zane Moosa",
      position: "midfielder",
      number: 12,
      isCaptain: false,
      nickname: "Magic Feet",
    },
    {
      name: "Quinton Fortune",
      position: "midfielder",
      number: 13,
      isCaptain: false,
      nickname: "Mr Versatile",
    },
    {
      name: "Joel Masilela",
      position: "midfielder",
      number: 14,
      isCaptain: false,
      nickname: "Fire",
    },
    {
      name: "Doctor Khumalo",
      position: "midfielder",
      number: 15,
      isCaptain: false,
      nickname: "16V",
    },
    {
      name: "Roger De Sa",
      position: "goalkeeper",
      number: 16,
      isCaptain: false,
      nickname: "Dlisa",
    },
    {
      name: "Shaun Bartlett",
      position: "forward",
      number: 17,
      isCaptain: false,
      nickname: "The Deft Striker",
    },
    {
      name: "John Moeti",
      position: "midfielder",
      number: 18,
      isCaptain: false,
      nickname: "Dungi",
    },
    {
      name: "Helman Mkhalele",
      position: "midfielder",
      number: 19,
      isCaptain: false,
      nickname: "Midnight Express",
    },
    {
      name: "Augustine Makalakalane",
      position: "midfielder",
      number: 20,
      isCaptain: false,
      nickname: "Mthakathi",
    },
    {
      name: "Eric Tinkler",
      position: "midfielder",
      number: 21,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Jacob Tshisevhe",
      position: "defender",
      number: 22,
      isCaptain: false,
      nickname: "Asinamali",
    },
  ],
};

Object.freeze(myFavoriteFootballTeam);
const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr
    .map(
      ({ name, position, number, isCaptain, nickname }) => {
        return `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
      ` }
    )
    .join("");
};

playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;
    case "forward":
      setPlayerCards(players.filter((player) => player.position === "forward"));
      break;
    case "midfielder":
      setPlayerCards(
        players.filter((player) => player.position === "midfielder")
      );
      break;
    case "defender":
      setPlayerCards(
        players.filter((player) => player.position === "defender")
      );
      break;
    case "goalkeeper":
      setPlayerCards(
        players.filter((player) => player.position === "goalkeeper")
      );
      break;

    default:
      setPlayerCards();
  }
});
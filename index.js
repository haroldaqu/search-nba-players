const cardTemplate = document.querySelector('.card-template');
const playerCards = document.querySelector('.player-cards');
const searcInput = document.querySelector('.search-input');
const modalContainer = document.querySelector('.modal-container');
const closeBtn = document.querySelector('.close-button');
const profileImg = document.querySelector('.profile-img');
const profileName = document.querySelector('.profile-name');
const profileHeight = document.querySelector('.height');
const profileWeight = document.querySelector('.weight');
const profilePosition = document.querySelector('.position');
const draftPosition = document.querySelector('.draft-position');
const draftYear = document.querySelector('.draft-year');
const profileSchool = document.querySelector('.school');
const profileCountry = document.querySelector('.country');
const playerProfile = document.querySelector('.player-profile')
const statsTable = document.querySelector('.stats-table')

let playerArray = [];

// 1. Get Data
const getData = (async () => {
    const fetchPlayers =  await fetch(`https://data.nba.net/data/10s/prod/v1/2021/players.json`, {mode: 'cors'});

    const responsePlayers =  await fetchPlayers.json();
    const players = responsePlayers.league.standard;
    // console.log(players[0])
    return displayData(players);
})();

// 2. display data
const displayData = (players) => {
    const slicePlayers = players.slice(0, 10);
    playerArray = slicePlayers.map(player => {
        const card = cardTemplate.content.cloneNode(true).children[0];
        const playerImg = card.querySelector('.player-img');
        const playerName =  card.querySelector('.player-name');
        const playerID = card.querySelector('.id')
        const viewStatsBtn =  card.querySelector('.view-button');

        playerImg.src = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.personId}.png`;
        playerName.innerText = `${player.firstName} ${player.lastName} `;
        playerID.innerText = player.personId;
        playerCards.append(card);
        viewStatsBtn.addEventListener('click', (e, player) => grabStatAndProfile(e, player));

        return { name: `${player.firstName} ${player.lastName}`, element: card};
    })   
};

// 3. Search Players
const searchPlayers = (e) => {
    const value = e.target.value.toLowerCase();
    playerArray.forEach(player => {
        if (value === '') {
            player.element.classList.add('hide');
        }
        else {
            const isVisible = player.name.toLowerCase().includes(value);
            player.element.classList.toggle('hide', !isVisible);
        }
    })
};

searcInput.addEventListener('input', searchPlayers);

// 4. make each player clickable to open up profile and stats
const grabStatAndProfile = (e, player) =>  {
    const playerID = e.target.parentElement.children[0].innerText
    
    closeBtn.addEventListener('click', () => {
        modalContainer.classList.add('hide')
        statsTable.innerHTML = ''

    });
    modalContainer.classList.toggle('hide');

    getPlayerProfile(playerID)
    getPlayerStats(playerID)
}

// 5. fetch player profile with player ID
const getPlayerProfile = async (id) => {
    const fetchProfileByID = await fetch (`https://data.nba.net/data/10s/prod/v1/2021/players.json`, {mode: 'cors'})

    const responseProfileByID = await fetchProfileByID.json()
    const players = responseProfileByID.league.standard;

    const filterProfileByID = players.filter(player => player.personId === id)
    
    populateProfile(filterProfileByID[0], id)
}

// 6. fetch player stats with player ID
const getPlayerStats = async (id) => {
    const fetchStatsByID = await fetch (`https://data.nba.net/data/10s/prod/v1/2021/players/${id}_profile.json`, { mode: 'cors' })

    const responseStatsByID = await fetchStatsByID.json()
    const playerStats = responseStatsByID.league.standard.stats.regularSeason.season

    populateStats(playerStats)
}


// 7. populate profile in modal
const populateProfile = (profile, id) => {
    profileImg.src = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png`
    profileName.innerText = `${profile.firstName} ${profile.lastName} `
    profileHeight.innerText = `${profile.heightFeet}'${profile.heightInches}`
    profileWeight.innerText = `${profile.weightPounds} Lbs`
    profilePosition.innerText = profile.pos
    draftPosition.innerText = profile.draft.pickNum
    draftYear.innerText = profile.draft.seasonYear
    profileSchool.innerText = profile.collegeName
    profileCountry.innerText = profile.country
}

// 8. populate stats in modal
const populateStats = (stats) => {
    const mapStats = stats.map(stat => {
        return {
            season: stat.seasonYear,
            ppg: stat.total.ppg,
            apg: stat.total.apg,
            rpg: stat.total.rpg,
            bpg: stat.total.bpg,
            spg: stat.total.spg,
            ftp: stat.total.ftp,
            fgp: stat.total.fgp,
            tpp: stat.total.ttp,
            topg: stat.total.topg,
            mpg: stat.total.mpg
        }
    })
    console.log(mapStats)
    const statHeaders = ['Season', 'PPG', 'APG', 'RPG', 'BPG', 'SPG', 'FT%', 'FG%', '3%', 'TOPG', 'MPG']

    let headers = document.createElement('tr')

    statHeaders.forEach(header => {
        let td = document.createElement('th')
        let tdText = document.createTextNode(header)
        td.append(tdText)
        headers.append(td)
    })

    statsTable.append(headers)

    mapStats.forEach(stat => {
        let tr = document.createElement('tr')

        Object.values(stat).forEach(value => {
            let td = document.createElement('td')
            let tdText = document.createTextNode(value)

            td.append(tdText)
            tr.append(td)
        })

        statsTable.append(tr)
    })
    
}














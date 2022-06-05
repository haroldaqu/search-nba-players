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
const profileContent = document.querySelector('.profile-content')

const statsTable = document.querySelector('.stats-table')

let playerArray = [];

const teamNames = {
    1610612737: 'Atlanta Hawks',
    1610612738: 'Boston Celtics',
    1610612751: 'Brooklyn Nets',
    1610612766: 'Charlotte Hornets',
    1610612741: 'Chicago Bulls',
    1610612739: 'Cleveland Cavaliers',
    1610612742: 'Dallas Mavericks',
    1610612743: 'Denver Nuggets',
    1610612765: 'Detroit Pistons',
    1610612744: 'Golden State Warriors',
    1610612745: 'Houston Rockets',
    1610612754: 'Indiana Pacers',
    1610612746: 'Los Angeles Clippers',
    1610612747: 'Los Angeles Lakers',
    1610612763: 'Memphis Grizzlies',
    1610612748: 'Miami Heat',
    1610612749: 'Milwaukee Bucks',
    1610612750: 'Minnesota Timberwolves',
    1610612740: 'New Orleans Pelicans',
    1610612752: 'New York Knicks',
    1610612760: 'Oklahoma City Thunder',
    1610612753: 'Orlando Magic',
    1610612755: 'Philadelphia 76ers',
    1610612756: 'Phoenix Suns',
    1610612757: 'Portland Trail Blazers',
    1610612758: 'Sacramento Kings',
    1610612759: 'San Antonio Spurs',
    1610612761: 'Toronto Raptors',
    1610612762: 'Utah Jazz',
    1610612764: 'Washington Wizards',

}

const allTeamsObj = {
    1610612737: { 
        fullName: 'Atlanta Hawks',
        primaryColors: '#E03A3E',
        secondaryColors: '#26282A'
    },
    1610612738: { 
        fullName: 'Boston Celtics',
        primaryColors: '#007A33',
        secondaryColors: '#BA9653'
    },
    1610612751: { 
        fullName: 'Brooklyn Nets',
        primaryColors: '#000000',
        secondaryColors: '#FFFFFF'
    },
    1610612766: { 
        fullName: 'Charlotte Hornets',
        primaryColors: '#1D1160',
        secondaryColors: '#00788C' 
    },
    1610612741: { 
        fullName: 'Chicago Bulls',
        primaryColors: '#CE1141',
        secondaryColors: '#000000' 
    },
    1610612739: { 
        fullName: 'Cleveland Cavaliers',
        primaryColors: '#860038',
        secondaryColors: '#041E42' 
    },
    1610612742: { 
        fullName: 'Dallas Mavericks',
        primaryColors: '#00538C',
        secondaryColors: '#002B5E'
    },
    1610612743: { 
        fullName: 'Denver Nuggets',
        primaryColors: '#0E2240',
        secondaryColors: '#FEC524'
    },
    1610612765: { 
        fullName: 'Detroit Pistons',
        primaryColors: '#C8102E',
        secondaryColors: '#1D42BA'
    },
    1610612744: { 
        fullName: 'Golden State Warriors',
        primaryColors: '#1D428A',
        secondaryColors: '#FFC72C'
    },
    1610612745: { 
        fullName: 'Houston Rockets',
        primaryColors: '#CE1141',
        secondaryColors: '#C4CED4'
    },
    1610612754: { 
        fullName: 'Indiana Pacers',
        primaryColors: '#002D62',
        secondaryColors: '#FDBB30'
    },
    1610612746: { 
        fullName: 'Los Angeles Clippers',
        primaryColors: '#C8102E',
        secondaryColors: '#1D428A',
    },
    1610612747: { 
        fullName: 'Los Angeles Lakers',
        primaryColors: '#552583',
        secondaryColors: '#FDB927'
    },
    1610612763: { 
        fullName: 'Memphis Grizzlies',
        primaryColors: '#5D76A9',
        secondaryColors: '#12173F'
    },
    1610612748: { 
        fullName: 'Miami Heat',
        primaryColors: '#98002E',
        secondaryColors: '#000000'
    },
    1610612749: { 
        fullName: 'Milwaukee Bucks',
        primaryColors: '#00471B',
        secondaryColors: '#EEE1C6' 
    },
    1610612750: { 
        fullName : 'Minnesota Timberwolves',
        primaryColors: '#0C2340',
        secondaryColors: '#78BE20'
    },
    1610612740: { 
        fullName: 'New Orleans Pelicans',
        primaryColors: '#0C2340',
        secondaryColors: '#85714D'
    },
    1610612752: { 
        fullName: 'New York Knicks',
        primaryColors: '#006BB6',
        secondaryColors: '#F58426' 
    },
    1610612760: { 
        fullName: 'Oklahoma City Thunder',
        primaryColors: '#007AC1',
        secondaryColors: '#EF3B24'
    },
    1610612753: { 
        fullName: 'Orlando Magicnta Hawks',
        primaryColors: '#0077C0',
        secondaryColors: '#C4CED4'
    },
    1610612755: { 
        fullName: 'Philadelphia 76ers',
        primaryColors: '#006BB6',
        secondaryColors: '#ED174C'
    },
    1610612756: { 
        fullName: 'Phoenix Suns',
        primaryColors: '#1D1160',
        secondaryColors: '#E56020'
    },
    1610612757: { 
        fullName: 'Portland Trail Blazers',
        primaryColors: '#E03A3E',
        secondaryColors: '#000000'
    },
    1610612758: { 
        fullName: 'Sacramento Kings',
        primaryColors: '#5A2D81',
        secondaryColors: '#63727A'
    },
    1610612759: { 
        fullName: 'San Antonio Spurs',
        primaryColors: '#C4CED4',
        secondaryColors: '#000000'
    },
    1610612761: { 
        fullName: 'Toronto Raptors',
        primaryColors: '#CE1141',
        secondaryColors: '#000000'
    },
    1610612762: { 
        fullName: 'Utah Jazz',
        primaryColors: '#002B5C',
        secondaryColors: '#00471B' 
    },
    1610612764: { 
        fullName: 'Washington Wizards',
        primaryColors: '#002B5C',
        secondaryColors: '#E31837'
    }
}
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
    playerArray = players.map(player => {
        const card = cardTemplate.content.cloneNode(true).children[0];
        const playerImg = card.querySelector('.player-img');
        const playerName =  card.querySelector('.player-name');
        const playerID = card.querySelector('.id')
        const playerPositionTeam =  card.querySelector('.position-team')
        const viewStatsBtn =  card.querySelector('.view-button');

        playerImg.src = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.personId}.png`;
        playerName.innerText = `${player.firstName} ${player.lastName} `;
        playerID.innerText = player.personId;
        playerPositionTeam.innerText = `${player.pos} | ${teamNames[player.teamId]}`
        playerCards.append(card);
        viewStatsBtn.addEventListener('click', (e, player) => grabStatAndProfile(e, player));

        return { name: `${player.firstName} ${player.lastName}`, teamName: `${teamNames[player.teamId]}`, element: card};
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
            const isVisible = player.name.toLowerCase().includes(value) || player.teamName.toLowerCase().includes(value);
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
    console.log(responseStatsByID)

    populateStats(playerStats)
}


// 7. populate profile in modal
const populateProfile = (profile, id) => {
    profileImg.src = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png`
    profileName.innerText = `${profile.firstName} ${profile.lastName} `
    profileHeight.innerText = `${profile.heightFeet}'${profile.heightInches}`
    profileWeight.innerText = `${profile.weightPounds} Lbs`
    profilePosition.innerText = `Position: ${profile.pos}`
    draftPosition.innerText = profile.draft.pickNum
    draftYear.innerText = profile.draft.seasonYear
    profileSchool.innerText = profile.collegeName
    profileCountry.innerText = profile.country

    playerProfile.style.borderTopColor = allTeamsObj[profile.teamId].primaryColors
    playerProfile.style.borderBottomColor = allTeamsObj[profile.teamId].primaryColors
    playerProfile.style.borderRightColor = allTeamsObj[profile.teamId].secondaryColors
    playerProfile.style.borderLeftColor = allTeamsObj[profile.teamId].secondaryColors
    playerProfile.style.backgroundImage = `url(https://cdn.nba.com/logos/nba/${profile.teamId}/primary/L/logo.svg)`
    playerProfile.style.backgroundRepeat = 'no-repeat'
    playerProfile.style.backgroundPosition = 'center'
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
            tpp: stat.total.tpp,
            topg: stat.total.topg,
            mpg: stat.total.mpg
        }
    })
    const statHeaders = ['Season', 'PPG', 'APG', 'RPG', 'BPG', 'SPG', 'FT%', 'FG%', '3%', 'TOPG', 'MPG']

    let headers = document.createElement('tr')
    headers.classList.add('.header')

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

// .9 add event listeners to filters














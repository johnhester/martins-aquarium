const fishCollection = [
    {
        name: 'Angus',
        food: 'Popcorn',
        species: 'Parrot Fish',
        location : 'Sea of Google',
        length: 8,
        image: 'https://i.ytimg.com/vi/y6tdGVTgmm4/maxresdefault.jpg'
    },
    {
        name: 'Manny',
        food: 'Mike\'n Ikes',
        species: 'Lionfish',
        location : 'Cayman Islands',
        length: 5,
        image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F27ml3ckbz243349t7nkxkpyo-wpengine.netdna-ssl.com%2Fwp-content%2Fuploads%2F2017%2F02%2FDollarphotoclub_72071085.jpg&f=1&nofb=1'
    },
    {
        name: 'Captain Nemo',
        food: 'Steak Tar Tar',
        species: 'Clownfish',
        location : 'Some Anenome',
        length: 1,
        image: 'http://www.smashinglists.com/wp-content/uploads/2010/02/Oceans-Clownfish.jpg'
    },
    {
        name: 'Calvin',
        food: 'Kelp Shakes',
        species: 'Cowfish',
        location : 'Blue',
        length: 3,
        image: 'https://gerolilleike.files.wordpress.com/2013/07/aviary-photo_130173361553213295.png'
    },
    {
        name: 'Frankie',
        food: 'Dirt',
        species: 'Flounder',
        location : 'Probably Below You',
        length: 12,
        image: 'http://news.nationalgeographic.com/content/dam/news/2016/08/12/WAQflounders/01WAQflounders.ngsversion.1470952297404.jpg'
    }, 
    {
        name: 'Jean Baptiste',
        food: 'Grey Poupon',
        species: 'Emporer Angelfish',
        location : 'Exclusive Fish Nightclubs',
        length: 9,
        image: 'http://www.caribbean-charter-flights.com/wp-content/uploads/2221.jpg'
    },
    {
        name: 'David',
        food: 'Dijon Mustard',
        species: 'Blue Tang',
        location : 'Hanging out with Jean Baptiste',
        length: 8,
        image: 'http://www.caribbean-charter-flights.com/wp-content/uploads/444.jpg'
    },
    {
        name: 'Bronson',
        food: 'Stress',
        species: 'Doctorfish',
        location : 'His Malpractice Lawyer\'s Office',
        length: 5,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F6%2F63%2FDoctorfish%252C_Acanthurus_chirurgus.jpg&f=1&nofb=1'
    },
    {
        name: 'Clarence',
        food: 'The Hearts of His Enemies',
        species: 'Barracude',
        location : 'The Water',
        length: 10,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F81%2FGreat_Barracuda_off_the_Netherland_Antilles.jpg&f=1&nofb=1'
    }
]
//categorizes fish via multiples of 3, 5 

const mostHolyFish = () => {
    const holyFish = []

    for (let i = 0; i < fishCollection.length; i++) {
        if (fishCollection[i].length % 3 === 0) {
            holyFish.push(fishCollection[i])
        }
    }

    return holyFish
}

// 5, 10, 15, 20, 25, etc... fish
const soldierFish = () => {
    const soldiers = []

    for (let i = 0; i < fishCollection.length; i++) {
        if (fishCollection[i].length % 5 === 0) {
            soldiers.push(fishCollection[i])
        }
    }

    return soldiers
}

// Any fish not a multiple of 3 or 5
const nonHolyFish = () => {
    const regularFish = []

    for (const commonFish of fishCollection) {
        if (commonFish.length % 3 !== 0 && commonFish.length % 5 !== 0) {
            regularFish.push(commonFish)
        }
    }

    return regularFish
}
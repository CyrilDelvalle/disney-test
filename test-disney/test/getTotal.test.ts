import getTotal from "../utils/getTotal";

const mockedHostelList = [
    {
        "id": 1,
        "name": "Hotel Simba",
        "description": "L'hotel préféré des lions de la savane.",
        "image": "/leRoiLion.png",
        "imageAlt": "simba",
        "price": 300
    },
    {
        "id": 2,
        "name": "Hotel Aladdin",
        "description": "Un hotel de génie.",
        "image": "/aladdin.png",
        "imageAlt": "aladin",
        "price": 100
    },
    {
        "id": 3,
        "name": "Hotel Ariel",
        "description": "L'atlantide en mieux.",
        "image": "/laPetiteSirene.png",
        "imageAlt": "ariel",
        "price": 100
    },
];

const mockedShowList = [
    {
        "id": 1,
        "title": "Concert à Billy Bob's",
        "description": "Retrouvez chaque soir des concerts live pop-rock, blues, country, salsa…",
        "schedule" : "14:00 16:00",
        "image": "/billyBobShow.png",
        "imageAlt": "billybob",
        "price": 15
    },
    {
        "id": 2,
        "title": "Le Roi Lion et les Rythmes de la Terre",
        "description": "Revivez l’enchantement musical de ce Classique d'animation Disney.",
        "schedule" : "22:00 23:30",
        "image": "/roiLionShow.png",
        "imageAlt": "lionKing",
        "price": 40
    },
    {
        "id": 3,
        "title": "Disney Illuminations",
        "description": "Le spectacle nocturne Disney Illuminations.",
        "schedule" : "00:00 00:30",
        "image" : "/fireWorkShow.png",
        "imageAlt": "firework",
        "price": 0
    },
]

describe('getTotal', () => {
    test('result should be sum of hostels and shows if one day is selected', () => {
        const startDate = new Date(2022, 1, 1);
        const endDate = new Date(2022, 1, 2);
        const total = getTotal(mockedHostelList, mockedShowList, startDate, endDate )

        expect(total).toBe(555);
    });

    test('result should be sum of hostels and shows multiplicated by 2, if 2 days are selected', () => {
        const startDate = new Date(2022, 1, 1);
        const endDate = new Date(2022, 1, 3);
        const total = getTotal(mockedHostelList, mockedShowList, startDate, endDate )

        expect(total).toBe(1110);
    });
    
    test('result should be sum of hostels and shows multiplicated by X, X = number of selected days', () => {
        const startDate = new Date(2022, 1, 1);
        const endDate = new Date(2022, 1, 8);
        const total = getTotal(mockedHostelList, mockedShowList, startDate, endDate )

        expect(total).toBe(555 * 7);
    });
  });

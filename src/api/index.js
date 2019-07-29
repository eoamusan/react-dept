import { v4 } from 'node-uuid'

const fakeDatabase = {
    cards: [
        {
            id: v4(),
            website: 'bol.com',
            title: 'A summer island in the Netherlands',
            image: 'cases/12.png'
        },
        {
            website: 'Kempen',
            title: 'Not some average banking website',
            image: 'cases/2.png'
        },
        {
            id: v4(),
            website: 'Philips',
            title: 'Beautiful design meets innovative technology',
            image: 'cases/3.png'
        },
        {
            id: v4(),
            website: 'Gemeentemuseum',
            title: 'A 100 years of Mondriaan & De Stijl',
            image: 'cases/4.png'
        },
        {
            id: v4(),
            website: 'Florensis',
            title: 'Rethinking the entire online ecosystem',
            image: 'cases/5.png'
        },
        {
            id: v4(),
            website: 'TUI',
            title: 'Swipe to find your next holiday destination',
            image: 'cases/6.png'
        },
        {
            id: v4(),
            website: 'Chocomel',
            title: 'A campaign for the limited edition letter packs',
            image: 'cases/1.png'
        },
        {
            id: v4(),
            website: 'JBL',
            title: 'Live like a champion with Jerome Booteng',
            image: 'cases/7.png'
        },
        {
            id: v4(),
            website: 'zalando',
            title: 'Innovative SEO and content strategy for Zalando',
            image: 'cases/8.png'
        },
        {
            id: v4(),
            website: 'Koninklijke Bibliotheek',
            title: 'The search for the most influential book ever',
            image: 'cases/9.png'
        },
        {
            id: v4(),
            website: 'Koninklijke Bibliotheek',
            title: 'The search for the most influential book ever',
            image: 'cases/10.png'
        },
        {
            id: v4(),
            website: 'Koninklijke Bibliotheek',
            title: 'The search for the most influential book ever',
            image: 'cases/11.png'
        }
    ]
}

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const fetchCards = (filter) =>
    delay(2000).then(() => {
        switch (filter) {
            case 'all':
                return fakeDatabase.cards;
            case 'active':
                return fakeDatabase.cards.filter(t => !t.completed);
            case 'completed':
                return fakeDatabase.cards.filter(t => t.completed);
            default:
                throw new Error(`Unknown filter: ${filter}`);
        }
    })
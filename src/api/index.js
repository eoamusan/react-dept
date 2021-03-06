import { v4 } from 'node-uuid'

const fakeDatabase = {
    cards: [
        {
            id: v4(),
            website: 'bol.com',
            title: 'A summer island in the Netherlands',
            image: 'cases/12.png',
            work: 'play',
            industry: 'technology'
        },
        {
            website: 'Kempen',
            title: 'Not some average banking website',
            image: 'cases/2.png',
            work: 'play',
            industry: 'technology'
        },
        {
            id: v4(),
            website: 'Philips',
            title: 'Beautiful design meets innovative technology',
            image: 'cases/3.png',
            work: 'networking',
            industry: 'logistics'
        },
        {
            id: v4(),
            website: 'Gemeentemuseum',
            title: 'A 100 years of Mondriaan & De Stijl',
            image: 'cases/4.png',
            work: 'networking',
            industry: 'logistics'
        },
        {
            id: v4(),
            website: 'Florensis',
            title: 'Rethinking the entire online ecosystem',
            image: 'cases/5.png',
            work: 'play',
            industry: 'technology'
        },
        {
            id: v4(),
            website: 'TUI',
            title: 'Swipe to find your next holiday destination',
            image: 'cases/6.png',
            work: 'networking',
            industry: 'logistics'
        },
        {
            id: v4(),
            website: 'Chocomel',
            title: 'A campaign for the limited edition letter packs',
            image: 'cases/1.png',
            work: 'play',
            industry: 'technology'
        },
        {
            id: v4(),
            website: 'JBL',
            title: 'Live like a champion with Jerome Booteng',
            image: 'cases/7.png',
            work: 'play',
            industry: 'technology'
        },
        {
            id: v4(),
            website: 'zalando',
            title: 'Innovative SEO and content strategy for Zalando',
            image: 'cases/8.png',
            work: 'networking',
            industry: 'logistics'
        },
        {
            id: v4(),
            website: 'Koninklijke Bibliotheek',
            title: 'The search for the most influential book ever',
            image: 'cases/9.png',
            work: 'networking',
            industry: 'logistics'
        },
        {
            id: v4(),
            website: 'Koninklijke Bibliotheek',
            title: 'The search for the most influential book ever',
            image: 'cases/10.png',
            work: 'play',
            industry: 'technology'
        },
        {
            id: v4(),
            website: 'Koninklijke Bibliotheek',
            title: 'The search for the most influential book ever',
            image: 'cases/11.png',
            work: 'networking',
            industry: 'logistics'
        }
    ]
}

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const fetchCards = (work, industry) =>
    delay(2000).then(() => {
        if (work === 'all') {
            return fakeDatabase.cards;
        } else {
            return fakeDatabase.cards.filter(t => t.work.includes(work) && t.industry.includes(industry));
        }
    })
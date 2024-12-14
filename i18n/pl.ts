import type { Messages } from "./config";

export default {
    underConstruction: "W trakcie budowy 🚧",
    pages: {
        home: {
            title: "JAKUB - KIJU - KIJEK",
            heading: "Pasja programowania",
            desciption: `
                Odkąd pamiętam zawsze fascynował mnie świat wokół, to jak i dlaczego działał.
                Tworzenie zawsze było moją pasją, dlaczego zacząłem programować, znalazłem sposób jak zbudować coś z niczego.
                Teraz przelewam moją całą moją pasję w nawet najmniejsze z projektów. 
            `
                .replaceAll("\n", " ")
                .trim(),
            moreAboutMe: "Więcej o mnie",
        },
    },
    links: {
        home: "Strona Główna",
        blog: "Blog",
        portfolio: "Portfolio",
        projects: "Projekty",
        aboutMe: "O mnie",
    },
} as Messages;

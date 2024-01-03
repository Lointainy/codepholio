export type NavigationType = Record<string, string>;

export type ButtonsType = Record<string, string>;

export type ProjectItemType = {
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
    links: { title: string, icon: string, url: string }[],
}

export type ExperienceItemType = {
    title: string;
    name: string;
    location: string;
    locationType: string;
    employmentType: string;
    description: string;
    skills: string[];
    icon: string;
    date: string;
}

export type PageSectionsType = {
    hero: {
        title: string;
        buttons: ButtonsType;
    };
    about: {
        title: string;
        description: string;
    };
    projects: {
        title: string;
        list: ProjectItemType[];
        buttons: ButtonsType;
    };
    skills: {
        title: string;
    };
    experience: {
        title: string;
        list: ExperienceItemType[];
    };
    contact: {
        title: string;
        subtitle: string;
        placeholder: {
            email: string;
            message: string;
        };
        buttons: ButtonsType;
    };
}

export type FooterType = {
    copy: string;
    build: string;
}

export interface IData {
    navigation: NavigationType;
    page: PageSectionsType;
    footer: FooterType;
}



export interface Dissolution {
    description: string;
    linkOfficialNotice: string;
    linkFrequentQuestions: string;
}

export interface Bank {
    name: string;
    type: string;
    image: string;
    totalAssets: string;
    totalMarket: string;
    emloyeeAmount: string;
    infoDissolution: Dissolution;
    status: string;
    linkDetail: string;
}

export enum BankStatus {
    Operating = 'Operando',
    Dissolution = 'En disolución'
}

export interface ExternalLinks {
    name: string;
    link: string;
    image: string;
}

export interface SocialNetwork extends ExternalLinks {
    
}

export interface MobilesAppStore extends ExternalLinks {

}

export interface BankDetail {
    branchOffices: string;
    atMs: string;
    subagents: string;
    shareholders: string;
    registryNumber: string;
    businessName: string;
    rnc: string;
    authorizedOffer: string;
    mainOffice: string;
    phone: string;
    email: string;
    webPage: string;
    socialNetworks: SocialNetwork[];
    mobilesAppStore: MobilesAppStore[];
}

export type Deck = {
    _id?: string,
    name: string,
    createdAt?: Date | string,
    lastUpdated?: Date,
    cards: Card[],
    language: string
}

export type Card = {
    _id?: string,
    createdAt?: Date,
    answer: string,
    correctAttempts: number,
    incorrectAttempts: number,
    lastUpdated?: Date,
}

export type UserDeck = {
    _id?: string,
    name: string,
    createdAt?: Date | string,
    lastUpdated?: Date,
    cards: Array<any>,
    language: string,
    userId: string
}

export type User = {
    _id?: string,
    providers: string[],
    email: string,
    token: string
}
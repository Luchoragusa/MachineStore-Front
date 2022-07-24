export interface Game {
    id: number;
    image: string;
    name: string;
    price: number;
    description: string;
    valoration: number;
}

export interface GamesResponse {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
    games: Game[];
}
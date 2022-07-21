export interface Game {
    id: number;
    // image: string;
    name: string;
    
    // Estos serian para el juego posta
    // id: number;
    // image: string;
    // name: string;
    // valoration: number;
    // description: string;
}

export interface GamesResponse {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
    games: Game[];
}
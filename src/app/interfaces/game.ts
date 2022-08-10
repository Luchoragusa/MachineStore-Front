export interface Game { // interface para definir el objeto game que se va a usar en el componente games 
    id: number;
    image: string;
    name: string;
    species: string;
    status: string;
    originGame: string;
}

export interface GamesResponse {    // esta es la forma de recibir la respuesta de la API 
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
    games: Game[];
}
export type TeamColor = 'red' | 'blue';
export type PlayerRole = 'spymaster' | 'operative';
export type CardType = TeamColor | 'neutral' | 'assassin';

export interface Player {
    id: string;
    name: string;
    team: TeamColor;
    role: PlayerRole;
}

export interface Card {
    word: string;
    type: CardType;
    revealed: boolean;
}

export interface GameState {
    roomId: string;
    board: Card[];
    currentTurn: TeamColor;
    players: Player[];
    winner?: TeamColor;
}

export interface Clue {
    word: string;
    number: number;
    team: TeamColor;
}
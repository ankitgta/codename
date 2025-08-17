import { v4 as uuidv4 } from 'uuid';
import { GameState, Player } from '../shared/types';

export class GameRoom {
    private roomId: string;
    private gameState: GameState;

    constructor() {
        this.roomId = this.generateRoomId();
        this.gameState = this.initializeGameState();
    }

    private generateRoomId(): string {
        // Generate a 6-character alphanumeric room code
        return Math.random().toString(36).substring(2, 8).toUpperCase();
    }

    private initializeGameState(): GameState {
        return {
            roomId: this.roomId,
            board: [],
            currentTurn: 'red',
            players: []
        };
    }

    public addPlayer(player: Player): void {
        this.gameState.players.push(player);
    }

    public getRoomId(): string {
        return this.roomId;
    }

    public getGameState(): GameState {
        return this.gameState;
    }
}
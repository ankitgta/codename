import { Card, CardType, TeamColor } from '../../shared/types';

export function generateBoard(): Card[] {
    const words = getRandomWords(); // You'll need to implement this
    const types = generateCardTypes();
    
    return words.map((word, index) => ({
        word,
        type: types[index],
        revealed: false
    }));
}

function generateCardTypes(): CardType[] {
    const types: CardType[] = [];
    
    // Standard game has:
    // - 8 red cards
    // - 8 blue cards
    // - 7 neutral cards
    // - 1 assassin card
    // First team gets one extra card
    const firstTeam: TeamColor = Math.random() < 0.5 ? 'red' : 'blue';
    
    for (let i = 0; i < 9; i++) types.push(firstTeam);
    for (let i = 0; i < 8; i++) types.push(firstTeam === 'red' ? 'blue' : 'red');
    for (let i = 0; i < 7; i++) types.push('neutral');
    types.push('assassin');
    
    // Shuffle the array
    return types.sort(() => Math.random() - 0.5);
}
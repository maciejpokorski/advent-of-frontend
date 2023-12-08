export interface Letter {
    content: string;
    country: 'pl' | 'de' | 'us';
    priority: 'high' | 'medium' | 'low';
}

interface Strategy {
    sort(letter: Array<Letter>): Array<Letter>;
}

export class PriorityStrategy implements Strategy {
    private priorityMap = {
        'high' : 1,
        'medium' : 2,
        'low' : 3
    }

    sort(letters: Array<Letter>) {
        return letters.sort((a, b) => this.priorityMap[a.priority] - this.priorityMap[b.priority]);
    }
}

export class CountryStrategy implements Strategy {
    private countryMap = {
        'pl' : 1,
        'de' : 2,
        'us' : 3
    }

    sort(letters: Array<Letter>) {
        return letters.sort((a, b) => this.countryMap[a.country] - this.countryMap[b.country])
    }
}

export class LengthStrategy implements Strategy {
    sort(letters: Array<Letter>) {
        return letters.sort((a, b) => a.content.length - b.content.length)
    }
}

export class LetterSorter {
    private strategy;

    constructor(strategy : Strategy){
        this.strategy = strategy;
    }

    sortLetters(letters: Array<Letter>): Array<Letter> {
        return this.strategy.sort(letters);
    }
}

export class GiftRegistry {

    private registry: Map<number, string[]>;
    
    constructor() {
        this.registry = new Map();
    }
    
    addGift(childId: number, gift: string): void {
        if (!this.registry.has(childId)) {
        this.registry.set(childId, []);
        }
        this.registry.get(childId)!.push(gift);
    }
    
    removeGift(childId: number, gift: string): void {
        if (!this.registry.has(childId) || !this.registry.get(childId)!.includes(gift)) {
        throw new Error('Gift not found');
        }
    
        const gifts = this.registry.get(childId)!;
        const index = gifts.indexOf(gift);
        gifts.splice(index, 1);
    }
    
    getGiftsForChild(childId: number): string[] {
        return this.registry.get(childId) || [];
    }
}

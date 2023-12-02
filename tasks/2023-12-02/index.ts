export class ChristmasQueue<T> {

    private queue : Array<Item<T>>;
    
    constructor() {
        this.queue = [];
    }
    
    enqueue(item : T, priority : number): void {
        const toInsert : Item<T> = new Item(item, priority);
        let contains : Boolean = false;

        for (var i = 0; i < this.queue.length; i++) {
            if (priority > this.queue[i].priority){
                this.queue.splice(i, 0, toInsert);
                contains = true;
                break;
            }
        }

        if (!contains) {
            this.queue.push(toInsert);
        }

    }

    dequeue(): T {
        if (this.isEmpty()){
            throw new Error("There are no letters in the queue!");
        }
        
        return this.queue.shift()!.value;
    }

    isEmpty(): Boolean {
        return this.queue.length === 0;
    }
}

class Item<T> {

    value : T
    priority : number

    constructor(value : T, priority : number) {
        this.value = value;
        this.priority = priority;
    }
}
export class OrderController {
    private machines: Array<Machine> = [];

    registerMachine(machine: Machine): void {
        this.machines.push(machine);
    }

    setState(item: string): void {
        this.throwErrorOnInvalidState(item);
        this.machines.map(machine => machine.state = item);
    }

    private throwErrorOnInvalidState(item: string): void {
        if (item === 'unknown'){
            throw "Invalid state provided";
        }
    }

    unregisterMachine(machine: Machine): void {
        const index = this.machines.indexOf(machine);
        if (index !== -1) {
            this.machines.splice(index, 1);
        }
    }
}

export class Machine {
    private _state: Array<string> = [];

    public get state(): string|null {
        if (this._state.length === 0 ){
            return null;
        }

        return this._state[this._state.length - 1]
    }

    public set state(state: string|null) {
        if (state !== null){
            this._state.push(state);
        }
        else {
            console.log('empty array set')
            this._state = [];
        }
    }

    performAudit() : Array<string> {
        return this._state.map((element, index) => `Order #${index + 1} - ${element}`);
    }
}
export interface Tool {
    init: Function;
    update: Function;
    dispose: Function;
}

export class Equipment {
    private tools: Array<Tool> = [];

    registerTools(tool: Tool) {
        this.tools.push(tool)
    }

    initializeTools() {
        console.log(this.tools)
        this.tools.forEach(tool => tool.init());
    }

    updateTools() {
        this.tools.forEach(tool => tool.update());
    }

    disposeTools() {
        this.tools.forEach(tool => tool.dispose());
    }
}

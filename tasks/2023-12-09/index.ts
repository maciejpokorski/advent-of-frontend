export interface Tool {
    init: Function;
    update: Function;
    dispose: Function;
}

export class Equipment {
    private tool: Tool | undefined

    registerTools(tool: Tool) {
        this.tool = tool
    }

    initializeTools() {
        this.tool?.init()
    }

    updateTools() {
        this.tool?.update()
    }

    disposeTools() {
        this.tool?.dispose()
    }
}

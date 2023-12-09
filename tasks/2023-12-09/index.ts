enum ToolState {
    initialized
}
export interface Tool {
    init: Function;
    update: Function;
    dispose: Function;
}

interface EquipmentTool extends Tool {
  state: ToolState;
}

export class Equipment {
    private tools: Array<EquipmentTool> = [];

    registerTools(tool: Tool) {
        const equipmentTool = tool as EquipmentTool; 
        this.tools.push(equipmentTool);
    }

    initializeTools() {
        this.tools.forEach(tool => {
            tool.init();
            tool.state = ToolState.initialized;
        });
    }

    updateTools() {
        this.tools.forEach(tool => {
            if (tool.state !== ToolState.initialized){
                throw 'Cannot update any tools before initialization.';
            }

            tool.update();
        });
    }

    disposeTools() {
        this.tools.forEach(tool => tool.dispose());
    }
}

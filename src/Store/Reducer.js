import { itemsArray } from '../Data/FormData';

const initalState = {
    items: {
        past: [],
        present: itemsArray,
        future: []
    },
    title: "Item Editor",
    selectedItem: null
};

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case "SelectItem":
            state = { ...state, selectedItem: action.selectedItem };
            return state;
        case "Save": {
            let newState = { ...state };
            if (action.data && state.selectedItem !== null) {
                const index = state.items.present.findIndex(i => i.id === state.selectedItem.id);
                if (index !== -1) {
                    const present = JSON.parse(JSON.stringify(state.items.present));
                    newState.items.past.push(present);
                    let fields = state.items.present[index].fields.map(field => {
                        if (action.data.hasOwnProperty(field.id)) {
                            field.fieldValue = action.data[field.id];
                        }
                        return field;
                    });
                    newState.items.present[index].fields = fields;
                }
            }
            state = { ...newState };
            return { ...state, message: "Data saved successfully !" };
        }
        case "Undo": {
            let newState = { ...state };
            newState.items.future.unshift(state.items.present);
            const popedItem = newState.items.past.pop();
            if (popedItem) {
                newState.items.present = popedItem;
            }
            if (newState.selectedItem !== null) {
                const index = newState.items.present.findIndex(i => i.id === newState.selectedItem.id);
                if (index !== -1) {
                    const presentItems = newState.items.present[index];
                    const currentSelecteItem = JSON.parse(JSON.stringify(presentItems));
                    newState.selectedItem = currentSelecteItem;
                }
            }
            state = { ...newState };
            return state;
        }
        case "Redo": {
            let newState = { ...state };
            if (newState.selectedItem !== null) {
                const index = newState.items.present.findIndex(i => i.id === newState.selectedItem.id);
                if (index !== -1 && newState.items.future.length) {
                    const presentItems = JSON.parse(JSON.stringify(newState.items.present));
                    newState.items.past.push(presentItems);
                    newState.items.present = newState.items.future[0];
                    newState.items.future.shift();
                }
            }
            state = { ...newState };
            return state;
        }
        case "Cancel": {
            state = { ...state, selectedItem: null };
            state.items.past = [];
            state.items.future = [];
            return state;
        }
        default:
            return state;
    }
}

export default reducer;
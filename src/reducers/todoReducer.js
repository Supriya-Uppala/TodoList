const initialState = []
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {
                id: action.id,
                text: action.text
            }];
        case 'SHOW_TODOS':
            return state;
        default:
            return state;
    }
}
export default todoReducer;
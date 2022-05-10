export const bookCategoryReducer = (state = 0, action) => {
    switch (action.type){
        case "CATEGORY":
                state = action.index;
            return state
        default:
            return 0
    }
}
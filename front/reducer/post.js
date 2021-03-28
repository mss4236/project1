import produce from 'immer';

// Store
export const initialState = {

};

export default (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            default: {
                break;
            }
        }
    });
};
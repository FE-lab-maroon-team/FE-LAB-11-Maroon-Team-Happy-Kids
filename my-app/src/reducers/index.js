const initialState = {
    events: [],
    loading: true,
    error: null,
    cartItems: [],
    eventsTotal: 550,
    eventsCurrentTotal: 250 
};

const updateCartItems = (cartItems, item, idx) => {
    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ];
}

const updateCartItem = (event, item = {}) => {

    const {
        id = event.id,
        name = event.name,
        total = 300,
        currentTotal = 0,
        progress = 0 } = item;

    return {
        id,
        name,
        total: total,
        currentTotal: currentTotal + total/2,
        progress: progress + 50
    };
};

const reduser = (state = initialState, action) => {
  
    switch (action.type) {
        case 'FETCH_EVENTS_REQUEST':
            return {
                ...state,
                events: [],
                loading: true,
                error: null
            }
        case 'FETCH_EVENTS_SUCCESS':
            return {
                ...state,
                events: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_EVENTS_FAILURE':
            return {
                ...state,
                events: [],
                loading: false,
                error: action.payload
            };

        case 'ON_DONATE_FOR_EVENT':
            const eventId = action.payload;
            const event = state.events.find((event) => event.id === eventId);
            const itemIndex = state.cartItems.findIndex(({id}) => id === eventId);
            const item = state.cartItems[itemIndex];

            const newItem = updateCartItem(event, item);

            return {
                ...state,
                cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
            };

        default:
            return state;   
    }
};

export default reduser;
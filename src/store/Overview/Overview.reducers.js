const product_Overview_Initial = {
    id: "MLB1563389012",    
};

export default function (state = product_Overview_Initial, action) {

    switch (action.type) {
        case 'PRODUCT_OVERVIEW':
            return {
                id: action.payload.id,                          
            }

        default:
            return state
    }
}


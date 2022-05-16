const product_Initial = {
    id: "MLB5672",
    name: "Acessórios para Veículos"
};

export default function (state = product_Initial, action) {

    switch (action.type) {
        case 'PRODUCT_STATE':
            return {

                id: action.payload.id,
                name: action.payload.name,
            }

        default:
            return state
    }
}


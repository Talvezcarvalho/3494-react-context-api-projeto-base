export const ADD_PRODUTO = "ADD_PRODUTO";
export const REMOVE_PRODUTO = "REMOVE_PRODUTO";
export const UPDATE_QUANTIDADE = "UPDATE_QUANTIDADE";

export const carrinhoReducer = (state, action) => {
    switch (action.type) {
        case ADD_PRODUTO:
            const novoProduto = action.payload;
            const produto = state.findIndex((p) => p.id === novoProduto.id);
            if (produto === -1) {
                return [...state, { ...novoProduto, quantidade: 1 }];
            }
            else {
                return state.map((p, index) => {
                   return index === produto ? { ...p, quantidade: p.quantidade + 1 } : p;
                    }
                )
            }
        case REMOVE_PRODUTO:
            const produtoId = action.payload;
            return state.filter((p) => p.id !== produtoId);

        case UPDATE_QUANTIDADE:
            const { produtoId: id, quantidade } = action.payload;
            return state.map((p) => {
                p.id === id ? { ...p, quantidade } : p;
            });
    }
}
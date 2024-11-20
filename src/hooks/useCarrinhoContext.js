import { useContext } from "react";
import { CarrinhoContext } from "@/context/CarrinhoContext";
import { 
  ADD_PRODUTO,
  REMOVE_PRODUTO,
  UPDATE_QUANTIDADE
} from "../reducer/carrinhoReducer";


const addProductAction = (novoProduto) => ({
  type: ADD_PRODUTO,
  payload: novoProduto,
});

const removeProductAction = (produtoId) => ({
  type: REMOVE_PRODUTO,
  payload: produtoId,
});

const updateQuantityAction = (produtoId, quantidade) => ({
  type: UPDATE_QUANTIDADE,
  payload: { produtoId, quantidade },
});


export const useCarrinhoContext = () => {
  const {
    carrinho,
    dispatch,
    quantidade,
    valorTotal,
  } 
  = useContext(CarrinhoContext);
  

  function adicionarProduto(novoProduto) {
    dispatch(addProductAction(novoProduto));
  }

  function removerProduto(id) {
    const produto = carrinho.find((p) => p.id === id);

    if (produto && produto.quantidade > 1) {
      dispatch(updateQuantityAction(id, produto.quantidade - 1));
    }
    else  {
      dispatch(removeProductAction(id));
    }
  }

  function removerProdutoCarrinho(id) {
    dispatch(removeProductAction(id));
  }

  
  return {
    carrinho,
    adicionarProduto,
    removerProduto,
    removerProdutoCarrinho,
    valorTotal,
    quantidade,
  };
};

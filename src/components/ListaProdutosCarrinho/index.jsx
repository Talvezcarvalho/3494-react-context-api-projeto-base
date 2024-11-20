import React from "react";
import ItemCarrinhoSuspenso from "@/components/CarrinhoSuspenso/ItemCarrinhoSuspenso";
import ItemCarrinho from "@/components/ItemCarrinho";
import { useLocation } from "react-router-dom";

const ListaProdutosCarrinho = ({ carrinho }) => {
  const location = useLocation();

  carrinho.forEach((itemCarrinho) => {
    console.log(itemCarrinho);
  });

  return (
    <ul className="list-unstyled">
      {carrinho.length === 0 ? (
        <p className="text-center my-5">Não há produtos no carrinho</p>
      ) : (
        carrinho.map((itemCarrinho) => {
          // Verificação de segurança para garantir que itemCarrinho não seja undefined
          if (!itemCarrinho || !itemCarrinho.id) {
            console.error("Produto inválido no carrinho:", itemCarrinho);
            return null; // Não retorna nada se o item for inválido
          }

          // Retornando o componente correto com base no caminho da URL
          return location.pathname === "/carrinho" ? (
            <ItemCarrinho
              key={itemCarrinho.id}
              itemCarrinho={itemCarrinho}
            />
          ) : (
            <ItemCarrinhoSuspenso
              key={itemCarrinho.id}
              itemCarrinho={itemCarrinho}
            />
          );
        })
      )}
    </ul>
  );
};

export default ListaProdutosCarrinho;

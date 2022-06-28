import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 1rem;

  .inputSearch {
    flex: 1 0 30%;
  }
  .inputSearch input {
    padding: 0.5rem 0.75rem;
    width: 70%;
    display: block;
    border: none;
    outline: none;
    padding: 1rem;
    background-color: #f4f1f1;
    border-radius: 0.75rem;
  }

  .headerContainer {
    display: flex;
    align-items: center;
    gap: 4rem;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  background-color: rgb(255, 251, 241);
  border-radius: 1rem;
  height: 250px;
  & img {
    flex: 1 0 33.3%;
    object-fit: cover;
  }
  & .titleHero {
    flex: 1 0 33.3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & .actionHero {
    flex: 1 0 33.3%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 1rem;
  }
`;

export const ListRestContainer = styled.div`
  & .headListRestaurant {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & button {
      padding: 0.75rem;
      border-radius: 2rem;
      background-color: orangered;
      color: white;
      border: none;
      outline: none;
      display: flex;
      gap: 0.5rem;
    }
  }
  & .menuList {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
  }
`;

export const MenuBox = styled.div`
  padding: 1rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  align-items: center;
  & .iconBox {
    border: 1px solid;
    display: flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 1rem;
    margin-bottom: 1rem;
  }
  &:first-of-type {
    background-color: yellow;
  }
  &:first-of-type .iconBox {
    background-color: white;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-block-start: 2rem;
  & .productCard {
    height: 100px;
  }
`;

export const AsideCart = styled.div`
  & .headAsideCart {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
  }
`;

export const CartCircle = styled.div`
  background-color: yellow;
  padding: 1rem;
  border-radius: 50%;
  height: 1rem;
  width: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OrderInfo = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  color: white;
  background-color: rgb(93, 1, 212);
`;

export const ListContent = styled.div`
  height: 50vh;
  overflow: auto;
`;

export const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e1e1e1;
  padding-inline: 1rem;
`;
export const OrderAddress = styled.div``;

export const MainGrid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;

export const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & h1 {
    font-size: 4rem;
  }
`;

export const ButtonSign = styled.button`
  padding: 0.5rem 0.75rem;
  display: flex;
  gap: 1rem;
  border: none;
  background-color: #4885ed;
  color: white;
  font-size: 2rem;
  border-radius: 0.5rem;
`;

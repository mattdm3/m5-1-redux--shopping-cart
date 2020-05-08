import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from '../actions';


const CartItem = ({ item }) =                                                                                                              > {


    const dispatch = useDispatch();
    // const state = useSelector(getStoreItemArray);

    // const itemQuantity = useSelector((state) => state.items[item.id].quantity);
    const itemQuantity = useSelector((state) => state[item.id].quantity);


    return(
        <StyledContainer>
    <ItemName>
        <h3>{item.title}</h3>
        <h2 style={{ cursor: "pointer" }} onClick={() => dispatch(removeItem(item.id))}>X</h2>
    </ItemName>
    <Quantity>
        <p>Quantity</p>
        <input
            value={itemQuantity}
            onChange={(e) => dispatch(updateQuantity(item.id, e.target.value))} />
    </Quantity>


        </StyledContainer >

    )

}

const StyledContainer = styled.div`
    display: flex; 
    flex-direction:column; 
    border: 2px dashed grey;
    margin-top: 40px;
    

`

const ItemName = styled.div`
    display: flex; 
    justify-content: space-between;
    padding: 10px; 
    align-items: center; 
`

const Quantity = styled.div`
    display: flex;  
    background: #301732;
    padding: 10px; 
    align-items: center;
    p {
        padding-right: 5px; 
    }
    input {
        background: white; 
        color: black ;
        padding: 5px 5px; 
        width: 35px; 
        text-align: center;
        font-size: 1rem;
    }
`

export default CartItem; 
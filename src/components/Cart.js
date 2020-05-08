import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'
import { getStoreItemArray, getSubtotal } from '../reducers'

const Cart = () => {

    const state = useSelector(getStoreItemArray);
    const subTotal = useSelector(getSubtotal);

    //     const formatPriceForHumans = price =>
    //   (price / 100).toLocaleString('en-US', {
    //     style: 'currency',
    //     currency: 'USD',
    //   });


    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })

    console.log(state)
    console.log(subTotal)


    return (
        <StyledContainer>
            <CartContent>
                <CartItems>
                    <h2>Your Cart</h2>
                    <p>1 item</p>

                    {
                        state.map(item => <CartItem key={item.id} item={item} />
                        )
                    }


                </CartItems>
                <CostAndButton>
                    <div>
                        <h3>Total: <span>{formatter.format(subTotal)}</span> </h3>
                    </div>
                    <StyledButton>Purchase</StyledButton>
                </CostAndButton>
            </CartContent>

        </StyledContainer>

    )

}

const StyledContainer = styled.div`
   
    background: #401F43; 
    color: white; 

    padding: 30px;
    min-width: 400px; 
    max-width: 400px; 
    flex-grow:1; 
    h2 {
        padding-bottom: 10px; 
    }
    h3{
        font-weight: 500; 
    }
    span{
        font-weight: 700; 

    }
`

const CartContent = styled.div`
    position: fixed;
    display: flex; 
    flex-direction: column; 
    justify-content: space-between; 
    height: 87%; 
    
`

const CostAndButton = styled.div`
    display: flex; 
    justify-content: space-between;
    width: 340px;
    align-items: center; 
    margin-top: 80px; 
`

const StyledButton = styled.button`
    width: 140px; 
    border-radius: 10px; 
    height: 35px; 
    color: white; 
    text-align: center; 
    background: #F5406E;
    border: none; 
    font-family: "Lato";
    font-size: 1.1rem; 
    cursor: pointer; 
`

const CartItems = styled.div`
    overflow: auto; 
`

export default Cart; 

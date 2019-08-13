import styled from 'styled-components'

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1rem;
    color: var(--lightGrey);
    background: transparent;
    border: .05rem solid var(--lightGrey);
    border-color: ${props => props.cart ? "var(--mainOrange)" : "var(--lightGrey)" };
    color: ${props => props.cart ? "var(--mainOrange)" : "var(--lightGrey)" };
    border-radius: .5rem;
    padding: .4rem;
    cursor: pointer;
    margin: .5rem;
    transition: all .5s ease-in-out;
    &:hover {
        background: ${props => props.cart ? "var(--mainOrange)" : "var(--lightGrey)" };
        color: ${props => props.cart ? "var(--mainWhite)" : "var(--mainGrey)" };
    }
    &:focus {
        outline: none
    }
`
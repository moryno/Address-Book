import React, { useState } from "react";
import styled from "styled-components";


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 7rem;
    

`;
const Wrapper = styled.form`
    width: 40rem;
    padding: 1rem;
    border: 2px solid lightgray;
    box-sizing: border-box;
`;

const Input =  styled.input`
  padding: 1rem;
  border: none;
  margin-right: 0.7rem;
  margin-bottom: 1rem;
  width: ${props => props.width === "half" ? "40%" : "87%"};
  outline: none;
`;

const Button = styled.button`
   padding: 0.5rem;
   color: white;
   background-color: teal;
   border: none;
   font-weight: 600;
   font-size: 0.9rem;
   cursor:pointer;
`;

export const Form = ({onAdd}) => {

    const [address, setAddress] = useState({
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      zipCode: "",
      city: ""
    })

    const handleChange = (event) => {
      const {name, value} = event.target;

      setAddress( prevAddress => {
        return {...prevAddress, [name]: value}
      })
    }
   const handleSubmit = (event) => {
    event.preventDefault()
    onAdd(address);
   } 

  return (
    <div>
        <Container>
            <Wrapper >
                <Input 
                name = {"firstName"}
                value = {address.firstName}
                onChange={handleChange}
                autoFocus = {true}
                 width={"half"}
                  placeholder="First Name" />
                <Input 
                name="lastName"
                value={address.lastName}
                onChange={handleChange}
                 width={"half"}
                  placeholder="Last Name" />
                <Input
                name="email"
                value={address.email}
                 onChange={handleChange}
                 placeholder="Email" />
                <Input 
                name="street"
                value={address.street}
                onChange={handleChange}
                 placeholder="Street" />
                <Input 
                name="zipCode"
                value={address.zipCode}
                onChange={handleChange}
                 placeholder="Zip-Code" />
                <Input
                name="city" 
                value={address.city}
               onChange={handleChange}
                 placeholder="City" />
                 <Button onClick={handleSubmit}>SUBMIT</Button>
            </Wrapper> 
        </Container>
    </div>
  )
}

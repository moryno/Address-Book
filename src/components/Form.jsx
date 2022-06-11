import React, { useState } from "react";
import styled from "styled-components";


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    

`;
const Wrapper = styled.div`
    width: 30rem;
`;

const Input =  styled.input`
  padding: 0.5rem 1rem;
  border: none;
  border-bottom: 1px solid lightgray;
  margin-right: 0.7rem;
  width: ${props => props.width === "half" ? "40%" : "100%"}
`;



export const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [street, setStreet] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [city, setCity] = useState("");
  return (
    <div>
        <Container>
            <Wrapper >
                <Input 
                onChange={(event) => setFirstName(event.target.value)}
                 width={"half"}
                  placeholder="First Name" />
                <Input 
                onChange={(event) => setLastName(event.target.value)}
                 width={"half"}
                  placeholder="Last Name" />
                <Input onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
                <Input 
                 
                onChange={(event) => setStreet(event.target.value)}
                 placeholder="Street" />
                <Input 
                onChange={(event) => setZipCode(event.target.value)}
                 placeholder="Zip-Code" />
                <Input 
                onChange={(event) => setCity(event.target.value)}
                 placeholder="City" />
            </Wrapper> 
        </Container>
    </div>
  )
}

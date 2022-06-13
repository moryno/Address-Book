import React, { useState } from "react";
import styled from "styled-components";
import { Form } from "./Form";
const Container = styled.div`
 
`;

const Title = styled.h1`
   font-size: 1.375rem;
  font-weight: 600;
`;

const Table = styled.table`
  background-color: #fff;
  width: 100%;
  border-spacing: 1rem;
  

`;

const TableHead = styled.th`
   text-align: left;
`;

const TableRow = styled.tr`
  border-bottom:1px solid lightgray;
`;

const TableData = styled.td`
 
`;

const Button = styled.button`
   padding: 0.3125rem 0.4375rem;
   color: ${props => props.btn === "update" ? " #3bb077" : "#e5faf2"};
   background-color:${props => props.btn === "update" ? " #e5faf2" : "#3bb077"};
   border: none;
   border-radius: 0.7rem;
   font-weight: 600;
   font-size: 0.9rem;
   cursor:pointer;
   margin-right: 1rem;
   margin-top: ${props => props.btn === "create" && "1rem"};
`;

export const Address = () => {
  const [isAdd, setIsAdd] = useState(false)
  const [isEditing, setIsEditing] = useState(false);
  const [addresses, setAddresses] = useState([]);

  const handleCreateForm = () => {
    setIsAdd(true)
  }

  const handleClick = () => {
    setIsEditing(true);
  }
 
 
  const addAddress = (address) =>{
    setAddresses(prevAddress => {
      return [...prevAddress, address]
    })
  }

  const handleDelete = (id) => {
    setAddresses(prevAddress => {
     return prevAddress.filter((address, index) => {
      return index !== id
     })
    } )
  }

  return (
    <div>
    <Container>
    <Title>Address Book</Title>
    {isEditing ? <Form /> :
    <Table>
            <TableRow>
                <TableHead>First Name</TableHead>
                <TableHead>Last Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Street</TableHead>
                <TableHead>Zip-Code</TableHead>
                <TableHead>City</TableHead>
            </TableRow>
            {addresses.map(address => {
              return  (
              <TableRow>
                <TableData>{address.firstName}</TableData>
                <TableData>{address.lastName}</TableData>
                <TableData>{address.email}</TableData>
                <TableData>{address.street}</TableData>
                <TableData>{address.zipCode}</TableData>
                <TableData>{address.city}</TableData>
                <TableData>
                  <Button btn={"update"} onClick={handleClick}>Update</Button>
                  <Button btn={"remove"} onClick={handleDelete}>Delete</Button>
                </TableData>
            </TableRow>
              )
            })
           
            }
        </Table>
    }
   { isAdd ? <Form onAdd={addAddress} /> :
    <Button onClick={handleCreateForm} btn={"create"} style={{display: isEditing && "none"}}>Add Address</Button>
   }
    </Container>
    </div>
  )
}

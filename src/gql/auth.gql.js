import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($inputLogin: InputLoginRequest!) {
    login(inputLogin:$inputLogin){
      user{
        id
        username
        email
      }
      # profile{
      #   fullName
      #   phone
      #   address
      #   dateOfBirth
      #   monthOfBirth
      #   yearOfBirth
      # }
      accessToken
    }
  
  }
`;

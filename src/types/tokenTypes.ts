interface AuthorizationToken {
    token: string;
    expires_in: number;
    date_expires: string;
    type: string;
  }
  
  export default AuthorizationToken;
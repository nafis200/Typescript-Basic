function userIdDataType(userId: string | number) {
    console.log(typeof userId);
  }
  
  userIdDataType('123'); // no error
  userIdDataType(123); // no error
  // userIdDataType(true); // error
  
  
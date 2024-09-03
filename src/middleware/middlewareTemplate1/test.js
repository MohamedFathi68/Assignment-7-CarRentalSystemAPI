const test = (req , res , next)=>{
  console.log('Test middleware called');
  next();
}

export default test
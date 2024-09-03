const template =(req, res) => {
  console.log('Test endpoint called');
  res.status(200).json({message: 'success'});
}

export {
  template
}
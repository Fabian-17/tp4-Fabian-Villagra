// getController
const getController = (req, res) => {
    res.send('Hello World');
  };
  

  // postController
const postController = (req, res) => {
    res.send('Hello World');
  };
  

  // putController
const putController = (req, res) => {
    res.send('Hello World');
  };
  

  // deleteController
const deleteController = (req, res) => {
    res.send('Hello World');
  };

//Exportamos las peticines HTTP 
  module.exports = {
    getController,
    postController,
    putController,
    deleteController
  };
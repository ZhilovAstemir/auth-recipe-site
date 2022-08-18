import React, {useEffect, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import "../modals/CreatRecipe.css";


const EditRecipe = ({modal, toggle, updateRecipe, recipeObj}) => {

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const [recipeName, setRecipeName] = useState("");
  const [description, setDescription] = useState("");
  const [currentEmail, setCurrentEmail] = useState(currentUser[0].userEmail);

  console.log(currentEmail)

  const handleChange = (e) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const {name, value} = e.target;

    if (name === "recipeName") {
      setRecipeName(value);
    } else {
      setDescription(value);
    }
  }

  useEffect(() => {
    setRecipeName(recipeObj.Name);
    setDescription(recipeObj.Description);
    setCurrentEmail(recipeObj.CurrentEmail);
  }, []);

  const handleUpdate = (e) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const currentEmail = currentUser.userEmail;
    e.preventDefault();
    let tempObj = {}
    tempObj["Name"] = recipeName;
    tempObj["Description"] = description;
    recipeObj["CurrentEmail"] = currentEmail;

    updateRecipe(tempObj);
  }

  console.log(currentEmail);

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Recipe</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>User Email</label>
            <input type="email" className="form-control" value={currentEmail}
                   name="currentEmail"/>
          </div>
          <div className="form-group">
            <label>Recipe Name</label>
            <input type="text" className="form-control" value={recipeName} onChange={handleChange}
                   name="recipeName"/>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea rows="5" className="form-control textarea-popup" value={description} onChange={handleChange}
                      name="description">
            </textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          Update
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditRecipe;
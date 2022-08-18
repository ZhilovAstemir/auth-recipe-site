import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import "../modals/CreatRecipe.css";

const CreatRecipe = ({modal, toggle, save}) => {

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const [recipeName, setRecipeName] = useState("");
  const [description, setDescription] = useState("");
  const [currentEmail, setCurrentEmail] = useState(currentUser[0].userEmail);


  const handleChange = (e) => {

    const {name, value} = e.target;

    if (name === "recipeName") {
      setRecipeName(value);
    } else {
      setDescription(value);
    }
  }

  const handleSave = () => {
    let recipeObj = {};
    recipeObj["Name"] = recipeName;
    recipeObj["Description"] = description;
    recipeObj["CurrentEmail"] = currentEmail;
    save(recipeObj);
  }


  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Recipe</ModalHeader>
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
        <Button color="primary" onClick={handleSave}>
          Create
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreatRecipe;
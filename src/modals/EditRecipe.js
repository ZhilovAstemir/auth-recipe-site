import React, {useEffect, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import "../modals/CreatRecipe.css";


const EditRecipe = ({modal, toggle, updateRecipe, recipeObj}) => {

  const [recipeName, setRecipeName] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {

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
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {}
    tempObj["Name"] = recipeName;
    tempObj["Description"] = description;
    updateRecipe(tempObj);
  }

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Recipe</ModalHeader>
      <ModalBody>
        <form>
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
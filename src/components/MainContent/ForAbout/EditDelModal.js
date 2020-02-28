import React, { Component } from 'react'

 class EditDelModal extends Component {
    render() {
        return (
            <div class="modal fade modal-wrapper" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content modal-container">
                <div class="popup-block" id="popup">
                    <div class="popup-container">
                        <h2>Are you sure?</h2>
                        <div class="para">
                            <p>Do you really want to delete these data? This process cannot be undone.</p>
                        </div>
                        <div class="btn-action">
                            <button type="button" class="btn" data-dismiss="modal">cancel</button>
                            <button type="submit" class="btn delete">Delete</button>
                        </div>
                    </div>
                </div>
                 
                </div>
              </div>
        </div>
        )
    }
}
export default EditDelModal;

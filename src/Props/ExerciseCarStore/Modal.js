import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    return (
      <div>
        <div>
          {/* Modal */}
          <div
            className="modal fade"
            id="modalId"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="modalTitleId"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="modalTitleId">
                   {this.props.content.name}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <div className="container-fluid"><img className="img-fluid" src={this.props.content.img} alt=""/> </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

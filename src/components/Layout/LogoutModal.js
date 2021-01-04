import React from 'react';

class LogoutModal extends React.Component {
  render() {
    return (
      <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
      {/* <!-- Logout Modal--> */}

          <div className="modal-dialog" role="document">
              <div className="modal-content">
                  <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                      <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                      </button>
                  </div>
                  <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                  <div className="modal-footer">
                      <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
{/* ATENTIE TREBUIE INLOCUIT CU COMPONENTA REACT DE LOGIN SAU ROUTER                       */}
                      <a className="btn btn-primary" href="%PUBLIC_URL%/SB-Admin/pages/login.html">Logout</a>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default LogoutModal;
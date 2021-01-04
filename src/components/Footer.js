import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="sticky-footer bg-white">
      {/* <!-- Footer --> */}

          <div className="container my-auto">
              <div className="copyright text-center my-auto">
                  <span>Copyright &copy; Your Website 2020</span>
              </div>
          </div>

      {/* <!-- End of Footer --> */}
      </footer>
    )
  }
}

export default Footer;
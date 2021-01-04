import React from 'react';

class Sidebar extends React.Component {
  render() {
    return (
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      {/* <!-- Sidebar --> */}

          {/* <!-- Sidebar - Brand --> */}
          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
              <div className="sidebar-brand-icon rotate-n-15">
                  <i className="fas fa-laugh-wink"></i>
              </div>
              <div className="sidebar-brand-text mx-3">WaterLab</div>
          </a>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider my-0" />

          {/* <!-- Nav Item - Dashboard --> */}
          <li className="nav-item active">
              <a className="nav-link" href="index.html">
                  <i className="fas fa-fw fa-tachometer-alt"></i>
                  <span>Dashboard</span></a>
          </li>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider" />

          {/* <!-- Heading --> */}
          <div className="sidebar-heading">
              Details
          </div>

          {/* <!-- Nav Item - Charts --> */}
          <li className="nav-item">
              <a className="nav-link" href="charts.html">
                  <i className="fas fa-fw fa-chart-area"></i>
                  <span>Graphs</span></a>
          </li>

          {/* <!-- Nav Item - Tables --> */}
          <li className="nav-item">
              <a className="nav-link" href="tables.html">
                  <i className="fas fa-fw fa-table"></i>
                  <span>Measurements</span></a>
          </li>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider d-none d-md-block" />

          {/* <!-- Sidebar Toggler (Sidebar) --> */}
          <div className="text-center d-none d-md-inline">
              <button className="rounded-circle border-0" id="sidebarToggle"></button>
          </div>

      {/* <!-- End of Sidebar --> */}
      </ul>
    )
  }
}

export default Sidebar;
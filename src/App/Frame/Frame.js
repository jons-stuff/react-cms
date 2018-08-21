import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './style.css';

export default function Frame({ children, navItems }) {
  const makeNavLink = navItem => (
    <NavLink to={navItem.route} exact={navItem.exact} activeClassName="active">{navItem.label}</NavLink>
  );

  return (
    <div id="page-wrapper">
      <div id="hormenu">
        <div className="project-flash">
          <div><a href="https://jons-stuff.github.io/react-cms.html">Find out more about this project &gt;</a></div>
          <div><a href="https://github.com/jons-stuff/react-cms">GitHub Source &gt;</a></div>
        </div>
        <h1>React + Redux CMS demo</h1>
        <ul>
          {navItems.map(navItem => <li key={navItem.label}>{ makeNavLink(navItem) }</li>)}
        </ul>
      </div>
      <div className="content">
        { children }
      </div>
      <div className="page-footer" />
    </div>
  );
}

Frame.propTypes = {
  children: PropTypes.node.isRequired,
  navItems: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    route: PropTypes.string,
  })).isRequired,
};

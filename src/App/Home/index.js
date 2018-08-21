import React, { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <h1>Welcome to the React + Redux CMS demo</h1>
      <p>A 2018 React + Redux reboot of a 2009 jQuery/PHP CMS platform.</p>
      <p>Please explore the CMS areas by clicking on the nav links above</p>
      <p>
        <strong>Features so far:</strong>
      </p>
      <ul>
        <li>
          Clean and modern functional style JavaScript with separation of concerns and minimal OOP
        </li>
        <li>Custom built list management components for working with API driven lists</li>
        <li>Bespoke form management components including a validation framework</li>
        <li>Single Page Application architecture using react-router-dom</li>
        <li>Mock API serving demo data</li>
      </ul>
      <p>
        <strong>
          Please note this is a work in progress with the following enhancements planned:
        </strong>
      </p>
      <ul>
        <li>Add lazy loading to reduce initial bundle size below the recommended 244Kb limit</li>
        <li>Split React components into presentational / container components</li>
        <li>Replace 2009 era html and css with modern responsive markup</li>
        <li>Unit tests / acceptance tests (using Enzyme or Jest)</li>
        <li>Extract shared framework components into seperate npm project</li>
      </ul>
      <p>
        <a href="https://jons-stuff.github.io/react-cms.html">Find out more about this project &gt;&gt;</a>
      </p>
      <p>
        <a href="https://github.com/jons-stuff/react-cms">View the source on GitHub &gt;&gt;</a>
      </p>
    </Fragment>
  );
}

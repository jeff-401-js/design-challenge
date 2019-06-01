import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import styles from './app.module.scss';

import List from '../components/list';
import Nav from '../components/nav';
import Form from '../components/form';
import Grid from '../components/grid';
import Deck from '../components/deck';
import Card from '../components/card';
import Table from '../components/table';
import ResponsiveTable from '../components/responsive-table';
import Link from '../components/link';
import Button from '../components/button';
import Drawer from '../components/drawer';
import Modal from '../components/modal';

// Core
// Mixins, Base, Vars, Mobile Defs
import '../design/design.scss';

const menuItems = [
  { name: 'Forms', link: '/forms', component: Form },
  { name: 'List', link: '/list', component: List },
  { name: 'Link', link: '/link', component: Link },
  { name: 'Button', link: '/button', component: Button },
  {
    name: 'Nav',
    children: [
      {
        name: 'Horizontal',
        link: '/nav/horizontal',
        render: props => <Nav {...props} type="horizontal" />,
      },
      {
        name: 'Vertical',
        link: '/nav/vertical',
        render: props => <Nav {...props} type="vertical" />,
      },
      {
        name: 'Hamburger',
        link: '/nav/hamburger',
        render: props => <Nav {...props} type="hamburger" />,
      },
    ],
  },
  { name: 'Drawer', link: '/drawer', component: Drawer },
  { name: 'Modal', link: '/modal', component: Modal },
  {
    name: 'Table',
    children: [
      { name: 'Table', link: '/table', component: Table },
      {
        name: 'Row Focused (Responsive)',
        link: '/responsive-table/row',
        render: props => <ResponsiveTable {...props} stack="row" />,
      },
      {
        name: 'Column Focused (Responsive)',
        link: '/responsive-table/column',
        render: props => <ResponsiveTable {...props} stack="column" />,
      },
    ],
  },
  {
    name: 'Cards',
    children: [
      {
        name: 'Media Top',
        link: '/card/media-top',
        render: props => <Card {...props} type="media-top" />,
      },
      {
        name: 'Media Left',
        link: '/card/media-left',
        render: props => <Card {...props} type="media-left" />,
      },
      {
        name: 'Media Right',
        link: '/card/media-right',
        render: props => <Card {...props} type="media-right" />,
      },
      {
        name: 'Clickable',
        link: '/card/clickable',
        render: props => <Card {...props} type="clickable" />,
      },
    ],
  },
  {
    name: 'Decks',
    children: [
      {
        name: '1 Column',
        link: '/deck/columns-1',
        render: props => <Deck {...props} type="columns-1" />,
      },
      {
        name: '2 Column',
        link: '/deck/columns-2',
        render: props => <Deck {...props} type="columns-2" />,
      },
      {
        name: '3 Column',
        link: '/deck/columns-3',
        render: props => <Deck {...props} type="columns-3" />,
      },
      {
        name: 'Accordion',
        link: '/deck/accordion',
        render: props => <Deck {...props} type="accordion" />,
      },
      {
        name: 'Carousel',
        link: '/deck/carousel',
        render: props => <Deck {...props} type="carousel" />,
      },
      {
        name: 'Tabs',
        link: '/deck/tabs',
        render: props => <Deck {...props} type="tabs" />,
      },
    ],
  },
];

const When = props => {
  return props.condition ? props.children : null;
};

function App() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <ul>
          {menuItems.map((menu, i) => (
            <li key={`nav-${i}`}>
              <When condition={menu.link}>
                <NavLink to={menu.link}>{menu.name}</NavLink>
              </When>
              <When condition={menu.children}>
                <span>{menu.name}</span>
                <ul>
                  {menu.children &&
                    menu.children.map((submenu, j) => (
                      <li key={`nav-sub-${j}`}>
                        <NavLink to={submenu.link}>{submenu.name}</NavLink>
                      </li>
                    ))}
                </ul>
              </When>
            </li>
          ))}
        </ul>
      </nav>

      {menuItems.map((menu, i) => (
        <>
          <When condition={menu.link}>
            <When condition={menu.component}>
              <Route
                key={`routes-${i}`}
                exact
                path={menu.link}
                component={menu.component}
              />
            </When>
            <When condition={menu.render}>
              <Route
                key={`routes-${i}`}
                exact
                path={menu.link}
                render={menu.render}
              />
            </When>
          </When>
          <When condition={menu.children}>
            {menu.children &&
              menu.children.map((submenu, j) => (
                <>
                  <When condition={submenu.component}>
                    <Route
                      key={`routes-sub-${j}`}
                      exact
                      path={submenu.link}
                      component={submenu.component}
                    />
                  </When>
                  <When condition={submenu.render}>
                    <Route
                      key={`routes-sub-${j}`}
                      exact
                      path={submenu.link}
                      render={submenu.render}
                    />
                  </When>
                </>
              ))}
          </When>
        </>
      ))}
    </main>
  );
}

export default App;

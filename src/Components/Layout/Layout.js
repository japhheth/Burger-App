import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';


const Layout = (props) => (
    <Aux>
        <div>Toolbar, Side-drawer, backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
)

export default Layout;
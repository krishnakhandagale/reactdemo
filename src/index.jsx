import React from 'react';
import {render} from 'react-dom';
require('./css/index.css');
require('./css/style1.css');
import AwesomeComponent from "./awesomecompnent.jsx";


class App extends React.Component {
    render () {
        return (
            <div className="index-background"> Hello React project
                <AwesomeComponent />
            </div>

        );
    }
}

render(<App/>, document.getElementById('app'));
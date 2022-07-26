import ReactDom from 'react-dom';
import React    from    'react';
import './index.css';
class App extends React.Component {
    render() {
        return(
            <h1>hello world</h1>
        );
    }
}
ReactDom.render(<App/>, document.getElementById("root"));
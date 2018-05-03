import React from 'react';
import SearchComponent from './search/SearchComponent.jsx';
import { Button } from 'reactstrap';

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                        <div style={{textAlign: 'center'}}>
                            <h1>DnD Spell Book</h1>
                        </div>

                    <Button color="danger">HENLO</Button>
                    <SearchComponent className="col"/>

                </div>
            </div>
        );
    }
}
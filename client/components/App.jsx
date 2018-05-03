import React from 'react';
import SearchComponent from './search/SearchComponent.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <div style={{textAlign: 'center'}}>
                    <h1>DnD Spell Book</h1>
                </div>
                <SearchComponent />
            </div>
        );
    }
}
import React from 'react';
import rymdimperiet from '../../static/img/aw_rymdimperiet.png';

export default class SearchComponent extends React.Component {

    render() {
        return (
            <div>
                <input type="text" placeholder="search for spells" />
                <button type="submit" title="button"/> 
                <img src={rymdimperiet} /> 
            </div>
        );
    }
}

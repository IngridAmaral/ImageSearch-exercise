import React from 'react';
import axios from 'axios'
import SearchBar from './SearchBar';

class App extends React.Component {

    handleSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID lANw_cWlxnBGaqEbweoUPVUjGM9oKK680B82sP1WD2Q'
            }    
        });
    }

    render() {
        return (
            <div className='ui container' style={{marginTop: '1rem'}}>
                <SearchBar 
                  onSubmit={ this.handleSubmit } />
            </div>
        )
    }      
};

export default App;
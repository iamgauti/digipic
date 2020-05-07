import React from 'react';

class SearchBar extends React.Component{
    state= {
        term:''
    }
    onInputChange = (event) => {
        this.setState({term:event.target.value});
    }
    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render(){
        return (
            <div class="ui segment">
                <form class="ui form" onSubmit={this.onFormSubmit}>
                    <div class="field">
                        <label>Image Search</label>
                        <input type='text' placeholder="Enter search string..." value={this.state.value} onChange={this.onInputChange}></input>
                    </div>
                </form>
            </div>
        );
    }
};
export default SearchBar;
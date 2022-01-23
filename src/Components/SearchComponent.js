import React, {Component} from 'react';

class SearchComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = { term : ''};
    }

    render(){
        return (
            <div>
            {/* <input onChange={this.onInputChange} /> */}
            <input onChange={event => this.setState({ term:event.target.value})} />
            value is : {this.state.term}
            </div>
        );
    }

    // onInputChange(event){
    //     console.log(event.target.value);
    // }
}

export default SearchComponent;
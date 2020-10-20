// index.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    state = {
        firstName: '',
        message: '',
        key: '',
        styles: {
            backgroundColor: '#008CBA',
            border: 'none',
            color: '#fff',
            padding: '15px 32px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            borderRadius: '10px',
            fontSize: '23px',
        },
    };
    handleClick = (e) => {
        // e gives an event object
        console.log('hello');
        this.setState({
            message: 'Welcome to the world of events',
        });
    };

    // triggered whenever the mouse moves
    handleMouseMove = (e) => {
        this.setState({
            message: 'mouse is moving',
        });
    };

    handleCatchMe = (e) => {
        this.setState({
            message: 'mouse is moving',
            styles: {
                backgroundColor: '#008CBA',
                border: 'none',
                color: '#fff',
                padding: '15px 32px',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: '23px',
                position: 'absolute',
                borderRadius: '10px',
                top: Math.floor(Math.random() * 500),
                left: Math.floor(Math.random() * 500),
            },
        });
    };
    // to get value when an input field changes a value
    handleChange = (e) => {
        this.setState({
            firstName: e.target.value,
            message: e.target.value,
        });
    };

    // to get keyboard key code when an input field is pressed
    // it works with input and textarea
    handleKeyPress = (e) => {
        this.setState({
            message:
                `${e.target.value} has been pressed and the keycode is` +
                e.charCode,
        });
    };
    // Blurring happens when a mouse leave an input field
    handleBlur = (e) => {
        this.setState({ message: 'Input field has been blurred' });
    };
    // This event triggers during a text copy
    handleCopy = (e) => {
        this.setState({
            message:
                'Using 30 Days Of React for commercial purpose is not allowed',
        });
    };
    render() {
        return (
            <div>
                <h1>Welcome to the World of Events</h1>

                <button onClick={this.handleClick}>Click Me</button>
                <button onMouseMove={this.handleMouseMove}>
                    Move mouse on me
                </button>
                <p onCopy={this.handleCopy}>
                    Check copy right permission by copying this text
                </p>

                <p>{this.state.message}</p>
                <label htmlFor=''> Test for onKeyPress Event: </label>
                <input type='text' onKeyPress={this.handleKeyPress} />
                <br />

                <label htmlFor=''> Test for onBlur Event: </label>
                <input type='text' onBlur={this.handleBlur} />

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='firstName'>First Name: </label>
                        <input
                            onChange={this.handleChange}
                            name='firstName'
                            value={this.state.value}
                        />
                    </div>

                    <div>
                        <input type='submit' value='Submit' />
                    </div>
                </form>

                <div style={{ margin: '23px auto', textAlign: 'center' }}>
                    <button
                        onMouseMove={this.handleCatchMe}
                        style={this.state.styles}>
                        Catch me if you can
                    </button>
                </div>
            </div>
        );
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

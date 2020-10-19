// index.js
import React from 'react';
import ReactDOM from 'react-dom';

// class based component
class Header extends React.Component {
    render() {
        const {
            welcome,
            title,
            subtitle,
            author: { firstName, lastName },
            date,
        } = this.props.data;

        return (
            <header>
                <div className='header-wrapper'>
                    <h1>{welcome}</h1>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                    <p>
                        {firstName} {lastName}
                    </p>
                    <small>{date}</small>
                </div>
            </header>
        );
    }
}

const Message = ({ message }) => (
    <div>
        <h1>{message}</h1>
    </div>
);
const Login = () => (
    <div>
        <h3>Please Login</h3>
    </div>
);
const Welcome = (props) => (
    <div>
        <h1>Welcome to 30 Days Of React</h1>
    </div>
);

// A button component
const Button = ({ text, onClick, style }) => (
    <button style={style} onClick={onClick}>
        {text}
    </button>
);

// TechList Component
// class base component
class TechList extends React.Component {
    render() {
        const { techs } = this.props;
        const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
        return techsFormatted;
    }
}

// Main Component
// Class Component
class Main extends React.Component {
    render() {
        const {
            techs,
            greetPeople,
            handleTime,
            loggedIn,
            handleLogin,
            message,
        } = this.props;
        console.log(message);

        const status = loggedIn ? <Welcome /> : <Login />;
        return (
            <main>
                <div className='main-wrapper'>
                    <p>Prerequisite to get started react.js:</p>
                    <ul>
                        <TechList techs={this.props.techs} />
                    </ul>
                    {techs.length === 3 && (
                        <p>
                            You have all the prerequisite courses to get started
                            React
                        </p>
                    )}
                    <div>
                        <Button
                            text='Show Time'
                            onClick={handleTime}
                            style={buttonStyles}
                        />{' '}
                        <Button
                            text='Greet People'
                            onClick={greetPeople}
                            style={buttonStyles}
                        />
                        {!loggedIn && (
                            <p>
                                Please login to access more information about 30
                                Days Of React challenge
                            </p>
                        )}
                    </div>
                    <div style={{ margin: 30 }}>
                        <Button
                            text={loggedIn ? 'Logout' : 'Login'}
                            style={buttonStyles}
                            onClick={handleLogin}
                        />
                        <br />
                        {status}
                    </div>
                    <Message message={message} />
                </div>
            </main>
        );
    }
}

// CSS styles in JavaScript Object
const buttonStyles = {
    backgroundColor: '#61dbfb',
    padding: 10,
    border: 'none',
    borderRadius: 5,
    margin: '3px auto',
    cursor: 'pointer',
    fontSize: 22,
    color: 'white',
};

// Footer Component
// Class component
class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <footer>
                <div className='footer-wrapper'>
                    <p>Copyright {this.props.date.getFullYear()}</p>
                </div>
            </footer>
        );
    }
}

class App extends React.Component {
    state = {
        loggedIn: false,
        techs: ['HTML', 'CSS', 'JS'],
        message: 'Click show time or Greet people to change me',
        styles: {
            backgroundColor: '#fff',
        },
    };
    handleLogin = () => {
        this.setState({
            loggedIn: !this.state.loggedIn,
        });
    };
    showDate = (time) => {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];

        const month = months[time.getMonth()].slice(0, 3);
        const year = time.getFullYear();
        const date = time.getDate();
        return `${month} ${date}, ${year}`;
    };
    handleTime = () => {
        let message = this.showDate(new Date());
        this.setState({ message });
    };
    greetPeople = () => {
        let message = 'Welcome to 30 Days Of React Challenge, 2020';
        this.setState({ message });
    };

    changeBackground = () => {
        const styles = this.state.styles;
        const white = { backgroundColor: '#fff', color: '#000' };
        const orange = { backgroundColor: 'orange', color: '#fff' };
        const yellow = { backgroundColor: 'yellow', color: '#000' };
        const green = { backgroundColor: 'green', color: '#fff' };
        const indigo = { backgroundColor: 'indigo', color: '#fff' };
        const violet = { backgroundColor: 'violet', color: '#fff' };

        let newStyle;

        if (styles.backgroundColor === white.backgroundColor) {
            newStyle = orange;
        } else if (styles.backgroundColor === orange.backgroundColor) {
            newStyle = yellow;
        } else if (styles.backgroundColor === yellow.backgroundColor) {
            newStyle = green;
        } else if (styles.backgroundColor === green.backgroundColor) {
            newStyle = indigo;
        } else if (styles.backgroundColor === indigo.backgroundColor) {
            newStyle = violet;
        } else {
            newStyle = white;
        }

        this.setState({ styles: newStyle });
    };

    timer = () => {
        let time = setTimeout(() => {
            this.changeBackground();
        }, 3000);

        if (time === 24) {
            clearTimeout(time);
        }
    };

    render() {
        const data = {
            welcome: '30 Days Of React',
            title: 'Getting Started React',
            subtitle: 'JavaScript Library',
            author: {
                firstName: 'Asabeneh',
                lastName: 'Yetayeh',
            },
            date: 'Oct 9, 2020',
        };
        const techs = ['HTML', 'CSS', 'JavaScript'];

        return (
            <div className='app' style={this.state.styles}>
                <Header data={data} />

                <Main
                    techs={techs}
                    handleTime={this.handleTime}
                    greetPeople={this.greetPeople}
                    loggedIn={this.state.loggedIn}
                    handleLogin={this.handleLogin}
                    onClick={this.timer()}
                    message={this.state.message}
                />

                <Footer date={new Date()} />
            </div>
        );
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

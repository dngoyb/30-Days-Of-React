import React from 'react';
import ReactDOM from 'react-dom';

const hexaColor = () => {
    let str = '0123456789abcdef';
    let color = '';
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length);
        color += str[index];
    }
    return '#' + color;
};

const HexaColor = ({ numbers }) => {
    const list = numbers.map((color) => {
        color = hexaColor();
        let liStyle = {
            background: color,
        };
        console.log(color);
        return (
            <li key={color} style={liStyle}>
                {color}
            </li>
        );
    });
    return list;
};

let boxNumbers = (number) => {
    let arr = [];
    for (let i = 0; i <= number; i++) {
        arr.push(i);
    }
    return arr;
};

const Titles = (props) => {
    const data = props.data;
    return (
        <div className='titles'>
            <h1>{data.title}</h1>
            <h3>{data.subtitle}</h3>
        </div>
    );
};

const App = () => {
    const data = {
        title: '30 Days Of React',
        subtitle: 'Hexadecimal Colors',
    };

    const numbers = boxNumbers(31);
    return (
        <div className='app'>
            <Titles data={data} />
            <ul>
                <HexaColor numbers={numbers} />
            </ul>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

import logo from './logo.svg';
import { createElement } from 'react';
import { currentDate } from './date';
import './App.css';

const render = () => {
    let date = createElement('div', { className: 'date' }, currentDate());
    let link = createElement(
        'a',
        {
            className: 'App-link',
            href: 'https://reactjs.org',
            target: '_blank',
            rel: 'noopener noreferrer',
        },
        'Learn React',
    );

    const text = createElement(
        'p',
        null,
        'Edit',
        createElement('code', null, 'src/App.js'),
        'and save to reload.',
    );

    return createElement(
        'div',
        { className: 'App' },
        createElement(
            'header',
            { className: 'App-header' },
            createElement('img', {
                className: 'App-logo',
                src: logo,
                alt: 'logo',
            }),
            text,
            link,
            date,
        ),
    );
};

export const App = () => {
    return render();
};

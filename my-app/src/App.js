import logo from './logo.svg';
import { CURRENT_DATE } from './date';
import './App.css';

export const App = () => {
    return (
        //в return явно указываем, что возвращать - императивный
        // судя из видео HTML теги - декларативный.
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                {/* переменаная в декларативном виде */}
                <div class="date">{CURRENT_DATE}</div>
            </header>
        </div>
    );
};

import { useState } from 'react';
import styles from './App.module.css';

const render = () => {};

export const App = () => {
    const [numberBtns, setNumberBtns] = useState([
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
    ]);

    const actionBtns = ['+', '-', '=', 'reset'];

    const [operator, setOperator] = useState('');
    const [value, setValue] = useState('0');
    const [value1, setValue1] = useState('');
    const [finish, setFinish] = useState(false);

    let showResult = value + operator + value1;

    const handleNumber = (number) => {
        if (operator) {
            setValue1((prev) => prev + number);
        } else {
            setValue((prevValue) => {
                if (prevValue === '0' || number === '0') {
                    return number;
                } else {
                    return prevValue + number;
                }
            });
        }
    };

    const handleAction = (actionType) => {
        switch (actionType) {
            case 'reset':
                setValue('0');
                setValue1('');
                setOperator('');
                break;
            case '=':
                let res = '0';
                switch (operator) {
                    case '-':
                        res = +value - +value1;
                        setFinish(true);
                        break;
                    case '+':
                        res = +value + +value1;
                        setFinish(true);
                        break;
                    default:
                        break;
                }
                setValue(res);
                setValue1('');
                setOperator('');
                //TODO как то попроще тут можно?
                break;
            default:
                setOperator(actionType);
                setFinish(false);
                break;
        }
    };

    const createBtnAction = (btn) => {
        let name = btn;
        let classBtn = [styles.calcBtn];
        if (btn === '=' || btn === 'reset') {
            classBtn.push(styles.calcBtnFull);
        }
        if (btn === 'reset') {
            name = 'Сброс';
        }
        return (
            <div
                className={classBtn.join(' ')}
                key={btn}
                onClick={() => {
                    handleAction(btn);
                }}
            >
                {name}
            </div>
        );
    };

    return (
        <div className={styles.calc}>
            <div className={styles.calcWrapper}>
                {console.log(showResult)}
                <div
                    className={
                        finish ? styles.calcDisplayResult : styles.calcDisplay
                    }
                >
                    {showResult}
                </div>
                <div className={styles.calcBtnsWrapper}>
                    <div className={styles.calcNumbers}>
                        {numberBtns.map((number) => (
                            <div
                                className={[
                                    styles.calcNumber,
                                    styles.calcBtn,
                                ].join(' ')}
                                key={number}
                                onClick={() => {
                                    setFinish(false);
                                    handleNumber(number);
                                }}
                            >
                                {number}
                            </div>
                        ))}
                        {actionBtns.map((btn) => createBtnAction(btn))}
                    </div>
                </div>
            </div>
        </div>
    );
};

import classes from './Technologies.module.css';

function Technologies () {
    return (
        <div className={classes.technologies}>
            <div className="container">
                <div className="technologiesBody">
                    <h1 className="title">ReactJS</h1>
                    <ul className="list">
                        <li className={classes.item}>Знаю что такое "Компонента"</li>
                        <li className={classes.item}>Умею использовать <span>import</span> и <span>export</span></li>
                        <li className={classes.item}>Знаю как по новому использовать классы</li>
                        <li className={classes.item}>Знаю как расшифровывается SPA</li>
                        <li className={classes.item}>Что такое props для меня вообще не проблема</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Technologies;
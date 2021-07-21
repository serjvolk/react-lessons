import classes from './Knowledge.module.css';

function Knowledge () {
    return (
        <div className={classes.knowledge}>
            <div className="container">
                <div className="technologiesBody">
                    <h1 className="title">Что я уже умею делать ...</h1>
                    <ul className="list">
                        <li className={`${classes.item} ${classes.active}`}>Знаю что такое "Компонента"</li>
                        <li className={classes.item}>Умею использовать <span>import</span> и <span>export</span></li>
                        <li className={classes.item}>Знаю как расшифровывается SPA</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Knowledge;
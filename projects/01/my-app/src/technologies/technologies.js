import './technologies.css';

function Technologies () {
    return (
        <div className="technologies">
            <div className="container">
                <div className="technologies__body">
                    <h1 className="title">Что я уже умею делать ...</h1>
                    <ul className="list">
                        <li>Знаю что такое "Компонента"</li>
                        <li>Умею использовать <span>import</span> и <span>export</span></li>
                        <li>Знаю как расшифровывается SPA</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Technologies;
function Giraffe() {
    return (
        <div className="giraffe">
            <div className="icon">🦒</div>
            <div className="info">
                <h3>Giraffe</h3>
                <span>Height: 17 feet</span>
            </div>
        </div>
    );
}

ReactDOM.render((
    <>
        <h2>Africa</h2>
        <Giraffe />
        <div className="hedgehog">
            <div className="icon">🦔</div>
            <div className="info">
                <h3>Hedgehog</h3>
                <span>Height: 6 inches</span>
            </div>
        </div>
    </>
), document.querySelector('#root'));

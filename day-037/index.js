
function App() {
    const [isCustomCursor, setIsCustomCursor] = React.useState();

    function handleChange() {
        setIsCustomCursor(!isCustomCursor);
    }

    return (
        <>
            <label>
                <input type="checkbox" onChange={handleChange} />
                — Enable neon cursor
            </label>
            {isCustomCursor && <NeonCursor />}
        </>
    );
}

function NeonCursor() {
    const [postion, setPostion] = React.useState({ top: 0, left: 0 });

    React.useEffect(() => {
        handleMouseMove = (e) => {
            setPostion({
                top: e.pageY,
                left: e.pageX,
            });
        };
        document.addEventListener('mousemove', handleMouseMove);
        document.documentElement.classList.add('no-cursor');

        return () => {
            document.documentElement.classList.remove('no-cursor');
            document.removeEventListener('mousemove', handleMouseMove);
        }

    });

    return (
        <img
            src="https://practicum-content.s3.us-west-1.amazonaws.com/web-code/react/moved_cursor.svg"
            width={30}
            style={{
                position: 'absolute',
                top: postion.top,
                left: postion.left,
                pointerEvents: 'none',
            }}
        />
    );

}

ReactDOM.render(<App />, document.querySelector('#root'));


const sendButton = {
    buttonName: '"Send" button',
    click() {
        console.log("I am the " + this.buttonName);
    }
};

const button = document.querySelector('.btn');

button.addEventListener('click', () => {
    sendButton.click();
}); 
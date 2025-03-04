export default function TabButton({ children, onSelect }) {

    console.log('TAB COMPONENT FUNCTION');
    

    return (<li>
        <button onClick={onSelect}>
            {children}
        </button>
    </li>
    );
}
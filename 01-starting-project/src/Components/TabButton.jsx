export default function TabButton({ children, onSelect, isSelected}) {

    console.log('TAB COMPONENT FUNCTION');
    

    return (<li>
        <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
            {children}
        </button>
    </li>
    );
}
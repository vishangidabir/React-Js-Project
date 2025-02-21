function customrender(reactElement,container) {
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerText = reactElement.children    
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerText = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props:  {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'

};

const mainContainer = document.querySelector('#root')

customrender(reactElement,mainContainer)
function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);

    // Set text content safely
    domElement.textContent = reactElement.children;

    // Set attributes only if they exist
    if (reactElement.props?.href) {
        domElement.setAttribute('href', reactElement.props.href.trim());
    }
    if (reactElement.props?.target) {
        domElement.setAttribute('target', reactElement.props.target);
    }

    // Append the created DOM element to the container
    container.appendChild(domElement);
}

// Define the React-like element
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click the link and view the Google page',
};


// Get the container element
const mainContainer = document.querySelector('#root');

// Render the element
customRender(reactElement, mainContainer);

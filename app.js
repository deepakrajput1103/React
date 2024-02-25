
    //     const body1 = document.getElementById("root");
    // const heading = document.createElement('h1');
    // const message = document.createTextNode("Hello world");
    // heading.appendChild(message);
    // body1.appendChild(heading);

   

        // creating element for nested structure
        const parent = React.createElement("div",{id:"parent"},
        React.createElement("div",{id:"child"},
        [React.createElement("h1",{id:"heading 1"},"I am h1"),React.createElement("h2",{id:"heading 2"},"I am heading 2")]
        ))
        // const heading = React.createElement("h1",{
        //     id : "heading"
        // },"Hello world in React");
        const root = ReactDOM.createRoot(document.getElementById("root"))
        root.render(parent);
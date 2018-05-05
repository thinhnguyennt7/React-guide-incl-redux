function Person(props) {
  // instead props, we can use any other name
  return React.createElement(
    "div",
    { "class": "person" },
    React.createElement(
      "h1",
      null,
      props.name
    ),
    React.createElement(
      "p",
      null,
      " Your age: [",
      props.age,
      "]"
    )
  );
}

// Single page application
var app = React.createElement(
  "div",
  null,
  React.createElement(Person, { name: "Thinh", age: "21" }),
  React.createElement(Person, { name: "Nguyen", age: "25" })
);

ReactDOM.render(app, document.querySelector('#app'));

// Another way to render data to single page application
// ReactDOM.render(<Person name='Thinh' age='12' />, document.querySelector('#app'));


// Single page application: Only one HTML page, content í rendered on Client. All under one root

// Multi page applications: Multiple HTML pages, content í rendered on Server

/*
<div id= "parent">
<div id = "child">
<h1>Hellow World</h1>
<h2>Hi I'm H2</h2>
</div>

<div id = "child2">
<h1>Hellow World</h1>
<h2>Hi I'm H2</h2>
</div>
</div
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello React"),
    React.createElement("h2", {}, "I'm H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello React"),
    React.createElement("h2", {}, "I'm H2 Tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

console.log(parent);

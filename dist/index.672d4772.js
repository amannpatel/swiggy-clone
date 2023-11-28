/* const heading = React.createElement(
  "h1",
  { id: "heading", class: "header" },
  "Hello React CDN!!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
 */ const parent = React.createElement("div", {
    id: "heading"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "I'm an H1 tag."),
    React.createElement("h2", {}, "I'mm an H2 tag.")
]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.672d4772.js.map

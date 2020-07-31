"use strict";

function Homepage() {
  return (
    <div>
        <p> Welcome to our <a href = "/cards"> trading card site! </a> </p>
        <img src = "/static/img/balloonicorn.jpg" /> 
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));

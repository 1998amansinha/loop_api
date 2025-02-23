import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const Fetch = () => {
  const fetchExample1 = `fetch(url)`;
  const fetchExample2 = `fetch(url).then(function () {
    // handle the response
  })`;
  const fetchExample3 = `fetch(url)
    .then(function () {
      // handle the response
    })
    .catch(function () {
      // handle the error
    })`;
  const fetchExample4 = `<h1>Authors</h1>
<ul id="authors"></ul>  `;
  const fetchExample5 = `<h1>Authors</h1>
<ul id="authors"></ul>;
  const fetchExample5 =  <h1>Authors</h1>
<ul id="authors"></ul>

<script>
  const ul = document.getElementById('authors');
</script>`;
  const fetchExample6 = `<script>
  // ...

  const list = document.createDocumentFragment();
</script>`;

  const fetchExample7 = `<script>
  // ...

  const url = 'https://jsonplaceholder.typicode.com/users';
</script>`;
  const fetchExample8 = `<script>
  // ...

  fetch(url)
</script>`;
  const fetchExample9 = `<script>
  // ...

  fetch(url)
    .then((response) => {})
</script>`;

  const fetchExample10 = `<script>
  // ...

  fetch(url)
    .then((response) => {
      return response.json();
    })
</script>`;

  const fetchExample11 = `<script>
  // ...

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {})
</script>`;

  const fetchExample12 = `<script>
  // ...

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let authors = data;
    })
</script>`;

  const fetchExample13 = `<script>
  // ...

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let authors = data;

      authors.map(function(author) {

      });
    })
</script>`;

  const fetchExample14 = `<script>
  // ...

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let authors = data;

      authors.map(function(author) {
        let li = document.createElement('li');
        let name = document.createElement('h2');
        let email = document.createElement('span');
      });
    })
</script> `;

  const fetchExample15 = `<script>
  // ...

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let authors = data;

      authors.map(function(author) {
        let li = document.createElement('li');
        let name = document.createElement('h2');
        let email = document.createElement('span');

        name.innerHTML = author.name;
        email.innerHTML = {author.email}
      });
    })
</script>`;

  const fetchExample16 = `<script>
  // ...

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let authors = data;

      authors.map(function(author) {
        let li = document.createElement('li');
        let name = document.createElement('h2');
        let email = document.createElement('span');

        name.innerHTML = author.name
        email.innerHTML = author.email;

        li.appendChild(name);
        li.appendChild(email);
        list.appendChild(li);
      });
    })

  ul.appendChild(list);
</script>`;

  const fetchExample17 = `<script>
  // ...

  fetch(url)
    .then((response) => {
      // ...
    })
    .then((data) => {
      // ...
    })
    .catch(function(error) {
      console.log(error);
    });

  // ...
</script>`;

  const fetchExample18 = `<h1>Authors</h1>
<ul id="authors"></ul>

<script>
  const ul = document.getElementById('authors');
  const list = document.createDocumentFragment();
  const url = 'https://jsonplaceholder.typicode.com/users';

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let authors = data;

      authors.map(function(author) {
        let li = document.createElement('li');
        let name = document.createElement('h2');
        let email = document.createElement('span');

        name.innerHTML = author.name};
        email.innerHTML = author.email;

        li.appendChild(name);
        li.appendChild(email);
        list.appendChild(li);
      });
    }).
    .catch(function(error) {
      console.log(error);
    });

  ul.appendChild(list);
</script>`;

  const fetchExample19 = `const url = 'https://jsonplaceholder.typicode.com/users';`;
  const fetchExample20 = `  // ...

let data = {
  name: 'Sammy'
}`;
  const fetchExample21 = `// ...

let fetchData = {

}`;
  const fetchExample22 = `// ...

let fetchData = {
  method: 'POST',
  body: JSON.stringify(data),
  headers: new Headers({
    'Content-Type': 'application/json; charset=UTF-8'
  })
}`;

  const fetchExample23 = `// ...

fetch(url, fetchData)`;

  const fetchExample24 = `// ...

fetch(url, fetchData)
  .then(function() {
    // Handle response you get from the API
  });`;

  const fetchExample25 = `const url = 'https://jsonplaceholder.typicode.com/users';

let data = {
  name: 'Sammy'
}

let fetchData = {
  method: 'POST',
  body: JSON.stringify(data),
  headers: new Headers({
    'Content-Type': 'application/json; charset=UTF-8'
  })
}

fetch(url, fetchData)
  .then(function() {
    // Handle response you get from the API
  });`;

  const fetchExample26 = `const url = "https://jsonplaceholder.typicode.com/users";

let data = {
  name: 'Sammy'
}

let request = new Request(url, {
  method: 'POST',
  body: JSON.stringify(data),
  headers: new Headers({
    'Content-Type': 'application/json; charset=UTF-8'
  })
});

fetch(request)
  .then(function() {
    // Handle response you get from the API
  });
`;

  const fetchExample27 = `import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error('Error fetching:', error));
  }, []);

  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}

export default App;`;

  const fetchExample28 = `<script>
export default {
  data() {
    return { data: null };
  },
  async mounted() {
    try {
      const response = await fetch('https://api.example.com/data');
      this.data = await response.json();
    } catch (error) {
      console.error('Error fetching:', error);
    }
  }
};
</script>`;

  const fetchExample29 = ` import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  template: '<p className="my-6 text-xl">{{ data | json }}</p>'
})
export class DataComponent implements OnInit {
  data: any;

  async ngOnInit() {
    try {
      const response = await fetch('https://api.example.com/data');
      this.data = await response.json();
    } catch (error) {
      console.error('Error fetching:', error);
    }
  }
}`;

  return (
    <div className="flex flex-col items-center py-10 mx-auto  bg-cover min-h-screen">
      <div className="max-w-3xl font-serif">
        <h1 className="text-5xl font-bold mb-8">
          How to Use JavaScript Fetch API
        </h1>
        <p className="my-4 text-xl">
          There was a time when <strong>XMLHttpRequest</strong> was used to make
          API requests. It didn’t include Promises, and it didn’t make for clean
          JavaScript code. Using jQuery, you could use the cleaner syntax of{" "}
          <strong>jQuery.ajax()</strong>.
        </p>
        <p className="my-6 text-xl">
          Now, JavaScript has its own built-in way to make API requests. This is
          the Fetch API, a new standard to make server requests with Promises,
          but which also includes additional features.
        </p>

        <h2 className="text-4xl font-semibold my-10">
          Step 1 — Getting Started with Fetch API Syntax
        </h2>
        <p className="my-2 text-xl">
          One approach to using the Fetch API is by passing <code>fetch()</code>{" "}
          the URL of the API as a parameter:
        </p>

        {/* First Code Block */}
        <div className="relative bg-gray-900 text-white rounded-lg overflow-hidden">
          <button
            className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-sm rounded"
            onClick={() => navigator.clipboard.writeText(fetchExample1)}
          >
            Copy
          </button>
          <SyntaxHighlighter language="javascript" style={dracula}>
            {fetchExample1}
          </SyntaxHighlighter>
        </div>

        <p className="my-6 text-xl">
          The <code>fetch()</code> method returns a Promise. After the{" "}
          <code>fetch()</code> method, include the Promise method{" "}
          <code>.then()</code>:
        </p>

        {/* Second Code Block */}
        <div className="relative bg-gray-900 text-white rounded-lg overflow-hidden">
          <button
            className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-sm rounded"
            onClick={() => navigator.clipboard.writeText(fetchExample2)}
          >
            Copy
          </button>
          <SyntaxHighlighter language="javascript" style={dracula}>
            {fetchExample2}
          </SyntaxHighlighter>
        </div>

        <p className="my-6 text-xl">
          If the Promise returned is <code>resolve</code>, the function within
          the
          <code>.then()</code> method is executed. That function contains the
          code for handling the data received from the API.
        </p>
        <p className="my-6 text-xl">
          After the then() method, include the catch() method:
        </p>

        {/* Third Code Block */}
        <div className="relative bg-gray-900 text-white rounded-lg overflow-hidden">
          <button
            className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-sm rounded"
            onClick={() => navigator.clipboard.writeText(fetchExample3)}
          >
            Copy
          </button>
          <SyntaxHighlighter language="javascript" style={dracula}>
            {fetchExample3}
          </SyntaxHighlighter>
        </div>
        <p className="mb-4 text-xl">
          The API you call using fetch() may be down or other errors may occur.
          If this happens, the reject promise will be returned. The catch method
          is used to handle reject. The code within catch() will be executed if
          an error occurs when calling the API of your choice.
        </p>
        <p className="mb-4 text-xl">
          With an understanding of the syntax for using the Fetch API, you can
          now move on to using fetch() on a real API.
        </p>
        <h2 className="text-4xl font-semibold my-10">
          Step 2 — Using Fetch to get Data from an API
        </h2>
        <p className="mb-4 text-xl">
          The following code samples will be based on the JSONPlaceholder API.
          Using the API, you will get ten users and display them on the page
          using JavaScript. This tutorial will retrieve data from the
          JSONPlaceholder API and display it in list items inside the author’s
          list.
        </p>
        <p className="mb-4 text-xl">
          Begin by creating an HTML file and adding a heading and unordered list
          with the id of authors:
        </p>

        {/* Fourth Code Block */}
        <div className="relative bg-gray-900 text-white rounded-lg overflow-hidden">
          Authors.html
          <button
            className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-sm rounded"
            onClick={() => navigator.clipboard.writeText(fetchExample4)}
          >
            Copy
          </button>
          <SyntaxHighlighter language="html" style={dracula}>
            {fetchExample4}
          </SyntaxHighlighter>
        </div>
        <p className="mb-4 text-xl">
          Now add script tags to the bottom of your HTML file and use a DOM
          selector to grab the ul. Use getElementById with authors as the
          argument:
        </p>
        <div className="relative bg-gray-900 text-white rounded-lg overflow-hidden">
          Authors.html
          <button
            className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-sm rounded"
            onClick={() => navigator.clipboard.writeText(fetchExample5)}
          >
            Copy
          </button>
          <SyntaxHighlighter language="html" style={dracula}>
            {fetchExample5}
          </SyntaxHighlighter>
        </div>
        <p className="my-6 text-xl">
          Remember, authors is the id for the previously created ul.
        </p>
        <p className="my-6 text-xl">
          Next, create a list that is a DocumentFragment:
        </p>
        <div className="relative bg-gray-900 text-white rounded-lg overflow-hidden">
          Authors.html
          <button
            className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-sm rounded"
            onClick={() => navigator.clipboard.writeText(fetchExample6)}
          >
            Copy
          </button>
          <SyntaxHighlighter language="html" style={dracula}>
            {fetchExample6}
          </SyntaxHighlighter>
        </div>
        <p className="my-6 text-xl">
          All the appended list items will be added to list. A DocumentFragment
          is not part of the active document tree structure. This has the
          benefit of not causing performance-affecting redraws when the Document
          Object Model is changed.
        </p>
        <p className="my-6 text-xl">
          Create a constant variable called url which will hold the API URL that
          will return ten random users:
        </p>
        <div className="relative bg-gray-900 text-white rounded-lg overflow-hidden">
          Authors.html
          <button
            className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-sm rounded"
            onClick={() => navigator.clipboard.writeText(fetchExample7)}
          >
            Copy
          </button>
          <SyntaxHighlighter language="html" style={dracula}>
            {fetchExample7}
          </SyntaxHighlighter>
        </div>
        <p className="my-6 text-xl">
          Now using the Fetch API, call the JSONPlaceholder API using fetch()
          with url as the argument:
        </p>
        <div className="relative bg-gray-900 text-white rounded-lg overflow-hidden">
          Authors.html
          <button
            className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-sm rounded"
            onClick={() => navigator.clipboard.writeText(fetchExample8)}
          >
            Copy
          </button>
          <SyntaxHighlighter language="html" style={dracula}>
            {fetchExample8}
          </SyntaxHighlighter>
        </div>
        <p className="my-6 text-xl">
          You are calling the Fetch API and passing in the URL to the
          JSONPlaceholder API. Then a response is received. However, the
          response you get is not JSON, but an object with a series of methods
          that can be used depending on what you want to do with the
          information. To convert the object returned into JSON, use the json()
          method.
        </p>
        <p className="my-6 text-xl">
          Add the then() method which will contain a function with a parameter
          called response:
        </p>
        <div className="relative bg-gray-900 text-white rounded-lg overflow-hidden">
          Authors.html
          <button
            className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-sm rounded"
            onClick={() => navigator.clipboard.writeText(fetchExample9)}
          >
            Copy
          </button>
          <SyntaxHighlighter language="html" style={dracula}>
            {fetchExample9}
          </SyntaxHighlighter>
        </div>
        <p className="my-6 text-xl">
          The response parameter takes the value of the object returned from
          fetch(url). Use the json() method to convert response into JSON data:
        </p>
        <div className="relative bg-gray-900 text-white rounded-lg overflow-hidden">
          Authors.html
          <button
            className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-sm rounded"
            onClick={() => navigator.clipboard.writeText(fetchExample10)}
          >
            Copy
          </button>
          <SyntaxHighlighter language="html" style={dracula}>
            {fetchExample10}
          </SyntaxHighlighter>
        </div>
        <p className="my-6 text-xl">
          The JSON data still needs to be processed. Add another then()
          statement with a function that has an argument called data:
        </p>
        <div className="relative bg-gray-900 text-white rounded-lg overflow-hidden">
          Authors.html
          <button
            className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-sm rounded"
            onClick={() => navigator.clipboard.writeText(fetchExample11)}
          >
            Copy
          </button>
          <SyntaxHighlighter language="html" style={dracula}>
            {fetchExample11}
          </SyntaxHighlighter>
        </div>
        <p className="my-6 text-xl">
          Within this function, create a variable called authors that is set
          equal to data:
        </p>
        <div className="relative bg-gray-900 text-white rounded-lg overflow-hidden">
          Authors.html
          <button
            className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-sm rounded"
            onClick={() => navigator.clipboard.writeText(fetchExample12)}
          >
            Copy
          </button>
          <SyntaxHighlighter language="html" style={dracula}>
            {fetchExample12}
          </SyntaxHighlighter>
        </div>
        <p className="my-6 text-xl">
          For each author in authors, you will want to create a list item that
          displays their name. The map() method is suited for this pattern:
        </p>
        <div className="relative bg-gray-900 text-white rounded-lg overflow-hidden">
          Authors.html
          <button
            className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-sm rounded"
            onClick={() => navigator.clipboard.writeText(fetchExample13)}
          >
            Copy
          </button>
          <SyntaxHighlighter language="html" style={dracula}>
            {fetchExample13}
          </SyntaxHighlighter>
        </div>
        <p className="my-6 text-xl">
          Within your map function, create a variable called li that will be set
          equal to createElement with li (the HTML element) as the argument.
          Also, create an h2 for name and a span for email:
        </p>
        <div className="relative bg-gray-900 text-white rounded-lg overflow-hidden">
          Authors.html
          <button
            className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-sm rounded"
            onClick={() => navigator.clipboard.writeText(fetchExample14)}
          >
            Copy
          </button>
          <SyntaxHighlighter language="html" style={dracula}>
            {fetchExample14}
          </SyntaxHighlighter>
        </div>
        <p className="my-6 text-xl">
          The h2 element will contain the name of the author. The span element
          will contain the email of the author. The innerHTML property and
          string interpolation will allow you to do this:
        </p>
        <div className="relative bg-gray-900 text-white rounded-lg overflow-hidden">
          Authors.html
          <button
            className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-sm rounded"
            onClick={() => navigator.clipboard.writeText(fetchExample15)}
          >
            Copy
          </button>
          <SyntaxHighlighter language="html" style={dracula}>
            {fetchExample15}
          </SyntaxHighlighter>
        </div>
        <p className="my-6 text-xl">
          Next, connect these DOM elements with appendChild:
        </p>
        <div className="relative bg-gray-900 text-white rounded-lg overflow-hidden">
          Authors.html
          <button
            className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-sm rounded"
            onClick={() => navigator.clipboard.writeText(fetchExample16)}
          >
            Copy
          </button>
          <SyntaxHighlighter language="html" style={dracula}>
            {fetchExample16}
          </SyntaxHighlighter>
        </div>
        <p className="my-6 text-xl">
          Note that each list item is being appended to the DocumentFragment
          list. Once the map is complete, the list is appended to the ul
          unordered list element.
        </p>
        <p className="my-6 text-xl">
          With both then() functions completed, you can now add the catch()
          function. This function will log the potential error to the console:
        </p>
        <div className="relative bg-gray-900 text-white rounded-lg overflow-hidden">
          Authors.html
          <button
            className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-sm rounded"
            onClick={() => navigator.clipboard.writeText(fetchExample17)}
          >
            Copy
          </button>
          <SyntaxHighlighter language="html" style={dracula}>
            {fetchExample17}
          </SyntaxHighlighter>
        </div>
        <p className="my-6 text-xl">
          This is the full code of the request you created:
        </p>
        <div className="relative bg-gray-900 text-white rounded-lg overflow-hidden">
          Authors.html
          <button
            className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-sm rounded"
            onClick={() => navigator.clipboard.writeText(fetchExample18)}
          >
            Copy
          </button>
          <SyntaxHighlighter language="html" style={dracula}>
            {fetchExample18}
          </SyntaxHighlighter>
        </div>
        <p className="my-6 text-xl"></p>

        {/* step 3 */}
        <h2 className="text-4xl font-semibold my-10">
          Step 3 — Handling POST Requests
        </h2>
        <p className="my-6 text-xl">
          Fetch defaults to GET requests, but you can use all other types of
          requests, change the headers, and send data. Let’s create a POST
          request.
        </p>
        <p className="my-6 text-xl">
          First, include a constant variable that holds the link to the
          JSONPlaceholder API:
        </p>
        <div className="relative bg-gray-900 text-white rounded-lg overflow-hidden">
          new-authors.html
          <button
            className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-sm rounded"
            onClick={() => navigator.clipboard.writeText(fetchExample19)}
          >
            Copy
          </button>
          <SyntaxHighlighter language="html" style={dracula}>
            {fetchExample19}
          </SyntaxHighlighter>
        </div>
        <p className="my-6 text-xl">
          Next, you need to set your object and pass it as the second argument
          of the fetch function. This will be an object called data with the key
          name and value Sammy (or your name):
        </p>
        <div className="relative bg-gray-900 text-white rounded-lg overflow-hidden">
          new-authors.html
          <button
            className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-sm rounded"
            onClick={() => navigator.clipboard.writeText(fetchExample20)}
          >
            Copy
          </button>
          <SyntaxHighlighter language="html" style={dracula}>
            {fetchExample20}
          </SyntaxHighlighter>
        </div>
        <p className="my-6 text-xl">
          Since this is a POST request, you will need to state that explicitly.
          Create an object called fetchData:
        </p>
        <div className="relative bg-gray-900 text-white rounded-lg overflow-hidden">
          new-authors.html
          <button
            className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-sm rounded"
            onClick={() => navigator.clipboard.writeText(fetchExample21)}
          >
            Copy
          </button>
          <SyntaxHighlighter language="html" style={dracula}>
            {fetchExample21}
          </SyntaxHighlighter>
        </div>
        <p className="my-6 text-xl">
          This object needs to include three keys: method, body, and headers:
        </p>
        <div className="relative bg-gray-900 text-white rounded-lg overflow-hidden">
          new-authors.html
          <button
            className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-sm rounded"
            onClick={() => navigator.clipboard.writeText(fetchExample22)}
          >
            Copy
          </button>
          <SyntaxHighlighter language="html" style={dracula}>
            {fetchExample22}
          </SyntaxHighlighter>
        </div>
        <p className="my-6 text-xl">
          The method key will have the value 'POST'. body will be set equal to
          the JSON.stringify() format of the data object that was just created.
          headers will have the value of 'Content-Type': 'application/json;
          charset=UTF-8'
        </p>
        <p className="my-6 text-xl">
          The Headers interface is a property of the Fetch API, which allows you
          to perform actions on HTTP request and response headers. This article
          called How To Define Routes and HTTP Request Methods in Express can
          provide you with more information.
        </p>
        <p className="my-6 text-xl">
          With this code in place, the POST request can be made using the Fetch
          API. You will include url and fetchData as arguments for your fetch
          POST request:
        </p>
        <div className="relative bg-gray-900 text-white rounded-lg overflow-hidden">
          new-authors.html
          <button
            className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-sm rounded"
            onClick={() => navigator.clipboard.writeText(fetchExample23)}
          >
            Copy
          </button>
          <SyntaxHighlighter language="html" style={dracula}>
            {fetchExample23}
          </SyntaxHighlighter>
        </div>
        <p className="my-6 text-xl">
          The then() function will include code that handles the response
          received from the JSONPlaceholder API:
        </p>
        <div className="relative bg-gray-900 text-white rounded-lg overflow-hidden">
          new-authors.html
          <button
            className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-sm rounded"
            onClick={() => navigator.clipboard.writeText(fetchExample24)}
          >
            Copy
          </button>
          <SyntaxHighlighter language="html" style={dracula}>
            {fetchExample24}
          </SyntaxHighlighter>
        </div>
        <p className="my-6 text-xl">
          This is the full code of the request you created:
        </p>
        <div className="relative bg-gray-900 text-white rounded-lg overflow-hidden">
          new-authors.html
          <button
            className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-sm rounded"
            onClick={() => navigator.clipboard.writeText(fetchExample25)}
          >
            Copy
          </button>
          <SyntaxHighlighter language="html" style={dracula}>
            {fetchExample25}
          </SyntaxHighlighter>
        </div>
        <p className="my-6 text-xl">
          Alternatively, you can pass fetch() a Request object.
        </p>
        <div className="relative bg-gray-900 text-white rounded-lg overflow-hidden">
          new-authors.html
          <button
            className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-sm rounded"
            onClick={() => navigator.clipboard.writeText(fetchExample26)}
          >
            Copy
          </button>
          <SyntaxHighlighter language="html" style={dracula}>
            {fetchExample26}
          </SyntaxHighlighter>
        </div>
        <p className="my-6 text-xl">
          With this approach, request can be used as the sole argument for
          fetch(), replacing url and fetchData.
        </p>
        <p className="my-6 text-xl">
          Now you know two methods for creating and executing POST requests with
          the Fetch API.
        </p>

        {/* fetch in react */}

        <h1 className="text-5xl font-bold mb-8">
          Using Fetch API in JavaScript Frameworks
        </h1>
        <h2 className="text-4xl font-semibold my-10">1. Fetch API in React</h2>
        <p className="my-6 text-xl">
          React applications often use Fetch API inside useEffect() to fetch
          data when a component mounts:
        </p>
        <div className="relative bg-gray-900 text-white rounded-lg overflow-hidden">
          new-authors.html
          <button
            className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-sm rounded"
            onClick={() => navigator.clipboard.writeText(fetchExample27)}
          >
            Copy
          </button>
          <SyntaxHighlighter language="html" style={dracula}>
            {fetchExample27}
          </SyntaxHighlighter>
        </div>
        <h2 className="text-4xl font-semibold my-10">2. Fetch API in Vue.js</h2>
        <p className="my-6 text-xl">
          In Vue.js, Fetch API is commonly used inside the mounted() lifecycle
          hook:
        </p>
        <div className="relative bg-gray-900 text-white rounded-lg overflow-hidden">
          new-authors.html
          <button
            className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-sm rounded"
            onClick={() => navigator.clipboard.writeText(fetchExample28)}
          >
            Copy
          </button>
          <SyntaxHighlighter language="html" style={dracula}>
            {fetchExample28}
          </SyntaxHighlighter>
        </div>
        <h2 className="text-4xl font-semibold my-10">
          3. Fetch API in Angular
        </h2>
        <p className="my-6 text-xl">
          In Angular, Fetch API can be used within services using HttpClient,
          but if using native Fetch API, you can implement it inside a
          component:
        </p>
        <div className="relative bg-gray-900 text-white rounded-lg overflow-hidden">
          new-authors.html
          <button
            className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-sm rounded"
            onClick={() => navigator.clipboard.writeText(fetchExample29)}
          >
            Copy
          </button>
          <SyntaxHighlighter language="html" style={dracula}>
            {fetchExample29}
          </SyntaxHighlighter>
        </div>
        <p className="my-6 text-xl">
          For large applications, Angular’s built-in HttpClientModule is
          recommended for better scalability.
        </p>
      </div>
    </div>
  );
};

export default Fetch;

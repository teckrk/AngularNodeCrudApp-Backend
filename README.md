<h1>AngularNodeCrudApp-Backend</h1>

<img src="Screenshot (20).png" alt="Project Overview" width="100%" />
<img src="https://via.placeholder.com/800x400" alt="API Flow" width="100%" />

<h2>📋 Project Overview</h2>
<p>
  The <strong>AngularNodeCrudApp-Backend</strong> is a RESTful API developed using 
  <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong>. 
  It serves as the backend for a CRUD (Create, Read, Update, Delete) application. 
  This project provides a reliable and scalable API to support data operations, ensuring smooth communication between the frontend and the database.
</p>

<h2>🌟 Features</h2>
<ul>
  <li><strong>CRUD Operations:</strong> Seamless handling of Create, Read, Update, and Delete operations.</li>
  <li><strong>RESTful API:</strong> Fully structured and scalable REST endpoints.</li>
  <li><strong>Database Integration:</strong> MongoDB for efficient data storage and retrieval.</li>
  <li><strong>Error Handling:</strong> Robust error handling for a smooth user experience.</li>
  <li><strong>Environment Variables:</strong> Securely managed configuration using <code>.env</code>.</li>
</ul>

<h2>🛠️ Technologies Used</h2>
<ul>
  <li><strong>Node.js:</strong> JavaScript runtime environment.</li>
  <li><strong>Express.js:</strong> Fast and minimalist backend framework.</li>
  <li><strong>MongoDB:</strong> NoSQL database for storing application data.</li>
  <li><strong>Mongoose:</strong> Object Data Modeling (ODM) for MongoDB.</li>
  <li><strong>dotenv:</strong> Environment variable management.</li>
</ul>

<h2>🚀 Getting Started</h2>

<h3>Prerequisites</h3>
<p>Ensure you have the following installed on your machine:</p>
<ul>
  <li><a href="https://nodejs.org/" target="_blank">Node.js</a></li>
  <li><a href="https://www.mongodb.com/try/download/community" target="_blank">MongoDB</a></li>
</ul>

<h3>Installation</h3>
<ol>
  <li>Clone the repository:
    <pre><code>git clone https://github.com/teckrk/AngularNodeCrudApp-Backend.git
cd AngularNodeCrudApp-Backend
    </code></pre>
  </li>
  <li>Install dependencies:
    <pre><code>npm install</code></pre>
  </li>
  <li>Configure the environment variables:
    <p>Create a <code>.env</code> file in the root directory and add your MongoDB URI and other configurations:</p>
    <pre><code>PORT=5000
MONGO_URI=your_mongodb_connection_string
    </code></pre>
  </li>
  <li>Start the server:
    <pre><code>npm start</code></pre>
  </li>
  <li>Access the API at:
    <pre><code>http://localhost:5000</code></pre>
  </li>
</ol>

<h2>📚 API Endpoints</h2>
<table>
  <thead>
    <tr>
      <th>Method</th>
      <th>Endpoint</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>/api/items</td>
      <td>Fetch all items</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/api/items</td>
      <td>Create a new item</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/api/items/:id</td>
      <td>Fetch a single item</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/api/items/:id</td>
      <td>Update an existing item</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/api/items/:id</td>
      <td>Delete an item</td>
    </tr>
  </tbody>
</table>

<h2>📂 Project Structure</h2>
<pre><code>
AngularNodeCrudApp-Backend/
├── models/        # MongoDB models
├── routes/        # API routes
├── controllers/   # Business logic
├── config/        # Database and environment configurations
├── server.js      # Application entry point
└── .env.example   # Environment variables example
</code></pre>

<h2>📝 License</h2>
<p>
  This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.
</p>

<h2>🤝 Contributing</h2>
<p>
  Contributions are welcome! Feel free to submit issues or pull requests to improve this project.
</p>

<h2>📬 Contact</h2>
<p>
  For questions or suggestions, feel free to reach out:
  <ul>
    <li><strong>Author:</strong> <a href="https://github.com/teckrk" target="_blank">Teckrk</a></li>
  </ul>
</p>

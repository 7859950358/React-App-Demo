import './logo.svg';
import './App.css';
import img1 from './img/1.jpeg';

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>

        <p className="lorem-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quaerat qui a doloribus omnis odit voluptates obcaecati voluptas? Maiores incidunt architecto ad eaque reiciendis iste commodi quae mollitia sunt! Recusandae!</p>

        <img src="https://t3.ftcdn.net/jpg/05/62/54/02/360_F_562540214_unXDmpcHlTdImYhQE7dPBXZEWfFyAeeH.jpg" width="100%" />
        <br />
        <img src={img1} width="500px" />
      </header>
    </>
  );
}

export default App;

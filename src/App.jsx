import './index.css';
import Header from './Header.jsx';

function App() {
  
  return (
    <div className="
      min-h-screen flex flex-col
      vaporwave-background text-text-light dark:text-text-dark
      ">
      <Header/>
      <main className="flex flex-col items-center justify-center flex-1 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold p-4">Welcome to Cyberpunk Study</h1>
        <h1 className="text-2xl lg:text-4xl font-bold p-4">This is a work in progress website that will eventually host a React app for mixing vaporwave music and live police scanner live streams.</h1>
        <h1 className="text-2xl lg:text-4xl p-4">For more information on the development of this project visit the 
         <a href="https://github.com/thadigus/cyberpunk-study" className="text-blue-600 italic"> GitHub repository</a>. 
        </h1>
      </main>
    </div>
  );
}

export default App;
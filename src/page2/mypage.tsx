// Define the Home function
function Home() {
    return (
      <div>
        <h1>Welcome to the Home Page</h1>
        <p>This is the home page of our practical project.</p>
      </div>
    );
  }
  
  // Define the MyPage component that uses the Home function
  function MyPage() {
    return (
      <div>
        <Home />
      </div>
    );
  }
  
  // Usage of MyPage component somewhere in your application
  function App() {
    return (
      <div>
        <MyPage />
      </div>
    );
  }
  
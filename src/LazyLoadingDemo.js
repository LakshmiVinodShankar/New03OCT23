import React, { useState, lazy, Suspense } from 'react';

// Create a lazy-loaded component
const LazyLoadedComponent = lazy(() => import('./LazyLoadedComponent'));

function App() {
  const [showLazyComponent, setShowLazyComponent] = useState(false);

  // Function to load the lazy-loaded component
  const loadLazyComponent = () => {
    setShowLazyComponent(true);
  };

  return (
    <div>
      <h1>Lazy Loading Example- TestNews</h1>

      <button onClick={loadLazyComponent}>Load Lazy Component</button>

      {/* Conditionally render the lazy-loaded component */}
      {showLazyComponent && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyLoadedComponent />
        </Suspense>
      )}
    </div>
  );
}

export default App;

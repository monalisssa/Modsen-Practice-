import React, {useEffect, useState} from 'react';
import './App.css';

interface ImageObject {
  message: string,
  status: string
}


function App() {

  const [loadedImage, setLoadedImage] = useState<ImageObject | null>(null)

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => setLoadedImage(data))
        .catch(err => console.log(err))
  }, []);


  return (
    <div className="App">
      {loadedImage ?
          <div>
            <h3>Random dog image:</h3>
            <img src={loadedImage.message} alt="Random dog"/>
          </div>

          :
          <p>Loading...</p>
      }
    </div>
  );
}

export default App;

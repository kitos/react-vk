import React from 'react';
import { VK, Application } from 'react-vk';

const App = () => {
  return (
    <div className="App-content">
      <h2>App Component</h2>
      <h4>To use App Widget:</h4>
      <pre style={{ width: '60%' }}>
        {`
import {VK, Application} from 'react-vk';

const App = () => {
	return (
	    <VK apiId={your_api_id}>
                <Application appId={5327745} />
            </VK>
	)
};`}
      </pre>
      <h4>Result:</h4>
      <VK apiId={6247321}>
        <Application appId={5327745} />
      </VK>
      <h5>
        More info you can find on{' '}
        <b>
          <a href="https://vk.com/dev/widget_app">VK API</a>
        </b>
      </h5>
    </div>
  );
};

export default App;

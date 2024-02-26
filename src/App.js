import React from 'react';
import './App.css';
import Video from './component/Video';


function App() {

  const videos = [
    {
      id: 1,
      source: 'https://img23.ropose.com/video/mvid/bISCoHc/uBKy_315560961836500fdd44d11-be16-474e-aac5-620df3d3e96a_4275937a_a822.mp4',
      title: 'Short Video 1',
    },
    {
      id: 2,
      source: 'https://img23.ropose.com/video/mvid/bISCoHc/uBKy_315560961836500fdd44d11-be16-474e-aac5-620df3d3e96a_4275937a_a822.mp4',
      title: 'Short Video 2',
    },
    {
      id: 3,
      source: 'https://img23.ropose.com/video/mvid/bISCoHc/uBKy_315560961836500fdd44d11-be16-474e-aac5-620df3d3e96a_4275937a_a822.mp4',
      title: 'Short Video 1',
    },
    {
      id: 4,
      source: 'https://img23.ropose.com/video/mvid/bISCoHc/uBKy_315560961836500fdd44d11-be16-474e-aac5-620df3d3e96a_4275937a_a822.mp4',
      title: 'Short Video 2',
    }]
    

  return (
    <div className="App">
      <h1>Youtube Shorts</h1>
<div className='app__videos'>
      {videos.map((video) => (
          <Video key={video.id} videoSource={video.source} title={video.title} />
        ))}
      </div>
    </div>

  );
}

export default App;

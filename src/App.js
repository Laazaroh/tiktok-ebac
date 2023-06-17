import './App.css';
import Video from './pages/Video';

function App() {
  return (
    <div className="App">
      <div className='app_videos'>
      <Video 
        likes={100}
        messenges={200}
        shares={300}
        name="fulano"
        description="um gato goleiro"
        music="qualquer musica - fulano 2"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
      />

      </div>
    </div>
  );
}

export default App;

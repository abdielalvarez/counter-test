import Counter from './components/Counter';
import Text from './components/Text';
import './styles/App.css'

function App() {
  const credits = 'Counter React App done by Abdiel Álvarez'
  return (
    <div className='app'>
      <Text>{credits}</Text>
      <Counter />
    </div>
  );
}

export default App;


import './App.css'
import Slider from './components/Slider'
function App() {
  const url = [
    'image6.jpg', 'image1.jpg', 'image2.jpg', 'image3.jpg', 'image3.jpg'
    , 'image4.jpg', 'image5.jpg',
  ]
  return (
    <>
      <h1>ImageSlider</h1>
      <Slider url={url} />
    </>
  )
}

export default App

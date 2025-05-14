// Props 연습

import './App.css'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';
import Button from './components/Button.jsx';

function App() {

  const btnProps={
    text:"메일",
    color:"red",
    img:"a.jpg",
    alt:"대체텍스트"
  }

  return (
    <>
      {/* <Header />
      <Main />
      <Footer /> */}
      <Button {...btnProps}/>
      <Button text="카페" bgColor="red"/>
      <Button text="블로그">
       <div> 자식 element</div>
      </Button>
      <Button text="쇼핑">
       <Footer/>
      </Button>

    </>
  )
}

export default App

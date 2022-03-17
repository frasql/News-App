import './App.css';
import Header from './components/Header';
import { useRef, useState, useEffect } from 'react';
import Card from './UI/Card';
import Modal from './UI/Modal';


const App = ()=> {
  const [newsList, setNewsList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  let InputTitle = useRef(null);

  const onSearch = ()=> {
    setFilteredData(newsList.filter(item => item.title.includes(InputTitle.current.value)))
  }

  const closeModal = () => {
    setIsOpen(false);
  }


  useEffect(()=>{
    fetch("https://saurav.tech/NewsAPI//top-headlines/category/technology/us.json")
    .then(resp => {return resp.json()})
    .then(data => {
      let array_data = [];
      for(let i=0; i<data["articles"].length; i++) {
        data["articles"][i].id = i;
        array_data.push(data["articles"][i])
      }
      setNewsList(data["articles"]);
    });
  }, [])


  const showDetails = (id)=>{
    let item = newsList[id];
    setModalItem(item);
    setIsOpen(true);
  }


  let items_card;

  if (Object.keys(newsList).length > 0) {
    if (InputTitle.current.value !== "" && InputTitle.current.value !== null) {
      items_card = filteredData.map((item, idx) => <Card key={idx} id={item.id} item={item} showDetails={showDetails} />); 
    }
    else {
      items_card = newsList.map((item, idx) => <Card key={idx} id={item.id} item={item} showDetails={showDetails} />);
    }    
  }
    
  return (
    <>
      {isOpen && <Modal closeModal={closeModal}  item={modalItem} />}
      <Header title_ref={InputTitle} onSearch={onSearch} />
      <div className='main-content'>
        {items_card ? items_card : <p></p>}
      </div>
      <div>
      </div>
    </>
  )
}

export default App;

import {useState} from 'react';
import './App.css';

function App() {
  
  let [title,titleValue] = useState(['글제목1','글제목2','글제목3','글제목4']);
  let [thumbUp, setthumbUp] = useState([0,0,0,0]);

  return (
    <div className="App">
      <div className="black-nav">
        <div>React blog</div>
      </div>
      <button onClick={()=>{
        let copy = [...title];
            copy.sort(function(a,b){return a - b;});
            titleValue(copy);
          }
        }>수정버튼</button>
      {
        title.map(function(_,i){
          return(
            <div className="list">
              <h4>
                {title[i]}
                <span onClick={ ()=>{ 
                  let copy = [...thumbUp];
                  copy[i] = copy[i] + 1;
                  setthumbUp(copy)
                 } }>👍</span>{thumbUp[i]}  
              </h4>
              <p>날짜</p>
              <p>상세내용</p>
            </div>
          )
        })
      }
      <Modal title={title} bg="#f1f1f1" txtcolor="#222"></Modal>
    </div>
  );
}

function Modal(props){
  return(
    <div className="modal" style={{backgroundColor: props.color,color: props.txtcolor}}>
      <h4>{props.title[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};
export default App;

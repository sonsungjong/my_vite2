import { useState } from 'react'
import './Home.css';
import TabButton from './TabButton';

export default function Home(){
  // state 를 만들어서 변수와 화면을 연동 (데이터바인딩)
  const [count, setCount] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  let arrButtonName = ['탭버튼1','탭버튼2','탭버튼3','탭버튼4']
  const [isSelected, setIsSelected] = useState([true, false, false, false])
  
  const tabContents = {
    0:(
      <p style={{color:'yellow', backgroundColor:'red'}}>
        Edit <code>src/App.jsx</code> and save {selectedIndex}
      </p>
    ),
    1:(
      <p style={{color:'white', backgroundColor:'black'}}>
        Edit <code>src/App.jsx</code> and save {selectedIndex}
      </p>
    ),
    2:(
      <p style={{color:'black', backgroundColor:'white'}}>
        Edit <code>src/App.jsx</code> and save {selectedIndex}
      </p>
    ),
    3:(
      <p style={{color:'violet', backgroundColor:'blueviolet'}}>
        Edit <code>src/App.jsx</code> and save {selectedIndex}
      </p>
    ),
  }

  function handleClick(){
    setCount(count + 1)     // 사용은 첫번째, 변경은 두번째
  }

  function hTabClick(tabIndex){
    //alert(tabIndex + '탭 눌림')
    // 변수에 넣어줌 (state변수)
    setSelectedIndex(tabIndex)
    
    // 배열이나 객체의 안쪽 값을 바꾸기 위해선 ... 으로 분해한 다음 변경하고 다시 넣어줘야만 한다
    let arr = [...isSelected]
    // 반복문을 돌면서 모두 false로 만들어주고
    for(let i=0; i<arr.length;++i){
      arr[i] = false;
    }
    // 선택한 번호만 true로 변경
    arr[tabIndex] = true;

    // setIsSelected 에다가 넣어줌
    setIsSelected(arr)
  }

  return(
    <div>
      <div className="home_card">
        <button onClick={handleClick}>count is {count}</button>
        <div className='home_tab_container'>
          {
            // {} 왜했냐? 자바스크립트 코드를 사용하려고
            arrButtonName.map((item, index)=>{
              return(
                <TabButton key={item} isSelected={isSelected[index]} 버튼명={item} 탭클릭={()=>{hTabClick(index)}} />  
              )
            })
          }
        </div>
        
        {tabContents[selectedIndex]}
      </div>
    </div>
  )
}
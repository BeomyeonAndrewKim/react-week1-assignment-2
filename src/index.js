/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension, no-unused-vars */

/* @jsx createElement */

function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });

  children.flat().forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild(document.createTextNode(child));
  });

  return element;
}

const tempValue = {firstValue: 0, secondValue: 0, thirdValue: 0};

// const calculResult = (value1,value2,str) => {
//   console.log("연산해야할곳");
//   switch (str) 
//   {
//     case '+':
//       return(value1 + value2)
//     case '-':
//       return(value1 - value2)
//     case '*':
//       return(value1 * value2)
//     case '/':
//       return(value1 / value2)
//   }
// } 

const calculResult = (value1,value2,str) => {
  const opValue = new Map([
    ['+', value1 + value2],
    ['-', value1 - value2],
    ['*', value1 * value2],
    ['/', value1 / value2],
  ]);

  return opValue[str] || 

}



const calculResult = ['+','-','*','/'].filter((value1,value2,str) => {
  if(str == '+'){return(value1 + value2)}
  if(str == '-'){return(value1 - value2)}
  if(str == '*'){return(value1 * value2)}
  if(str == '/'){return(value1 / value2)}
});


const judgeNumber = (value) => {
 
  if(isNaN(value) != true && isNaN(tempValue.secondValue) != true){
   
    //처음 숫자가 입력될 경우 (지금 들어온 값 : 숫자, 연산자 할당 값이 없는 경우)
      tempValue.firstValue = (tempValue.firstValue*10)+value;
      value = tempValue.firstValue;
      console.log(`value: ${value}`);
      return value;
  }
  if(isNaN(value) != true && isNaN(tempValue.secondValue) == true){
    //연산자가 입력되고 나서 숫자를 입력하는 경우 (지금 들어온 값 : 숫자, 연산자 할당 값이 있는 경우)
    tempValue.thirdValue = (tempValue.thirdValue*10)+value;
    value = tempValue.thirdValue;
    return value;
  }
  if(value == '=') {
    // 연산자의 처리를 원하는 경우
      value = calculResult(tempValue.firstValue,tempValue.thirdValue,tempValue.secondValue);
      return value;
  }
  if(isNaN(value) == true && isNaN(tempValue.secondValue) != true){
    //연산자를 입력해야 하는 경우(현재 들어온 값: 문자, 연산자 할당 값이 없는 경우)
      tempValue.secondValue = value;
      value = tempValue.firstValue;
      return value;
  }
}


//
function render(value) {
  const received = judgeNumber(value);
  console.log(`value2: ${received}`);

  const element = (
    <div>
      <p>간단 계산기</p>
      <p>{received}</p>
      <p>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((i) => (
          <button type="button" onClick={() => render(i)}>
            {i}
          </button>
        ))}
      </p>
      <p>
        {['+','-','*','/','='].map((j) => (
          <button type="button" onClick={() => render(j)}>
            {j}
          </button>
        ))}
      </p>
    </div>
  );
  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}
render(0);

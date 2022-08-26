import React, {useState} from "react";

const Counter = (props) => {
  const [count, setCount] = useState(props.count)

  const countUp = () => {
    setCount(prevState => {
      return prevState + 1
    })
  }
  const countDown = () =>{
    setCount(prevState => {
      return prevState - 1
    })
  }

  return (
    <div className="text-6xl h-screen w-screen flex space-y-12 flex-col justify-center items-center">
      <div>
        {count}
      </div>
      <div className="flex space-x-12 items-center">
      <button className="bg-gray-400 hover:bg-gray-300 text-white rounded-full"
      onClick={countUp}>
        <div className="pb-7 px-7 py-3">+</div></button>
      <button className="bg-gray-400 hover:bg-gray-300 text-white rounded-full"
      onClick={countDown}>
        <div className="pb-7 px-9 py-3">-</div></button>
      </div>
    </div>
  );
};

export default Counter;

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Child from "./child";

// useEffect vừa là componentDidMount, componentDidUpdate, componentWillUnmount
export default function HooksPage() {
  // 0 là giá trị ban đầu cho biến number
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setNumber(number + 1);
  };

  useEffect(() => {
    // Chạy 1 lần duy nhất
    // useEffect nếu tham số thứ 2 là mảng rỗng thì nó là componentDidMount tương ứng bên class : chạy 1 lần duy nhất
    console.log("useEffect - componentDidMount");
  }, []);

  useEffect(() => {
    // Chạy nhiều lần mỗi khi tham số thứ 2 trong mảng thay đổi
    // useEffect nếu tham số thứ 2 của nó là 1 mảng khác rỗng, tương ứng componentDidUpdate
    console.log("useEffect - componentDidUpdate");
  }, [number]);

  useEffect(() => {
    // Chạy mỗi khi qua component khác
    // Tương ứng componentWillUnmount

    // setInterval chạy quài, khi qua trang khác vẫn chạy => nên xử lý xóa đi setInterval khi qua trang khác
    let interval = setInterval(() => {
      console.log("Hello");
    }, 2000);
    return () => {
      console.log("useEffect - componentWillUnmount");
      clearInterval(interval);
    };
  }, []);

  const showNumber = () => {
    console.log("showNumber");
  };

  const showNumberCallBack = useCallback(showNumber, [number]);

  const numberUp = () => {
    let i = 0;
    while (i < 1000) i++;
    console.log(i);
    return i;
  };

  // Nếu bên trong tham số thứ nhất của useNemo ko thay đổi thì hàm numberUp sẽ ko chạy lại
  const numberUpMemo = useMemo(() => numberUp(), []);

  // Mỗi lần component cha render thì component Child render lại
  return (
    <div>
      <h3>Number: {number}</h3>
      <button className="btn btn-success" onClick={handleClick}>
        Click
      </button>
      <Child showNumber={showNumberCallBack} />
      <h3>NumberUp: {numberUpMemo}</h3>
    </div>
  );
}

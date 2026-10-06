// 이벤트 렌더링

function Example03() {
  const handleClick = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.innerText);
  };
  const handleClick2 = () => {
    alert('버튼 클릭');
  }

  // event(=e)를 넣어줘야함
  const handleInputChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <h3>이벤트 렌더링 console.log</h3>
        <button onClick={handleClick}>버튼 클릭</button>
      <h3>이벤트 렌더링 alert</h3>
       <button onClick={handleClick2}>버튼 클릭</button>
      <h3>이벤트 렌더링 input</h3>
      <input
        type="text"
        placeholder="이벤트 렌더링 input"
        onChange={handleInputChange}
      />
    </div>
  );
}
export default Example03;
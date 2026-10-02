// 이벤트 렌더링

function Example03() {
  const handleClick = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.innerText);
  };
  return (
    <div>
      <h3>이벤트 렌더링</h3>
        <button onClick={handleClick}>버튼 클릭</button>
    </div>
  );
}
export default Example03;
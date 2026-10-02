// 외부 컴포넌트 생성
// 조건부 랜더링

const Example01 = () => {
    const isLogin = true;
    
    let result = "";
    if(isLogin) {
        result = <h3>로그인 상태입니다.</h3>
    } else {
        result = <h3>로그인 상태가 아닙니다.</h3>
    }

    return (
    <div>
      <h1>조건부 랜더링</h1>
      {result}
      {isLogin ? <p>환영합니다!</p> : <p>로그인 해주세요.</p>}
      {isLogin && <p>로그인 상태에서만 보이는 문구입니다.</p>}
    </div>
  );
}

export default Example01;
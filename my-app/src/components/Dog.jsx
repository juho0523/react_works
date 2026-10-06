const Dog = (props) => {
  return (
    <div>
        <h3>개</h3>
        <p>품종 : {props.breed}</p>
        <p>나이 : {props.age}</p>
    </div>
    )
}
export default Dog;
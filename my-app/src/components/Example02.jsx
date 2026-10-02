// 리스트 랜더링

function Example02() {
  const seasons = ['1', '2', '3', '423423523532']
  return (
    <div>
      <h3>리스트 랜더링</h3>
      <ul className="list">
        {seasons.map((season, index) => (
          <li key={index}>{season}</li>
        ))}
      </ul>
    </div>
  )
}

export default Example02
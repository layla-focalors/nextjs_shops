export default function Home(){
  let name = '노아 ( NOA )'
  const cutelevel = 999999999
  let url = "https://google.com"
  return (
    // 유의사항 - return () 안에 들어감.
    // html은 한개만 들어가야 한다 ( div로 감싸기 )
    // 하나의 태그가 들어가 하나로 끝나야 함

    <div>
      <h4 className="hello">ARISIA</h4>
      <p className="buy">{name}</p>
      <a href={url}>노아의 귀여움 {cutelevel}</a>
      {/* 데이터 바인딩 문법 / JS 변수 때려넣기
      대부분의 속성에 중괄호를 줄 수 있음 */}
      <div style={{color:'pink', textAlign:"center", fontSize:12}}>hello</div>
    </div>
  )
}
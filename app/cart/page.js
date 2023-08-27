// 'use client'

import {age, name} from './data.js'
import {Cart_Hello} from './hello.js'

export default function Cart() {
  let products = ['토마토', '파스타', '코코넛', '애플망고'] // DB 데이터
  // 한 function 안에 파일이 있으면 그 파일 안에서만 쓸 수 있음!
  // Cart 안에 CartItem이 두개 있음! ( 부모 > 자식 컴포넌트 )
    return (
      <div>
        <h4 className="title">Cart</h4>
        {/* <div className="cart-item">
            <p>상품명 {age}</p>
            <p>$40</p>
            <p>1개</p>
        </div> */}
        {/* 부모가 자식에게 컴포넌트 전송 불가! 그리고 관계 없는 컴포넌트 전송 불가! 즉! 데이터는 최고 부모 컴포넌트에 두는 게 좋음! */}
        {
          products.map((a, i) => {
            return (
              <CartItem item = {products[i]} ></CartItem>
            )
          })
        }
        {/* <CartItem item = {products[0]} ></CartItem>
        <CartItem item = {products[1]} ></CartItem>
        <CartItem item = {products[2]} ></CartItem> */}
        {/* <Cart_Hello></Cart_Hello> */}
        <Banner content = "삼성카드"></Banner>
        <Banner content = "현대카드"></Banner>
        <Button color = "red"></Button>
        <Button color =  "blue"></Button>

      </div>
    )
  } 

// props데이터 전송 문법

function Button(props){
  // 단일 코드만 전송 시 굳이 return() 안 써도 된다구요!
  return <button style={{background : props.color}}>버튼이에요!!</button>
}

function Banner(props){
  return <h5>{props.content} 결제 행사중</h5>
}

{/* html 축약 -> 컴포넌트 
        1. function 생성*/}

        // 컴포넌트
function CartItem(props){
    return (
        <div className="cart-item">
            <p>{props.item}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
        // 리턴 안에서는 무조건 하나의 div 스테이지
        // 컴포넌트끼리 데이터 전송이 어려움
        // 재사용이 잦은 UI를 컴포넌트로 구현
        // js function과 동일한 역할임!
        // 웹페이지를 컴포넌트로 만들어도 됨!
    )
}

// 넥스트 js의 여러 컴포넌트
// 1. 서버 컴포넌트        :  JS 엔트리 불가( js 기능 집어넣기 불가 - onclick 등) - 로딩 속도가 매우 빠름!!
// 2. 클라이언트 컴포넌트   : "use client" 입력, Onclick 등 JS 기능 사용 가능 - 로딩 속도가 느려요...ㅠㅠ

// 큰 페이지는 전부 서버 컴포넌트! 기능이 필요하면 클라이언트 컴포넌트!

// props문법!
// 파라미터 문법과 동일함!
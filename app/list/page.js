'use client'

import Link from 'next/link'
import Image from 'next/image'
import img1 from 'public/food0.png'
import { useState } from 'react'

export default function List() {
    let 상품 = ['토마토', '파스타', '코코넛']
    var cute = ['noa', 'youyouka', 'eula']
    let price = [20, 30, 40]

    // state 이용 데이터 저장!
    // 왼쪽은 이름! 오른쪽은 변경함수!
    // state는 클라이언트 컴포넌트에서만 사용!
    let [counts, editor] = useState([0, 0, 0])

    let node = [2, 3, 4]
    // array의 자료 개수만큼 반복 실행 (map)
    let count = [0]
    let a = node.map((a, i) => {
        return 10
    })
    console.log(a)
    // a, i 두가지 파라미터 - a = array 안의 자료 표현해줌 ( 파이썬의 i 자료넣을 때)
    // i (1씩 증가하는 정수)
    // console.log(상품[0], cute[0], price[0])
    price[0] = 10000

    return (
        <div className="fx">
            <div className="title">상품 목록</div>
            <span>{counts[0]}</span>
            <button onClick={()=>{ 
                let arr = [1,2,3] // 1,2,3이 어디인지 가리키는 화살표!
                let arr2 = arr // 화살표가 복사됨!
                console.log(arr, arr2)
                // 비교 연산자로 계산하면 내부 값이 아니라 화살표 값만 비교하기 때문에 true가 나옴!!

                // 원리 설명
                // 복사를 해야하는 이유! : 음음... state변경 함수를 사용시.. 기존 스테이트와 새 스테이트가 같으면 렌더링이 안 됨!!
                // 그래서 기존 스테이트를 복사해서 새 스테이트를 만들어야 함!
                // copy와 수량은 다르니까요! 음.. 그치만 copy와 수량은 서버상으로는 [0,1,2]로 같음으로 렌더링을 하지 않아요!

                // [...counts]는 완전히 독립적인 복사본을 생성한다는 뜻이에요!
                let copy = [...counts]
                copy[0]++
                editor(copy)
             }}>+</button>
            <span>{counts[1]}</span>
            <button>+</button>
            <span>{counts[2]}</span>
            <button>+</button>
            {
                // 매우 중요한 문법!
                상품.map((a, i) => {
                    // 꼭 리턴 적기!, 리턴 없으면 1회만!
                    return (
                        //안 바뀌는 건 state를 사용할 이유가 없음!!
                        <div className="food">
                            {/* src link = 최적화된 이미지 로딩
                            단점은 여러 이미지 불러오기 귀찮음
                            외부 사이트 이미지 불러오기 힘듬
                            외부 이미지는 width, height 반드시 필요하고 src = url 넣어주고 next.config에 도메인 등록, 경로 등록도 해야 함 */}

                            {/* <Image src={img1} className="food-img" /> */}
                            
                            {/* <img src={'/food' + i + '.png'} className='food-img'/> */}
                            
                            <img src={`food${i}.png`} className='food-img'/>
                            <h4>{상품[i]} {price[i]}$</h4>
                            <span>상품 수량 : {counts[i]} </span>
                            {/* onClick! = 이벤트 핸들러! */}
                            {/* html 자동 재 렌더링을 위해서 useState 사용! */}
                            <button onMouseOver={() => {console.log('hello!')}} onClick={() => {
                                let arr = [...counts]
                                arr[i]++
                                editor(arr)
                            }}>+</button>
                            <button onClick={()=>{
                                let arr = [...counts]
                                arr[i]--
                                if(arr[i] < 0){
                                    arr[i] = 0
                                    alert('0보다 작을 수 없어요!!')
                                }
                                editor(arr)
                            }}> -</button>
                        </div>
                    )
                })
            }
            {/* <div className="food">
                <h4>{상품[0]} {price[0]}$</h4>
            </div>
            <div className="food">
                <h4>{상품[1]} {price[1]}$</h4>
            </div>
            <div className="food">
                <h4>{상품[2]} {price[2]}$</h4>
            </div> */}

        </div>
    )
}

// 입력법 : export defaut + function + 파일명()
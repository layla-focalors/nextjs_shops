import Link from 'next/link'
import Image from 'next/image'
import img1 from 'public/food0.png'

export default function List() {
    let 상품 = ['토마토', '파스타', '코코넛']
    var cute = ['noa', 'youyouka', 'eula']
    let price = [20, 30, 40]
    let node = [2, 3, 4]
    // array의 자료 개수만큼 반복 실행 (map)
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
            {
                // 매우 중요한 문법!
                상품.map((a, i) => {
                    // 꼭 리턴 적기!, 리턴 없으면 1회만!
                    return (
                        <div className="food">
                            {/* src link = 최적화된 이미지 로딩
                            단점은 여러 이미지 불러오기 귀찮음
                            외부 사이트 이미지 불러오기 힘듬
                            외부 이미지는 width, height 반드시 필요하고 src = url 넣어주고 next.config에 도메인 등록, 경로 등록도 해야 함 */}

                            {/* <Image src={img1} className="food-img" /> */}
                            
                            {/* <img src={'/food' + i + '.png'} className='food-img'/> */}
                            
                            <img src={`food${i}.png`} className='food-img'/>
                            <h4>{상품[i]} {price[i]}$</h4>
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
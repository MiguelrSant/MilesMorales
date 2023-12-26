import Image from "next/image"

export default function Conteiner() {
    return (
        <section className="container">
            <div className="container-item-1">
                <div className="item-1" style={{marginTop: '18px'}}>
                    <img src="spiderman-text.png"  alt="img"/>
                </div>
                
                <p className="item-2" style={{marginTop: '18px'}}>
                Na mais nova aventura do universo do Homem-Aranha da Marvel, o adolescente Miles Morales está se adaptando a um novo lar enquanto segue os passos de seu mentor, Peter Parker, como o novo Homem-Aranha.
                </p>
                <p className="mt-1 flex item-3"  style={{marginTop: '18px'}} >
                    <span><a href="https://www.playstation.com/pt-br/games/marvels-spider-man-miles-morales/" className="btn">Comprar Agora</a></span>
                    <span><a href="https://www.youtube.com/watch?v=NTunTURbyUU" className="btn-secondary " style={{ marginLeft: '20px'}}>Ver o TREILER</a></span>
                </p>
                <p className="mt-2 flex align-items-center item-4" style={{marginTop: '18px'}}>

                    <svg  className="w-auto" style={{cursor: 'pointer'}} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.73534 22.7959L12.7267 19.4614V22.5901L7.55358 24.319C6.75904 24.6373 6.60358 24.8665 6.97879 25.3894C7.43045 25.801 9.03165 25.7187 9.9759 25.3894L12.7267 24.319V27.036C11.7413 27.2666 10.2907 27.3242 9.68851 27.3242C6.67223 27.338 3.27082 26.2432 2.70893 25.7187C1.51832 24.6072 1.80574 23.5369 3.73534 22.7959Z" fill="white"/>
                        <path d="M13.7531 6V28.3945L18.762 30V10.9811C18.8473 10.292 19.0092 10.0148 19.7063 9.91081C20.2014 9.86046 20.8928 10.6067 20.8558 10.9811V19.4614C21.5217 19.8567 21.9748 19.981 22.9086 20.0377C25.318 19.8542 26.3899 19.2371 26.5627 14.9331C26.5799 11.8989 25.8535 10.5069 22.9086 8.71698C19.5229 7.21824 17.496 6.67425 13.7531 6Z" fill="white"/>
                        <path d="M19.7063 24.8542V21.7667C21.2795 21.2885 22.2136 21.0712 24.0993 20.9022C26.3985 20.6963 28.8208 20.7376 32.4748 22.2607C33.5833 22.7228 34.3634 24.4837 31.1199 25.7187L19.7063 29.753V26.7067L27.9996 23.825C28.9916 23.4713 29.0671 23.0017 28.4102 22.7959C27.507 22.4666 26.6038 22.5077 25.7415 22.7959L19.7063 24.8542Z" fill="white"/>
                    </svg>

                    <svg  className="ml-2 w-auto " style={{cursor: 'pointer', marginLeft: '20px', }} width="62" height="28" viewBox="0 0 62 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="58" height="24.0415" fill="#EC111A"/>
                        <path d="M3.95312 4.4043V23.6375H7.40908L7.55934 15.0727L9.06193 23.6375H11.0153L12.5179 15.0727V23.6375H19.1293L19.5801 20.7825H22.2847L22.7355 23.6375H29.4972V17.4768H30.2485L31.7511 23.6375H35.207L33.1034 16.425C34.2876 15.2355 34.847 14.4378 35.207 12.2178L37.1604 23.6375H41.3676L44.0723 6.65818V23.6375H50.6837V20.1815H47.5283V15.824H50.6837V12.2178H47.5283V8.01051H50.6837V4.4043H40.9169L39.264 16.7255L37.9117 4.4043H34.0049L34.3055 7.25922C33.7044 5.75663 31.7511 4.4043 30.549 4.4043H25.891V21.2333L23.4868 4.4043H18.6785L16.1241 21.8343V4.4043H11.6163L9.96349 13.8706L8.31064 4.4043H3.95312Z" fill="white"/>
                        <path d="M51.2847 23.6375V4.4043H54.7407V20.3318H57.7459V23.6375H51.2847Z" fill="white"/>
                        <path d="M21.0831 9.66333L20.0312 17.3265H22.1349L21.0831 9.66333Z" fill="#EC111A"/>
                        <path d="M29.4976 13.7203V7.70996C30.8815 8.1469 31.7515 8.91203 31.7515 10.8654C31.7515 12.2177 30.9046 13.53 29.4976 13.7203Z" fill="#EC111A"/>
                    </svg>
                </p>
            </div>
            <div class="container-item-2 item-5">
            <div class="js-tilt">
                <img src="spider-man.png" className="spiderman" alt="img"/>
            </div>
        </div>
            
        </section>
    )
}
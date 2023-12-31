import Link from "next/link";

export default function Header() {

    return (

    <header>
        <nav className="navbar">
            <div className="nav-menu">
                <div className="logo">
                    <a href="#"><img  className="logospider" src="logo-spidermanbig.svg"  alt="img"/></a>
                </div>
                <ul class="nav-list">
                    <li><Link href="/" className="nav-link" >Home</Link></li>
                    <li><Link href="/story" className="nav-link" >Story</Link></li>
                    <li><Link href="/wallpapers" className="nav-link" >Wallpapers</Link></li>
                    <li><Link href="/beyourself" className="nav-link" style={{color: '#EA1D22', fontStyle: 'italic'}} >#BeYourself</Link></li>
                </ul>
            </div>
            <div className="nav-social">
                <a href="https://www.facebook.com/PlayStationBR/?brand_redir=14104316802" target="_blank">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.9388 13.2378H10V17.4556H13.9388V28H18.64V17.4556H22.1976L22.7059 13.2378H18.64V11.0025C18.3859 8.42864 19.8824 7.97973 20.8 7.9235H22.96V4.25405L19.6565 4.00095C15.2179 3.93346 13.9953 7.48762 13.9388 9.27314V13.2378Z" fill="#959698"/>
                    </svg>
                </a>

                <a href="https://www.instagram.com/playstation_br/" target="_blank">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7426 4C7.01878 4 4 7.01878 4 10.7426V21.2574C4 24.9812 7.01878 28 10.7426 28H21.2574C24.9812 28 28 24.9812 28 21.2574V10.7426C28 7.01878 24.9812 4 21.2574 4H10.7426ZM10.6484 6.21618C8.20056 6.21618 6.21618 8.20056 6.21618 10.6484V21.3517C6.21618 23.7996 8.20056 25.784 10.6484 25.784H21.3046C23.7524 25.784 25.7368 23.7996 25.7368 21.3517V10.6484C25.7368 8.20056 23.7524 6.21618 21.3046 6.21618H10.6484Z" fill="#959698"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9989 22.2C19.3973 22.2 22.1522 19.4451 22.1522 16.0468C22.1522 12.6485 19.3973 9.89355 15.9989 9.89355C12.6006 9.89355 9.8457 12.6485 9.8457 16.0468C9.8457 19.4451 12.6006 22.2 15.9989 22.2ZM15.9989 20.0312C18.2254 20.0312 20.0303 18.2263 20.0303 15.9998C20.0303 13.7733 18.2254 11.9684 15.9989 11.9684C13.7724 11.9684 11.9674 13.7733 11.9674 15.9998C11.9674 18.2263 13.7724 20.0312 15.9989 20.0312Z" fill="#959698"/>
                        <circle cx="22.4596" cy="9.58753" r="1.43811" fill="#959698"/>
                    </svg>
                </a>

                <a href="https://www.youtube.com/channel/UC6i4mzH3OPrZV0p64zoz-Ww" target="_blank">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5505 21.5839C4.13508 19.5661 3.55349 14.3911 4.5505 9.83332C4.68898 9.05193 5.4229 7.45948 7.25076 7.34079C10.5148 7.08362 18.5681 6.72359 24.6688 7.34079C25.4898 7.35068 27.2504 7.86304 27.7252 9.83332C28.0911 11.8808 28.6035 17.0676 27.7252 21.4355C27.5471 22.1377 26.6866 23.5779 24.6688 23.7203C23.1258 23.9874 17.482 24.3612 7.25076 23.7203C6.55838 23.6412 5.049 23.1031 4.5505 21.5839ZM19.9214 15.5306L13.7197 11.9995V19.0617L19.9214 15.5306Z" fill="#959698"/>
                    </svg>
                </a>

                <a href="https://twitter.com/playstation_br/" target="_blank">
                    <svg style={{marginRight: '15px'}} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                        <path d="M15.8958 11.9474C10.6721 11.7438 6.89677 8.54559 5.66208 6.97195C3.85754 9.93409 5.89161 12.4642 7.13421 13.3591C6.64034 13.4146 5.4563 13.0428 4.92602 12.8499C5.09697 16.1083 7.65658 17.3703 8.91501 17.594C8.23119 17.7976 7.18962 17.7868 6.75431 17.756C7.62809 20.3849 10.1734 21.0421 11.3369 21.0421C9.15246 23.0045 5.53545 23.2483 4 23.1249C8.77255 25.9019 16.1332 26.4573 21.3806 21.5049C24.806 17.745 25.5916 15.3477 25.797 10.7672C27.1457 9.82301 27.9419 8.73843 28.1714 8.31417C27.5826 8.64741 26.1215 8.91585 25.4646 9.00842C26.6803 8.37897 27.3641 7.00281 27.5541 6.39341C26.8513 6.89327 25.1718 7.37307 24.4199 7.55049C23.2077 6.42412 22.3711 6.12754 20.6921 6C17.1542 6.20828 15.3971 8.80014 15.8958 11.9474Z" fill="#959698"/>
                    </svg>
                </a>

            </div>
            
            <div className="btnaa">
                <input type="checkbox" className="feka"/>
                <div className="bx" style={{marginLeft: '22px'}}></div>
                <ul className="menu-mobile">
                        <li className="nav-mobile"><Link href="/" >Home</Link></li>
                        <li className="nav-mobile"><Link href="/story" >Story</Link></li>
                        <li className="nav-mobile"><Link href="/wallpapers"  >Wallpapers</Link></li>
                        <li className="nav-mobile"><Link href="/beyourself" style={{color: '#EA1D22', fontStyle: 'italic'}} >#BeYourself</Link></li>
                </ul>
            </div>
            
        </nav>
    </header>


    )
}



import Link from "next/link";

const Header = () => {
    return (
     <header>
        <div>
            <div className='topNav'>
            <img src='https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg' 
                width={50} height={50} style={{borderRadius:'100px'}} alt='img here'/>
          <nav>
            <ul>
              <li>  
                <Link href='/' passHref>
                    Home
                </Link>
               </li> 

               <li> 
                <Link href='/events' passHref>
                    Events            
                </Link>
              </li> 

               <li> 
                <Link href='/about-us' passHref>
                    About us
                </Link>
               </li>  
            </ul>          
          </nav>  

        </div>       
       <p className="title"> Sed ut perspiciatis unde omnis</p>
        </div>
        
      </header>
    )
}
export default Header;
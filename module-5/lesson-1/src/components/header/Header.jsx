// import logo from './';

export const Header = () => {
    return (
        <>
        <header className="bg-[#008F76]">
            <div className="container">
                <nav className="nav flex justify-between md:px-3 px-6 items-center py-[35px]">
                    <div className="nav__logo text-white text-[30px]">
                        LOGO
                    </div>
                    <ul className="nav__ul w-[65%] md:flex justify-between items-center hidden">
                        <li className="nav__ul--list hover:text-[#FFFFFF] text-[#F5F5FF] font-medium"><a href="http://" target="_blank" rel="noopener noreferrer">Beranda</a></li>
                        <li className="nav__ul--list hover:text-[#FFFFFF] text-[#F5F5FF] font-medium"><a href="http://" target="_blank" rel="noopener noreferrer">Koleksi</a></li>
                        <li className="nav__ul--list hover:text-[#FFFFFF] text-[#F5F5FF] font-medium"><a href="http://" target="_blank" rel="noopener noreferrer">Syarat dan Ketentuan</a></li>
                        <li className="nav__ul--list hover:text-[#FFFFFF] text-[#F5F5FF] font-medium"><a href="http://" target="_blank" rel="noopener noreferrer">Kontak</a></li>
                        <li className="nav__ul--list hover:text-[#FFFFFF] text-[#F5F5FF] font-medium"><button className='nav__ul--list-btn w-[101px] h-[52px] border border-[#FFFFFF] rounded-[10px] hover:bg-[#FFFFFF] hover:text-[#008F76] duration-300'>Masuk</button></li>
                    </ul>
                    <div className="nav__burger block md:hidden text-white text-[40px]">
                    <i class='bx bx-menu'></i>
                    </div>
                    <div className="nav__menu hidden">
                    <ul className="nav__ul w-[65%] flex justify-between items-center">
                        <li className="nav__ul--list hover:text-[#FFFFFF] text-[#F5F5FF] font-medium"><a href="http://" target="_blank" rel="noopener noreferrer">Beranda</a></li>
                        <li className="nav__ul--list hover:text-[#FFFFFF] text-[#F5F5FF] font-medium"><a href="http://" target="_blank" rel="noopener noreferrer">Koleksi</a></li>
                        <li className="nav__ul--list hover:text-[#FFFFFF] text-[#F5F5FF] font-medium"><a href="http://" target="_blank" rel="noopener noreferrer">Syarat dan Ketentuan</a></li>
                        <li className="nav__ul--list hover:text-[#FFFFFF] text-[#F5F5FF] font-medium"><a href="http://" target="_blank" rel="noopener noreferrer">Kontak</a></li>
                        <li className="nav__ul--list hover:text-[#FFFFFF] text-[#F5F5FF] font-medium"><button className='nav__ul--list-btn w-[101px] h-[52px] border border-[#FFFFFF] rounded-[10px] hover:bg-[#FFFFFF] hover:text-[#008F76] duration-300'>Masuk</button></li>
                    </ul>
                    </div>
                </nav>
            </div>
        </header>
        </>
    )
}

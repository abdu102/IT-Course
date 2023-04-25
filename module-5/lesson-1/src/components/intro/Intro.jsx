

                                                                                                                                                                                                
export const Intro = () => {
    return (
        <section className="container">
            <div className="intro h-[600px]">
                <div className="intro__title w-[100%] h-[35%] flex flex-col items-center gap-y-[30px]">
                    <div className="intro__title--desc gap-x-[5px] w-[20%] h-[14%] flex text-center">
                        <small className="text-[#008F76] text-[16px]">Pojok Baca</small>
                        <small className="text-[#212121] text-[16px]">Probolinggo</small>
                    </div>
                    <div className="intro__title-name w-[100%] h-[43%] text-center text-[50px]"><h2 className="text-[#212121]">Pinjam Buku Secara <strong className="text-[#008F76]">Gratis</strong> untuk Masyarakat</h2></div>
                    <div className="intro__body w-[40%] h-[26%] flex justify-between items-center">
                        <input type="text" className="w-[40%] h-[100%] bg-[#008F76] rounded-[20px] pl-[20px] text-white placeholder:text-white focus:outline-none" id="" placeholder="Cari Judul Buku"/>
                        <button className="w-[40%] h-[100%] border border-[#008F76] rounded-[20px] text-[#008F76] hover:bg-[#008F76] hover:text-white duration-300">Donasi dengan Kami</button>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

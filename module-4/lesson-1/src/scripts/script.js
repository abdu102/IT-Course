"use strict";
let wrapper = document.querySelector(".wrapper");

let products = [
    {
        id: 1,
        title: "299 000",
        subTitle: "Apple Airpods Pro simsiz quloqchin , Oq rangda",
        quantity: 1230,
        sales: true,
    },
    {
        id: 2,
        title: "16 114 285",
        subTitle:
            "Apple Macbook Pro 13 2.4 2019 Intel core i5 DDR3 8 GB SSD 256 GB ",
        quantity: 230,
        sales: false,
    },
    {
        id: 3,
        title: "720 000",
        subTitle: "Apple Airpods Pro",
        quantity: 1230,
        sales: true,
    },
    {
        id: 4,
        title: "672 000",
        subTitle: "imsiz quloqchin , Oq rangda",
        quantity: 1230,
        sales: false,
    },
    {
        id: 5,
        title: "241 020",
        subTitle: "Apple  , Oq rangda",
        quantity: 1230,
        sales: true,
    },
    {
        id: 6,
        title: "20 000 000",
        subTitle: "Apple  Pro simsiz  , Oq rangda",
        quantity: 1230,
        sales: true,
    },
    {
        id: 7,
        title: "200 000",
        subTitle: "Apple Airpods Pro simsiz quloqchin , Oq rangda",
        quantity: 1230,
        sales: true,
    },
    {
        id: 8,
        title: "3 299 000",
        subTitle: "Apple Airpods Pro simsiz quloqchin , Oq rangda",
        quantity: 1230,
        sales: false,
    },
    {
        id: 9,
        title: "499 000",
        subTitle: "Apple Airpods Pro simsiz quloqchin , Oq rangda",
        quantity: 1230,
        sales: true,
    },
    {
        id: 10,
        title: "5 009 000",
        subTitle: "Apple Airpods Pro simsiz quloqchin , Oq rangda",
        quantity: 1230,
        sales: false,
    },
];

for (let i = 0; i < 10; i++) {
    let card = document.createElement("div");
    card.setAttribute(
        "class",
        "card flex justify-between hover:scale-110 duration-500 flex-col w-[230px] shadow-2xl rounded-[10px]  h-[480px] p-3 bg-white"
    );

    card.innerHTML = `
    <img src="./images/image 15.png" alt="">
    <div class="card-text">
        <h5 class="text-[#0D63F3] text-[22px]">${products[i].title} so’m</h5>
        <p>${products[i].subTitle}
            </p>
    </div>
    <small>${products[1].quantity} ta buyurtma</small>
    <span class="flex justify-between w-[100%] items-center rounded-[10px]">
        <button class="w-[55%] h-[40px] ${products[i].sales ? `bg-[#0D63F3]` : `bg-slate-600`
        } bg text-white font-bold rounded-[8px]"> ${products[i].sales ? `Sotib olish` : `Sotuvda yoq`
        }</button>
        <a href="#"><img src="./images/Vector.svg" alt=""></a>
    </span>
   </div>
    `;
    wrapper.append(card);
}

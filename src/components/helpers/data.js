import uuid from 'uuid'

export const stock = [
    {
        id: uuid.v4(),
        title: "PC FX8350 RX470",
        img: "img/pc1.jpg",
        price: 6300,
        brand: "AMD",
        info: "PC GAMER et PROFESSIONNEL AMD FX 8350 8 Cores 4.2 GHZ, AMD RADEON RX 470 4GB GDDR5",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: uuid.v4(),
        title: "PC i7 RTX 2060",
        img: "img/pc2.png",
        price: 15900,
        brand: "INTEL",
        info: "PC GAMER et PROFESSIONNEL i7 9700KF 8 Cores 8 Threads 4.9GHZ , Nvidia Geforce RTX 2060 6GB GDDR6",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: uuid.v4(),
        title: "PC i7 RTX 2080",
        img: "img/pc3.jpg",
        price: 20500,
        brand: "INTEL",
        info: "PC GAMER et PROFESSIONNEL i7 9700KF 8 Cores 16 Threads 4.9GHZ , Nvidia Geforce RTX 2080 8GB GDDR6",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: uuid.v4(),
        title: "PC i7 RTX 2080Ti",
        img: "img/pc4.jpg",
        price: 26700,
        brand: "INTEL",
        info: "PC GAMER et PROFESSIONNEL i7 9700KF 8 Cores 16 Threads 4.9GHZ , Nvidia Geforce RTX 2080 ti 11GB GDDR6",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: uuid.v4(),
        title: "PC i7 GTX 1660Ti",
        img: "img/pc5.png",
        price: 14990,
        brand: "INTEL",
        info: "PC GAMER et PROFESSIONNEL i7 9700KF 8 Cores 8 Threads 4.9GHZ , Nvidia Geforce GTX 1660 Ti 6GB GDDR6",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: uuid.v4(),
        title: "PC i9 RX470",
        img: "img/pc6.jpg",
        price: 13800,
        brand: "INTEL",
        info: "PC GAMER et PROFESSIONNEL i9 9900K 8 Cores 16 Threads 5GHZ , AMD RADEON RX 470 4GB GDDR5",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: uuid.v4(),
        title: "PC i5 RX570",
        img: "img/pc7.jpg",
        price: 8230,
        brand: "INTEL",
        info: "PC GAMER et PROFESSIONNEL i5 9400F 6 Coeurs 4.1GHZ, AMD RADEON RX 570 4GB GDDR5",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: uuid.v4(),
        title: "PC i9 RTX 2080Ti",
        img: "img/pc8.jpg",
        price: 28600,
        brand: "INTEL",
        info: "PC GAMER et PROFESSIONNEL i9 9900K 8 Cores 16 Threads 5GHZ , Nvidia Geforce RTX 2080 Ti 11GB GDDR6",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: uuid.v4(),
        title: "PC Ryzen GTX 1660Ti",
        img: "img/pc9.jpg",
        price: 9400,
        brand: "AMD",
        info: "PC GAMER et PROFESSIONNEL Ryzen 5 2600 6 Coeurs 12 Threads 3.9GHZ, NVIDIA GEFORCE GTX 1660 Ti 6GB GDDR6",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: uuid.v4(),
        title: "PC i5 GTX 1660",
        img: "img/pc10.png",
        price: 9690,
        brand: "INTEL",
        info: "PC GAMER et PROFESSIONNEL i5 8400 6 Coeurs 4GHZ, Nvidia Geforce GTX 1660 6GB GDDR5",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: uuid.v4(),
        title: "PC Ryzen RTX 2070",
        img: "img/pc11.jpg",
        price: 12290,
        brand: "AMD",
        info: "PC GAMER et PROFESSIONNEL Ryzen 5 2600 6 Coeurs 12 Threads 3.9GHZ, NVIDIA GEFORCE RTX 2070 8GB GDDR6",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: uuid.v4(),
        title: "PC i5 RX580",
        img: "img/pc12.jpg",
        price: 8100,
        brand: "INTEL",
        info: "PC GAMER et PROFESSIONNEL i5 9400F 6 Coeurs 4.1GHZ, AMD RADEON RX 580 4GB GDDR5",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: uuid.v4(),
        title: "PC i5 GTX 1660",
        img: "img/pc13.jpg",
        price: 9590,
        brand: "INTEL",
        info: "PC GAMER et PROFESSIONNEL i5 9400F 6 Coeurs 4.1GHZ, NVIDIA GEFORCE GTX 1660 6GB GDDR5",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: uuid.v4(),
        title: "PC i7 RTX 2070",
        img: "img/pc14.jpg",
        price: 14400,
        brand: "INTEL",
        info: "PC GAMER et PROFESSIONNEL i7 8700 6 Coeurs 12 Threads 4.6GHZ, NVIDIA Geforce RTX 2070 8GB GDDR6",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: uuid.v4(),
        title: "PC Threadripper RTX 2070",
        img: "img/pc15.png",
        price: 25600,
        brand: "AMD",
        info: "PC PROFESSIONNEL Ryzen Threadripper 1950X 16 Cores 32 Threads 4GHZ, NVIDIA Geforce RTX 2070 8GB GDDR6",
        inCart: false,
        count: 0,
        total: 0
    }
]

export const detailProduct = {
    id: uuid.v4(),
    title: "PC FX8350 RX470",
    img: "img/pc1.jpg",
    price: 6300,
    brand: "AMD",
    info: "PC GAMER et PROFESSIONNEL AMD FX 8350 8 Cores 4.2 GHZ, AMD RADEON RX 470 4GB GDDR5",
    inCart: false,
    count: 0,
    total: 0
}
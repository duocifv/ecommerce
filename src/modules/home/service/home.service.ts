import { homeApi } from './home.api'

export const homeService = async () => {
  const result = await homeApi()
  if (!result?.data[0]?.data) {
    console.error('Không có dữ liệu ', result)
    return null
  }
  const resultData = JSON.parse(result?.data[0]?.data)
  const { title, copy, list, list2, list3, list4 } = resultData.data
  return {
    title,
    copy,
    features: [list, list2, list3, list4],
  }
}

export const flashSaleService = async () => {
  return [
    {
      id: 133,
      title:
        'Giày Sneaker Nike Air Zoom Pegasus 41 &#8211; Năng Động, Êm Ái | Dony Shop',
      link: 'https://cms.duocnv.top/san-pham/giay-sneaker-nike-air-zoom-pegasus-41-nang-dong-em-ai-dony-shop/',
      price: '880500',
      sale_price: '880500',
      flash_sale_start: '2024-12-15 08:00:00',
      flash_sale_end: '2024-12-17 18:00:00',
      image:
        'https://cms.duocnv.top/wp-content/uploads/2024/12/product-dony-_d_1debb7480c3b4a79a139bfca07c70fe2_master.webp',
    },
    {
      id: 131,
      title:
        'Dép Sandal Nữ Crocs Baya Platform siêu đẹp chắc chắn nhẹ bền thời trang đi chơi đi du lịch',
      link: 'https://cms.duocnv.top/san-pham/dep-sandal-nu-crocs-baya-platform-sieu-dep-chac-chan-nhe-ben-thoi-trang-di-choi-di-du-lich/',
      price: '330000',
      sale_price: '330000',
      flash_sale_start: '2024-12-15 08:00:00',
      flash_sale_end: '2024-12-17 08:00:00',
      image:
        'https://cms.duocnv.top/wp-content/uploads/2024/12/product-dony-_1__f3760f74a16d4e2fa9b9c0f8db9cccc4_master.webp',
    },
    {
      id: 126,
      title: 'Dép sục trẻ em Crocs Car Lightning Mcqueen (Có đèn chớp)',
      link: 'https://cms.duocnv.top/san-pham/dep-suc-tre-em-crocs-car-lightning-mcqueen-co-den-chop/',
      price: '412500',
      sale_price: '412500',
      flash_sale_start: '2024-12-15 08:00:00',
      flash_sale_end: '2024-12-17 08:00:00',
      image:
        'https://cms.duocnv.top/wp-content/uploads/2024/12/3_72ecfb7494eb4410bf2d0c461314d169_master.webp',
    },
    {
      id: 124,
      title:
        'Dép nữ Christian Dior Dway Slide &#8211; Sang trọng, đẳng cấp, tinh tế',
      link: 'https://cms.duocnv.top/san-pham/dep-nu-christian-dior-dway-slide-sang-trong-dang-cap-tinh-te/',
      price: '605100',
      sale_price: '605100',
      flash_sale_start: '2024-12-15 08:00:00',
      flash_sale_end: '2024-12-17 08:00:00',
      image:
        'https://cms.duocnv.top/wp-content/uploads/2024/12/sssss_637382f482314cd8961ab641d68be148_master.webp',
    },
    {
      id: 75,
      title:
        'Dép Nam Cao Cấp Hermes Izmir &#8211; Sang Trọng, Lịch Lãm | Dony Shop',
      link: 'https://cms.duocnv.top/san-pham/shirt-cream/',
      price: '250',
      sale_price: '250',
      flash_sale_start: '2024-12-15 19:00:00',
      flash_sale_end: '2024-12-16 22:00:00',
      image:
        'https://cms.duocnv.top/wp-content/uploads/2024/12/2_4e5761b9ce204d749ea4cb11b8e0ed76_master.webp',
    },
  ]
}

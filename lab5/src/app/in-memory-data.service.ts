import { categories } from './products';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './../Category';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(){
    const categories =
    [
      {
          name: 'Technologies',
          id: 1,
          products: [
            {
              id: 10,
              name: 'Home Camera',
              rating: 5.0,
              description: 'Blink Mini – Compact indoor plug-in smart security camera, 1080 HD video, night vision, motion detection, two-way audio, Works with Alexa – 1 camera',
              image: 'https://m.media-amazon.com/images/I/61LrV6Id5gL._SL1000_.jpg',
              link: 'https://www.amazon.com/Blink-Mini-plug-security-detection/dp/B07X6C9RMF/ref=sr_1_1_sspa?keywords=home+security+camera&qid=1647162210&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExMUU5UVo5WTNRNlhWJmVuY3J5cHRlZElkPUEwNjU4Nzk2MTFLMkNHUUw4NlBFSCZlbmNyeXB0ZWRBZElkPUEwNTcwOTU3MjdGVkVTRzBNVTc0QiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU='
            },
            {
              id: 11,
              name: 'Electric Aroma',
              rating: 4.6,
              description: 'Rosemoore Lemongrass Reed Diffuser Set /Aroma Reed Diffuser /Reed Diffuser Home Fragrance /Scented Reed Diffuser 200ml with 10 Reed Sticks for Offices, Home, Hotel, Bathroom & Living Room',
              image: 'https://m.media-amazon.com/images/I/71r1ekISeKL._SL1280_.jpg',
              link: 'https://www.amazon.in/dp/B01N9RTTJK/ref=redir_mobile_desktop?_encoding=UTF8&aaxitk=70dee32585dde14a3297b355ae9deaf7&hsa_cr_id=3483055110002&pd_rd_plhdr=t&pd_rd_r=af04c48d-3fff-43c1-add5-6eaceefecd7e&pd_rd_w=AmQTa&pd_rd_wg=lIswu&ref_=sbx_be_s_sparkle_mcd_asin_0_title'
            },
            {
              id: 12,
              name: 'Hair Dryer',
              rating: 4.6,
              description: 'HOT TOOLS Pro Signature Ionic 2200 Turbo Ceramic Hair Dryer',
              image: 'https://m.media-amazon.com/images/I/61AlwppbfYL._SL1500_.jpg',
              link: 'https://www.amazon.com/TOOLS-Signature-Ionic-1875W-Ceramic/dp/B07S63DQZR/ref=sr_1_1_sspa?keywords=hair+dryer&qid=1647162509&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExUVg4WUwzMVBMRTRJJmVuY3J5cHRlZElkPUEwOTgxMzIyMTVSVzE4VFdZUE9CJmVuY3J5cHRlZEFkSWQ9QTA5NTQ4OTUyUzZPSUtTUUI5TUVZJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=='
            },
            {
              id: 13,
              name: 'Wallpaper',
              rating: 4.6,
              description: '[FANTASTIX] Tile Decals GS-703 European Black, 11"x11" 30sheets, Peel and Stick Self-Adhesive Removable PVC Stickers for Kitchen Bathroom Backsplash Furniture Staircase Home Decor',
              image: 'https://m.media-amazon.com/images/I/81ku+tyWPOL._AC_SL1417_.jpg',
              link: 'https://www.amazon.com/FANTASTIX-Self-Adhesive-Removable-Backsplash-Furniture/dp/B08XBFMLDD/ref=sr_1_2_sspa?keywords=wallpaper&qid=1647162625&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExQ1lJM1hXQ1dCTzRTJmVuY3J5cHRlZElkPUEwMTc5OTEwMUY2UVhFTlZENkdMVyZlbmNyeXB0ZWRBZElkPUEwNjMyMTc2RFNHRlg2MjNFWUZRJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=='
            },
            {
              id: 14,
              name: 'Remote Control',
              rating: 4.6,
              description: 'GM Genuine Parts 84012997 Video Remote Control',
              image: 'https://m.media-amazon.com/images/I/71wvbvPWOHL._AC_SL1500_.jpg',
              link: 'https://www.amazon.com/ACDelco-84012997-Original-Equipment-Control/dp/B01MFAHMA9/ref=sr_1_13?c=ts&keywords=Audio+%26+Video+Remote+Controls+%26+Accessories&qid=1647162726&s=aht&sr=1-13&ts_id=173244'
            },
            {
              id: 15,
              name: 'Air Control',
              rating: 4.6,
              description: 'Xiaomi Mi Home Air Conditioner Companion Smart WiFi ZigBee Technology Power Monitor APP Control',
              image: 'https://m.media-amazon.com/images/I/512eJzRiUHL._AC_SL1020_.jpg',
              link: 'https://www.amazon.co.uk/Conditioner-Companion-Technology-Monitor-Control/dp/B07MZTPL4Q'
            }
          ]
      },
      {
          name: 'Computers',
          id: 2,
          products:
          [
            {
              id: 20,
              name: 'CHUWI LapBook',
              rating: 5,
              description: 'CHUWI LapBook Pro 14.1 inch Windows 10 Laptop, 1080P Laptop Computer with Intel Gemini-Lake N4100 8GB RAM / 256GB SSD, Support Linux, 4K, BT 4.0, Dual WiFi',
              image: 'https://m.media-amazon.com/images/I/61LdLJ4RyAL._AC_SL1500_.jpg',
              link: 'https://www.amazon.com/CHUWI-LapBook-Windows-Fanless-Computer/dp/B07TTFSRSJ'
            },
            {
              id: 21,
              name: 'Drawing Digital Tablet',
              rating: 4.9,
              description: 'HUION KAMVAS Pro 16 Graphics Drawing Tablet with Screen Full-Laminated Tilt Battery-Free Stylus Touch Bar Adjustable Stand, Compatible with Windows and Mac, 15.6inch Pen Display',
              image: 'https://m.media-amazon.com/images/I/71LJYirFqAL._AC_SL1500_.jpg',
              link: 'https://www.amazon.com/Drawing-Monitor-Full-Laminated-Battery-Free-Adjustable/dp/B07RXZC12J/ref=sr_1_2_sspa?c=ts&keywords=Computer+Graphics+Tablets&qid=1647163160&s=pc&sr=1-2-spons&ts_id=16034531&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExWTc5R0tCMEc0NzhGJmVuY3J5cHRlZElkPUEwOTYyNDcyMkpYUllEOENRM1BSVSZlbmNyeXB0ZWRBZElkPUEwNzA0MDA1M0dHUlBDVFpPQzBLSiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU='
            },
            {
              id: 22,
              name: 'RAM',
              rating: 4.8,
              description: 'Corsair Vengeance LPX 16GB (2x8GB) DDR4 DRAM 3200MHz C16 Desktop Memory Kit - Black (CMK16GX4M2B3200C16)',
              image: 'https://m.media-amazon.com/images/I/51XWCgqIUVL._AC_SL1150_.jpg',
              link: 'https://www.amazon.com/Corsair-Vengeance-3200MHz-Desktop-Memory/dp/B0143UM4TC/ref=sr_1_3?c=ts&keywords=Computer%2BMemory&qid=1647163290&s=pc&sr=1-3&ts_id=172500&th=1'
            },
            {
              id: 23,
              name: 'Graphic Video Card',
              rating: 4.6,
              description: 'XFX Speedster QICK319 AMD Radeon RX 6700 XT Black Gaming Graphics Card with 12GB GDDR6 HDMI 3xDP, AMD RDNA 2 RX-67XTYPBDP',
              image: 'https://m.media-amazon.com/images/I/41lXeh15ptS._AC_.jpg',
              link: 'https://www.amazon.com/XFX-Speedster-QICK319-Graphics-RX-67XTYPBDP/dp/B091ZKN2RV/ref=sr_1_2?c=ts&keywords=Computer+Graphics+Cards&qid=1647163406&s=pc&sr=1-2&ts_id=284822'
            },
            {
              id: 24,
              name: 'Gaming Mouse',
              rating: 4.9,
              description: 'Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K Sensor, 25,600 DPI, RGB, Adjustable Weights, 11 Programmable Buttons, On-Board Memory, PC / Mac',
              image: 'https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SL1500_.jpg',
              link: 'https://www.amazon.com/Logitech-G502-Performance-Gaming-Mouse/dp/B07GBZ4Q68/ref=sr_1_3?c=ts&keywords=PC+Gaming+Mice&qid=1647163487&s=videogames&sr=1-3&ts_id=402052011'
            }
          ]
      },
      {
          name: 'Smartphones',
          id: 3,
          products:
          [
            {
              id: 30,
              name: 'Card Memory',
              rating: 4.9,
              description: 'SanDisk 128GB Extreme PRO SDXC UHS-I Card - C10, U3, V30, 4K UHD, SD Card - SDSDXXY-128G-GN4IN',
              image: 'https://m.media-amazon.com/images/I/61ao4RlOuCL._AC_SL1000_.jpg',
              link: 'https://www.amazon.com/SanDisk-128GB-Extreme-UHS-I-SDSDXXY-128G-GN4IN/dp/B07H9DVLBB/ref=sr_1_3?c=ts&keywords=Memory+Cards&qid=1647163592&s=pc&sr=1-3&ts_id=516866'
            },
            {
              id: 31,
              name: 'Case',
              rating: 4.9,
              description: 'Elando Crystal Clear Case Compatible with iPhone 12/12 Pro, Non-Yellowing Shockproof Protective Phone Case Slim Thin, 6.1 inch',
              image: 'https://m.media-amazon.com/images/I/71vDmoWaCuL._AC_SL1500_.jpg',
              link: 'https://www.amazon.com/Elando-Compatible-Non-Yellowing-Shockproof-Protective/dp/B08RNNJN4P/ref=sr_1_3?keywords=case&qid=1647163752&sr=8-3'
            },
            {
              id: 32,
              name: 'Airpods',
              rating: 4.9,
              description: 'Apple AirPods 2nd with Charging Case Earphone Original Bluetooth Headphones for iPhone 11 XR Plus iPad MacBook Apple Watch',
              image: 'https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_SL1500_.jpg',
              link: 'https://www.amazon.com/Apple-MLWK3AM-A-AirPods-Pro/dp/B09JQMJHXY/ref=sr_1_2?keywords=apple+airpods&qid=1647163868&sr=8-2'
            },
            {
              id: 33,
              name: 'Airpods',
              rating: 4.9,
              description: 'Apple AirPods 2nd with Charging Case Earphone Original Bluetooth Headphones for iPhone 11 XR Plus iPad MacBook Apple Watch',
              image: 'https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_SL1500_.jpg',
              link: 'https://www.amazon.com/Apple-MLWK3AM-A-AirPods-Pro/dp/B09JQMJHXY/ref=sr_1_2?keywords=apple+airpods&qid=1647163868&sr=8-2'
            },
            {
              id: 34,
              name: 'Case headphones',
              rating: 4.7,
              description: 'Ginsco Headphone Carrying Case Storage Bag Pouch Compatible with E7 PRO XB950N1 XB950B1 QC35',
              image: 'https://m.media-amazon.com/images/I/715Gdv9p4LL._AC_SL1500_.jpg',
              link: 'https://www.amazon.com/Ginsco-Headphone-Carrying-Storage-XB950B1/dp/B019Z81V3M/ref=sr_1_3?crid=37SMC932LCY2Z&keywords=case+headphones&qid=1647163971&sprefix=case+hea%2Caps%2C373&sr=8-3'
            }
          ]
      },
      {
          name: 'Personal things',
          id: 4,
          products:
          [
            {
              id: 40,
              name: 'Stickers',
              rating: 4.6,
              description: '100Pcs Custom Stickers Cartoon Sticker Cute Sticker Scrapbooking Stationery Label Sticker Laptop Sticker Bike Bomb Sticker Girls',
              image: 'https://m.media-amazon.com/images/I/91THESqNgVL._AC_SL1500_.jpg',
              link: 'https://www.amazon.com/300PCS-Stickers-Waterproof-Skateboard-Bicycle/dp/B09BYMK1JP/ref=sr_1_3?crid=ZOJ4Y5QASGI9&keywords=stickers&qid=1647164115&sprefix=sticker%2Caps%2C260&sr=8-3'
            },
            {
              id: 41,
              name: 'Backpack',
              rating: 4.6,
              description: 'Extra Large 52L Travel Laptop Backpack with USB Charging Port Fit 17 Inch Laptops for Men Women',
              image: 'https://m.media-amazon.com/images/I/61Ns-H-YLtL._AC_SL1200_.jpg',
              link: 'https://www.amazon.com/Travel-Laptop-Backpack-Charging-Laptops/dp/B07V4R4Z77/ref=sr_1_4?crid=1E6Q8K8LH8QN5&keywords=backpack&qid=1647164251&sprefix=backpac%2Caps%2C280&sr=8-4'
            },
            {
              id: 42,
              name: 'Stickers',
              rating: 4.6,
              description: '100Pcs Custom Stickers Cartoon Sticker Cute Sticker Scrapbooking Stationery Label Sticker Laptop Sticker Bike Bomb Sticker Girls',
              image: 'https://m.media-amazon.com/images/I/91THESqNgVL._AC_SL1500_.jpg',
              link: 'https://www.amazon.com/300PCS-Stickers-Waterproof-Skateboard-Bicycle/dp/B09BYMK1JP/ref=sr_1_3?crid=ZOJ4Y5QASGI9&keywords=stickers&qid=1647164115&sprefix=sticker%2Caps%2C260&sr=8-3'
            },
            {
              id: 43,
              name: 'KeyChain',
              rating: 4.6,
              description: 'Apple AirTag Leather Key Ring - Saddle Brown',
              image: 'https://m.media-amazon.com/images/I/71fCQJFZLNS._AC_SL1500_.jpg',
              link: 'https://www.amazon.com/Apple-AirTag-Leather-Key-Ring/dp/B0932Q8QY3/ref=sr_1_7?crid=3CIWGQBX5OYIA&keywords=keychain&qid=1647164371&sprefix=keychai%2Caps%2C422&sr=8-7'
            },
            {
              id: 44,
              name: 'Desktop',
              rating: 4.6,
              description: 'Foldable Desktop Lectern Podium Stand-Portable Folding Tabletop Desk Teacher Speaker Lecture Classroom Presentation Stand, Laptop Computer Book Holder-Pyle PLCTND41',
              image: 'https://m.media-amazon.com/images/I/81F2hqq-MHL._AC_SL1500_.jpg',
              link: 'https://www.amazon.com/Stand-Portable-Classroom-Presentation-Holder-Pyle-PLCTND41/dp/B01IINGTFA/ref=sr_1_32?crid=2TM7YAM5CJ3JK&keywords=tabletop&qid=1647164452&sprefix=tabletop%2Caps%2C323&sr=8-32'
            }
          ]
      }
    ];
  return{categories};
  }


  genID(categories: Category[]):number
  {
      return categories.length > 0 ? Math.max(...categories.map(category => category.id)) + 1 :11;
  }

}
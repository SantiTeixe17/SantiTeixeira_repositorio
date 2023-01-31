const products = [
  {
    id: '1',
    title: 'https://celadasa.vtexassets.com/arquivos/ids/212161-800-auto?v=637928054484270000&width=800&height=auto&aspect=true',
    category: 'categoria3',
    text: 'Nike Airmax 200',
    price: "$2000",
    stock:"5",  
   },
   
  {
    id: '2',
    title: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/678/065/products/el-https://http2.mlstatic.com/D_NQ_NP_677153-MPE49046440259_022022-W.jpgsolitario-wtf-orange-sweatshirt-back_1024x10242x1-ce80debc60ee8a0e7816226652563678-1024-1024.jpeg',
    category: 'categoria3',
    text: 'Nike Waffle Urbano Yb477',
    price: "$1500",
    stock:"7",
   },
  {
    id: '3',
    title: 'https://www.digitalsport.com.ar/files/products/61fad350783cc-581507-500x500.jpg',
    category: 'categoria3',
    text: 'AIR MAX FURYOSA NRG NIKE',
    price: "$1700",
    stock:"10",  
  },
  {
    id: '4',
    title: 'https://sevensport.vteximg.com.br/arquivos/ids/288790-500-500/CJ0630-600_1.jpg?v=637376940548000000',
    category: 'categoria3',
    text: ' NIKE W AIR MAX 200 SE CJ0630-600',
    price: "$1200",
    stock:"15",
  }, 
  {
    id: '5',
    title: 'https://http2.mlstatic.com/D_NQ_NP_618570-MLA32646837228_102019-O.webp',
    category: 'categoria3',
    text: 'Nike Air Max Command',
    price: "$1000",
    stock:"12",
  },
  {
    id: '6',
    title: 'https://www.digitalsport.com.ar/files/products/6007196c5ed08-508721-500x500.jpg',
    category: 'categoria3',
    text: 'AIR FORCE 1 07 PRM WORLDWIDE NIKE',
    price: "$2000",
    stock:"10",  
   },
   
  {
    id: '7',
    title: 'https://www.moov.com.ar/ohttps://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw7c6277a6/products/NI_DH7453-001/NI_DH7453-001-1.JPGn/demandware.static/-/Sites-dabra-catalog/default/dw7c6277a6/products/NI_DH7453-001/NI_DH7453-001-1.JPG',
    category: 'categoria3',
    text: 'Nike Air Force 1 High 07 Lv8',
    price: "$1800",
    stock:"5",
   },
  {
    id: '8',
    title: 'https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatilla-nike-air-max-excee-mujer-negra510010cd5432003-11.jpg',
    category: 'categoria2',
    text: 'Nike Air Max Excee',
    price: "$1100",
    stock:"17",  
  },
  {
    id: '9',
    title: 'https://cdn.shopify.com/s/files/1/0594/7506/7048/products/zapatillas-nike-sb-bruin-max-vapor-textile-negro-blanco-indy-5.jpg?v=1661925999',
    category: 'categoria2',
    text: 'Nike Sb Bruin Max Vapor Textile Negro Blanco',
    price: "$1300",
    stock:"8",
  }, 
  {
    id: '10',
    title: 'https://www.tripstore.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/C/W/CW0730-001_0.jpg',
    category: 'categoria2',
    text: 'Nike React Vision',
    price: "$1500",
    stock:"10",
  },
  {
    id: '11',
    title: 'https://http2.mlstatic.com/D_NQ_NP_748585-MLA45510402326_042021-O.jpg',
    category: 'categoria2',
    text: 'Nike Court Vision Low Premium',
    price: "$1200",
    stock:"12",
  },
  {
    id: '12',
    title: 'https://www.neo2.com/wp-content/uploads/2020/09/nike-zapatillas-novedades-septiembre-2020-dunk-low-6.jpgg',
    category: 'categoria2',
    text: 'Air Jordan 1 + Dunk Low Disrupt',
    price: "$2500",
    stock:"5",
  },
  {
    id: '13',
    title: 'https://http2.mlstatic.com/D_NQ_NP_994844-MLA45629460104_042021-O.jpg',
    category: 'categoria2',
    text: 'Nike Air Max Command',
    price: "$1900",
    stock:"12",
  },
  {
    id: '14',
    title: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/disuwww5uxkqulu2aivh/air-max-plus-iii-zapatillas-TG71Wt.png',
    category: 'categoria2',
    text: 'Nike Air Max',
    price: "$1700",
    stock:"15",
  },
]

  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout (() =>{
        resolve(products)
      }, 500)
    })
  }

  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter(product => product.category === categoryId))
      }, 500)
    })
  }

  export const getProductsById = (id) => {
    return new Promise((resolve) => {
        setTimeout (() =>{
          resolve(products.find(product => product.id === id))
        }, 500)
      })
  } 


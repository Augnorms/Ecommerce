
interface Products{
    id:number,
   Image:string,
   Thumbnails:string,
   Company:string,
   Heading:string,
   Description:string,
   Amount:number,
   Quantity:number
}

   export const fetchProducts: Products[] = [
      {
        id:1,
        Image: '/images/image-product-1.jpg',
        Thumbnails: '/images/image-product-1-thumbnail.jpg',
        Company: 'Alister',
        Heading: 'New Sneakers',
        Description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they ll withstanding everything the weather can offer',
        Amount: 125.00,
        Quantity: 10
      },

      {
          id:2,
          Image: '/images/image-product-2.jpg',
          Thumbnails: '/images/image-product-1-thumbnail.jpg',
          Company: 'NormsStore',
          Heading: 'New Levels',
          Description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they ll withstanding everything the weather can offer',
          Amount: 120.00,
          Quantity: 8
        },

        {
          id:3,
          Image: '/images/image-product-3.jpg',
          Thumbnails: '/images/image-product-3-thumbnail.jpg',
          Company: 'FloreStore',
          Heading: 'New kicks',
          Description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they ll withstanding everything the weather can offer',
          Amount: 105.00,
          Quantity: 9
        },

        {
          id:4,
          Image: '/images/image-product-4.jpg',
          Thumbnails: '/images/image-product-4-thumbnail.jpg',
          Company: 'RuthsCollections',
          Heading: 'New Sneakers Levels',
          Description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they ll withstanding everything the weather can offer',
          Amount: 130.00,
          Quantity: 10
        }
    ]; 
  


 
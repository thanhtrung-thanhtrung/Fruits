// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/products';


const Product = () => {
  const { productId } = useParams();
  const { products,currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(null); // Thay đổi mặc định thành null thay vì false
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = () => {
    // Tìm sản phẩm theo productId
    const product = products.find((item) => item.id === parseInt(productId)); // Đảm bảo so sánh đúng kiểu dữ liệu
    if (product) {
      setProductData(product);
      setImage(product.image[0] || 'defaultImage.jpg'); // Đảm bảo có ảnh mặc định
    } else {
      console.log('Product not found');
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]); // Chỉ phụ thuộc vào productId

  // Nếu productData chưa được tải, sẽ không render hình ảnh
  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/*Data*/}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/*image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt={`product-image-${index}`}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="Main product" />
          </div>
        </div>
        {/*info */}
        <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className='pl-2'>(122)</p>
            </div>
            <p className='mt-5 text-3xl font-medium '>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
              <p>SELECT KILOGAM</p>
              <div className='flex gap-2'>
              {productData.sizes.map((item,index)=>(
                <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item===size ?'border-orange-500':''}`} key={index}>{item}</button>
              ))}
              </div>
            </div>
            <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
            <hr className='mt-8 sm:w-4/5'/>
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% fresh fruit.</p>
              <p>Cash on delivery available on this product.</p>
              <p>Easy return and exchange policy within 2 days</p>
            </div>
        </div>
      </div>
      {/*review */}
      <div className='mt-20'>
          <div className='flex'>
            <b className='border px-5 py-3 text-sm'>Description</b>
            <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
          </div>
          <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
              <p>Fresh fruits are not only delicious but also packed with essential vitamins and nutrients. They provide a natural, healthy snack that boosts energy and supports overall well-being. With their wide variety of flavors, textures, and colors, fresh fruits make a refreshing addition to any meal or smoothie. They are a perfect choice for anyone looking to maintain a balanced and healthy diet.</p>
              <p>Fresh fruits are not only delicious but also packed with essential vitamins and nutrients. They provide a natural, healthy snack that boosts energy and supports overall well-being.</p>
          </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div> // Hiển thị gì đó khi chưa có dữ liệu
  );
};

export default Product;

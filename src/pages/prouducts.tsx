/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';

import Button from '@/components/buttons/Button';
const Products = ({ productData }: any) => {
  const { products } = productData.result;

  return (
    <div className='w-full bg-dark'>
      <div className='pl-3'>
        <h1 className='text-white'>Products</h1>
        <p className='font-mono font-bold text-orange-400'>
          using SSR - server side Render
        </p>
      </div>
      <div className='mx-auto grid w-[90%] grid-cols-4 gap-5 pt-2 '>
        {products.map((items: any, index: any) => {
          return (
            <div
              className='my-3 w-full rounded-lg bg-black shadow-md lg:max-w-sm'
              key={index}
            >
              <Image
                className='h-48 w-full rounded-sm object-cover'
                src={items.thumbnail}
                alt='image'
              />
              <div className='p-4'>
                <h4 className='text-xl font-semibold text-blue-600'>
                  {items.title}
                </h4>
                <p className='mb-2 leading-normal text-white'>
                  {items.description}
                </p>
                <p className='mb-2 leading-normal text-white'>{items.price}$</p>

                <Button>Read more</Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/products');
  const data = await res.json();
  return {
    props: {
      productData: data,
    },
  };
}

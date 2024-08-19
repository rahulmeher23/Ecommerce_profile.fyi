import React from 'react'

const CategoriesCard = (category) => {
  console.log(category);
  const { name, img } = category
  return (
    <>
      {/* <div
        key={category.name}
        className="font-italiana cursor-pointer flex flex-col gap-2 relative md:w-[350px] h-[450px]  overflow-hidden   xl:transform xl:transition xl:duration-500 xl:ease-in-out xl:hover:scale-105 xl:hover:shadow-2xl"
      >
        <img
          src={category.img}
          alt={category.name}
          className="w-full h-[80%] sm:h-full object-cover group-hover:opacity-80 transition duration-500 ease-in-out"
        />
        <div className="hidden absolute inset-0 bg-black bg-opacity-60 sm:flex flex-col justify-end items-start text-left opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out p-6">
          <h2 className="text-white tracking-wider text-3xl font-bold mb-3">
            {category.name}
          </h2>
          <p className=" font-italiana text-white tracking-widest text-lg mb-4">
            {category.description}
          </p>
        </div>

        <div className='sm:hidden mb-4'>
          <h2 className="font-tenor  text-black tracking-wider text-xl font-bold">
            {category.name.toUpperCase()}
          </h2>
          <p className=" font-italiana text-black tracking-widest text-sm mb-4">
            {category.description}
          </p>
        </div>
      </div> */}

      <div
        key={category.name}
        className="font-italiana cursor-pointer flex flex-col gap-2 relative md:w-[350px] h-[450px]  group overflow-hidden shadow-md  transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
      >
        <img
          src={category.img}
          alt={category.name}
          className="w-full h-[75%] sm:h-full object-cover group-hover:opacity-80 transition duration-500 ease-in-out"
        />
        <div className="hidden  absolute inset-0 bg-black bg-opacity-60 sm:flex flex-col justify-end items-start text-left opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out p-6">
          <h2 className="text-white tracking-wider text-3xl font-bold mb-3">
            {category.name}
          </h2>
          <p className=" font-italiana text-white tracking-widest text-lg mb-4">
            {category.description}
          </p>

        </div>

        <div className='sm:hidden  mx-2 '>
          <h2 className="font-tenor  text-black tracking-wider text-xl font-bold">
            {category.name.toUpperCase()}
          </h2>
          <p className=" font-italiana text-black tracking-widest text-sm mb-4">
            {category.description}
          </p>
        </div>
      </div>


    </>
  )
}

export default CategoriesCard
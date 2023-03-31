function ServiceCard({ data, index }) {
  return (
    <div
      onMouseEnter={() => {
        const title_element = document.getElementById(index);
        title_element.classList.add("text-orange-900");
        title_element.classList.add("text-gray-900");
      }}
      onMouseLeave={() => {
        const title_element = document.getElementById(index);
        title_element.classList.remove("text-orange-900");
        title_element.classList.remove("text-gray-900");
      }}
      className="w-full relative p-8 h-96 lg:h-[150pm] bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition duration-300 ease-in-out"
    >
      <div className="w-full">
        <img src={data.img} className="v-10 h-10" />
        <h2 className="text-xl font-semibold text-gray-900 pt-8">
          {data.title}
        </h2>
        <p className="text-l font-regular text-gray-500 pt-4">
          {data.description}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 p-8">
        <h2 id={index} className="items-end text-xl font-semibold text-gray-900 pt-8">
          Learn More
        </h2>
      </div>
    </div>
    // <div
    //   key={post.title}
    //   className="flex flex-col overflow-hidden rounded-lg shadow-lg"
    // >
    //   <div className="flex-shrink-0">
    //     <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
    //   </div>
    //   <div className="flex flex-1 flex-col justify-between bg-white p-6">
    //     <div className="flex-1">
    //       <p className="text-sm font-medium text-indigo-600">
    //         <a href={post.category.href} className="hover:underline">
    //           {post.category.name}
    //         </a>
    //       </p>
    //       <a href={post.href} className="mt-2 block">
    //         <p className="text-xl font-semibold text-gray-900">{post.title}</p>
    //         <p className="mt-3 text-base text-gray-500">{post.description}</p>
    //       </a>
    //     </div>
    //     <div className="mt-6 flex items-center">
    //       <div className="flex-shrink-0">
    //         <a href={post.author.href}>
    //           <span className="sr-only">{post.author.name}</span>
    //           <img
    //             className="h-10 w-10 rounded-full"
    //             src={post.author.imageUrl}
    //             alt=""
    //           />
    //         </a>
    //       </div>
    //       <div className="ml-3">
    //         <p className="text-sm font-medium text-gray-900">
    //           <a href={post.author.href} className="hover:underline">
    //             {post.author.name}
    //           </a>
    //         </p>
    //         <div className="flex space-x-1 text-sm text-gray-500">
    //           <time dateTime={post.datetime}>{post.date}</time>
    //           <span aria-hidden="true">&middot;</span>
    //           <span>{post.readingTime} read</span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default ServiceCard;

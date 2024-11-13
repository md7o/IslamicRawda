// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const HeaderContent = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { header } = location.state || {};

//   const handleBookNavigation = (content) => {
//     navigate("/book", { state: { bookData: content } });
//   };

//   return (
//     <div>
//       <div className="bg-darkColor h-full w-full md:w-3/4 mx-auto rounded-3xl">
//         <h1 className="text-3xl font-bold text-white text-center py-10">
//           {header.headerTitle}
//         </h1>
//         <div className="flex flex-col mx-auto text-right bg-primaryColor text-white w-full max-w-3xl rounded-SmallRounded p-6 my-5 space-y-2">
//           {header.content ? (
//             header.content.map((items, index) => (
//               <button
//                 key={index}
//                 className="flex flex-col ml-auto"
//                 onClick={() => handleBookNavigation(items)}
//               >
//                 <p className="text-xl my-1 overflow-hidden text-ellipsis whitespace-nowrap hover:text-darkColor duration-100">
//                   {items.title} -
//                 </p>
//               </button>
//             ))
//           ) : (
//             <p className="text-lg text-red-500">No content available</p>
//           )}
//           <div className="mt-auto pt-4">
//             <button className="w-full bg-white text-primaryColor rounded-SmallRounded hover:rounded-2xl hover:bg-gray-300 duration-300 py-2">
//               &lt; إستكشف المزيد
//             </button>
//           </div>
//         </div>
//       </div>
//       <p className="text-xl text-darkColor text-center font-bold my-2">
//         جميع الحقوق محفوظة لموقع الروضة الإسلامي 1444هـ - 2023م
//       </p>
//     </div>
//   );
// };

// export default HeaderContent;

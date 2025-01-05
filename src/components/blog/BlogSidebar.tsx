import { PiMagnifyingGlassBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { blogCategories, blogTags, recentPost } from "../../data/data";

function BlogSidebar() {
  return (
    <div className="sticky top-32 flex flex-col gap-6 lg:gap-10">
      <div className="border p-6 sm:p-8">
        <h4 className=" heading-4 pb-5">Search</h4>
        <div className="flex justify-between items-center">
          <input
            type="text"
            className="border px-6 py-3 outline-none placeholder:text-bodyText text-bodyText w-full"
            placeholder="Search here..."
          />
          <button className="block text-2xl text-white bg-p1 p-3 border border-p1 hover:bg-s2 hover:text-mainTextColor duration-500 hover:border-mainTextColor">
            <PiMagnifyingGlassBold />
          </button>
        </div>
      </div>

      <div className="border p-6 sm:p-8">
        <h4 className="heading-4 mb-4 md:mb-6 pb-2 relative after:absolute after:w-[20%] after:h-[2px] after:bottom-0 after:left-0 after:bg-p1 ">
          Categories
        </h4>
        <ul className="flex flex-col gap-4 justify-start items-start">
          {blogCategories.map(({ id, name, count }) => (
            <li key={id} className="w-full border-b last:border-none">
              <Link
                to={"#"}
                className="flex justify-between items-center pb-4 border-b last:border-transparent w-full hover:text-s2 duration-300"
              >
                <span>{name}</span>
                <span>({count})</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="border p-6 sm:p-8">
        <h4 className="heading-4 mb-4 md:mb-6 pb-2 relative after:absolute after:w-[20%] after:h-[2px] after:bottom-0 after:left-0 after:bg-p1 ">
          Recent Post
        </h4>
        <div className="flex justify-start items-start flex-col gap-5">
          {recentPost.map(({ id, img, date, title }) => (
            <div className="flex justify-center items-center gap-4" key={id}>
              <div className=" overflow-hidden self-stretch flex justify-center items-center ">
                <img
                  src={img}
                  alt=""
                  className=" overflow-hidden object-cover w-[100px]"
                />
              </div>
              <div className=" w-full">
                <p className="pb-2">
                  {date}, {new Date().getFullYear()}
                </p>
                <Link
                  to={"/blog-details"}
                  className=" font-bold hover:text-s3 duration-300"
                >
                  {title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border p-6 sm:p-8">
        <h4 className="heading-4 mb-4 md:mb-6 pb-2 relative after:absolute after:w-[20%] after:h-[2px] after:bottom-0 after:left-0 after:bg-p1 ">
          Recent Post
        </h4>
        <div className="flex justify-start items-start flex-wrap gap-2">
          {blogTags.map(({ id, name }) => (
            <Link
              to={"/blog"}
              className="flex justify-center items-center border text-bodyText px-4 py-2 hover:text-mainTextColor hover:bg-s2 hover:border-mainTextColor duration-300"
              key={id}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogSidebar;

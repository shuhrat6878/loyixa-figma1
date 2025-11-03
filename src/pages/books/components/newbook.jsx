import { useParams } from "react-router-dom";
import { Yangi } from "../../../data/newbook.js";
import { AudioBook } from "../../../data/newaudio.js";
import naushnik from "../../../assets/icons/naushniki.svg"
import yulduz from "../../../assets/icons/yulduzcha.svg"
import kament from "../../../assets/icons/komentaria.svg"

export const Newbook = () => {
  const { id } = useParams();
  console.log(id)
  const book = Yangi.find((b) => b.id === Number(id)) || AudioBook.find((b) => b.id === Number(id));

  return (
    <div>
      <div className="container">
        <div className=" flex gap-10 py-10">
          <div className="w-1/3">
            <img
              src={book.image}
              alt={book.title}
              className="rounded-lg shadow-lg w-full"
            />

          </div>


          <div className="w-2/3 ">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
              <span><img src={naushnik} alt="" /></span>
              <span><img src={yulduz} alt="" /></span>
              <span><img src={kament} alt="" /></span>
            </div>
            <h2 className="text-gray-400 mb-4">{book.author}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>

            <div className=" w-[452px] h-[52px] flex justify-between mt-4 mb-[47px]">
              <div>
                <p>Муаллиф</p>
                <h2 className="text-[18px] font-bold">{book.author}</h2>
              </div>
              <div>
                <p>Нашриёт</p>
                <h2 className="text-[18px] font-bold">{book.publisher}</h2>
              </div>
              <div>
                <p>Йил</p>
                <h2 className="text-[18px] font-bold">{book.date}</h2>
              </div>
            </div>


            <div className="border-t-2 border-dashed border-gray-400 pt-7 flex justify-between">
              <button className="border px-5 py-2 rounded-lg hover:cursor-pointer hover:border border-blue-600 hover:bg-white hover:text-blue-600 hover:shadow-[5px_5px_10px_#facc15]">
                Сотиб олиш – {book.price}
              </button>
              <button className="  border  px-5 py-2 rounded-lg hover:cursor-pointer hover:border border-blue-600 hover:bg-white hover:text-blue-600 hover:shadow-[5px_5px_10px_#facc15]">
                Аудио тинглаш  – {book.price2}
              </button>
              <button className="border  px-5 py-2 rounded-lg hover:cursor-pointer hover:border border-blue-600 hover:bg-white hover:text-blue-600 hover:shadow-[5px_5px_10px_#facc15]">
                Онлайн укиш  – {book.price3}
              </button>
            </div>


          </div>
        </div>
        <div>
          <table className="w-full text-left border-collapse mb-4">
            <tbody>
              <tr><td className="font-semibold">ISBN:</td><td>{book.isbn}</td></tr>
              <tr><td className="font-semibold">Тил:</td><td>{book.lang}</td></tr>
              <tr><td className="font-semibold">Саҳифалар:</td><td>{book.pages}</td></tr>
              <tr><td className="font-semibold">Нашриёт:</td><td>{book.publisher}</td></tr>
              <tr><td className="font-semibold">Чоп этилган сана:</td><td>{book.date}</td></tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

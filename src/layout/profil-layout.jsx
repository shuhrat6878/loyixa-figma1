import { Link, Outlet } from "react-router-dom";
import sugdiona from "../assets/sugdiona.png"
import ob from "../assets/icons/obunadagi.svg"

export const ProfileLoyout = () => {
    return (

        <div>
            <div className="container">
                <div className="flex mb-[75px]">
                    <p className="text-blue-500">Бош сахифа /</p>
                    <p>Профиль</p>
                </div>
                <div className=" flex gap-8 p-6 h-[216px]  bg-gray-50 " >
                    <div>
                        <img src={sugdiona} alt="rasm qiz" />
                    </div>
                    <div className="">
                        <h2 className="text-2xl font-bold">Суғдиёна Икромова</h2>
                        <p className="mt-3">+998 90 253 77 53</p>
                        <p className="text-[#9a9a9a] mt-6">ID: 0001  Баланс: 45 000 сўм</p>
                    </div>
                </div>
                <div className="flex gap-10 py-10">
                    <div className=" rounded-lg p-5 w-[250px]">
                        <div className="flex flex-col gap-4 font-medium  bg-gray-50">
                            <Link className="flex gap-4" to="/profile" ><img src={ob} alt="" /><h2>Обуна бўлиш</h2></Link>
                            <Link className="flex gap-4" to="/profile/xisob"><img src={ob} alt="" /><h2>Э-Хисоб</h2></Link>
                            <Link className="flex gap-4" to="/profile/kitoblarim"><img src={ob} alt="" /><h2>Китобларим</h2></Link>
                            <Link className="flex gap-4" to="/profile/saqlangan"><img src={ob} alt="" /><h2>Сақланганлар</h2></Link>
                            <Link className="flex gap-4" to="/profile/sozlamalar"><img src={ob} alt="" /><h2>Созламалар</h2></Link>
                            <Link className="flex gap-4" to="/profile/tungi"><img src={ob} alt="" /><h2>Тунги режим</h2></Link>
                        </div>
                    </div>

                    <div className="flex-1  rounded-lg p-5 bg-gray-50 shadow-md">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

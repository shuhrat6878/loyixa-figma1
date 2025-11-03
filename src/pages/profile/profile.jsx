import bg from "/src/assets/profileBg.svg"

export const Profile = () => {
    return (
        <div>
            <div className="bg-amber-600 relative">
                <img src={bg} alt="img" />
                <h1 className="absolute top-8 left-8 text-2xl w-[331px] text-white font-bold">Узингиз севган булимга
                    обуна бўлинг</h1> 
            </div>
            <div className="flex justify-between mt-5">
                <div className="">
                    <h2 className="text-3xl font-bold mb-8">Обуна</h2>
                    <p>Обуна давом этиш вакти </p>
                    <input className="p-3 border rounded-md" type="text" placeholder="30-kun" />
                    <p className="mt-8">Булимни танланг</p>
                    <input className="p-3 border rounded-md" type="text" placeholder="Фантастика" />
                    <p className="text-2xl font-bold mt-6" >Обуна 30 кун давом этади</p>
                </div>
                <div className="mr-15  mt-[95px] bg-gray-100">
                    <div className="flex gap-[154px] pb-4 ">
                        <p>Бошланиш вакти</p>
                        <p>12/09/2021</p>
                    </div>
                    <div className="flex justify-between pb-4">
                        <p>Якунланиш вакти</p>
                        <p>12/10/2021</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Обуна нархи</p>
                        <p>12 000 сум</p>
                    </div >
                    <div className="flex justify-center font-bold mt-8 bg-blue-600 rounded-lg">
                        <h2 className="text-white px-[131px] py-2 ">Обуна булиш</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}


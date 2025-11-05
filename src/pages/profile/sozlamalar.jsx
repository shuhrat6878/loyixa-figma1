import React from 'react'
import odamcha from "../../assets/icons/odamcha.svg"

export const Sozlamalar = () => {
    return (
        <div>
            <div className=''>
                <h1 className='text-[32px] font-bold mt-8 ml-8' >Созламалар</h1>
                <div className='flex mt-[59px] gap-[26px] items-center mb-[49px]' >
                    <img className='border-4 rounded-full border-[#3f51b5] p-2' src={odamcha} alt="icon" />
                    <h2 className='text-[#3f51b5] text-[16px]'>Сурат юклаш</h2>
                </div>
                <p className='font-bold mb-1.5'>Исмингиз</p>
                <input className='border p-3 rounded-2xl' type="text" placeholder='Исмингиз' />
                <div className=''>
                    <button className='bg-blue-600 py-[7px] px-[140px] mt-11 rounded-2xl text-white font-bold'>Сақлаш</button>
                </div>
            </div>
        </div>
    )
}


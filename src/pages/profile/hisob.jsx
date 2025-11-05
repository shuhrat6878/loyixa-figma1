import React from 'react'
import bg from "../../assets/hisobBg.svg"
import pay from "../../assets/pay-pay.svg"
import clic from "../../assets/clic.svg"

export const Hisob = () => {
  return (
    <div>
      <div className='ml-8'>
        <h2 className='text-[32px] font-bold mt-8 mb-[30px]'>Э-Хисоб</h2>
        <div className='border flex justify-between bg-[#3f51b5] rounded-2xl'>
          <div className='text-white pl-[26px]'>
            <p className='pt-4 mb-3'>Баланс</p>
            <p className='font-bold mb-6'>45 000 сўм</p>
          </div>
          <img src={bg} alt="img" />
        </div>
        <div className='border rounded-3xl mt-9 mb-5'>
              <img className='px-[423px] py-[23px]' src={pay} alt="img" />
        </div>
        <div className='border rounded-3xl'>
            <img className='px-[423px] py-[23px]' src={clic} alt="svg" />
        </div>
      </div>
    </div>
  )
}

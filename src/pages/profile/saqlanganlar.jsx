import React from 'react'
import kitob from "../../assets/prod1.png"
import yulduz from "../../assets/icons/yulduzKoment.svg"

export const Saqlanganlar = () => {
  return (
    <div>
      <div>
        <div className='flex gap-15'>
          <div className='flex'>
            <img src={kitob} alt="img" />
            <div className='ml-8'>
              <h2 className='text-[18px] font-bold '>Элжернга аталган гуллар</h2>
              <p className='mt-2 mb-2 text-[#3f51b5]'>SIYOSAT, FANTASTIKA</p>
              <img src={yulduz} alt="img" />
              <p className='mt-4 text-red-600'>Ўчириш</p>
            </div>
          </div>
          <div className='flex'>
            <img src={kitob} alt="img" />
            <div className='ml-8'>
              <h2 className='text-[18px] font-bold '>Элжернга аталган гуллар</h2>
              <p className='mt-2 mb-2 text-[#3f51b5]'>SIYOSAT, FANTASTIKA</p>
              <img src={yulduz} alt="img" />
              <p className='mt-4 text-red-600'>Ўчириш</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

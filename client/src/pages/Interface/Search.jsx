import React, { useEffect } from 'react'
import getPlace from '../../components/functions/GetPlace'
const Search = () => {
  useEffect(() => {
    getPlace('wilayaSelect1','dairaSelect1','baladiaSelect1');
  })
  return (
    <div className="search flex flex-col">
      <label htmlFor="address" className='titlesearch'>البحث عن نادي</label>
      <div className="places flex flex-col gap-2">
        <div className="wilaya">
          <label htmlFor="wilaya" className=' ml-1' >الولاية</label>
          <select name="wilaya" id="wilaya" defaultValue={document.querySelectorAll('#wilaya option')[0]} className='wilayaSelect1'>
          </select>
        </div>
        <div className="daira">
          <label htmlFor="daira" className=' ml-1' >الدائرة</label>
          <select name="daira" id="daira" defaultValue={document.querySelectorAll('#daira option')[0]} className='dairaSelect1'>
          </select>
        </div>
        <div className="baladia">
          <label htmlFor="baladia" className=' ml-1' >البلدية</label>
          <select name="baladia" id="baladia" defaultValue={document.querySelectorAll('#baladia option')[0]} className='baladiaSelect1'>
          </select>
        </div>
      </div>
      <button className="search">بحث</button>
    </div>
  )
}

export default Search
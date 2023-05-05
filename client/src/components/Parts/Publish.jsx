import React, { useEffect, useState } from 'react'


const Publish = () => {
    const [image,setImage] = useState('');
    useEffect(()=>{
        var fileInput = document.getElementById('imagePost');
        var fileLabel = document.querySelector('label');
        fileInput.addEventListener('change', function() {
        if (fileInput.value) {
            fileLabel.textContent = fileInput.value;
        } else {
            fileLabel.textContent = 'رفع صورة';
        }
        });
        console.log(image);
    })
  return (
    <form className='publish'>
        <textarea 
            name="description" id="description" placeholder='أكتب منشورا'
            className=' w-full'
            ></textarea>
        <div className="footerPost flex gap-2">
            <input type="file" name="imagePost" id="imagePost" style={{display:'none'}} />
            <label htmlFor="imagePost" onChange={(e)=> {setImage(e.target.files[0])}}>رفع صورة</label>
            <button>نشر</button>
        </div>
    </form>
  )
}

export default Publish
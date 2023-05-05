import React, { useState } from 'react'
import PostImg from '../../assets/salle.jpg'
import comment from '../../assets/comment.png'
import jam from '../../assets/jam.png'
import redjam from '../../assets/redjam.png'

const handleJam = (e) => {
    if(e.target.src === jam) {
      e.target.src = redjam
    } else {
      e.target.src = jam
    }
  }

const Post = () => {
    const [comments, setComments] = useState(false);
  return (
    <div className="post w-full">
        <div className="headPost flex align-middle"><i class="userIcon uil uil-user-circle"></i>
          <div className="info flex flex-col justify-center mr-2">
            <span className='text-lg block'>DZSPORTS Team</span>
            <span className='text-xs'>منذ ساعة</span>
          </div>
        </div>
        <div className="description">
          مرحبا بجميع الأعضاء في موقع DZSPORTS , نتمنى أن ينال الموقع إعجابكم وأن يكون سهل الإستخدام , كما نتمنى أن يسهل لكم هدفكم الرياضي ❤💓 <br/>
          مع تحيات الفريق 👊😍
        </div>
        <img 
          src={PostImg} 
          alt="Post DZSPORTS" 
          className=' mt-2'
        />
        <div className="react">
          <img src={jam}
            onClick={handleJam}
            alt="jam" 
          />
          <img src={comment}
            alt="comment" 
            onClick={(e)=> setComments(!comments)}
          />
        </div>
        <div className={`comments ${comments ? 'show' : ''}`}>
          <div className="comment">شكرا لكم</div>
          <div className="comment">شكرا لكم</div>
          <div className="comment">شكرا لكم</div>
          <div className="comment">شكرا لكم</div>
        </div>
      </div>
  )
}

export default Post
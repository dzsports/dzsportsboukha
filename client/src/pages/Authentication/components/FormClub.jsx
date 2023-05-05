import React, { useEffect, useState } from 'react'
import axios from 'axios'
import getPlace from '../../../components/functions/GetPlace';

const FormClub = (props) => {
        const [user, setUser] = useState({
                typeOfUser:'club',
                name:'',
                email:'',
                password:'',
                phone:'',
                birthday:'',
                wilaya:'',
                daira:'',
                baladia:'',
                sport:'',
                gender:'mix'
        });
        const [checkPassword,setCkeckPassword] = useState('')
        const [errors,setErrors] = useState([]);

        const handleChange = (e) => {
                setUser({...user,[e.target.name]:e.target.value})
        }
        const handleCheckPassword = (event) => {
                const checkedPassword = event.target.value;
                setCkeckPassword(checkedPassword);
        };

        const handleSubmit = async (event) => {
                event.preventDefault();
                // console.log(user);
                let errors = [];
                if (user.name.length < 6) {
                        errors.push('nameError');
                }
                if (user.password.length < 8) {
                        errors.push('passwordError');
                }
                if (user.password !== checkPassword) {
                        errors.push('checkPasswordError');
                }
                if (user.phone.length !== 10) {
                        errors.push('phoneError');
                }
                setErrors(errors);
                console.log(errors);
                if (!errors.length) {
                        const response = await axios.post('http://localhost:4000/signup/',user)
                        console.log(response.data);
                } else {
                        alert("invalid input")
                };
        };

        useEffect(()=>{
                getPlace('wilayaSelect1','dairaSelect1','baladiaSelect1');
        })
        return (
        <form onSubmit={handleSubmit} className={props.activeForm === 'club' ? 'active p-4' : 'hidden'}>
        <div className="parts flex">
                <div className="part flex flex-col gap-4">
                <div className="input flex flex-col">
                        <label htmlFor="name1">إسم النادي الرياضي</label>
                        <input type="text" id='name1' name='name' className={errors.includes('nameError') ? 'red-border':null} onChange={handleChange} required />
                        <small className={errors.includes('nameError') ? ' text-red-700':'hidden'}>يجب أن يكون الإسم أطول من 6 أحرف</small>
                </div>
                <div className="input flex flex-col">
                        <label htmlFor="email1">البريد الإلكتروني</label>
                        <input type="email" id='email1' name='email' required onChange={handleChange}/>
                </div>
                <div className="input flex flex-col">
                        <label htmlFor="phone1">رقم الهاتف</label>
                        <input type="number" id='phone1' name='phone' className={errors.includes('phoneError') ? 'red-border' :null} onChange={handleChange} required />
                        <small className={errors.includes('phoneError') ? ' text-red-700' : 'hidden'} >رقم هاتف غير صالح</small>
                </div>
                <div className="input flex flex-col">
                        <label htmlFor="password1">كلمة السر</label>
                        <input type="password" id='password1' className={errors.includes('passwordError') ? 'red-border' :null} onChange={handleChange} name='password' required />
                        <small className={errors.includes('passwordError') ? ' text-red-700':'hidden'}>يجب أن تكون كلمة السر أطول من 8 أحرف</small>
                </div>
                <div className="input flex flex-col">
                        <label htmlFor="confirmPassword1">تأكيد كلمة السر</label>
                        <input type="password" id='confirmPassword1' name='confirmPassword' className={errors.includes('checkPasswordError') ? 'red-border' :null} onChange={handleCheckPassword} required />
                        <small className={errors.includes('checkPasswordError') ? ' text-red-700':'hidden'}>كلمتي السر غير متطابقتين</small>
                </div>
        </div>
        <div className="part flex flex-col gap-4">
                <div className="input flex flex-col">
                        <label htmlFor="birthday1">تاريخ تأسيس النادي</label>
                        <input type="date" id='birthday1' name='birthday' required onChange={handleChange} />
                </div>
                <div className="input flex flex-col">
                        <label>موقع النادي</label>
                        <div className="places flex flex-col gap-2">
                                <div className="wilaya">
                                        <label htmlFor="wilaya1" className=' ml-1' >الولاية</label>
                                        <select name="wilaya" id="wilaya1" className='wilayaSelect1' defaultValue={document.querySelectorAll('#wilaya1 option')[0]} onChange={handleChange}>
                                                
                                        </select>
                                </div>
                                <div className="daira1">
                                        <label htmlFor="daira" className=' ml-1' >الدائرة</label>
                                        <select name="daira" id="daira1" className='dairaSelect1' defaultValue={document.querySelectorAll('#daira1 option')[0]} onChange={handleChange}>
                                        </select>
                                </div>
                                <div className="baladia">
                                        <label htmlFor="baladia1" className=' ml-1' >البلدية</label>
                                        <select name="baladia" id="baladia1" className='baladiaSelect1' defaultValue={document.querySelectorAll('#baladia1 option')[0]} onChange={handleChange}>
                                        </select>
                                </div>
                        </div>
                </div>
                <div className="input flex flex-col">
                        <label htmlFor="sport1">رياضة النادي</label>
                        <input type="text" name="sport" id="sport1" onChange={handleChange} />
                </div>
        </div>
        </div>
        <input type="submit" value="إنشاء حساب" className=' cursor-pointer'/>
        {/* {errors && <div className="error">{errors}</div>} */}
        </form>
        )
}

export default FormClub
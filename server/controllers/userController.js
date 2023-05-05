const User = require('../models/User');
const bcrypt = require('bcrypt');



exports.signup = async (req,res) => {
    try {
        const { 
                typeOfUser,
                name,
                email,
                password,
                phone,
                birthday,
                wilaya,
                daira,
                baladia,
                sport,
                gender } = req.body;

        const exists = await User.findOne({ phone })
            
        if (exists) {
            throw Error('رقم الهاتف مستخدم مسبقا')
        }
        
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        const newUser = new User({ typeOfUser,
            name,
            email,
            password:hashPassword,
            phone,
            birthday,
            wilaya,
            daira,
            baladia,
            sport,
            gender });
        const savedUser = await newUser.save();
        res.status(201).json({
        message: 'User added successfully',
        user: savedUser,
        });
    } catch (err) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
}
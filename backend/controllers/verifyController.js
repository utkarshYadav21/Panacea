const jwt=require('jsonwebtoken')

module.exports.verify_get=(req,res)=>{
    let token=req.headers['authorization'];
    if(token){
        token=token.split(' ')[1];
        jwt.verify(token,"panacea",(err,decodedToken)=>{
            if(err){
                console.log(err.message);
                return res.status(401).json({ error: 'Please Login' });
            }
            else{
                return res.status(200).json({ message: 'Token is valid.' });
            }
        })
    }
    else{
        return res.status(401).json({ error: 'Please login' });
    }
}
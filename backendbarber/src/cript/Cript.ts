import crypto from 'crypto'
import mysecret from '../secure/CriptSecret'


const Credencials = {
  algorithm: 'aes-256-ctr',
  secret: `${mysecret}`
}


export function Criptografia(text){
var cipher = crypto.createCipher(Credencials.algorithm, Credencials.secret)
var crypted = cipher.update(text,'utf8','hex')
crypted += cipher.final('hex');
return crypted;
}
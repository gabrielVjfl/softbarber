import crypto from 'crypto'
import mysecret from '../secure/CriptSecret'

const Credencials = {
  algorithm: 'aes-256-ctr',
  secret: `${mysecret}`
}

export function decrypt(text){
  var decipher = crypto.createDecipher(Credencials.algorithm, Credencials.secret)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}
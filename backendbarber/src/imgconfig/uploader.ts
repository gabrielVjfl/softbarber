import { Options, diskStorage } from 'multer'
import { resolve } from 'path'
import { randomBytes } from 'crypto'
import multer from 'multer'
import path from 'path'
import crypto from 'crypto'
import aws from 'aws-sdk'
import multerS3 from 'multer-s3'
import {Request, Response} from 'express'
const guidGenerator = require('uuid/v1');


const storageTypes = {

  local: multer.diskStorage({
      destination: (Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
          cb(null, path.resolve(__dirname,  "uploads"))
      },
    filename: (Request, file:any, cb:any) => {
      crypto.randomBytes(16, (err, hash) => {
        if(err) cb(err);
        file.key = `${hash.toString('hex')}-${file.originalname}`;

        const guid = guidGenerator();
        cb(null, guid + '_' + file.key);
       
    })
    },
  
     }),
     s3: multerS3({
         s3: new aws.S3({
             accessKeyId: 'AKIA6IUJH7V5BXFVON6X',
             secretAccessKey: '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',
             region: 'us-east-1'
         }),
         bucket: 'jurere', // pode colocar em variavel ambiente
         contentType: multerS3.AUTO_CONTENT_TYPE,
         acl: 'public-read',
         key: (Request, file:any, cb:any) => {
          crypto.randomBytes(16, (err, hash) => {
              if(err) cb(err);
              const fileName = `${hash.toString('hex')}-${file.originalname}`;
     
              cb(null, fileName)
          })
         }
     })
  }
  
  
  export default  {
  dest: path.resolve(__dirname, 'uploads'),
  storage: storageTypes['s3'],
  
  
  limits: {
      fileSize: 8 * 1024 * 1024
  },
  
} 
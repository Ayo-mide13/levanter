const { Sequelize } = require('sequelize')
const { existsSync } = require('fs')
const path = require('path')
const configPath = path.join(__dirname, './config.env')
const databasePath = path.join(__dirname, './database.db')
if (existsSync(configPath)) require('dotenv').config({ path: configPath })
const toBool = (x) => x == 'true'
const DATABASE_URL =
process.env.DATABASE_URL === undefined ? databasePath : process.env.DATABASE_URL
module.exports = {
  VERSION: require('./package.json').version,
  SESSION_ID: (process.env.SESSION_ID || '').trim({"noiseKey":{"private":{"type":"Buffer","data":"2H9SC0BWNLtnWZrYFq5k6fIYI8D4U8u4o5fOX6h9/HA="},"public":{"type":"Buffer","data":"GmkIyEMYJvl03nH6tUj0npADYWF/nnfCNkscdLSYfnM="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"QKIlTPRVLD+kFLFIGIekn91L/LKpbAFiOJBktsqFsFk="},"public":{"type":"Buffer","data":"3eLygRDtjHNUSdrzy1q2+qghU2DnTy8Oli/vdmVt1zc="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"MLpKO6VS1OW2jA8lHjfeYQ3n6Zl46Tc5ExD+TqA+mXs="},"public":{"type":"Buffer","data":"tYNWFbkrvBnq+eS3+NasHUC+ZrSBTyGlcE/ndodr/Bc="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"sI/PSxqRztNWzo9toZRm5LP0AKwxMeX94amKUvr+DHc="},"public":{"type":"Buffer","data":"ari4b1vsd+YfvDcUt4nY/GDFMvHvI2pLSUwYt2NizX8="}},"signature":{"type":"Buffer","data":"sW3BuUTtFii/dnBcdwyswn8uZuaS3fe8c123nr6u3q22IoSIcmGS7qebjuI4XVfTWqKjZwwQrCzLn4/87fUXgA=="},"keyId":1},"registrationId":79,"advSecretKey":"3qgGRnUjKsjWZtIywP5CAJFwxgtpeN0cPtMwXdItEuU=","processedHistoryMessages":[{"key":{"remoteJid":"2349116279521@s.whatsapp.net","fromMe":true,"id":"055F88BDA6FA139E58C69B16855FB06F"},"messageTimestamp":1734017674},{"key":{"remoteJid":"2349116279521@s.whatsapp.net","fromMe":true,"id":"EB3C340F6F187CA6125D9C27DE336379"},"messageTimestamp":1734017675}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"8xium0EpSZO-LutNF7jCGg","phoneId":"4c2d062f-6269-4415-bad2-0e372fbd6261","identityId":{"type":"Buffer","data":"OUGrbSGkI1WkMqWGiyBeLLlphsA="},"registered":true,"backupToken":{"type":"Buffer","data":"eTxQR7X+434t4fkWhMOfCTA0Qog="},"registration":{},"pairingCode":"YR2RD3DE","me":{"id":"2349116279521:2@s.whatsapp.net","name":"ayomideayanlaja1","lid":"224807715098627:2@lid"},"account":{"details":"CNnbn+YBEICF7LoGGAEgACgA","accountSignatureKey":"XCPz/rmOQyRQWCBROOXNvzNi9Rn2AeaCjw+Ym7BRTQw=","accountSignature":"LeMxr/NEGOZ89vEp3WW3SFzbeo1DLvX/n4RXM8UJ6QTb7QfEh2kI/Z0h6zsPk62DO9Hj+Ryo5HCdWS4207A7Dg==","deviceSignature":"4Amv/Na37tJv8Y0ezcKTP9J7ZuIDkUw4mR1WJhsrtT43xtR4rOYrfcXihAQ/76Uu03WEZHxLf184n/UHYSXOgw=="},"signalIdentities":[{"identifier":{"name":"2349116279521:2@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BVwj8/65jkMkUFggUTjlzb8zYvUZ9gHmgo8PmJuwUU0M"}}],"platform":"smba","lastAccountSyncTimestamp":1734017668}),
  DATABASE:
    DATABASE_URL === databasePath
      ? new Sequelize({
          dialect: 'sqlite',
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: 'postgres',
          ssl: true,
          protocol: 'postgres',
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
  PREFIX: (process.env.PREFIX || '^[.,!]').trim(),
  SUDO: process.env.SUDO || '',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  BRANCH: 'master',
  STICKER_PACKNAME: process.env.STICKER_PACKNAME || '❤️,LyFE',
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE,
  LOG_MSG: process.env.LOG_MSG || 'false',
  RMBG_KEY: process.env.RMBG_KEY || 'null',
  BAILEYS_LOG_LVL: process.env.BAILEYS_LOG_LVL || 'silent',
  LANG: (process.env.LANGUAG || 'en').toLowerCase(),
  WARN_LIMIT: process.env.WARN_LIMIT || 3,
  FORCE_LOGOUT: process.env.FORCE_LOGOUT || 'false',
  BRAINSHOP: process.env.BRAINSHOP || '159501,6pq8dPiYt7PdqHz3',
  DISABLE_BOT: process.env.DISABLE_BOT || 'null',
  ANTILINK_MSG: process.env.ANTILINK_MSG || '_Antilink Detected &mention kicked_',
  ANTISPAM_MSG: process.env.ANTISPAM_MSG || '_Antispam Detected &mention kicked_',
  ANTIWORDS_MSG: process.env.ANTIWORDS_MSG || '_AntiWord Detected &mention kicked_',
  ANTIWORDS: process.env.ANTIWORDS || 'word',
  MENTION: process.env.MENTION || '',
  MAX_UPLOAD: process.env.MAX_UPLOAD || 230,
  REJECT_CALL: process.env.REJECT_CALL,
  VPS: toBool(process.env.VPS),
  AUTO_STATUS_VIEW: (process.env.AUTO_STATUS_VIEW || 'false').trim(),
  SEND_READ: process.env.SEND_READ,
  KOYEB: toBool(process.env.KOYEB),
  KOYEB_NAME: (process.env.KOYEB_NAME || '').trim(),
  KOYEB_API: (process.env.KOYEB_API || '').trim(),
  AJOIN: process.env.AJOIN || 'false',
  GPT: (process.env.GPT || 'free').trim(),
  MODEL: (process.env.MODEL || 'gpt-3.5-turbo').trim(),
  APPROVE: (process.env.APPROVE || '').trim(),
  ANTI_DELETE: (process.env.ANTI_DELETE || 'null').trim(),
  PERSONAL_MESSAGE: (process.env.PERSONAL_MESSAGE || 'null').trim(),
  DISABLE_START_MESSAGE: process.env.DISABLE_START_MESSAGE || 'false',
  ANTI_BOT: (process.env.ANTI_BOT || 'off').trim(),
  ANTI_BOT_MESSAGE: process.env.ANTI_BOT_MESSAGE || '&mention removed',
  WARN_MESSAGE:
    process.env.WARN_MESSAGE ||
    '⚠️WARNING⚠️\n*User :* &mention\n*Warn :* &warn\n*Remaining :* &remaining',
  WARN_RESET_MESSAGE:
    process.env.WARN_RESET_MESSAGE || `WARN RESET\nUser : &mention\nRemaining : &remaining`,
  WARN_KICK_MESSAGE: process.env.WARN_KICK_MESSAGE || '&mention kicked',
  TRUECALLER: process.env.TRUECALLER,
  DELETE_TYPE: (process.env.DELETE_TYPE || '').trim(),
  LIST_TYPE: (process.env.LIST_TYPE || 'text').trim(),
  BING_COOKIE: (process.env.BING_COOKIE || '').trim(),
  GEMINI_API_KEY: (process.env.GEMINI_API_KEY || '').trim(),
  GROUP_ADMINS: process.env.GROUP_ADMINS || '',
  RENDER_NAME: (process.env.RENDER_NAME || '').trim(),
  RENDER_API_KEY: (process.env.RENDER_API_KEY || '').trim(),
  TIMEZONE: process.env.TIMEZONE,
  CMD_REACTION: process.env.CMD_REACTION || 'true',
  AUTO_UPDATE: process.env.AUTO_UPDATE || 'true',
}

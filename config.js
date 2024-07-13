const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_53_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxODksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDc1LFxuICAgICAgICAxODgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTU0LFxuICAgICAgICA0MixcbiAgICAgICAgMTU2LFxuICAgICAgICA4NixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDk3LFxuICAgICAgICA1OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODEsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0LFxuICAgICAgICA4MyxcbiAgICAgICAgODksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc0LFxuICAgICAgICA4NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDI1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTksXG4gICAgICAgIDU1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUyLFxuICAgICAgICA2NixcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDYwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDksXG4gICAgICAgIDc1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA4MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyLFxuICAgICAgICAxODgsXG4gICAgICAgIDk1LFxuICAgICAgICA4MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDczLFxuICAgICAgICAzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDU4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQyLFxuICAgICAgICAzNixcbiAgICAgICAgMTI3LFxuICAgICAgICA3MixcbiAgICAgICAgOTIsXG4gICAgICAgIDE4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTksXG4gICAgICAgIDkxLFxuICAgICAgICAyMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODMsXG4gICAgICAgIDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgODIsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSUJQQnZpbFl1Ti9GUktuWWxONzh0U2dCS0NrTnYyQXRTSzdJY2xmUUlRQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibXJBRG4yVDNTZzY1alZtcEh6TGlMUVwiLFxuICBcInBob25lSWRcIjogXCIwOTBjMDliNy01ZjljLTQyMjktYjAzMi01MjI0MGRiMmZjZTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ1LFxuICAgICAgODksXG4gICAgICAyMzAsXG4gICAgICAxNjUsXG4gICAgICAyMTksXG4gICAgICAxNTcsXG4gICAgICAxNTUsXG4gICAgICA3NixcbiAgICAgIDIwNCxcbiAgICAgIDUwLFxuICAgICAgMjE3LFxuICAgICAgMTUxLFxuICAgICAgMjIxLFxuICAgICAgMTE1LFxuICAgICAgNzksXG4gICAgICAyNDQsXG4gICAgICA3MSxcbiAgICAgIDM3LFxuICAgICAgNzMsXG4gICAgICAxNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjQsXG4gICAgICAyMjMsXG4gICAgICAxNTksXG4gICAgICAyNyxcbiAgICAgIDEzNyxcbiAgICAgIDE5NixcbiAgICAgIDE5NCxcbiAgICAgIDIzLFxuICAgICAgNDUsXG4gICAgICAxMzIsXG4gICAgICA2MSxcbiAgICAgIDEwNSxcbiAgICAgIDE1OSxcbiAgICAgIDE5LFxuICAgICAgMjIsXG4gICAgICAxMDQsXG4gICAgICAyMzksXG4gICAgICAxOTIsXG4gICAgICA5MyxcbiAgICAgIDE5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLWktQU0dMOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NjE4NzQ0NzQ6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0NDg0NzcxMzcyNjY4MDoxOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPUElpSzhGRUpEVnliUUdHQThnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIis1aWtmS0p0R2JWSDIyUy83aUtXTnJWTFRGaVZTc0h3cmpKWUJ4bUExUkU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidlV4RkZBWjUwVUI4dm41SHY4TTc0ZDFuQURkOGthNGYvREtNZWc0V0pWUU9jV0hFd0RyUk1aS2gwUld1a24xVGVxbVUyMHdHaUxWY2dvUmV1V2dJQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid2ZRR0Nuam1jdFFObWVVSlJFdks2YTFHQk5OeTlzS1JWaitDRHRrZzB5OEF4OFIvN3lsMlU1ZjhiS3NwSmJLQXVaaHZGdWRTNE9YTVpWQUoyMmE2aXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NjE4NzQ0NzQ6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwODcxNTc0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT3V5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPdXkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNTHdnbkFkLzU4QTF3NWxyOW4ybUoweVBYbVZVdVVDbXd3aFVLT1JKR01vPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NDA4ODM4MTEsXCJjdXJyZW50SW5kZXhcIjoxNCxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA2NjkzNTEyMjhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

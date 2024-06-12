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


global.devs = "18762306464" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "18762306464";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "True"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // SUHAIL_11_48_06_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDgsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDc5LFxuICAgICAgICA3MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDcwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgODIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNixcbiAgICAgICAgNTUsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDg2LFxuICAgICAgICA1MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MixcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI3LFxuICAgICAgICA1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDczLFxuICAgICAgICAxMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICA1NixcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgzLFxuICAgICAgICA0NixcbiAgICAgICAgMjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzgsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODQsXG4gICAgICAgIDkyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDczLFxuICAgICAgICAyNyxcbiAgICAgICAgMTI3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTU2LFxuICAgICAgICA4NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDUyLFxuICAgICAgICA2OSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDksXG4gICAgICAgIDc1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDkyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjEzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTEzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI3LFxuICAgICAgICA5NyxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQTYvTnNiUFJoQXdrSDVSYXR4Wk4wNlFyMG1jZ1VBK2Urd3hqbWtnRDBEST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNjBkSVhzdlFRdmVQRVdYTnhmRTVmUVwiLFxuICBcInBob25lSWRcIjogXCIxZDM2YzQ4Mi1mM2FmLTRmNDgtODY1OS0xZWQwMzBhMzM0Y2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODEsXG4gICAgICAxMjUsXG4gICAgICAxNSxcbiAgICAgIDU2LFxuICAgICAgMjIwLFxuICAgICAgMTMsXG4gICAgICA0OCxcbiAgICAgIDIxMyxcbiAgICAgIDExNSxcbiAgICAgIDE4NSxcbiAgICAgIDE0OCxcbiAgICAgIDExMCxcbiAgICAgIDExNyxcbiAgICAgIDI1LFxuICAgICAgMTg2LFxuICAgICAgMTA0LFxuICAgICAgMzYsXG4gICAgICA4MyxcbiAgICAgIDUwLFxuICAgICAgODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI0LFxuICAgICAgMzQsXG4gICAgICAxMzAsXG4gICAgICAxODEsXG4gICAgICAxMTMsXG4gICAgICA3NixcbiAgICAgIDMzLFxuICAgICAgMzUsXG4gICAgICAxNzcsXG4gICAgICAyNTAsXG4gICAgICA2MCxcbiAgICAgIDE0MixcbiAgICAgIDE5NCxcbiAgICAgIDU1LFxuICAgICAgMjE1LFxuICAgICAgMjUsXG4gICAgICAxMzIsXG4gICAgICAxODAsXG4gICAgICA1NSxcbiAgICAgIDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWUtSSDJGNVFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjE4NzY1OTUyOTgwOjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzI1ODA3NjE4MjEyODY6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTW0rNklNREVPNlZwck1HR0FrZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCMHVnU29BZTBxQ0JvUEVrcC9DbUwvMytzV3l2RzR6d3A4Y2NablQzcHdjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImkyRms1VzIrcmhoZ25jMjVBNDhKUXBVVGZYdU5odTd2eVRqSU5lTFhuQWtmL3dYM0VueGQrVmV6Z2RXMG1KbHBzOG43ZmpQUDc1bzlDRThnUjNYckJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjJHWTc2bVRTVXMwVjFaU0h2aElNZmFSM2w3cW1CeGFQWkJGTUM2OElCMnRoNzF5RU4xNC9XU3BVOFZ1eFJWOThIYU1qdWJOcDBKbVU4ZmQ5R3IrQUNBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjE4NzY1OTUyOTgwOjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODE5Mjg4NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURBb1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBREFvLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNzdjaW1BYkJ4aW1oTnZwR1RRRm5NcUx3Tk5sd0dLYVcwYzcrVDFhY2UyQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4MTMzMDk3NjksXCJjdXJyZW50SW5kZXhcIjo4LFwiZGV2aWNlSW5kZXhlc1wiOlswLDMsNF19LFwidGltZXN0YW1wXCI6XCIxNzE4MTg5NzM4OTYwXCJ9Igp9 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Patrickbot",
  ownername:process.env.OWNER_NAME|| "Shaun",


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

const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb://ugddro53ussphvqxwafd:09DicI7SPu4AcJm415s@b4qedn3rmvwy0wza1ufa-mongodb.services.clever-cloud.com:2546/b4qedn3rmvwy0wza1ufa"
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




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_22_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA3NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTI5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDY0LFxuICAgICAgICA2NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDc3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDUyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI3LFxuICAgICAgICA0NixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAzLFxuICAgICAgICA1NixcbiAgICAgICAgMzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA2MyxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDk2LFxuICAgICAgICA5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI3LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgMTE2LFxuICAgICAgICA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjEyLFxuICAgICAgICA0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDgyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA3NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDk4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTksXG4gICAgICAgIDQwLFxuICAgICAgICAyMixcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1dDBwY3BKTitFOENkcDYzU3hSRW1WbXIzOVlyYkdzMWhJdVladTNUMEZNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjE4NzY0NDMzNDM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGRDREQ0ZFRDE2NDJDNzk5MkZEMTBBQkM3RkYwQjEwNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI5Njg1NThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIxODc2NDQzMzQzOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTE3NkIzQTA4ODU0NTg4RjI0MTM1QTlDQzcxMjZDQkJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyOTY4NTU4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInRnT28zdEdGUjVHUG85Qy1VUmtacWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDg4NmNiYzQtNDY1MS00ZTE1LWI4NWItNzg1YzhkZDc3YjliXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc2LFxuICAgICAgMjM4LFxuICAgICAgMTE2LFxuICAgICAgMTgzLFxuICAgICAgNzgsXG4gICAgICA5NyxcbiAgICAgIDEwNixcbiAgICAgIDE5NixcbiAgICAgIDM5LFxuICAgICAgOSxcbiAgICAgIDksXG4gICAgICAzNyxcbiAgICAgIDg3LFxuICAgICAgMTc2LFxuICAgICAgMTA1LFxuICAgICAgMTA5LFxuICAgICAgMTczLFxuICAgICAgOTAsXG4gICAgICAxOTcsXG4gICAgICAxMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA2LFxuICAgICAgMjA4LFxuICAgICAgMjQ0LFxuICAgICAgMTg0LFxuICAgICAgMTM4LFxuICAgICAgMjI4LFxuICAgICAgMzgsXG4gICAgICAyNTIsXG4gICAgICAzLFxuICAgICAgMjM4LFxuICAgICAgMjA0LFxuICAgICAgMTQyLFxuICAgICAgOTEsXG4gICAgICAzMyxcbiAgICAgIDE4NixcbiAgICAgIDk1LFxuICAgICAgMTI4LFxuICAgICAgMTM1LFxuICAgICAgODAsXG4gICAgICAyNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMUpGUUs4VldcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjE4NzY0NDMzNDM5OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk3MDE1MjQxNDEyNzIwOjZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiRG1hblwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xLZXh0RUVFT2ZUeWJVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiK3FtejdoS2N1T3NZNTR2NGdXQmlWS2NEUFF3QjltRmQ1Q2RSTmUrMUgwUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXKzJPSkkwM3BXSnRVNFB4bU03ZWsxejZjcGZWWjF5b3JzTTBQMC91QklZZjBmV29NSTdWbWdueFB2MlBiSWd3ZmZkZmtKMkZ0bXIvTzJoNnF1UEpDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJhaXl5V3N0L2Q1b1RaMEhpOXVMY0JRZy9mK1ZINWtJcE5LUFNoQXlFcmd5cmtHdy9kTWMwRnpPTXdGdUhyQkFseWtzYXkwUlg2Um00cXBZUzE0cDhCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxODc2NDQzMzQzOTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyOTY4NTU0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUHZ4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQdnguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJIZmJiWDNOc1BONzRvaFhkMzQvK1luSVRoNVE5eFJaTG85b3RDOXNzR1BnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyNDQ3NjE5MDYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjk2NzU5NjUwN1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "-",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "You",
  packname: process.env.PACK_NAME || "You",
  botname : process.env.BOT_NAME  || "Dman",
  ownername:process.env.OWNER_NAME|| "Rushaun",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "Dman Bot For Home"  ).toUpperCase(),



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

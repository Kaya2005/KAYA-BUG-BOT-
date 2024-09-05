require("./all/module")

global.owner = "https://whatsapp.com/channel/0029VaaUfPO8qIzztuf42D04" 
global.namabot = "KAYA BUG" //BOT NAME
global.namaCreator = "*KAYA AYOMIDE*" //CREATOR NAME
global.autoJoin = false //DON'T CHANGE  / JANGAN GANTI
global.antilink = false //DON'T CHANGE  / JANGAN GANTI
global.versisc = '1.0.0' //DON'T CHANGE 
global.sessionName = 'session'
global.codeInvite = ""
global.imageurl = 'https://telegra.ph/file/6df60afff9a70b4986af2.jpg' //GANTI PP MU MENGGUNAKAN LINK TELEGRA PH
global.isLink = 'https://whatsapp.com/channel/0029VaaUfPO8qIzztuf42D04' 
global.thumb = fs.readFileSync("./thumb.png") ///DON'T CHANGE  
global.audionya = fs.readFileSync("./all/sound.mp3") //DON'T CHANGE  
global.packname = "KAYA" 
global.author = "*KAYA AYOMIDE👑*" 
global.jumlah = "5" ////DON'T CHANGE

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

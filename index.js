/*
]=====> KEVIN APTS <=====[ ]=====> IG KEVIN_APTA-KUN <=====[ ]=====> 083141621181 <=====[
*/
// ANAK ANJING PASTI YANG ATAS DI UBAH
// NGOTAK KONSOL
// NUMPANG NAMA TIDAK MEMBUAT MU PRO
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   quotedMsgObj,
   quotedMsg,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const util = require('util')
const crypto = require('crypto')
const imgbb = require('imgbb-uploader');
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { Aki } = require('aki-api');
const { color, bgcolor } = require('./lib/color')
const { donasi } = require('./lib/donasi')
const { kevgrup } = require ('./lib/kevgrup')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { virtex } = require('./src/virtex')
const { cara } = require('./src/cara')
const { exec, spawn } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, uploadimg, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const speed = require('performance-now')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const fetchhk = require('node-fetch')
const FormData =require('form-data')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./language')
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:KEVIN APTA\n' // GANTI NAMA LU
            + 'ORG:KEV;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6283141621181:+62 831-4162-1181\n' // GANTI NOMOR LU
            + 'END:VCARD'
// UDAH SEGITU KONSOL KEBAWAH BIARIN AJA
const ngonsol = JSON.parse(fs.readFileSync('./settings/Ramlan.json'))
const {
    botName,
    ownerName,
    BarBarKey,
    XteamKey,
    VhtearKey,
    NaufalKey,
    LolKey,
    TobzKe, 
    ownerNumber,
    botPrefix,
    batre, 
    chargi, 
    jsjsn, 
    GrupLimitz,
    UserLimitz,
    UserPencil, 
    Updateti,
    Updath,
    orr,
    errr,
    CeerTod
} = ngonsol
// POWERED BY KEVIN
prefix = botPrefix
update = Updateti
updateh = Updath
battre = batre
charg = chargi
or = orr
err = errr
blocked = []   
fake = '*SELF-BOT*'
fakeimage = fs.readFileSync(`./assets/halo.jpg`)
limitawal = UserLimitz
pencilawal = UserPencil
memberlimit = GrupLimitz
cr = CeerTod
TobzKey = TobzKe
const KeyLol =['847de7716f17a51eeba4235c','2f12dec349a4bea409e61ff7']
const Lol = KeyLol[Math.floor(Math.random() * KeyLol.length)]
jawab1 = 'ikan terbang'

// LOAD JSON
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const fak = JSON.parse(fs.readFileSync('./src/fakta.json'))
const bija = JSON.parse(fs.readFileSync('./src/Bijak.json'))
const setiker = JSON.parse(fs.readFileSync('./assets/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./assets/vn.json'))
const _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/group/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/group/nsfw.json'))
const _badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
const error = JSON.parse(fs.readFileSync('./database/group/error.json'))
const samih = JSON.parse(fs.readFileSync('./database/group/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/group/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const _pencil = JSON.parse(fs.readFileSync('./database/user/pencil.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const _afk = JSON.parse(fs.readFileSync('./database/group/afk.json'))
const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const premium = JSON.parse(fs.readFileSync('./database/user/premium.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
/*       
]=====> LOAD MENU <=====[
*/
const { help } = require('./lib/help')
const { simple } = require('./database/menu/simple')
const { edukasi } = require('./database/menu/edukasi')
const { kodebahasa } = require('./database/menu/kodebahasa')
const { gabut } = require('./database/menu/gabut')
const { groupm } = require('./database/menu/group')
const { download } = require('./database/menu/download')
const { dompet } = require('./database/menu/dompet')
const { random } = require('./database/menu/random')
const { other } = require('./database/menu/other')
const { owb } = require('./database/menu/owb')
const { maker } = require('./database/menu/maker')
const { anime } = require('./database/menu/anime')
const { sound } = require('./database/menu/sound')
const { vip } = require('./database/menu/premium')
/*
]=====> FUNCTION <=====[
*/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }
        
        const getRegisterTime = (sender) => {
            let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].time
            }
        }

        const getRegisterNo = (sender) => {
            let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].id
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
             
             //FUNCTION AFK
const addAfkUser = (userid, time, reason) => {
    const obj = { id: userid, time: time, reason: reason }
    	_afk.push(obj)
    	fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
	}

const checkAfkUser = (sender) => {
    let status = false
    Object.keys(_afk).forEach((i) => {
        if (_afk[i].id === sender) {
            status = i
        }
    })
    return status
}

const checkAfkUse1r = (mentionedJid) => {
    let status = false
    Object.keys(_afk).forEach((i) => {
        if (_afk[i].id === mentionedJid) {
            status = i
        }
    })
    return status
}

const getAfkReason = (sender) => {
    let position = null
    Object.keys(_afk).forEach((i) => {
        if (_afk[i].id === sender) {
            position = i
        }
    })
    if (position !== null) {
        return _afk[position].reason
    }
}

const getAfkTime = (sender) => {
    let position = null
    Object.keys(_afk).forEach((i) => {
        if (_afk[i].id === sender) {
            position = i
        }
    })
    if (position !== null) {
        return _afk[position].time
    }
}

const getAfkId = (mentionedJid) => {
    let position = null
    Object.keys(_afk).forEach((i) => {
        if (_afk[i].id === mentionedJid) {
            position = i
        }
    })
    if (position !== null) {
        return _afk[position].id
    }
}

const getAfkPosition = (sender) => {
    let position = null
    Object.keys(_afk).forEach((i) => {
        if (_afk[i].id === sender) {
            position = i
        }
    })
    return position
}
	//END OF AFK FUNCTION
	
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        
        const bayarPencil = (sender, amount) => {
        	let position = false
            Object.keys(_pencil).forEach((i) => {
                if (_pencil[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _pencil[position].pencil -= amount
                fs.writeFileSync('./database/user/pencil.json', JSON.stringify(_pencil))
            }
        }
        
         const pencilAdd = (sender) => {
             let position = false
            Object.keys(_pencil).forEach((i) => {
                if (_pencil[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _pencil[position].pencil += 1
                fs.writeFileSync('./database/user/pencil.json', JSON.stringify(_pencil))
            }
        }
             
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
             
        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/*
]=====> SCAN QR <=====[
*/

const kev = new WAConnection()
kev.logger.level = 'warn'
console.log(banner.string)
   kev.on('qr', qr => {
   qrcode.generate(qr, { small: true })
	console.log(color('[','white'), color('!','red'), color(']','white'), color(' FOLLOW IG KEVIN_APTA_KUN'))
})

	kev.on('credentials-updated', () => {
		fs.writeFileSync('./Kevin.json', JSON.stringify(kev.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'bentar lagi connect kak...')
	})
	fs.existsSync('./Kevin.json') && kev.loadAuthInfo('./Kevin.json')
	kev.on('connecting', () => {
		start('2', 'Tunggu Connect Yakk...')
	})
	kev.on('open', () => {
		success('2', 'Sudah Connect kak')
	})
	kev.connect({timeoutMs: 30*1000})

kev.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await kev.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await kev.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `[ *WELCOME IN GC ${mdata.subject}* ] \n___________________________\n@${num.split('@')[0]} Intro/Dikick!!! \n➸ Nama : \n➸ Umur : \n➸ Askot : \n➸ Gender : \n➸ Udah Punya Doi/Blm: \n➸ Pap Muka dumlu!!! \n➸ Instagram? \n𝐒𝐚𝐯𝐞 𝐍𝐨𝐦𝐨𝐫 𝐀𝐃𝐌𝐈𝐍! \n *___________________________*\nJangan jadi kutu lomcat sayang!!`
				let buff = await getBuffer(ppimg)
				kev.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await kev.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `SELAMAT TINGGAL... @${num.split('@')[0]}👋* \n_kalo kembali nitip kuota ama pulsa yak :v_`
				let buff = await getBuffer(ppimg)
				kev.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	kev.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	kev.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const ucapanSalam = '';
			const holai = mek.message.conversation
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const tijep = moment.tz('Asia/Tokyo').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
            var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const argts = budy.slice(command.length + 2, budy.length)
			const isCmd = body.startsWith(prefix)            
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = kev.user.jid
			const fontPath = ('./font/Zahraaa.ttf')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const totalchat = await kev.chats.all()
			pushname = kev.contacts[sender] != undefined ? kev.contacts[sender].vname || kev.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await kev.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            kev.on (`CB:action,,battery`, json => {
                const batteryLevelStr = json[2][0][1].value
                const batterylevel = parseInt (batteryLevelStr)
                battre = batterylevel
                }) 
            
/*
]=====> KEV <=====[
*/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isAfkOn = checkAfkUser(sender)
            const isBanned = ban.includes(sender)
            const isPrem = premium.includes(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isBadWord = isGroup ? _badword.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
		    kevbot = await kev.groupInviteCode ("6283141621181-1613833591@g.us")
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				kev.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				kev.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? kev.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : kev.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    kev.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			kev.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			const fakethumb = (teks, yes) => {
            kev.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./assets/faket.jpg'),quoted:mek,caption:yes})
            }
		    const sendPtt = (teks) => {
		    kev.sendMessage(from, audio, mp3, {quoted:mek})
		    }
		   if (holai == 'p')
           {
           kev.sendMessage(from, 'iy ada apa', text, {quoted:mek}) 
           }
           else if (holai == 'P')
           {
           kev.sendMessage(from, 'iy ada apa', text, {quoted:mek}) 
           }
           else if (holai == 'bot')
           {
           kev.sendMessage(from, 'iy ada apa', text, {quoted:mek}) 
           }
           else if (holai == 'Bot')
           {
           kev.sendMessage(from, 'iy ada apa', text, {quoted:mek}) 
           }
           else if (holai == 'assalamualaikum')
           {
           kev.sendMessage(from, 'waalaikumsalam', text, {quoted:mek}) 
           }
           else if (holai == 'Assalamualaikum')
           {
           kev.sendMessage(from, 'waalaikumsalam', text, {quoted:mek}) 
           }
           else if (holai == 'hai')
           {
           kev.sendMessage(from, 'ap', text, {quoted:mek}) 
           }
           else if (holai == 'Hai')
           {
           kev.sendMessage(from, 'ap', text, {quoted:mek}) 
           }
           else if (holai == 'sv')
           {
           kev.sendMessage(from, 'ap', text, {quoted:mek}) 
           }
           else if (holai == 'ahoy')
           {
           kev.sendMessage(from, 'ahoy kapten', text, {quoted:mek}) 
           }
           else if (holai == 'Ahoy')
           {
           kev.sendMessage(from, 'ahoy kapten', text, {quoted:mek}) 
           }
           else if (holai == 'Ahoy kapten')
           {
           kev.sendMessage(from, 'ahoy pengguna bot', text, {quoted:mek}) 
           }
           else if (holai == '!carigroup')
           {
           kev.sendMessage(from, 'yang benar !carigrup kak☺', text, {quoted:mek}) 
           }
           else if (holai == 'ahoy kapten')
           {
           kev.sendMessage(from, 'ahoy pengguna bot', text, {quoted:mek}) 
           }
			
/*
]=====> LEVELING <=====[
*/
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }
        
/*
]=====> CHECK LIMIT BY LANN ID <=====[
*/
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return kev.sendMessage(from,`Limit anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan naik level_`, text,{ quoted: mek})
                            kev.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        kev.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
				const checkPencil = (sender) => {
          	let found = false
                    for (let pncl of _pencil) {
                        if (pncl.id === sender) {
                            let pencilCounts = pencilawal - pncl.pencil
                            if (pencilCounts <= 0) return kev.sendMessage(from,`pensil anda sudah habis\n\n_Note : pensil bisa di dapatkan dengan cara ${prefix}buypensil dan naik level_`, text,{ quoted: mek})
                            kev.sendMessage(from, ind.pencilcount(pencilCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _pencil.push(obj)
                        fs.writeFileSync('./database/user/pencil.json', JSON.stringify(_pencil))
                        kev.sendMessage(from, ind.pencilcount(pencilCounts), text, { quoted : mek})
                    }
				}
				
//AFK NGULI
	if (isGroup) {
		mentioneddd = mek.message[Object.keys(mek.message)[0]].contextInfo ? mek.message[Object.keys(mek.message)[0]].contextInfo.mentionedJid : []
            for (let ment of mentioneddd) {
                 if (checkAfkUse1r(ment, _afk)) {
                    const getId = getAfkId(ment, _afk)
                    const getReason = getAfkReason(getId, _afk)
                    const getTime = getAfkTime(getId, _afk)
                    	kev.sendMessage(from, ind.afkMentioned(getReason, getTime), text)
                  }
                  }
            if (checkAfkUser(sender) && !isCmd && isGroup) {
                _afk.splice(getAfkPosition(sender, _afk), 1)
                fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
                	kev.sendMessage(from, ind.afkDone(pushname), text)
            }
            
        }
      
/*
]=====> salam <=====[
*/
        var day = new Date();
        var hr1 = moment.tz('Asia/Jakarta').format('HH:mm')
        if (hr1 >= '03:00') {
            const sapa1 = 'Selamat Pagi ';
        } else if (hr1 >= '07:00') {
            const sapa1 = 'Selamat pagi ';
        } else if (hr1 >= '10:01') {
            const sapa1 = 'Selamat Siang ';
        } else if (hr1 >= '13:01') {
            const sapa1 = 'Selamat Siang ';
        } else if (hr1 >= '15:01') {
            const sapa1 = 'Selamat Sore ';
        } else if (hr1 >= '17:49') {
            const sapa1 = 'Selamat berbuka ';
        } else if (hr1 >= '18:01') {
            const sapa1 = 'Selamat Sore ';
        } else if (hr1 >= '20:01') {
            const sapa1 = 'Selamat malam ';
        } else if (hr1 >= '01:01') {
            const sapa1 = 'Selamat malam ';
        } else if (hr1 >= '04:26') {
            const sapa1 = 'Selamat malam ';
        }
    
    /*gtau ini apa*/
    if (args[0] === 'hhdj') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
					}
/*
]=====> badword <=====[
*/
if (isGroup && isBadWord) {
            if (bad.includes(mesejAnti)) {
                if (!isGroupAdmins) {
                    return reply("JAGA UCAPAN DONG!! 😠")
                        .then(() => babu.groupRemove(from, sender))
                        .then(() => {
                            kev.sendMessage(from, `*「 ANTI BADWORD 」*\nKamu dikick karena berkata kasar!`, text ,{quoted: mek})
                        }).catch(() => kev.sendMessage(from, `Untung cya bukan admin, kalo admin udah cya kick!`, text , {quoted : mek}))
                } else {
                    return reply( "Tolong Jaga Ucapan Min 😇")
                }
            }
        }

/*
]=====> LIMITED BY LANN ID <=====[
*/
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    kev.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }

        
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
                            kev.groupLeave(from)
					    }
		       } catch (err) { console.error(err)  }
        }
      
/*
]=====> ATM <=====[
*/
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
// ANTI LINK GRUP
                if (mesejAnti.includes("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Atasan grup mah bebas yakan:v')
		        kev.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("#izinbos")) return reply("Iya kak jangan spam ya")
		        if (mesejAnti.includes("izin")) return reply("Iya kak jangan spam ya")
		        if (mesejAnti.includes("izinmin")) return reply("Iya kak jangan spam ya")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Woyy ${sender.split("@")[0]} Grup ini anti link, siap siap kau!`)
		        setTimeout( () => {
			        kev.groupRemove(from, [kic]).catch((e)=>{reply(`BOT HARUS JADI ADMIN`)})
		        }, 3000)
		        setTimeout( () => {
			        kev.updatePresence(from, Presence.composing)
			        reply("Hedsot :v")
		        }, 2000)
		        setTimeout( () => {
			        kev.updatePresence(from, Presence.composing)
			        reply("Bismillah")
		        }, 1000)
		        setTimeout( () => {
			        kev.updatePresence(from, Presence.composing)
			        reply("Ready?")
		        }, 0)
	        }               
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			const crbaru = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "title":"i love you","mimetype": "image/jpeg", "caption": "i love you tu", 'jpegThumbnail': fs.readFileSync('./assets/halo.jpg')}}}


switch(command) {
                case 'help':
				case 'menu':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				    const uangku = checkATMuser(sender)
				    uptime = process.uptime()
					await costum(help(pushname, prefix, botName, ownerName, kevbot, time, ucapanSalam, kyun, uptime, reqXp, totalchat, getLevelingLevel, sender, _registered, uangku), text, tescuk, cr)
					break
				case 'dudvdb':
				reply(ucapanSalam) 
				break
				case 'donasi':
				case 'donate':
					kev.sendMessage(from, donasi(pushname, prefix, botName, ownerName), text)
					break
				case 'hljk':
				var day = new Date();
        var hr = moment.tz('Asia/Jakarta').format('HH:mm')
        if (hr > '03:00' && hr < '10:00') {
            const sapa1 = 'Selamat Pagi ';
            reply(sapa1) 
        } else if (hr >= '10:01' && hr < '15:00') {
            const sapa1 = 'Selamat Siang ';
            reply(sapa1) 
        } else if (hr >= '15:01' && hr < '18:00') {
            const sapa1 = 'Selamat Sore ';
            reply(sapa1) 
        } else {
            const sapa1 = 'Selamat Malam ';
            reply(sapa1) 
		}
				break
				case 'kevgrup':
				case 'kevgroup':
					kev.sendMessage(from, kevgrup(pushname, prefix, botName, kevbot, ownerName), text)
					break
				case 'bingung':
				case 'bingungcok':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())				
					kev.sendMessage(from, cara(pushname, prefix, botName, ownerName), text)
					break										
                case 'simplemenu':
				case 'simpelmenu':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())			
					await costum(simple(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
				case 'edukasimenu':
				case 'edukasi':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())			
					await costum(edukasi(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
				case 'hahaj':
				var cabahd = new Date();
                var djfj = new Date().getTime();
                var hjkl = Math.floor((djfj % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				reply(hjkl) 
				break
				case 'cobain':
				const sumResult = '1' + '2';
				const hah = sumResult
				reply(hah) 
				break
				case 'jumlahhuruf':
    if (!isRegistered) return reply(ind.noregis())
if (args.length < 1) return reply('*☒* Masukan teks') 
var hf = body.slice(13)
data = await fetchJson(`https://videfikri.com/api/jumlahhuruf/?query=${hf}`)
jumlah = data.result.jumlah
reply(jumlah)
break
				case 'reverse':
	const dijd = body.slice(9) 
    var splitString = dijd.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    reply(joinArray) 
break
                case 'reversevid':
            if (!isQuotedVideo) return reply('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await kev.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            kev.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
                case 'fastvid':
            if (!isQuotedVideo) return reply('Reply videonya!')
            reply(ind.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await kev.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            kev.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'slowvid':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            reply(ind.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await kev.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            kev.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
                case 'kodebahasa':
				case 'kodebhs':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
					await costum(kodebahasa(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
				case 'afk':
                			if (!isRegistered) return reply(ind.noregis())
                			if (!isGroup) return reply(ind.groupo())
               	 			if (isAfkOn) return reply(ind.afkOnAlready())
                			const reason = q ? q : 'Nothing.'
                			addAfkUser(sender, time, reason, _afk)
                			kev.sendMessage(from, ind.afkOn(pushname, reason), text)
            				break
				case 'jadwaltv':
				case 'jadwalTV':
					mb = body.slice(10)
					if (!isRegistered) return reply(ind.noregis())
					if (args.length < 1) return reply(`Channel TV nya apa kak? \nContoh: ${prefix}jadwalTV mnctv`)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.zeks.xyz/api/jadwaltv?channel=${mb}&apikey=LiaTPHt6xgGSng88ZxT0gpPXyvb`, {method: 'get'})
					jdwltv = `◪ *JADWAL TV* \n  │\n  └❑ Channel : ${mb} \n◪ *JADWAL* \n${anu.result} `
					kev.sendMessage(from, jdwltv, text)
					await limitAdd(sender)
					break
				case 'film':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Mau Cari Film Apa?')
				reply(ind.wait)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/lk21?query=${body.slice(6)}&apikey=kevzka`, {method: 'get'})
				hasil = '=========================\n'
				for(let film of anu.hasil) {
				hasil += `• *Title:* ${film.result.title}\n• *Type:* ${film.result.genre}\n• *Link:* ${film.result.watch}\n=========================\n`
				}
				reply(hasil.trim())
				await limitAdd(sender) 
					break 
				case 'igstalk':
					if (isBanned) return reply(ind.baned())
						if (!isRegistered) return reply(ind.noregis())
						if (isLimit(sender)) return reply(ind.limitend(pusname))
							anu = await fetchJson(`https://api.vhtear.com/igprofile?query=${body.slice(9)}&apikey=${VhtearKey}`, {method: 'get'})
						buffer = await getBuffer(anu.result.picture)
						reply(ind.wait())
						hasil = `╭─「 *INSTAGRAM STALKER* 」\n│\n│• Link: https://www.instagram.com/${anu.result.username}\n│• Fullname : ${anu.result.full_name}\n│• Followers : ${anu.result.follower}\n│• Following : ${anu.result.follow}\n│• Jumlah Postingan: ${anu.result.post_count}\n│• Bio : ${anu.result.biography}\n╰─────────────────────`
					kev.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
					await limitAdd(sender)
					break
				case 'ssweb':
				if (isBanned) return reply(ind.baned())    
				if (!isRegistered) return reply(ind.noregis())
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Urlnya mana gan?')
				try {
				ssb = `${body.slice(7)}`
				reply(ind.wait)
				buff = await getBuffer(`http://api.lolhuman.xyz/api/ssweb?apikey=847de7716f17a51eeba4235c&url=${ssb}`, {method: 'get'})
				kev.sendMessage(from, buff, image, {quoted: mek})
				} catch {
				reply (mess.error.bug)
				}
				await limitAdd(sender)
			break 
				case 'spamcall':
					if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					call = `${body.slice(11)}`
					anu = await fetchJson(`https://videfikri.com/api/call/?nohp=${call}`, {method: 'get'})
					kev.sendMessage(from, `${anu.result.logs}`, text, {quoted: mek})
					await limitAdd(sender) 
					break
				case 'spamgmail':
					if (isBanned) return reply(ind.baned())
					if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					spam = `${body.slice(10)}`
					anu = await fetchJson(`https://videfikri.com/api/spamemail/?email=${spam}&subjek=Hallo&pesan=Silahkan%20bayar%20tagihan%20listrik%20Anda`, {method: 'get'})
					kev.sendMessage(from, `${anu.result.log_lengkap}`, text, {quoted: mek})
					await limitAdd(sender) 
					break
				case 'request':
				case 'requestfitur':
                if (!isRegistered) return reply(ind.noregis())
                     const request = body.slice(8)
                      if (request.length > 300) return kev.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const ters = `*[REQUEST]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${request}`

                      var options = {
                         text: ters,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    kev.sendMessage('6283141621181@s.whatsapp.net', options, text, {quoted: mek})
                    reply('request telah di laporkan ke owner BOT.')
                    break
				case 'lirik':
				if (!isRegistered) return reply(ind.noregis())
					lrk = body.slice(7)
					anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${lrk}`, {method: 'get'})
					reply('Lirik dari lagu '+lrk+' adalah :\n\n'+anu.result.lirik)
					break
				case 'ytsearch':
					if (args.length < 1) return reply('Yang mau di cari apaan? titit?')
					anu = await fetchJson(`http://nzcha-apii.herokuapp.com/ytsearch?q=${body.slice(10)}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					srch = '=================\n'
					for (let i of anu.result) {
						srch += `*Title* : ${i.title}\n*Url* : ${i.url}\n*Channel* : ${i.author}\n*Duration* : ${i.duration}\n*Views* : ${h2k(i.views)}\n=================\n`
					}
					reply(srch.trim())
					break
				case 'brainly':
					if (args.length < 1) return reply('Yang mau di cari apaan? titit?')
					anu = await fetchJson(`https://api.zeks.xyz/api/brainly?apikey=LiaTPHt6xgGSng88ZxT0gpPXyvb&q=${body.slice(8)}&count=8`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					srch = '=================\n'
					for (let i of anu.data) {
						srch += `*Soal* : ${i.question}\n*jawaban* : ${anu.data.answer.text}\n=================\n`
					}
					reply(srch.trim())
					break
					case 'jam':
					if (args.length < 1) return reply('jam negara mana kak contoh: !jam jakarta')
					anu = await fetchJson(`https://api.i-tech.id/tools/jam?key=mQScg0-I2LvYt-nmi2aw-TSGBrg-V8fSOj&kota=${body.slice(5)}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					jm = '=================\n'
					for (let i of anu.result) {
						jm += `*Hari/tgl* : ${i.date}\n*Sun* : ${i.sun}\n*Jam* : ${i.time}\n*Tempat* : ${i.title}`
					}
					reply(jm.trim())
					break
					case 'tonguetwister':
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`, {method: 'get'})
					if (anu.error) return reply(anu.error)
						jm = `${anu.result}`
					reply(jm)
					break
				case 'waifu':
if (!isRegistered) return reply(ind.noregis())

kev.updatePresence(from, Presence.composing)
uk = ["anime waifu","waifu","waifu anime"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(ind.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
kev.sendMessage(from, pok, image, {
  quoted: mek, caption: `Ini ?`
})

} catch {
  reply(ind.succes)
}
break
				case 'tagme':
					if (!isRegistered) return reply(ind.noregis())
					nom = mek.participant
					const tagme = {
						text: `@${nom.split("@s.whatsapp.net")[0]} Tuh dah ku tag!`,
						contextInfo: { mentionedJid: [nom] }
					}
					kev.sendMessage(from, tagme, text, {quoted: mek})
					break
				case 'neonimesearch':
					kev.updatePresence(from, Presence.composing)
					ij = body.slice(16) 
					data = await fetchJson(`https://tobz-api.herokuapp.com/api/neonime?q=${ij}&apikey=${TobzKey}`, {method: 'get'})
					if (!isRegistered) return reply(ind.noregis())
					
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isBanned) return reply(ind.baned())
					reply(ind.wait)
					nsrch = '#############################\n'
					for (let i of data.result) {
						nsrch += `*Title* : ${i.title}\n*link* : ${i.link}\n\n : ${i.desc}\n###########################\n`
					}
					reply(nsrch.trim())
					await limitAdd(sender) 
					break
				case 'bacakomik':
				    kev.updatePresence(from, Presence.composing)
					bk = body.slice(12) 
					data = await fetchJson(`https://tobz-api.herokuapp.com/api/bacakomik?q=${bk}&apikey=${TobzKey}`, {method: 'get'})
					if (!isRegistered) return reply(ind.noregis())
					
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isBanned) return reply(ind.baned())
					reply(ind.wait)
					bckmk = '----------------------------------------------------------------\n'
					for (let i of data.result) {
						bckmk += `*Judul* : ${i.judul}\n*Jeniskomik* : ${i.jenis_komik}\n*Pengarang* : ${i.pengarang}\n*Rating* : ${i.rating}\n*Status* : ${i.status}\n*Update Terakhir* : ${i.update_terakhir}\n*Rilis* : ${i.dirilis}\n*Carabaca* : ${i.cara_baca}\n*Genre* : ${i.genre}\n*Usia* : ${i.umur_pembaca}\n*Link* : ${i.link}\n------------------------------------------------------------\n`
					}
					reply(bckmk.trim())
					await limitAdd(sender) 
					break
				case 'neonimeongoing':
					kev.updatePresence(from, Presence.composing)
					data = await fetchJson(`https://tobz-api.herokuapp.com/api/neonimeongoing?apikey=${TobzKey}`, {method: 'get'})
					if (!isRegistered) return reply(ind.noregis())
					
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isBanned) return reply(ind.baned())
					reply(ind.wait)
					ngog = '#############################\n'
					for (let i of data.result) {
						ngog += `*Title* : ${i.title}\n*link* : ${i.link}\n\n : ${i.desc}\n###########################\n`
					}
					reply(ngog.trim())
					await limitAdd(sender) 
					break
				case 'anoboyongoing':
					kev.updatePresence(from, Presence.composing)
					data = await fetchJson(`https://tobz-api.herokuapp.com/api/anoboyongoing?apikey=${TobzKey}`, {method: 'get'})
					if (!isRegistered) return reply(ind.noregis())
					
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isBanned) return reply(ind.baned())
					reply(ind.wait)
					angog = '#############################\n'
					for (let i of data.result) {
						angog += `*Title* : ${i.title}\n*Tanggal* : ${i.date}\n###########################\n`
					}
					reply(angog.trim())
					await limitAdd(sender) 
					break
				case 'anoboysearch':
					kev.updatePresence(from, Presence.composing)
					kij = body.slice(14) 
					data = await fetchJson(`https://tobz-api.herokuapp.com/api/anoboy?q=${kij}&apikey=${TobzKey}`, {method: 'get'})
					if (!isRegistered) return reply(ind.noregis())
					
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isBanned) return reply(ind.baned())
					reply(ind.wait)
					asrch = '#############################\n'
					for (let i of data.result) {
						asrch += `*Title* : ${i.title}\n*link* : ${i.link}\n*Tanggal* : ${i.date}\n###########################\n`
					}
					reply(asrch.trim())
					await limitAdd(sender) 
					break
				case 'carigrup':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('mau cari group whatsapp apa?')
					anu = await fetchJson(`https://api.xteam.xyz/search/grupwa?q=${body.slice(10)}&APIKEY=xteamtester`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					jkl = '=================\n'
					for (let i of anu.result) {
						jkl += `*Group* : ${i.subject}\n*Link Group* : ${i.link}`
					}
					reply(jkl.trim())
					await limitAdd(sender)
					break
				case 'delete':
				case 'dell':
				case 'dellete':
					if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					kev.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
				case 'cekcantik':
				case 'cantikcek':
					if (!isRegistered) return reply(ind.noregis())
						cantik = body.slice(11)
						if (args.length < 1) return reply('Yg Mau dicek Siapa Kak??')
						const can =['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya KakaðŸ‘�','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai CantikðŸ�Š','70% Hai UkhtyðŸ�Š','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum UkhtyðŸ�Š','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih SemangatðŸ�Š']
						const tik = can[Math.floor(Math.random() * can.length)]
						kev.sendMessage(from, 'Pertanyaan : Cantik Cek Kakak *'+cantik+'*\n\nPersen Kecantikan : '+ tik +'', text, { quoted: mek })
						break
				case 'gantengcek':
				case 'cekganteng':
				case 'tampancek':
					if (!isRegistered) return reply(ind.noregis())
						ganteng = body.slice(12)
						const gan =['10%','30%','20%','40%','50%','60%','70%','62%','74%','83%','97%','100%','29%','94%','75%','82%','41%','39%']
						const teng = gan[Math.floor(Math.random() * gan.length)]
						kev.sendMessage(from, 'Pertanyaan : Cek Ganteng Bang *'+ganteng+'*\n\nJawaban : '+ teng +'', text, { quoted: mek })
						break
				case 'bingungpilihjawaban':
				case 'jawaban':
					if (!isRegistered) return reply(ind.noregis())
						soal = body.slice(1)
						const jaw =['a','b','c','d','e']
						const aban = jaw[Math.floor(Math.random() * jaw.length)]
						kev.sendMessage(from, '*pertanyaan : '+soal+'*\n\nJawaban : '+ aban, text, { quoted: mek })
						break
				case 'wait':
				if (!isRegistered) return reply(ind.noregis())
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(ind.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await kev.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							kev.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Foto aja kaka')
					}
					break
				case 'animecry':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=${TobzKey}', {method: 'get'})
                                            if (!isRegistered) return reply(ind.noregis())
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						kev.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'virtex':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					await costum(virtex(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					await limitAdd(sender)
					break
                case 'gabutmenu':
                if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())			
					await costum(gabut(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'groupmenu':
                if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())			
					await costum(groupm(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'downloadmenu':
                if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())			
					await costum(download(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'dompetmenu':
                if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())			
					await costum(dompet(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'randommenu':
                if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())			
					await costum(random(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'makermenu':
                if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())			
					await costum(maker(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
				case 'wibumenu':
				case 'weaboomenu':
				case 'animemenu':
                if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())			
					await costum(anime(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'othermenu':
                if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())					
					await costum(other(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'soundmenu':
                if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())					
					await costum(sound(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'premiummenu':
                if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())					
					await costum(vip(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break																			
                case 'ownermenu':
                if (isBanned) return reply(ind.baned())					
					await costum(owb(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break										
/*
]=====> SIMPLE MENU <=====[
*/
				case 'stiker': 
				case 'sticker':
				case 'stickergif':
				case 'stikergif':
				case 's':
				if (isBanned) return reply(ind.baned())
				    if (!isRegistered) return reply(ind.noregis())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await kev.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								kev.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await kev.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								kev.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
					}
					break
				case 'nulis4':
				 				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(7)
				reply(ind.wait())
				ct = await getBuffer(`https://api.vhtear.com/write?text=${ct}&apikey=${VhteatKey}`)
				kev.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: amv})
				await limitAdd(sender)
				break
				case 'nulis1':
				const textnulis = body.slice(7)
				let inputPath ='./MFarelS/Farelll/magernulis1.jpg'
 			   let outputPath = './hasil.jpg'
			    let d = new Date
			    let tgl = d.toLocaleDateString('id-Id')
			    let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
 			   reply('p\n' + util.format({fontPath, inputPath, outputPath, tgl, hari, textnulis}))
				  spawn('convert', [
				    inputPath,
				    '-font',
				    fontPath,
				    '-size',
				    '1024x784',
				    '-pointsize',
				    '20',
 				   '-interline-spacing',
				    '1',
				    '-annotate',
 				   '+806+78',
				    hari,
  				  '-font',
  				  fontPath,
  				  '-size',
  				  '1024x784',
  				  '-pointsize',
  				  '18',
  				  '-interline-spacing',
  				  '1',
  				  '-annotate',
   				 '+806+102',
 				   tgl,
 				   '-font',
  				  fontPath,
   				 '-size',
				    '1024x784',
 				   '-pointsize',
 				   '20',
  				  '-interline-spacing',
  				  '-7.5',
  				  '-annotate',
 				   '+344+142',
 				   textnulis,
    				outputPath
				  ])
 				 .on('error', e => reply(util.format(e))
 				 .on('exit', () => {
  			  kev.sendMessage(from, outputPath, image, {quoted: mek, caption : ' nih sayang, jangan mager ya sayang'})
  			}))
  			  break

				case 'nulis2':
				case 'tulis2':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				if (args.length < 1) return reply(`Teksnya mana kak? Contoh : ${prefix}nulis2 kevin baik hati`)
				laysha = body.slice(8)
				reply('「❗」WAIT BRO GUE NULIS DUMLU YAKAN')
				buff = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${laysha}&apikey=LiaTPHt6xgGSng88ZxT0gpPXyvb`)
				kev.sendMessage(from, buff, image, {quoted: mek, caption: 'Lebih baik nulis sendiri ya kak :*'})
				break
				case 'nulis':
				case 'tulis':
				                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				if (args.length < 1) return reply(`Teksnya mana kak? Contoh : ${prefix}nulis2 kevin baik hati`)
				laysha = body.slice(7)
				reply('「❗」WAIT BRO GUE NULIS DUMLU YAKAN')
				buff = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${laysha}&apikey=LiaTPHt6xgGSng88ZxT0gpPXyvb`)
				kev.sendMessage(from, buff, image, {quoted: mek, caption: 'Lebih baik nulis sendiri ya kak :*'})
				break
				case 'nhentaipdf':
				if (!isRegistered) return reply(ind.noregis())
				if (!isNsfw) return reply(ind.nsfwoff())
					kev.updatePresence(from, Presence.composing)
					if (args.length < 1) return reply('kode nya mana kak')
					anu = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${body.slice(12)}?apikey=${Lol}`)
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					kev.sendMessage(from, buffer, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${body.slice(12)}.pdf` })
					await limitAdd(sender)
					break
				case 'nhentai':
				if (!isRegistered) return reply(ind.noregis())
				if (!isNsfw) return reply(ind.nsfwoff())
					kev.updatePresence(from, Presence.composing)
					if (args.length < 1) return reply('kode nya mana kak')
					anu = await fetchJson(`http://api.lolhuman.xyz/api/nhentai/${body.slice(12)}?apikey=847de7716f17a51eeba4235c`)
			if (anu.error) return reply(anu.error)
			sket = `*Title* : ${anu.title_romaji} \nâ�� *link* :  \nâ��  \n\n*VIDEO SEDANG DIKIRIMKAN, JANGAN SPAM YA SAYANG...*`
			thumb = await getBuffer(anu.image)
			kev.sendMessage(from, thumb, image, {quoted: mek, caption: sket})
				case 'nhentaisearch':
					if (args.length < 1) return reply('Yang mau di cari apaan? titit?')
					if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`http://api.lolhuman.xyz/api/nhentaisearch?apikey=847de7716f17a51eeba4235c&query=${body.slice(15)}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					hsrch = '=================\n'
					for (let i of anu.result) {
						hsrch += `*Title* : ${i.title_english}\n*Kodenuk* : ${i.id}\n*Halaman* : ${i.page}\n=================\n`
					}
					reply(hsrch.trim())
					break
					case 'jam':
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('jam negara mana kak contoh: !jam jakarta')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/jamdunia?lokasi=${body.slice(5)}&apikey=${TobzKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					jm = '=================\n'
					for (let i of anu.result) {
						jm += `*Hari/tgl* : ${i.date}\n*Sun* : ${i.sun}\n*Jam* : ${i.time}\n*Tempat* : ${i.title}`
					}
					reply(jm.trim())
					await limitAdd(sender)
					break
                case 'translate':
			    var tr = body.slice(11)
			    var bahasa = tr.split("|")[0];
			    var ke = tr.split("|")[1];
			    var ditrans = tr.split("|")[2];
			    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/translate?text=${ditrans}&from=${bahasa}&to=${ke}`, {method: 'get'})
			    tl = `*From :* ${anu.from}\n\n*To :* ${anu.to}\n\n*Original :* ${anu.original_text}\n\n*Translated :* ${anu.translated_text}`
			    reply(tl)
			    break
				case 'quotes':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				quotes = body.slice(1)
				const quo =['Lebih baik mengerti sedikit daripada salah mengerti.','Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan.','Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya.','Penderitaan adalah pelajaran.','Ilmu pengetahuan tanpa agama adalah pincang.','Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak.','Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala.','Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?','Belas kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri.','Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri.','Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama.','Manusia akan bahagia selama ia memilih untuk bahagia.','Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang.','Apabila sempurna akal seseorang, maka sedikit perkataannya.','Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya.','Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang.','Yang paling melelahkan dalam hidup adalah menjadi orang yang tidak tulus.','Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup.','Penundaan adalah kuburan dimana peluang dikuburkan.','Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama.','Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan.','Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja.','Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan.','Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi.','Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan.','Kesabaran adalah teman dari kebijaksanaan.','Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain.','Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan.','Kebencian seperti halnya cinta, berkobar karena hal-hal kecil.','Anda tidak perlu harus berhasil pada kali pertama.','Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung.','Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri.','Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan.','Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang.']
				const tes = quo[Math.floor(Math.random() * quo.length)]
				kev.sendMessage(from, ''+tes+'\n\n_By : ⸸Kevin⸸Panutanque._', text, { quoted: mek })
				await limitAdd(sender)
				break				
				case 'ninjalogo':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				var gh = body.slice(11)
				var nin = gh.split("&")[0];
				var ja = gh.split("&")[1];
				if (args.length < 1) return reply(`「❗」Contoh : ${prefix}ninjalogo kevin & Gans`)
				reply(ind.wait())
				buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/ninjalogo?apikey=847de7716f17a51eeba4235c&text1=${nin}&text2=${ja}`)
				kev.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break				
		case 'halloweentext':
             if (isBanned) return reply(ind.baned())
			if (!isRegistered) return reply(ind.noregis())
			if (!isPrem) return reply(ind.premium())				
			if (args.length < 1) return reply(ind.wrongf())
			ween = body.slice(15)
			if (ween.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
			reply(ind.wait())
			hw = await getBuffer(`http://api.lolhuman.xyz/api/textprome/halloween?apikey=847de7716f17a51eeba4235c&text=${ween}`)
		    kev.sendMessage(from, hw, image, {quoted: mek})
		    await limitAdd(sender)	
		    break
				case 'pornhub':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				var gh = body.slice(9)
				var porn = gh.split("&")[0];
				var hub = gh.split("&")[1];
				if (args.length < 1) return reply(`「❗」Contoh : ${prefix}pornhub kevin & Hub`)
				reply(ind.wait())
				buffer = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${porn}&text2=${hub}&apikey=LiaTPHt6xgGSng88ZxT0gpPXyvb`)
				kev.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'jokerlogo':
				 if (!isPrem) return reply(ind.premium())				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ck = body.slice(11)
				reply(ind.wait())
				bk = await getBuffer(`http://api.lolhuman.xyz/api/textprome/jokerlogo?apikey=${Lol}&text=${ck}`)
				kev.sendMessage(from, bk, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
                case 'gemboktext':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					var gh = body.slice(12)
					var gem = gh.split("&")[0];
					var bok = gh.split("&")[1];
					if (args.length < 1) return reply(`「❗」Contoh : ${prefix}gemboktext 11 01 2021 & kevn dan dia`)
					reply(ind.wait())
					buffer = await getBuffer(`https://api.vhtear.com/padlock?text1=${gem}&text2=${bok}&apikey=${VhtearKey}`)
					kev.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
				case 'tahta':
				case 'harta':
				case 'hartatahta':
				 if (!isPrem) return reply(ind.premium())				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(7)
				reply(ind.wait())
				bh = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${bh}&apikey=LiaTPHt6xgGSng88ZxT0gpPXyvb`)
				kev.sendMessage(from, bh, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
				case 'harrytext':				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				dg = body.slice(11)
				reply(ind.wait())
				zh = await getBuffer(`https://videfikri.com/api/textmaker/hpotter/?text=${dg}`)
				kev.sendMessage(from, zh, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
				case 'pantaitext':				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				kh = body.slice(11)
				reply(ind.wait())
				anu = await getBuffer(`https://api.zeks.xyz/api/tpantai?text=${kh}&apikey=LiaTPHt6xgGSng88ZxT0gpPXyvb`)
				buffer = await getBuffer(anu.result.picture)
				kev.sendMessage(from, buffer, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
				case 'hahi':
				kev.on (`CB:action,,battery`, json => {
                const batteryLevelStr1 = json.live
                const batterylevel1 = parseInt (batteryLevelStr1)
				kev.sendMessage(from, batteryLevelStr1, text) 
				}) 
                break
				case 'qr':
				 if (!isPrem) return reply(ind.premium())				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				qr = body.slice(4)
				reply(ind.wait())
				rq = await getBuffer(`https://api.zeks.xyz/api/qrencode?apikey=LiaTPHt6xgGSng88ZxT0gpPXyvb&text=${qr}`)
				kev.sendMessage(from, rq, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
				case 'barcode':
				 if (!isPrem) return reply(ind.premium())				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				brc = body.slice(4)
				reply(ind.wait())
				de = await getBuffer(`https://api.zeks.xyz/api/barcode?apikey=LiaTPHt6xgGSng88ZxT0gpPXyvb&text=&{brc}`)
				kev.sendMessage(from, de, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
				case 'hartatata':
				 // Fix Bug By Sofyan AMV				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(11)
				reply(ind.wait())
				bh = await getBuffer(`https://mhankbarbar.tech/api/htahta?apiKey=${BarBarKey}&text=${bh}`)
				kev.sendMessage(from, bh, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
                case 'glitchtext':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
					var gh = body.slice(12)
					var gli = gh.split("&")[0];
					var tch = gh.split("&")[1];
					if (args.length < 1) return reply(`「❗」Contoh : ${prefix}glitchtext owner & Gans`)
					reply(ind.wait())
					buffer = await getBuffer(`https://api.zeks.xyz/api/gtext?text1=${gli}&text2=${tch}&apikey=LiaTPHt6xgGSng88ZxT0gpPXyvb`)
					kev.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
				case '8bit':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
					var ju = body.slice(12)
					var jv = gh.split("&")[0];
					var jl = gh.split("&")[1];
					if (args.length < 1) return reply(`「❗」Contoh : ${prefix}glitchtext owner & Gans`)
					reply(ind.wait())
					buffer = await getBuffer(`https://videfikri.com/api/textmaker/8bit/?text1=${jv}&text2=${jl}`)
					kev.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
				case 'katailham':
			         // Fix Bug By Sofyan AMV				
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				anu = await fetchJson(`https://api.shizukaa.xyz/api/bacotanilham?apikey=chika633`, {method: 'get'})
				kata = anu.result
				kev.sendMessage(from, kata, text, {quoted: mek })
				await limitAdd(sender)
				break
				
				case 'simi':
				if (!isRegistered) return reply(ind.noregis())
					if (args.length < 1) return reply('Textnya mana kak?')
					ha = body.slice(6)
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/simi?kata=${ha}&apikey=LSLDKYBX`, {method: 'get'})
					if (anu.error) return reply('Simi ga tau kak')
					reply(anu.simi)
					break
				case 'antitoxic':
				case 'badword':  // Fix Bug By Sofyan AMV X MrG{108P}*
                    if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('1 untuk menyalakan, 0 untuk mematikan')
                if (Number(args[0]) === 1) {
                if (!isBadWord) return reply('*Fitur BadWord sudah aktif sebelum nya*')
                 	   _badword.push(from)
                 	   fs.writeFileSync('./database/group/badword.json', JSON.stringify(_badword))
                  	   reply(`Fitur Badword Enable!`)
              	  } else if (Number(args[0]) === 0) {
                  	  _badword.splice(from, 1)
                 	   fs.writeFileSync('./database/group/badword.json', JSON.stringify(_badword))
                 	    reply(`Fitur Badword Disable`)
             	   } else {
                 	   reply(ind.succes())
                	}
                    break
                case 'addbad':
				case 'addbadword':
					if (!isOwner) return reply(ind.ownerb())
					if (!isGroupAdmins) return reply(ind.admin())
					const bw = body.slice(9)
					bad.push(bw)
					fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
					reply('Success âœ“')
				break
				case 'sosmedowner':
				    reply('instagram : kevin_apta_kun\n group whatsapp : https://chat.whatsapp.com/H7puFYYnKkUCNHjlveRTAh') 
				case 'dellbad':
				case 'dellbadword':
					if (!isOwner) return reply(ind.ownerb())
					if (!isGroupAdmins) return reply(ind.admin())
					let dbw = body.slice(9)
					bad.splice(dbw)
					fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
					reply('Success âœ“')
				break
				case 'listbadword':
					let lbw = `list BAD WORD\nTotal : ${bad.length}\n`
					for (let i of bad) {
					lbw += `âž¸ ${i.replace(bad)}\n`
					}
					reply(lbw)
				break
				case 'tts':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return kev.sendMessage(from, 'Kode bahasanya mana kak? contoh : ${prefix}tts id Halo kevin', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return kev.sendMessage(from, `Teksnya mana kak | contoh : ${prefix}tts id ah yamate kudasai`, text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('Teks nya terlalu panjang kak')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							kev.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
					break
					case 'getses':
                if (!isOwner) return await hisoka.reply(from, ind.ownerOnly(), id)
                const ses = await hisoka.getSnapshot()
                await kev.sendMessage(from, ses, image, {quoted: mek})
            break
					case 'ttp':
					if (isBanned) return reply(ind.baned())
					if (!isRegistered) return reply(ind.noregis())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('yang mau dijadiin text sticker apaan, titit kah?')
					ranp = getRandom('.bin')
					rano = getRandom('.webp')
					ppt = body.slice(4).trim()
					anu = await fetchJson(`https://xteam.xyz/attp?file&text=${ppt}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						kev.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
                        await limitAdd(sender)
					break
				case 'toimg':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isQuotedSticker) return reply('Reply atau Tag sticker yang mau dijadiin gambar kak >_<')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await kev.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						kev.sendMessage(from, buffer, image, {quoted: mek, caption: 'nih kak [(^.^)]'})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
				case 'togif':
				case 'tomedia':
                                        if (!isQuotedSticker) return reply('Reply stiker nya')
                                        if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
                                        const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        const media = await kev.downloadAndSaveMediaMessage(encmedia)
                                        const upload = await uploadimg(media, Date.now() + '.webp')
                                        console.log(upload)
                                        const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
                                        const buff = await getBuffer(rume.data.result)
                                        console.log(rume.data)
                                        kev.sendMessage(from, buff, video, { mimetype: Mimetype.gif, caption: 'Nih', quoted: mek})
                                }
                                break
                case 'musicapa':
                case 'identifymsic':
                case 'msic':
                if (isQuotedAudio){
                	reply(ind.wait) 
				const dlfile = await kev.downloadMediaMessage(JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo)
				const bodyForm = new FormData()
			        bodyForm.append('audio', dlfile, 'music.mp3')
           			bodyForm.append('apikey', 'LiaTPHt6xgGSng88ZxT0gpPXyvb')
           			axios('https://api.zeks.xyz/api/searchmusic', {
                		method: 'POST',
                		headers: {
				"Content-Type": "multipart/form-data",
        			...bodyForm.getHeaders()
                		},
                		data: bodyForm
            			})
                		.then(({data}) =>{
				if (data.status){
				reply(`*「 Search Music 」*\n\n\n• *Title*: ${data.data.title}\n\n• *Artists*: ${data.data.artists}\n\n• *Genre*: ${data.data.genre}\n\n• *Album*: ${data.data.album}\n\n• *Release date*: ${data.data.release_date}`)
				} else reply(data.message)
				}).catch(() => reply('Internal server error!, try again later'))
				} else {
				reply('Wrong format!')
				}
				break
                case 'audio2text':
                case 'audioketext':
                case 'audiototext':
                if (!isQuotedAudio) return reply('Reply audio nya')
                const iud = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                const file = await kev.downloadAndSaveMediaMessage(iud)
                                const stream = fs.createReadStream(file);
                                const form = new FormData();
                                form.append('audio', stream);
                                const res = await fetchhk('http://hujanapi.xyz/api/stt?apikey=1mg0WIubVmGCJ4E', { method: 'POST', body: form })
                                const ret =  await res.json()
                                kev.sendMessage(from, ret.result, text, {quoted: mek})
                                break
                case 'speed':
                case 'ping':
                const timestamp = speed();
                const latensi = speed() - timestamp 
                kev.sendMessage(from, `Speed: ${latensi.toFixed(4)} _ms_`, text, { quoted: mek})
                    break			
               case 'hah':
               
                const getQuoteds = quotedMsgObj
                const chargin = batterylevel.includes(getQuoteds) ? 'Yes' : 'No'
                const chargins =batterylevel ? 'Yes' : 'No'
                charg = chargins
                break
                case 'ping1':
               case 'botstat':
                if (!isRegistered) return reply(ind.noregis())
                const timestampp = speed();
                const latensii = speed() - timestampp
                stat = `「 *𝙎𝙏𝘼𝙏𝙐𝙎 𝙃𝙋 𝘽𝙊𝙏* 」\n*Ram :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB \n*Batrai :* ${battre}% \n*MerkHp :* Redmi Note 7 \n*Cpu :* Octa-core Max 2.20GHz`
                reply(`${stat}`)
                break	
                case 'bikinquote':
                if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                var gh = body.slice(12)
					var quote = gh.split("&")[0];
					var wm = gh.split("&")[1];
					const pref = `yang mau dijadiin quote apaan, titit?\n\ncontoh : ${prefix}bikinquote aku bukan boneka & owner`
					if (args.length < 1) return reply(pref)
					reply(ind.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					kev.sendMessage(from, buffer, image, {caption: 'Nih kak >_<', quoted: mek})
					await limitAdd(sender)
					break
                   case 'stalkig':
                   if (isBanned) return reply(ind.baned())
                   if (!isRegistered) return reply(ind.noregis())
                   if (isLimit(sender)) return reply(ind.limitend(pusname))
                     sig = body.slice(9)
                     anu = await fetchJson(`https://st4rz.herokuapp.com/api/stalk?username=${sig}`, {method: 'get'})
                     reply('「❗」Sabar Lagi Stalking IG nya kak')
                     buffer = await getBuffer(anu.Profile_pic)
                     hasil = `YAHAHA TELAH DI STALK BOS KU UNTUK USERNAME ${sig} \n\n *Username* : _${anu.Username}_ \n *Nama* : _${anu.Name}_ \n *Jumlah Follower??﹦?* : _${anu.Jumlah_Followers}_\n *Jumlah Following* : _${anu.Jumlah_Following}_\n *Jumlah Post* : _${anu.Jumlah_Post}_\n *Biodata* : _${anu.Biodata}_`
                    kev.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    await limitAdd(sender)
			       break
				case 'daftar':
				if (isBanned) return reply(ind.baned())
                if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('|')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if (namaUser.length >= 30) return reply(`Namanya kepanjangan kak :)`)
                if (umurUser.length >= 3, umurUser.length <= 1) return reply(`Umur min 10 tahun max 40 tahun`)
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
					break
		case 'silktext':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))				
				if (args.length < 1) return reply(ind.wrongf())
				silk = body.slice(10)
				if (silk.length > 7) return reply('Teksnya kepanjangan, maksimal 6 karakter')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/silktext?text=${silk}&apikey=${VhtearKey}`)
		    kev.sendMessage(from, buffer, image, {quoted: mek})
		    await limitAdd(sender)	
		    break
// PREMIUM
				case 'premiumlist':
					kev.updatePresence(from, Presence.composing) 
                    if (!isRegistered) return reply(ind.noregis())
					prmlist = `╭─「 *JUMLAH USER PREMIUM* 」\n`
					no = 0
					for (let prem of premium) {
						no += 1
						prmlist += `│「${no.toString()}」 @${prem.split('@')[0]}\n`
					}
					prmlist += `│ Jumlah User Premium : ${premium.length}\n╰──────「 *${botName}* 」`
					kev.sendMessage(from, prmlist.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": premium}})
					break
				case 'userlist':
					kev.updatePresence(from, Presence.composing) 
                    if (!isRegistered) return reply(ind.noregis())
					ske = `╭─「 *JUMLAH USER PREMIUM* 」\n`
					no = 0
					for (let i of getRegisterNo) {
						no += 1
						ske += `│「${no.toString()}」 @${i.split('@')[0]}\n`
					}
					ske += `│ Jumlah User Premium : ${getRegisterNo.length}\n╰──────「 *${botName}* 」`
					kev.sendMessage(from, ske.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": getRegisterNo}})
					break
				case 'bokep':
				kev.updatePresence(from, Presence.composing) 
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				 data = fs.readFileSync('./src/18.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply('JANGAN COMLY MULU BRO')
                 randTeks = randKey.teks
                 kev.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				break
				case 'mutual':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
                if (isGroup) return  reply( 'TIDAK BISA DI GRUP KAK')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Mencari Pasangan >_<')
                await reply(`wa.me/${anug}`)
                await reply( `Pasangan Ditemukan: ??\n*${prefix}next* — Temukan Pasangan Baru`)
            break
            case 'next':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
                if (isGroup) return  reply( 'TIDAK BISA DI GRUP KAK')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Mencari Pasangan >_<')
                await reply(`wa.me/${anug}`)
                await reply( `Pasangan Ditemukan: 🐊\n*${prefix}next* — Temukan Pasangan Baru`)
                break
                case 'blowjob':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						kev.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
                case 'nangis':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/cry?apikey=kevzka`, {method: 'get'})
					reply('「❗」KASIH JEDA 1 MENIT HABIS INI YA KAK')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						kev.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'cium':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/kiss?apikey=kevzka`, {method: 'get'})
					reply('「❗」KASIH JEDA 1 MENIT HABIS INI YA KAK')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						kev.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'peluk':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/hug?apikey=kevzka`, {method: 'get'})
					reply('「❗」KASIH JEDA 1 MENIT HABIS INI YA KAK')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						kev.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'yutubdl':
					if (args.length < 1) return reply('Urlnya mana um?')
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('URL NYA TIDAK VALID KAK')				
		anu = await fetchJson(`https://api.vhtear.com/ytdl?link=${args[0]}&apikey=${VhtearKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*➸ JUDUL* : ${anu.result.title}\n\n*[WAIT] Proses Dumlu Yakan*`
					thumb = await getBuffer(anu.result.imgUrl)
					kev.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result.UrlVideo)
					kev.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
					break
				case 'hideta':
				sendMessage(from, hai, text)
				break
					case 'hidetag5':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
					if (!isGroup) return reply(ind.groupo())
					var value = body.slice(10)
					var group = await kev.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					kev.sendMessage(from, options, text)
	                .then(() => {kev.sendMessage(from, options, text)})
	                .then(() => {kev.sendMessage(from, options, text)})
	                .then(() => {kev.sendMessage(from, options, text)})
	                .then(() => {kev.sendMessage(from, options, text)})
					break
					case 'hidetag10':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
					if (!isGroup) return reply(ind.groupo())
					var value = body.slice(11)
					var group = await kev.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					kev.sendMessage(from, options, text)
	                .then(() => {kev.sendMessage(from, options, text)})
	                .then(() => {kev.sendMessage(from, options, text)})
	                .then(() => {kev.sendMessage(from, options, text)})
	                .then(() => {kev.sendMessage(from, options, text)})
	                .then(() => {kev.sendMessage(from, options, text)})
	                .then(() => {kev.sendMessage(from, options, text)})
	                .then(() => {kev.sendMessage(from, options, text)})
	                .then(() => {kev.sendMessage(from, options, text)})
	                .then(() => {kev.sendMessage(from, options, text)})	                	                
					break
                case 'randomhentong':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
					gatauda = body.slice(15)
					reply(ind.wait())
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=${TobzKey}`)
					buffer = await getBuffer(anu.result)
					kev.sendMessage(from, buffer, image, {quoted: mek})
					break																													               							
// PREMIUM		    								
/*
]=====> GABUTZ MENU <=====[
*/
				case 'caklontong':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`http://zekais-api.herokuapp.com/caklontong`, {method: 'get'})
					caklontong = `*${anu.soal}*`
					lontong = `➸ Jawaban : *${anu.jawaban}* \n➸ Penjelasan : *${anu.detail}*`
					setTimeout( () => {
					kev.sendMessage(from, lontong, text, {quoted: mek})					
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					kev.sendMessage(from, '_10 Detik lagi…_', text)
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					kev.sendMessage(from, '_20 Detik lagi..._', text)
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					kev.sendMessage(from, '_30 Detik lagi..._', text)
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					kev.sendMessage(from, caklontong, text, {quoted: mek})
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
				case 'tebakkata':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/tebak-kata?apikey=LSLDKYBX`, {method: 'get'})
					tebak = `*${anu.result.soal}*`
					kata = `➸ Jawaban : *${anu.result.jawaban}* \n➸ Penjelasan : *${anu.detail}*`
					setTimeout( () => {
					kev.sendMessage(from, kata, text, {quoted: mek})					
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					kev.sendMessage(from, '_10 Detik lagi…_', text)
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					kev.sendMessage(from, '_20 Detik lagi..._', text)
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					kev.sendMessage(from, '_30 Detik lagi..._', text)
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					kev.sendMessage(from, tebak, text, {quoted: mek})
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
				case 'tebakgambar':
				case 'tebakin':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				unai = await fetchJson(`https://api.zeks.xyz/api/tebakgambar?apikey=LiaTPHt6xgGSng88ZxT0gpPXyvb`, {method: 'get'})
		    ngebuffir = await getBuffer(unai.result.soal)
		    var iniresultjawabann = `${unai.result.jawaban}`
		    iniljawaban = `${unai.result.jawaban}`
					tebak = `➸ Jawaban : *${iniljawaban}*`
					setTimeout( () => {
					kev.sendMessage(from, tebak, text, {quoted: mek})
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					kev.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					kev.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					kev.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					kev.sendMessage(from, ngebuffir, image, { caption: '_Tebak bro!!! gak bisa jawab donasi ya:v_', quoted: mek }) // ur cods
					kev.sendMessage(from, iniresultjawabann.replace(/a|u|e|o/g, "-"), text, {quoted: mek})
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
					case 'jawab':
					if (args[0] === 'jawab1') {
					    reply(`*jawaban mu benar*`)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP*`)
					}
                    break
                    case 'umur':
                    // Akhir Hitungan Mundur
var countDownDate = new Date(`${body.slice(6)}`).getTime();
// Mengambil Tanggal Dan Waktu
var now = new Date().getTime();
// Find the distance between now and the count down date
var distance = countDownDate - now;
// Kalkulator Waktu Hari, Jam, Menit, Detik 
var yearss = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
var hdbdhdbd = `${yearss}`
                kev.sendMessage(from, '*Umur Mu*'+ hdbdhdbd.replace(/a|-|o/g, " ") + 'tahun', text)
                break
				case 'bisakah':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					bisakah = body.slice(1)
					const bisa =['Tentu Saja Bisa! Kamu Adalah Orang Paling Homky','Gak Bisa Ajg Aowkwowk','Hmm Gua Gak Tau Yaa, tanya ama bapakau','Ulangi Tod Gua Ga Paham']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					kev.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'kapankah':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					kev.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
           case 'apakah':
           if (isBanned) return reply(ind.baned())
           if (!isRegistered) return reply(ind.noregis())
           if (isLimit(sender)) return reply(ind.limitend(pusname))
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Ulangi bro gak paham']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					kev.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'rate':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					kev.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
           case 'hobby':
           if (isBanned) return reply(ind.baned())
           if (!isRegistered) return reply(ind.noregis())
           if (isLimit(sender)) return reply(ind.limitend(pusname))
					hobby = body.slice(1)
					const hob =['Desah Di Game','Ngocokin Doi','Stalking sosmed nya mantan','Kau kan gak punya hobby awokawok','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					kev.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
case 'neontext':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}neontext kevin`)
neon = body.slice(10)
reply(ind.wait)
neo = await getBuffer(`http://api.lolhuman.xyz/api/textprome/neon?apikey=847de7716f17a51eeba4235c&text=${neon}`)
kev.sendMessage(from, neo, image, {quoted: mek})
break					
           case 'seberapagay':
           if (isBanned) return reply(ind.baned())
           if (!isRegistered) return reply(ind.noregis())
           if (isLimit(sender)) return reply(ind.limitend(pusname))
					gay = body.slice(13)
		   anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
		   hasil = `Nih Liat Data Gay Si ${gay}\n\n\nPersentase Gay : ${anu.persen}%\nAlert!!! : ${anu.desc}`
		   reply(hasil)
		   await limitAdd(sender)
					break	
           case 'gay':
           if (isBanned) return reply(ind.baned())
           if (!isRegistered) return reply(ind.noregis())
           if (isLimit(sender)) return reply(ind.limitend(pusname))
					gay = body.slice(13)
		   const gy =['0','5','10','15','20','25','30','35','40','45','50','55','60','65','70','75','80','85','90','95','100']
		   const gya = gy[Math.floor(Math.random() * gy.length)]
		   hasil = `Nih Liat Data Gay Si ${gay}\n\n\nPersentase Gay :`
		   kev.sendMessage(from, hasil+gya+'%', {quoted: mek})
		   await limitAdd(sender)
					break	
				case 'gets':
				case 'getstick':
				case 'getstik':
				case 'getsticker':
				var itsme = `0@s.whatsapp.net`
				var split = `${cr}`
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				namastc = body.slice(6)
				try {
				result = fs.readFileSync(`./assets/stick/${namastc}.webp`)
				kev.sendMessage(from, result, sticker)
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				case 'liststik':
				lstk = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					lstk += `- ${awokwkwk}\n`
				}
				lstk += `\n*Total : ${setiker.length}*\nGunakan perintah\n*${prefix}gets (nama pack)*\nuntuk mengambil stiker`
				kev.sendMessage(from, lstk.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
				break
				case 'fakethumbnail':
                case 'fthumbnail':
                case 'fakethumb':
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					let encmediaa = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					let mediaa = await kev.downloadMediaMessage(encmediaa)
					fakethumb(mediaa,'nih') 
				} else {
					reply(from, `Kirim gambar atau reply dengan caption ${prefix}fakethumb caption`, { quoted : mek})
				}
				break
				case 'setthumb':
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await kev.downloadMediaMessage(boij)
			fs.writeFileSync(`./assets/faket.jpg`, delb)
			reply('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break
				break
				case 'addstik':
				if (!isQuotedSticker) return reply('Reply stiker nya')
				if (!isOwner) return reply(ind.ownerb())
				svst = body.slice(9)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await kev.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./assets/stick/${svst}.webp`, delb)
				fs.writeFileSync('./assets/stik.json', JSON.stringify(setiker))
				kev.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: mek })
				break
				case 'dellstik':
				if (!isRegistered) return reply(ind.noregis())
				dsvst = body.slice(9)
				if (!dsvst) return reply('Nama sticker nya apa?')
				setiker.splice(`${dsvst}`)
				fs.writeFileSync(`./assets/stick/${dsvst}.webp`)
				fs.writeFileSync('./assets/stik.json', JSON.stringify(setiker))
				kev.sendMessage(from, `Sukses Membunsg Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: mek })
				break
				case 'addvn':
				if (!isQuotedAudio) return reply('Reply vnnya')
				if (!isOwner) return reply(ind.ownerb())
				svst = body.slice(7)
				if (!svst) return reply('Nama audionya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await kev.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./assets/${svst}.mp3`, delb)
				fs.writeFileSync('./assets/vn.json', JSON.stringify(audionye))
				kev.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
				break

			case 'getvn':
				namastc = body.slice(7)
				try {
				buffer = fs.readFileSync(`./assets/${namastc}.mp3`)
				kev.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break

			case 'listvn':
			case 'vnlist':
				lvn = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					lvn += `- ${awokwkwk}\n`
				}
				lvn += `\n*Total : ${audionye.length}*\nGunakan perintah\n*${prefix}getvn (nama pack)*\nuntuk mengambil vn`
				kev.sendMessage(from, lvn.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
				break
                case 'truth':
                if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					kev.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					break
		case 'sarananime':
		if (isBanned) return reply(ind.baned())
			if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					const saran =[`anime romance dimana heroine nya awalnya di benci kemudian jatuh cinta\n°Fuuka\n°Masamune's Revenge\n°Sousei no Onmyouji\n°Oda Nobuna no Yabou\n°Kaze no Stigma\n°Btooom!\n°Tonari no Kaibutsu-kun\n°Akame ga Kill\n°Kaichou wa Maid-sama!\n°Nisekoi\n____________________________\nAnime dimana MC ke Isekai dan mendapatkan kekuatan OP\n°Isekai wa Smartphone to Tomo ni\n°Isekai Maou to Shokan Shoujo no Dorei Majutsu\n°Arifureta Shokugyo de Sekai Saikyou\n°Maou-sama, Retry!\n°Hataraku Maou-sama\n°Drifter\n°Yojou Senki\n°Tensei Shitara Slime Datta Ken\n°No Game No Life\n____________________________\nTop Anime Romance/Action\n°Beatless\n°Kishuku Gakkou no Juliet\n°Devil Line\n°Toaru Hikuushi e no Koiuta\n°Shuumatsu Nani Shitemasu ka? Isogashii Desu ka? Sukutte Moratte Ii desu ka?\n____________________________\nAnime dimana MC OP tidak mengetahui kekuatan sebenarnya\n°Dakara Boku wa, H ga Dekinai\n°Tokyo Ravens\n°Kore wa Zombie desu ka?\n°Maoyuu Maou Yuusha\n°Blood Lad\n°Musaigen no Phantom World\n°Witch Craft Works\n____________________________\nAnime dimana MC OP tapi tidak dapat mengendalikan kekuatannya\n°Sousei no Onmyouji\n°Bungo Stray Dogs\n°Owari no Seraph\n°Kyoukai no Kanata\n°Mushibugyo\n____________________________\nBest Anime Romance \n°Love Lab\n°Noucome\n°Inou-Battle wa Nichijou-Kei no Naka de\n°Boku wa Tomodachi ga Sukunai\n°Kono Bijutsubu ni wa Mondai ga Aru!\n°Just Because!\n°Mayo Chiki!\n°Mikakunin de Shinkoukei\n°Sankarea\n°Oda\n°Seiren\n°3D kanojo\n______________________________\nTop anime MC kalem/badass\n°Amnesia\n°Angel Beats!\n°Tokyo Ghoul\n°Darling in the FranXX\n°Golden Time\n_____________\nTop 10 Harem dan MC over power\n°Maji de Watashi Ni Koi Shinasai!\n°Hagure Yuusha no Aesthetica\n°Busou Shoujo Machiavellianism\n°Hidan no Aria\n°Seiken Tsukai no World Break\n°Hundred\n°Masou Gakuen HXH\n°Highschool DxD\n°Seikon no Qwaser\n°Inou-Battle Nichijou-Kei no Naka de\n____________________________\nTop Harem MC OP\n°IS: Infinite Stratos\n°Campione!n°Kore wa Zombie Desu ka?\n°Trinity Seven\n°Yuragi-sou no Yuuna-san\n°Sin: Nanatsu no Taizai\n°Neon Genesis Evangelion\n°Hello World\n°Recently, My sister is unusual\n•Vampire Knight\n____________________________\nTop Anime MC ngebangkitkan kekuatannya\n°Hitsugi no Chaika\n°Tsubasa Chronicle\n°Fate/Stay Night\n°Seiken no Blacksmith\n°Absolute Duo\n°Dakara Boku wa, H ga Dekinai\n°Mahou Sensou\n____________________________\nTop Anime with anti sosial & OP MC\n°Goblin Slayer\n°No Game No Life\n°Grisaia no Kajitsu\n°Jormungand\n°Classroom of the Elite\n°Saiki Kusou no Psi Nan\n____________________________\nTop anime MC badas\n°Drifters\n°Kara no Kyoukai\n°Kino no Tabi\n°Darker than Black\n°Grisaia Series\n°Fate/Zero\n____________________________\nTop Anime MC pura² lemah padahal kuat\n°Blood Lad\n°Rokudenashi Majutsu Koushitsu\n°Saiki Kusou no Psi Nan\n°Classroom of the Elite\n____________________________\nTop anime with OP MC (2019)\n°Isekai Cheat Magician\n°Arifureta Shokugyo Sekai ni Saikyou\n°Maou-sama, Retry!\n°Katsute Kami Datta Kemono-tachi e\n°Toaru Kagaku no Accelerator\n°Kenja no Mago\n°Vinland Saga\n°Tate no Yuusha no Nariagari\n°Dr. Stone\n____________________________\nTop anime MC abadi\n°Itsuka Tenma no Kuro Usagi\n°UQ Holder\n°Renai Boukun\n°Kuroshitsuji\n°Sayonara no Asa\n°Re:Zero Kara Hajimeru Isekai Seikatsu\n____________________________\nTop anime dimana MC dikhianati dan jatuh ke jalan gelap\n°Arifureta Shokugyo Sekai ni Saikyou\n°Guilty Crown\n°Akame ga Kill\n°Zetsuen no Tempest\n°Ao no Excorcist\n°Densetsu no Yuusha no Densetsu\n°91 Days\n°Tate no Yuusha no Nariagari\n°Shinsekai Yori\n°Btooom!\n°Mawaru Penguindrum\n____________________________\nTop anime MC terlihat malas tapi OV/badass\n°Densetsu no Yuusha no Densetsu\n°Rokudenashi Majutsu Koushitsu\n°Zetsuen no Tempest\n°Nejimaki Seirei Senki: Tenkyou no Alderamin\n°Gate\n°Hyouka\n°Gintama\n____________________________\nTop Anime yang MC-nya adalah legenda pensiunan yang kembali lagi\n°Accel World\n°Noragami\n°Shuumatsu Nani Shitemasu ka?\n°Yuushibu\n°Rokudenashi Majutsu Koushitsu\n°Densetsu no Yuusha no Densetsu\n°Hataraku Maou-sama\n°Violet Evergarden\n°Hagure Yuusha no Aesthetica\n____________________________\nTop Anime dengan MC memiliki masa lalu yang gelap\n°Zankyou no Terror\n°Black Bullet\n°Jigoku Shoujo\n°Owari no Seraph\n°91 Days\n°Classroom of the Elite\n°Noragami\n____________________________\nTop anime dengan MC yang memiliki kekuatan khusus\n°Dakara Boku wa, H ga Dekinai\n°Yuragi-Sou no Yuuna-san\n°Inu X Boku SS\n°Charlotte\n____________________________\nTop Anime Cinta Obsesi \n°Amagami SS\n°Aho Girl\n°Kono Bijutsubu\n°Haiyore! Nyaruko-san\n°Shuffle!\n°Gekkan Shoujo Nozaki-kun\n°Renai Boukun\n°Mirai Nikki\n°Kawaikereba Hentai demo Suki ni Natte Kuremasu ka?\n____________________________\nTop anime romantis-komedi\n°Net-juu no Susume\n°Mikakunin de Shinkoukei\n°Chuunibyou demo Koi ga Shitai!\n°Servant x Service\n°Masamune-kun's Revenge\n°Gamers!\n°Nisekoi\n____________________________\nTop Anime dimana MC memiliki kekuatan Hewan Legendaris\n°Seikoku no Dragonar\n°Bungo Stray Dogs\n°High school DxD\n°Owari no Seraph\n____________________________\nTop Anime dimana MC OP dan tidak ada yang mengetahui\n°Chrome Shelled Regios\n°Tokyo Majin Gakuen Kenpuchou\n°Quanzhi Fashi\n°Rokudenashi Majutsu Koushitsu\n°Witch Craft Works\n°Mahouka Koukou no Rettousei\n°Rakudai Kishi no Cavalry\n____________________________\nTop Anime dengan MC OP\n°Phantom: Requiem for the Phantom\n°Divine Gate\n°Hitsugi no Chaika\n°Code: Breaker\n°Kiznaiver\n°Ansatsu koushitsu\n°Kara no Kyoukai\n____________________________\nTop Anime dimana MC nya Jenius/Cerdas/Ahli siasat\n°Nejimaki Seirei Senki: Tenkyou no Alderamin\n°Hyouka\n°Dr. Stone\n°Classroom of the Elite\n°No Game No Life\n°Death Note\n____________________________\nAnime dimana MC adalah murid pindahan yang OP\n°Hundred\n°Code: Breaker\n°Tokyo Majin Gakuen Kenpuchou\n°Chrome Shelled Regios\n°Kill la Kill\n°Mahouka Koukou no Rettousei\n____________________________\n\nanime Isekai (2019)\n°Tsuujou Kougeki ga Zentai Kougeki de Ni-kai Kougeki no - Okaasan wa Suki Desu ka?\n°Arifureta Shokugyo de Sekai Saikyou\n°Kenja no Mago\n°Maou-sama, Retry!\n°Watashi, Nouryoku wa Heikinchi de tte Yo ne!\n°Mairimashita! Iruma-kun\n°Honzuki no Gekokujou: Shisho ni Naru Tame ni Shudan wo\n°Choujin Koukousei-tachi wa Isekai demo Yoyuu de Ikinuku you Desu!\n°Shinchou Yuusha: Kono Yuusha ga Ore Tueee Kuseni Shinchou Sugiru`]
					srn = await getBuffer(`https://i.ibb.co/sqKq02g/Re.jpg`)
					kev.sendMessage(from, srn, image, { quoted: mek, caption: '*saran anime*\n'+ saran })
					break
                case 'dare':
                if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))                
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot 🤥 setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					kev.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					break
				case 'ramadhan':
// Akhir Hitungan Mundur
var countDownDate = new Date("12 April 2021").getTime();
// Mengambil Tanggal Dan Waktu
var now = new Date().getTime();
// Find the distance between now and the count down date
var distance = countDownDate - now;
// Kalkulator Waktu Hari, Jam, Menit, Detik 
var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
var hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var secondss = Math.floor((distance % (1000 * 60)) / 1000);
                reply(`*Menuju Ramadhan:*\n${dayss} Hari ${hourss} Jam ${minutess} Menit ${secondss} Detik`)
                break
				case 'goldplaybutton':
				case 'gpb':
				case 'gplaybutton':
				      if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}blackpink Kevin`)
gld = body.slice(16)
reply('「❗」Hmmmm -_-')
pbt = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${gld}&apikey=LiaTPHt6xgGSng88ZxT0gpPXyvb`)
kev.sendMessage(from, pbt, image, {quoted: mek})
break
				case 'silverplaybutton':
				case 'spb':
				case 'splaybutton':
				      if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}blackpink Kevin`)
slv = body.slice(18)
reply('「❗」Hah halu lu')
pbn = await getBuffer(`https://api.zeks.xyz/api/splaybutton?text=${slv}&apikey=LiaTPHt6xgGSng88ZxT0gpPXyvb`)
kev.sendMessage(from, pbn, image, {quoted: mek})
break
				case 'gtav':
if (!isRegistered) return reply(ind.noregis())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait)
  owgi = await kev.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
  hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
 kev.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('Jangan tambah kan apapun pada command')
}
break
				case 'drawing':
if (!isRegistered) return reply(ind.noregis())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait)
  owgi = await kev.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
 kev.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('Jangan tambah kan apapun pada command')
}
break
				case 'triggered':
					case 'ger':
 if (!isRegistered) return reply(ind.wait())
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           reply(ind.wait)
         owgi = await kev.downloadAndSaveMediaMessage(ger)
           anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
        tggrd = `${anu.display_url}`
         ranp = getRandom('.gif')
        rano = getRandom('.webp')
        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${tggrd}`
       exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                kev.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break
                case 'ppcouple':
                case 'photocouple':
                case 'photoprofilecouple':
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=LSLDKYBX`)
                male = await getBuffer(anu.result.male)
                female = await getBuffer(anu.result.female)
                kev.sendMessage(from, male, image, {quoted: mek, caption: 'male'})
                kev.sendMessage(from, female, image, {quoted: mek, caption: 'female'})
                await limitAdd(sender)
                break
                case 'circle':
if (!isRegistered) return reply(ind.noregis())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait)
  owgi = await kev.downloadAndSaveMediaMessage(ger)
  anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
  sket = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://leyscoders-api.herokuapp.com/api/img/circle?url=${sket}&apikey=LSLDKYBX`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
nobg = fs.readFileSync(rano)
kev.sendMessage(from, nobg, sticker, {
  quoted: mek
})
fs.unlinkSync(rano)
  })

} else {
  reply('Gunakan foto!')
}
break
				case 'wasted':
  case 'was':
if (!isRegistered) return reply(ind.noregis())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait)
  owgi = await kev.downloadAndSaveMediaMessage(ger)
  anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
  sket = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${sket}`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
nobg = fs.readFileSync(rano)
kev.sendMessage(from, nobg, sticker, {
  quoted: mek
})
fs.unlinkSync(rano)
  })

} else {
  reply('Gunakan foto!')
}
break
                case 'slapimage':
if (!isRegistered) return reply(ind.noregis())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait)
  owgi = await kev.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
  hehe = await getBuffer(`https://api.zeks.xyz/api/slap?apikey=LiaTPHt6xgGSng88ZxT0gpPXyvb&img1=${anu.display_url}&img2=${anu.display_url}`)
 kev.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('mana foto nya kaka>_<')
}
break
                case 'rip':
if (!isRegistered) return reply(ind.noregis())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait)
  owgi = await kev.downloadAndSaveMediaMessage(ted)
  tels = body.slice(5)
  anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
  hehe = await getBuffer(`http://api.lolhuman.xyz/api/editor/skullmask?apikey=847de7716f17a51eeba4235c&img=${tels}`)
 kev.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('mana foto nya kaka>_<')
}
break
				case 'passed':
if (!isRegistered) return reply(ind.noregis())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait)
  owgi = await kev.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
  hehe = await getBuffer(`https://mhankbarbar.tech/api/mpassed?url=${anu.display_url}&apiKey=${BarBarKey}`)
 kev.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('mana foto nya kaka>_<')
}
break
               case 'img2url':
               if (!isRegistered) return reply(ind.noregis())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait)
  owgi = await kev.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
  const balabal = `${anu.display_url}`
  kev.sendMessage(from, balabal, text) 
  }
  break
				case 'wanted':
if (!isRegistered) return reply(ind.noregis())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait)
  owgi = await kev.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
  hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)
 kev.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('mana foto nya kaka>_<')
}
break
                  case 'timer':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))                  
				if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam")}
				setTimeout( () => {
				reply("Waktu habis")
				}, timer)
				break						   
/*
]=====> MENU GRUP <=====[
*/		 
				case 'welcome':
                  if (isBanned) return reply(ind.baned())				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Ekhemm >_<')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*FITUR WELCOME SUDAH AKTIF KAK*')
						welkom.push(from)
						fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))
						reply('*「SUKSES」 MENGAKTIFKAN FITUR WELCOME DI GROUP*')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))
						reply('*「SUKSES」 MEMATIKAN FITUR WELCOME DI GROUP*')
					} else {
						reply(ind.satukos())
					}
					break
case 'blackpink':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}blackpink Kevin`)
pink = body.slice(11)
reply('「❗」Hah Blekping :v')
lol = await getBuffer(`http://api.lolhuman.xyz/api/textprome/blackpink?apikey=847de7716f17a51eeba4235c&text=${pink}`)
kev.sendMessage(from, lol, image, {quoted: mek})
break					
                 case 'event':
                  if (isBanned) return reply(ind.baned())                 
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('Ekhemm >_<')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*FITUR EVENT SUDAH AKTIF BOS*')
						event.push(from)
						fs.writeFileSync('./database/group/event.json', JSON.stringify(event))
						reply('*「SUKSES」 MENGAKTIFKAN EVENT DI GROUP*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/group/event.json', JSON.stringify(event))
						reply('*「SUKSES」 MEMATIKAN EVENT DI GROUP*')
					} else {
						reply(ind.satukos())
					}
					break
                case 'leveling':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Ekhemm >_<')
                if (args[0] === '1') {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                    _leveling.push(from)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvlon())
                } else if (args[0] === '0') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvloff())
                } else {
                    reply(ind.satukos())
                }
					break
				case 'simih':
                  if (isBanned) return reply(ind.baned())				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Ekhemm >_<')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('*SUDAH AKTIF*')
						samih.push(from)
						fs.writeFileSync('./database/group/simi.json', JSON.stringify(samih))
						reply('*「SUKSES」 MENGAKTIFKAN FITUR SIMI DI GROUP*')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/group/simi.json', JSON.stringify(samih))
						reply('*「SUKSES」 MEMATIKAN FITUR SIMI DI GROUP*')
					} else {
						reply(ind.satukos())
					}
					break
				case 'nsfw':
                  if (isBanned) return reply(ind.baned())				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Ekhem >_<')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply(' *sudah aktif*  !!')
						nsfw.push(from)
						fs.writeFileSync('./database/group/nsfw.json', JSON.stringify(nsfw))
						reply('*「SUKSES」 MENGAKTIFKAN FITUR NSFW DI GROUP*')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/group/nsfw.json', JSON.stringify(nsfw))
						reply('*「SUKSES」 MEMATIKAN FITUR NSWF DI GROUP*')
					} else {
						reply(ind.satukos())
					}
					break
                                case 'antilinkgrup':
                  if (isBanned) return reply(ind.baned())				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('EMANG MATI?')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('「SUKSES」MENGAKTIFKAN ANTI LINK DI GROUP')
						kev.sendMessage(from,`ALLERT!!! Jika bukan admin jangan kirim link grup`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antilink.splice(ini, 0)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('「SUKSES」MEMATIKAN ANTI LINK DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break					
					
				case 'admin':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))				
					if (!isGroup) return reply(ind.groupo())
					sket = `*DAFTAR ATASAN GROUP* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						sket += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(sket, groupAdmins, true)
					break
					case 'grup':
					case 'group':
                  if (isBanned) return reply(ind.baned())					
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						kev.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP*`)
						kev.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
				case 'add':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add siapa?')
					if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						kev.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Anjim yang mau di add di private, dahlah :)')
					}
					break
			     	case 'kick':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))			     	
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Bismillah atas izin admin grup kamu akan saya tendang 🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						kev.groupRemove(from, mentioned)
					} else {
						mentions(`Bismillah atas izin admin grup kamu akan saya tendang @${mentioned[0].split('@')[0]} 🏃`, mentioned, true)
						kev.groupRemove(from, mentioned)
					}
					break
                case 'hidetag':
                  if (isBanned) return reply(ind.baned())                
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await kev.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					kev.sendMessage(from, options, text)
					await limitAdd(sender)
					break					
                case 'level':
                  if (isBanned) return reply(ind.baned())                
                if (!isRegistered) return reply(ind.noregis())
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                const userTime = getRegisterTime(sender) 
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━━━━━♡ *LEVEL* ♡━━━━━━━┓\n┃╭───────────────────\n┃│➸ NAMA : ${pushname}\n┃│➸ NOMOR : wa.me/${sender.split("@")[0]}\n┃│➸ XP : ${userXp}/${requiredXp}\n┃│➸ LEVEL : ${userLevel}\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`
               kev.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
					break
                 case 'linkgrup':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))                
				    if (!isGroup) return reply(ind.groupo())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await kev.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    kev.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender)
					break
				case 'tagall':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))		
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					kets = (args.length > 1) ? body.slice(8).trim() : ''
					kets += '\n\n'
					for (let mem of groupMembers) {
						kets += `➸ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(kets, members_id, true)
					break
           case 'setname':
                if (!isRegistered) return reply(ind.noregis())           
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                kev.groupUpdateSubject(from, `${body.slice(9)}`)
                kev.sendMessage(from, '⟪ SUKSES ⟫ Mengubah Nama Grup', text, {quoted: mek})
					break
                case 'setdesc':
                if (!isRegistered) return reply(ind.noregis())                
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                kev.groupUpdateDescription(from, `${body.slice(9)}`)
                kev.sendMessage(from, '⟪ SUKSES ⟫ Mengubah Desk Grup', text, {quoted: mek})
					break
           case 'demote':
                if (!isRegistered) return reply(ind.noregis())           
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('??𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*jabatan kamu di copot*🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						kev.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Yahh @${mentioned[0].split('@')[0]} Jabatan kamu sebagai leluhur di grup telah di copot🏃`, mentioned, true)
						kev.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
                if (!isRegistered) return reply(ind.noregis())				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 ??𝗮??𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Yeee🥳 Kamu naik jabatan >_< :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						kev.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Selamat🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* >_<`, mentioned, true)
						kev.groupMakeAdmin(from, mentioned)
					}
					break
				case 'delete':
                if (!isRegistered) return reply(ind.noregis())				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, hapus pesan :\n'
						for (let _ of mentioned) {
							teks += `@${_[0].split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						kev.deleteMessage(from, mentioned)
					} else {
						mentions(`Perintah di terima, hapus pesan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						kev.deleteMessage(from, mentioned)
					}
					break
				case 'hedsot':
                if (!isRegistered) return reply(ind.noregis())				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Bismillah Hedsot >_< :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						kev.groupRemove(from, mentioned)
						mentions(teks, mentioned, true)
						kev.groupAdd(from, [num])
					} else {
						mentions(`Berhasil Meng hedsot pala nya  : @${mentioned[0].split('@')[0]}`, mentioned, true)
						kev.groupRemove(from, mentioned)
						}
					break
                 case 'fitnah':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))				
					if (!isGroup) return reply(ind.groupo())                 
				if (args.length < 1) return reply(`Gini kak : ${prefix}fitnah [@tag&pesan&balasanbot]\n\nContoh : ${prefix}fitnah @tagmember&hai&hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("&")[0];
					var target = gh.split("&")[1];
					var bot = gh.split("&")[2];
					kev.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
					case 'eval':
            case 'ev':
                if (!isOwner) return reply(ind.ownerb())
                if (!q) return reply(ind.wait())
                try {
                    let evaled = await eval(q)
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                    await kev.sendMessage(from, evaled)
                } catch (err) {
                    console.error(err)
                    await reply(from, err, id)
                }
            break
                      case 'leave':
                      if (isBanned) return reply(ind.baned())      
                      if (!isRegistered) return reply(ind.noregis())           
                      if (!isGroup) return reply(ind.groupo())
                      if (!isOwner) return reply(ind.ownerb())
                      setTimeout( () => {
                      kev.groupLeave (from) 
                      }, 2000)
                      setTimeout( () => {
                      kev.updatePresence(from, Presence.composing) 
                      if (!isRegistered) return reply(ind.noregis())
                      if (isBanned) return reply(ind.baned())   
                      kev.sendMessage(from, 'Aku pamit kak:)', text)
                      }, 0)
                      break																									
/*
]=====> DOWNLOAD MENU <=====[
*/
		case 'play':   
	          if (!isRegistered) return reply(ind.noregis())
                  if (isLimit(sender)) return reply(ind.limitend(pusname))
                reply(ind.download)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3/2?apikey=LiaTPHt6xgGSng88ZxT0gpPXyvb&q=${play}`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${anu.result.title}\nSource : ${anu.result.source}\nUkuran : ${anu.result.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA KAKA*`
                buffer = await getBuffer(anu.result.thumb)
                lagu = await getBuffer(anu.result.link)
                kev.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                kev.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.opus`, quoted: mek})
                await limitAdd(sender)
                break
		case 'tomp3':
                if (!isRegistered) return reply(ind.noregis())
                	kev.updatePresence(from, Presence.composing) 
                    if (!isQuotedVideo) return reply(' reply videonya um ')
					reply(ind.download)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await kev.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' Gagal, pada saat mengkonversi video ke mp3 ')
						buffer = fs.readFileSync(ran)
						kev.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break
		case 'shorturl':
		case 'urlshort':
		if (!isRegistered) return reply(ind.noregis)
                    anu = await fetchJson(`https://api.zeks.xyz/api/urlshort?url=${body.slice(10)}&apikey=LiaTPHt6xgGSng88ZxT0gpPXyvb`)
			        hasil = `${anu.result}`
			        reply(hasil)
			        break
		case 'ytmp4':
                    if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('Urlnya mana um?')
					reply(ind.download)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ytmp4?url=${body.slice(7)}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Size* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					kev.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					kev.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.opus`, quoted: mek})
					await limitAdd(sender)
					break
		case 'ytmp3':
                    if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('Urlnya mana um?')
					reply(ind.download)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ytmp3?url=${body.slice(7)}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Size* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					kev.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					kev.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.opus`, quoted: mek})
					await limitAdd(sender)
					break
		case 'igvideo':
                    if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('Urlnya mana um?')
					anu = await fetchJson(`https://api.zeks.xyz/api/ig?url=${body.slice(9)}&apikey=LiaTPHt6xgGSng88ZxT0gpPXyvb`)
					if (anu.error) return reply(anu.error)
				    haloya = `*Username* : ${anu.owner}\n*Caption* : ${anu.caption}`
					buffer = await getBuffer(anu.result[0].url)
					kev.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.name}.mp4`, quoted: mek, caption: haloya})
					await limitAdd(sender)
					break
		case 'igimage':
                    if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('Urlnya mana um?')
					anu = await fetchJson(`https://api.zeks.xyz/api/ig?url=${body.slice(9)}&apikey=LiaTPHt6xgGSng88ZxT0gpPXyvb`)
					if (anu.error) return reply(anu.error)
				    haloya = `*Username* : ${anu.owner}\n*Caption* : ${anu.caption}`
					buffer = await getBuffer(anu.result[0].url)
					kev.sendMessage(from, buffer, image, {quoted: mek, caption: haloya})
					await limitAdd(sender)
					break
		case 'tiktod':
		case 'tiktok':
        if (args.length < 1) return reply('Urlnya mana?')
        if (isBanned) return reply(nad.baned())
		if (!isRegistered) return reply(nad.noregis())
		if (isLimit(sender)) return reply(nad.limitend(pusname))
		reply(ind.download)
		linktod = body.slice(8)
		hem = await fetchJson(`https://api.zeks.xyz/api/tiktok/2?url=${linktod}&apikey=LiaTPHt6xgGSng88ZxT0gpPXyvb`)
		rasla = `*Video Ditemukan!!!*\nJudul : ${hem.data.title}\nAuthor : ${hem.data.author}\nLike : ${hem.data.like_count}\n\n*JANGAN LUPA DONASI KAKA*`
		rmln = await getBuffer(hem.data.download.download_server_1) // custom (hem.no_watermark)
	    kev.sendMessage(from, rmln, video, {mimetype: 'video/mp4', quoted: mek, caption: rasla})
		await limitAdd(sender)
		break
		case 'joox':
			    if (isBanned) return reply(ind.baned())    
				if (!isRegistered) return reply(ind.noregis())
				reply(ind.download)
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=${TobzKey}`, {method: 'get'})
			      if (anu.error) return reply(anu.error)
				    infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${data.result.judul}\nAlbum : ${data.result.album}\nDipublikasi : ${data.result.dipublikasi}\n*Filesize* : ${data.filesize}\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM*`
				bufferddd = await getBuffer(data.result.thumb)
				lagu = await getBuffer(data.result.mp3)
				kev.sendMessage(from, bufferddd, image, {quoted: mek, caption: infomp3})
				kev.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.opus`, quoted: mek})
				break

/*
]=====> LIMIT MENU <=====[
*/
				case 'limit':
				                  if (isBanned) return reply(ind.baned())
				   if (!isRegistered) return reply(ind.noregis())
				   checkLimit(sender)
					break
				case 'pensil':
				                  if (isBanned) return reply(ind.baned())
				   if (!isRegistered) return reply(ind.noregis())
				   checkPencil(sender)
					break
				case 'transfer':
                  if (isBanned) return reply(ind.baned())				
				if (!isRegistered) return reply(ind.noregis())
				if (!q.includes('|')) return  reply(ind.transfer())
				if (q.substring(q.lastIndexOf('|') + 1).startsWith('-')) return reply('Macam" kau ku ban')
				try {
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('6283141621181@s.whatsapp.net', fee)
                reply(`*⟪ SUKSES ⟫*\n\npengiriman uang berhasil\n➸ dari : +${sender.split("@")[0]}\n➸ ke : +${tujuan}\n➸ jumlah transfer : ${jumblah}\n➸ pajak : ${fee}`)
                } catch (e) {
                	console.log('Error :', e)
                }
                break
				case 'atm':
                  if (isBanned) return reply(ind.baned())				
				if (!isRegistered) return reply(ind.noregis())
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
				case 'atmtag':
                  if (isBanned) return reply(ind.baned())				
				if (!isRegistered) return reply(ind.noregis())
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('di tag ooooy')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				const kantongg = checkATMuser(mentioned)
				reply(ind.uangkauu(pushname, sender, kantongg))
				break
				case 'coba5':
				const region = 'id';
                const aki = new Aki(region);
                await aki.start();
                kev.sendMessage(from, 'question:' + aki.question, text, {quoted: mek})
                kev.sendMessage(from, 'answers: ' + aki.answers, text, {quoted: mek}) 
                if (args[0] === 'iya') {
			    const myAnswer = 0; // yes = 0
                await aki.step(myAnswer);
                kev.sendMessage(from, 'progress:' + aki.progress, text, {quoted: mek})
                kev.sendMessage(from, 'question:' + aki.question, text, {quoted: mek})
                kev.sendMessage(from, 'answers: ' + aki.answers, text, {quoted: mek}) 
				} else if (args[0] === 'tidak') {
		        const myAnswer = 1; // yes = 0
                await aki.step(myAnswer);
                kev.sendMessage(from, 'progress:' + aki.progress, text, {quoted: mek})
                kev.sendMessage(from, 'question:' + aki.question, text, {quoted: mek})
                kev.sendMessage(from, 'answers: ' + aki.answers, text, {quoted: mek}) 
				}
                break
				case 'iniapa2':
				hajk = mek.key.remoteJid
				kev.sendMessage(from, hajk, text, {quoted: mek})
				break
				case 'iniapa':
				hljik = body.slice(8) 
				linkgc = await kev.groupInviteCode ("6282151717363-1613978520@g.us")
		        yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
			    kev.sendMessage(from, yeh, text, {quoted: mek})
				break
				case 'addlimit':
                  if (isBanned) return reply(ind.baned())				
				if (!isRegistered) return reply(ind.noregis())
				if (!isOwner) return reply(ind.ownerb())
				if (args.length < 1) return reply('contoh : !addlimit @kev|1')
				const tujuantj = q.substring(0, q.indexOf('|') - 1)
                const jumblahjh = q.substring(q.lastIndexOf('|') + 1)
				const tujuanlmt = `${tujuantj.replace("@", '')}@s.whatsapp.net`
					bayarLimit(tujuanlmt, jumblahjh)
					await reply(`*⟪ PEMBAYARAN BERHASIL ⟫*\n\n➸ pengirim : Kevin\n➸ penerima : ${pushname}\n➸ sisa uang : ${checkATMuser(sender)}\n\nproses berhasil dengan SN\n${createSerial(15)}`) 
				break
				case 'adduang':
                  if (isBanned) return reply(ind.baned())				
				if (!isRegistered) return reply(ind.noregis())
				if (!isOwner) return reply(ind.ownerb())
				if (args.length < 1) return reply('contoh : !addlimit @kev|1')
				const tujuantjj = q.substring(0, q.indexOf('|') - 1)
                const jumblahjhh = q.substring(q.lastIndexOf('|') + 1)
				const tujuanung = `${tujuantjj.replace("@", '')}@s.whatsapp.net`
				feee = 0.005 *  jumblahjhh
                hasiluaj = jumblahjhh - feee
					addKoinUser(tujuanung, hasiluaj)
					await reply(`*⟪ PEMBAYARAN BERHASIL ⟫*\n\n➸ pengirim : Kevin\n➸ penerima : ${tujuanung}\n➸ sisa uang : ${checkATMuser(sender)}\n\nproses berhasil dengan SN\n${createSerial(15)}`) 
				break
				case 'buylimit':
                  if (isBanned) return reply(ind.baned())				
				if (!isRegistered) return reply(ind.noregis())
				if (args[0].startsWith('100')) return reply('mau ku ban')
				if (args[0].startsWith('999')) return reply('mau ku ban')
				if (args[0].startsWith('200')) return reply('mau ku ban')
				if (args[0].startsWith('9')) return reply('mau ku ban')
		        try {
				payout = body.slice(10)
				const koinPerlimit = 500
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`maaf kak uang nya gak cukup, kumpulin uang nya dumlu >_< jangan open bo kak:v`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*⟪ PEMBAYARAN BERHASIL ⟫*\n\n➸ pengirim : Kevin\n➸ penerima : ${pushname}\n➸ nominal pembelian : ${payout} \n➸ harga limit : ${koinPerlimit}/limit\n➸ sisa uang : ${checkATMuser(sender)}\n\nproses berhasil dengan SN\n${createSerial(15)}`)
				} 
				} catch (e) {
						console.log('Error :', e)
						reply('Anjim yang mau di add di private, dahlah :)')
					}
				break
				case 'buypensil':
                  if (isBanned) return reply(ind.baned())				
				if (!isRegistered) return reply(ind.noregis())
				payout = body.slice(11)
				const koinPencil = 3000
				const totalli = koinPencil * payout
				if ( checkATMuser(sender) <= totalli) return reply(`maaf kak uang nya gak cukup, kumpulin uang nya dumlu >_< jangan open bo kak:v`)
				if ( checkATMuser(sender) >= totalli ) {
					confirmATM(sender, totalli)
					bayarPencil(sender, payout)
					await reply(`*⟪ PEMBAYARAN BERHASIL ⟫*\n\n➸ pengirim : Kevin\n➸ penerima : ${pushname}\n➸ nominal pembelian : ${payout} \n➸ harga limit : ${koinPencil}/limit\n➸ sisa uang : ${checkATMuser(sender)}\n\nproses berhasil dengan SN\n${createSerial(15)}`)
				} 
				break
/*
]=====> RANDOM MENU <=====[
*/
                case 'pokemon':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					kev.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
                case 'anjing':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					kev.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
					case 'neko':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=${TobzKey}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						kev.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih nekonime mu >_<'})
					await limitAdd(sender)
					break
                case 'nekonime':
if (!isRegistered) return reply(ind.noregis())

kev.updatePresence(from, Presence.composing)
uk = ["anime neko","neko anime","nekonime"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(ind.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
kev.sendMessage(from, pok, image, {
  quoted: mek, caption: `Ini ?`
})

} catch {
  reply(ind.succes)
}
break	
                case 'kpop':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        reply(ind.wait())
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=${TobzKey}`, {method: 'get'})
                                        if (anu.error) return reply(anu.error)
                                        buffer = await getBuffer(anu.result)
                                        randomkpop = `*PLASTIQUE*`
                                        kev.sendMessage(from, buffer, image, {quoted: mek, caption: randomkpop})
                                        await limitAdd(sender)
                                        break
                     case 'husbu':
if (!isRegistered) return reply(ind.noregis())

kev.updatePresence(from, Presence.composing)
ak = ["anime husbu","husbu anime","husbu"]
hk = ak[Math.floor(Math.random() * ak.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${hk}`, {
  method: 'get'
})
reply(ind.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
kev.sendMessage(from, pok, image, {
  quoted: mek, caption: `Ini ?`
})

} catch {
  reply(ind.succes)
}
break	
                	case 'loli':
if (!isRegistered) return reply(ind.noregis())

kev.updatePresence(from, Presence.composing)
uk = ["anime loli","loli anime","loli"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(ind.wait)
reply(`*「❗」SIAPIN KARUNG BANG*`) 
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
kev.sendMessage(from, pok, image, {
  quoted: mek, caption: `Ini ?`
})

} catch {
  reply(ind.succes)
}
break				
					case 'wibu':
if (!isRegistered) return reply(ind.noregis())

kev.updatePresence(from, Presence.composing)
ek = ["anime wibu","wibu anime","wibu"]
jk = ek[Math.floor(Math.random() * ek.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${jk}`, {
  method: 'get'
})
reply(ind.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
kev.sendMessage(from, pok, image, {
  quoted: mek, caption: `Ini ?`
})

} catch {
  reply(ind.succes)
}
break	
                case 'darkjokes':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))   
				 data = fs.readFileSync('./src/darkjokes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*GELAP BOS :V*')
				break										
/*
]=====> OTHER MENU <=====[
*/				
            	case 'mining':
                      if (!isRegistered) return reply(ind.noregis())
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan sama owner Kevin`)
                      if (isOwner) {
                      const one = 999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`karena kevin baik Bot memberikan ${one}Xp >_<`)
                      }else{
                      const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
                      }
                    await limitAdd(sender)
					break
				case 'dungeon':
					const gambr1 = await getBuffer(`https://i.ibb.co/cNYVbhD/images-3-2021-03-26-T191036-163.jpg`)
		            const gambr2 = await getBuffer(`https://i.ibb.co/kM8LZnQ/images-3-2021-03-26-T191202-350.jpg`)
		            const slime = `sendMessage(from, gambr2, image, { caption: 'kamu di serang slime', quoted: mek })`
		            const goblin = `sendMessage(from, gambr1, image, { caption: 'kamu di serang goblin', quoted: mek })`
		            const dngon1 =[goblin,slime]
					const dngon2 = dngon1[Math.floor(Math.random() * dngon1.length)]
					kev.dngon2
					break
				case 'profile':
				reply(`*${prefix}profileme*\n profile anda\n *${prefix}profiletag*\n profile orang`) 
				case 'profileme':
    				kev.updatePresence(from, Presence.composing)
    				if (!isGroup) return reply(ind.groupo())
					if (!isRegistered) return reply(ind.noregis())
					if (isBanned) return reply(ind.baned())
					const getQuoted = quotedMsgObj
					const benet = ban.includes(getQuoted) ? 'Yes' : 'No'
                    const adm = groupAdmins.includes(getQuoted) ? 'Yes' : 'No'
                    const premi = premium.includes(getQuoted, premium) ? 'Yes' : 'No'
                    const bene = isBanned ? 'Yes' : 'No'
                    const adk = isGroupAdmins ? 'Yes' : 'No'
                    const prems = isPrem ? 'Yes' : 'No'
    				try {
					profil = await kev.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					 profile = `╭─「 *PROFILE ANDA* 」\n│• *Name:* ${pushname}\n│• *User Terdaftar:* ✅\n│• *Link:* wa.me/${sender.split("@")[0]}\n│• *Premium:* ${prems}\n│• *Banned:* ${bene}\n│• *Admin:* ${adk}\n╰─────────────────────`
					buff = await getBuffer(profil)
					kev.sendMessage(from, buff, image, {quoted: mek, caption: profile})
					break
				case 'profiletag':
    				kev.updatePresence(from, Presence.composing)
    				if (!isGroup) return reply(ind.groupo())
					if (!isRegistered) return reply(ind.noregis())
					if (isBanned) return reply(ind.baned())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('di tag ooooy')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					const gts = quotedMsgObj
					const benett = ban.includes(gts) ? 'Yes' : 'No'
                    const admm = groupAdmins.includes(gts) ? 'Yes' : 'No'
                    const premii = premium.includes(gts, premium) ? 'Yes' : 'No'
                    const benee = isBanned ? 'Yes' : 'No'
                    const adkk = isGroupAdmins ? 'Yes' : 'No'
                    const premss = isPrem ? 'Yes' : 'No'
    				try {
					profil = await kev.getProfilePicture(`${mentioned[0].split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					 profile = `╭─「 *PROFILE ANDA* 」\n│• *Name:* ${pushname}\n│• *User Terdaftar:* ✅\n│• *Link:* wa.me/${mentioned[0].split('@')[0]}\n│• *Premium:* ${premss}\n│• *Banned:* ${benee}\n│• *Admin:* ${adkk}\n╰─────────────────────`
					buff = await getBuffer(profil)
					kev.sendMessage(from, buff, image, {quoted: mek, caption: profile})
					break
                case 'moddroid':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=${TobzKey}`)
			hepi = data.result[0] 
			teks = `*➸ Nama*: ${data.result[0].title}\n*➸ publisher*: ${hepi.publisher}\n*➸ mod info:* ${hepi.mod_info}\n*➸ size*: ${hepi.size}\n*➸ latest version*: ${hepi.latest_version}\n*➸ genre*: ${hepi.genre}\n*➸ link:* ${hepi.link}\n*➸ download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			kev.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			break
			case 'happymod':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=${TobzKey}`)
			hupo = data.result[0] 
			teks = `*➸ Nama*: ${data.result[0].title}\n*➸ version*: ${hupo.version}\n*➸ size:* ${hupo.size}\n*➸ root*: ${hupo.root}\n*➸ purchase*: ${hupo.price}\n*➸ link*: ${hupo.link}\n*➸ download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			kev.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			break
					case 'pinterest':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					kev.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					kev.sendMessage(from, pok, image, { quoted: mek, caption: `*⟪ PINTEREST ⟫*`})
					await limitAdd(sender)
					break 
					case 'chatprank':
kev.updatePresence(from, Presence.composing)
if (!isRegistered) return reply(ind.noregis())

if (args.length < 1) return reply(`*☒* Masukan teks\nContoh : ${prefix}chatprank p/unten`)
tels = body.slice(11)
var teks1 = tels.split("/")[0];
var teks2 = tels.split("/")[1];
hasil = `${teks1}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${teks2}`
kev.sendMessage(from, hasil, text, {
  quoted: mek
})
break
                case 'beritahoax':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    kev.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '♡───────────♡\n'
					for (let i of data.result) {
						teks += `*➸ Gambar* : ${i.image}\n*➸ Title* : ${i.title}\n*➸ link* : ${i.link}\n*➸ tag* : ${i.tag}\n♡───────────♡\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
					case 'math':
					if (!isRegistered) return reply(ind.noregis())
					const nga =['*','/','-']
				    tau = nga[Math.floor(Math.random() * nga.length)]
				    if (args[0] == 'easy') {
					var pertnyan = Math.ceil(Math.random() * 10)
					var pertnyan1 = Math.ceil(Math.random() * 10)
					result = `${pertnyan} ${tau} ${pertnyan1}`;
					jsdh = `${pertnyan} ${tau} ${pertnyan1} = ? `
					kev.sendMessage(from, jsdh, result, text) 
					}
					if (args[0] == 'medium') {
					pertnyan = Math.ceil(Math.random() * 50)
					pertnyan1 = Math.ceil(Math.random() * 50)
					jsdh = `${pertnyan} ${tau} ${pertnyan1} = ? `
					kev.sendMessage(from, jsdh, text) 
					}
					break
					case 'calc':
					var hahj = body.slice(6)
				var hahk = hahj.split(" ")[0];
				var haho = hahj.split(" ")[1];
				var hahb = hahj.split(" ")[2];
					// program for a simple calculator

// take the operator input
const operator = '+, -, *, /'

// take the operand input
const number1 = haho
const number2 = hahb
const halahj = body.slice(8).replace(/1|2|3|4/g, "-")
// using if...else if... else
if (args[0] == '+') {
    result = number1 + number2;
}
else if (args[0] == '-') {
    result = number1 - number2;
}
else if (args[0] == '×') {
    result = number1 * number2;
}
else if (args[0] == '*') {
    result = number1 * number2;
}
else if (args[0] == '/') {
    result = number1 / number2;
}

// display the result
kev.sendMessage(from, `${number1} ${hahk} ${number2} = ${result}`, text)
break
					case 'slow':
					low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					slo = await kev.downloadAndSaveMediaMessage(low)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${slo} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(slo)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						kev.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'tupai':
					pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					tup = await kev.downloadAndSaveMediaMessage(pai)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${tup} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(tup)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						kev.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemuk':
					muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					gem = await kev.downloadAndSaveMediaMessage(muk)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(gem)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						kev.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'bass':
					ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					bas = await kev.downloadAndSaveMediaMessage(ass)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${bas} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(bas)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						kev.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					break
				case 'google':
                const googleQuery = body.slice(8)
               if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                if(googleQuery == undefined || googleQuery == ' ') return reply(`*Hasil Pencarian : ${googleQuery}* tidak ditemukan`)
                google({ 'query': googleQuery }).then(results => {
                let vars = `_*Hasil Pencarian : ${googleQuery}*_\n`
                for (let i = 0; i < results.length; i++) {
                    vars +=  `\n═════════════════\n\n*Judul* : ${results[i].title}\n\n*Deskripsi* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
                }
                    reply(vars)
                }).catch(e => {
                    console.log(e)
                    kev.sendMessage(from, 'Google Error : ' + e);
                })
                await limitAdd(sender) 
                break 
				case 'wiki':
    if (!isRegistered) return reply(ind.noregis)

if (args.length < 1) return reply('Masukan query')
tels = body.slice(6)
try {
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/wiki?q=${tels}`, {
  method: 'get'
})
reply(anu.result)

} catch {
  reply(ind.wait)
}
break
				case 'info':
					me = kev.user
					uptime = process.uptime()
					ifo = `*➸ Nama bot* : ${me.name}\n*➸ OWNER* : Kevin apta\n*➸ AUTHOR* : ${ownerName}\n*➸ Nomor Bot* : @${me.jid.split('@')[0]}\n*➸ Prefix* : ${prefix}\n*➸ Total Block Contact* : ${blocked.length}\n*➸ The bot is active on* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					kev.sendMessage(from, buffer, image, {caption: ifo, contextInfo:{mentionedJid: [me.jid]}})
					break
			case 'namae':
  if (args.length < 1) return reply('*☒* Masukan nama')
kev.updatePresence(from, Presence.composing)
if (!isRegistered) return reply(ind.noregis)

nama = body.slice(7) 
try {
data = await fetchJson(`https://api.terhambar.com/ninja?nama=${nama}`)
hasil = `*Nama ninja kamu*\n*${data.result.ninja}*`
reply(hasil)

} catch {
  reply(ind.ferr)
}
break
			case 'fakta':
fakta = body.slice(1)
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pushname))
const kta = fak[Math.floor(Math.random() * fak.length)]
kev.sendMessage(from, 'Fakta : '+ kta, text, {
  quoted: mek
})
break
            case 'bijak':
            case 'kata"mutiara':
            case 'mutiara':
bijak = body.slice(1)
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pushname))
const bja = bija[Math.floor(Math.random() * bija.length)]
kev.sendMessage(from, 'bijak : '+ bja, text, {
  quoted: mek
})
break
			case 'kbbi':
  kev.updatePresence(from, Presence.composing)
  if (args.length < 1) return reply(`*☒* Masukan teks\nContoh : ${prefix}kbbi manusia`)
  if (!isRegistered) return reply(ind.noregis())
  
  tels = body.slice(6)
  try {
  data = await fetchJson(`https://tobz-api.herokuapp.com/api/kbbi?kata=${tels}&apikey=${TobzKey}`)
  if (data.error) return reply(data.error)
  hasil = `KAMUS BESAR BAHASA INDONESIA\n\n${data.result}`
  reply(hasil)
  
  } catch {
    reply(ind.succes)
  }
  break
            case 'admin':
            case 'owner':
            case 'creator':
                  kev.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                  kev.sendMessage(from, 'Tuh Nomor Pacarku >_<, Ehh Ownerku mksdnya:v',MessageType.text, { quoted: mek} )
					break
case 'sandtext':
                    if (!isRegistered) return reply(ind.noregis())
					if (args.length < 1) return reply('Teksnya om')
					vh = body.slice(10)
					xh = await getBuffer(`https://api.zeks.xyz/api/sandw?apikey=LiaTPHt6xgGSng88ZxT0gpPXyvb&text=${vh}`) 
					kev.sendMessage(from, xh, image, {caption: 'Nih kak udah jadi..', quoted: mek})
					break
case 'sadtext':
                    if (!isRegistered) return reply(ind.noregis())
                    if (!isPrem) return reply(ind.premium())
					if (args.length < 1) return reply('Teksnya om')
					jh = body.slice(9)
					lh = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/wetglass?apikey=${Lol}&text=${jh}`) 
					kev.sendMessage(from, lh, image, {caption: 'Nih kak udah jadi..', quoted: mek})
					break
case 'cloudtext':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}cloudtext Kevin`)
cloud = body.slice(11)
reply('「❗」Bentar Bro Gw Terbang dumlu yakan')
buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/cloud?apikey=847de7716f17a51eeba4235c&text=${cloud}`)
kev.sendMessage(from, buffer, image, {quoted: mek})
break

/*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
]=====> OWNER MENU <=====[
*/
                case 'addprem':
					if (!isOwner) return reply(ind.ownerb())
					addp = body.slice(10)
					premium.push(`${addp}@s.whatsapp.net`)
					fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
					reply(`Berhasil Menambahkan ${addp} Ke Daftar Premium`)
					break
				case 'beban':
					if (!isRegistered) return reply(ind.noregis())
					membr = []
					const met = groupMembers
					const msd = groupMembers
					const siapsa = met[Math.floor(Math.random() * met.length)]
					const sipsd = pushname[Math.floor(Math.random() * msd.length)]
					bebn = `Yang paling Beban disini Adalah : @${siapsa.jid.split('@')[0]}`
					membr.push(siapsa.jid)
					mentions(bebn, membr, true)
					break
				case 'siapa':
					if (!isRegistered) return reply(ind.noregis())
					membr = []
					const mett = groupMembers
					const msdd = groupMembers
					const siapssa = mett[Math.floor(Math.random() * mett.length)]
					const sipssd = pushname[Math.floor(Math.random() * msdd.length)]
					bbebn = `${body.slice(7)} Adalah : @${siapssa.jid.split('@')[0]}`
					membr.push(siapssa.jid)
					mentions(bbebn, membr, true)
					break
				case 'report':
                if (!isRegistered) return reply(ind.noregis())
                     const pesan = body.slice(8)
                      if (pesan.length > 300) return kev.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const rprt = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`

                      var options = {
                         text: rprt,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    kev.sendMessage('6283141621181@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.')
                    break
                case 'chatorang':
                if (!isRegistered) return reply(ind.noregis())
                     var jesan = body.slice(11)
				     var pe = jesan.split("&")[0];
				     var san = jesan.split("&")[1];
                      if (jesan.length > 300) return kev.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const ske = `*[CHAT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pe}`

                      var options = {
                         text: ske,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    kev.sendMessage(`${san}@s.whatsapp.net`, options, text, {quoted: mek})
                    reply('udh w chat kak')
                    break
				case 'dellprem':
					if (!isOwner) return reply(ind.ownerb())
					oh = body.slice(11)
					delp = premium.indexOf(oh)
					premium.splice(delp, 1)
					fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
					reply(`Berhasil Menghapus ${oh} Dari Daftar Premium`)
					break					
				case 'bc':
					kev.updatePresence(from, Presence.composing) 
				     if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await kev.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await kev.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							kev.sendMessage(_.jid, buff, image, {caption: `*「 KEV BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 ${botName} broad cast 」*\n\n${body.slice(4)}`)
						}
						reply('*「 SUKSES BOSKU 」*')
					}
					break
				case 'bcgc':
				     if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('Teksnya mana bosku >_<')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await kev.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							kev.sendMessage(_.jid, buff, image, {caption: `*「 BC GROUP 」*\n\n➸ Dari Grup : ${groupName}\n➸ Pengirim : wa.me/${(sender.split('@')[0])}\n➸ Pesan : ${body.slice(6)}`})
						}
						reply('*「 SUKSES BOSKU 」*')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC GROUP 」*\n\n➸ Dari Grup : ${groupName}\n➸ Pengirim : wa.me/${(sender.split('@')[0])}\n➸ Pesan : ${body.slice(6)}`)
						}
						reply('*「 SUKSES BOSKU 」*')
					}
					break
					case 'setreply':
					if (!isOwner) return reply(ind.ownerb())
                    kev.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break
					case 'settobzkey':
					if (!isOwner) return reply(ind.ownerb())
                    kev.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					TobzKey = body.slice(12)
					reply(`reply berhasil di ubah menjadi : ${TobzKey}`)
					await limitAdd(sender)
					break
				case 'update':
				    if (!isRegistered) return reply(ind.noregis())
					kev.sendMessage(from, `*「 UPDATE 」* update tgl ➸ : ${update}\n *yang di update*➸ : ${updateh}`, text)
					break
				case 'error':
				case 'maintenace':
					let mtnce = `*「 UPDATE 」*\nEror Tgl : ${err}\n`
					for (let i of error) {
					mtnce += `${i.replace(error)}\n`
					}
					reply(mtnce)
				break
					break
				case 'addupdate':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					update = time
					updateh = body.slice(10)
					reply(`*「 SUKSES 」* update tgl ➸ : ${update}\n *yang di update*➸ : ${updateh}`)
					break
				case 'adderror':
					if (!isOwner) return reply(ind.ownerb())
					let aderror = body.slice(10)
					err = time
					error.push(aderror)
					fs.writeFileSync('./database/group/error.json', JSON.stringify(error))
					reply(`*「 SUKSES 」* error tgl ➸ : ${err}\n *yang error/maintenance*➸ : ${or}`)
					break
				case 'dellerror':
					if (!isOwner) return reply(ind.ownerb())
					let delerror = body.slice(11)
					err = time
					error.splice(delerror)
					fs.writeFileSync('./database/group/error.json', JSON.stringify(error))
					reply(`*「 SUKSES 」* error tgl ➸ : ${err}\n *yang error/maintenance*➸ : ${error}`)
					break
				case 'listonline':
				
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(kev.chats.get(ido).presences), kev.user.jid]
			    kev.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break
				case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await kev.chats.all()
					kev.setMaxListeners(25)
					for (let _ of anu) {
						kev.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
			       case 'block':
				 kev.updatePresence(from, Presence.composing) 
				 kev.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					kev.blockUser (`${body.slice(7)}@c.us`, "add")
					kev.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
                    case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    kev.blockUser (`${body.slice(9)}@c.us`, "remove")
					kev.sendMessage(from, `Perintah Diterima, membuka ${body.slice(9)}@c.us`, text)
					break   				
					case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
				    kev.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await kev.downloadAndSaveMediaMessage(enmedia)
					await kev.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya bosku😗')
					break
				case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg())
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await kev.getProfilePicture(id)
						buffer = await getBuffer(pp)
						kev.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					await limitAdd(sender)
					break
			                case 'ban':
					if (!isOwner) return reply(ind.ownerb())
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
					reply(`Nomor ${bnnd} telah dibanned!`)
					break
				case 'unban':
					if (!isOwner) return reply(ind.ownerb())
					ya = body.slice(8)
					unb = ban.indexOf(ya)
					ban.splice(unb, 1)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
					reply(`Nomor ${ya} telah di unban!`)
					break
case 'iri':
const irimp3 = fs.readFileSync('./assets/iri.mp3');
kev.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'pale':
const pa = fs.readFileSync('assets/pale.mp3')
kev.sendMessage(from, pa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'baka':
const baka = fs.readFileSync('./assets/baka.mp3');
kev.sendMessage(from, baka, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'arigatou':
const arg = fs.readFileSync('./assets/Arigatou.mp3');
kev.sendMessage(from, arg, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'ara"':
case 'araara':
const ara = fs.readFileSync('./assets/ara.opus');
kev.sendMessage(from, ara, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'tobecountuned':
case 'tbc':
const tbc = fs.readFileSync('./assets/tbc.mp3');
kev.sendMessage(from, tbc, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'yamete':
const ymt = fs.readFileSync('./assets/y2yamete.mp3');
kev.sendMessage(from, ymt, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'anone':
case 'anone"':
case 'anoneanone':
const ano = fs.readFileSync('./assets/anone.mp3');
kev.sendMessage(from, ano, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'onichan':
case 'onii':
case 'oniichan':
const oni = fs.readFileSync('./assets/oni.mp3');
kev.sendMessage(from, oni, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound':
const soun = fs.readFileSync('assets/sound.mp3')
kev.sendMessage(from, soun, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound1':
satu = fs.readFileSync('./assets/sound1.mp3');
kev.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./assets/sound2.mp3');
kev.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./assets/sound3.mp3');
kev.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./assets/sound4.mp3');
kev.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./assets/sound5.mp3');
kev.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./assets/sound6.mp3');
kev.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./assets/sound7.mp3');
kev.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break														
/*
]=====> TQTO <=====[
> KEVIN KUN
> RAMLAN ID
> REVOER ID
> ARIS ID
> NADIA CANS
> NAZWA
> VHTEAR
> TOBZ
> XTEAM
> MHANKBARBAR
> All Creator Bot WhatsApp
*/				
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
				//		reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

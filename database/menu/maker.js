const maker = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *MAKER MENU* ]----- 🔰
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan User, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Berikut adalah fitur yang ada pada bot ini!✨
Jika tidak paham ketik *${prefix}bingungcok*
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}liststik*
┃│➸ list stiker
┃│➸ *${prefix}getstik (nama stiker)*
┃│➸ menampilkan stiker
┃│➸ nama stiker ada di list stiker
┃│➸ *${prefix}passed*
┃│➸ mengedit foto 
┃│➸ *${prefix}harrytext*
┃│➸ membuat tulisan harry potter
┃│➸ *${prefix}reversevid*
┃│➸ membalikan video
┃│➸ *${prefix}reverse*
┃│➸ membalikan kata
┃│➸ *${prefix}ssweb (url)*
┃│➸ screenshot web
┃│➸ *${prefix}jumlahhuruf*
┃│➸ menghitung jumlah huruf
┃│➸ *${prefix}gtav*
┃│➸ mengedit foto
┃│➸ *${prefix}qr*
┃│➸ membuat kode qr
┃│➸ *${prefix}shorturl*
┃│➸ memperpendek url
┃│➸ *${prefix}silverplaybutton*
┃│➸ contoh : ${prefix}silverplaybutton kevin
┃│➸ *${prefix}barcode*
┃│➸ membuat barcode
┃│➸ *${prefix}wanted*
┃│➸ mengedit foto
┃│➸ *${prefix}wasted*
┃│➸ mengedit foto
┃│➸ *${prefix}triggered*
┃│➸ mengedit foto
┃│➸ *${prefix}drawing*
┃│➸ mengedit foto
┃│➸ *${prefix}chatprank*
┃│➸ contoh : ${prefix}chatprank p/punten
┃│➸ *${prefix}gemboktext*
┃│➸ membuat tulisan gembok
┃│➸ *${prefix}silktext*
┃│➸ membuat tulisan silk
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.maker = maker
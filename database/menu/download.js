const download = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *DOWNLOAD MENU* ]----- 🔰
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
┃│➸ *${prefix}igvideo*
┃│➸ download video ig menggunakan url ig
┃│➸ *${prefix}igimage*
┃│➸ diwnload gambar ig menggunakan url ig
┃│➸ *${prefix}play*
┃│➸ play lagu
┃│➸ *${prefix}ytmp3*
┃│➸ download lagu menggunakan url youtube
┃│➸ *${prefix}tomp3*
┃│➸ mengubah video ke lagu
┃│➸ *${prefix}slow*
┃│➸ slowmo lagu dengan cara reply lagu
┃│➸ *${prefix}gemuk*
┃│➸ suara cowo dengan cara reply lagu
┃│➸ *${prefix}bass*
┃│➸ ngebass suaar dengan cara reply lagu
┃│➸ *${prefix}tupai*
┃│➸ mengubah suara menjadi tupai dengan cara reply lagu
┃│➸ *${prefix}tiktok*
┃│➸ download video tiktok
┃│➸ *${prefix}ytsearch*
┃│➸ mencari video youtube
┃│➸ *${prefix}ytmp4*
┃│➸ download video youtube
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.download = download
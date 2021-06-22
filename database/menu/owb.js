const owb = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *OWNER MENU* ]----- 🔰
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
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}addupdate*
┃│➸ menambahkan list update
┃│➸ *${prefix}adderror*
┃│➸ menambahkan list error
┃│➸ *${prefix}addstik*
┃│➸ menambahkan stiker
┃│➸ *${prefix}addbad*
┃│➸ menambahkan toxic
┃│➸ *${prefix}dellbad*
┃│➸ menghapus toxic
┃│➸ *${prefix}addvn*
┃│➸ menambahkan voicenote
┃│➸ *${prefix}bc*
┃│➸ broadcast
┃│➸ *${prefix}bcgc*
┃│➸ broadcast grup
┃│➸ *${prefix}clearall*
┃│➸ menghapus semua chat bot
┃│➸ *${prefix}block*
┃│➸ memblok orang
┃│➸ *${prefix}unblock*
┃│➸ membuka blok orang
┃│➸ *${prefix}clone*
┃│➸ mengganti profile dengan profile orang
┃│➸ *${prefix}setppbot*
┃│➸ mengganti foto profile bot
┃│➸ *${prefix}setreply*
┃│➸ nga tau w
┃│➸ *${prefix}setprefix*
┃│➸ mengganti prefix bot
┃│➸ *${prefix}addprem*
┃│➸ menambahkan premium user
┃│➸ *${prefix}dellprem*
┃│➸ menghapus premium user
┃│➸ *${prefix}ban*
┃│➸ memban orang
┃│➸ *${prefix}eval*
┃│➸ *${prefix}eval2*
┃│➸ *${prefix}unban*
┃│➸ membuka ban orang
┃│➸ *${prefix}event* 「1/0」
┃│➸ mengaktifkan fitur mining
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.owb = owb
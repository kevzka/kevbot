const anime = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *ANIME MENU* ]----- 🔰
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
┃│➸ *${prefix}ppcouple*
┃│➸ random photo profile couple
┃│➸ *${prefix}waifu*
┃│➸ random waifu
┃│➸ *${prefix}loli*
┃│➸ random loli
┃│➸ *${prefix}husbu*
┃│➸ random husbu
┃│➸ *${prefix}namae*
┃│➸ contoh : !namae kevin
┃│➸ *${prefix}wait*
┃│➸ mencari nama anime dengan gambar
┃│➸ *${prefix}neonimesearch*
┃│➸ contoh : ${prefix}neonimesearch sword art online
┃│➸ *${prefix}bacakomik*
┃│➸ mencari komik anime
┃│➸ contoh : ${prefix}bacakomik darling in the franxx
┃│➸ *${prefix}neonimeongoing*
┃│➸ anime update hari ini
┃│➸ *${prefix}anoboyongoing*
┃│➸ anime update hari ini
┃│➸ *${prefix}anoboysearch*
┃│➸ contoh : ${prefix}anoboysearch tenki no ko
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.anime = anime
const groupm = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *GROUP MENU* ]----- 🔰
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
┃│➸ *${prefix}welcome* 「1/0」
┃│➸ fitur auto intro saat ada mem baru
┃│➸ *${prefix}leveling* 「1/0」
┃│➸ hmmm masa nga tau
┃│➸ *${prefix}simih* 「1/0」
┃│➸ mengaktifkan simi chat
┃│➸ *${prefix}antilinkgrup* 「1/0」
┃│➸ mengaktifkan antilink gc lain
┃│➸ *${prefix}antitoxic* 「1/0」
┃│➸ mengaktifkan anti toxic
┃│➸ *${prefix}grup* 「buka/tutup」
┃│➸ hmmm iq kamu tidak di bawah 10 kan
┃│➸ *${prefix}add*
┃│➸ menambahkan orang
┃│➸ *${prefix}kick*
┃│➸ mengkick member
┃│➸ *${prefix}delete*
┃│➸ menghapus chat bot
┃│➸ *${prefix}hedsot*
┃│➸ mengkick member
┃│➸ *${prefix}linkgrup*
┃│➸ menampilkan link gc
┃│➸ *${prefix}promote*
┃│➸ menjadikan admin
┃│➸ *${prefix}demote*
┃│➸ kebalikan nya promote
┃│➸ *${prefix}setname*
┃│➸ ganti nama gc
┃│➸ *${prefix}setdesc*
┃│➸ ganti deskripsi gc
┃│➸ *${prefix}leave*
┃│➸ bot keluar
┃│➸ *${prefix}tagall*
┃│➸ tag semua orng
┃│➸ *${prefix}admin*
┃│➸ list admin
┃│➸ *${prefix}level*
┃│➸ cek level
┃│➸ *${prefix}fitnah*
┃│➸ contoh : ${prefix}fitnah @kev& hai & halo
┃│➸ *${prefix}hidetag*
┃│➸ menyembunyikan tag
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.groupm = groupm
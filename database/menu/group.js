const groupm = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `ð° -----[ *GROUP MENU* ]----- ð°
Hallo, ${pushname} ð
Semoga harimu Menyenangkan User, ${sender.split("@")[0]}
ââââââââââââââââââââââ
ââ­âââââââââââââââââââ
âââ¸ NAMA : ${pushname}
âââ¸ LEVEL : ${getLevelingLevel(sender)}
âââ¸ USER ${botName} : ${_registered.length}
ââ°âââââââââââââââââââ
ââââââââââââââââââââââ
Berikut adalah fitur yang ada pada bot ini!â¨
Jika tidak paham ketik *${prefix}bingungcok*
ââââââââââââââââââââââ
ââ­âââââââââââââââââââ
âââ¸ *${prefix}welcome* ã1/0ã
âââ¸ fitur auto intro saat ada mem baru
âââ¸ *${prefix}leveling* ã1/0ã
âââ¸ hmmm masa nga tau
âââ¸ *${prefix}simih* ã1/0ã
âââ¸ mengaktifkan simi chat
âââ¸ *${prefix}antilinkgrup* ã1/0ã
âââ¸ mengaktifkan antilink gc lain
âââ¸ *${prefix}antitoxic* ã1/0ã
âââ¸ mengaktifkan anti toxic
âââ¸ *${prefix}grup* ãbuka/tutupã
âââ¸ hmmm iq kamu tidak di bawah 10 kan
âââ¸ *${prefix}add*
âââ¸ menambahkan orang
âââ¸ *${prefix}kick*
âââ¸ mengkick member
âââ¸ *${prefix}delete*
âââ¸ menghapus chat bot
âââ¸ *${prefix}hedsot*
âââ¸ mengkick member
âââ¸ *${prefix}linkgrup*
âââ¸ menampilkan link gc
âââ¸ *${prefix}promote*
âââ¸ menjadikan admin
âââ¸ *${prefix}demote*
âââ¸ kebalikan nya promote
âââ¸ *${prefix}setname*
âââ¸ ganti nama gc
âââ¸ *${prefix}setdesc*
âââ¸ ganti deskripsi gc
âââ¸ *${prefix}leave*
âââ¸ bot keluar
âââ¸ *${prefix}tagall*
âââ¸ tag semua orng
âââ¸ *${prefix}admin*
âââ¸ list admin
âââ¸ *${prefix}level*
âââ¸ cek level
âââ¸ *${prefix}fitnah*
âââ¸ contoh : ${prefix}fitnah @kev& hai & halo
âââ¸ *${prefix}hidetag*
âââ¸ menyembunyikan tag
ââ°âââââââââââââââââââ
ââââââââââââââââââââââ
ð° -----[ *POWERED BY ${ownerName}* ]----- ð°`
}
exports.groupm = groupm
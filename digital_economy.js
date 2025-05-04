const questions = [
    {
        question: "Platforma ta’rifi",
        options: ["U bilan ishlaydigan modullarning umumiy funktsiyalari va ular o'zaro ishlaydigan interfeyslarni ta'minlaydigan dasturiy ta'minotga asoslangan kengaytirilgan kod bazasi", "Platformaga funksionallik qo'shish uchun platformaga ulanadigan qo'shimcha dasturiy ta'minot quyi tizimi", "Platforma va unga mos modullar to'plami", "Platforma va modullarning o'zaro ta'sirini va ma'lumot almashishni tavsiflovchi spetsifikatsiyalar va dizayn qoidalari"],
        correct: 0
    },
    {
        question: "Raqamli platformalar dasturiy ta'minotga asoslangan tizimni kengaytiruvchi kod bazasi sifatida belgilanadi va…",
        options: ["Modullar va interfeyslar bilan birgalikda ishlaydigan asosiy funktsiyalarni ta'minlaydi", "Mustaqil ishlaydi", "Platforma tashkil qiladi", "Modullardan tashkil topgan"],
        correct: 0
    },
    {
        question: "Raqamli biznes – bu",
        options: ["Biznes jarayonlarini avtomatlashtirish maqsadida raqamli texnologiyalarga asoslangan tovarlar va xizmatlar", "Strategik ahamiyatga ega bo'lgan vazifa nafaqat davlatlarning ijtimoiy-iqtisodiy farovonligi sharoitida erishilgan yutuqlar, balki globallashuv fonida suverenitetni saqlash sharti va jahon bozorining boshqa ishtirokchilari tomonidan raqamli rivojlanish dasturlarini amalga oshirishdir", "Amalga oshirilgan ishlarni, biznes jarayonini raqamlashtirish", "Faqat raqamli transformatsiyani amalga oshiradi"],
        correct: 0
    },
    {
        question: "O‘zbekiston Respublikasining Yagona interaktiv davlat xizmatlari portalining manzili to‘g‘ri ko‘rsatilgan javob variantini toping.",
        options: ["www.my.gov.uz", "www.service.uz", "www.davlat.uz", "www.interaktiv.uz"],
        correct: 0
    },
    {
        question: "IoT - internet of things - internet buyumlarga quyidagilardan qaysi biri misol bo'ladi?",
        options: ["Supermarketdan buyurtma berish mumkin bo'lgan muzlatkich", "O'zi yurar mashina", "Quyosh panellari", "Blokcheyn texnologiyasi"],
        correct: 0
    },
    {
        question: "Mayning nima?",
        options: ["Kompyuter tizimlarining hisoblash quvvatlarini kriptovalyutaning tranzaktsiyalari zanjirini xosil qilish uchun ishlatilish jarayonidir", "Tarmoqni qurish uchun yetarli bo‘lgan standart protokollar to‘plami va dasturiy-apparat vositalaridir", "Kompyuterning boshqa kompyuterga xizmatlarni taqdim etish imkonini beruvchi apparat", "Dasturiy ta’minot"],
        correct: 0
    },
    {
        question: "Tarmoq texnologiyalariga to'g'ri ta'rifni belgilang",
        options: ["Tarmoqni qurish uchun yetarli bo‘lgan standart protokollar to‘plami va dasturiy-apparat vositalaridir", "Tarmoqni qurish uchun yetarli bo‘lgan dasturiy-apparat vositalaridir", "Boshqa kompyuterga xizmatlarni taqdim etish imkonini beruvchi apparat va dasturiy ta’minot", "Boshqa kompyuterga xizmatlarni taqdim etish imkonini beruvchi dasturiy ta’minot"],
        correct: 0
    },
    {
        question: "Server nima",
        options: ["Kompyuterning boshqa kompyuterga xizmatlarni taqdim etish imkonini beruvchi apparat va dasturiy ta’minot", "Kompyuter tizimlarining hisoblash quvvatlarini kriptovalyutaning tranzaktsiyalari zanjirini xosil qilish uchun ishlatilish jarayonidir", "Tarmoqni qurish uchun yetarli bo‘lgan standart protokollar to‘plami va dasturiy-apparat vositalaridir", "Tarmoqni qurish uchun yetarli bo‘lgan dasturiy-apparat vositalaridir"],
        correct: 0
    },
    {
        question: "Mayner kim?",
        options: ["Kriptovalyuta bilan tranzaksiyalar amalga oshiruvchi shaxs", "Android uchun ilova yasovchi", "Veb saytlar dasturchisi", "Kriptovalyuta yaratuvchisi"],
        correct: 0
    },
    {
        question: "Raqamli iqtisodiyot fan sifatida –",
        options: ["Jamiyat ne'matlarini ishlab chiqarish, taqsimlash va iste'mol qilish jarayonlarida elektron hamda axborot-kommunikatsion texnologiyalarini keng joriy etishni ko‘zda tutadigan insonning xo‘jalik faoliyatini tadqiq etuvchi fan", "Bu rivojlanishning zamonaviy bosqichini tadqiq etuvchi fan", "Ijodiy mehnat va axborot ne'matlarining ustuvor yo‘nalishlarini tadqiq etuvchi fan", "Jamiyatga elektron hamda axborot-kommunikatsion texnologiyalarini keng joriy etishni ko‘zda tutadigan insonning xo‘jalik faoliyatini tadqiq etuvchi fan"],
        correct: 0
    },
    {
        question: "Eko tizim deganda nimani tushunasiz?",
        options: ["O'zaro bog'liq tashkilotlar va shaxslardan iborat iqtisodiy hamjamiyat", "Raqamli iqtisodiyotni rivojlantirish chora-tadbirlari", "Raqamli iqtisodiyotning normativ-huquqiy asoslari", "Raqamli iqtisodiyotni rivojlantirish infrastrukturasi"],
        correct: 0
    },
    {
        question: "O‘zbekiston Respublikasi Prezidentining “O‘zbekistonda raqamli iqtisodyotni rivojlantirish chora-tadbirlari to‘g‘risida”gi farmoni qachon qabul qilingan?",
        options: ["3.07.2018", "21.04.2017", "5.01.2019", "22.09.2019"],
        correct: 0
    },
    {
        question: "O'zbekiston Respublikasida raqamli iqtisodiyotni rivojlantirish chora-tadbirlari to'g'risida gi prezident farmoniga muvofiq, raqamli iqtisodiyotni joriy etish va rivojlantirish sohasidagi vakolatli organ kim?",
        options: ["Loyihalarni boshqarish milliy agentligi", "Axborot texnologiyalari va kommunikasiyalarini rivojlantirish vazirligi", "«Buyuk Kelajak» ekspertlar kengashi", "Axborot va ommaviy kommunikatsiyalar agentligi"],
        correct: 1
    },
    {
        question: "Kripto aktivlarining eng batafsil ta'rifini toping?",
        options: ["Raqamli iqtisodiyotning raqamli hosilasi, moliyaviy resurslarni jalb qilish maqsadida kompaniya yoki shaxslar guruhi tomonidan chiqarilgan cryptocurrency xususiyatlarini boshqaruvchi elektron biznes asoslari", "Ichki bozorda yoki xalqaro bozorda tovarlarni almashtirishda pul funktsiyasini bajarishga qodir bo'lgan tovarlar", "Markazlashtirilmagan raqamli aktiv", "Blockchain-da bitimlar bloklari zanjirining o'zgarmasligini kafolatlash uchun foydalanish tizimi"],
        correct: 2
    },
    {
        question: "2019 yildagi eng qimmat kriptovalyuta qaysi?",
        options: ["Bitcoin", "ThoreCoin", "Ethereum", "Litecoin"],
        correct: 0
    },
    {
        question: "Blockchain texnologiyasi bu",
        options: ["Bu ma'lumot yozilgan bloklarning virtual zanjiri", "Bu mayning kriptovalyutasini yaratishning asosiy texnologiyasi", "Bitcoin va elektron pullarning ikkinchi nomi", "Kriptovalyutalarning ikkinchi nomi"],
        correct: 0
    },
    {
        question: "To'rtinchi inqilobining bir qismi deb hisoblanadigan texnologiyani tanlang.",
        options: ["Nanotexnologiyalar", "Ishlab chiqarishga robotlarni kirib kelishi", "Avtomatlashgan sanoat", "Ishlab chiqarishni mexanizatsiyalash"],
        correct: 0
    },
    {
        question: "Raqamli tranzaksiya bu –",
        options: ["Raqamli iqtisodiyotni yaratishga yoki tashkil etishga chiqarishga yo'naltirilgan harakatlar yoki harakatlar ketma-ketligi: elektron biznesni boshqarish asoslari, raqamli moliyaviy aktivlarning muomalasi", "Siyosiy va huquqiy shartlar asosida o’zaro kelishuv", "Muayyan emitentga ega bo'lmagan moliyaviy aktivlarni mavjudligining turli bosqichlarida paydo bo'lishi", "Bozor hajmining tubdan o'sishiga va kompaniyalarning raqobatdoshligiga olib keladigan raqamli platformalardan foydalanishga asoslangan biznes modellarining o'zgarishi"],
        correct: 0
    },
    {
        question: "Raqamli transformatsiya bu",
        options: ["Bozor hajmining tubdan o'sishiga va kompaniyalarning raqobatdoshligiga olib keladigan raqamli platformalardan foydalanishga asoslangan biznes modellarining o'zgarishi", "Raqamli iqtisodiyotni yaratishga yoki tashkil etishga yo'naltirilgan harakatlar yoki harakatlar ketma-ketligi", "Siyosiy va huquqiy asosda o’zaro kelishuv", "Muayyan emitentga ega bo'lmagan moliyaviy aktivlarni mavjudligining turli bosqichlarida paydo bo'lishi"],
        correct: 0
    },
    {
        question: "NASDAQ bu nima?",
        options: ["AQShdagi eng yirik elektron fond birjasi", "Yuqori texnologiyali kompaniyalar aktsiyalarini sotish uchun elektron sayt", "Xususiy kompaniya", "Ishlab chiqaruvchi korxona"],
        correct: 0
    },
    {
        question: "Raqamli imzo nima?",
        options: ["Muallifni identifikatsiya qiluvchi va qo'lda yozilgan imzoning elektron ekvivalenti bo'lgan kod", "Shaxslarni ajratib turadigan ma'lum raqamlardagi imzo", "Maxsus dasturlar yordamida raqamlar formatiga o’tkazilgan imzo", "Shaxsga tegishli bo’gan imzoni tasdiqlovchi elektron imzo shakli"],
        correct: 0
    },
    {
        question: "Quyidagi xususiyatlardan qaysi biri Blockchain texnologiyasining afzalliklariga taalluqli emas?",
        options: ["Kiber hujum", "Tekshirish qulayligi", "Ishonch", "Yutuq"],
        correct: 0
    },
    {
        question: "Qaysi kompaniya internetda kitob mahsulotlarini sotish bo'yicha tajriba do'koni sifatida birinchi bo'lib tashkil topgan?",
        options: ["“Amazon.com”", "“eBay.com”", "“AliExpress.com”", "“Walmart.com”"],
        correct: 0
    },
    {
        question: "Blockchain-ga asoslangan iste'molchilar o'rtasidagi markazlashtirilmagan munosabatlardan iborat sektor?",
        options: ["B2C", "G2B", "B2G", "E2E"],
        correct: 3
    },
    {
        question: "Raqamli iqtisodiyotning qaysi ko'rsatkichi Yevropada raqamlashtirish ko'rsatkichlarini umumlashtiradi va Yevropa Ittifoqiga a'zo davlatlarning raqamli raqobatbardoshlik sohasidagi evolyutsiyasini kuzatadi?",
        options: ["Raqamli iqtisodiyot va jamiyat indeksi", "Tarmoq jamiyatiga tayyorlik indeksi", "Raqamli iqtisodiyotni rivojlantirish indeksi", "IMD reytingi"],
        correct: 0
    },
    {
        question: "Qaysi davlatlar raqamli iqtisodiyot sohasida yetakchilik qiladi?",
        options: ["Daniya, Shvetsiya, Janubiy Koreya", "Daniya, Eron, Rossiya", "Amerika, Xitoy, Braziliya", "Afg'oniston, Hindiston, Malayziya"],
        correct: 0
    },
    {
        question: "Qaysi ko’rsatkich internetga keng polosali ulanishni joriy etish va uning sifatini aniqlaydi?",
        options: ["Internet tarmog'ining mavjudligi", "Raqamli ko’nikmalar", "Internet xizmatidan fuqarolarning foydalanish darajasi", "Ishlab chiqarishda raqamli texnologiyalarning integratsiyalashuvi darajasi"],
        correct: 0
    },
    {
        question: "Raqamli iqtisodiyotning hozirgi bosqichida salohiyatni oshirish uchun zarur bo'lgan ko'nikma qaysi ko'rsatkich bilan o'lchanadi?",
        options: ["Raqamli ko’nikmalar", "Internet tarmog'ining mavjudligi", "Internet xizmatidan fuqarolarning foydalanish darajasi", "Ishlab chiqarishda raqamli texnologiyalarning integratsiyalashuvi darajasi"],
        correct: 0
    },
    {
        question: "Ikki yoki undan ortiq o'zaro bog'liq bo'lgan ishtirokchilar guruhlari o'rtasida almashinuvni osonlashtirish orqali qiymat yaratadigan yuqori texnologiya nima deb nomlanadi?",
        options: ["Raqamli platforma", "Raqamli ko’nikmalar", "Raqamli ekotizm", "Raqamli iqtisodiyot"],
        correct: 0
    },
    {
        question: "Platformalar ……… o‘zaro aloqa qilish imkoniyatiga ega bo‘lgan ishlab chiqaruvchilar va foydalanuvchilarni o‘zaro birlashtiradi.",
        options: ["Vositachilarsiz", "Vositachilar bilan", "Vositachilar orqali", "Hamkorlarsiz"],
        correct: 0
    },
    {
        question: "AKT sohasidagi tendentsiyalar tahlili, tadqiqotlar va ishlanmalar qaysi ko'rsatkich yordamida aniqlanadi?",
        options: ["AKT va qidiruv tizimining rivojlanishi darajasi", "Raqamli davlat xizmatlari", "Internet xizmatidan fuqarolarning foydalanish darajasi", "Internet xizmatidan yuridik shaxslarning foydalanish darajasi"],
        correct: 0
    },
    {
        question: "Prognoz qilinadigan voqea, inson ehtiyojlarini, shu jumladan hayot, mehnat va bo'sh vaqtni ishlab chiqarish va xizmat ko'rsatishda axborot texnologiyalari tushunchalarini ommaviy ravishda kiritish bu ...",
        options: ["To'rtinchi sanoat inqilobi (Industry4.0)", "Uchinchi sanoat inqilobi (Industry3.0)", "Raqamli ishonch (Digital Trust)", "CRM (Customer Relationship Management) tizimi"],
        correct: 0
    },
    {
        question: "Kompyuterlashtirish bu ...",
        options: ["Barcha ishlab chiqarish qismlarini raqamli nazorat qilish va boshqarish", "Ishlab chiqarish jarayonini avtomatlashtirish", "Ishlab chiqarishni robotlashtirish va ularni boshqarish", "Korxonalarni zamonaviy kompyuterlar bilan ta'minlash"],
        correct: 0
    },
    {
        question: "Raqamlashtirish bu ...",
        options: ["Bu korxonani hozirgi holatidan 'moslushuvchan' holatga o'tkazish jarayoni", "Boshqarishning barcha darajalarida birgalikda faoliyat yuritishini erkinlashuvi", "Avtomatlashtirish", "Ishlab chiqarishni robotlashtirish va ularni boshqarish"],
        correct: 0
    },
    {
        question: "Intellektual mashinalarning komponenti –",
        options: ["Bu turli xil sensorlar, mikroprosessorlar, algoritmlar va dasturlar, foydalanuvchi interfeysi va boshqalar", "Dasturiy ta'minot", "Inson ishni soddalashtiradigan uskunalar", "O'rnatilgan algoritmlarga ega mashina"],
        correct: 0
    },
    {
        question: "Raqamli ulanish –",
        options: ["Tizim tarkibiy qismlarining ulanishi, kompyuterlarni va boshqa raqamli qurilmalarni ulash imkoniyati", "Ob'ektlar, jarayonlar va insonlarning o'zaro bog'liqligi", "Tarmoqdagi o'zaro aloqalar", "Blockchain tarmoqlariga ulanish"],
        correct: 0
    },
    {
        question: "Biznesda raqamli texnologiyalarning rivojlanishi",
        options: ["Menejment tizimiga, kompaniyaning biznes modellari va strategiyalariga ijobiy ta'sir ko'rsatadi barcha ishlab chiqarish boshqaruvini o'zgartiradi", "Korxonaning tashqi ko'rinishini o'zgartirishi", "Boshqaruv jarayonini avtomatlashtirish", "Barcha jarayonlarni soddalashtirish"],
        correct: 0
    },
    {
        question: "Inson real borliqda harakat qilayotgani illyuziyasini kompyuterda yaratish imkonini beruvchi interfaol texnologiya real dunyoga virtual dunyo ob’ektlarini qo‘shish imkonini beruvchi texnologiyalar.",
        options: ["VR/AR", "ARM", "BRM", "CRM"],
        correct: 0
    },
    {
        question: "Ko'p foydalanuvchilarga xizmat ko'rsatish uchun asos, masofadan kirish uchun kompyuter texnologiyalari tizimining kerakli konfiguratsiyasini buyurtma qilish imkoniyati",
        options: ["Virtuallashtirish", "Raqamlashtirish", "Verifikatsiya", "Elusifikatsiya"],
        correct: 0
    },
    {
        question: "Mijozlar foydalanishi uchun taqdim etilgan tarmoq serverlarida ko'p taqsimlangan ma'lumotlarda saqlanadigan onlayn-ma'lumotlar ombori",
        options: ["Bulutli texnologiyalar", "Blokchain", "Bepul severlar", "Hamma javoblar to’g’ri"],
        correct: 0
    },
    {
        question: "Innovatsion g‘oyalar mualliflariga kelajakdagi mahsulot yoki xizmatlarni amalga oshirish uchun mablag‘ yig‘ish imkonini beruvchi platforma.",
        options: ["Kickstarter", "Google", "Amazon", "Zoom"],
        correct: 0
    },
    {
        question: "RAEK tahlilchilari Raqamli Iqtisodiyot ekotizimini qanday hublarga ajratdilar?",
        options: ["Marketing va reklama; Moliya va savdo; Infratuzilma va aloqa; Media va ko'ngil ochish; kiberxavfsizlik; ta'lim; startaplar", "Moliya va savdo; Media va ko'ngil ochish; Aqlli tizimlar; ta'lim; startaplar", "Moliya va savdo; Infratuzilma va aloqa; Media va ko'ngil ochish; Kiberxavfsizlik", "Moliya va savdo; Infratuzilma va aloqa"],
        correct: 0
    },
    {
        question: "“Kraudsorsing” biznes modeliga misol keltiring.",
        options: ["YouTube, video-xostingi, Vikipediya, ijtimoiy tarmoqlar", "Google apps, video-xosting, Vikipediya, ijtimoiy tarmoqlar", "YouTube, Kickstarter, Vikipediya, ijtimoiy tarmoqlar", "YouTube, video-xosting"],
        correct: 0
    },
    {
        question: "III sanoat inqilobi bosqichi qaysi davrni o`z ichiga oladi?",
        options: ["1970-2010", "1950-1970", "2010-2020", "1970-2030"],
        correct: 0
    },
    {
        question: "“Bir jinsli kompaniyalar” –",
        options: ["Qiymati 1 milliard dollardan oshadigan nodavlat texnologiya kompaniyalari", "Innovatsion kompaniyalar", "Innovatsion markazlar", "Kiberkompaniyalar"],
        correct: 0
    },
    {
        question: "Internet buyumlar…",
        options: ["Internetga ulangan aloqa qiluvchi qurilmalar", "Mijozlarning qiziqishiga ko’ra dasturiy ta’minotli qurilmalar", "Bozordagi sotiluvchi texnologiyalar", "Barcha imkoniyatlaridan foydalanish"],
        correct: 0
    },
    {
        question: "Sun'iy intellekt nima?",
        options: ["Insonning aqliy funktsiyalarini taqlid qiladigan (o'z-o'zidan o'rganish va oldindan aniqlangan algoritmisiz echimlarni izlashni o'z ichiga olgan) va hech bo'lmaganda intellektual inson faoliyati natijalari bilan taqqoslanadigan natijalarga erishishga imkon beradigan texnologik yechimlar to'plami", "Miya ishini, aqliy jarayonlar, yuqori asabiy faoliyatni tushunishga yordam beradigan shu jumladan, miya funktsiyasi va aqliy faoliyatini mustahkamlash, yaxshilash texnologiyalari", "Tilni tushunishga va mazmunli matnni yaratishga, shuningdek, kompyuter va insonning o'zaro ta'sirida tabiiy tilda so'zlashishga qaratilgan qarorlar sinfi", "Nutq so'rovini matn shakliga tarjima qilishga imkon beradigan echimlar sinfi"],
        correct: 0
    },
    {
        question: "Neyrotexnologiya bu ...",
        options: ["Miyaning faoliyatini, tafakkur jarayonlarini, yuqori asabiy faoliyatni, shu jumladan miya faoliyatini va aqliy faoliyatini mustahkamlash, takomillashtirish uchun ishlatiladigan yoki yordam beradigan texnologiyalar", "Insonning funksiyalarini taqlid qiladigan (o'z-o'zidan o'rganish va oldindan aniqlangan algoritmisiz echimlarni izlashni o'z ichiga olgan) va hech bo'lmaganda intellektual inson faoliyati natijalari bilan taqqoslanadigan natijalarga erishishga imkon beradigan texnologik yechimlar to'plami", "Tilni tushunishga va mazmunli matnni yaratishga, shuningdek, kompyuter va insonning o'zaro ta'sirida tabiiy tilda so'zlashishga qaratilgan qarorlar sinfi", "Nutq so'rovini matn shakliga tarjima qilishga imkon beradigan echimlar sinfi, jumladan ovozning tembri va ohangini tahlil qilish, hissiyotlarni aniqlash, shuningdek nutq sintezi"],
        correct: 0
    },
    {
        question: "Sun'iy intellekt sog'liqni saqlash sohasini rivojlanishiga qanday ta'sir qilishi mumkin?",
        options: ["Tibbiy xizmatlarning sifati va tashxisning aniqligi yaxshilanadi", "Sohada yangi ish o‘rinlari tashkil etiladi", "Davolash usullari aniqlanmagan kasalliklarni davolash yo’llari topiladi", "Soha sarf-xarajatini kamaytiradi"],
        correct: 0
    },
    {
        question: "Ekspert tizimi – bu",
        options: ["Ayrim mavzu sohalarida ma'lumotlarni qo’llash uyushtirish usullari hamda vositalari majmuidir", "Ayrim mavzu sohalarida bilimlarni to’plash va qo’llash, uyushtirish usullari hamda vositalari majmuidir", "Ayrim bilimlarni to’plash va qo’llash manbaidir", "Ayrim mavzu sohalarida axborot to’plash va qo’llash, uyushtirish usullari hamda vositalari majmuidir"],
        correct: 1
    },
    {
        question: "Neurointerfeys, neyrostimulyatsiya va neyrosensing … ni o’zida aks ettiradi",
        options: ["Insonning miya faoliyatini kuzatish va ta'sir qilish imkonini beradigan yechimlar yaratish", "Insonning funksiyalarini taqlid qiladigan (o'z-o'zidan o'rganish va oldindan aniqlangan algoritmisiz echimlarni izlashni o'z ichiga olgan) va hech bo'lmaganda intellektual inson faoliyati natijalari bilan taqqoslanadigan natijalarga erishish", "Tilni tushunishga va mazmunli matnni yaratishga, shuningdek, kompyuter va insonning o'zaro ta'sirida tabiiy tilda so'zlashishga qaratilgan qarorlar sinfi", "Nutq so'rovini matn shakliga tarjima qilishga imkon beradigan echimlar sinfi, jumladan ovozning tembri va ohangini tahlil qilish"],
        correct: 0
    },
    {
        question: "Sun'iy intellekt bu-?",
        options: ["Aqliy hatti–harakatlarga nisbatan kompyuter tizimining qobiliyati tushuniladi", "Inson fikrlashi va tafakkuriga bog’liq qobiliyat", "Qarorni tahlil etib qabul qiladigan dastur", "Tahliliy-tasnifiy vazifalarni bajara oladigan ma'lumotlar va bilimlar bazasiga ega"],
        correct: 0
    },
    {
        question: "Suniy neyron tarmog’i –",
        options: ["Bu biologik neyron tarmoqlarining ishlashini tashkil etish printsipiga asoslangan matematik model, shuningdek uning dasturiy yoki apparat ta'minoti", "Biznesni boshqarish", "Moliyani boshqarish", "Ta’limni boshqarish"],
        correct: 0
    },
    {
        question: "Chat bot bu ...",
        options: ["Suhbatlashish dasturi va insonlarning o’zaro aloqaga kirishishida yordam berish uchun mo'ljallangan", "Sms xabar orqali yuklarni tashish uchun mo'ljallangan", "Elektron muammolarni hal qilish uchun mo'ljallangan", "Robotning alternativ shakli"],
        correct: 0
    },
    {
        question: "Bilimlar bazasi - bu ayrim predmet sohalari murakkab vazifalar yechimini topish uchun",
        options: ["Tahlil va xulosalarni yuzaga keltiruvchi model, qoida, omillar (ma'lumotlar) majmuidir", "Tahlil va xulosalarni yuzaga keltiruvchi formula, tartib va nizomlar majmuidir", "Tahlil va natijalarni yuzaga keltiruvchi tenglama, qoidadir", "Ma'lumotlar bazalari majmuidir"],
        correct: 0
    },
    {
        question: "Tranzaksiyalar tarixi o’zgarmas bo’lgan ma’lumotlar bazasi",
        options: ["Blokcheyn", "Big data", "VR", "Adobe"],
        correct: 0
    },
    {
        question: "Alibaba elektron savdo tizimi qaysi davlatda yaratilgan",
        options: ["Xitoy", "Germaniya", "AQSh", "Yaponiya"],
        correct: 0
    },
    {
        question: "Raqamli iqtisodiyotning rivojlanishi quyidagi qaysi ko’rsatkichlar bo’yicha baholanadi?",
        options: ["YIM ga nisbatan raqamli iqtisodiyotning ulushi", "AKT sohasiga kiritilgan investitsiyalar", "Internet tezligi, mobil aloqa sifati", "Domenlar soni, sanoat korxonalari soni"],
        correct: 0
    },
    {
        question: "Normativ-huquqiy hujjatlar loyihasini ishlab chiqish va kelishishning yagona platformasi qaysi",
        options: ["project.gov.uz", "my.gov.uz", "lex.uz", "Mehnat.uz"],
        correct: 0
    },
    {
        question: "Tadbirkorlar murojaatlarini ko’rib chiqish uchun Bosh vazirning virtual qabulxonasi qaysi?",
        options: ["business.gov.uz", "birdarcha.uz", "Tadbirkor.uz", "Business.uz"],
        correct: 0
    },
    {
        question: "Raqamli iqtisodiyotni rivojlantirishning asosiy poydevori",
        options: ["Raqamli infratuzilmani rivojlantirish", "Shaxsga doir ma’lumotlar tizimini yaratish", "Elektron hujjat aylanishini yo’lga qo’yish", "Raqamli iqtisodiyotning moliyaviy manbasini aniqlash"],
        correct: 0
    },
    {
        question: "4-sanoat inqilobining asosiy xususiyati nimada?",
        options: ["Ishlab chiqarishda inson aralashuvining kamayishida", "Ishlab chiqarishda raqobatning kamayishida", "Ishlab chiqarishda xomashyoning kamayishida", "Ishlab chiqarishda malakali kadrlarning kamayishida"],
        correct: 0
    },
    {
        question: "Googlening asosiy daromad manbai",
        options: ["Google Ads", "Google Drive", "Google Play", "Gmail"],
        correct: 0
    },
    {
        question: "Facebook platformasida reklama berishning asosiy maqsadlari nechta?",
        options: ["3 ta", "6 ta", "4 ta", "2 ta"],
        correct: 0
    },
    {
        question: "O‘zbekiston Respublikasi Prezidentining matbuot xizmati rasmiy vebsayti qaysi",
        options: ["Press-service.uz", "Edu.uz", "gov.uz", "facebook.com/presidentuz"],
        correct: 0
    },
    {
        question: "Freelanserlik uchun mo’ljallangan saytlarni belgilang",
        options: ["upwork.com, fiverr.com", "codecademy.com, toptal.com", "ishbor.uz, airbnb.com", "fiverr.com, google.com"],
        correct: 0
    },
    {
        question: "Kriptovalyuta nima?",
        options: ["Virtual pul bo'lib, biz amalda foydalanayotgan pullardan farqli o'laroq, jismoniy ifodaga ega emas", "Elektron hamyondagi pul mablag‘lari", "WEBMoney va boshqalar", "Bank hisob raqamidagi pul"],
        correct: 0
    },
    {
        question: "Kripto aktivlarining eng batafsil ta'rifini toping?",
        options: ["Raqamli iqtisodiyotning raqamli hosilasi: moliyaviy resurslarni jalb qilish maqsadida kompaniya yoki shaxslar guruhi tomonidan chiqarilgan cryptocurrency xususiyatlarini boshqaruvchi elektron biznes asoslari", "Ichki bozorda yoki xalqaro bozorda tovarlarni almashtirishda pul funktsiyasini bajarishga qodir bo'lgan tovarlar", "Markazlashtirilmagan raqamli aktiv", "Blockchain-da bitimlar bloklari zanjirining o'zgarmasligini kafolatlash uchun kriptografiyadan foydalanish tizimi"],
        correct: 2
    },
    {
        question: "Sun’iy intellektdan foydalanuvchi yangi kriptovalyuta kim tomonidan ishlab chiqildi",
        options: ["Vashingtondagi Djorjstoun universitetidagi bir guruh mutaxassislar", "Shvetsiya olimlari", "Venesuela olimlari", "Rossiya olimlari"],
        correct: 0
    },
    {
        question: "e-krona raqamli valyuta loyihasini kim tomonidan ishlab chiqildi?",
        options: ["Shvetsiya olimlari", "Venesuela olimlari", "Rossiya olimlari", "AQSh olimlari"],
        correct: 0
    },
    {
        question: "Data science (ma'lumotlar haqidagi fan)",
        options: ["Analiz muammolarini, ma'lumotlarni qayta ishlash va ularni raqamli ko'rinishda taqdim etishni o'rganadigan fan", "Katta ma’lumotlarni analiz qilishni o'rganadigan fan", "Ma'lumotlarni qayta ishlashni o'rganadigan fan", "Ma'lumotlarni raqamli ko'rinishda taqdim etishni o'rganadigan fan"],
        correct: 0
    },
    {
        question: "Satoshi Nakamoto va guruhi tomonidan nima yaratildi?",
        options: ["Bitcoin", "ThoreCoin", "Litecoin", "Blokcheyn"],
        correct: 0
    },
    {
        question: "2022 yildagi eng qimmat kriptovalyuta qaysi?",
        options: ["Ethereum", "Bitcoin", "ThoreCoin", "Litecoin"],
        correct: 1
    },
    {
        question: "Raqamli iqtisodiyotning asosiy texnologiyalari:",
        options: ["AI, robototexnika, dronlar, 3D printerlar, kengaytirilgan va virtual reallik, blokcheyn, bulutli hisoblash", "Elektron savdo, blockchain va bulutli hisoblash", "Kenglik, robototexnika, dronlar, bulutli hisoblash", "Robototexnika, dronlar"],
        correct: 0
    },
    {
        question: "Bulutli hisoblash kontseptsiyasi birinchi marta kim tomonidan bildirilgan?",
        options: ["1970 yilda Licklider", "1995 yilda Licklider", "2000 yilda Bill Geyts", "2010 yilda Bill Geyts"],
        correct: 0
    },
    {
        question: "Instrumental raqamli platformalar",
        options: ["Dasturiy yoki apparat-dasturiy komplekslarga (mahsulotlarga asoslangan)", "Axborotlashtirish bozori ishtirokchilarining ekotizimlari bilan bog'liq bo'lgan", "Bozorning ko'plab mustaqil ishtirokchilari o'rtasida qiymatlar bilan bog'liq bo'lgan", "Algoritmik almashish imkoniyatini beradigan biznes modellar"],
        correct: 0
    },
    {
        question: "Amaliy raqamli platformalar",
        options: ["Bozorning ko'plab mustaqil ishtirokchilari o'rtasida qiymatlarni algoritmik almashish imkoniyatini beradigan biznes modellar", "Axborotlashtirish bozori ishtirokchilarining ekotizimlari bilan bog'liq bo'lgan", "Dasturiy-apparat vositalarini tuzatish funktsiyalarini o'z ichiga oladi", "Dasturiy yoki apparat-dasturiy komplekslarga (mahsulotlarga asoslangan)"],
        correct: 0
    },
    {
        question: "Instrumental raqamli platformalarga misollar keltiring",
        options: ["Java, SAP HANA, Android OS, iOS, Intel x86, Bitrix, Amazon Web Services, Microsoft Azure", "TensorFlow, Cloud Foundry, Electric Predix, ESRI ArcGIS, ESIA, CoBrain-Analytica, ERA-GLONASS AirBnB, Aliexpress, Booking.com, Avito", "Boeing etkazib beruvchilar portali, Apple AppStore, AviaSales, Facebook, Alibaba, Yandex Taxi, Yandex Search, Predix Developer Network Appstore", "Barcha javoblar to’g’ri"],
        correct: 0
    },
    {
        question: "Instrumental raqamli platformalar",
        options: ["Dasturiy ta'minot va dasturiy-apparat echimlarini ishlab chiqish xarajatlarini kamaytiradi, infratuzilma va amaliy raqamli platformalar har bir qo'shimcha kirish, nusxa ko'chirish va tarqatish, tovarlar yoki xizmatlar uchun xarajatlarni kamaytiradi", "Axborot etkazib beruvchilar, ishlab chiquvchilar va platforma operatorlari", "AT-xizmatlarini ishlab chiquvchilar va iste'molchilarni birlashtiradi va tadbirkorlik sub'ektlari darajasida qarorlar qabul qilish uchun ma'lumot ishlab chiqarish uchun ishlatiladi", "Bozorning ko'plab mustaqil ishtirokchilari o'rtasida qiymatlarni algoritmik almashish imkoniyatini beradigan biznes modellar"],
        correct: 0
    },
    {
        question: "Platforma xizmatining 4 turi",
        options: ["Muloqot, axborot qidiruv, ko’ngil ochar, tijorat", "Axborot etkazib berish, ishlab chiqarish, ma`lumot yaratish, tijorat", "Bozorning ko'plab mustaqil ishtirokchilari o'rtasida qiymatlarni algoritmik almashish imkoniyatini beradigan biznes modellar", "To’g’ri javob yo`q"],
        correct: 0
    },
    {
        question: "Raqamli yozuv – bu",
        options: ["Raqamli bitimlar reestrida qayd etilgan raqamli moliyaviy aktivlar haqidagi ma'lumotlar", "Muloqot, axborot qidiruv, ko’ngil ochar, tijorat haqida ma’lumotlar", "Axborot etkazib beruvchilar", "Ishlab chiquvchilar va platforma operatorlari"],
        correct: 0
    },
    {
        question: "Raqamli infratuzilma –",
        options: ["Korxonalar, fuqarolar va hukumatni bog'laydigan aloqa tarmoqlari, raqamli infratuzilma ob'ektlari, IP-telefoniya, radio", "Raqamli bitimlar reestrida qayd etilgan raqamli moliyaviy aktivlar haqidagi ma'lumotlar", "Muloqot, axborot qidiruv, dasturiy ta’minot", "Axborot etkazib beruvchilar"],
        correct: 0
    },
    {
        question: "Raqamli sektor – bu...",
        options: ["Biznes modeli raqamli mahsulotlar yoki xizmatlarga asoslangan firmalar tomonidan to'liq yoki birinchi navbatda raqamli ishlab chiqarishning umumiy qismi", "Raqamli bitimlar reestrida qayd etilgan raqamli moliyaviy aktivlar haqidagi ma'lumotlar", "Muloqot, axborot qidiruv, dasturiy ta’minot", "Axborot etkazib beruvchilar"],
        correct: 0
    },
    {
        question: "Raqamli bozor –",
        options: ["Tovarlar (xizmatlar) ishlab chiqaruvchilar va iste'molchilar o'rtasida elektron shaklda muntazam almashinuv bitimlariga asoslangan iqtisodiy munosabatlar majmui", "Elektron shaklda ishlab chiqarilgan tovarlar (xizmatlar) ishlab chiqaruvchilari va iste'molchilar o'rtasida muntazam almashinuv bitimlariga asoslangan iqtisodiy munosabatlar majmui", "Raqamli makonda yaratilgan ma'lumotlar va tuzilmagan ma'lumotlar bozori", "Tarmoqka kiritilgan funktsional imkoniyatlar (Internet yoki boshqalar)"],
        correct: 0
    },
    {
        question: "Raqamli aktiv –",
        options: ["Foydalanish mumkin bo'lgan tizimlashtirilgan, indekslangan kontent (raqamli fotosuratlar, animatsiya, video, musiqa va boshqalar)", "Tarmoqka kiritilgan funktsional imkoniyatlar (Internet yoki boshqalar)", "Jismoniy aktivlarning kapitallashuvini ko'paytiradigan va pul oqimining ko'payishini ta'minlaydigan o'ziga xos mulk shakli va resurslar", "Raqamli makonda yaratilgan ma'lumotlar va tuzilmagan ma'lumotlar bozori"],
        correct: 0
    },
    {
        question: "Raqamli mahsulot –",
        options: ["Raqamli shaklda ishlab chiqarilgan va (yoki) taqdim etilgan mahsulot (xizmat)", "Mahsulot (xizmat) ning amalga oshirilishidan kelib chiqadigan xususiyatlaridan biri", "Qimmatli ma'lumotlar yoki xaridorlar pul to'lashga rozi bo'lgan elektron xizmatga kirish", "Barcha javoblar to’g’ri"],
        correct: 0
    },
    {
        question: "Raqamlashtirish necha bosqichda amalga oshiriladi",
        options: ["4", "2", "3", "5"],
        correct: 0
    },
    {
        question: "Raqamli iqtisodiyotga asos sifatida olinadi:",
        options: ["5-Texnologik jarayonlar tartibi va 4-sanoat inqilobi", "Texnologik jarayonlar tuzilmalari va sanoat inqiloblari", "Beshinchi texnologik jarayonlar tartibi", "Oltinchi texnologik jarayonlar tartibi"],
        correct: 0
    },
    {
        question: "Beshinchi texnologik jarayonlar tartibi qanday texnologiyalarning yutuqlariga asoslangan deb hisoblanadi.",
        options: ["Mikroelektronika, biotexnologiya, gen injeneriyasi, optik tolali texnologiya", "Elektron sanoat, kompyuter injeneriyasi, informatika", "Nanoelektronika, nanokimyo, VR/AR, molekulyar va nanofotonik, nanomateriallar", "Bulutli texnologiyalar"],
        correct: 0
    },
    {
        question: "O’zbekistondagi ilk kripto birja bu?",
        options: ["UZNEX", "BINANCE", "CRIPTOMARKET", "UZMAX.UZ"],
        correct: 0
    },
    {
        question: "NFT bu nima?",
        options: ["O’zaro o’zgarmas token degan ma’noni bildiradi. Uni o’zgartirib yoki almashtirib bo’lmaydi", "Kriptovalyutaning patenti", "O’zgaruvcha token", "To`g`ri javob yo’q"],
        correct: 0
    },
    {
        question: "NFTni almashish uchun:",
        options: ["Kriptovalyutalarda savdo qilinadi", "NFT da savdo qilinadi", "Forexs bozorida savdo qilinadi", "To`g`ri javob yo’q"],
        correct: 0
    },
    {
        question: "Sun'iy intellekt bilan blokcheynni integratsiyasini qaysi:",
        options: ["Kraudsorsing", "Data science", "General texnology", "Hamma javob to’g’ri"],
        correct: 3
    },    
];
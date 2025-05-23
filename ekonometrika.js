const ekonometrikaQuestions = [
    { question: "Juft korrelyatsion-regression tahlil nima?", options: ["Faqat bitta o'zgaruvchi bilan", "Ikki o'zgaruvchi o'rtasidagi bog'liqlik", "Ko'p o'zgaruvchilarni o'z ichiga oladi", "Regression modellarga asoslanadi"], correct: 1 },
    { question: "Ko‘p omilli ekonometrik tahlil nimalarga asoslanadi?", options: ["Juft korrelyatsiya", "Faqat vaqt qatorlari", "Bir nechta mustaqil o'zgaruvchi", "Chiziqli funksiyalarga"], correct: 2 },
    { question: "Ekonometrik modellarning asosiy maqsadi nima?", options: ["Iqtisodiy hodisalarni tushuntirish va prognozlash", "Statistik ma'lumotlarni yig‘ish", "Chiziqli tenglamalar yaratish", "Korrelatsiya koeffitsiyentlarini hisoblash"], correct: 0 },
    { question: "Vaqtli qatorlar qanday tahlil qilinadi?", options: ["Korrelatsiya tahlili orqali", "Regression tahlil yordami bilan", "Trend, mavsumiylik va tasodifiy komponentlar orqali", "Faqat harakatlanuvchi o'rtacha usuli bilan"], correct: 2 },
    { question: "Dinamik ekonometrik modellarning asosiy xususiyati nima?", options: ["O'zgaruvchilar orasidagi statik bog‘liqlik", "O'zgaruvchilar orasidagi vaqt bo‘yicha bog‘liqlik", "Faqat ilgari ma'lum bo'lgan ma'lumotlar bilan ishlaydi", "Parametrlarning mutlaq stabilligi"], correct: 1 },
    { question: "Eng kichik kvadratlar usuli qanday qoida asosida ishlaydi?", options: ["Eng katta yondashuv", "Variatsiyani minimallashtirish", "Katta ehtimollik tamoyili", "Neyron tarmoq tamoyillari"], correct: 1 },
    { question: "Akaike (AIC) va Bayes (BIC) mezonlari nimaga xizmat qiladi?", options: ["Modelning bashorat aniqligini o‘lchash", "Modeldagi xatolarni kamaytirish", "Modelning moslik darajasini baholash", "Model parametrlarini tekshirish"], correct: 2 },
    { question: "Vaqtli qatorlarda stasionarlik nima?", options: ["O‘zgaruvchilarning statistik xususiyatlari vaqt bo‘yicha o‘zgarish", "O‘zgaruvchilarning statistik xususiyatlari vaqt bo‘yicha o‘zgarmasligi", "Faqat mavsumiy o‘zgaruvchilar mavjud bo‘lishi", "Xatoliklarning mustaqil bo‘lishi"], correct: 1 },
    { question: "Heteroskedastiklik nima?", options: ["Model xatoliklarining o‘zgarmas dispersiyaga ega bo‘lishi", "Model xatoliklarining turli o‘zgaruvchilar uchun turlicha dispersiyaga ega bo‘lishi", "Modelning ortogonal o‘zgaruvchilarga ega bo‘lishi", "Modelning faqat chiziqli bog‘liqliklarga ega bo‘lishi"], correct: 1 },
    { question: "Endogen o‘zgaruvchi qanday o‘zgaruvchi hisoblanadi?", options: ["Modelda mustaqil o‘zgaruvchi sifatida qatnashuvchi", "Model natijasiga ta'sir qilmaydigan", "Model ichida aniqlanadigan", "Modeldan tashqarida aniqlanadigan"], correct: 2 },
    { question: "Autoregressiv (AR) modelning xususiyati nima?", options: ["Hozirgi qiymat o‘tgan qiymatlarga bog‘liq bo‘ladi", "Model faqat mustaqil o‘zgaruvchilar bilan ishlaydi", "Modelda vaqt omili mavjud emas", "Model faqat ekonometriya uchun ishlatiladi"], correct: 0 },
    { question: "Durbin-Watson testi nima uchun ishlatiladi?", options: ["Modelning darajalarini tekshirish uchun", "Modeldagi autokorrelyatsiyani aniqlash uchun", "Modeldagi heteroskedastiklikni aniqlash uchun", "Model natijalari to‘g‘ri ekanligini isbotlash uchun"], correct: 1 },
    { question: "Granger sababiyat testi nima uchun ishlatiladi?", options: ["O‘zgaruvchilar orasidagi statik bog‘liqlikni o‘lchash uchun", "O‘zgaruvchilar orasidagi vaqt bo‘yicha bog‘liqlikni aniqlash uchun", "Modelning heteroskedastikligini tekshirish uchun", "Modelning bashorat aniqligini tekshirish uchun"], correct: 1 },
    { question: "Panel ma'lumotlar qanday xarakterga ega?", options: ["Faqat vaqt bo‘yicha kuzatilgan", "Turli birliklar va vaqt o‘qi bo‘yicha kuzatilgan", "Faqat kesim bo‘yicha kuzatilgan", "Faqat iqtisodiy o‘zgaruvchilarni o‘z ichiga olgan"], correct: 1 },
    { question: "Log-lineer regressiya qanday maqsadda qo‘llaniladi?", options: ["Faqat iqtisodiy modellarda", "Ijtimoiy va iqtisodiy tahlillarda", "Faqat vaqtli qatorlarda", "Neyron tarmoqlarda"], correct: 1 },
    { question: "Multikollinearlik nima?", options: ["Modelning ortogonal bo‘lishi", "Mustaqil o‘zgaruvchilar o‘rtasidagi kuchli bog‘liqlik", "Model xatoliklarining normallikka ega bo‘lishi", "Modelning barqaror bo‘lishi"], correct: 1 },
    { question: "Probabilistik modellar nima uchun ishlatiladi?", options: ["Faqat vaqtli qatorlar uchun", "Xodisalarning ehtimollik taqsimotini hisoblash uchun", "Regression modellarning moslashuvchanligini oshirish uchun", "Mustaqil o‘zgaruvchilarning ta’sirini kamaytirish uchun"], correct: 1 },
    { question: "Statistika va ekonometrika o‘rtasidagi asosiy farq nimada?", options: ["Ikkalasi ham bir xil maqsadda ishlatiladi", "Statistika faqat ma’lumot yig‘ish bilan shug‘ullanadi", "Ekonometrika model yaratish va bashorat qilishga qaratilgan", "Statistika faqat chiziqli modellar bilan ishlaydi"], correct: 2 },
    { question: "Model tanlashda qaysi mezon eng ko‘p ishlatiladi?", options: ["F-test", "R^2", "AIC va BIC", "Log-likelihood"], correct: 2 },
    { question: "Probabilistik ekonometrik modellar qanday maqsadga xizmat qiladi?", options: ["Iqtisodiy o‘zgarishlarni aniq prognozlash", "Ma'lumotlarni guruhlash", "Bashoratning ishonchliligini oshirish", "Model parametrlarini statistik tekshirish"], correct: 0 },
    { question: "Regressiya modeli qanday vazifani bajaradi?", options: ["Ma'lumotlarni yig'ish", "O'zgaruvchilar o'rtasidagi bog‘liqlikni aniqlash", "Chiziqli funksiyalarni hisoblash", "O'zgaruvchilarning taqsimotini baholash"], correct: 1 },
    { question: "OLS (Eng kichik kvadratlar usuli) qanday ishlaydi?", options: ["Ehtimollikni oshirish", "Xatoliklarni minimallashtirish", "O'zgaruvchilarni kamaytirish", "Modelni o'zgartirish"], correct: 1 },
    { question: "R^2 statistikasi nimani ko‘rsatadi?", options: ["Modelning moslashuvi", "Parametrlarning ahamiyati", "Xatolik darajasi", "O‘zgaruvchilarning taqsimoti"], correct: 0 },
    { question: "Multikollinearlik qanday muammo tug‘diradi?", options: ["Model parametrlarini aniq baholay olmaslik", "Modelning ortiqcha murakkabligi", "Xatoliklarning o‘zgaruvchanligi", "Modelning ortogonal bo‘lishi"], correct: 0 },
    { question: "Endogenlik muammosi nimada namoyon bo‘ladi?", options: ["Model mustaqil va bog‘liq o‘zgaruvchilar orasidagi bog‘liqlik mavjudligi", "Chiziqsizlik mavjudligi", "Faqat teskari regressiya", "Faqat vaqt qatorlarida"], correct: 0 },
    { question: "Durbin-Watson testi nimani tekshiradi?", options: ["Heteroskedastiklik", "Autokorrelyatsiya", "O'zgaruvchilarning taqsimoti", "Parametrlarning barqarorligi"], correct: 1 },
    { question: "Granger sababiyat testi nimaga asoslanadi?", options: ["O‘zgaruvchilar orasidagi vaqt bo‘yicha bog‘liqlik", "Faqat statistik bog‘liqlik", "Neyron tarmoq modellari", "Model parametrlarining stabilligi"], correct: 0 },
    { question: "Geteroskedastiklik qanday ta’sir qiladi?", options: ["Model parametrlarini noto‘g‘ri baholaydi", "Modelning ortiqcha moslashishiga sabab bo‘ladi", "Modelga yangi o‘zgaruvchilar qo‘shadi", "Modelni ortogonal qiladi"], correct: 0 },
    { question: "Logit modeli qanday maqsadda ishlatiladi?", options: ["Ehtimollikni bashorat qilish", "Chiziqli bog‘liqlikni aniqlash", "Parametrlarni taqqoslash", "Neyron tarmoq tahlili"], correct: 0 },
    { question: "Panel ma‘lumotlar nimani ifodalaydi?", options: ["O‘zgaruvchilar orasidagi chiziqli bog‘liqlik", "Turli birliklar va vaqt bo‘yicha kuzatilgan ma‘lumotlar", "Faqat vaqt qatorlari", "Faqat kesim ma‘lumotlari"], correct: 1 },
    { question: "Poisson regressiyasi qaysi turdagi ma’lumotlar uchun ishlatiladi?", options: ["Diskret ma’lumotlar", "Davomli ma’lumotlar", "Ikki o‘lchovli ma’lumotlar", "Neyron tarmoqlar"], correct: 0 },
    { question: "ARIMA modeli qanday vazifani bajaradi?", options: ["Vaqt qatorlari tahlili", "Chiziqli regressiya", "Multikollinearlikni baholash", "Neyron tarmoq modellashtirish"], correct: 0 },
    { question: "Akaike (AIC) mezoni nima uchun ishlatiladi?", options: ["Model tanlash uchun", "Chiziqsizlikni baholash uchun", "O‘zgaruvchilar orasidagi bog‘liqlikni o‘lchash uchun", "Neyron tarmoqlarni tekshirish uchun"], correct: 0 },
    { question: "Neyron tarmoqlar qanday maqsadda ishlatiladi?", options: ["O‘zgaruvchilarni bashorat qilish", "Modelni ortogonal qilish", "Chiziqli regressiyani amalga oshirish", "Neyronlar sonini kamaytirish"], correct: 0 },
    { question: "T-test qanday maqsadda ishlatiladi?", options: ["Model parametrlarining ahamiyatini tekshirish", "Modeldagi xatoliklarni aniqlash", "Modelga yangi o‘zgaruvchilar qo‘shish", "Neyron tarmoq modellashtirish"], correct: 0 },
    { question: "VIF (Variation Inflation Factor) nima uchun ishlatiladi?", options: ["Multikollinearlikni tekshirish", "Model parametrlarini tahlil qilish", "Model tanlash", "Neyron tarmoqlarni baholash"], correct: 0 },
    { question: "Instrumental o‘zgaruvchilar usuli qachon qo‘llaniladi?", options: ["Endogenlik muammosi bo‘lganda", "Heteroskedastiklik bo‘lganda", "Neyron tarmoqlar uchun", "Panel ma’lumotlar uchun"], correct: 0 },
    { question: "Neytral iqtisodiy model qanday ishlaydi?", options: ["Ob’ektiv bashorat beradi", "O‘zgaruvchilar orasidagi bog‘liqlikni ko‘rsatadi", "Model parametrlarini o‘zgartiradi", "Xatoliklarni minimallashtiradi"], correct: 0 },
    { question: "Vaqtli qatorlarda trend qanday aniqlanadi?", options: ["Harakatlanuvchi o‘rtacha yordami bilan", "F-test orqali", "Neyron tarmoqlar yordamida", "Chiziqli regressiya orqali"], correct: 0 },
    { question: "Statistika va ekonometrika qanday farqlanadi?", options: ["Statistika umumiy tahlil berib, ekonometrika model quradi", "Ikkalasi bir xil", "Statistika faqat ma’lumot yig‘ish bilan shug‘ullanadi", "Neyron tarmoqlarga asoslangan"], correct: 0 },
    { question: "Regressiya modelidagi bog‘liq o‘zgaruvchi nima?", options: ["Mustaqil o‘zgaruvchi", "Model natijasi", "Tasodifiy o‘zgaruvchi", "Model parametri"], correct: 1 },
    { question: "Ko‘p omilli regressiyada nechta mustaqil o‘zgaruvchi bo‘lishi mumkin?", options: ["1", "2 yoki undan ko‘p", "Faqat 3", "5 dan ortiq bo‘lishi mumkin emas"], correct: 1 },
    { question: "Heteroskedastiklik qanday muammodir?", options: ["Model xatoliklarining dispersiyasi o‘zgaruvchan", "Mustaqil o‘zgaruvchilar bog‘liqligi", "Autokorrelyatsiya mavjudligi", "Modeldagi parametrlarning ortiqcha moslashishi"], correct: 0 },
    { question: "Eng kichik kvadratlar usuli qanday shart asosida ishlaydi?", options: ["Xatolar dispersiyasi bir xil bo‘lishi kerak", "O‘zgaruvchilar ortogonal bo‘lishi kerak", "Model parametrlarining stabil bo‘lishi kerak", "Mustaqil o‘zgaruvchilar normal taqsimlangan bo‘lishi kerak"], correct: 0 },
    { question: "F-test nimani tekshiradi?", options: ["Modelning umumiy ahamiyati", "Xatolik dispersiyasi", "Endogenlik mavjudligi", "Mustaqil o‘zgaruvchilarning normal taqsimlanganligi"], correct: 0 },
    { question: "Logistik regressiya qanday maqsadda ishlatiladi?", options: ["Ikkilamchi natijali ma’lumotlarni bashorat qilish", "Chiziqli bog‘liqlikni o‘lchash", "Neyron tarmoqlarni optimallashtirish", "Model parametrlarini test qilish"], correct: 0 },
    { question: "AIC mezoni nimani baholash uchun ishlatiladi?", options: ["Model mosligi", "Model xatoliklari", "Xatolik dispersiyasi", "Neyron tarmoqlarning moslashuvi"], correct: 0 },
    { question: "Panel ma’lumotlar qanday tahlil qilinadi?", options: ["Faqat vaqt bo‘yicha", "Vaqt va kesim bo‘yicha", "Mustaqil kuzatuvlar bo‘yicha", "Neyron tarmoqlar orqali"], correct: 1 },
    { question: "Neyron tarmoqlarning asosiy ustunligi nimada?", options: ["Chiziqsiz bog‘liqlikni aniqlash", "Faqat chiziqli modellarni baholash", "Oddiy regressiya modellari kabi ishlash", "Model parametrlarini baholash"], correct: 0 },
    { question: "Ridge regressiya qanday muammoni bartaraf etadi?", options: ["Multikollinearlik", "Heteroskedastiklik", "Autokorrelyatsiya", "Neyron tarmoqlar"], correct: 0 },
    { question: "Granger sababiyat testi qaysi tahlil uchun ishlatiladi?", options: ["Vaqtli qatorlar tahlili", "Chiziqli regressiya", "Neyron tarmoqlard", "Autokorrelyatsiya"], correct: 0 },
    { question: "Probabilistik model qanday ishlaydi?", options: ["Ehtimollik asosida natija beradi", "Faqat chiziqli bog‘liqlikni tekshiradi", "Mustaqil o‘zgaruvchilarni normallashtiradi", "Neyron tarmoqlarga asoslanadi"], correct: 0 },
    { question: "Principal Component Analysis (PCA) qanday maqsadda ishlatiladi?", options: ["O‘zgaruvchilar sonini kamaytirish", "Neyron tarmoqlarni optimallashtirish", "Multikollinearlikni baholash", "Model xatolarini tekshirish"], correct: 0 },
    { question: "Neyron tarmoqlarning asosiy elementlari nimalardan iborat?", options: ["Neyronlar va qatlamlar", "Faqat regressiya koeffitsiyentlari", "Statistik tahlillar", "Neyron funksiyalar"], correct: 0 },
    { question: "VAR (Vector Autoregression) modeli qanday tahlil uchun ishlatiladi?", options: ["Ko‘p o‘zgaruvchili vaqtli qatorlar", "Chiziqli regressiya", "Neyron tarmoqlard", "F-test"], correct: 0 },
    { question: "Kichik namuna uchun qaysi test ishlatiladi?", options: ["T-test", "F-test", "Neyron tarmoqlard", "Akaike mezoni"], correct: 0 },
    { question: "Instrumental o‘zgaruvchilar usuli qachon qo‘llaniladi?", options: ["Endogenlik muammosi bo‘lganda", "Neyron tarmoqlarni test qilish", "Chiziqli regressiyada", "Neyron tarmoqlarni moslashtirish"], correct: 0 },
    { question: "Mahalliy regressiya modeli qanday afzallikka ega?", options: ["Har bir nuqtada moslashuvchan bo‘lishi", "Neyron tarmoqlarga asoslanganligi", "Chiziqli modelga ega bo‘lishi", "Endogenlik muammosini bartaraf etishi"], correct: 0 },
    { question: "Bootstrap qanday maqsadda ishlatiladi?", options: ["Namuna taqsimotini yaratish", "Neyron tarmoqlarni test qilish", "Endogenlikni aniqlash", "Neyron tarmoqlarning mosligini tekshirish"], correct: 0 },
    { question: "Econometrics va Data Science qanday bog‘liq?", options: ["Ikkalasi ham bashorat qilish uchun ishlatiladi", "Econometrics faqat statistik model qurish bilan shug‘ullanadi", "Data Science faqat neyron tarmoqlardan foydalanadi", "Econometrics faqat vaqt qatorlarini tahlil qiladi"], correct: 0 },
    { question: "Ehtimollar nazariyasi qanday iqtisodiy tahlil uchun ishlatiladi?", options: ["Faqat regressiya modellarida", "Xatoliklarni bashorat qilish", "Model parametrlarini tekshirish", "Ehtimollik taqsimotlarini baholash"], correct: 3 },
    { question: "Juft korrelyatsion-regression tahlilda korrelyatsiya koeffitsiyenti qanday ma’noga ega?", options: ["O‘zgaruvchilar orasidagi bog‘liqlik", "Modelning ahamiyati", "Xatoliklarni baholash", "Endogenlikni aniqlash"], correct: 0 },
    { question: "Ko‘p omilli ekonometrik tahlilning asosiy ustunligi nima?", options: ["Mustaqil o‘zgaruvchilar soni cheklangan", "Bir nechta omillarning ta’siri baholanadi", "Faqat bitta omilning ta’siri o‘lchanadi", "Model parametrlari ortogonal bo‘ladi"], correct: 1 },
    { question: "Eng kichik kvadratlar usuli qaysi shartlar bajarilganda samarali ishlaydi?", options: ["Heteroskedastiklik mavjud bo‘lsa", "Xatolar normal taqsimlangan bo‘lsa", "Modelda endogenlik mavjud bo‘lsa", "Mustaqil o‘zgaruvchilar chiziqsiz bo‘lsa"], correct: 1 },
    { question: "R^2 statistikasi nimani baholaydi?", options: ["Modelning bashorat qilish qobiliyati", "Model parametrlarining ahamiyati", "Xatolik dispersiyasi", "Mustaqil o‘zgaruvchilar soni"], correct: 0 },
    { question: "Ekonometrik modellarni baholashda qanday mezonlar qo‘llaniladi?", options: ["Akaike (AIC) va Bayes (BIC) mezonlar", "Neyron tarmoqlar", "Endogenlik tekshiruvi", "Harakatlanuvchi o‘rtacha usuli"], correct: 0 },
    { question: "Vaqtli qatorlar analizida stasionarlik nima?", options: ["O‘zgaruvchilar o‘rtasidagi bog‘liqlik", "Taqsimot vaqt o‘tishi bilan o‘zgarmasligi", "Mustaqil o‘zgaruvchilarning doimiyligi", "Model parametrlarining ortogonal bo‘lishi"], correct: 1 },
    { question: "ARIMA modeli qanday vazifani bajaradi?", options: ["Iqtisodiy hodisalarning vaqt bo‘yicha o‘zgarishini tahlil qiladi", "Model xatoliklarini kamaytiradi", "Faqat regressiya natijalarini tekshiradi", "Mustaqil o‘zgaruvchilarni tahlil qiladi"], correct: 0 },
    { question: "Ko‘p omilli regressiyada multikollinearlik qanday muammo tug‘diradi?", options: ["Model xatolarining kamayishi", "Mustaqil o‘zgaruvchilar o‘rtasidagi kuchli bog‘liqlik", "Modelning bashorat aniqligining ortishi", "Endogenlikning oshishi"], correct: 1 },
    { question: "Dinamik ekonometrik modellar qanday maqsadda qo‘llaniladi?", options: ["Statik bog‘liqlikni baholash uchun", "O‘zgaruvchilar orasidagi vaqt bo‘yicha bog‘liqlikni tekshirish uchun", "Neyron tarmoqlarni test qilish uchun", "Chiziqli regressiya uchun"], correct: 1 },
    { question: "Vaqtli qatorlarda trend qanday aniqlanadi?", options: ["Harakatlanuvchi o‘rtacha yordami bilan", "Chiziqli regressiya yordami bilan", "Neyron tarmoqlar orqali", "Endogenlik tekshiruvi bilan"], correct: 0 },
    { question: "Model tanlashda qanday mezon ishlatiladi?", options: ["F-test", "AIC va BIC", "Neyron tarmoqlard", "Log-likelihood"], correct: 1 },
    { question: "Heteroskedastiklik qanday ta’sir qiladi?", options: ["Model parametrlarini noto‘g‘ri baholaydi", "Modelning bashorat kuchini oshiradi", "Neyron tarmoqlarni kuchaytiradi", "Modelni barqarorlashtiradi"], correct: 0 },
    { question: "Granger sababiyat testi nimani tekshiradi?", options: ["O‘zgaruvchilar orasidagi vaqt bo‘yicha bog‘liqlik", "Xatolik dispersiyasi", "Neyron tarmoqlarni tekshirish", "Chiziqli regressiya"], correct: 0 },
    { question: "VIF (Variation Inflation Factor) nima uchun ishlatiladi?", options: ["Multikollinearlikni tekshirish", "Model parametrlarini tahlil qilish", "Neyron tarmoqlarni optimallashtirish", "Model tanlash"], correct: 0 },
    { question: "Ekonometrik modellarni baholashda eng muhim mezon nima?", options: ["Modelning umumiy mosligi", "Neyron tarmoq xatolari", "Faqat statistik testlar", "Endogenlik"], correct: 0 },
    { question: "Instrumental o‘zgaruvchilar usuli qachon qo‘llaniladi?", options: ["Endogenlik muammosi bo‘lganda", "Faqat vaqtli qatorlar tahlilida", "Model xatolarini kamaytirishda", "Neyron tarmoqlar uchun"], correct: 0 },
    { question: "Neyron tarmoqlarning asosiy afzalligi nima?", options: ["Chiziqsiz bog‘liqlikni aniqlash", "Model parametrlarini kamaytirish", "Model xatolarini normallashtirish", "Mustaqil o‘zgaruvchilar sonini oshirish"], correct: 0 },
    { question: "Bootstrap qanday maqsadda ishlatiladi?", options: ["Namuna taqsimotini yaratish", "Neyron tarmoqlarni test qilish", "Endogenlikni aniqlash", "Neyron tarmoqlarni optimallashtirish"], correct: 0 },
    { question: "Ekonometrika qanday fan bilan bog‘liq?", options: ["Statistika", "Faqat Neyron tarmoqlar", "Biologiya", "Informatika"], correct: 0 },
    { question: "Ehtimollar nazariyasi ekonometrik modellarda qanday qo‘llaniladi?", options: ["Model parametrlarini baholash", "Endogenlikni tekshirish", "Neyron tarmoqlarni optimallashtirish", "Model xatolarini kamaytirish"], correct: 0 },
    { question: "Juft korrelyatsion-regression tahlil qanday holatda qo‘llaniladi?", options: ["Faqat vaqt qatorlarida", "Ikki o‘zgaruvchi o‘rtasidagi bog‘liqlikni o‘lchash uchun", "Chiziqli modellarni baholash uchun", "Neyron tarmoqlarni test qilish uchun"], correct: 1 },
    { question: "Ko‘p omilli regressiya qanday afzalliklarga ega?", options: ["Mustaqil o‘zgaruvchilar soni cheklanmagan", "Bir nechta omillarning ta’siri baholanadi", "Faqat bitta omilning ta’siri hisoblanadi", "Model xatolarini kamaytiradi"], correct: 1 },
    { question: "Eng kichik kvadratlar usuli qanday sharoitda eng yaxshi ishlaydi?", options: ["Model xatolari normal taqsimlangan bo‘lsa", "Endogenlik mavjud bo‘lsa", "Neyron tarmoqlar bo‘lsa", "Xatolar dispersiyasi o‘zgaruvchan bo‘lsa"], correct: 0 },
    { question: "Vaqtli qatorlar tahlilida autokorrelyatsiya qanday aniqlanadi?", options: ["Durbin-Watson testi bilan", "Neyron tarmoqlar yordami bilan", "Chiziqli regressiya orqali", "Endogenlik tekshiruvi bilan"], correct: 0 },
    { question: "Ekonometrik modellarni baholash uchun eng ko‘p ishlatiladigan mezonlar qaysilar?", options: ["Akaike (AIC) va Bayes (BIC) mezonlar", "Neyron tarmoqlar", "Endogenlik tekshiruvi", "Autoregressiya"], correct: 0 },
    { question: "Vaqtli qatorlarda trend komponenti qanday aniqlanadi?", options: ["Harakatlanuvchi o‘rtacha yordami bilan", "Neyron tarmoqlar orqali", "Endogenlik testlari bilan", "Modelning chiziqliligi bilan"], correct: 0 },
    { question: "ARMA modeli qanday vazifani bajaradi?", options: ["Vaqt qatorlari tahlilida prognoz qilish", "Model xatoliklarini kamaytirish", "Mustaqil o‘zgaruvchilarni tahlil qilish", "Neyron tarmoqlarni test qilish"], correct: 0 },
    { question: "Multikollinearlik mavjud bo‘lganda qanday yechim tavsiya qilinadi?", options: ["Ridge regressiyadan foydalanish", "Modelni o‘zgartirish", "Neyron tarmoqlarga o‘tish", "Model parametrlarini kamaytirish"], correct: 0 },
    { question: "Dinamik ekonometrik modellar qanday muammolarni hal qiladi?", options: ["Vaqt bo‘yicha o‘zgarishlarni tahlil qilish", "Neyron tarmoqlarni optimallashtirish", "Mustaqil o‘zgaruvchilarni kamaytirish", "Model xatolarini normallashtirish"], correct: 0 },
    { question: "Vaqt qatorlarida sesonlik qanday tahlil qilinadi?", options: ["Xatolar dispersiyasini tekshirish orqali", "Harakatlanuvchi o‘rtacha yordami bilan", "Neyron tarmoqlardan foydalanish", "Endogenlik testlari bilan"], correct: 1 },
    { question: "Model tanlashda qaysi mezon eng ko‘p ishlatiladi?", options: ["F-test", "AIC va BIC", "Neyron tarmoqlard", "Log-likelihood"], correct: 1 },
    { question: "Geteroskedastiklik qanday ta’sir qiladi?", options: ["Model parametrlarini noto‘g‘ri baholaydi", "Modelning bashorat kuchini oshiradi", "Neyron tarmoqlarni kuchaytiradi", "Modelni barqarorlashtiradi"], correct: 0 },
    { question: "Granger sababiyat testi qanday tahlil uchun ishlatiladi?", options: ["O‘zgaruvchilar orasidagi vaqt bo‘yicha bog‘liqlikni aniqlash", "Model xatolarini kamaytirish", "Neyron tarmoqlarni tekshirish", "Chiziqli regressiya"], correct: 0 },
    { question: "VIF (Variation Inflation Factor) qanday maqsadda qo‘llaniladi?", options: ["Multikollinearlikni tekshirish", "Model parametrlarini tahlil qilish", "Neyron tarmoqlarni optimallashtirish", "Model tanlash"], correct: 0 },
    { question: "Ekonometrik modellarni baholashda eng muhim mezon nima?", options: ["Modelning umumiy mosligi", "Neyron tarmoq xatolari", "Faqat statistik testlar", "Endogenlik"], correct: 0 },
    { question: "Instrumental o‘zgaruvchilar usuli qachon ishlatiladi?", options: ["Endogenlik muammosi bo‘lganda", "Faqat vaqtli qatorlar tahlilida", "Model xatolarini kamaytirishda", "Neyron tarmoqlar uchun"], correct: 0 },
    { question: "Neyron tarmoqlarning asosiy afzalligi nima?", options: ["Chiziqsiz bog‘liqlikni aniqlash", "Model parametrlarini kamaytirish", "Model xatolarini normallashtirish", "Mustaqil o‘zgaruvchilar sonini oshirish"], correct: 0 },
    { question: "Bootstrap qanday maqsadda ishlatiladi?", options: ["Namuna taqsimotini yaratish", "Neyron tarmoqlarni test qilish", "Endogenlikni aniqlash", "Neyron tarmoqlarni optimallashtirish"], correct: 0 },
    { question: "Ekonometrika qanday fan bilan bog‘liq?", options: ["Statistika", "Faqat Neyron tarmoqlar", "Biologiya", "Informatika"], correct: 0 },
    { question: "Ekonometrik modellar qanday asosiy maqsadga ega?", options: ["Iqtisodiy jarayonlarni tushuntirish va prognozlash", "Faqat statistik ma'lumotlarni yig‘ish", "Neyron tarmoqlarni qurish", "O‘zgaruvchilarning taqsimotini baholash"], correct: 0 },
    { question: "Juft korrelyatsion-regression tahlilning asosiy vazifasi nima?", options: ["Faqat vaqt qatorlarida ishlash", "Ikki o‘zgaruvchi o‘rtasidagi bog‘liqlikni o‘lchash", "Model parametrlarini baholash", "Neyron tarmoqlarni test qilish"], correct: 1 },
    { question: "Ko‘p omilli regressiya qanday xususiyatga ega?", options: ["Faqat ikkita o‘zgaruvchini qamrab oladi", "Bir nechta omillarning ta’siri tahlil qilinadi", "Mustaqil o‘zgaruvchilarning soni cheklanadi", "Model xatolarini kamaytiradi"], correct: 1 },
    { question: "Eng kichik kvadratlar usuli (OLS) qanday sharoitda eng yaxshi natija beradi?", options: ["Model xatolari normal taqsimlangan bo‘lsa", "Endogenlik mavjud bo‘lsa", "Neyron tarmoqlar ishlatilganda", "Xatolar dispersiyasi o‘zgaruvchan bo‘lsa"], correct: 0 },
    { question: "Vaqtli qatorlar tahlilida autokorrelyatsiyani qanday aniqlash mumkin?", options: ["Durbin-Watson testi orqali", "Neyron tarmoqlar yordamida", "Chiziqli regressiya orqali", "F-test bilan"], correct: 0 },
    { question: "Ekonometrik modellarni baholash uchun qanday mezonlardan foydalaniladi?", options: ["Akaike (AIC) va Bayes (BIC) mezonlari", "Neyron tarmoqlar modeli", "Endogenlik tekshiruvi", "Autoregressiya"], correct: 0 },
    { question: "Vaqtli qatorlarda trend qanday aniqlanadi?", options: ["Harakatlanuvchi o‘rtacha yordamida", "Neyron tarmoqlar orqali", "Endogenlik testlari bilan", "Modelning chiziqliligi bilan"], correct: 0 },
    { question: "ARIMA modeli qanday tahlil uchun ishlatiladi?", options: ["Vaqt qatorlari prognozi", "Model xatoliklarini kamaytirish", "Mustaqil o‘zgaruvchilarni tahlil qilish", "Neyron tarmoqlarni test qilish"], correct: 0 },
    { question: "Multikollinearlik mavjud bo‘lsa, qanday yechim qo‘llash mumkin?", options: ["Ridge regressiyadan foydalanish", "Modelni o‘zgartirish", "Neyron tarmoqlarga o‘tish", "Model parametrlarini kamaytirish"], correct: 0 },
    { question: "Dinamik ekonometrik modellar qanday maqsadda ishlatiladi?", options: ["Vaqt bo‘yicha o‘zgarishlarni tahlil qilish", "Neyron tarmoqlarni optimallashtirish", "Mustaqil o‘zgaruvchilarni kamaytirish", "Model xatolarini normallashtirish"], correct: 0 },
    { question: "Vaqt qatorlarida mavsumiylik qanday aniqlanadi?", options: ["Xatolar dispersiyasini tekshirish orqali", "Harakatlanuvchi o‘rtacha yordamida", "Neyron tarmoqlardan foydalanish", "Endogenlik testlari bilan"], correct: 1 },
    { question: "Model tanlashda eng ko‘p ishlatiladigan mezonlar qaysilar?", options: ["F-test", "AIC va BIC", "Neyron tarmoqlar", "Log-likelihood"], correct: 1 },
    { question: "Heteroskedastiklik qanday ta’sir qiladi?", options: ["Model parametrlarini noto‘g‘ri baholaydi", "Modelning bashorat kuchini oshiradi", "Neyron tarmoqlarni kuchaytiradi", "Modelni barqarorlashtiradi"], correct: 0 },
    { question: "Granger sababiyat testi qanday tahlil uchun ishlatiladi?", options: ["O‘zgaruvchilar orasidagi vaqt bo‘yicha bog‘liqlikni aniqlash", "Model xatolarini kamaytirish", "Neyron tarmoqlarni tekshirish", "Chiziqli regressiya"], correct: 0 },
    { question: "VIF (Variation Inflation Factor) qanday maqsadda qo‘llaniladi?", options: ["Multikollinearlikni tekshirish", "Model parametrlarini tahlil qilish", "Neyron tarmoqlarni optimallashtirish", "Model tanlash"], correct: 0 },
    { question: "Ekonometrik modellarni baholashda eng muhim mezon nima?", options: ["Modelning umumiy mosligi", "Neyron tarmoq xatolari", "Faqat statistik testlar", "Endogenlik"], correct: 0 },
    { question: "Instrumental o‘zgaruvchilar usuli qachon ishlatiladi?", options: ["Endogenlik muammosi bo‘lganda", "Faqat vaqtli qatorlar tahlilida", "Model xatolarini kamaytirishda", "Neyron tarmoqlar uchun"], correct: 0 },
    { question: "Neyron tarmoqlarning asosiy afzalligi nima?", options: ["Chiziqsiz bog‘liqlikni aniqlash", "Model parametrlarini kamaytirish", "Model xatolarini normallashtirish", "Mustaqil o‘zgaruvchilar sonini oshirish"], correct: 0 },
    { question: "Bootstrap qanday maqsadda ishlatiladi?", options: ["Namuna taqsimotini yaratish", "Neyron tarmoqlarni test qilish", "Endogenlikni aniqlash", "Neyron tarmoqlarni optimallashtirish"], correct: 0 },
    { question: "Ekonometrika qanday fan bilan bog‘liq?", options: ["Statistika", "Faqat Neyron tarmoqlar", "Biologiya", "Informatika"], correct: 0 }
];
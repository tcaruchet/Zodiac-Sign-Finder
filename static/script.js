class ZodiacSign {

    static signs = {
      en : ['Aries: The Ram','Taurus: The Bull','Gemini: The Twins','Cancer: The Crab','Leo: The Lion','Virgo: The Virgin','Libra: The Scales','Scorpio: The Scorpion','Sagittarius: The Archer','Capricorn: The Goat','Aquarius: The Water Bearer','Pisces: The Fish'],			
      fr : ['Bélier', 'Taureau', 'Gémeaux', 'Cancer', 'Lion', 'Vierge', 'Balance', 'Scorpion', 'Sagittaire', 'Capricorne', 'Verseau', 'Poissons'],
      es : ['Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo', 'Libra', 'Escorpio', 'Sagitario', 'Capricornio', 'Acuario', 'Piscis'],
      ar : ['الحمل', 'الثور', 'الجوزاء', 'السرطان', 'الأسد', 'العذراء', 'الميزان', 'العقرب',' القوس', 'الجدي', 'الدلو', 'الحوت'],
      ua : ['Овен', 'Телець', 'Близнята', 'Рак', 'Лев', 'Діва', 'Терези', 'Скорпіон', 'Стрілець', 'Козоріг', 'Водолій', 'Риби'],
      zh : ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '人马座', '山羊座', '宝瓶座', '双鱼座'],
      tr : ['Koç', 'Boğa', 'İkizler', 'Kanser', 'Aslan', 'Başak', 'Terazi', 'Akrep', 'Yay', 'Oğlak', 'Kova', 'Balık'],
      ja : ['牡羊座', '牡牛座', '双子座', '蟹座', '獅子座', '乙女座', '天秤座', '蠍座', '射手座', '山羊座', '水瓶座', '魚座'],
      id : ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagitarius', 'Capricorn', 'Aquarius', 'Pisces'],
      de : ['Widder', 'Stier', 'Zwillinge', 'Krebs', 'Löwe', 'Jungfrau', 'Waage', 'Skorpion', 'Schütze', 'Steinbock', 'Wassermann', 'Fische']
    }

    static chineseSigns = {
      en : ['Monkey', 'Rooster', 'Dog', 'Pig', 'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Sheep'],
      fr : ['Singe', 'Coq', 'Chien', 'Cochon', 'Rat', 'Bœuf', 'Tigre', 'Lapin', 'Dragon', 'Serpent', 'Cheval', 'Chèvre'],
      es : ['Mono', 'Gallo', 'Perro', 'Cerdo', 'Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente', 'Caballo', 'Oveja'],
      ar : ['القرد', 'الديك', 'الكلب', 'الخنزير', 'الفأر', 'الثور', 'النمر', 'الأرنب', 'التنين', 'الثعبان', 'الحصان', 'الخروف'],
      ua : ['Мавпа', 'Півень', 'Собака', 'Свиня', 'Щур', 'Бик', 'Тигр', 'Кролик', 'Дракон', 'Змія', 'Кінь', 'Вівця'],
      zh : ['猴', '鸡', '狗', '猪', '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊'],
      tr : ['Maymun', 'Horoz', 'Köpek', 'Domuz', 'Sıçan', 'Öküz', 'Kaplan', 'Tavşan', 'Ejderha', 'Yılan', 'At', 'Koyun'],
      ja : ['猿', '鶏', '犬', '猪', 'ネズミ', '牛', '虎', '兎', '龍', '蛇', '馬', '羊'],
      id : ['Monyet', 'Ayam', 'Anjing', 'Babi', 'Tikus', 'Sapi', 'Harimau', 'Kelinci', 'Naga', 'Ular', 'Kuda', 'Kambing'],
      de : ['Affe', 'Hahn', 'Hund', 'Schwein', 'Ratte', 'Ochse', 'Tiger', 'Hase', 'Drache', 'Schlange', 'Pferd', 'Schaf']
    }

    static chineseElements = {
      en : ['Metal', 'Water', 'Wood', 'Fire', 'Earth'],
      fr : ['Métal', 'Eau', 'Bois', 'Feu', 'Terre'],
      es : ['Metal', 'Agua', 'Madera', 'Fuego', 'Tierra'],
      ar : ['المعدني', 'المائي', 'الخشبي', 'الناري', 'الأرضي'],
      ua : ['Метал', 'Вода', 'Дерево', 'Вогонь', 'Земля'],
      zh : ['金属', '水', '木头', '火灾', '地球'],
      tr : ['Metal', 'Su', 'Ahşap', 'Yangın', 'Dünya'],
      ja : ['金', '水', '木', '火', '土'],
      id : ['Logam', 'Air', 'Kayu', 'Api', 'Tanah'],
      de : ['Metall', 'Wasser', 'Holz', 'Feuer', 'Erde']
    }

    static yinYang = {
      en : ['Yang', 'Yin'],
      fr : ['Yang', 'Yin'],
      es : ['Yang', 'Yin'],
      ar : ['اليانغ', 'اليين'],
      ua : ['Ян', 'Інь'],
      zh : ['阳', '阴'],
      tr : ['Yang', 'Yin'],
      ja : ['陽', '陰'],
      id : ['Yang', 'Yin'],
      de : ['Yang', 'Yin']
    }

  static dateRanges = [
      { start: '03-21', end: '04-19', sign: 0 }, // Bélier
      { start: '04-20', end: '05-20', sign: 1 }, // Taureau
      { start: '05-21', end: '06-20', sign: 2 }, // Gémeaux
      { start: '06-21', end: '07-22', sign: 3 }, // Cancer
      { start: '07-23', end: '08-22', sign: 4 }, // Lion
      { start: '08-23', end: '09-22', sign: 5 }, // Vierge
      { start: '09-23', end: '10-22', sign: 6 }, // Balance
      { start: '10-23', end: '11-21', sign: 7 }, // Scorpion
      { start: '11-22', end: '12-21', sign: 8 }, // Sagittaire
      { start: '12-22', end: '01-19', sign: 9 }, // Capricorne
      { start: '01-20', end: '02-18', sign: 10 }, // Verseau
      { start: '02-19', end: '03-20', sign: 11 }, // Poissons
  ];

    constructor(value, lang = 'en') {
      this.sign = ''
      this.chinese = ''

      if (!Object.hasOwn(ZodiacSign.signs, lang)) lang = 'en'
      if (!isNaN(Date.parse(value))){
        this.sign = this.#getWesternSign(value, lang)
        this.chinese = this.#getChineseSign(value, lang)
      }
    }

  #getWesternSign(date, lang) {
      const parsedDate = new Date(date);
      const formattedDate = `${String(parsedDate.getMonth() + 1).padStart(2, '0')}-${String(parsedDate.getDate()).padStart(2, '0')}`;

      for (const range of ZodiacSign.dateRanges) {
          if (
              (formattedDate >= range.start && formattedDate <= range.end) ||
              (range.start > range.end && (formattedDate >= range.start || formattedDate <= range.end))
          ) {
              return ZodiacSign.signs[lang][range.sign];
          }
      }
      return ''; // Retourne une chaîne vide si aucune correspondance n'est trouvée
  }

    #getSign(x, y) {
      return ZodiacSign.signs[y][Number(new Intl.DateTimeFormat('fr-TN-u-ca-persian', {month: 'numeric'}).format(Date.parse(x))) - 1];
    }

    #getChineseSign(x, y){
      let chineseDate = new Intl.DateTimeFormat('fr-TN-u-ca-chinese', {day: '2-digit', month: 'long', year:'numeric'}).format(Date.parse(x)).substring(0, 4)

      let chineseSign = {
        "sign" : ZodiacSign.chineseSigns[y][+chineseDate % 12],
        "element" : ZodiacSign.chineseElements[y][Math.floor(+chineseDate.charAt(3) / 2)],
        "yinyang" : (chineseDate % 2  == 0) ? ZodiacSign.yinYang[y][0] : ZodiacSign.yinYang[y][1]
      }

      return chineseSign
    }

}
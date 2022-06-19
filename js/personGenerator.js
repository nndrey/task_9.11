const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    surnameWomenJson: `{  
        "count": 15,
        "list": {
            "id_1": "Кравец",
            "id_2": "Филенкова",
            "id_3": "Коськина",
            "id_4": "Стрилец",
            "id_5": "Шебяковская",
            "id_6": "Колганова",
            "id_7": "Миленина",
            "id_8": "Ларичева",
            "id_9": "Трафимова",
            "id_10": "Мухина",
            "id_11": "Сидорова",
            "id_12": "Павлова",
            "id_13": "Сухорева",
            "id_14": "Новикова",
            "id_15": "Гальцева"
        }
    }`,
    nameWomenJson: `{  
        "count": 10,
        "list": {
            "id_1": "Мария",
            "id_2": "Кира",
            "id_3": "Вероника",
            "id_4": "Маргарита",
            "id_5": "Елизавета",
            "id_6": "Дарья",
            "id_7": "Екатерина",
            "id_8": "Владислава",
            "id_9": "Анна",
            "id_10": "Божена"
        }
    }`,
    patronymicMenJson: `{  
        "count": 10,
        "list": {
            "id_1": "Сергеевич",
            "id_2": "Дмитреевич",
            "id_3": "Александрович",
            "id_4": "Андреевич",
            "id_5": "Русланович",
            "id_6": "Ясрославович",
            "id_7": "Демидович",
            "id_8": "Петрович",
            "id_9": "Павлович",
            "id_10": "Евгениевич"
        }
    }`,
    patronymicWomenJson: `{  
        "count": 10,
        "list": {
            "id_1": "Максимовна",
            "id_2": "Егоровна",
            "id_3": "Степановна",
            "id_4": "Михайловна",
            "id_5": "Юрьевна",
            "id_6": "Даниловна",
            "id_7": "Семеновна",
            "id_8": "Витальевна",
            "id_9": "Ефимовна",
            "id_10": "Григорьевна"
        }
    }`,
    yearOfBirthJson: `{  
        "count": 10,
        "list": {
            "id_1": 1986,
            "id_2": 2006,
            "id_3": 1982,
            "id_4": 1991,
            "id_5": 1985,
            "id_6": 1996,
            "id_7": 1989,
            "id_8": 2010,
            "id_9": 2003,
            "id_10": 2001
        }
    }`,
    professionMen: `{  
        "count": 5,
        "list": {
            "id_1": "слесарь",
            "id_2": "электрик",
            "id_3": "водитель",
            "id_4": "космонавт",
            "id_5": "шахтер"
        }
    }`,
    professionWomen: `{  
        "count": 5,
        "list": {
            "id_1": "актриса",
            "id_2": "швея",
            "id_3": "косметолог",
            "id_4": "писательница",
            "id_5": "медсестра"
        }
    }`,

        GENDER_MALE: 'Мужчина',
        GENDER_FEMALE: 'Женщина'
    ,
    

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function() {
        const gender = this.randomIntNumber();
        const gender2 = (gender>0) ? personGenerator.GENDER_FEMALE : personGenerator.GENDER_MALE;
        return gender2;
    },

    randomFirstName: function() {
        if (this.gen.firstGender==personGenerator.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson); 
        } else {
            return this.randomValue(this.nameWomenJson);
        };
    },  

        randomSurname: function() {
            if (this.gen.firstGender==personGenerator.GENDER_MALE) {
                return this.randomValue(this.surnameJson); 
            } else {
                return this.randomValue(this.surnameWomenJson);
            };
    },

    randomPatronymic: function() {
        if (this.gen.firstGender==personGenerator.GENDER_MALE) {
            return this.randomValue(this.patronymicMenJson); 
        } else {
            return this.randomValue(this.patronymicWomenJson);
        };

    },

    randomProfession: function() {
        if (this.gen.firstGender==personGenerator.GENDER_MALE) {
            return this.randomValue(this.professionMen); 
        } else {
            return this.randomValue(this.professionWomen);
        };

    },

    randomEarOfBirth: function() {

        return this.randomValue(this.yearOfBirthJson);

    },

    getPerson: function () {
        this.person = {};
        // this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        return this.person;
    },

    getPersonSurnamMen: function () {
        this.surnamMen = {};
        this.surnamMen.firstSurname = this.randomSurname();
        return this.surnamMen;
    },

    getPersonPatronymicmMen: function () {
        this.patronymicMen = {};
        this.patronymicMen.firstPatronymic = this.randomPatronymic();
        return this.patronymicMen;
    },

    getPersonYearOfBirth: function () {
        this.Year = {};
        this.Year.firstYearOfBirth = this.randomEarOfBirth();
        return this.Year;
    },

    getGender: function () {
        this.gen = {};
        this.gen.firstGender = this.randomGender();
        return this.gen;
    },

    getProfession: function () {
        this.prof = {};
        this.prof.firstProfess = this.randomProfession();
        return this.prof;
    },
};

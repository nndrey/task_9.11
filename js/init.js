let start = true;
window.onload = function()
{
    const initGender = personGenerator.getGender();
    document.getElementById('genderOutput').innerText = initGender.firstGender;
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
        
    const initSurnameMen = personGenerator.getPersonSurnamMen();
    document.getElementById('surnameOutput').innerText = initSurnameMen.firstSurname;

    const initPatronymicMen = personGenerator.getPersonPatronymicmMen();
    document.getElementById('patronymicOutput').innerText = initPatronymicMen.firstPatronymic;

    const initYear = personGenerator.getPersonYearOfBirth();
    document.getElementById('birthYearOutput').innerText = initYear.firstYearOfBirth;

    const initProff = personGenerator.getProfession();
    document.getElementById('professionOutput').innerText = initProff.firstProfess;
};

const and = function () {
    document.getElementById('genderOutput').innerText = "Пол";
    
    document.getElementById('firstNameOutput').innerText = "Имя";

    document.getElementById('surnameOutput').innerText = "Фамилия";

    document.getElementById('patronymicOutput').innerText = "Отчество";

    document.getElementById('birthYearOutput').innerText = "Год рождения";

    document.getElementById('professionOutput').innerText = "Профессия";
}
document.getElementById('activOutput').onclick=window.onload;
document.getElementById('resetOutput').onclick=and;

const birthYears = [
    2005,
    1998,
    2010,
    1985,
    1992,
    2000,
    2022
]

const currentYear = new Date().getFullYear();

const adultAges = birthYears
    .map(year => currentYear-year)
    .filter(age => age>=18);
console.log(adultAges);
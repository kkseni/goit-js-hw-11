export const oneCountryMarkup = (data) => data.map(({ flags, name, capital, population, languages}) =>
{
    const langs = Object.values(languages).map(el=> `<span>${el}</span>`)
    return `<img src="${flags.svg}" class="avatar" alt="flag" width="30" />
<span class='title'>${name.official}</span>
<ul class='text'>
<li>Capital: <span class='text__normal'>${capital}</span></li>
<li>Population: <span class='text__normal'>${population}</span></li>
<li>Lenguages:<span class='text__normal'>${langs.join(', ')}</span></li>
</ul>`})
// <li>Lenguages:<span class='text__normal'>${languages.map(el=> {console.log(el)})}</span></li>
export const countriesMarkup = ( data)=>data.map(({ flags, name }) =>`<li>
    <img src="${flags.svg}" class="avatar" alt="flag" width="30" />
    <span>${name.official}</span>
    </li>`)



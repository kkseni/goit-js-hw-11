import '../css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
import { countriesMarkup } from './countriesMarkup';
import {oneCountryMarkup} from './onecountryMarkup';

const DEBOUNCE_DELAY = 300;

const searchbox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
let markup = '';
searchbox.addEventListener('input', debounce(() => {
    if (searchbox.value.trim() === '') {
        countryList.innerHTML = '';
        countryInfo.innerHTML = '';
        return
    };
    fetchCountries(searchbox.value.trim())
        .then(userdata => {
            showCountries(userdata)
        })
        .catch(error => showError(error));
}, DEBOUNCE_DELAY

));
// function countriesMark(countries) {
//     return countriesMarkup(countries)
// }

function showCountries(countries) {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
    if (countries.length > 10) {
        return Notify.success("Too many matches found. Please enter a more specific name.");
    }
    if ((countries.length >= 2) && (countries.length <= 10)) {
        markup = countriesMarkup(countries);
        console.log(countries)
        return countryList.insertAdjacentHTML('beforeend', markup.join(''))
    }
    markup = oneCountryMarkup(countries);
    console.log(countries)
   
    return countryInfo.insertAdjacentHTML('beforeend',markup)

}


function showError() {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
    return Notify.failure("Oops, there is no country with that name")
}
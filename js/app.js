// Global Variables
const injectHere = document.getElementById('injectHere');
const jokeInput = document.getElementById('jokeInput');
const searchJokes = document.getElementById('searchJokes');
const chuckIcon = document.getElementById('chuckIcon');
const randomJoke = document.getElementById('randomJoke');
// Functions
const GetRandomJoke = async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    console.log(data);
    return data;
}

// console.log(randomJokeData.icon_url);

const FormatDate = date => {
    console.log(date);
    let formatCreateDate = new Date(date);
    let finalDate = formatCreateDate.toLocaleDateString('en-US', {month: 'long', day: 'numeric', year : 'numeric'});
    let formatTime = formatCreateDate.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric'});
    console.log(finalDate, formatTime);
    return `${finalDate} ${formatTime}`;
}

const MakeJokeCard = async () => {
    let randomJokeData = await GetRandomJoke();
    console.log(randomJokeData.value);
    const firstRow = document.createElement('div');
    firstRow.className = 'row';
    const firstColTwelve = document.createElement('div');
    firstColTwelve.className = 'col-12';
    const pJokeID = document.createElement('p');
    pJokeID.id = 'jokeId';
    pJokeID.innerHTML = `Joke ID: <span class="fw-bold id">${randomJokeData.id}</span>`;
    firstColTwelve.append(pJokeID);
    firstRow.append(firstColTwelve);

    const secondRow = document.createElement('div');
    secondRow.className = 'row';
    const secondColTwelve = document.createElement('div');
    secondColTwelve.className = 'col-12';
    const pJoke = document.createElement('p');
    pJoke.id = 'joke';
    pJoke.className = 'fs-4 lead'
    pJoke.textContent = `${randomJokeData.value}`;
    secondColTwelve.append(pJoke);
    secondRow.append(secondColTwelve);

    const thirdRow = document.createElement('div');
    thirdRow.className = 'row';
    const firstColSix = document.createElement('div');
    firstColSix.className = 'col-6';
    const createdAt = document.createElement('p');
    createdAt.id = 'createdAt';
    createdAt.textContent = `Created at: ${FormatDate(randomJokeData.created_at)}`;
    console.log(createdAt);
    const secondColSix = document.createElement('div');
    secondColSix.className = 'col-6';
    const updatedAt = document.createElement('p');
    updatedAt.id = 'updatedAt';
    updatedAt.textContent = `Updated at: ${FormatDate(randomJokeData.updated_at)}`;
    secondColSix.append(updatedAt);
    firstColSix.append(createdAt);
    thirdRow.append(firstColSix, secondColSix);

    const jokeContainer = document.createElement('div');
    jokeContainer.className = 'col-6 jokeContainer';
    jokeContainer.append(firstRow, secondRow, thirdRow);

    const outerRow = document.createElement('div');
    outerRow.className = 'row justify-content-center';
    outerRow.append(jokeContainer);

    const contFluid = document.createElement('div');
    contFluid.className = 'container-fluid';
    contFluid.append(outerRow);

    injectHere.append(contFluid);
}

MakeJokeCard();

// Event Listeners
randomJoke.addEventListener('click', function(){
    injectHere.innerHTML = '';
    GetRandomJoke();
    MakeJokeCard();
})

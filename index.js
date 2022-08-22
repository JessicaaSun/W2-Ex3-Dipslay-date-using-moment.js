
const showDate = () => {
    const today = moment();
    document.getElementById('show').innerHTML = (today.format("LLLL"));
}

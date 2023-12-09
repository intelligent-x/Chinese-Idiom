const asker = new Asker(document.querySelector('.question'));
const answerer = new Answerer(document.querySelector('.answer input'), document.querySelector('.answer button'));
const processer = new Processer(asker, answerer);
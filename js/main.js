
var elForm = document.querySelector(".js-hero-form");
var elInput = document.querySelector(".hero__search-input");
var elSelectSort = document.querySelector(".hero__search-sort");
var elSelectYear = document.querySelector(".hero__search-year");
var elSelectAuthor = document.querySelector(".hero__search-author");
var elSelectLanguage = document.querySelector(".hero__search-language");
var elList = document.querySelector(".hero__list");
// Form books function start
function formFuncBook(booksfunc) {
  // Books year function start 
  var bookYearArr = [];
  booksfunc.forEach(booksYear => {
    if (!booksYear.year == bookYearArr.includes(booksYear.year)) {
      bookYearArr.push(booksYear.year)
    } else {
      bookYearArr.push("Ma'lumot topilmadi!")
    }
  });
  bookYearArr.forEach(bookArrYear => {
    if (bookArrYear > 0) {
      var optionYear = document.createElement("option");
      optionYear.value = bookArrYear;
      optionYear.textContent = `${bookArrYear}-Year`;
      elSelectYear.appendChild(optionYear)
    };
  });
  // Books year function finish
  // Books Author function start 
  var bookAuthorArr = [];
  booksfunc.forEach(booksAuthor => {
    var bookAuthorVal = booksAuthor.author;
    if (!bookAuthorVal == bookAuthorArr.includes(bookAuthorVal)) {
      bookAuthorArr.push(bookAuthorVal)
    } else {
      bookAuthorArr.push("Ma'lumot topilmadi!")
    };
  });
  bookAuthorArr.forEach(bookArrAuthor => {
    if (bookArrAuthor != "Ma'lumot topilmadi!") {
      var optionAuthor = document.createElement("option");
      optionAuthor.value = bookArrAuthor;
      optionAuthor.textContent = bookArrAuthor;
      elSelectAuthor.appendChild(optionAuthor)
    };
  });
  // Books Author function finish
  // Books Language function start 
  var bookLanguageArr = [];
  booksfunc.forEach(bookLan => {
    var bookLanguageVal = bookLan.language;
    if (!bookLanguageVal == bookLanguageArr.includes(bookLanguageVal)) {
      bookLanguageArr.push(bookLanguageVal)
    } else {
      bookLanguageArr.push("Ma'lumot topilmadi!")
    }
  });
  bookLanguageArr.forEach(bookArrLanguage => {
    if (bookArrLanguage != "Ma'lumot topilmadi!") {
      var optionLanguage = document.createElement("option");
      optionLanguage.value = bookArrLanguage;
      optionLanguage.textContent = bookArrLanguage;
      elSelectLanguage.appendChild(optionLanguage)
    }
  });
  // Books Language function finish
}
formFuncBook(books)
// Form books function finish

function elementCreteFunc(book) {
  book.forEach(bookFor => {

    var bookItem = document.createElement("li");
    var bookImg = document.createElement("img");
    var bookBox = document.createElement("div");
    var bookTitle = document.createElement("h3");
    var bookTextBox = document.createElement("div");
    var bookDate = document.createElement("span");
    var bookNumber = document.createElement("span");
    var bookLanguage = document.createElement("span");
    var bookParagrph = document.createElement("p");
    var bookLink = document.createElement("a");
    bookItem.classList.add("hero__item");
    bookImg.classList.add("hero__item-img");
    bookImg.width = "200";
    bookImg.height = "250";
    bookImg.src = bookFor.imageLink;
    bookImg.alt = bookFor.title;
    bookBox.classList.add("hero__item-box")
    bookTitle.classList.add("hero__item-heading");
    bookTitle.textContent = bookFor.title;
    bookTitle.title = bookFor.title;
    bookTextBox.classList.add("hero__list-box");
    bookDate.classList.add("hero__list-text");
    bookDate.textContent = bookFor.year;
    bookDate.title = bookFor.year;
    bookNumber.classList.add("hero__list-text");
    bookNumber.textContent = bookFor.pages;
    bookNumber.title = bookFor.pages;
    bookLanguage.classList.add("hero__list-text");
    bookLanguage.textContent = bookFor.language;
    bookLanguage.title = bookFor.language;
    bookParagrph.classList.add("hero__list-paragrph");
    bookParagrph.textContent = bookFor.author;
    bookParagrph.title = bookFor.author;
    bookLink.classList.add("hero__list-link");
    bookLink.href = bookFor.link;
    bookLink.target = "blank";
    bookLink.textContent = "Wikipedia";
    bookTextBox.append(bookDate, bookNumber, bookLanguage)
    bookBox.append(bookTitle, bookTextBox, bookParagrph, bookLink)
    bookItem.append(bookImg, bookBox)
    elList.appendChild(bookItem);
  });
}
elementCreteFunc(books)
elForm.addEventListener("submit", (evt) => {
  elList.innerHTML = null;
  evt.preventDefault();
  var inputVal = elInput.value.trim();

  var selectYearVal = Number(elSelectYear.value);
  var selectAuthorVal = elSelectAuthor.value;
  var selectLanguageVal = elSelectLanguage.value;
  var newRegex = new RegExp(inputVal, "gi");
  var bookSearch = books.filter(item => {
   return  item.title.match(newRegex) 
  })

  if (bookSearch.length > 0) {
    elementCreteFunc(bookSearch)
  } else {
    elList.textContent = "Xatolik 404"
  }
});
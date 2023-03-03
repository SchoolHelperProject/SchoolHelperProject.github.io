function studList() {
    (async () => {
        let DB = await(await fetch('stud.json')).json();
        let sortArr = DB.sort((a, b) => {
            if (a.surname < b.surname) {
                return 1;
            }
            if (a.surname > b.surname) {
                return -1;
            }
            return 0;
        });
        sortArr.forEach(function (item,index) {
            const gridClasses = document.querySelector('.classes__grid-options');
            gridClasses.insertAdjacentHTML('afterend', '<div class="classes__grid-user">' +
                '<div class="classes__grid-item" datatype="photo">' + '<div class="photoStud">' +  '</div>' + '</div>' +
                '<div class="classes__grid-item studSurname" datatype="surname">' + item.surname + '</div>' +
                '<div class="classes__grid-item studName" datatype="name">' +  item.name + '</div>' +
                '<div class="classes__grid-item studThirdname" datatype="thirdname">' + item.thirdname +  '</div>' +
                '<div class="classes__grid-item studClass" datatype="class">' + item.class +  '</div>' +
                '<div class="classes__grid-item" datatype="text">' +
                '<div class="classes__grid-userText-block">' +
                    '<textarea class="classes__grid-userText-text"></textarea>' +
                '<button class="classes__grid-userText-btn text-save"><i class="fa-solid fa-check-double"></i></button>' +
                '<button class="classes__grid-userText-btn text-delete"><i class="fa-solid fa-trash"></i></button> ' +
                '<button class="classes__grid-userText-btn text-open"><i class="fa-sharp fa-solid fa-book-open"></i></button> ' 
                +'</div>' + '</div>' + '</div>')
        })
    })();
}
function teachersList() {
    (async () => {
        let DB = await(await fetch('teachers.json')).json();
        let sortTeachArr = DB.sort((a, b) => {
            if (a.surname < b.surname) {
                return 1;
            }
            if (a.surname > b.surname) {
                return -1;
            }
            return 0;
        });
        const gridTeach = document.querySelector('.teachers__grid-options');
    sortTeachArr.forEach(function (item,index) {
        gridTeach.insertAdjacentHTML('afterend', '<div class="teachers__grid-user">' +
            '<div class="teachers__grid-item teachPhoto" datatype="photo">' + '<div class="photoTeach n' + index + '">' +  '</div>' + '</div>' +
            '<div class="teachers__grid-item teachSurname" datatype="surname">' + item.surname + '</div>' +
            '<div class="teachers__grid-item teachName" datatype="name">' +  item.name + '</div>' +
            '<div class="teachers__grid-item teachThirdname" datatype="thirdname">' + item.thirdname +  '</div>' +
            '<div class="teachers__grid-item teachSience" datatype="sience">' + item.sience +  '</div>' +
            '<div class="teachers__grid-item teachRole" datatype="role">' + item.role +  '</div>' +
            '</div>')
    })
    })();
}
function settingsSearchmain(searchAttribute,searchValue) {
    
    if(searchAttribute.toLowerCase() === 'педагог') {
        let seach = searchValue + '';
        TeachMainSearch(seach);
    } else if(searchAttribute === 'ученик') {
        let seach = searchValue + '';
        classesMainSearch(seach);
    } else if(searchAttribute === 'класс') {
        let seach = searchValue + '';
        classesMainSearch(seach);
    }
}
function classesMainSearch(searchFilter) {
    (async () => {
        let DB = await(await fetch('stud.json')).json();
    let sortArr = DB.sort((a, b) => {
        if (a.surname < b.surname) {
            return 1;
        }
        if (a.surname > b.surname) {
            return -1;
        }
        return 0;
    });
        let centralSearch = document.querySelector('.search__block');
        centralSearch.insertAdjacentHTML('afterend',
        '<div class="classes__grid-options">'+
            '<div class="classes__grid-item classesOption">Фото</div>'+
            '<div class="classes__grid-item classesOption">Фамилия</div>'+
            '<div class="classes__grid-item classesOption">Имя</div>'+
            '<div class="classes__grid-item classesOption">Отчество</div>'+
            '<div class="classes__grid-item classesOption">Класс</div>'+
            '<div class="classes__grid-item classesOption">Заметка</div>'+
        '</div>');
        
        let regSpace = /\s/gi
        let userText = searchFilter.toLowerCase();
        let regexpSearch = new RegExp(`${userText}`)
        console.log(regexpSearch);
        let updateUserText = userText.replace(regSpace,'');
    sortArr.forEach((item) => {
        let text = item.name.toLowerCase() + ' ' + item.surname.toLowerCase() + ' ' + item.thirdname.toLowerCase() + ' ' + item.class.toLowerCase();
        let updateText  = text.replace(regSpace,'');
        let teacherGrid = document.querySelector('.classes__grid-options');
        if(regexpSearch.test(updateText)) {
            console.log(updateText);
            teacherGrid.insertAdjacentHTML('afterend', '<div class="classes__grid-user">' +
            '<div class="classes__grid-item" datatype="photo">' + '<div class="photoStud">' +  '</div>' + '</div>' +
            '<div class="classes__grid-item studSurname" datatype="surname">' + item.surname + '</div>' +
            '<div class="classes__grid-item studName" datatype="name">' +  item.name + '</div>' +
            '<div class="classes__grid-item studThirdname" datatype="thirdname">' + item.thirdname +  '</div>' +
            '<div class="classes__grid-item studClass" datatype="class">' + item.class +  '</div>' +
            '<div class="classes__grid-item" datatype="text">' +
            '<div class="classes__grid-userText-block">' +
                '<textarea class="classes__grid-userText-text"></textarea>' +
            '<button class="classes__grid-userText-btn text-save"><i class="fa-solid fa-check-double"></i></button>' +
            '<button class="classes__grid-userText-btn text-delete"><i class="fa-solid fa-trash"></i></button> ' +
            '<button class="classes__grid-userText-btn text-open"><i class="fa-sharp fa-solid fa-book-open"></i></button> ' 
            +'</div>' + '</div>' + '</div>')
        }
    })
    })();
}
function TeachMainSearch(searchFilter) {
    console.log('sdf');
    
    (async () => {
        let DB = await(await fetch('teachers.json')).json();
        let sortTeachArr = DB.sort((a, b) => {
            if (a.surname < b.surname) {
                return 1;
            }
            if (a.surname > b.surname) {
                return -1;
            }
            return 0;
        });
        let centralSearch = document.querySelector('.search__block');
        centralSearch.insertAdjacentHTML('afterend',
        '<div class="teachers__grid-options">'+
            '<div class="teachers__grid-item option blue">Фото</div>'+
            '<div class="teachers__grid-item option blue">Фамилия</div>'+
            '<div class="teachers__grid-item option blue">Имя</div>'+
            '<div class="teachers__grid-item option blue">Отчество</div>'+
            '<div class="teachers__grid-item option blue">Наука</div>'+
            '<div class="teachers__grid-item option blue">Должность</div>'+
        '</div>');
        
        let regSpace = /\s/gi
        let userText = searchFilter.toLowerCase();
        let regexpSearch = new RegExp(`${userText}`)
        console.log(regexpSearch);
    sortTeachArr.forEach((item, index) => {
        let text = item.name.toLowerCase() + ' ' + item.surname.toLowerCase() + ' ' + item.thirdname.toLowerCase()+  ' ' + item.sience.toLowerCase() + ' ' + item.role.toLowerCase();
        let updateText  = text.replace(regSpace,'');
        let teacherGrid = document.querySelector('.teachers__grid-options');
        if(regexpSearch.test(updateText)) {
            console.log(updateText);
            teacherGrid.insertAdjacentHTML('afterend', '<div class="teachers__grid-user">' +
            '<div class="teachers__grid-item teachPhoto" datatype="photo">' + '<div class="photoTeach n' + index + '">' +  '</div>' + '</div>' +
            '<div class="teachers__grid-item teachSurname" datatype="surname">' + item.surname + '</div>' +
            '<div class="teachers__grid-item teachName" datatype="name">' +  item.name + '</div>' +
            '<div class="teachers__grid-item teachThirdname" datatype="thirdname">' + item.thirdname +  '</div>' +
            '<div class="teachers__grid-item teachSience" datatype="sience">' + item.sience +  '</div>' +
            '<div class="teachers__grid-item teachRole" datatype="role">' + item.role +  '</div>' +
            '</div>')
        }
    })
    })();
}



let navbarMenuBtn = document.querySelector('.navbar__btn-open');
let navbarBtnValue = '1';
let centralSearch = document.querySelector('.central-search');
let centralSchool = document.querySelector('.central__wisp');
let centralTeachers = document.querySelector('.central__teachers');
let centralClasses = document.querySelector('.central__classes');
let navbar = document.querySelector('.navbar');
let navbarHeaders = document.querySelectorAll('.navbar__menu-item_header');
let searchBtnMain = document.querySelector('.central-main__loop');
let searchInputMain = document.querySelector('.central-main__s');
let counter = 0 ;
let wispTable = document.querySelector('.wisp__grid-options');
let statusSearch = false;
let userNoteList = [];
let activeSearchCentral = false;
let activeSchoolCentral = false;
let activeTeachersCentral = false;
let activeClassesCentral = false;

function searchList(usersArray,selector,userSearchValue) {
        let regSpace = /\s/gi
        let userText = userSearchValue.toLowerCase();
        let updateUserText = userText.replace(regSpace,'');
        let regexpSearch = new RegExp(`${updateUserText}`);
    usersArray.forEach((item) => {
        let text = item.querySelector(selector).textContent.toLowerCase();
        
        let updateText  = text.replace(regSpace,'');
        if(regexpSearch.test(updateText)!== true && statusSearch === true) {
            item.style.display = 'none';
        } else if (statusSearch === false) {
            item.style.display = 'grid';
        }
    })
}




function activeList() {
    if (navbarBtnValue === '1' && activeSearchCentral === false) {
        activeSearchCentral = true;
        activeSchoolCentral = false;
        activeTeachersCentral = false;
        activeClassesCentral = false;
        centralSearch.style.display = 'block';
        centralSchool.style.display = 'none';
        centralTeachers.style.display = 'none';
        centralClasses.style.display = 'none';
        centralSearch.insertAdjacentHTML('afterbegin', '<h2 class="central-main__header">Поиск</h2>'+
        '<div class="central-main__text">Здесь вы можете найти нужного вам преподавателя, группу или ученика.</div>'+
        '<div class="search__info">Ниже в выпадающем списке выберите объект поиска(педагог, ученик, группа)</div>'+
        '<div class="search__block">'+
            '<div class="search__dropdown-filter">'+
                '<div class="search__attribute-btn">'+
                    '<span class="search__attribute">Педагог </span><i class="fa-solid fa-chevron-down"></i>'+
                '</div>'+
                '<ui class="search__attribute-list">'+
                    '<li class="search__attribute-elem">Педагог</li>'+
                    '<li class="search__attribute-elem">Ученик</li>'+
                    '<li class="search__attribute-elem">Класс</li>'+
                '</ui>'+
            '</div>'+
            '<div class="central-main-search">'+
                '<input type= "search" class="central-main__s"  placeholder="Поиск...">'+
                '<button class="central-main__loop"><i class="fa-solid fa-magnifying-glass"></i></button>'+
            '</div>'+
            '<div class="central__btn-cleanSearch"><i class="fa-solid fa-xmark"></i> </div>'+
        '</div>');
        while (centralSchool.firstChild) {
            centralSchool.removeChild(centralSchool.firstChild);
        }
        while (centralClasses.firstChild) {
            centralClasses.removeChild(centralClasses.firstChild);
        }
        while (centralTeachers.firstChild) {
            centralTeachers.removeChild(centralTeachers.firstChild);
        }
        
    } else if (navbarBtnValue === '2' && activeSchoolCentral === false) {
        activeSearchCentral = false;
        activeSchoolCentral = true;
        activeTeachersCentral = false;
        activeClassesCentral = false;
        centralSearch.style.display = 'none';
        centralSchool.style.display = 'block';
        centralTeachers.style.display = 'none';
        centralClasses.style.display = 'none';
        centralSchool.insertAdjacentHTML('afterbegin', '<h2 class="wisp__header">Заметки</h2>'+
        '<div class="wisp__grid-options">' +
            '<div class="wisp__grid-item wispOption">Заметка</div>' +
            '<div class="wisp__grid-item wispOption">Фамилия</div>' +
            '<div class="wisp__grid-item wispOption">Имя</div>' +
            '<div class="wisp__grid-item wispOption">Отчество</div>' +
            '<div class="wisp__grid-item wispOption">Класс</div>' +
        '</div>')
        createNote();
        while (centralSearch.firstChild) {
            centralSearch.removeChild(centralSearch.firstChild);
        }
        while (centralClasses.firstChild) {
            centralClasses.removeChild(centralClasses.firstChild);
        }
        while (centralTeachers.firstChild) {
            centralTeachers.removeChild(centralTeachers.firstChild);
        }
    } else if (navbarBtnValue === '3' && activeTeachersCentral === false) {
        activeSearchCentral = false;
        activeSchoolCentral = false;
        activeTeachersCentral = true;
        activeClassesCentral = false;
        centralSearch.style.display = 'none';
        centralSchool.style.display = 'none';
        centralTeachers.style.display = 'block';
        centralClasses.style.display = 'none';
        centralTeachers.insertAdjacentHTML('afterbegin', '<h2 class="teachers__header">Преподаватели</h2>' +
        '<div class="teachers-search-block">'+
        '<div class="teachers__dropdown-filter">'+
                '<div class="teachers__attribute-btn">'+
                    '<span class="teachers__attribute">Имя</span><i class="fa-solid fa-chevron-down"></i>'+
                '</div>'+
                '<ui class="teachers__attribute-list">'+
                    '<li class="teachers__attribute-elem">Имя</li>'+
                    '<li class="teachers__attribute-elem">Фамилия</li>'+
                    '<li class="teachers__attribute-elem">Отчество</li>'+
                    '<li class="teachers__attribute-elem">Наука</li>'+
                    '<li class="teachers__attribute-elem">Должность</li>'+
                '</ui>'+
            '</div>' +
        '<div class="teachers-search">'+
            '<input type= "search" class="teachers__s" placeholder="Поиск...">'+
            '<button class="teachers__loop"><i class="fa-solid fa-magnifying-glass"></i></button>'+
        '</div>'+ '</div>'+
        '<div class="teachers__btn-cleanSearch"><i class="fa-solid fa-xmark"></i> </div>'+
        '<div class="teachers__grid-options">'+
            '<div class="teachers__grid-item option">Фото</div>'+
            '<div class="teachers__grid-item option">Фамилия</div>'+
            '<div class="teachers__grid-item option">Имя</div>'+
            '<div class="teachers__grid-item option">Отчество</div>'+
            '<div class="teachers__grid-item option">Наука</div>'+
            '<div class="teachers__grid-item option">Должность</div>'+
        '</div>');
        teachersList();
        while (centralSchool.firstChild) {
            centralSchool.removeChild(centralSchool.firstChild);
        }
        while (centralClasses.firstChild) {
            centralClasses.removeChild(centralClasses.firstChild);
        }
        while (centralSearch.firstChild) {
            centralSearch.removeChild(centralSearch.firstChild);
        }

    } else if (navbarBtnValue === '4'&& activeClassesCentral === false) {
        activeSearchCentral = false;
        activeSchoolCentral = false;
        activeTeachersCentral = false;
        activeClassesCentral = true;
        centralSearch.style.display = 'none';
        centralSchool.style.display = 'none';
        centralTeachers.style.display = 'none';
        centralClasses.style.display = 'block';
        centralClasses.insertAdjacentHTML('afterbegin', '<h2 class="classes__header">Ученики</h2>' +
        '<div class="classes-search-block">'+
        '<div class="classes__dropdown-filter">'+
                '<div class="classes__attribute-btn">'+
                    '<span class="classes__attribute">Имя</span><i class="fa-solid fa-chevron-down"></i>'+
                '</div>'+
                '<ui class="classes__attribute-list">'+
                    '<li class="classes__attribute-elem">Имя</li>'+
                    '<li class="classes__attribute-elem">Фамилия</li>'+
                    '<li class="classes__attribute-elem">Класс</li>'+
                    '<li class="classes__attribute-elem">Отчество</li>'+
                '</ui>'+
            '</div>'+
        '<div class="classes-search">' +
            '<input type= "search" class="classes__s" placeholder="Поиск...">'+
            '<button class="classes__loop"><i class="fa-solid fa-magnifying-glass"></i></button>'+
        '</div>' +'</div>' +
        '<div class="classes__btn-cleanSearch"><i class="fa-solid fa-xmark"></i></div>' +
        '<div class="classes__grid-options">'+
            '<div class="classes__grid-item classesOption">Фото</div>'+
            '<div class="classes__grid-item classesOption">Фамилия</div>'+
            '<div class="classes__grid-item classesOption">Имя</div>'+
            '<div class="classes__grid-item classesOption">Отчество</div>'+
            '<div class="classes__grid-item classesOption">Класс</div>'+
            '<div class="classes__grid-item classesOption">Заметка</div>'+
        '</div>')
        studList();
        while (centralSchool.firstChild) {
            centralSchool.removeChild(centralSchool.firstChild);
        }
        while (centralSearch.firstChild) {
            centralSearch.removeChild(centralSearch.firstChild);
        }
        while (centralTeachers.firstChild) {
            centralTeachers.removeChild(centralTeachers.firstChild);
        }
    }
}

function settings() {
    if (navbarMenuBtn.querySelector('i').classList.contains('fa-chart-bar')) {
        navbar.style.width = '8vw';
        navbarHeaders.forEach( (item) => {
            item.style.display = 'none';
        })
        centralSearch.style.width = '92vw';
        centralSchool.style.width = '92vw';
        centralTeachers.style.width = '92vw';
        centralClasses.style.width = '92vw';
    }
    if (navbarMenuBtn.querySelector('i').classList.contains('fa-bars')) {
        navbar.style.width = '15vw';
        navbarHeaders.forEach( (item) => {
            item.style.display = 'inline-block';
        })
        centralSearch.style.width = '85vw';
        centralSchool.style.width = '85vw';
        centralTeachers.style.width = '85vw';
        centralClasses.style.width = '85vw';
    }
}



let statusSearchMain = true;
document.addEventListener('click', (event) => {
    if(event.target.classList.contains('central-main__loop') || event.target.parentNode.classList.contains('central-main__loop')) {
        if(statusSearchMain === true) {
            statusSearchMain = false;
            let seachValueOne = document.querySelector('.central-main__s').value + '';
            let regSpace = /\s/gi
            let searchAttributeOneReg = document.querySelector('.search__attribute').textContent.toLowerCase() + '';
            let searchAttributeOne = searchAttributeOneReg.replace(regSpace, '');
            settingsSearchmain(searchAttributeOne,seachValueOne);
        }
    }
    if (event.target.classList.contains('central__btn-cleanSearch') || event.target.parentNode.classList.contains('central__btn-cleanSearch')) {
        if(statusSearchMain === false) {
            statusSearchMain = true;
            let searchInputStud = document.querySelector('.central-main__s');
            searchInputStud.value = ''
            let elemMenu = document.querySelector('.teachers__grid-options');
            let elemsGrid = document.querySelectorAll('.teachers__grid-user');
            let elemMenuStud = document.querySelector('.classes__grid-options');
            let elemsGridStud = document.querySelectorAll('.classes__grid-user');
            if(elemMenu) {
                elemMenu.remove();
                elemsGrid.forEach((item) => {
                item.remove();
            })
            } else if(elemMenuStud) {
                elemMenuStud.remove();
                elemsGridStud.forEach((item) => {
                item.remove();
                })
            }
        }
        
    }
    if (event.target.classList.contains('navbar__menu-item') || event.target.classList.contains('navbar__menu-item_header') || (event.target.tagName.toLowerCase() === 'i') && event.target.parentNode.classList.contains('navbar__menu-item')) {
        let headerBtns = document.querySelectorAll('.navbar__menu-item');
        headerBtns.forEach((item) => {
            item.classList.remove('active');
        })
        let target = event.target.classList[0].toLowerCase() === 'navbar__menu-item' ? event.target:event.target.parentNode
        target.classList.toggle('active');
    }

    if (event.target.classList.contains('classes__btn-cleanSearch') || event.target.parentNode.classList.contains('classes__btn-cleanSearch')) {
        let searchInputStud = document.querySelector('.classes__s');
        let userValueStud = searchInputStud.value +''
        let gridElArrStud = document.querySelectorAll('.classes__grid-user');
        let searchAttribute = document.querySelector('.classes__attribute').textContent;
        let teachSelector;
        if (searchAttribute.toLowerCase() === 'имя') {
            teachSelector = '.studName'
        } else if (searchAttribute.toLowerCase() === 'фамилия') {
            teachSelector = '.studSurname'
        } else if (searchAttribute.toLowerCase() === 'класс') {
            teachSelector = '.studClass'
        } else if (searchAttribute.toLowerCase() === 'отчество') {
            teachSelector = '.studThirdname'
        }
        
        statusSearch = false;
        searchList(gridElArrStud,teachSelector,userValueStud);
        searchInputStud.value = ''
    }
    if (event.target === document.querySelector('.classes__loop') || event.target.parentNode === document.querySelector('.classes__loop')) {
        let searchInputStud = document.querySelector('.classes__s');
        let searchAttribute = document.querySelector('.classes__attribute').textContent + '';
        let userValueStud = searchInputStud.value +''
        let gridElArrStud = document.querySelectorAll('.classes__grid-user');
        let teachSelector;
        if (searchAttribute.toLowerCase() === 'имя') {
            console.log('Имя');
            teachSelector = '.studName'
        } else if (searchAttribute.toLowerCase() === 'фамилия') {
            console.log('фамилия');
            teachSelector = '.studSurname'
        } else if (searchAttribute.toLowerCase() === 'класс') {
            console.log('класс');
            teachSelector = '.studClass'
        } else if (searchAttribute.toLowerCase() === 'отчество') {
            console.log('отчество');
            teachSelector = '.studThirdname'
        }
        statusSearch = true;
        searchList(gridElArrStud,teachSelector,userValueStud);
    }
    if (event.target.classList.contains('teachers__btn-cleanSearch') || event.target.parentNode.classList.contains('teachers__btn-cleanSearch')) {
        let searchInputTeach = document.querySelector('.teachers__s');
        let userValueTeach = searchInputTeach.value +''
        let gridElArrTeach = document.querySelectorAll('.teachers__grid-user');
        let searchAttribute = document.querySelector('.teachers__attribute').textContent;
        let teachSelector;
        if (searchAttribute.toLowerCase() === 'имя') {
            teachSelector = '.teachName'
        } else if (searchAttribute.toLowerCase() === 'фамилия') {
            teachSelector = '.teachSurname'
        } else if (searchAttribute.toLowerCase() === 'наука') {
            teachSelector = '.teachSience'
        } else if (searchAttribute.toLowerCase() === 'отчество') {
            teachSelector = '.teahThirdname'
        } else if (searchAttribute.toLowerCase() === 'должность') {
            teachSelector = '.teachRole'
        }
        
        statusSearch = false;
        searchList(gridElArrTeach,teachSelector,userValueTeach);
        searchInputTeach.value = ''
    }
    if (event.target === document.querySelector('.teachers__loop') || event.target.parentNode === document.querySelector('.teachers__loop')) {
        let searchInputTeach = document.querySelector('.teachers__s');
        let searchAttribute = document.querySelector('.teachers__attribute').textContent + '';
        let userValueTeach = searchInputTeach.value +''
        let gridElArrTeach = document.querySelectorAll('.teachers__grid-user');
        let teachSelector;
        if (searchAttribute.toLowerCase() === 'имя') {
            teachSelector = '.teachName'
        } else if (searchAttribute.toLowerCase() === 'фамилия') {
            teachSelector = '.teachSurname'
        } else if (searchAttribute.toLowerCase() === 'наука') {
            teachSelector = '.teachSience'
        } else if (searchAttribute.toLowerCase() === 'отчество') {
            teachSelector = '.teachThirdname'
        } else if (searchAttribute.toLowerCase() === 'должность') {
            teachSelector = '.teachRole'
        }
        statusSearch = true;
        searchList(gridElArrTeach,teachSelector,userValueTeach);
    }
    if (event.target.classList.contains('navbar__menu-item') || event.target.parentNode.classList.contains('navbar__menu-item')) {
        let targetValue;
        if (event.target.classList.contains('navbar__menu-item')) {
            targetValue = event.target.value;
        } else {
            targetValue = event.target.parentNode.value;
        }
        navbarBtnValue = targetValue ;
        activeList();
    }
    if (event.target.classList.contains('search__attribute')) {
        let dropSearchList = document.querySelector('.search__attribute-list');
        let chekUp = document.querySelector('i.fa-chevron-down');
        chekUp.classList.toggle('fa-chevron-down');
        chekUp.classList.toggle('fa-chevron-up');
        dropSearchList.classList.toggle('active__search');
    }
    if (event.target.classList.contains('search__attribute-elem')) {
        if(document.querySelector('i.fa-chevron-down')) {
            let chekUp =  document.querySelector('i.fa-chevron-down') ;
            let dropSearchList = document.querySelector('.search__attribute-list');
            let spanText = document.querySelector('.search__attribute');
            spanText.textContent = event.target.textContent;
            dropSearchList.classList.toggle('active__search');
            chekUp.classList.toggle('fa-chevron-down');
            chekUp.classList.toggle('fa-chevron-up');
        } else if (document.querySelector('i.fa-chevron-up')) {
            let chekUp =  document.querySelector('i.fa-chevron-up');
            let dropSearchList = document.querySelector('.search__attribute-list');
            let spanText = document.querySelector('.search__attribute');
            spanText.textContent = event.target.textContent;
            dropSearchList.classList.toggle('active__search');
            chekUp.classList.toggle('fa-chevron-down');
            chekUp.classList.toggle('fa-chevron-up');
        }
    }
    if (event.target.classList.contains('teachers__attribute')) {
        let dropTeachersList = document.querySelector('.teachers__attribute-list');
        let chekUp = document.querySelector('i.fa-chevron-down');
        chekUp.classList.toggle('fa-chevron-down');
        chekUp.classList.toggle('fa-chevron-up');
        dropTeachersList.classList.toggle('teachers__search');
    }
    if (event.target.classList.contains('teachers__attribute-elem')) {
        if(document.querySelector('i.fa-chevron-down')) {
            let chekUp =  document.querySelector('i.fa-chevron-down') ;
            let dropTeachersList = document.querySelector('.teachers__attribute-list');
            let spanText = document.querySelector('.teachers__attribute');
            spanText.textContent = event.target.textContent;
            dropTeachersList.classList.toggle('teachers__search');
            chekUp.classList.toggle('fa-chevron-down');
            chekUp.classList.toggle('fa-chevron-up');
        } else if (document.querySelector('i.fa-chevron-up')) {
            let chekUp =  document.querySelector('i.fa-chevron-up');
            let dropSearchList = document.querySelector('.teachers__attribute-list');
            let spanText = document.querySelector('.teachers__attribute');
            spanText.textContent = event.target.textContent;
            dropSearchList.classList.toggle('teachers__search');
            chekUp.classList.toggle('fa-chevron-down');
            chekUp.classList.toggle('fa-chevron-up');
        }
    }
    if (event.target.classList.contains('classes__attribute')) {
        let dropClassesList = document.querySelector('.classes__attribute-list');
        let chekUp = document.querySelector('i.fa-chevron-down');
        chekUp.classList.toggle('fa-chevron-down');
        chekUp.classList.toggle('fa-chevron-up');
        dropClassesList.classList.toggle('classes__search');
    }
    if (event.target.classList.contains('classes__attribute-elem')) {
        if(document.querySelector('i.fa-chevron-down')) {
            let chekUp =  document.querySelector('i.fa-chevron-down') ;
            let dropClassesList = document.querySelector('.classes__attribute-list');
            let spanText = document.querySelector('.classes__attribute');
            spanText.textContent = event.target.textContent;
            dropClassesList.classList.toggle('classes__search');
            chekUp.classList.toggle('fa-chevron-down');
            chekUp.classList.toggle('fa-chevron-up');
        } else if (document.querySelector('i.fa-chevron-up')) {
            let chekUp =  document.querySelector('i.fa-chevron-up');
            let dropClassesList = document.querySelector('.classes__attribute-list');
            let spanText = document.querySelector('.classes__attribute');
            spanText.textContent = event.target.textContent;
            dropClassesList.classList.toggle('classes__search');
            chekUp.classList.toggle('fa-chevron-down');
            chekUp.classList.toggle('fa-chevron-up');
        }
    }

    if (event.target === navbarMenuBtn ||  event.target === navbarMenuBtn.querySelector('i')) {
        navbarMenuBtn.querySelector('i').classList.toggle('fa-bars');
        navbarMenuBtn.querySelector('i').classList.toggle('fa-chart-bar');
        settings();
    }

    if (event.target.classList.contains('text-delete') ) {
        event.target.parentNode.firstElementChild.value = '';
    } else if (event.target.classList.contains('fa-trash') && event.target.parentNode.classList.contains('text-delete')) {
        event.target.parentNode.parentNode.firstElementChild.value = '';
    }



    if (event.target.classList.contains('text-open') ) {
        console.log('btn')
        event.target.parentNode.firstElementChild.classList.toggle('active-book');
        event.target.classList.toggle('open-book');
    } else if (event.target.classList.contains('fa-book-open')) {
        console.log('icon')
        event.target.parentNode.parentNode.firstElementChild.classList.toggle('active-book');
        event.target.parentNode.classList.toggle('open-book');
    }

    if (event.target.classList.contains('text-save') || event.target.classList.contains('fa-check-double')) {
        let textElemTarget = event.target.closest('.classes__grid-userText-block').querySelector('.classes__grid-userText-text');
        let nameElemTarget = event.target.closest('.classes__grid-user').querySelector('.studName');
        let surnameElemTarget = event.target.closest('.classes__grid-user').querySelector('.studSurname');
        let thirdnameElemTarget = event.target.closest('.classes__grid-user').querySelector('.studThirdname');
        let classElemTarget = event.target.closest('.classes__grid-user').querySelector('.studClass');
        wispList(nameElemTarget,surnameElemTarget,thirdnameElemTarget,textElemTarget,classElemTarget);
        event.target.parentNode.firstElementChild.value = '';
    }

    if (event.target.classList.contains('wispText-delete') ) {
        console.log('btn')
        let nameKey = event.target.closest('.wisp__grid-user').querySelector('.wispName').textContent;
        let surnameKey = event.target.closest('.wisp__grid-user').querySelector('.wispSurname').textContent;
        deleteKeyLocalStorage(nameKey + surnameKey+ '');
        updateLocalStorage();
        event.target.closest('.wisp__grid-user').remove();
    } else if (event.target.classList.contains('fa-trash') && event.target.parentNode.classList.contains('wispText-delete')) {
        console.log('icon')
        let nameKey = event.target.closest('.wisp__grid-user').querySelector('.wispName').textContent;
        let surnameKey = event.target.closest('.wisp__grid-user').querySelector('.wispSurname').textContent;
        deleteKeyLocalStorage(nameKey + surnameKey+ '');
        updateLocalStorage();
        event.target.closest('.wisp__grid-user').remove();
    }
})


function wispList(elemName, elemSurname, elemThirdName,elemText,elemClass) {

    let noteObject = {};
    noteObject.name = elemName.textContent;
    noteObject.surname = elemSurname.textContent;
    noteObject.thirdname = elemThirdName.textContent;
    noteObject.class = elemClass.textContent;
    noteObject.text = elemText.value + '';
    localStorage.setItem('' + elemName.textContent + elemSurname.textContent, JSON.stringify(noteObject));
    
    updateLocalStorage();
}
function updateLocalStorage() {
    let count = userNoteList.length
    for(let i = 0;i< count;i++) {
        userNoteList.pop();
    }
    for(let i = 0; i< localStorage.length; i++) {
        userNoteList.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    console.log(userNoteList);
}


function createNote() {
    updateLocalStorage();
    userNoteList.forEach((item) => {
        let wispTable = document.querySelector('.wisp__grid-options');
        wispTable.insertAdjacentHTML('afterend', '<div class="wisp__grid-user">' +
            '<div class="wisp__grid-item wispText" datatype="text">' + item.text + "" + '</div>' +
            '<div class="wisp__grid-item wispSurname" datatype="surname">' +  item.surname + '</div>' +
            '<div class="wisp__grid-item wispName" datatype="name">' + item.name +  '</div>' +
            '<div class="wisp__grid-item wispThirdname" datatype="thirdname">' + item.thirdname +  '</div>' +
        '<div class="wisp__grid-item" datatype="class">' + item.class +  '</div>' +
            '<div class="wisp__grid-btns" datatype="btns">' +
            '<button class="wisp__grid-userText-btn wispText-delete"><i class="fa-solid fa-trash"></i></button> ' +
            '</div>' + '</div>')
    })
}
window.addEventListener('load', (event) => {
    activeList();
    updateLocalStorage();
    settings();
});

document.addEventListener('keydown', (event) => {
    if(event.code === 'Enter') { 
        if (navbarBtnValue === '4') {
            let searchClasses = document.querySelector('.classes__s');
            if(document.activeElement === searchClasses) {
                let searchInputStud = document.querySelector('.classes__s');
                let searchAttribute = document.querySelector('.classes__attribute').textContent + '';
                let userValueStud = searchInputStud.value +''
                let gridElArrStud = document.querySelectorAll('.classes__grid-user');
                let teachSelector;
                if (searchAttribute.toLowerCase() === 'имя') {
                    console.log('Имя');
                    teachSelector = '.studName'
                } else if (searchAttribute.toLowerCase() === 'фамилия') {
                    console.log('фамилия');
                    teachSelector = '.studSurname'
                } else if (searchAttribute.toLowerCase() === 'класс') {
                    console.log('класс');
                    teachSelector = '.studClass'
                } else if (searchAttribute.toLowerCase() === 'отчество') {
                    console.log('отчество');
                    teachSelector = '.studThirdname'
                }
                statusSearch = true;
                searchList(gridElArrStud,teachSelector,userValueStud);
            }
        } else if (navbarBtnValue === '3') {
            let searchClasses = document.querySelector('.teachers__s');
            if(document.activeElement === searchClasses) {
                let searchInputTeach = document.querySelector('.teachers__s');
                let searchAttribute = document.querySelector('.teachers__attribute').textContent + '';
                let userValueTeach = searchInputTeach.value +''
                let gridElArrTeach = document.querySelectorAll('.teachers__grid-user');
                let teachSelector;
                if (searchAttribute.toLowerCase() === 'имя') {
                    teachSelector = '.teachName'
                } else if (searchAttribute.toLowerCase() === 'фамилия') {
                    teachSelector = '.teachSurname'
                } else if (searchAttribute.toLowerCase() === 'наука') {
                    teachSelector = '.teachSience'
                } else if (searchAttribute.toLowerCase() === 'отчество') {
                    teachSelector = '.teachThirdname'
                } else if (searchAttribute.toLowerCase() === 'должность') {
                    teachSelector = '.teachRole'
                }
                statusSearch = true;
                searchList(gridElArrTeach,teachSelector,userValueTeach);
            }
        } else if (navbarBtnValue === '1') {
            if(statusSearchMain === true) {
                statusSearchMain = false;
                let mainSearch = document.querySelector('.central-main__s');
                if(document.activeElement === mainSearch) {
                    let seachValueOne = document.querySelector('.central-main__s').value + '';
                    console.log(seachValueOne);
                    let regSpace = /\s/gi
                    let searchAttributeOneReg = document.querySelector('.search__attribute').textContent.toLowerCase() + '';
                    let searchAttributeOne = searchAttributeOneReg.replace(regSpace, '');
                    console.log(searchAttributeOne);
                    settingsSearchmain(searchAttributeOne,seachValueOne);
                }
            }
        }
    }

    if(event.code === 'Escape') {
        if (navbarBtnValue === '3') {
            let searchInputTeach = document.querySelector('.teachers__s');
            let userValueTeach = searchInputTeach.value +''
            let gridElArrTeach = document.querySelectorAll('.teachers__grid-user');
            let searchAttribute = document.querySelector('.teachers__attribute').textContent;
            let teachSelector;
            if (searchAttribute.toLowerCase() === 'имя') {
                teachSelector = '.teachName'
            } else if (searchAttribute.toLowerCase() === 'фамилия') {
                teachSelector = '.teachSurname'
            } else if (searchAttribute.toLowerCase() === 'наука') {
                teachSelector = '.teachSience'
            } else if (searchAttribute.toLowerCase() === 'отчество') {
                teachSelector = '.teahThirdname'
            } else if (searchAttribute.toLowerCase() === 'должность') {
                teachSelector = '.teachRole'
            }
            
            statusSearch = false;
            searchList(gridElArrTeach,teachSelector,userValueTeach);
            searchInputTeach.value = ''
        } else if (navbarBtnValue === '4') {
            let searchInputStud = document.querySelector('.classes__s');
            let userValueStud = searchInputStud.value +''
            let gridElArrStud = document.querySelectorAll('.classes__grid-user');
            let searchAttribute = document.querySelector('.classes__attribute').textContent;
            let teachSelector;
            if (searchAttribute.toLowerCase() === 'имя') {
                teachSelector = '.studName'
            } else if (searchAttribute.toLowerCase() === 'фамилия') {
                teachSelector = '.studSurname'
            } else if (searchAttribute.toLowerCase() === 'класс') {
                teachSelector = '.studClass'
            } else if (searchAttribute.toLowerCase() === 'отчество') {
                teachSelector = '.studThirdname'
            }
            
            statusSearch = false;
            searchList(gridElArrStud,teachSelector,userValueStud);
            searchInputStud.value = ''
        } else if (navbarBtnValue === '1') {
            if(statusSearchMain === false) {
                statusSearchMain = true;
                let searchInputStud = document.querySelector('.central-main__s');
                searchInputStud.value = ''
                let elemMenu = document.querySelector('.teachers__grid-options');
                let elemsGrid = document.querySelectorAll('.teachers__grid-user');
                let elemMenuStud = document.querySelector('.classes__grid-options');
                let elemsGridStud = document.querySelectorAll('.classes__grid-user');
                if(elemMenu) {
                    elemMenu.remove();
                    elemsGrid.forEach((item) => {
                    item.remove();
                })
                } else if(elemMenuStud) {
                    elemMenuStud.remove();
                    elemsGridStud.forEach((item) => {
                    item.remove();
                    })
                }
            }
        }
    }

})

function deleteKeyLocalStorage(keyName) {
    let keys = Object.keys(localStorage);
    for(let key of keys) {
        if(keyName.toLowerCase() == key.toLowerCase()) {
            localStorage.removeItem(key);
            
        }
    }
}





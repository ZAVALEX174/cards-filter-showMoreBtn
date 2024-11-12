window.addEventListener('DOMContentLoaded', () => {
    const optionShowMoreBtn = document.querySelector('.option__show-more');
    const optionBtnHidden = document.querySelector('.option__btn-hidden');
    const resetBtn = document.querySelector('.btn__reset');
    const submitBtn = document.querySelector('.btn__apply');
    const openSidebarBtn = document.querySelector('.burger');
    const sidebar = document.querySelector('.sidebar');
    const cardShowMoreBtn = document.querySelector('.show-more');
    const cardBox = document.querySelector('.cards-holder');
    const cards = Array.from(cardBox.querySelectorAll('.card__link'));
    // console.log(cardShowMoreBtn, cardBox, cards);

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert("Сообщение отправлено!")
    })

// optionShowMoreBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     optionBtnHidden.classList.add('option__btn-visible');
//     optionShowMoreBtn.style.display = 'none';
//     let optionShowMore = optionBtnHidden.scrollHeight;
//     console.log(optionShowMore);
// })

    // кнопка сброс фильтра
    resetBtn.addEventListener('click', (e) => {
        optionBtnHidden.classList.remove('option__btn-visible');
        optionShowMoreBtn.style.display = 'flex';
    })

    // открытие сайт-бара и закрытие
    openSidebarBtn.addEventListener('click', (e) => {
        e.preventDefault();
        sidebar.classList.toggle('sidebar-closes');
        openSidebarBtn.classList.toggle('burger-closes');
    })

    // аккардион
    const widgets = document.querySelectorAll('.widget.widget-height');
    // console.log(widgets);

    widgets.forEach(widget => {
        let title = widget.querySelector('.widget__title');

        title.addEventListener('click', (e) => {
            e.preventDefault();

            //находим элемент, в котором храниться содержимое виджета
            let widgetHeight = widget.querySelector('.widget__body');

            // проверяем, если виджет раскрыт, то по клику закрываем его и удаляем класс для псевдоэлемента
            if (widgetHeight.style.maxHeight) {
                title.classList.remove('widget__title_down');
                widgetHeight.style.maxHeight = null;
            } else {
                // раскрываем виджет и добавляем класс для псевдоэлемента
                title.classList.add('widget__title_down');
                widgetHeight.style.maxHeight = widgetHeight.scrollHeight + "px";

                // показ дополнительных пунктов фильтра по кнопке и увеличение высоты этого блока
                optionShowMoreBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    optionBtnHidden.classList.add('option__btn-visible');
                    optionShowMoreBtn.style.display = 'none';
                    let optionShowMore = optionBtnHidden.scrollHeight;
                    widgetHeight.style.maxHeight = widgetHeight.scrollHeight + optionShowMore + "px";
                })
            }
        })
    })

    // Кнопка показать еще

    window.addEventListener('resize', (e) => {
        if (e.target.window.innerWidth > 1200) {
            response1()
        }
        if (e.target.window.innerWidth <= 1200 && e.target.window.innerHeight > 590) {
            response2()
        }
        if (e.target.window.innerWidth <= 590) {
            response3()
        }
    })

    function openCatalog(g, gg) {
        console.log("g1:", g)
        cardShowMoreBtn.addEventListener('click', (e) => {
            e.preventDefault();

            g += gg;
            const array = Array.from(document.querySelector('.cards-holder').children);
            const visItems = array.slice(0, g);
            visItems.forEach(item => {
                item.classList.remove('hidden');
            })
            if (visItems.length === cards.length) {
                cardShowMoreBtn.classList.add('hidden');
            }
        })
    }

    function response1() {
        if (window.innerWidth > 1200) {
            //если ширина экрана больше 1200рх

            cards.forEach((item, index) => {
                item.classList.add('hidden');
                if (index <= 5) {
                    item.classList.remove('hidden');
                }
                openCatalog(6, 3);
            });
        }
    }

    response1();

    // function response2() {
    //     if (window.innerWidth <= 1200 && window.innerHeight > 590) {
    //         //если ширина экрана меньше или равна 1200рх и больше 590рх, то сначала скрываем кнопку "Показать еще"
    //         cardShowMoreBtn.classList.add('hidden');
    //
    //         //проходим циклом по всем карточкам и сначала скрываем их все
    //         cards.forEach((item, index) => {
    //             item.classList.add('hidden');
    //
    //             //если карточек меньше или равно 6(начинается с index=0), то показываем их
    //             if (index <= 5) {
    //                 item.classList.remove('hidden');
    //             } else if (index > 5) {
    //                 //если карточек больше, чем 6(начинается с index=0), то показываем кнопку "Показать еще"
    //                 cardShowMoreBtn.classList.remove('hidden');
    //             }
    //             openCatalog();
    //         });
    //     }
    // }
    function response2() {
        if (window.innerWidth <= 1200 && window.innerWidth > 590) {
            cards.forEach((item, index) => {
                item.classList.add('hidden');
                if (index <= 5) {
                    item.classList.remove('hidden');
                }
                openCatalog(6, 2);
            });
        }
    }

    response2();

    // function response3() {
    //     if (window.innerWidth <= 590) {
    //         //если ширина экрана меньше или равна 590рх, то сначала скрываем кнопку "Показать еще"
    //         cardShowMoreBtn.classList.add('hidden');
    //
    //         //проходим циклом по всем карточкам и сначала скрываем их все
    //         cards.forEach((item, index) => {
    //             item.classList.add('hidden');
    //
    //             //если карточек меньше или равно 3(начинается с index=0), то показываем их
    //             if (index <= 2) {
    //                 item.classList.remove('hidden');
    //             } else if (index > 2) {
    //                 //если карточек больше, чем 3(начинается с index=0), то показываем кнопку "Показать еще"
    //                 cardShowMoreBtn.classList.remove('hidden');
    //             }
    //             openCatalog();
    //         });
    //     }
    // }
    function response3() {
        if (window.innerWidth <= 590) {
            cards.forEach((item, index) => {
                item.classList.add('hidden');
                if (index <= 2) {
                    item.classList.remove('hidden');
                }
                openCatalog(3, 3);
            });
        }
    }

    response3();
})
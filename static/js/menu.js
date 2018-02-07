function menu(authority) {
    let key = "";
    let finalMenu = '';
    let finalMenuWithSub =  `<li class="no-padding" data-user-level="">
                                <ul class="collapsible collapsible-accordion">`;
    let subMenu = '';
    let active_class = '';

    readTextFile("./assets/js/json/menu.json", text => {
        const data = JSON.parse(text);
        switch (authority) {
            case "1":
                key = "admin";
                break;
            case"4":
                key = "WB";
                break;
            default:
                key = "users";
                break;
        }

        if ((menu.url + ".html") === (appConstants.thisPage)) {
            active_class = "active";
        }
        data[key].forEach(menu => {
            if (!menu.has_sub_menu) {
                finalMenu += `<li class="no-padding ${active_class}" data-user-level="">
                            <a href="${ menu.url }.html" class="waves-effect waves-ripple ${active_class}"><i class="material-icons white-text">${ menu.icon_class }</i>${ menu.menu_name }</a>
                        </li>`;

            } else {
                finalMenuWithSub += `<li class="bold">
                                    <a class="collapsible-header waves-effect waves-ripple has-dropdown">
                                        <span class="material-icons white-text">${ menu.icon_class }</span>${ menu.menu_name }
                                        <i class="material-icons white-text">chevron_right</i>
                                    </a>
                                    <div class="collapsible-body">
                                        <ul>`;
                                        menu.menu_items.forEach(sub_menu => {
                                            finalMenuWithSub += `<li data-user-level="">
                                                            <a href="${ sub_menu.url }.html" class="waves-effect waves-ripple">${ sub_menu.menu_name }</a>
                                                         </li>`;
                });
                finalMenuWithSub += `</ul>
                                    </div>
                                 </li>`;
            }
        });

        finalMenu += finalMenuWithSub +
                        `</ul>
                    </li>`;

        $('.side-nav').append(finalMenu);
        $('.collapsible').collapsible();
    });
}

// function readTextFile(file, callback) {
//     const rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("application/json");
//     rawFile.open("GET", file, true);
//     rawFile.onreadystatechange = function() {
//         if (rawFile.readyState === 4 && rawFile.status == "200") {
//             callback(rawFile.responseText);
//         }
//     }
//     rawFile.send(null);
// }

// $('slide-nav > li').on('click', ()=>{
//     $(this).addClass('active');
// })
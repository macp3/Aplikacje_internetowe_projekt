//Lista dostępnych destynacji ze skróconymi opisami
const destinations = [
    {"name": "Egipt", 
        "Description": "Odkryj magiczny Egipt z Biurem Podróży Dreamly! Zwiedź monumentalne piramidy w Gizie, \
        zachwyć się skarbami Muzeum Egipskiego w Kairze i podążaj śladami faraonów w Dolinie Królów w Luksorze. Odpocznij \
        nad Morzem Czerwonym w luksusowych kurortach Hurghady lub Sharm El-Sheikh, ciesząc się krystalicznie czystą wodą i \
        bogactwem podwodnego świata. Nasze starannie zaplanowane wycieczki zapewnią Ci komfort, bezpieczeństwo i \
        niezapomniane wrażenia. Zarezerwuj swoje wakacje marzeń i odkryj fascynującą historię oraz kulturę starożytnego Egiptu!",
        "minature" : "egipt_miniatura.jpg"
    },
    {"name": "Maroko", 
        "Description": "Odkryj egzotyczne Maroko z Biurem Podróży Dreamly! Zanurz się w tętniącym życiem Marrakeszu, \
        zwiedzaj historyczne medyny Fezu i Casablanki, i przemierzaj majestatyczne wydmy Sahary na wielbłądzie. \
        Odpocznij w malowniczych górach Atlas, odkrywając tradycyjne wioski berberyjskie. Nasze starannie \
        zaplanowane wycieczki zapewnią Ci komfort, bezpieczeństwo i niezapomniane wrażenia. Zarezerwuj \
        swoje wakacje marzeń i poznaj bogatą kulturę oraz niezwykłe krajobrazy Maroka!",
        "minature" : "maroko_minature.jpg"
    },
    {"name": "Turcja", 
        "Description": "Odkryj fascynującą Turcję z Biurem Podróży Dreamly! Zwiedzaj historyczne Stambuł, gdzie Europa\
        spotyka się z Azją, podziwiaj zapierające dech w piersiach krajobrazy Kapadocji i relaksuj się na pięknych \
        plażach Riwiery Tureckiej. Odkryj starożytne ruiny Efezu i zanurz się w termalnych basenach Pamukkale. Nasze\
        starannie zaplanowane wycieczki zapewnią Ci komfort, bezpieczeństwo i niezapomniane wrażenia. Zarezerwuj \
        swoje wakacje marzeń i odkryj bogatą kulturę oraz niezwykłe atrakcje Turcji!",
        "minature" : "Turcja.jpg"
    },
    {"name": "Sri Lanka", 
        "Description": "Odkryj rajską Sri Lankę z Biurem Podróży Dreamly! Zwiedzaj starożytne miasta Anuradhapura i \
        Polonnaruwa, podziwiaj majestatyczną Sigiriyę i relaksuj się na złocistych plażach Bentoty. Odkryj bujne\
        plantacje herbaty w Nuwara Eliya i spotkaj dzikie słonie w Parku Narodowym Yala. Nasze starannie zaplanowane\
        wycieczki zapewnią Ci komfort, bezpieczeństwo i niezapomniane wrażenia. Zarezerwuj swoje wakacje marzeń\
        i poznaj bogatą kulturę oraz przyrodę Sri Lanki!",
        "minature" : "sri_lanka.jpg"
    },
    {"name": "Kenia", 
        "Description": "Odkryj dziką Kenię z Biurem Podróży Dreamly! Doświadcz niezapomnianego safari w Parku Narodowym Masai \
        Mara, podziwiaj Wielką Migrację i spotkaj \"Wielką Piątkę\". Zwiedzaj malownicze jezioro Nakuru, znane z flamingów,\
         oraz wulkaniczne krajobrazy Parku Narodowego Amboseli z majestatycznym Kilimandżaro w tle. Odpocznij na rajskich \
         plażach Mombasy nad Oceanem Indyjskim. Nasze starannie zaplanowane wycieczki zapewnią Ci komfort, bezpieczeństwo \
         i niezapomniane wrażenia. Zarezerwuj swoje wakacje marzeń i odkryj fascynującą przyrodę oraz kulturę Kenii!",
        "minature" : "kenia.jpg"
    },
    {"name": "Tajlandia", 
        "Description": "Odkryj egzotyczną Tajlandię z Biurem Podróży Dreamly! Zwiedzaj tętniący życiem Bangkok, podziwiaj \
        wspaniałe świątynie w Ayutthaya i odpocznij na bajecznych plażach Phuket oraz Krabi. Odkryj bujne dżungle i spotkaj \
        dziką przyrodę w Parku Narodowym Khao Sok, a także delektuj się autentyczną tajską kuchnią. Nasze starannie \
        zaplanowane wycieczki zapewnią Ci komfort, bezpieczeństwo i niezapomniane wrażenia. Zarezerwuj swoje wakacje \
        marzeń i poznaj kulturę oraz piękno Tajlandii!",
        "minature" : "tajlandia.jpg"
    },
    {"name": "Oman", 
        "Description": "Odkryj magiczny Oman z Biurem Podróży Dreamly! Zwiedzaj tętniący życiem Maskat, podziwiaj \
        majestatyczne góry Al-Hadżar i odkrywaj tajemnice pustyni Wahiba Sands. Odwiedź historyczne fortece w \
        Nizwie i relaksuj się na dziewiczych plażach Salali. Nasze starannie zaplanowane wycieczki zapewnią Ci \
        komfort, bezpieczeństwo i niezapomniane wrażenia. Zarezerwuj swoje wakacje marzeń i odkryj bogatą kulturę oraz niezwykłe krajobrazy Omanu!",
        "minature" : "oman.jpg"
    },
    {"name": "Dominikana", 
        "Description": "Odkryj rajską Dominikanę z Biurem Podróży Dreamly! Relaksuj się na białych, piaszczystych \
        plażach Punta Cana i Bayahibe, zanurz się w turkusowych wodach i podziwiaj kolorowe rafy koralowe. \
        Zwiedzaj kolonialne zabytki Santo Domingo, najstarszego miasta w Nowym Świecie. Odkryj bujne lasy \
        tropikalne i malownicze wodospady w regionie Samana. Nasze starannie zaplanowane wycieczki zapewnią\
        Ci komfort, bezpieczeństwo i niezapomniane wrażenia. Zarezerwuj swoje wakacje marzeń i poznaj piękno oraz kulturę Dominikany!",
        "minature" : "dominikana.jpg"
    },

]

function sprawdzPole(pole_id,obiektRegex) {

    //Funkcja sprawdza czy wartość wprowadzona do pola tekstowego
    //pasuje do wzorca zdefiniowanego za pomocą wyrażenia regularnego
    //Parametry funkcji:
    //pole_id - id sprawdzanego pola tekstowego
    //obiektRegex - wyrażenie regularne
    //---------------------------------

    let obiektPole = document.getElementById(pole_id);
    if(!obiektRegex.test(obiektPole.value)) return (false);
    else return (true);

}

function sprawdzBox(box_id)
{
    //Funkcja sprawdza czy przycisk typu checkbox
    //o identyfikatorze box_id jest zaznaczony
    //----------------------------------------

    let obiekt=document.getElementById(box_id);
    return obiekt.checked
}

function registerValidate() {

    //Funkcja realizujaca sprawdzanie całego fomularza
    //wykorzystując funkcje pomocnicze
    //--------------------------------

    var ok=true; //zmienna informująca o poprawnym wypełnieniu formularza

    //Definicje odpowiednich wyrażeń regularnych dla sprawdzenia
    //poprawności danych wprowadzonych do pól tekstowych

    obiektNazw = /^[a-zA-Z]{2,20}$/; //wyrażenie regularne dla nazwiska
    obiektemail =/^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
    obiektHaslo = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    //Sprawdzanie kolejnych pól formularza.
    //w przypadku błędu - pojawia się odpowiedni komunikat

    if (!sprawdzPole("name",obiektNazw))
    { 
        ok=false;
        document.getElementById("name_error").innerHTML="Wpisz poprawnie nazwisko!";
    }
    else document.getElementById("name_error").innerHTML="";

    if (!sprawdzPole("email",obiektemail))
    { 
        ok=false;
        document.getElementById("email_error").innerHTML="Wpisz poprawnie email!";
    }
    else document.getElementById("email_error").innerHTML="";

    if (!sprawdzPole("password",obiektHaslo))
    { 
        ok=false;
        document.getElementById("password_error").innerHTML="Wpisz poprawnie hasło!";
    }
    else document.getElementById("password_error").innerHTML="";

    let password = document.getElementById("password");
    let passwordConfirm = document.getElementById("passwordConfirm");

    if (password.value !== passwordConfirm.value)
    { 
        ok=false;
        document.getElementById("passwordConfirm_error").innerHTML="Hasła muszą się zgadzać!";
    }
    else document.getElementById("passwordConfirm_error").innerHTML="";

    if (!sprawdzPole("password",obiektHaslo))
    { 
        ok=false;
        document.getElementById("password_error").innerHTML="Wpisz poprawnie hasło!";
    }
    else document.getElementById("password_error").innerHTML="";

    //Sprawdza również formularz edycji danych konta, stąd pierwszy warunek
    if (document.getElementById("terms") !== null && !sprawdzBox("terms"))
    { 
        ok=false;
        document.getElementById("termsOfService_error").innerHTML="Musisz zaakceptować regulamin!";
    }
    else document.getElementById("termsOfService_error").innerHTML="";

    return ok;
}

function register() {
    // Funkcja odczytująca pola formularza oraz zapisująca je do LocalStorage w celu przyszłego logowania

    let user = {};
    user.name = document.getElementById("name").value;
    user.secondName = document.getElementById("secondName").value;
    user.email = document.getElementById("email").value;
    user.password = document.getElementById("password").value;
    user.address = document.getElementById("address").value;
    user.postalNumber = document.getElementById("postalNumber").value;
    user.phone = document.getElementById("phone").value;
    user.destinations = [];

    //Funkcja pobiera listę zarejestrowanych użytkowników z LocalStrage
    //następnie jeśli nie ma takiego użytkownika w bazie to dodaje go do listy w localstorage

    //oczywiście ten sposób przetrzymywania danych logowania jest zły pod wieloma względami
    //ale na potrzeby tego projektu jest on wystarczający

    users = JSON.parse(localStorage.getItem("users"));

    freeEmail = true;

    users.forEach(registeredUser => {
        if(registeredUser.email === user.email) {
            freeEmail = false;
        }
    });

    if(freeEmail)
    {
        users.push(user);

        localStorage.setItem("users", JSON.stringify(users));

        document.getElementById("container").innerHTML = "<h1>Dziękujemy za rejestrację w serwisie www.dreamly.pl</h1>"
    }
    else document.getElementById("email_error").innerHTML="Ten email jest już zarejestrowany w bazie";

}

function login() {
    //Funkcja obsługująca logowanie użytkownika
    start();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users"));

    if (JSON.parse(localStorage.getItem("loggedUser")) !== null) {
        document.getElementById("login_error").innerHTML = "Jesteś już zalogowany!";
        return;
    }
    else {
    if (users !== null) {
            for (let index = 0; index < users.length; index++) {
                if (users[index].email === email && users[index].password === password) {
                    localStorage.setItem("loggedUser", JSON.stringify(users[index]));
                    window.location.href = "index.html";
                    return;
                }
            }
        }

        document.getElementById("login_error").innerHTML = "Błędny login lub hasło";
    }
}

function start() {
    //Funkcja dla innych dokumentów niż index sprawdzająca czy użytkownik logował się już w danej sesji, jeśli nie to ustawia odpowiednie parametry
    users = localStorage.getItem("users");

    if (users === null) {
        localStorage.setItem("users", "[]");
    }

    logged = JSON.parse(localStorage.getItem("loggedUser"));

    if (logged !== null) {
        let loginSpace = document.getElementById("loginSpace");
        loginSpace.innerHTML = "<span class=\"hello\" >Cześć "+ logged.name +"!</span>"+ 
        "<a href=\"myAccount.html\"><button class=\"btn btn-outline-light\" style=\"margin-right: 10px;\">Moje konto</button></a>" +
        "<button class=\"btn btn-outline-light\" onclick=\"logout()\">Wyloguj się</button>" 
    }
}

function startAccount() {
    //Funkcja startowa dla dokumentu myAccount, sprawdza czy użytkownik jest zalogowany i pokazuje mu jego zamówione wycieczki
    start();

    logged = JSON.parse(localStorage.getItem("loggedUser"));

    if (logged === null) {
        window.location.href = "loginForm.html";
    }
    else {
        data = ""
        if (logged.destinations.length > 0) {
            logged.destinations.forEach(dest => {
                data += "<div class=\"userDest\"><img src="+ "assets/" +destinations[dest].minature +" style=\"width: 180px; height: auto; border-radius: 25px;\" />" +
                "<h4>"+ destinations[dest].name +"</h4>" +
                "<span>" + destinations[dest].Description +"</span>" +
                "<h5>Status: Nasz agent niedługo skontaktuje się z tobą</h5>" +
                "<div id=\"settings\"><button class=\"btn btn-outline-dark\" onclick=\"deleteDestinationFromUser("+dest+")\" >Zrezygnuj :(</button></div>" +
                "</div>"
            });
            document.getElementById("orderedDestinations").innerHTML = data
        }
        else {
            document.getElementById("orderedDestinations").innerHTML = "Nie zamówiłeś jeszcze żadnej wycieczki :("
        }
    }

    
}

function startDest() {
    //Funkcja dokumentow w folderze destinationPage sprawdzająca czy użytkownik logował się już w danej sesji, jeśli nie to ustawia odpowiednie parametry
    users = localStorage.getItem("users");

    if (users === null) {
        localStorage.setItem("users", "[]");
    }

    logged = JSON.parse(localStorage.getItem("loggedUser"));

    if (logged !== null) {
        let loginSpace = document.getElementById("loginSpace");
        loginSpace.innerHTML = "<span class=\"hello\" >Cześć "+ logged.name +"!</span>"+ 
        "<a href=\"../myAccount.html\"><button class=\"btn btn-outline-light\" style=\"margin-right: 10px;\">Moje konto</button></a>" +
        "<button class=\"btn btn-outline-light\" onclick=\"logout()\">Wyloguj się</button>" 
    }
}

function logout() {
    localStorage.setItem("loggedUser", null);
    window.location.href = "index.html";
}

function addDestinationToUser(destinationIndex) 
{
    logged = JSON.parse(localStorage.getItem("loggedUser"));
    isAdded = false;
    logged.destinations.forEach(dest => {
        if(dest === destinationIndex) {
            document.getElementById("container").innerHTML = "<h2>Ta wycieczka jest już przypisana do twojego konta!</h2>";
            isAdded = true
        }
    });

    if(!isAdded)
    {
        logged.destinations.push(destinationIndex);
        localStorage.setItem("loggedUser", JSON.stringify(logged));
        document.getElementById("container").innerHTML = "<h2>Dziękujemy! Wycieczka została przypisana do twojego konta!</h2>";
    }
}

function deleteDestinationFromUser(destinationIndex) 
{
    //Funcja usuwająca wycieczkę z konta użytkownila
    
    logged = JSON.parse(localStorage.getItem("loggedUser"));

    logged.destinations.splice(logged.destinations.indexOf(destinationIndex),1);

    localStorage.setItem("loggedUser", JSON.stringify(logged));

    window.location.href = "myAccount.html";
}

function startEdit() {
    start();

    logged = JSON.parse(localStorage.getItem("loggedUser"));

    document.getElementById("name").value = logged.name;
    document.getElementById("secondName").value = logged.secondName
    document.getElementById("email").value = logged.email
    document.getElementById("address").value = logged.address
    document.getElementById("postalNumber").value = logged.postalNumber
    document.getElementById("phone").value = logged.phone
    document.getElementById("password").value = logged.password
}

function editAccount() {

    if (window.confirm("Czy na pewno chcesz edytować dane użytkownika?")) {
        logged = JSON.parse(localStorage.getItem("loggedUser"));

        logged.name = document.getElementById("name").value 
        logged.secondName = document.getElementById("secondName").value 
        logged.email = document.getElementById("email").value 
        logged.address = document.getElementById("address").value 
        logged.postalNumber = document.getElementById("postalNumber").value 
        logged.phone = document.getElementById("phone").value 
        logged.password = document.getElementById("password").value 

        localStorage.setItem("loggedUser", JSON.stringify(logged));

        window.alert("Dane zostały zmienione")
        window.location.href = "myAccount.html";
    } 

}

function back() {
    window.location.href = "myAccount.html";
}
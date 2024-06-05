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

    if (!sprawdzBox("terms"))
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

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users"));

    if (users !== null) {
        for (let index = 0; index < users.length; index++) {
            if (users[index].email === email && users[index].password === password) {
                localStorage.setItem("loggedUser", JSON.stringify(users[index]));
                window.location.href = "index.html";
                return
            }
        }
    }

    console.log(email);
    console.log(password);

    document.getElementById("login_error").innerHTML = "Błędny login lub hasło"

}

function startIndex() {
    //Funkcja dla index.html sprawdzająca czy użytkownik logował się już w danej sesji, jeśli nie to ustawia odpowiednie parametry

    users = localStorage.getItem("users");

    if (users === null) {
        localStorage.setItem("users", "[]");
    }

    logged = JSON.parse(localStorage.getItem("loggedUser"));

    if (logged !== null) {
        let loginSpace = document.getElementById("loginSpace");
        loginSpace.innerHTML = "<span class=\"hello\" >Cześć "+ logged.name +"!</span>"+ "<a href=\"loginForm.html\"><button class=\"btn btn-outline-light\">Moje konto</button></a>"
    }

}

function start() {
    //Funkcja dla innych dokumentów niż index sprawdzająca czy użytkownik logował się już w danej sesji, jeśli nie to ustawia odpowiednie parametry
    users = localStorage.getItem("users");

    if (users === null) {
        localStorage.setItem("users", "[]");
    }
}
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

    localStorage.setItem("user", JSON.stringify(user));
}

function login() {
    let logged = JSON.parse(localStorage.getItem("user"));
}
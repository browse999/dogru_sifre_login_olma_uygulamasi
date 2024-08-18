const  Password = '1234';


let GuestPassword = '';

while ( GuestPassword !== Password) {

    GuestPassword = prompt( ' Şifrenizi giriniz');


    if( GuestPassword === Password) {

        alert( 'Giriş başarılı')
    }

        
    else {

        alert('Yanlış Şifre Girdiniz. Tekrar deneyiniz.')
    }

    
}
function iniciarSesion(){
  const usuario = document.getElementById("nombre-usuario").value;
  const contrasena = document.getElementById("contrasena").value;

  validarDatos(usuario, contrasena);
}

var usuarios = ['Guizmo', 'Potazio', 'Hehee'];

var contrasenas = ['abc', '456', '789']; 

function validarDatos(usuario, contrasena){

if(usuario == "" || contrasena == "")
  {
    document.getElementById("alerta").style.visibility = "visible";
    document.getElementById("alerta").innerHTML="<p>Falta llenar algun campo</p>"
  }

  else if(usuario == usuarios[0] && contrasena == contrasenas[0])

  {
    document.getElementById("img-usuario").setAttribute("src","https://scontent.fmex1-1.fna.fbcdn.net/v/t1.0-9/13697004_283018918724669_8858852194066971555_n.jpg?_nc_cat=108&ccb=2&_nc_sid=19026a&_nc_ohc=_0_5dMpMhm0AX88i2E7&_nc_ht=scontent.fmex1-1.fna&oh=f3961068d74d22150bdf3c1ee64cf8db&oe=5FE3299B")
    document.getElementById("alerta").style.visibility = "visible";
    document.getElementById("alerta").innerHTML= `<p>Bienvenida, ${usuario}</p> `
  }

  else if(usuario == usuarios[1] && contrasena == contrasenas[1])
  {
    document.getElementById("img-usuario").setAttribute("src","https://www.flaticon.es/svg/static/icons/svg/2503/2503796.svg")
    document.getElementById("alerta").style.visibility = "visible";
    document.getElementById("alerta").innerHTML=`<p>Bienvenida, ${usuario}</p>`
  }

  else if(usuario == usuarios[2] && contrasena == contrasenas[2])
  {
    document.getElementById("img-usuario").setAttribute("src","https://pbs.twimg.com/media/EZbl7MdXkAI-Q3O.jpg")
    document.getElementById("alerta").style.visibility = "visible";
    document.getElementById("alerta").innerHTML=`<p>Bienvenida, ${usuario}</p>`
  }

  else{
    document.getElementById("alerta").style.visibility = "visible";
    document.getElementById("alerta").innerHTML=`<p>El usuario no existe</p>`

    console.log(usuario)
    console.log(contrasena)
  }
}

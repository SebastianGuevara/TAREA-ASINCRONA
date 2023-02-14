const revisarHojaDeVida = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Hoja de vida recibida");
    }, 1000)
    console.log("Revisando hoja de vida");
    setTimeout(() => {
        const calificacionHojaDeVida = Math.floor(Math.random() * 2);
        (0 === calificacionHojaDeVida) ? reject("Lamentablemente no eres apto para trabajar en esta empresa, mejor ve a buscar empleo en Linio") : resolve("Bienvenido a Mercado Libre, el mejor market place de latinoamerica")
    }, 5000)
})

const elegirEmpresa = async () => {
    console.log("Elegi a la mejor empresa del mundo, Mercado Libre");

    try {
        const revision = await revisarHojaDeVida;
        console.log(revision);
    }
    catch (error) {
        console.error(error);
    }

}

elegirEmpresa();



//Base de datos
const baseDeDatos = [
    
    //Artista Pintor
    {
        id: 1,
        primerNombreV: 'Vasili',
        primerApellidoV: "Kandinski ",
        segundoApellidoV: "Vasílievich",
        correoElectronicoV:'VasilK@gmail.com',
        ciudadV:"Moscú",
        edadV:147,
        rfc:"FGRDSAREP40",
        categoriaV: 'Pintor',
        imagenObra:'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRIM_VcFaX0DlMFvSTvOfSLLixgRSjAiK9GAonXH2E_amq0W1Ip4gHidYi_c7ZIX6Nc',
        imagenPerfilV:'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRIM_VcFaX0DlMFvSTvOfSLLixgRSjAiK9GAonXH2E_amq0W1Ip4gHidYi_c7ZIX6Nc',
        nombreDeUsuarioV:'Vasili Kandinski',
        contrasenaV: '1234',
        semblanzaV: 'Vasili, el genio artístico contemporáneo, sigue deslumbrando al mundo con su creatividad inigualable. Nacido en un rincón remoto, su vida fue un viaje que se refleja en cada pincelada de su obra. Con una paleta rica y expresiva, Vasili crea paisajes oníricos que transportan a los espectadores a universos alternativos llenos de misterio y belleza. Su estilo ecléctico combina la tradición con la vanguardia, fusionando elementos clásicos con innovadoras técnicas que desafían las fronteras convencionales del arte. Vasili, apasionado por la exploración de la naturaleza humana, ha logrado capturar emociones efímeras en lienzos que resisten el paso del tiempo.Aunque su presencia física pueda haberse desvanecido, su espíritu perdura en cada galería que alberga sus obras maestras. Vasili sigue inspirando a generaciones futuras con su habilidad para trascender lo común y conectar con la esencia universal de la creatividad. En la memoria colectiva del arte, Vasili permanece vivo, recordado como un visionario que dejó una marca indeleble en el lienzo de la historia.',
        pasionA: "Espiritualidad y Misticismo",
        pasionB: "Exploración del Color y la Forma",
        pasionC: "Reacción a la Realidad Materialista",
        pasionD: "Influencia de la Música",
    },

    //Artista Escritor
    {
        id: 2,
        primerNombreV: 'Manuel',
        primerApellidoV: "Altamirano",
        segundoApellidoV: "Basilio",
        correoElectronicoV:'valtamirano@gmail.com',
        ciudadV:"Guerrero",
        edadV:190,
        rfc:"89097LLL90OP",
        categoriaV: 'Escritor',
        imagenObra:'https://mnh.inah.gob.mx/img/coleccion/10-129995.jpg',
        imagenPerfilV:'https://mnh.inah.gob.mx/img/coleccion/10-129995.jpg',
        nombreDeUsuarioV:'AltamiranodeTixtla',
        contrasena: "1234",
        semblanzaV: 'Manuel Altamirano Basilio, el prolífico artista contemporáneo, sigue sorprendiendo al mundo con su enfoque único y su capacidad para reinventar las formas artísticas. Nacido en una ciudad vibrante, Basilio desde joven demostró una destreza innata que rápidamente lo catapultó a la escena artística internacional. Su paleta de colores vibrantes y su habilidad para combinar distintas texturas convierten sus obras en un festín visual. Influido por la fusión de culturas que caracteriza su entorno, Basilio ha creado un lenguaje artístico propio que trasciende las barreras tradicionales. Su arte, a menudo introspectivo y reflexivo, invita a los espectadores a explorar las complejidades de la condición humana. Aunque la vida sigue fluyendo en sus venas creativas, Basilio continúa desafiando las expectativas y explorando nuevos horizontes artísticos. Su presencia es palpable en cada galería que alberga sus creaciones, recordándonos que su legado perdurará mucho más allá del lienzo. Manuel Altamirano Basilio es más que un artista; es un narrador visual cuya historia sigue evolucionando con cada trazo de su pincel imaginativo.',
        pasionA: "Compromiso Político y Social",
        pasionB: "Educación y Literatura como Agentes de Cambio",
        pasionC: "Nacionalismo y Rescate de la Identidad Mexicana",
        pasionD: "Estilo Literario y Romanticismo",
    },
    //Artista1 Músico
        {
            id: 3,
            primerNombreV: 'Piotr',
            primerApellidoV: "Ilich",
            segundoApellidoV: "Tchaikovsky",
            correoElectronicoV:'contactoTchaikovsky@gmail.com',
            ciudadV:"San Petersburgo",
            edadV:53,
            rfc:"TCHAIKOVSKY12",
            categoriaV: 'Musico',
            imagenObra:'https://www.biografiasyvidas.com/biografia/c/fotos/chaikovski.jpg',
            imagenPerfilV:'https://www.biografiasyvidas.com/biografia/c/fotos/chaikovski.jpg',
            nombreDeUsuarioV:'Piotr Tchaikovsky',
            contrasena: '1234',
            semblanzaV: 'Piotr Ilich Tchaikovski, nacido el 7 de mayo de 1840 en Votkinsk, Rusia, y aún activo en el mundo musical contemporáneo, sigue siendo un faro de creatividad y emoción en el escenario mundial. Aunque el tiempo ha pasado desde sus primeras composiciones, su presencia musical es tan viva como siempre. Con su característica barba y una mirada penetrante, Tchaikovski encarna la pasión y la profundidad de sus propias composiciones. Si bien sigue siendo un ícono de la música clásica, su influencia se expande a través de géneros y generaciones, demostrando que la grandeza musical trasciende el tiempo. En una era digital, Tchaikovski encontraría formas innovadoras de compartir su música con el mundo, quizás colaborando con artistas contemporáneos o utilizando plataformas de streaming para llegar a un público más amplio. Su habilidad para capturar la esencia de las emociones humanas resonaría de manera poderosa en la actualidad, conectando con audiencias de todas las edades. Aún comprometido con la maestría compositiva, Tchaikovski se destacaría por su capacidad para fusionar lo clásico con lo moderno, explorando nuevas sonoridades sin perder la esencia romántica que caracteriza su obra.',
            pasionA: "Pasión por la Música Rusa",
            pasionB: "Vida Emocional Intensa",
            pasionC: "Influencia de la Literatura y la Danza",
            pasionD: "Búsqueda de Reconocimiento",
        },

    //Artista Escultor 
        {
            id: 4,
            prnombre: 'Miguel',
            primerApellidoV: "Ángel",
            segundoApellidoV: "Buonarroti",
            correoElectronicoV:'contacto.MiguelAngel@gmail.com',
            ciudadV:"Florencia",
            edadV:83,
            rfc:"MANGEL888888",
            categoriaV: 'Escultor',
            imagenObra:'https://www.elcorreo.com/xlsemanal/wp-content/uploads/sites/5/2023/11/miguel-angel-buonarroti-artista-genio-een-la-florencia-de-los-medici-a.jpg',
            imagenPerfilV:'https://www.elcorreo.com/xlsemanal/wp-content/uploads/sites/5/2023/11/miguel-angel-buonarroti-artista-genio-een-la-florencia-de-los-medici-a.jpg',
            nombreDeUsuarioV:'Miguel Angelo',
            contrasena:'1234',
            semblanzaV: 'Miguel Ángel Buonarroti, el titán del Renacimiento, continúa esculpiendo la realidad con la misma maestría que definió su obra en épocas pasadas. Nacido en una Florencia efervescente, su presencia sigue siendo un faro en el panorama artístico contemporáneo. Aunque los siglos hayan pasado, su genio persiste, manifestándose en cada trazo impetuoso y escultural que emana de sus manos. La armonía entre lo divino y lo terrenal, característica distintiva de su obra, sigue cautivando a aquellos que tienen el privilegio de contemplarla. Su destreza en la pintura, la escultura y la arquitectura ha trascendido el tiempo, convirtiéndose en fuente perenne de inspiración. Miguel Ángel, con su eterno compromiso con la excelencia artística, desafía las convenciones contemporáneas y continúa explorando nuevas dimensiones creativas. En cada lienzo o bloque de mármol, Miguel Ángel Buonarroti demuestra que el arte es un diálogo eterno entre el pasado y el presente. Su presencia inmortal se manifiesta en la permanencia de su legado, recordándonos que su genialidad sigue moldeando el mundo artístico con una fuerza que desafía incluso a la propia muerte.',
            pasionA: "Devoción Religiosa",
            pasionB: "Búsqueda de la Perfección Anatómica",
            pasionC: "Pasión por el Arte y la Creatividad",
            pasionD: "Influencia del Humanismo Renacentista",
        },

    //Artista Fotógrafo 
        {
            id: 5,
            primerNombreV: 'Alfred',
            primerApellidoV: "Eisenstaedt",
            segundoApellidoV: "Eisenstaedt",
            correoElectronicoV:'alfredeisenstaedt@gmail.com',
            ciudadV:"Dirschau, Prusia Occidental ",
            edadV:53,
            rfc:"18981995ALEI",
            categoriaV: 'Fotografo',
            imagenObra:'https://th.bing.com/th/id/OIP.RFoDpPsW40UgVF9IrMRDmgAAAA?rs=1&pid=ImgDetMain',
            imagenPerfilV:'https://th.bing.com/th/id/OIP.RFoDpPsW40UgVF9IrMRDmgAAAA?rs=1&pid=ImgDetMain',
            nombreDeUsuarioV:'Alfred Eisenstaedt',
            contrasena:'1234',
            semblanzaV: 'Miguel Ángel Buonarroti, el titán del Renacimiento, continúa esculpiendo la realidad con la misma maestría que definió su obra en épocas pasadas. Nacido en una Florencia efervescente, su presencia sigue siendo un faro en el panorama artístico contemporáneo. Aunque los siglos hayan pasado, su genio persiste, manifestándose en cada trazo impetuoso y escultural que emana de sus manos. La armonía entre lo divino y lo terrenal, característica distintiva de su obra, sigue cautivando a aquellos que tienen el privilegio de contemplarla. Su destreza en la pintura, la escultura y la arquitectura ha trascendido el tiempo, convirtiéndose en fuente perenne de inspiración. Miguel Ángel, con su eterno compromiso con la excelencia artística, desafía las convenciones contemporáneas y continúa explorando nuevas dimensiones creativas. En cada lienzo o bloque de mármol, Miguel Ángel Buonarroti demuestra que el arte es un diálogo eterno entre el pasado y el presente. Su presencia inmortal se manifiesta en la permanencia de su legado, recordándonos que su genialidad sigue moldeando el mundo artístico con una fuerza que desafía incluso a la propia muerte.',
            pasionA: "Capturar Momentos Espontáneos",
            pasionB: "Explorar la Psicología Humana",
            pasionC: "Contar Historias Visuales",
            pasionD: "Documentar la Historia Contemporánea",
        },
    
    ]

     //NombreProducto
    // Obtener referencia al elemento HTML
    const nombreArtistaElement = document.getElementById('nombre-artista');

    // Buscar el objeto con id=1 (Vasili)
    const nArtista = baseDeDatos.find(objeto => objeto.id === 1);

    // Verificar si se encontró el artista
    if (nArtista) {
        // Mostrar el nombre del artista en el elemento HTML
        nombreArtistaElement.textContent = nArtista.nombreDeUsuarioV;
    } else {
        console.log('Artista no encontrado');
    }


     //NombreProducto
    // Obtener referencia al elemento HTML
    const imagenArtistaElement = document.getElementById('imagen-artista-perfil');

    // Buscar el objeto con id=1 (Vasili)
    const nImagen = baseDeDatos.find(objeto => objeto.id === 1);

    // Verificar si se encontró el artista
    if (nImagen) {
        // Mostrar el nombre del artista en el elemento HTML
        imagenArtistaElement.src = nImagen.imagenPerfilV;
    } else {
        console.log('Artista no encontrado');
    }
    
 //NombreProducto
    // Obtener referencia al elemento HTML
    const semblanzaArtistaElement = document.getElementById('semblanza-artista');

    // Buscar el objeto con id=1 (Vasili)
    const nSemblanza = baseDeDatos.find(objeto => objeto.id === 1);

    // Verificar si se encontró el artista
    if (nSemblanza) {
        // Mostrar el nombre del artista en el elemento HTML
        semblanzaArtistaElement.textContent = nSemblanza.semblanzaV;
    } else {
        console.log('Artista no encontrado');
    }


    //NombreProducto
    // Obtener referencia al elemento HTML
    const pasionAArtistaElement = document.getElementById('pasion1');

    // Buscar el objeto con id=1 (Vasili)
    const npasionA = baseDeDatos.find(objeto => objeto.id === 1);

    // Verificar si se encontró el artista
    if (npasionA) {
        // Mostrar el nombre del artista en el elemento HTML
        pasionAArtistaElement.textContent = npasionA.pasionA;
    } else {
        console.log('Artista no encontrado');
    }

    //NombreProducto
    // Obtener referencia al elemento HTML
    const pasionBArtistaElement = document.getElementById('pasion2');

    // Buscar el objeto con id=1 (Vasili)
    const npasionB = baseDeDatos.find(objeto => objeto.id === 1);

    // Verificar si se encontró el artista
    if (npasionB) {
        // Mostrar el nombre del artista en el elemento HTML
        pasionBArtistaElement.textContent = npasionB.pasionB;
    } else {
        console.log('Artista no encontrado');
    }

    //NombreProducto
    // Obtener referencia al elemento HTML
    const pasionCArtistaElement = document.getElementById('pasion3');

    // Buscar el objeto con id=1 (Vasili)
    const npasionC = baseDeDatos.find(objeto => objeto.id === 1);

    // Verificar si se encontró el artista
    if (npasionC) {
        // Mostrar el nombre del artista en el elemento HTML
        pasionCArtistaElement.textContent = npasionC.pasionC;
    } else {
        console.log('Artista no encontrado');
    }

    //NombreProducto
    // Obtener referencia al elemento HTML
    const pasionDArtistaElement = document.getElementById('pasion4');

    // Buscar el objeto con id=1 (Vasili)
    const npasionD = baseDeDatos.find(objeto => objeto.id === 1);

    // Verificar si se encontró el artista
    if (npasionD) {
        // Mostrar el nombre del artista en el elemento HTML
        pasionDArtistaElement.textContent = npasionD.pasionD;
    } else {
        console.log('Artista no encontrado');
    }

    //NombreProducto
    // Obtener referencia al elemento HTML
    const nombreArtistaFotoElement = document.getElementById('nombre-artista-foto');

    // Buscar el objeto con id=1 (Vasili)
    const nNombreFoto = baseDeDatos.find(objeto => objeto.id === 1);

    // Verificar si se encontró el artista
    if (nNombreFoto) {
        // Mostrar el nombre del artista en el elemento HTML
        nombreArtistaFotoElement.textContent = nNombreFoto.nombreDeUsuarioV;
    } else {
        console.log('Artista no encontrado');
    }

    /*
     //NombreProducto
    // Obtener referencia al elemento HTML
    const imagenProductoArtistaElement = document.getElementById('producto-artista');

    // Buscar el objeto con id=1 (Vasili)
    const nImagenProducto = baseDeDatos.find(objeto => objeto.id === 1);

    // Verificar si se encontró el artista
    if (nImagenProducto) {
        // Mostrar el nombre del artista en el elemento HTML
        imagenProductoArtistaElement.src = nImagenProducto.imagenObra;
    } else {
        console.log('Artista no encontrado');
    }
    */
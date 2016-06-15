
var countries = [
    {name: "Austria",
     avSalary: "<p style='text-align: center'>AUSTRIA</p><p>Średnie wynagrodzenie:</p><p style='text-align: center'>&euro; 2124</p>",
        capital: "Wiedeń",
        capitalPosition: {lat: 48.208, lng: 16.374}
    },
    {name: "Belgia",
        avSalary: "<p style='text-align: center'>BELGIA</p><p>Średnie wynagrodzenie:</p><p style='text-align: center'>&euro; 2091</p>",
        capital: "Bruksela",
        capitalPosition: {lat: 50.850, lng: 4.352}
    },
    {name: "Bułgaria",
        avSalary: "<p style='text-align: center'>BUŁGARIA</p><p>Średnie wynagrodzenie:</p><p style='text-align: center'>&euro; 382</p>",
        capital: "Sofia",
        capitalPosition: {lat: 42.698, lng: 23.322}
    },
    {name: "Chorwacja",
        avSalary: "<p style='text-align: center'>CHORWACJA</p><p>Średnie wynagrodzenie:</p><p style='text-align: center'>&euro; 742</p>",
        capital: "Zagrzeb",
        capitalPosition: {lat: 45.815, lng: 15.982}
    },
    {name: "Cypr",
        avSalary: "<p style='text-align: center'>CYPR</p><p>Średnie wynagrodzenie:</p><p style='text-align: center'>&euro; 1574</p>",
        capital: "Nikozja",
        capitalPosition: {lat: 35.185, lng: 33.382}
    },
    {name: "Czechy",
        avSalary: "<p style='text-align: center'>CZECHY</p><p>Średnie wynagrodzenie:</p><p style='text-align: center'>&euro; 793</p>",
        capital: "Praga",
        capitalPosition: {lat: 50.075, lng: 14.438}
    },
    {name: "Dania",
        avSalary: "<p style='text-align: center'>DANIA</p><p>Średnie wynagrodzenie:</p><p style='text-align: center'>&euro; 3100</p>",
        capital: "Kopenhaga",
        capitalPosition: {lat: 55.676, lng: 12.568}
    },
    {name: "Estonia",
        avSalary: "<p style='text-align: center'>ESTONIA</p><p>Średnie wynagrodzenie:</p><p style='text-align: center'>&euro; 903</p>",
        capital: "Tallinn",
        capitalPosition: {lat: 59.437, lng: 24.753}
    },
    {name: "Finlandia",
        avSalary: "<p style='text-align: center'>FINLANDIA</p><p>Średnie wynagrodzenie:</p><p style='text-align: center'>&euro; 2300</p>",
        capital: "Helsinki",
        capitalPosition: {lat: 60.170, lng: 24.938}
    },
    {name: "Francja",
        avSalary: "<p style='text-align: center'>AUSTRIA</p><p>Średnie wynagrodzenie:</p><p style='text-align: center'>&euro; 2180</p>",
        capital: "Paryż",
        capitalPosition: {lat: 48.857, lng: 2.352}
    },
    {name: "Niemcy",
        avSalary: "<p style='text-align: center'>NIEMCY</p><p>Średnie wynagrodzenie:</p><p style='text-align: center'>&euro; 2225</p>",
        capital: "Berlin",
        capitalPosition: {lat: 52.520, lng: 13.405}
    },
    {name: "Grecja",
        avSalary: "<p style='text-align: center'>GRECJA</p><p>Średnie wynagrodzenie:</p><p style='text-align: center'>&euro; 1069</p>",
        capital: "Ateny",
        capitalPosition: {lat: 37.984, lng: 23.727}
    },
    {name: "Węgry",
        avSalary: "<p style='text-align: center'>WĘGRY</p><p>Średnie wynagrodzenie:</p><p style='text-align: center'>&euro; 570</p>",
        capital: "Budapeszt",
        capitalPosition: {lat: 47.498, lng: 19.040}
    },
    {name: "Irlandia",
        avSalary: "<p style='text-align: center'>IRLANDIA</p><p>Średnie wynagrodzenie:</p><p style='text-align: center'>&euro; 2129</p>",
        capital: "Dublin",
        capitalPosition: {lat: 53.350, lng: -6.260}
    },
    {name: "Włochy",
        avSalary: "<p style='text-align: center'>WŁOCHY</p><p>Średnie wynagrodzenie:</p><p style='text-align: center'>&euro; 1590</p>",
        capital: "Rzym",
        capitalPosition: {lat: 41.903, lng: 12.496}
    },
    {name: "Łotwa",
        avSalary: "<p style='text-align: center'>ŁOTWA</p><p>Średnie wynagrodzenie:</p><p style='text-align: center'>&euro; 664</p>",
        capital: "Ryga",
        capitalPosition: {lat: 56.950, lng: 24.105}
    },
    {name: "Litwa",
        avSalary: "<p style='text-align: center'>LITWA</p><p>Średnie wynagrodzenie:</p><p style='text-align: center'>&euro; 585</p>",
        capital: "Wilno",
        capitalPosition: {lat: 54.687, lng: 25.280}
    },
    {name: "Luksemburg",
        avSalary: "<p style='text-align: center'>LUKSEMBURG</p><p>Średnie wynagrodzenie:</p><p style='text-align: center'>&euro; 3149</p>",
        capital: "Luksemburg",
        capitalPosition: {lat: 49.612, lng: 6.132}
    },
    {name: "Malta",
        avSalary: "<p style='text-align: center'>MALTA</p><p>Średnie wynagrodzenie:</p><p style='text-align: center'>&euro; 1021</p>",
        capital: "Valetta",
        capitalPosition: {lat: 35.899, lng: 14.514}
    },
    {name: "Holandia",
        avSalary: "<p style='text-align: center'>HOLANDIA</p><p>Średnie wynagrodzenie:</p><p style='text-align: center'>&euro; 2158</p>",
        capital: "Amsterdam",
        capitalPosition: {lat: 52.370, lng: 4.895}
    },
    {name: "Polska",
        avSalary: "<p style='text-align: center'>POLSKA</p><p>Średnie wynagrodzenie:</p><p style='text-align: center'>&euro; 756</p>",
        capital: "Warszawa",
        capitalPosition: {lat: 52.230, lng: 21.012}
    },
    {name: "Portugalia",
        avSalary: "<p style='text-align: center'>PORTUGALIA</p><p>Średnie wynagrodzenie:</p><p style='text-align: center'>&euro; 1001</p>",
        capital: "Lizbona",
        capitalPosition: {lat: 38.722, lng: -9.139}
    },
    {name: "Rumunia",
        avSalary: "<p style='text-align: center'>RUMUNIA</p><p>Średnie wynagrodzenie:</p><p style='text-align: center'>&euro; 463</p>",
        capital: "Bukareszt",
        capitalPosition: {lat: 44.427, lng: 26.103}
    },
    {name: "Słowacja",
        avSalary: "<p style='text-align: center'>SŁOWACJA</p><p>Średnie wynagrodzenie:</p><p style='text-align: center'>&euro; 708</p>",
        capital: "Bratysława",
        capitalPosition: {lat: 48.148, lng: 17.108}
    },
    {name: "Słowenia",
        avSalary: "<p style='text-align: center'>SŁOWENIA</p><p>Średnie wynagrodzenie:</p><p style='text-align: center'>&euro; 1092</p>",
        capital: "Lublana",
        capitalPosition: {lat: 46.057, lng: 14.506}
    },
    {name: "Hiszpania",
        avSalary: "<p style='text-align: center'>HISZPANIA</p><p>Średnie wynagrodzenie:</p><p style='text-align: center'>&euro; 1734</p>",
        capital: "Madryt",
        capitalPosition: {lat: 40.417, lng: -3.704}
    },
    {name: "Szwecja",
        avSalary: "<p style='text-align: center'>SZWECJA</p><p>Średnie wynagrodzenie:</p><p style='text-align: center'>&euro; 2578</p>",
        capital: "Sztokholm",
        capitalPosition: {lat: 59.329, lng: 18.068}
    },
    {name: "Wielka Brytania",
        avSalary: "<p style='text-align: center'>WIELKA BRYTANIA</p><p>Średnie wynagrodzenie:</p><p style='text-align: center'>&euro; 2312</p>",
        capital: "Londyn",
        capitalPosition: {lat: 51.507, lng: -0.128}
    }

];
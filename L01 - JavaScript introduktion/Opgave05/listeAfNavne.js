const readline = require('readline');

// Create interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let navneListe = ['Per', 'Jens', 'Hans', 'Kasper'];

let aktiv = true;

while (aktiv) {
    console.log("\n--- MENU ---");
    console.log("1. Tilføj et navn");
    console.log("2. Fjern et navn ud fra index");
    console.log("3. Fjern et specifikt navn");
    console.log("4. Overskriv et navn på et index");
    console.log("5. Udskriv alle navne");
    console.log("6. Konkatenér og udskriv alle navne");
    console.log("7. Afslut");
    rl.question('Vælg en mulighed ', (input) => {
        const number = Number(input);

        switch (number) {
            case 1:
                rl.question('Hvad er det nye navn? ', (input) => {
                    let nytNavn = String(input);
                    navneListe.push(nytNavn);
                    rl.close();
                });
                break;
            case 2:
                rl.question('Hvad er indekset ', (input) => {
                    let indeksNavn = Number(input);
                    navneListe.splice[indeksNavn,1];
                    rl.close();
                });
                break;
            case 3:
                rl.question('Hvad er navnet? ', (input) => {
                    let fjernetNavn = String(input);
                    for(let i = 0; i < navneListe.length - 1; i++) {
                        if (navneListe[i] == fjernetNavn) {
                            navneListe.splice[i,1];
                            break;
                        }
                    }
                    rl.close();
                });
                break;
            case 4:
                rl.question('Hvad er indekset ', (input) => {
                    let indeksNavn = Number(input);
                    
                    rl.question('Hvad er navnet ', (input) => {
                    let personNavn = String(input);
                    
                    navneListe[indeksNavn] = personNavn;
                    rl.close();
                    });
                });
                break;
            case 5:
                console.log(navneListe);
                break;
            case 6:
                let KonkatenérListe = '';
                for (let i = 0; i < navneListe.length -1; i++) {
                    KonkatenérListe += navneListe[0];
                }
                console.log(KonkatenérListe);
                break;
            case 7:
                aktiv = false;
                break;
        }
    rl.close();
    });
}


export interface Lokalizacja {
  x: number;
  y: number;
  z: number;
  czas: number;
}

export type MapaCzasoprzestrzenna = (x: number, y: number, z: number, czas: number) => number;

export function znajdzWorek(lokalizacje: Lokalizacja[], mapa: MapaCzasoprzestrzenna): Lokalizacja | null {
    if (lokalizacje.length === 0){
        return null;
    }

    let bestLokalizacja: Lokalizacja = lokalizacje[0];
    let bestLokalizacjaValue: number = mapa(lokalizacje[0].x, lokalizacje[0].y, lokalizacje[0].z, lokalizacje[0].czas);

    if (isNaN(bestLokalizacjaValue)){
        return null;
    }

    for (let i = 1; i < lokalizacje.length; i++){
        let lokalizacja: Lokalizacja = lokalizacje[i];

        let currentValue = mapa(lokalizacja.x, lokalizacja.y, lokalizacja.z, lokalizacja.czas);
        if (currentValue > bestLokalizacjaValue){
            bestLokalizacja = lokalizacja;
            bestLokalizacjaValue = currentValue;
        }
    }

    return bestLokalizacja;
}
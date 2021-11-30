
function PrikazIkone  (ikonaID,sveIkone) {

  let stazaIkone = null;

          sveIkone.map((item) => {
            if (ikonaID === item.id) {
              stazaIkone= item.image
              }
             return null;
        });

         return stazaIkone   
}

export { PrikazIkone }
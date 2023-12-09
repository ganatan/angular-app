let items = [{"name":"Login","field":"login","titleColor":"text-danger","type":"text"},{"name":"Nom","field":"name","type":"select","titleColor":"text-white"},{"name":"Prénom","field":"firstName","titleColor":"text-black","type":"input"},{"name":"Fonction","field":"function","titleColor":"text-primary","type":"checkbox"},{"name":"Application","field":"application","titleColor":"text-danger","type":"checkbox-text"},{"name":"Rôle","field":"role","type":"button"},{"name":"Début","field":"debut"},{"name":"Fin","field":"fin","titleColor":"text-white"}];

// console.log('00000000001:' + items);
// console.log('00000000002:' + JSON.stringify(items));


function getMap(items) {
  items.map((element, index) => {
    console.log("00000000003:" + index);
    console.log("00000000004:" + element);
    console.log("00000000004:" + JSON.stringify(element));
  });
  return items;
}

let tmp = getMap(items);
// console.log('00000000005:' + tmp);
// console.log('00000000006:' + JSON.stringify(tmp));

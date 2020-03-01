let data = {
  layers: [
    {
      id: 0,
      name: "Populasi Laki laki",
      parentLayerId: -1,
      defaultVisibility: false,
      subLayerIds: [1, 2],
      minScale: 0,
      maxScale: 0
    },
    {
      id: 1,
      name: "Populasi Perempuan",
      parentLayerId: 0,
      defaultVisibility: false,
      subLayerIds: null,
      minScale: 0,
      maxScale: 0
    },
    {
      id: 2,
      name: "Jumlah Penduduk",
      parentLayerId: 0,
      defaultVisibility: false,
      subLayerIds: [3],
      minScale: 0,
      maxScale: 0
    },
    {
      id: 3,
      name: "Kepadatan Penduduk",
      parentLayerId: 2,
      defaultVisibility: false,
      subLayerIds: [4],
      minScale: 0,
      maxScale: 0
    },
    {
      id: 4,
      name: "Total TK",
      parentLayerId: 3,
      defaultVisibility: false,
      subLayerIds: null,
      minScale: 0,
      maxScale: 0
    }
  ]
};
function transformToTree(arr) {
  var nodes = {};
  return arr.filter(obj => {
    let id = obj["id"];
    let parentId = obj["parentLayerId"];

    nodes[id] = Object.assign(obj, nodes[id], { subLayerIds: [] });
    (nodes[parentId] = nodes[parentId] || { subLayerIds: [] })[
      "subLayerIds"
    ].push(obj);
    return id === 0;
  });
}

var result = { layers: transformToTree(data.layers) };

console.log(JSON.stringify(result, null, 2));
document.getElementById("myResult").innerHTML = JSON.stringify(result, null, 2);

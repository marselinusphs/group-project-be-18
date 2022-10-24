let EVENT_URL = "https://634e44b7f34e1ed82686e4e4.mockapi.io/event";
let FAVORITE_URL = "https://634e44b7f34e1ed82686e4e4.mockapi.io/favorite";

fetch('https://634e44b7f34e1ed82686e4e4.mockapi.io/event').then((data)=>{
  console.log(data);
  return data.json();
}).then((completedata)=>{
  // console.log(completedata[2].user_id);
  let data1="";
  completedata.map((values)=>{
    data1+=`<div class="card" style="width: 18rem;">
    <img class="card-image" src="${values.gambar}" alt="card-image">
    <div class="card-body">
      <h5 class="card-title">${values.nama_event}</h5>
      <p class="card-date">${values.tanggal}</p>
      <p class="card-time">${values.waktu}</p>
      <p class="card-location">${values.lokasi}</p>
      <button type="button" class="btn btn-primary" onclick="removeFavorite(${values.event_id}) id="btn-remove">Hapus dari favorite</a>
    </div>
</div>`
})
document.getElementById("cards").innerHTML=data1;

}).catch((err)=>{
  console.log(err);
})

function removeFavorites() {
  var list = document.getElementById("cards");
  list.removeChild(list.childNodes[0]);
}

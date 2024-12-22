const quotes = [{
    quote: `"Jika tidak bisa menjadi orang baik, kamu bisa jadi orang gila."`,
    writer: `– Pinterest`
}, {
    quote: `"wawawiwaawiwawiawiiwawawi."`,
    writer: `– Kelinci bisu`
}, {
    quote: `"Aihihihihihihihihi."`,
    writer: `– Bearnad bear`
}, {
    quote: `"Masalah bisa membuat kita menjadi dewasa, maka sering seringlah bermasalah."`,
    writer: `– Goggle`
}, {
    quote: `"Kegagalan adalah keberhasilan yang gagal."`,
    writer: `– Google`
}, {
    quote: `"Jangan tinggalkan yang baik demi yang menarik."`,
    writer: `– King asep`
}, {
    quote: `"Bakar semangatmu dan kau akan kuasai pertarungan."`,
    writer: `– X-Borg`
},]





let btn = document.querySelector("#Qbtn");

let quote = document.querySelector(".quote");

let writer = document.querySelector(".writer");






btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    
    
    quote.innerHTML = quotes[random].quote;

    
    writer.innerHTML = quotes[random].writer;
})

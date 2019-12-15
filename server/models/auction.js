const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    id: Number,//(long) her bir ilana özgün id degeri,
    title: String, //(string) ilan başlığı,
    description: String, //(string) ilan açıklaması,
    price: Number, //(double) ürünün fiyatı,
    has_promotion: Number, //(integer) ilanda doping var ise 1, yok ise 0,
    view_count: Number, //(integer) ilanın görüntülenme sayısı,
    city: String, //(string) ilanın verildiği il,
    town: String, //(string) ilanın verildiği ilçe
    c0: String, //(string) 0 nolu kategori seviyesi,
    c1: String, //(string) 1 nolu kategori seviyesi,
    c2: String, //(string) 2 nolu kategori seviyesi,
    c3: String, //(string) 3 nolu kategori seviyesi,
    c4: String, //(string) 4 nolu kategori seviyesi,
    c5: String, //(string) 5 nolu kategori seviyesi,
    c6: String, //(string) 6 nolu kategori seviyesi
})

module.exports = mongoose.model('Auction', schema)
---
title: Mengenal Restful API
date: "2020-12-10"
---

## Intro
Restful kepanjangan dari _Representasaional State Transfer_ merupakan sebuah pola terstruktur untuk menggambarkan suatu metoda dalam pengolahan data atau berkomunikasi dengan satu dan lainnya. Tujuan dari restful tersebut mennjadikan sistem memiliki performa yang lebih cepat dan mudah dikembangkan.
Sedangkan API itu kepanjangan dari _application programmable interface_ atau sebuah list data yang berfungsi untuk menampilkan data dari sebuah database.

Suatu API dapat dikatakan Restful apabila memiliki fitur sebagai berikut:
- **Client-server**: client menangani bagian front-end dan server manangani bagian backend dimana dapat berdiri sendiri
- **Statelessnes**: tidak adanya client yang disimpan di klien
- **Cachebility**: client dapat mem-cache respons seperti halnya browser cache halaman statis web agar lebih cepat.

## Sejarah Singkat REST
Pencetus pertama kali REST adalah Roy Fielding dalam disertasi PHD-nya pada tahun 2000 dengan judul "_Architectural Styles and the Design of Network-based Software Architectures_" di UC Irvine. Beliau mengembangkan gaya arsiktektur REST-nya secara parallel dengan menggunakan HTTP 1.1 dari tahu 1996-1999, berbasiskan dari desain HTTP yang sudah ada pada tahun 1996.


## Resource Method
Beberapa metode _resource_ penggunaan dari restful API. terbagi menjadi 4 bagian yakni, _create_, _read_, _update_, dan _delete_. 

**_GET_** merupakan _HTTP request_ yang digunakan untuk membaca data dari database. contoh misalnya, _GET_ /user/ : mendapatkan list data user

**_POST_** merupakan salah satu _HTTP request_ digunakan untuk menambahkan data baru dengan menyisipkan data pada body saat dilakukan pengiriman data ke database.
Contoh misalnya, _POST_ /cook : menambahkan atau membuat _record_ masakan baru

**_PUT_** merupakan sebuah _HTTP request_ yang digunakan untuk melakukan _update_ dari sebuah data. Contoh misalnya, _PUT_ /sticker/bet01 : meng-_update_ spesifik data dengan item nama 'bet01'

**_DELETE_** merupakan _HTTP request_ yang biasa digunakan untuk melakuan penghapusan _record_ data di database. Contoh misalnya, _DELETE_ /sticker/BJ004 : melakukan penghapusan suatu data dari database. Contoh misalnya _DELETE_ data produk dengan kode BJ004

[source1](https://www.yudana.id/pengertian-dan-konsep-restful-api-programming/)  
[source2](https://en.wikipedia.org/wiki/Representational_state_transfer)
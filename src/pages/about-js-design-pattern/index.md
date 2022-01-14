---
title: JS Design Pattern yang digunakan pada jQuery
date: "2022-01-15"
---


##Intro
<!-- Halo guys, udah tau belum sprite yang rasanya nyegerin , biar ngga grogi guys dari ekspektasi orang hehe25x-->
Halo, selamat tahun baru 2022 untuk kita semua.
Melanjutkan dari artikel-artikel sebelumnya, penulis ingin membahas tentang salah satu dari beberapa macam _design pattern_ yang digunaka di jQuery

## Lazy initialization
Merupakan salah satu _design pattern JS_ yang mungkin bisa kita temukan di _library JS_ seperti jQuery
Contoh penggunaan _design pattern_ ini adalah seperti dibawah ini sebagai berikut

```
$(document).ready(function() {
  $('div.app').myPlugin();
});
```
Umumnya _design pattern_ ini tergabung kedalam metoda _factory pattern_ dimana mengkombinasikan 3 hal sebagai berikut:
1. penggunan inisial _instance_ 
2. menampung _method instance_ kedalam parameter
3. untuk pemanggilan sebuah _instance object_ pertama kali.

Sebagaimana penggunaannya, _lazy initialization_ merupakan sebuah strategi untuk men-_delay_ sebuah object dari pertama kali _method_ tersebut dipanggil atau sesuatu proeses yang butuh kalkulasi yang besar. Hal ini menjadi istilah evaluasi dalam pemrograman komputer untuk mengacu kepada _instance method_ dari beberapa objek atau sumber lain.

sumber:
[lazy initialization diakses _06:00_, _01-15-2022_](https://en.wikipedia.org/wiki/Lazy_initialization)

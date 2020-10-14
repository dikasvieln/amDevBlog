---
title: Belajar CSS Grid Layout
date: "2020-10-18"
---

## Intro
CSS Grid merupakan salah satu properti layout yang ditawarkan didalam CSS3. Meskipun terbilang baru, layout module tersebut memberikan grid berbasis sistem layout dengan baris dan kolom. Beberapa singkatan property yang tereksplisit dapet dikategorikan antara lain, grid-template-rows, grid-template-columns, dan grid-template-areas. Namun ada juga beberapa singkatan implisit property dari grid layout tersebut yakni, grid-auto-rows, grid-auto-columns, dan grid-auto-flow. Ada juga mengenai property jarak pembatas antara konten kolom dan baris yaitu gutter property terdiri dari grid-column-gap dan grid-row-gap dengan hanya satu value.

Layout CSS Grid seperti halnya table dimana pengguna mudah untuk mengatur element baris dan kolom. Sebagai, elemen dari container grid dapat diposisikan sendiri sehingga benar-benar tumpang tindih dan melapisi, mirip dengan CSS dengan property position. Perbedaan signifikan antara flexbox layout dengan CSS Grid layout yaitu, Flexbox mampu memecahkan tata letak dalam satu dimensi dengan lebih sederhana, dan dengan adanya Grid layout maka mampu memecahkan tata letak 2 dimensi yang rumit. Namun Flexbox dan Grid dengan digunakan sangat baik.

Browser yang mendukung penggunaan properti layout grid adalah Chrome versi 57 keatas, Firefox versi 51 keatas, IE 11+, Edge, dan Safari versi 10.1 keatas. Untuk Mobile/table yakni, Android Chrome 85, Android Firefox versi 79, android versi 81, iOS Safari versi 10.3 keatas

## Basic Konsep 
Layout grid merupakan suatu set dari perpotongan garis horisontal dan vertikal yang mana mendefiniskan sebuah baris dan kolom. Beberapa fitur yang ada pada CSS Grid yaitu

###1. Pengukuran tetap dan flexible 
Pada CSS grid anda dapat menggunakan jenis pengukuran dengan menggunakan ukuran pixel. Namun anda juga bisa menggunakan jenis ukuran satuan seperti persen atau satuan unit baru dalam CSS Grid yakni _fr_

###2. Penempatan Item/Konten
Anda dapat menempatkan item/konten secara presisi dengan menggunakan baris angka, atau mentargetkan suatu area pada grid tersebut. Pada Layout grid juga terangkup sebuah algoritma, dimana untuk mengontrol penempatan item/konten secara tidak explisit. Maksud dari tidak eksplisit disini ada adalah tidak inline.

###3. Kustomisasi tata letak
Pada pengaturan tata letak ini, suatu item/konten mampu diatur agar dibuat sejajar kedalam area grid tersebut. Terkait hal ini item/konten mampu dispesifikasi secara kustomisasi tata letaknya agar dapat sejajar dengan sempurna.

###4. Pengaturan konten yang saling tumpang tindih
Fleksibilitas dalam CSS grid yaitu pengaturan konten yang mampu tumpang tindih dengan satu sama lainnya atau sebagian dalam area grid. Hingga konten tersebut kemudian lapisan layer diatur dengan menggunakan properti z-index.

Grid layout akan menjadi spesifikasi yang hebat apabila jika digabungkan dengan properti kawananannya yakni flexbox.

ref:
[source 1](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)

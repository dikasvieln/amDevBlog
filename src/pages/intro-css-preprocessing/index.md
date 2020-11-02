---
title: CSS Preprocessing
date: "2020-11-04"
---

## Intro
Melanjutkan artikel sebelumnya mengenai HTML _preprocessing_, CSS _preprocessing_ merupakan suatu ekstensi khusus yang dihadirkan untuk menyederhanakan *syntax* CSS. Selain bertujuan untuk penyederhanaan CSS, para pengembang dapat memanfaatkannya untuk merampingkan _code_ CSS dan mempersingkat waktu dalam proses pembuatan website apabila dibandingkan dengan menggunakan CSS _syntax_ biasa.

Di masa kini ada beberapa jenis CSS _preprocessing_ yang telah dapat digunakan oleh banyak pengembang web, yakni LESS, SCSS, Stylus, POSTCSS, dan masih banyak lagi. 

## Keuntungan CSS Preprocessor
Beberapa keuntungan dari penggunaan CSS _preprocessing_ adalah banyaknya tipe-tipe _functional_ seperti layaknya bahasa pemrograman tingkat rendah pada umumnya contoh C/C++, Java dan sebagainya. Dalam hal ini _preprocessor_ mampu menyediakan beberapa fitur seperti _nested syntax_, _variables_, _mixins_, _extends_, dan fungsi matematika semisal, _sin_, _cos_, _tan_. 

Untuk bagian _nested syntax_ yang dimaksud adalah kapabilitas suatu css preprocessing sepert halnya bahasa pemrogramman lainnya yang dimana CSS biasa tidak bisa lakukan. Hal tersebut akan mengizinkan developer untuk mempermudah melakukan perubahan style pada DOM _element_ lebih spesifik dalam 1 lingkup. Dan juga fungsi-fungsi _mixin_ dan _extends_ akan mengurangi beberapa baris code/perulangan DOM _element_ yang tidak dibutuhkan.

```
@base: #c33d3;

.box-shadow(@style, @c) when (iscolor(@c)) {
    -webkit-box-shadow: @style @c;
    box-shadow        : @style @c;
}

.box {
    color: saturate(@base, 5%);
    border-color: lighten(@base, 30%);
    div {
        .box-shadow(0 0 5px, 30%)
    }
}
```
Contoh diatas merupakan permisalan dari suatu syntax SCSS

## Kesimpulan CSS Preprocessor

Secara keseluruhan CSS preprocessor mampu menyediakan beberapa fitur yang menguntungkan dan memberikan berbagai macam fitur cara untuk menyederhanakan _syntax_ CSS.

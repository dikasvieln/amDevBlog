---
title: Mengenal Jenis-Jenis HTML Preprocessing
date: "2020-10-25"
---

## Pengenalan Preprocessing

Ketika sudah terbiasa dengan penggunaan taggar html dan syntax class/id pada stylesheet css, tuntutan yang dihadapi para web developer professional adalah tidak melakukan perulangan penulisan kode terutama untuk merepresentasikan halaman _views_ mereka. Perulangan ini akan memakan banyak sekali baris file, oleh karena itu untuk mengefisiensikannya dibutuhkan penggunaan istilah preprocessing untuk penanganan hal-hal yang bersifat repetitif.

Preprocessor itu sendiri merupakan sebuah program yang mengkonversikan beberapa tipe data menjadi tipe data yang berbeda. Dalam konteks ini penulis akan membahas mengenai beberapa jenis dari HTML preprocessing.

## Jenis-Jenis HTML Preprocessing

### HAML
HAML, atau disebut sebagai _HTML Abstraction Markup Languange_, merupakan sebuah _Markup Language_ yang bertujuan sebagai penyedia gaya penulisan _Markup_ yang tampil cantik namun elegan. HAML menerapkan prinsipal DRY(Don't Repeat Yourself) 

HAML pada umumnya sering digunakan pada bahasa pemrograman ruby khususnya penggunaannya pada rails framework. Hal ini dikarenakan ringkasnya syntax tersebut pada saat pengaplikasiannya yang disertakan dengan beberapa syntax css. Berikut contoh syntax HAML.

```
%body
  %header
    %h1 Hello World
  %section
    %p Lorem ipsum dolor sit amet.
```

### PUG/JADE
PUG yang dulu dikenal dengan JADE merupakan HTML template engine yang ter-*influence* dari HAML. Beberapa fitur pug yang dapat melakukan *statement* kondisi *if* *else* serta melakukan *looping* mampu mengefisiensikan developer untuk meringkaskan code-nya secara rapi dan lebih terstruktur. Berikut contoh penggunaan syntax dari PUG

```
doctype html
html
    head
        //- Invisible comment in head section which will not appear in rendered html
        // Visible comment in head block which will appear in rendered html
        
        <!-- html comment will work fine too, but I don't get the idea! -->
    body
        //-
            Block invisible comment in body section
            which will not appear in rendered html
        //  "Comment can start from this line as well."
            Visible comment in head block 
            which will appear in rendered html.
```

### SLIM
SLIM juga merupakan salah satu template engine dan juga bagian dari HTML preprocessing yang bertujuan untuk meringkaskan syntax tampilan ke beberapa bagian penting. SLIM HTML juga dikenal ke fleksibilitasan penggunaannya dan memang hampir mirip bentuk strutural dari template engine ini dengan PUG. Berikut contoh dari penggunaan SLIM.

```
doctype html
html
  head
    title Slim Examples
    meta name="keywords" content="template language"
    meta name="author" content=author
    javascript:
      alert('Slim supports embedded javascript!')

  body
    h1 Markup examples

    #content
      p This example shows you what a basic Slim file looks like.

      == yield
```

## Konklusi
Pada dasarnya HTML Preprocessing memudahkan para developer untuk mengefisiensikan *code*-nya agar lebih mudah dibaca serta lebih ringkas dalam setiap pengerjaan *coding*. Dikarenakan syntax HTML biasa akan memakan banyak sekali baris apabila didalamnya terdapat *logical statement* yang digunakan. Oleh karena itu, Beberapa contoh dari penggunaan HTML preprocessing atau template engine inilah yang akan menjadi salah satu saran penulis untuk para developer yang sedang belajar tentang *web development*.

URL Sources:   
[source1](https://learn.shayhowe.com/advanced-html-css/preprocessors/)   
[source2](https://stackshare.io/stackups/pug-vs-slim-lang)   
[source3](https://www.slant.co/topics/5427/~html-preprocessors)
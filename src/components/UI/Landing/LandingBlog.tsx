import React from "react";
import LandingBlogItem from "./LandingBlogItem";
import { Card, Typography, useMediaQuery } from "@mui/material";
import { ItemCard } from "../ItemCard";

export default function LandingBlog() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div>
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          background: "transparent",
          margin: "1rem 0rem 3rem 0rem",
          padding: isMobile ? "2rem 0rem 2rem 0rem" : "0rem",
          border: "none",
          boxShadow: "none",
          color: "white",
          opacity: "0.95",
        }}
      >
        <Typography variant="h3">Latest Blog Posts</Typography>
        <Typography variant="h6">
          Check out our latest blog posts and see what we&apos;ve been up to!
        </Typography>
        {list.slice(0, 3).map((item) => (
          <LandingBlogItem
            key={item.filename}
            href={`/blog/${item.filename.split(".")[0]}`}
            post={item.data}
          />
        ))}
      </Card>
    </div>
  );
}

const list = [
  {
    filename: "feshane.mdx",
    data: {
      title: "Feshane Buluşması",
      description:
        "Büyükşehir Belediyesi'nin şehre kazandırdığı mekanlardan bir diğerindeydik bu hafta sonu, daha öncesinde...",
      date: "2024-03-23",
      tags: "sketchwalk, urban sketching, urbansketchersistanbul, uskistanbul",
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSJBPA5l5lz_0yKLuLs7FvzmGek9vsrs5SM4zbrSwdq8hg4JvLDxzmdumzWqxLED18D7bHhsymzrubtzVr0qPc9BagTNjLc14FendECT-w0CMLNCKBqEAu04MHHL_a9uH7n_pLOwUFAHXRQrdeLBblvvKZJVhzE6ln8jN3y2HOJX3Vmmdaxjxh5_nQUfJS/s4032/IMG_9700.jpg",
    },
  },
  {
    filename: "gazi-kosusu.mdx",
    data: {
      title: "Gazi Koşusu Buluşması",
      description:
        "Ne zamandır yapmak istediğimiz buluşmaların en başında Gazi Koşusu buluşmasını bir türlü yapamamıştık,.",
      date: "2024-06-30",
      tags: "sketchwalk, urban sketching, urbansketchersistanbul, uskistanbul",
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgG9SFojtCkqyXB_CulntDldCKEp0uRi0GRwg_RNINvjocvGdTj9UvVIUp2rZ0yiy2q8d3NptJaM17B12-jzV-7ui2U-tAr8w2RDoX6klu_rxDTdsn3l6qAYRnNH8EuI6A-6-2y3u4k5J5ZECNaXlJeI-5emQn0bqm3plL4apqI_TNWK1poOHMLl_zo/w413-h310/IMG_0120.jpg",
    },
  },
  {
    filename: "kuzguncuk.mdx",
    data: {
      title: "Kuzguncuk Buluşması",
      description:
        "Buluşmalardan yana USk İstanbul olarak kendimizi şanslı buluyoruz. Kuzguncuk Buluşması için bir gün...",
      date: "2023-01-13",
      tags: "sketchwalk, urban sketching, urbansketchersistanbul, uskistanbul",
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTWbPBopRc6V49BUK_xDhUXFqC_ZbaebVpiGw_oDbnTMeta5GDPCX40jPO1TmJxdMFY_zhdldNFRPEmt0mgf21sEfvNrsSwlHynSrdgAU6uv7vf6Xo6Cv6GKKuUyNiniBIfVs8DqyuXjvEtsFi5R0P6DcCkt8R79ivS59lsAaPiQPmifBy-sA3RBIFLdpM/w504-h378/IMG_8706.jpg",
    },
  },
  {
    filename: "satral-istanbul.mdx",
    data: {
      title: "Santral İstanbul Buluşması",
      description:
        "Pandemiden önceki son buluşmamız Santral İstanbul'da olmuştu. O günlerde henüz...",
      date: "2024-05-12",
      tags: "sketchwalk, urban sketching, urbansketchersistanbul, uskistanbul",
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiW32D0b4B5UBY3rnvYexQDvRAZr8AK2kRZUc-TW9m8GePQ9T7N8LU1GFN44mdVpowzBiYev_e4MsaULCu1kvG5dRo5sbcWaVrbQgYR2EuEA_Y0KzwnmF_Xs4p1bZYJgHPl4iDbLP9f9hJJTUq7lRedvdRqrbLTO25vy_E9mH-HHRIdQ__lTDEzOAJgBdaR/w443-h306/WTFA6957.JPG",
    },
  },
  {
    filename: "sultanahmet.mdx",
    data: {
      title: "Sultanahmet Buluşması",
      description:
        "İstanbul'da bazen yüzyıllar arasında kaybolabiliyorsunuz, şehrin katmanları arasında sizleri...",
      date: "2023-02-18",
      tags: "sketchwalk, urban sketching, urbansketchersistanbul, uskistanbul",
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhL8FvInKBNgXai3BiuZR7vfs-wxhrEmH8gr20lUKGww-m9bZPdrN0oAiDC6lgma-7yTN_zjIF62f6wJFEiRbRRDbYfAcwy0uBKUqHKo4Kl3QvBHO4qx5QgtGdSpYDGbPiXocsZ6mx0pL1fvpZYBjG4z8YWSDEFxpb4oGbuYBrwqzpwXuMMGcAyXZMVwOfg/w488-h366/IMG_9245.jpg",
    },
  },
  {
    filename: "venedik-sarayi.mdx",
    data: {
      title: "Venedik Sarayı Buluşması",
      description:
        "Bu ay özel bir buluşmamız vardı, Festa della Repubblica kutlamaları için Ankara'da yapılacak...",
      date: "2024-04-03",
      tags: "sketchwalk, urban sketching, urbansketchersistanbul, uskistanbul",
      img: "https://blogger.googleusercontent.com/img/a/AVvXsEi2hAMd1j2Ku0HoAqYyQM33bvEcpnjifKxQ9DWk55oZdjcE9uYPU_xA9z-z_xGQTymq_siGdGc6h7Ak6eLdb6dPEr53Vt4z-8pHqJHqJaiPYHSEck1KEAM9w33FkCCpZDTOJ1oJvr0y74433XiRpUr1RGT65oAhZm53jcRg9ie-QoAQebL4HzLCIambHjr9",
    },
  },
  {
    filename: "yedikule-hisari.mdx",
    data: {
      title: "Yedikule Hisarı Buluşması",
      description: `Geçtiğimiz günlerde "Yedikule'de Gece" etkinliğine davetliydik. Bilmiyorum okurlar arasında`,
      date: "2024-07-19",
      tags: "urban sketching, urbansketchers, urbansketchersistanbul, usk Istanbul, uskistanbul",
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgb3vul2JhKAVaKWES_R0Yd4TFXkx1kVojaPy7SHygrNGIumk2pt22RkjLdGUVK37KyDrZrUMGc4MTCelRXsjoirbqvIa7XMrOF3fCGqprzC5Sjil-RPvfFIskQixti7EP4TzZJH7MBwIdB9c8iAp-YeNrUuqDGSMw8yRJbHxo-xB4B4tXmGnIaQ6Gq/w385-h366/IMG_6143.JPG",
    },
  },
];

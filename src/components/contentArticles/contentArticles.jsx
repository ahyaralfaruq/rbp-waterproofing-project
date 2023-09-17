import React from 'react'
import { Link } from 'react-router-dom'
import DataDummyArticles from '../../data/articles.json'

const ContentArticles = () => {
  // const dummy = [
  //   {
  //     id: 1,
  //     image: 'images/main-bg.webp',
  //     title: 'Jasa pasang membran bakar Jakarta Selatan',
  //     subtitle: `Dengan semakin maraknya pembangunan gedung-gedung bertingkat saat ini dan dengan arsitektur 
  //     serta teknologi yang serba modern pula.`,
  //     desc: `<p>Dengan semakin maraknya pembangunan gedung-gedung bertingkat saat ini dan dengan arsitektur 
  //     serta teknologi yang serba modern pula. menuntut kami kami untuk menyediakan jasa pendukung terhadap ketahanan 
  //     bangunan-bangunan tersebut seperti waterproofing membrane, grouting, flooring hardener, 
  //     perawatan swimming pool (kolam renang) dan lain-lain. berusaha memberikan kualitas dan layanan maksimal untuk setiap pekerjaan kami. 
  //     Memberikan garansi 5 hingga 15 tahun untuk setiap project yang kami kerjakan, dengan tenaga ahli 
  //     yang profesional di bidangnya serta memiliki sertifikasi untuk tenaga ahli dalam setiap masing masing project. 
  //     kami mengajak anda untuk berkonsultasi kepada kami pada setiap permasalahan waterproofing / kebocoran pada beton</p>`,
  //     created_at: "27 juli 2023 09:00:45"
  //   },
  //   {
  //     id: 2,
  //     image: 'images/main-bg.webp',
  //     title: 'Jasa pasang membran bakar Jakarta Utara',
  //     subtitle: `Dengan semakin maraknya pembangunan gedung-gedung bertingkat saat ini dan dengan arsitektur 
  //     serta teknologi yang serba modern pula.`,
  //     desc: `Dengan semakin maraknya pembangunan gedung-gedung bertingkat saat ini dan dengan arsitektur 
  //     serta teknologi yang serba modern pula. menuntut kami kami untuk menyediakan jasa pendukung terhadap ketahanan 
  //     bangunan-bangunan tersebut seperti waterproofing membrane, grouting, flooring hardener, 
  //     perawatan swimming pool (kolam renang) dan lain-lain. berusaha memberikan kualitas dan layanan maksimal untuk setiap pekerjaan kami. 
  //     Memberikan garansi 5 hingga 15 tahun untuk setiap project yang kami kerjakan, dengan tenaga ahli 
  //     yang profesional di bidangnya serta memiliki sertifikasi untuk tenaga ahli dalam setiap masing masing project. 
  //     kami mengajak anda untuk berkonsultasi kepada kami pada setiap permasalahan waterproofing / kebocoran pada beton`,
  //     created_at: "27 juli 2023 18:00:45"
  //   },
  //   {
  //     id: 3,
  //     image: 'images/main-bg.webp',
  //     title: 'Jasa pasang membran bakar Jakarta Barat',
  //     subtitle: `Dengan semakin maraknya pembangunan gedung-gedung bertingkat saat ini dan dengan arsitektur 
  //     serta teknologi yang serba modern pula.`,
  //     desc: `Dengan semakin maraknya pembangunan gedung-gedung bertingkat saat ini dan dengan arsitektur 
  //     serta teknologi yang serba modern pula. menuntut kami kami untuk menyediakan jasa pendukung terhadap ketahanan 
  //     bangunan-bangunan tersebut seperti waterproofing membrane, grouting, flooring hardener, 
  //     perawatan swimming pool (kolam renang) dan lain-lain. berusaha memberikan kualitas dan layanan maksimal untuk setiap pekerjaan kami. 
  //     Memberikan garansi 5 hingga 15 tahun untuk setiap project yang kami kerjakan, dengan tenaga ahli 
  //     yang profesional di bidangnya serta memiliki sertifikasi untuk tenaga ahli dalam setiap masing masing project. 
  //     kami mengajak anda untuk berkonsultasi kepada kami pada setiap permasalahan waterproofing / kebocoran pada beton`,
  //     created_at: "28 juli 2023 03:00:45"
  //   },
  //   {
  //     id: 4,
  //     image: 'images/main-bg.webp',
  //     title: 'Jasa pasang membran bakar Jakarta Timur',
  //     subtitle: `Dengan semakin maraknya pembangunan gedung-gedung bertingkat saat ini dan dengan arsitektur 
  //     serta teknologi yang serba modern pula.`,
  //     desc: `Dengan semakin maraknya pembangunan gedung-gedung bertingkat saat ini dan dengan arsitektur 
  //     serta teknologi yang serba modern pula. menuntut kami kami untuk menyediakan jasa pendukung terhadap ketahanan 
  //     bangunan-bangunan tersebut seperti waterproofing membrane, grouting, flooring hardener, 
  //     perawatan swimming pool (kolam renang) dan lain-lain. berusaha memberikan kualitas dan layanan maksimal untuk setiap pekerjaan kami. 
  //     Memberikan garansi 5 hingga 15 tahun untuk setiap project yang kami kerjakan, dengan tenaga ahli 
  //     yang profesional di bidangnya serta memiliki sertifikasi untuk tenaga ahli dalam setiap masing masing project. 
  //     kami mengajak anda untuk berkonsultasi kepada kami pada setiap permasalahan waterproofing / kebocoran pada beton`,
  //     created_at: "28 juli 2023 12:00:45"
  //   },
  //   {
  //     id: 5,
  //     image: 'images/main-bg.webp',
  //     title: 'Jasa pasang membran bakar Jakarta Pusat',
  //     subtitle: `Dengan semakin maraknya pembangunan gedung-gedung bertingkat saat ini dan dengan arsitektur 
  //     serta teknologi yang serba modern pula.`,
  //     desc: `Dengan semakin maraknya pembangunan gedung-gedung bertingkat saat ini dan dengan arsitektur 
  //     serta teknologi yang serba modern pula. menuntut kami kami untuk menyediakan jasa pendukung terhadap ketahanan 
  //     bangunan-bangunan tersebut seperti waterproofing membrane, grouting, flooring hardener, 
  //     perawatan swimming pool (kolam renang) dan lain-lain. berusaha memberikan kualitas dan layanan maksimal untuk setiap pekerjaan kami. 
  //     Memberikan garansi 5 hingga 15 tahun untuk setiap project yang kami kerjakan, dengan tenaga ahli 
  //     yang profesional di bidangnya serta memiliki sertifikasi untuk tenaga ahli dalam setiap masing masing project. 
  //     kami mengajak anda untuk berkonsultasi kepada kami pada setiap permasalahan waterproofing / kebocoran pada beton`,
  //     created_at: "27 juli 2023 21:43:45"
  //   },
  // ]

  return (
    <>
      {
        DataDummyArticles.data.map((data, keys) => (
          <article key={keys} className='border-t-2 border-green-700 pt-4'>
            <Link to={`/articles/${data.id}`} className='flex flex-col lg:flex-row mb-12'>
              <div className="aspect-square w-full h-full md:w-64 lg:w-48 shrink-0 md:mx-auto md:mb-12 overflow-hidden">
                <img src={`/${data.image}`} alt={`gambar-${data.id}`} className='w-full h-full object-cover' />
              </div>

              <div className="w-full pt-4 pl-0 md:pt-0 md:pl-4">
                <div className="border-b-2">
                  <h3 className='text-xl md:text-2xl font-bold mb-2'>
                    {data.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">
                    { data.created_at }
                  </p>
                </div>

                <div className="relative pb-4">
                  <p className="text-sm md:text-base line-clamp-5">
                    {data.subtitle}
                  </p>
                  <span className="absolute bottom-0 right-1 text-blue-500 text-sm md:text-base ">read more</span>
                </div>
              </div>
            </Link>
          </article>
        ))
      }

      <div className="flex justify-center">
        Pagination
      </div>
    </>
  )
}

export default ContentArticles
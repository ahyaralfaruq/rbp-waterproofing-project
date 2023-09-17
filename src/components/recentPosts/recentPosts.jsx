import React from 'react'
import {AiFillCaretRight} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const RecentPosts = () => {
  const titlePosts = [
    {
      id: 1,
      image: 'images/main-bg.webp',
      title: 'Jasa pasang membran bakar Jakarta Selatan',
      subtitle: `Dengan semakin maraknya pembangunan gedung-gedung bertingkat saat ini dan dengan arsitektur 
      serta teknologi yang serba modern pula.`,
      desc: `<p>Dengan semakin maraknya pembangunan gedung-gedung bertingkat saat ini dan dengan arsitektur 
      serta teknologi yang serba modern pula. menuntut kami kami untuk menyediakan jasa pendukung terhadap ketahanan 
      bangunan-bangunan tersebut seperti waterproofing membrane, grouting, flooring hardener, 
      perawatan swimming pool (kolam renang) dan lain-lain. berusaha memberikan kualitas dan layanan maksimal untuk setiap pekerjaan kami. 
      Memberikan garansi 5 hingga 15 tahun untuk setiap project yang kami kerjakan, dengan tenaga ahli 
      yang profesional di bidangnya serta memiliki sertifikasi untuk tenaga ahli dalam setiap masing masing project. 
      kami mengajak anda untuk berkonsultasi kepada kami pada setiap permasalahan waterproofing / kebocoran pada beton</p>`,
      created_at: "27 juli 2023 09:00:45"
    },
    {
      id: 2,
      image: 'images/main-bg.webp',
      title: 'Jasa pasang membran bakar Jakarta Utara',
      subtitle: `Dengan semakin maraknya pembangunan gedung-gedung bertingkat saat ini dan dengan arsitektur 
      serta teknologi yang serba modern pula.`,
      desc: `Dengan semakin maraknya pembangunan gedung-gedung bertingkat saat ini dan dengan arsitektur 
      serta teknologi yang serba modern pula. menuntut kami kami untuk menyediakan jasa pendukung terhadap ketahanan 
      bangunan-bangunan tersebut seperti waterproofing membrane, grouting, flooring hardener, 
      perawatan swimming pool (kolam renang) dan lain-lain. berusaha memberikan kualitas dan layanan maksimal untuk setiap pekerjaan kami. 
      Memberikan garansi 5 hingga 15 tahun untuk setiap project yang kami kerjakan, dengan tenaga ahli 
      yang profesional di bidangnya serta memiliki sertifikasi untuk tenaga ahli dalam setiap masing masing project. 
      kami mengajak anda untuk berkonsultasi kepada kami pada setiap permasalahan waterproofing / kebocoran pada beton`,
      created_at: "27 juli 2023 18:00:45"
    },
    {
      id: 3,
      image: 'images/main-bg.webp',
      title: 'Jasa pasang membran bakar Jakarta Barat',
      subtitle: `Dengan semakin maraknya pembangunan gedung-gedung bertingkat saat ini dan dengan arsitektur 
      serta teknologi yang serba modern pula.`,
      desc: `Dengan semakin maraknya pembangunan gedung-gedung bertingkat saat ini dan dengan arsitektur 
      serta teknologi yang serba modern pula. menuntut kami kami untuk menyediakan jasa pendukung terhadap ketahanan 
      bangunan-bangunan tersebut seperti waterproofing membrane, grouting, flooring hardener, 
      perawatan swimming pool (kolam renang) dan lain-lain. berusaha memberikan kualitas dan layanan maksimal untuk setiap pekerjaan kami. 
      Memberikan garansi 5 hingga 15 tahun untuk setiap project yang kami kerjakan, dengan tenaga ahli 
      yang profesional di bidangnya serta memiliki sertifikasi untuk tenaga ahli dalam setiap masing masing project. 
      kami mengajak anda untuk berkonsultasi kepada kami pada setiap permasalahan waterproofing / kebocoran pada beton`,
      created_at: "28 juli 2023 03:00:45"
    },
    {
      id: 4,
      image: 'images/main-bg.webp',
      title: 'Jasa pasang membran bakar Jakarta Timur',
      subtitle: `Dengan semakin maraknya pembangunan gedung-gedung bertingkat saat ini dan dengan arsitektur 
      serta teknologi yang serba modern pula.`,
      desc: `Dengan semakin maraknya pembangunan gedung-gedung bertingkat saat ini dan dengan arsitektur 
      serta teknologi yang serba modern pula. menuntut kami kami untuk menyediakan jasa pendukung terhadap ketahanan 
      bangunan-bangunan tersebut seperti waterproofing membrane, grouting, flooring hardener, 
      perawatan swimming pool (kolam renang) dan lain-lain. berusaha memberikan kualitas dan layanan maksimal untuk setiap pekerjaan kami. 
      Memberikan garansi 5 hingga 15 tahun untuk setiap project yang kami kerjakan, dengan tenaga ahli 
      yang profesional di bidangnya serta memiliki sertifikasi untuk tenaga ahli dalam setiap masing masing project. 
      kami mengajak anda untuk berkonsultasi kepada kami pada setiap permasalahan waterproofing / kebocoran pada beton`,
      created_at: "28 juli 2023 12:00:45"
    },
    {
      id: 5,
      image: 'images/main-bg.webp',
      title: 'Jasa pasang membran bakar Jakarta Pusat',
      subtitle: `Dengan semakin maraknya pembangunan gedung-gedung bertingkat saat ini dan dengan arsitektur 
      serta teknologi yang serba modern pula.`,
      desc: `Dengan semakin maraknya pembangunan gedung-gedung bertingkat saat ini dan dengan arsitektur 
      serta teknologi yang serba modern pula. menuntut kami kami untuk menyediakan jasa pendukung terhadap ketahanan 
      bangunan-bangunan tersebut seperti waterproofing membrane, grouting, flooring hardener, 
      perawatan swimming pool (kolam renang) dan lain-lain. berusaha memberikan kualitas dan layanan maksimal untuk setiap pekerjaan kami. 
      Memberikan garansi 5 hingga 15 tahun untuk setiap project yang kami kerjakan, dengan tenaga ahli 
      yang profesional di bidangnya serta memiliki sertifikasi untuk tenaga ahli dalam setiap masing masing project. 
      kami mengajak anda untuk berkonsultasi kepada kami pada setiap permasalahan waterproofing / kebocoran pada beton`,
      created_at: "27 juli 2023 21:43:45"
    },
  ]
  return (
    <section className="relative bg-white w-full p-4 mb-5">
      <h3 className='text-xl md:text-2xl font-bold border-b-2 pb-2' title='Post Terkini'>
        Recent Posts
      </h3>
      <div className="h-1 w-full bg-gradient-to-r from-green-700 to-slate-300"></div>

      <ul className='mt-5'>
        {
          titlePosts.map((post, key) => (
            <li key={key} className='flex items-center gap-2 mb-3 hover:text-green-700'>
              <AiFillCaretRight className='text-sm md:text-base w-2 h-2 md:w-3 md:h-3 shrink-0' />
              <Link to={`/articles/${post.id}`} className='text-sm md:text-base text-inherit'>
                {post.title}
              </Link>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default RecentPosts
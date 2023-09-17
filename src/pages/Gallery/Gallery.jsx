import React from 'react'

const Gallery = () => {
  const  dummy = [
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
      created_at: "27 juli 2023 18:00:45"
    },
    {
      id: 3,
      image: 'images/main-bg.webp',
      title: 'Jasa pasang membran bakar Jakarta Barat',
      created_at: "28 juli 2023 03:00:45"
    },
    {
      id: 4,
      image: 'images/main-bg.webp',
      title: 'Jasa pasang membran bakar Jakarta Timur',
      created_at: "28 juli 2023 12:00:45"
    },
    {
      id: 5,
      image: 'images/main-bg.webp',
      title: 'Jasa pasang membran bakar Jakarta Pusat',
      created_at: "27 juli 2023 21:43:45"
    },
  ]

  return (
    <section className="relative bg-white w-full lg:w-3/5 p-5">
      <h1 className="text-2xl md:text-4xl font-bold mb-4" title='Gallery'>Gallery</h1>

      <div className='flex flex-wrap gap-4'>
        {
          dummy.map((data, keys) => (
            <div key={keys} className='h-full width-with-gap aspect-square'>
              <figure className="relative w-full h-full overflow-hidden">
                <img src={`/${data.image}`} alt={`gambar-${data.id}`} className='w-full h-full object-cover' />
                {/* <figcaption className='absolute bottom-0 left-0 right-0 bg-black opacity-50'>
                  <p className='text-sm md:text-base font-bold relative text-white text-center'>
                    {data.title}
                  </p>
                </figcaption> */}
              </figure>
            </div>
          ))
        }        
      </div>
    </section>
  )
}

export default Gallery
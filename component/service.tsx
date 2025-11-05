"use client";

export default function Services() {
  return (
    <section id="service" className="py-16 md:py-24">
      {/* Judul Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-white">
          My Services
        </h2>
      </div>

      {/* Grid Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Residential Interior Design",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAPskbqu3cU9NjS4E6wMDbfdXs8Gi3zkD8ENfw2NutNKPwgLfNp8onNYE6UWd2rJVMjgBI3n6sLxkRb5WtFmzjMdgtcKOaEKVT95m20af3ceRkCtZP9U2BG_tDfM7zEuZAGQLJLKq03d5IJSnnskVUf0iP9rjMA8WbFC4jNwnjtbLvtnwgold8LGsvpBXo5f313lcli1sMK13uBGQn_Bb_yXPaXXZOkDvGCKUIxM6JDA5WoO3EgYLwLPTNNKhVgYF776dCKJwMLdlv5",
          },
          {
            title: "Workspace & Commercial Design",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDQFp4izx46Z4vYA87FD8k5MJ2xZwn2mBFeLRREjXuwzM_j0DXG7M1voDhyAbcdRZytEMe8Ytizj8ZFIX2-E4xoPvjNHc-V72q_Hk3ZRCb3O_ReaZ--p9ntEUH7_KwPdHXJmp5aqJC2CYK5wNQ9yK7XbyrJztJRSZBoVeDxiOukSUar1vltzI_1kFAnUOVvGDHXpanLJnsED_JPekS-9C9KmViKqR-IWL9-jazdjSyOjZg7WKR38Dx7zTL54W1MgQ17K78rDmLLxBrD",
          },
          {
            title: "3D Visualization",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCQrJnnaBROoCxIse9_XLjkw_DR-Tb27za4a4BsXuF16mlu6VbEQy06rQiKCm8UBpFY6xWTwTlXwV3_Bu_m8z3pme8jyvbYtG47m0wJ_oOJN9W_yRlvueQgDT1zLtX7AU6eYwXFn5jMFpiK4WYMpJ82tTPoHZu7v0uxvlpOoJtD5tHq8fKuQ8xk18Zjjn3FFQAA1aLm4NY14vYNWI4BG4o9cdyRrg9sxXw0Yce9d-0C2_1g9I9_4Fv2ZvDVz3whQU-4zpHDdjqtUEPH",
          },
          {
            title: "Design Consultation",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBCpMY_gnpRIswu525jE5UVQPGhQpjG9-JNQDwUobIJ8xIATiMbyNIPPdUTJd3_gHvTgF0lXXGAVxCjfOOvV-OJAuat5ct4IcoS77nJDaQw0TytsXQEnOhvjLKR9IEbmgC8NG-0tyRi8mE2_fwO2WEDR9EHiRV2iwQSWcSxjYnXrjlkTu2bsjir0MXQPYaizTq7vgyXyW4mvGcgHMIenfL9HnJ8W-7kBJWY3OlPENGszReKyMTwbIFR_R5PFPfRWJwC2Of3rYfRWWN7",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl rounded-xl"
          >
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{ backgroundImage: `url("${service.image}")` }}
            />
            <p className="font-normal sm:font-semibold md:font-semibold text-sm sm:text-base md:text-lg text-stone-900 dark:text-white">
              {service.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

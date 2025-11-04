import React from "react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sophia Carter",
      date: "2023-08-15",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBIM_VUsZXab9pgLrHzkQ-35CVswqJMTZyduYgroyPWZDPKbNJiO0T9sMiR4-fZpCkh8MTXXUcuIBgOR-HuWVBZAqBke8sCdKnVKYp3fLgB6bMHYgrGqNOnsG0rFa0oQClhTWZrc8s_d2QDQN29XSmCyAjKBqKv0dfx3DyWTI5K-T8Rkz3oaS7gPsjsuvarXaE0hGhQ2q7OBmBp30spaxybe8mn5YpjZc3HkTHqUGzhq5f0-GsY_n_i5-QXWOURQPzUGeJYrww3Wtum",
      text: "bono transformed my living space into a haven of tranquility and style. His attention to detail and understanding of my preferences were exceptional.",
    },
    {
      name: "Ethan Bennett",
      date: "2023-07-22",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBUFJ7AkeydBnhBUE6usqmgSDMZdkEBUJlUmiLtBKnA4jnvON_guzhNDOi4rLYfV-ZD9UPDmwwmjJ0pyUz_50d_Nu3TpbM5Proiyzd3v3q3rAZxis--kHJW1kx0IkOg2wAi9aGSqqi3BYpw_t-YZOK_8N4KaFAfPlV3wI_bcj5xzj4XbeOweAwMbJ3J8OCuks9hSXYsh0ciu7kk_b4H8S2s2xP8IZ2-OZ-2xx5ClyQmj_JKn6dULNX1v4QmkenEc4r2NpW27jAABbAL",
      text: "Working with Bono was a seamless and enjoyable experience. He brought my vision to life with creativity and professionalism.",
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-white">
          Testimonials
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-primary/20 dark:bg-primary/10 p-8 rounded-xl space-y-4"
          >
            <div className="flex items-center gap-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                style={{
                  backgroundImage: `url("${item.image}")`,
                }}
              />
              <div>
                <p className="font-semibold text-stone-900 dark:text-white">
                  {item.name}
                </p>
                <p className="text-sm text-stone-500 dark:text-stone-400">
                  {item.date}
                </p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex gap-1 text-yellow-500">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
                  </svg>
                ))}
            </div>

            <p className="text-stone-600 dark:text-stone-300">“{item.text}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

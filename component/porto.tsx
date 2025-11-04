import React from "react";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: "Modern Living Room",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAyRzvK7zmpcn4Vu3UC7P3teNEjSYKPQ84o3XFTS1X3g91g6c-4lTTz8K9cTtA4bzm3Dq9-xowumgrf6qJFip97FYVIiM2WTCIYhLlCdNOKsuMLPIGKPKPZZ0CizAJ8yoMCt-cg2camY4wZpRaBlCjMissqxB4RlXWM6enNRPwmfJ74044-mYj5MGqsmjZGgPS1R9RPeCn6oAE1yyp_PrhhTHMZsrgPkUdQy2jrAD6izMGAfTyLEOJg9B9O-NJi439xw526bwX8Nsxg",
    },
    {
      title: "Minimalist Bedroom",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAP9mbdT8uCTlwa4dpUr7vj6vkZjp6PXUH1whZcSCjelgZfheDF5HG-uSyTHw9zU02Fk8ANoy0VQHZFieNwnKFq5Je44yiU8KK37PgNuwt3iBrhj_VcCGbddd3N1JzeNhTYFLSGSpbHO3jOy3oUD__CrtcAKu8-E3xHEtK81O4L9b1t04djXwyBLWhEpxYKcLa5tHCsVK2IpNRVkzLAw62crrgqfZwIfwS1OmIHjx1qBIBAnh8B3BpF0fNDQ7fDe13cUz27nVQJrd_-",
    },
    {
      title: "Contemporary Kitchen",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAknsAkPN_s3WB2siVlTJZrLjyeePj-fTFTgTFdmy61d2bHgQL3AVmAx4fpX96VQs3qzvOgxp06VlLvWYo4BGeeN-zfbpn3WzSiaCMivHM05fj0npfSw6-HsBKDsF_HuwMMj-Hlx7G53tu7BOK8NhLWV5Dl0MDg5qyeOcOW2gQwGL6weLSIPmOpzmFG25dHHVxlmxnPsRlGeL8m9SWID4b_Iobi4lj9gikxa_joPLJspnxrsSYOVGtQAI9M8Zt3P2WDWuLA2Eu5cF78",
    },
    // {
    //   title: "Elegant Dining Room",
    //   image:
    //     "https://lh3.googleusercontent.com/aida-public/AB6AXuBAgVvxdvzNBibdFSijC9JQeZtL5oQg3vGGQYtcsmvT8CCCgc1WPqLTwHD8rfRbCCPxmKbGaRRXU-iBtDYeRp1qdA43ac2sMEujeYwDZztZzijwOur-mUSFj-8baw9qnolBKsdUdASGo4dWC9dVnE-N8YRXgOmEU4TUnv6zZfxI2zRO7GWdk3S6h79-7Nf-h-2dAM2Psfu3Ds4MAGXH4dEPGO9o6tidvGpqvfs-Vm0_GGYBetfag1JKrZmki5c6pySSWFZQRnEcCGLt",
    // },
    // {
    //   title: "Cozy Home Office",
    //   image:
    //     "https://lh3.googleusercontent.com/aida-public/AB6AXuDFX34nMCY8R6uQJkxFAa0CCzYmj3iDB0I21KFLVmRjYZIijfaJzrBjbBtIj44KlcI2clOcYSEQECePn7P8NnmDTKy8m-v7sLjUcwTyhMG4Tk6-iQjsiDmLqt1viFCazxx7jXaxXFIZfkhKyAva8N1NupC8o0Q-BeJmgOploispQ86lQIcTpNmt3cfwrHpU4jwAI0ZnhedwhqjjpZASHaraR_0dg5jLQBsofPsSXDr22xkn0MtW8mwBUUIDdAWVwQgMzMNEK9rP-04q",
    // },
    // {
    //   title: "Luxury Bathroom",
    //   image:
    //     "https://lh3.googleusercontent.com/aida-public/AB6AXuAlqFxEJPws2xNTO2DTSKx72yPisBRx16BT-buuO7AoWMJUD2u0IA6fEmdjvS5fmZvuZlXIFqFAbMf7TJAE2TTI3l9x4mmjcOhLvowjmy7ZefkZkTKg4z2_Z-_97Hgg-jqr9gjpwZFlKo7utNhG9t-r1KS6SZahucZ0WtllFEcZtHCFqW34LnTQ9PZdPJe079xX_0XrgxT5jH_i3pcPFY4w1wq7E0ThV0W0UdaIFd1dazxRsw_0Se9l8rAPt24FKD52VK8qk3BW1di_",
    // },
    // {
    //   title: "Urban Loft Design",
    //   image:
    //     "https://lh3.googleusercontent.com/aida-public/AB6AXuAznbdU0WRPsF_zuWYAJjYJyh50HxIc1LeF9xeeuc-JddO7tl2131tqj9OjwUXu1BqynAkDiZvnpitIRL1-wF8SzJqL0FscPvHon32n4nFYbFPYLJ4ICfvzaWLUJfKmwMu8zJu3VywwlY1UyUfhHjh-8OwNFJ5DcqHS_pElhv2Ed2U6pf-beEa58LZyLSWqin3lNmDGCs-0dT0pbcWjKf3ZphSRn1J8utJpJZRkiR-_Lnxgyn2m8WD4RC-fc_Zz8Bwnz-h36CWXf_CA",
    // },
    // {
    //   title: "Scandinavian Style Apartment",
    //   image:
    //     "https://lh3.googleusercontent.com/aida-public/AB6AXuB9dI6x20-HTa_lxuYWdfNI9ETqUXYwMPaAdMf3GRYNnzE08V5E_mIZnkbfSIYwgamNzTlxZ_AuS1EJLwiRNZUNn7DVHRhzEjGJ0h0rBzwdGq510uUTi-JqkroMKOQEOX58DVEQGwa2kvdeUACiam5UzCjDII_wRfwk7-saWKbJ1tGoCgPpuM2Nkur85Lk_ZsAdOqmtt9Iwg6BFwJ1dcj4MMAeV_jtbP4SMxUXZj8Dqq_hRfr5-bEq14w2FzemT3hj0dFGbSSYBzBA2",
    // },
  ];

  return (
    <section id="portofolio" className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-white">
          Portfolio
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolioItems.map((item, index) => (
          <div key={index} className="group relative overflow-hidden rounded-xl">
            <div
              className="bg-cover bg-center flex flex-col justify-end p-6 aspect-[3/4] transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="relative text-white text-lg font-bold">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;

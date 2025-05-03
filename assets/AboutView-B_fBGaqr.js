import {
  d as n,
  o as i,
  c as r,
  a as d,
  b as a,
  e as l,
  w as c,
  r as p,
  f as u,
  g as m,
  _ as v,
} from './index.js'
const f = { class: 'about' },
  b = { class: 'container mission-section animate', 'data-delay': '400' },
  x = n({
    __name: 'AboutView',
    setup(h) {
      return (
        i(() => {
          const o = document.querySelectorAll('.animate'),
            e = new IntersectionObserver(
              (t) => {
                t.forEach((s) => {
                  s.isIntersecting && (s.target.classList.add('visible'), e.unobserve(s.target))
                })
              },
              { threshold: 0.2, rootMargin: '0px 0px -50px 0px' },
            )
          o.forEach((t) => {
            e.observe(t)
          })
        }),
        (o, e) => {
          const t = p('router-link')
          return (
            m(),
            r('div', f, [
              e[3] ||
                (e[3] = d(
                  '<section class="hero animate" data-delay="100" data-v-025e8f8d><div class="hero-content" data-v-025e8f8d><h1 class="hero-title" data-v-025e8f8d>À propos de Sona</h1><p class="hero-subtitle" data-v-025e8f8d> Découvrez notre mission : allier expertise en kinésithérapie et passion pour les remèdes naturels. </p></div></section><section class="container details-section" data-v-025e8f8d><div class="details-content" data-v-025e8f8d><div class="text-content animate" data-delay="200" data-v-025e8f8d><h2 class="section-title" data-v-025e8f8d>Notre histoire</h2><p class="section-text" data-v-025e8f8d> Je suis Sona, kinésithérapeute diplômé avec plus de 10 ans d’expérience dans la rééducation et le bien-être. Ma passion pour la nature m’a conduit à explorer les bienfaits des remèdes traditionnels. Aujourd’hui, je combine ces deux univers pour offrir des soins professionnels et des produits médicinaux naturels, fabriqués à partir d’ingrédients biologiques et locaux. </p><p class="section-text" data-v-025e8f8d> Mon objectif est simple : améliorer votre qualité de vie grâce à des solutions naturelles et des thérapies adaptées à vos besoins. </p></div><img src="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" alt="Sona en pleine nature" class="about-image animate" data-delay="300" data-v-025e8f8d></div></section>',
                  2,
                )),
              a('section', b, [
                e[1] || (e[1] = a('h2', { class: 'section-title' }, 'Notre mission', -1)),
                e[2] ||
                  (e[2] = a(
                    'p',
                    { class: 'section-text' },
                    ' Promouvoir une santé durable en combinant les bienfaits de la kinésithérapie moderne et les vertus des remèdes naturels, tout en respectant l’environnement. ',
                    -1,
                  )),
                l(
                  t,
                  {
                    to: '/contact',
                    class: 'btn btn-primary animate',
                    'aria-label': 'Prendre rendez-vous',
                    'data-delay': '500',
                  },
                  { default: c(() => e[0] || (e[0] = [u(' Prendre rendez-vous ')])), _: 1 },
                ),
              ]),
            ])
          )
        }
      )
    },
  }),
  g = v(x, [['__scopeId', 'data-v-025e8f8d']])
export { g as default }

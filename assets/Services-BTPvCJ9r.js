import {
  d as k,
  i as c,
  o as h,
  c as a,
  b as e,
  k as x,
  F as g,
  m as f,
  u as C,
  s as _,
  h as w,
  t as d,
  e as V,
  f as u,
  w as b,
  r as I,
  n as B,
  p as S,
  g as l,
  _ as G,
} from './index.js'
const N = { class: 'services container' },
  z = { class: 'service-list animate-on-scroll' },
  D = ['src', 'alt'],
  E = ['onClick', 'aria-label'],
  F = { class: 'modal-content' },
  U = { id: 'modal-title', class: 'modal-title' },
  L = { class: 'gallery' },
  M = ['src', 'alt'],
  O = { class: 'cta-section animate-on-scroll' },
  P = k({
    __name: 'Services',
    setup(R) {
      const r = c(!1),
        m = c(''),
        i = c([])
      h(() => {
        const n = document.querySelectorAll('.animate-on-scroll'),
          s = new IntersectionObserver(
            (o) => {
              o.forEach((t) => {
                t.isIntersecting && (t.target.classList.add('visible'), s.unobserve(t.target))
              })
            },
            { threshold: 0.2 },
          )
        n.forEach((o) => {
          s.observe(o)
        })
      })
      const y = (n) => {
          r.value = !0
          const s = _.find((o) => o.id === n)
          s && ((m.value = `Galerie - ${s.title}`), (i.value = s.gallery))
        },
        p = () => {
          ;(r.value = !1), (i.value = [])
        }
      return (n, s) => {
        const o = I('router-link')
        return (
          l(),
          a('div', N, [
            s[5] ||
              (s[5] = e(
                'header',
                { class: 'services-header animate-on-scroll' },
                [
                  e('h1', { class: 'section-title' }, 'Services de kinésithérapie'),
                  e(
                    'p',
                    { class: 'section-text' },
                    ' Des soins professionnels adaptés à vos besoins pour améliorer votre mobilité et votre bien-être. ',
                  ),
                ],
                -1,
              )),
            e('div', z, [
              (l(!0),
              a(
                g,
                null,
                f(
                  C(_),
                  (t) => (
                    l(),
                    a('div', { key: t.id, class: 'service card' }, [
                      e('img', { src: t.image, alt: t.title, class: 'service-image' }, null, 8, D),
                      e('h2', null, [
                        e('i', { class: B([t.icon, 'service-icon']) }, null, 2),
                        u(' ' + d(t.title), 1),
                      ]),
                      e('p', null, d(t.description), 1),
                      e(
                        'button',
                        {
                          class: 'btn btn-primary',
                          onClick: (v) => y(t.id),
                          'aria-label': "Voir plus d'images pour " + t.title,
                        },
                        'Voir plus',
                        8,
                        E,
                      ),
                    ])
                  ),
                ),
                128,
              )),
            ]),
            r.value
              ? (l(),
                a(
                  'div',
                  {
                    key: 0,
                    class: 'modal',
                    onClick: w(p, ['self']),
                    role: 'dialog',
                    'aria-labelledby': 'modal-title',
                    'aria-modal': 'true',
                  },
                  [
                    e('div', F, [
                      e(
                        'button',
                        { class: 'close-btn', onClick: p, 'aria-label': 'Fermer la galerie' },
                        s[0] ||
                          (s[0] = [
                            e(
                              'svg',
                              {
                                class: 'close-icon',
                                xmlns: 'http://www.w3.org/2000/svg',
                                viewBox: '0 0 24 24',
                                fill: 'none',
                                stroke: 'currentColor',
                                'stroke-width': '2',
                                'stroke-linecap': 'round',
                                'stroke-linejoin': 'round',
                              },
                              [
                                e('line', { x1: '18', y1: '6', x2: '6', y2: '18' }),
                                e('line', { x1: '6', y1: '6', x2: '18', y2: '18' }),
                              ],
                              -1,
                            ),
                          ]),
                      ),
                      e('h3', U, d(m.value), 1),
                      e('div', L, [
                        (l(!0),
                        a(
                          g,
                          null,
                          f(
                            i.value,
                            (t, v) => (
                              l(),
                              S(
                                o,
                                {
                                  key: v,
                                  to: {
                                    name: 'ImageView',
                                    params: {
                                      imageUrl: encodeURIComponent(t.url),
                                      description: encodeURIComponent(t.description),
                                    },
                                  },
                                },
                                {
                                  default: b(() => [
                                    e(
                                      'img',
                                      { src: t.url, alt: t.description, class: 'gallery-image' },
                                      null,
                                      8,
                                      M,
                                    ),
                                    s[1] ||
                                      (s[1] = e(
                                        'div',
                                        { class: 'gallery-overlay' },
                                        [e('span', { class: 'gallery-text' }, 'Voir en grand')],
                                        -1,
                                      )),
                                  ]),
                                  _: 2,
                                },
                                1032,
                                ['to'],
                              )
                            ),
                          ),
                          128,
                        )),
                      ]),
                    ]),
                  ],
                ))
              : x('', !0),
            e('section', O, [
              s[3] ||
                (s[3] = e(
                  'h2',
                  { class: 'section-title' },
                  [
                    e('i', { class: 'fas fa-calendar-check cta-icon' }),
                    u(' Prêt à prendre soin de vous ? '),
                  ],
                  -1,
                )),
              s[4] ||
                (s[4] = e(
                  'p',
                  { class: 'section-text' },
                  ' Contactez-nous pour réserver une séance ou pour plus d’informations sur nos services. ',
                  -1,
                )),
              V(
                o,
                { to: '/contact', class: 'btn btn-primary' },
                {
                  default: b(
                    () =>
                      s[2] ||
                      (s[2] = [
                        e('i', { class: 'fas fa-phone-alt btn-icon' }, null, -1),
                        u(' Prendre rendez-vous '),
                      ]),
                  ),
                  _: 1,
                },
              ),
            ]),
          ])
        )
      }
    },
  }),
  $ = G(P, [['__scopeId', 'data-v-c1d6a45c']])
export { $ as default }

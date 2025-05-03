import {
  _ as d,
  i as c,
  c as o,
  b as a,
  j as v,
  k as m,
  v as _,
  l as h,
  F as f,
  m as k,
  f as T,
  t as y,
  g as l,
} from './index.js'
const g = { class: 'todos' },
  x = ['onClick'],
  V = { key: 0 },
  j = {
    __name: 'Todos',
    setup(B) {
      const t = c([]),
        e = c(''),
        i = () => {
          e.value.trim() && (t.value.push(e.value), (e.value = ''))
        },
        p = (u) => {
          t.value.splice(u, 1)
        }
      return (u, s) => (
        l(),
        o('div', g, [
          s[1] || (s[1] = a('h1', null, 'Liste de tâches', -1)),
          v(
            a(
              'input',
              {
                'onUpdate:modelValue': s[0] || (s[0] = (n) => (e.value = n)),
                placeholder: 'Ajouter une tâche',
                onKeyup: h(i, ['enter']),
              },
              null,
              544,
            ),
            [[_, e.value]],
          ),
          a('ul', null, [
            (l(!0),
            o(
              f,
              null,
              k(
                t.value,
                (n, r) => (
                  l(),
                  o('li', { key: r }, [
                    T(y(n) + ' ', 1),
                    a('button', { onClick: (C) => p(r) }, 'Supprimer', 8, x),
                  ])
                ),
              ),
              128,
            )),
          ]),
          t.value.length ? m('', !0) : (l(), o('p', V, 'Aucune tâche pour le moment.')),
        ])
      )
    },
  },
  b = d(j, [['__scopeId', 'data-v-46d62acd']])
export { b as default }

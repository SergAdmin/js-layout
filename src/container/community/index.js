import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')

page.append(title)

// //===

const buttonList = createElement('div', 'nav__buttons')

const BUTTONS = [
  {
    button: [
      { text: 'База знань' },
      { text: 'Інформація' },
    ],
  },
]

BUTTONS.forEach((postData) => {
  const but = createElement('button')
  page.append(but)

  postData.button.forEach((button) => {
    const buttons = createElement(
      'button',
      `button list`,
      //'Нечто',
      button.text,
    )
    buttonList.append(buttons)
  })

  page.append(buttonList)
})

//===

const imgList = createElement('div')

const HEADER_IMG_LIST = [
  {
    src: '/img/community.png',
  },
]

HEADER_IMG_LIST.forEach((params) => {
  const img = createElement('img')

  Object.entries(params).forEach(([key, value]) => {
    img[key] = value
  })

  imgList.append(img)
})

page.append(imgList)

//===

const POST_LIST = [
  {
    post_header: `Що таке база знань?`,
    info: `База знаний — база данных, содержащая правила вывода и информацию о 
        человеческом опыте и знаниях в некоторой предметной
        области. В самообучающихся системах база знаний
        также содержит информацию, являющуюся результатом
        решения предыдущих задач.`,
  },
]

const createPost = () => {
  const postList = createElement('main', 'post__list')

  POST_LIST.forEach((postData) => {
    //===

    //===
    const post = createElement('div', 'post')

    //===
    const postHeader = createElement(
      'div',
      'post__header',
      postData.post_header,
    )

    //===
    const infoParagraf = createElement(
      'p',
      'post__info',
      postData.info,
    )

    //===

    //===

    post.append(postHeader, infoParagraf)

    //===

    postList.append(post)
  })

  return postList
}

//===

const post = createPost()
page.append(post)

//===
const button__come = createElement(
  'button',
  'button button__come',
  `Перейти до ком'юніті у
  Телеграм`,
)

page.append(button__come)

//===

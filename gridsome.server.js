// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')
const nodeExternals = require('webpack-node-externals')

module.exports = function (api) {

  
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          allowlist: [/^vuetify/]
        })
      ])
    }
  })

  api.loadSource(async actions => {
    const { data } = await axios.get('https://cedricverdida.herokuapp.com/posts/')

    const collection = actions.addCollection({
      typeName: 'Post'
    })

    for (const post of data) {
      collection.addNode({
        id: post.id,
        title: post.title,
        subdesc: post.subdescription,
        category: post.categories[0].id,
        categoryname: post.categories[0].name,
        description: post.description,
        images: post.image.formats.small.url
      })
    }
  })

  
}

<template>
  <Layout>

<v-container background-color="#2A363B">

<h3 class="overline text-center pa-2">
<v-icon>mdi-sword-cross</v-icon>  My Projects
</h3>

  <v-row>
      <v-col>
            <v-tabs grow>
              <v-tab v-on:click="tab = 0">All</v-tab>
              <v-tab
              v-for="(cat,c) in categories"
              :key="c" v-on:click="tab = cat.id">{{ cat.name }}</v-tab>
          </v-tabs>

        <v-row justify="space-around">
          
          <v-container class="mt-5" v-if="list.length == 0">

              <v-row>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-skeleton-loader
                    v-bind="attrs"
                    type="card-avatar, article"
                  ></v-skeleton-loader>
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-skeleton-loader
                    v-bind="attrs"
                    type="card-avatar, article"
                  ></v-skeleton-loader>
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-skeleton-loader
                    v-bind="attrs"
                    type="card-avatar, article"
                  ></v-skeleton-loader>
                </v-col>
                

              </v-row>

            </v-container>



          
              <v-card
                v-if="list.length != 0"
                v-for="(post,key) in list" :key="post.node.id"
                width="350"
                class="mt-5"
                data-aos="fade-in"
              >

                <v-expand-x-transition>
                    <v-img
                      :lazy-src="`post.node.images`"
                      :src="`post.node.images`"
                      height="200px"
                      :alt="`post.node.images`"
                    />
                </v-expand-x-transition>

                <v-card-title class="overline">
                  {{post.node.title}}
                </v-card-title>

                <v-card-subtitle class="caption">
                  {{post.node.subdesc | limitString}}        
                </v-card-subtitle>


                  <v-card-actions>
                    <v-btn
                      text
                      
                      @click="reveal = true"
                      v-on:click="viewDisplay(key,post.node.id)"
                    >
                        <v-icon dark>
                        mdi-circle-expand
                      </v-icon>
                        Expand
                    </v-btn>

                    
                    <Show @click="viewMore(key)" :title="previewtitledialog" :description="previewdescdialog" :visible="showScheduleForm" @close="showScheduleForm=false" />
              

                  </v-card-actions>

                  <v-expand-transition>
                    <v-card
                      v-if="reveal && post.node.id == OpenIndex"
                      class="transition-fast-in-fast-out v-card--reveal"
                      style="height: 100%;"
                    >
                      <v-card-text class="pb-0">
                        <p class="display-1 text--primary">
                          {{previewtitlecard}}
                        </p>
                        <p>{{previewdesccard}}</p>
                      </v-card-text>
                      <v-card-actions class="pt-0">
                        <v-btn
                          text
                          color="teal accent-4"
                          @click="reveal = false"
                        >
                          Close
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-expand-transition>

              </v-card>

        </v-row>
      </v-col>
  </v-row>
</v-container>


  </Layout>
</template>

<page-query>
query{
Post:allPost{
    edges{
      node{
        id
        title
        description
        category
        categoryname
        subdesc
        images
      }
    }
  }
}
</page-query>


<script>

import AOS from '../../node_modules/aos/dist/aos';

import Show from '~/components/show'


export default {

  metaInfo: {
    title: 'Hello, world!'
  },

  data () {
    return {
      attrs: {
        class: 'mb-6',
        boilerplate: false,
        elevation: 2,
      },
      tab:0,
      list: [],
      categories: [],
      reveal: false,
      isOpen: null,

      previewtitlecard: '',
      previewdesccard: '',

      previewtitledialog: '',
      previewdescdialog: '',

      showScheduleForm: false

    }
  },
  watch: {
    tab(val) {
      if(this.tab === 0){
        this.showAllEvents()
      } else{
        this.showEventsByType(val)
      }
    }
  },
  methods:{
    openMyDialog () {
      bus.$emit('dialog', true) // emit the event to the bus
    },
    createCategory : function (){

      let temp = [];
      this.list.forEach(element => {
     
          if(temp.length == 0){
              temp.push({id:element.node.category,name:element.node.categoryname});
          }else{

            
            if(temp.findIndex( s => s.id == element.node.category) == -1){
              temp.push({id:element.node.category,name:element.node.categoryname});
            }
          }
      });

      return temp;
    },
    showAllEvents() {
         this.list = this.$page.Post.edges
    },
    showEventsByType(val) {
        this.list = this.$page.Post.edges.filter((edge) => {
        return edge.node.category === val
        })
    },
    viewDisplay : function(key,id){
      this.isOpen = id
      let view = this.list[key]
      this.previewtitlecard = view.node.title;
      this.previewdesccard = view.node.subdesc;
    },
    viewMore : function(key){
     
      let view = this.list[key]
      this.previewtitledialog = view.node.title;
      this.previewdescdialog = view.node.description;
    }
  },
  computed:{
    OpenIndex(){
      return this.isOpen
    }
  },
  components: {
    Show
  },
  filters:{
      limitString : function (str){
        var length = 150;
        var trimmedString = str.substring(0, length);

        return trimmedString + '...';

      }
  },
  mounted(){
    AOS.init();
    this.list = this.$page.Post.edges
    this.categories = this.createCategory();
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>

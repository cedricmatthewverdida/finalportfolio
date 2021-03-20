<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
       max-width="900px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          color="red"
          v-bind="attrs"
          v-on="on"

          @click="$emit('click')"
        >
        <v-icon dark>
mdi-dots-horizontal-circle-outline
        </v-icon>
          View More
        </v-btn>
      </template>

      <v-card>

        <v-card-title class="headline">
          {{title}}
        </v-card-title>

        <v-card-text style="word-wrap: break-word;" v-html="readDescription(description)">

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>



<script>
const marked = require("marked");


  export default {
    props: {
    title: String,
    description: String
    },
    data () {
      return {
        dialog: false,
      }
    },

    methods:{
        readDescription: function (str){
            return marked(str);
        }
    }
  }
</script>
<template>
    <v-container>

        <v-hover
            v-slot="{ hover }"
        >
            <v-card
            :elevation="hover ? 12 : 2"
            class="mx-auto"
            height="350"
            max-width="1000"
            >
            <v-card-text class="my-4 text-center title">
                <v-container>

            
                
                      

                            <h3 class="caption">Get in touch</h3>
                            <small class="caption">Let's create something awesome together.</small>
                                <div class="mt-2">
                                    <v-btn
                                        v-for="(icon,i) in icons"
                                        :key="i"
                                        class="mx-4 mt-5"
                                        icon
                                        :href="icon.link"
                                        target="_blank"
                                    >
                                        <v-icon size="24px">
                                        {{ icon.icon }}
                                        </v-icon>
                                    </v-btn>
                                </div> 
                          
                           

               
              

                </v-container>

            </v-card-text>



            </v-card>
        </v-hover>

    </v-container>
</template>

<script>
import AOS from '../../node_modules/aos/dist/aos';
import Typed from 'typed.js';
  export default {
    data: () => ({
        icons: [
          {
            icon: 'mdi-facebook',
            link: 'https://www.facebook.com/chryhesmic/'
          },

          {
            icon: 'mdi-twitter',
            link: 'https://twitter.com/XhierraS'
          },

          {
            icon: 'mdi-linkedin',
            link: 'https://www.linkedin.com/in/ced-matthew-7116741b1/'
          },

          {
            icon: 'mdi-github',
            link: 'https://github.com/azumic'
          }
      ]
    }),
    methods:{
        typed : function (){

            var options = {
            strings: [`Wassup Bitch Itcha boiced !`, 'Hello I am pro H A H A'],
            typeSpeed: 90,
            loop: true
            };

            var typed = new Typed('.Hello', options);

        }
    },
    mounted(){
        AOS.init();
        // this.typed();
    }
  }
</script>

<style>
  #lateral .v-btn--example {
    bottom: 0;
    position: absolute;
    margin: 0 0 16px 16px;
  }
</style>
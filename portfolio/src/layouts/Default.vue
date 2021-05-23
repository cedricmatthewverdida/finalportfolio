<template>
  <v-app>



      <v-parallax
        dark
        src="https://i.imgur.com/JqbRgSK.gif"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            class="text-center"
            cols="12"
          >
            <h1 class="display-1 font-weight-thin mb-4">
              Welcome
            </h1>
            
            <div>
            <small class="subheading font-weight-thin p-3"/>
            </div>
            <v-btn
                v-for="(icon,i) in icons"
                :key="i"
                class="mx-4 white--text mt-5"
                icon
                :href="icon.link"
                target="_blank"
              >
                <v-icon size="24px">
                  {{ icon.icon }}
                </v-icon>
              </v-btn>

              <div class="text-xs-center mt-5">
                  <v-btn
                    icon
                    dark
                  >
                    <v-icon @click="changetheme">{{check_theme}}</v-icon>
                  </v-btn>
              </div>

          </v-col>
        </v-row>
      </v-parallax>





        <v-main v-if="tab == 0">
        <slot/>
        </v-main>

        <About v-if="tab == 1"/>
        <HireMe v-if="tab == 2"/>




         <div class="text-center">

            <v-snackbar
              v-model="snackbar"
              :timeout="timeout"
            >
              {{ text }}

              <template v-slot:action="{ attrs }">
                <v-btn
                  color="red"
                  text
                  v-bind="attrs"
                  @click="snackbar = false"
                >
                  Close
                </v-btn>
              </template>
            </v-snackbar>
          </div>
      
        <v-footer
          dark
          padless
          class="mt-3"
        >
          <v-card
            flat
            tile
            class="indigo lighten-1 white--text text-center"
          >
            <v-card-text>
              <v-btn
                  v-for="(icon,j) in icons"
                  :key="j"
                  class="mx-4 white--text mt-5"
                  icon
                  :href="icon.link"
                  target="_blank"
                >
                <v-icon size="24px">
                  {{ icon.icon }}
                </v-icon>
              </v-btn> 
            </v-card-text>

            <v-card-text class="white--text pt-0">
              “When to use iterative development? You should use iterative development only on projects that you want to succeed.” – Martin Fowler If I do a job in 30 minutes it's because I spent 10 years learning how to do that in 30 minutes. You owe me for the years, not the minutes.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
              {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
            </v-card-text>
          </v-card>
        </v-footer>

        <v-bottom-navigation
          :value="value"
          horizontal
          app
        >


          <v-btn v-on:click="tab = 1">
            <span>About</span>

            <v-icon>mdi-school</v-icon>
          </v-btn>

          <v-btn v-on:click="tab = 0">
            <span>Home</span>

            <v-icon>mdi-home</v-icon>
          </v-btn>
          
          <v-btn v-on:click="tab = 2">
            <span>Hire me</span>

            <v-icon>mdi-star</v-icon>
          </v-btn>

        </v-bottom-navigation>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>


<script>
import baffle from 'baffle';
import Typed from 'typed.js';
import About from '~/components/about'
import HireMe from '~/components/hireme'
  export default {
    data: () => ({

      snackbar: false,
      text: 'My timeout is set to 2000.',
      timeout: 2000,

      thememode: undefined,
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
      ],
      value: 1,
      tab: 0
    }),
    computed:{
     check_theme : function (){
          return this.thememode ? 'mdi-sunglasses' : 'mdi-moon-waning-crescent'
      }
    },
    methods:{
      theme() {
        return this.$vuetify.theme.dark;
      },
      changetheme : function (){
        !this.theme() ? this.$vuetify.theme.dark = true : this.$vuetify.theme.dark = false;
        this.thememode = this.theme()
        this.snackbar = true;

        if(this.theme()){
          this.text = "Baby lets turn down the light and close the door!!!";
        }else{
          this.text = "You are my sunshine my only sunshine!!";
        }
      },
      text_reveal : function (){
        let b = baffle('.display-1', {
            characters: '*@&#!)@!#1234abcdEF',
            speed: 200
        });

      b.reveal(1000);
      },
      typed : function (){

        var options = {
          strings: ['<b>Hi</b> i am Cedric', 'I am a <b>web developer</b>'],
          typeSpeed: 90,
          loop: true
        };

        var typed = new Typed('.subheading', options);

      }
    },
    components: {
      About,
      HireMe
    },
    mounted(){
      this.text_reveal();
      this.typed();
      this.thememode = this.theme();
    }
  }
</script>